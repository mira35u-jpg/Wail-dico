import {
  Bot,
  Loader2,
  MessageCircle,
  RotateCcw,
  Send,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getWhatsappUrl } from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import type { PageId } from '../navigation';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

interface AiAssistantWidgetProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

function renderFormattedText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={lineIdx} className="block min-h-[1.25em]">
        {parts.map((part, partIdx) => {
          if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
            return (
              <strong key={partIdx} className="font-bold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={partIdx}>{part}</span>;
        })}
      </span>
    );
  });
}

export function AiAssistantWidget({ lang, onNavigate }: AiAssistantWidgetProps) {
  const t = UI_COPY[lang].aiAssistant;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [lastFailedHistory, setLastFailedHistory] = useState<ChatMessage[] | null>(
    null
  );

  const listEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isLoading, errorText]);

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  const sendHistoryToApi = async (historyToSend: ChatMessage[]) => {
    setIsLoading(true);
    setErrorText(null);
    setLastFailedHistory(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lang,
          messages: historyToSend.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const rawBody = await response.text();
      let data: { reply?: string; error?: string } = {};
      try {
        data = JSON.parse(rawBody) as { reply?: string; error?: string };
      } catch {
        data = {};
      }

      if (!response.ok || !data.reply) {
        setErrorText(data.error || `${t.errNetwork} (HTTP ${response.status})`);
        setLastFailedHistory(historyToSend);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          text: data.reply as string,
        },
      ]);
    } catch {
      setErrorText(t.errNetwork);
      setLastFailedHistory(historyToSend);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (textOverride?: string) => {
    const raw = (textOverride ?? inputValue).trim();
    if (!raw || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: raw,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    if (!textOverride) {
      setInputValue('');
    }
    await sendHistoryToApi(nextHistory);
  };

  const handleReset = () => {
    if (isLoading) return;
    setMessages([]);
    setErrorText(null);
    setLastFailedHistory(null);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-4 end-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:end-6">
      {isOpen && (
        <section
          aria-label={t.title}
          className="flex max-h-[min(560px,74dvh)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[min(600px,80vh)] sm:w-[400px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-950 px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-display text-sm font-bold text-white">
                  {t.title}
                </h2>
                <p className="truncate text-[11px] text-slate-300">{t.subtitle}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isLoading}
                  title={t.resetBtn}
                  aria-label={t.resetBtn}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white disabled:opacity-50"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={t.closeBtn}
                aria-label={t.closeBtn}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4 text-sm">
            {/* Initial Assistant Greeting */}
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Sparkles className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
              </span>
              <div className="max-w-[85%] rounded-2xl rounded-ts-sm border border-slate-200 bg-white px-3.5 py-2.5 text-slate-800 shadow-xs leading-relaxed">
                {t.welcome}
              </div>
            </div>

            {/* Starter Quick Questions */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-1.5 ps-9">
                {t.quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleSend(question)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-start text-xs font-semibold text-slate-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation History */}
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!isUser && (
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                      <Sparkles
                        className="h-3.5 w-3.5 text-red-400"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      isUser
                        ? 'rounded-te-sm bg-red-600 text-white font-medium'
                        : 'rounded-ts-sm border border-slate-200 bg-white text-slate-800 shadow-xs space-y-1'
                    }`}
                  >
                    {isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Loader2
                    className="h-3.5 w-3.5 animate-spin text-red-400"
                    aria-hidden="true"
                  />
                </span>
                <div className="rounded-2xl rounded-ts-sm border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-500">
                  {t.thinking}
                </div>
              </div>
            )}

            {/* API Error Banner */}
            {errorText && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800"
              >
                <p className="font-medium leading-relaxed">{errorText}</p>
                {lastFailedHistory && (
                  <button
                    type="button"
                    onClick={() => sendHistoryToApi(lastFailedHistory)}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1 font-bold text-white transition-colors hover:bg-red-700"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>{t.retryBtn}</span>
                  </button>
                )}
              </div>
            )}

            <div ref={listEndRef} />
          </div>

          {/* Direct Handoff Strip */}
          <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-white px-3.5 py-2">
            <a
              href={getWhatsappUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{t.waAction}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onNavigate('process');
                setIsOpen(false);
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
              <span>{t.configAction}</span>
            </button>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void handleSend();
            }}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.placeholder}
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              aria-label={t.sendBtn}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </form>
        </section>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? t.closeBtn : t.fabAria}
        className="group inline-flex h-13 items-center gap-2.5 rounded-full border border-slate-800 bg-slate-950 px-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:scale-105">
          {isOpen ? <X className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </span>
        <span className="whitespace-nowrap">{isOpen ? t.closeBtn : t.fabLabel}</span>
      </button>
    </div>
  );
}
