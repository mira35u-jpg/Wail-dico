import { ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  CONTACT_INFO,
  getLocationLabel,
  getWhatsappUrl,
} from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function HeroSection({ onNavigate, lang }: HeroSectionProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const t = UI_COPY[lang].hero;
  const isRtl = lang === 'ar';

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-slate-950 text-white lg:min-h-[640px]"
    >
      {/* Full-bleed Hero Artwork */}
      <div className="absolute inset-0 -z-10">
        {!heroImgError ? (
          <img
            src={CONTACT_INFO.heroSrc}
            alt="WAIL DICO — Conception 3D, découpe CNC et fabrication de présentoirs"
            referrerPolicy="no-referrer"
            onError={() => setHeroImgError(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-red-950" />
        )}

        {/* Measured Contrast Scrim adapted to reading direction while preserving CNC & stand clarity */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            isRtl
              ? 'bg-gradient-to-l from-slate-950/95 via-slate-950/75 to-slate-950/20 lg:via-slate-950/65 lg:to-slate-950/10'
              : 'bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20 lg:via-slate-950/65 lg:to-slate-950/10'
          }`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/35"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 sm:text-sm">
            <span>{t.kicker}</span>
            <span aria-hidden="true" className="text-red-500">
              ·
            </span>
            <span>{getLocationLabel(lang)}</span>
          </p>

          <h1
            className="font-display font-extrabold tracking-tight text-white leading-[1.16]"
            style={{
              fontSize: 'clamp(2.125rem, 4vw, 3.35rem)',
              textWrap: 'balance',
            }}
          >
            {t.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsappUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 py-3 text-base font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{t.primaryCta}</span>
            </a>

            <a
              href={PAGE_HASHES.works}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('works');
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-slate-950/60 px-5 py-3 text-base font-semibold text-white backdrop-blur-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-white/50 hover:bg-slate-900/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>{t.secondaryCta}</span>
              {isRtl ? (
                <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-red-400"
            >
              <Phone className="h-4 w-4 text-red-500" aria-hidden="true" />
              <span>{t.directCall}</span>
              <span dir="ltr" className="font-mono-nums">
                {CONTACT_INFO.phoneDisplay}
              </span>
            </a>
            <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
              |
            </span>
            <span className="font-medium text-slate-300">{t.strip1}</span>
            <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
              |
            </span>
            <span className="font-medium text-slate-300">{t.strip2}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
