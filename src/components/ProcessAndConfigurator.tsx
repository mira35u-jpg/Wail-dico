import { CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  type Language,
  PROCESS_STEPS_BY_LANG,
  UI_COPY,
} from '../i18n/translations';
import { DisplayBlueprintSvg } from './DisplayBlueprintSvg';

interface ProcessAndConfiguratorProps {
  lang: Language;
}

type ShapeOption = 'arch' | 'custom-bottle' | 'classic' | 'stepped';
const SHAPE_KEYS: ShapeOption[] = ['arch', 'custom-bottle', 'stepped', 'classic'];

export function ProcessAndConfigurator({ lang }: ProcessAndConfiguratorProps) {
  const [brandName, setBrandName] = useState('');
  const [phone, setPhone] = useState('');
  const [productTypeIdx, setProductTypeIdx] = useState(0);
  const [shapeStyle, setShapeStyle] = useState<ShapeOption>('custom-bottle');
  const [shelvesCount, setShelvesCount] = useState(5);
  const [quantityIdx, setQuantityIdx] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = UI_COPY[lang].process;
  const steps = PROCESS_STEPS_BY_LANG[lang];

  const productType = t.productTypes[productTypeIdx] ?? t.productTypes[0];
  const quantityTier = t.qtyTiers[quantityIdx] ?? t.qtyTiers[1];
  const selectedShapeLabel = t.shapes[shapeStyle];

  const buildWhatsAppSummary = () => {
    const cleanBrand = brandName.trim() || 'WAIL DICO';
    const cleanPhone = phone.trim();
    return [
      t.waSummaryHeader,
      `• ${t.waSummaryBrand}: ${cleanBrand}`,
      cleanPhone ? `• ${t.waSummaryPhone}: ${cleanPhone}` : null,
      `• ${t.waSummaryProduct}: ${productType}`,
      `• ${t.waSummaryShape}: ${selectedShapeLabel}`,
      `• ${t.waSummaryShelves}: ${shelvesCount} ${t.shelvesUnit}`,
      `• ${t.waSummaryQty}: ${quantityTier}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, '');

    if (!brandName.trim()) {
      setErrorMsg(t.errBrand);
      return;
    }
    if (digitsOnly.length < 9) {
      setErrorMsg(t.errPhone);
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMsg('');
  };

  const summaryText = buildWhatsAppSummary();
  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    summaryText,
  )}`;

  return (
    <section id="process" className="bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: 3-Step Workflow */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-red-400">{t.kicker}</p>
          <h1
            className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            {t.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-6 sm:p-7"
            >
              <div>
                <span className="font-mono-nums text-2xl font-bold text-red-500">
                  {step.number}
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-white">
                  {step.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Interactive Display Stand Spec Configurator */}
        <div
          id="quote-builder"
          className="mt-14 overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            {/* Live Interactive Schematic Preview */}
            <div className="flex flex-col justify-between border-b border-slate-800 bg-slate-950/60 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-e">
              <div>
                <p className="text-xs font-bold text-red-400">
                  {t.previewKicker}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                  {t.previewTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{t.previewDesc}</p>
              </div>

              <div className="my-6 overflow-hidden rounded-lg border border-slate-700 bg-white">
                <DisplayBlueprintSvg
                  brandLabel={brandName.trim() || 'WAIL DICO'}
                  shelvesCount={shelvesCount}
                  shapeStyle={shapeStyle}
                  accentColor="#DC2626"
                  lang={lang}
                />
              </div>

              <dl className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-400">
                    {t.productTypeLabel}
                  </dt>
                  <dd className="mt-1 font-semibold text-white">
                    {productType}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">{t.qtyLabel}</dt>
                  <dd className="mt-1 font-mono-nums font-semibold text-white">
                    {quantityTier}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Lead Capture & Spec Form */}
            <div className="p-6 sm:p-8 lg:col-span-7">
              {isSubmitted ? (
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-emerald-400">
                      <CheckCircle2
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-display text-lg font-bold">
                        {t.successTitle}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{t.successDesc}</p>

                    <pre className="mt-5 whitespace-pre-wrap rounded-lg border border-slate-700 bg-slate-950 p-4 font-sans text-sm leading-relaxed text-slate-200">
                      {summaryText}
                    </pre>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:text-base"
                    >
                      <MessageCircle
                        className="h-5 w-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{t.sendWaBtn}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>{t.editBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="brand-name"
                        className="block text-sm font-semibold text-slate-200"
                      >
                        {t.brandLabel}
                      </label>
                      <input
                        id="brand-name"
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder={t.brandPlaceholder}
                        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold text-slate-200"
                      >
                        {t.phoneLabel}
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0560 00 00 00"
                        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-start font-mono-nums text-sm text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="product-type"
                      className="block text-sm font-semibold text-slate-200"
                    >
                      {t.categoryLabel}
                    </label>
                    <select
                      id="product-type"
                      value={productTypeIdx}
                      onChange={(e) => setProductTypeIdx(Number(e.target.value))}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-red-500 focus:outline-none"
                    >
                      {t.productTypes.map((typeLabel, idx) => (
                        <option key={idx} value={idx}>
                          {typeLabel}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-slate-200">
                      {t.shapeLabel}
                    </span>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {SHAPE_KEYS.map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setShapeStyle(key)}
                          className={`min-h-11 rounded-lg border px-3.5 py-2 text-start text-sm font-medium transition-colors ${
                            shapeStyle === key
                              ? 'border-red-500 bg-red-600/20 text-white'
                              : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {t.shapes[key]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <span className="block text-sm font-semibold text-slate-200">
                        {t.shelvesLabel}
                      </span>
                      <div className="mt-2 flex items-center gap-2">
                        {[3, 4, 5].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => setShelvesCount(count)}
                            className={`min-h-10 flex-1 rounded-lg border px-3 py-2 font-mono-nums text-sm font-bold transition-colors ${
                              shelvesCount === count
                                ? 'border-red-500 bg-red-600 text-white'
                                : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {count} {t.shelvesUnit}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-slate-200">
                        {t.qtyTitle}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {t.qtyTiers.map((tierLabel, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setQuantityIdx(idx)}
                            className={`min-h-10 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                              quantityIdx === idx
                                ? 'border-red-500 bg-red-600 text-white'
                                : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {tierLabel}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-500/40 bg-red-950/60 px-4 py-2.5 text-sm font-medium text-red-200"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
                    <p className="text-xs text-slate-400">{t.helperNote}</p>
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-red-500 sm:text-base"
                    >
                      <span>{t.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
