import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel, type Content } from '@google/genai';
import { WAIL_DICO_KNOWLEDGE_BASE } from './server/siteKnowledge.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

interface IncomingMessage {
  role: 'user' | 'assistant';
  text: string;
}

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function buildSystemInstruction(lang: string): string {
  const langLabel =
    lang === 'ar'
      ? 'Arabic (العربية — أو الدارجة الجزائرية إذا خاطبك الزبون بها، بأسلوب مهني ومفهوم)'
      : lang === 'en'
        ? 'English'
        : 'French (Français)';

  return `You are the official customer advisor and AI assistant for WAIL DICO, a custom POS display stands (présentoirs), storefront signage, academy 3D murals, and exhibition booth manufacturer based in Khraicia, Algiers, Algeria.

CRITICAL RULES:
1. Answer ONLY using the verified information in the WAIL DICO KNOWLEDGE BASE below. Never invent prices in DA, fake projects, fake phone numbers, or fake delivery promises.
2. Material accuracy: WAIL DICO manufactures its display stands and exhibition structures primarily out of high-density **Forex (expanded PVC / ألواح الفوركس)** cut by CNC/laser with HD UV printing (NOT MDF or wood). Metal wire/reinforcements or acrylic are used when heavy product loads or dividers require them, and exterior shopfronts use Alucobond + 3D Plexi/Forex LED letters.
3. Language: Reply in the same language the customer writes in (Arabic, Algerian Darja, French, or English). If their message is ambiguous or very short, default to ${langLabel}.
4. Tone & Format: Be helpful, concise, clear, and conversion-focused (short paragraphs or crisp bullet points, usually 2–6 lines unless detailed specs are requested).
5. Quotes & Next Steps: Whenever a customer asks for pricing, custom dimensions, or wants to order, explain what factors determine the quote (dimensions, shelf count, Forex thickness, LED/metal options, quantity) and direct them to WhatsApp **0560 29 50 48** (or direct call **0554 09 44 97**) or the online **Quote Configurator** on the site.

=== WAIL DICO KNOWLEDGE BASE ===
${WAIL_DICO_KNOWLEDGE_BASE}`;
}

const PRIMARY_MODEL = 'gemini-4-hydrogen';
const FALLBACK_MODEL = 'gemini-3.1-flash-lite';

async function generateWithRetry(
  ai: GoogleGenAI,
  contents: Content[],
  systemInstruction: string,
  maxRetries = 1
): Promise<string> {
  const attempts: { model: string; useLowThinking: boolean }[] = [
    { model: PRIMARY_MODEL, useLowThinking: true },
    { model: FALLBACK_MODEL, useLowThinking: false },
  ];

  let lastError: unknown;

  for (const target of attempts) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model: target.model,
          contents,
          config: {
            systemInstruction,
            ...(target.useLowThinking
              ? { thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } }
              : {}),
          },
        });
        const text = response.text?.trim();
        if (!text) {
          throw new Error('Empty response received from Gemini API.');
        }
        return text;
      } catch (err) {
        lastError = err;
        const status = (err as { status?: number })?.status;
        const isRetryable = !status || status >= 500 || status === 429;
        if (attempt < maxRetries && isRetryable) {
          const delayMs = 500 * Math.pow(2, attempt);
          await new Promise((resolve) => setTimeout(resolve, delayMs));
          continue;
        }
        // Only try fallback model on transient 503/5xx overload
        if (status === 503 || status === 500 || status === 502 || status === 504) {
          break;
        }
        throw err;
      }
    }
  }
  throw lastError;
}

function extractReadableErrorMessage(err: unknown): string {
  const raw = err instanceof Error ? err.message : 'Unexpected Gemini API error.';
  try {
    const parsed = JSON.parse(raw) as { error?: { message?: string } };
    if (parsed?.error?.message) {
      return parsed.error.message;
    }
  } catch {
    // Not a JSON error string
  }
  return raw;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/chat', async (req, res) => {
    const ai = getAiClient();
    if (!ai) {
      res.status(503).json({
        errorCode: 'MISSING_API_KEY',
        error:
          'Gemini API key is not configured. Please check GEMINI_API_KEY in Settings > Secrets.',
      });
      return;
    }

    const body = req.body as {
      messages?: IncomingMessage[];
      lang?: string;
    };

    const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
    const cleaned = rawMessages
      .filter(
        (m): m is IncomingMessage =>
          Boolean(m) &&
          (m.role === 'user' || m.role === 'assistant') &&
          typeof m.text === 'string' &&
          m.text.trim().length > 0
      )
      .slice(-12);

    if (cleaned.length === 0 || cleaned[cleaned.length - 1].role !== 'user') {
      res.status(400).json({
        errorCode: 'INVALID_REQUEST',
        error: 'Please enter a valid message.',
      });
      return;
    }

    const contents: Content[] = cleaned.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.text.trim().slice(0, 2000) }],
    }));

    const lang =
      body?.lang === 'ar' || body?.lang === 'en' || body?.lang === 'fr'
        ? body.lang
        : 'fr';

    try {
      const reply = await generateWithRetry(
        ai,
        contents,
        buildSystemInstruction(lang)
      );
      res.json({ reply });
    } catch (err) {
      const status = (err as { status?: number })?.status ?? 500;
      const message = extractReadableErrorMessage(err);

      if (
        status === 400 ||
        status === 403 ||
        message.includes('API_KEY_INVALID') ||
        message.includes('PERMISSION_DENIED')
      ) {
        res.status(status).json({
          errorCode: 'API_KEY_INVALID',
          error:
            'Gemini API key appears invalid or lacks permission. Please verify it in Settings > Secrets.',
        });
        return;
      }

      if (status === 429 || message.includes('RESOURCE_EXHAUSTED')) {
        res.status(429).json({
          errorCode: 'QUOTA_EXCEEDED',
          error:
            'Gemini API rate limit or quota reached. Please wait a moment and try again.',
        });
        return;
      }

      res.status(status >= 400 && status < 600 ? status : 500).json({
        errorCode: 'UPSTREAM_ERROR',
        error: message,
      });
    }
  });

  const distDir = path.resolve(__dirname, 'dist');
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else if (fs.existsSync(distDir)) {
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`WAIL DICO server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
