import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { getPortfolioItems, getWhatsappUrl } from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface HomeFeaturedWorksProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

const SPOTLIGHT_ID = 'boldx-mancare-showroom';
const FEATURED_IDS = ['fresh-wind-bottle', 'nissou-chocolaterie', 'promotor-g12'];

export function HomeFeaturedWorks({ onNavigate, lang }: HomeFeaturedWorksProps) {
  const t = UI_COPY[lang].homeWorks;
  const tp = UI_COPY[lang].portfolio;
  const isRtl = lang === 'ar';
  const allItems = getPortfolioItems(lang);
  const spotlight = allItems.find((item) => item.id === SPOTLIGHT_ID);
  const featured = allItems.filter((item) => FEATURED_IDS.includes(item.id));

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-red-600">{t.kicker}</p>
            <h2
              className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h2>
          </div>

          <a
            href={PAGE_HASHES.works}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('works');
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-red-600"
          >
            <span>{t.allCta}</span>
            {isRtl ? (
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            )}
          </a>
        </div>

        {/* Spotlight Showcase Card on Home Page */}
        {spotlight && (
          <article className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid lg:grid-cols-12">
            <a
              href={PAGE_HASHES.works}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('works');
              }}
              className="group relative block aspect-[2/3] w-full overflow-hidden bg-slate-950 lg:col-span-5 lg:aspect-[3/4]"
            >
              <img
                src={spotlight.imageSrc}
                alt={spotlight.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-red-600 sm:text-sm">
                  <span>{t.spotlightLabel}</span>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span className="text-slate-600">{spotlight.categoryLabel}</span>
                </div>

                <h3
                  className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
                  style={{ textWrap: 'balance' }}
                >
                  {spotlight.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {spotlight.summary}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-slate-200 py-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      {tp.dimensionsLabel}
                    </dt>
                    <dd className="mt-1 font-mono-nums font-bold text-slate-950">
                      {spotlight.dimensions}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      {tp.shelvesLabel}
                    </dt>
                    <dd className="mt-1 font-mono-nums font-bold text-slate-950">
                      {spotlight.shelvesCount} {tp.shelvesUnit}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      {tp.maxLoadLabel}
                    </dt>
                    <dd className="mt-1 font-mono-nums font-bold text-slate-950">
                      {spotlight.maxLoadKg} {tp.kgUnit}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  {spotlight.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getWhatsappUrl(
                    lang,
                    tp.waTemplate(spotlight.title, spotlight.dimensions),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-red-600"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.spotlightCta}</span>
                </a>

                <a
                  href={PAGE_HASHES.works}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('works');
                  }}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:border-slate-900 focus-visible:outline-2 focus-visible:outline-slate-900"
                >
                  <span>{tp.inspectBtn}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
            >
              <a
                href={PAGE_HASHES.works}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('works');
                }}
                className="block"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-nums">{item.dimensions}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-950 transition-colors group-hover:text-red-600">
                    {item.title}
                  </h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
