import { Layers, Palette, ShieldCheck, Truck } from 'lucide-react';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface BenefitsBentoProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function BenefitsBento({ onNavigate, lang }: BenefitsBentoProps) {
  const t = UI_COPY[lang].benefits;

  return (
    <section
      id="features"
      className="border-b border-slate-200 bg-white py-16 sm:py-24"
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

          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.intro}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 01 */}
          <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono-nums text-sm font-bold text-red-600">
                  01.
                </span>
                <Layers className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-slate-950 sm:text-2xl">
                {t.c1Title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                {t.c1Body}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="font-mono-nums text-xl font-bold text-slate-950 sm:text-2xl">
                  100%
                </p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {t.c1Stat1}
                </p>
              </div>
              <div>
                <p className="font-mono-nums text-xl font-bold text-slate-950 sm:text-2xl">
                  3D CAD
                </p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {t.c1Stat2}
                </p>
              </div>
              <div>
                <p className="font-mono-nums text-xl font-bold text-slate-950 sm:text-2xl">
                  +45 kg
                </p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {t.c1Stat3}
                </p>
              </div>
            </div>
          </article>

          {/* Card 02 */}
          <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono-nums text-sm font-bold text-red-600">
                  02.
                </span>
                <Palette className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-slate-950 sm:text-2xl">
                {t.c2Title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {t.c2Body}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-5 text-xs font-medium text-slate-500 sm:text-sm">
              <span>{t.c2Tags[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.c2Tags[1]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.c2Tags[2]}</span>
            </div>
          </article>

          {/* Card 03 */}
          <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono-nums text-sm font-bold text-red-600">
                  03.
                </span>
                <Truck className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-slate-950 sm:text-2xl">
                {t.c3Title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {t.c3Body}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-5 text-xs font-medium text-slate-500 sm:text-sm">
              <span>{t.c3Tags[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.c3Tags[1]}</span>
              <span aria-hidden="true">·</span>
              <span>{t.c3Tags[2]}</span>
            </div>
          </article>

          {/* Card 04 */}
          <article className="flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-950 p-6 text-white sm:p-8 lg:col-span-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono-nums text-sm font-bold text-red-500">
                    04.
                  </span>
                  <ShieldCheck
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                  {t.c4Title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                  {t.c4Body}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
              <a
                href={PAGE_HASHES.works}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('works');
                }}
                className="text-sm font-semibold text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
              >
                {t.c4LinkWorks}
              </a>
              <a
                href={PAGE_HASHES.process}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('process');
                }}
                className="text-sm font-bold text-red-400 underline underline-offset-4 transition-colors hover:text-red-300"
              >
                {t.c4LinkOrder}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
