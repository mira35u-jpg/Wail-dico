import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface TestimonialsProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function Testimonials({ onNavigate, lang }: TestimonialsProps) {
  const t = UI_COPY[lang].testimonials;
  const isRtl = lang === 'ar';

  return (
    <section
      id="testimonials"
      className="border-t border-slate-200 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-red-600">{t.kicker}</p>
            <h2
              className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
              <span>{t.summaryStats[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.summaryStats[1]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.summaryStats[2]}</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (7+5, 6+6) */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {t.items.map((review, idx) => {
            const colSpan =
              idx === 0
                ? 'lg:col-span-7 bg-slate-50'
                : idx === 1
                  ? 'lg:col-span-5 bg-white'
                  : 'lg:col-span-6 bg-white';

            return (
              <article
                key={review.id}
                className={`flex flex-col justify-between rounded-xl border border-slate-200 p-6 sm:p-8 ${colSpan}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono-nums text-base font-bold text-slate-950 sm:text-lg">
                        {review.metric}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {review.standSpecs}
                      </p>
                    </div>
                    <Quote
                      className="h-5 w-5 shrink-0 text-slate-300"
                      aria-hidden="true"
                    />
                  </div>

                  <blockquote className="mt-5 text-base leading-relaxed text-slate-700">
                    “{review.quote}”
                  </blockquote>
                </div>

                <footer className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-slate-200 pt-5">
                  <div>
                    <p className="font-display text-sm font-bold text-slate-950 sm:text-base">
                      {review.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                      <span>{review.role}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{review.company}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{review.location}</span>
                    </p>
                  </div>

                  <a
                    href={PAGE_HASHES.works}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('works');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600 sm:text-sm"
                  >
                    <span>{t.ctaWorks}</span>
                    {isRtl ? (
                      <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                  </a>
                </footer>
              </article>
            );
          })}
        </div>

        {/* Bottom Action Row */}
        <div className="mt-8 flex flex-wrap items-center justify-end gap-4">
          <a
            href={PAGE_HASHES.process}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('process');
            }}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-red-600"
          >
            <span>{t.ctaQuote}</span>
            {isRtl ? (
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
