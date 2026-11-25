import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface HomePagesDirectoryProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function HomePagesDirectory({
  onNavigate,
  lang,
}: HomePagesDirectoryProps) {
  const t = UI_COPY[lang].homeDirectory;
  const isRtl = lang === 'ar';

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-red-600">{t.kicker}</p>
          <h2
            className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            {t.title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card) => {
            const pageId = card.page as PageId;
            return (
              <a
                key={card.page}
                href={PAGE_HASHES[pageId]}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(pageId);
                }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors duration-150 hover:border-slate-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-red-600"
              >
                <div>
                  <span className="font-mono-nums text-xs font-bold text-red-600">
                    {card.num}
                  </span>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-slate-950 transition-colors group-hover:text-red-600">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 transition-colors group-hover:text-red-600">
                  <span>{card.cta}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
