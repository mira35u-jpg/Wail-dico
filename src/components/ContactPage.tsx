import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import {
  CONTACT_INFO,
  getLocationLabel,
  getWhatsappUrl,
} from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';
import { TikTokIcon } from './TikTokIcon';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function ContactPage({ onNavigate, lang }: ContactPageProps) {
  const [copiedKey, setCopiedKey] = useState<'wa' | 'tel' | null>(null);
  const t = UI_COPY[lang].contact;
  const isRtl = lang === 'ar';

  const handleCopy = async (text: string, key: 'wa' | 'tel') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Clipboard fallback ignored safely
    }
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold text-red-600">{t.kicker}</p>
          <h1
            className="mx-auto mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            {t.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsappUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 py-3 text-base font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{t.waBtn}</span>
            </a>

            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-slate-300 bg-slate-950 px-6 py-3 text-base font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{t.callBtn}</span>
            </a>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-blue-700 bg-blue-600 px-6 py-3 text-base font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Facebook className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{t.fbBtn}</span>
            </a>

            <a
              href={CONTACT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-slate-900 bg-slate-900 px-6 py-3 text-base font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <TikTokIcon className="h-5 w-5 shrink-0" />
              <span>{t.tiktokBtn}</span>
            </a>
          </div>
        </div>

        {/* Direct Channels Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div>
              <p className="text-xs font-medium text-slate-500">{t.waLabel}</p>
              <p
                dir="ltr"
                className="mt-1 font-mono-nums text-base font-bold text-slate-950 sm:text-lg"
              >
                {CONTACT_INFO.whatsappDisplay}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy('0560295048', 'wa')}
              aria-label={t.copyBtn}
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              {copiedKey === 'wa' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{t.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{t.copyBtn}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div>
              <p className="text-xs font-medium text-slate-500">{t.telLabel}</p>
              <p
                dir="ltr"
                className="mt-1 font-mono-nums text-base font-bold text-slate-950 sm:text-lg"
              >
                {CONTACT_INFO.phoneDisplay}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy('0554094497', 'tel')}
              aria-label={t.copyBtn}
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              {copiedKey === 'tel' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{t.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{t.copyBtn}</span>
                </>
              )}
            </button>
          </div>

          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-blue-300 hover:bg-blue-50/40"
          >
            <div className="flex items-center gap-3">
              <Facebook
                className="h-5 w-5 shrink-0 text-blue-600"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {t.fbLabel}
                </p>
                <p className="mt-1 text-base font-bold text-slate-950">
                  WAIL DICO
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 whitespace-nowrap shrink-0">
              <span>{t.fbAction}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>

          <a
            href={CONTACT_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3 min-w-0">
              <TikTokIcon className="h-5 w-5 shrink-0 text-slate-950" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500">
                  {t.tiktokLabel}
                </p>
                <p
                  dir="ltr"
                  className="mt-1 truncate text-sm font-bold text-slate-950"
                >
                  {CONTACT_INFO.tiktokHandle}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 whitespace-nowrap shrink-0">
              <span>{t.tiktokAction}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <MapPin className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-slate-500">{t.locLabel}</p>
              <p className="mt-1 text-base font-bold text-slate-950">
                {getLocationLabel(lang)}
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-red-600" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-slate-950">
                {t.hoursTitle}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t.hoursBody}
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6">
            <div>
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-red-600" aria-hidden="true" />
                <h2 className="font-display text-lg font-bold text-slate-950">
                  {t.builderTitle}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {t.builderBody}
              </p>
            </div>

            <div className="mt-5">
              <a
                href={PAGE_HASHES.process}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('process');
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
              >
                <span>{t.builderLink}</span>
                {isRtl ? (
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
