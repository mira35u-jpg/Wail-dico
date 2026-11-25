import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Film,
  LayoutGrid,
  MessageCircle,
  Pause,
  Play,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CONTACT_INFO,
  getPortfolioItems,
  getPortfolioVideos,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import { DisplayBlueprintSvg } from './DisplayBlueprintSvg';
import { TikTokIcon } from './TikTokIcon';

interface PortfolioSectionProps {
  lang: Language;
}

type CategoryFilter = 'all' | PortfolioCategory;
type ViewMode = 'grid' | 'carousel' | 'videos';

export function PortfolioSection({ lang }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const t = UI_COPY[lang].portfolio;
  const isRtl = lang === 'ar';
  const items = getPortfolioItems(lang);
  const videos = getPortfolioVideos(lang);

  const categoryTabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: `${t.allTab} (${items.length})` },
    {
      key: 'food',
      label: `${t.catFood} (${items.filter((i) => i.category === 'food').length})`,
    },
    {
      key: 'perfumes',
      label: `${t.catPerfumes} (${items.filter((i) => i.category === 'perfumes').length})`,
    },
    {
      key: 'pharma',
      label: `${t.catPharma} (${items.filter((i) => i.category === 'pharma').length})`,
    },
    {
      key: 'automotive',
      label: `${t.catAuto} (${items.filter((i) => i.category === 'automotive').length})`,
    },
    {
      key: 'facades',
      label: `${t.catFacades} (${items.filter((i) => i.category === 'facades').length})`,
    },
    {
      key: 'exhibitions',
      label: `${t.catExhibitions} (${items.filter((i) => i.category === 'exhibitions').length})`,
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const safeCarouselIndex =
    filteredItems.length > 0 ? carouselIndex % filteredItems.length : 0;
  const activeSlide = filteredItems[safeCarouselIndex] ?? items[0];

  const selectedItem =
    selectedItemId !== null
      ? items.find((i) => i.id === selectedItemId) ?? null
      : null;

  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (viewMode !== 'carousel' || !isAutoPlaying || filteredItems.length <= 1) {
      return;
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return;
    }

    const timer = window.setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [viewMode, isAutoPlaying, filteredItems.length]);

  useEffect(() => {
    if (!selectedItemId) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItemId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId]);

  const markImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const buildWhatsAppLink = (item: PortfolioItem) => {
    const message = t.waTemplate(item.title, item.dimensions);
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  const buildVideoWhatsAppLink = (title: string) => {
    const message = t.waVideoTemplate(title);
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="portfolio" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-red-600">{t.kicker}</p>
            <h1
              className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {t.title}
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.subtitle}
            </p>
          </div>

          {/* Interactive View Switcher (Grid vs Carousel vs Videos) */}
          <div
            role="group"
            aria-label={t.gridBtn}
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex min-h-10 items-center gap-2 rounded-md px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              <span>{t.gridBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`inline-flex min-h-10 items-center gap-2 rounded-md px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                viewMode === 'carousel'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              <span>{t.carouselBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('videos')}
              className={`inline-flex min-h-10 items-center gap-2 rounded-md px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                viewMode === 'videos'
                  ? 'bg-red-600 text-white'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <Film className="h-4 w-4" aria-hidden="true" />
              <span>
                {t.videosBtn} ({videos.length})
              </span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (shown for photos) */}
        {viewMode !== 'videos' && (
          <div
            role="tablist"
            aria-label={t.allTab}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`min-h-10 rounded-lg border px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-red-600 ${
                    isActive
                      ? 'border-red-600 bg-red-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Mode 1: Grid Showcase */}
        {viewMode === 'grid' && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const hasImgError = Boolean(imgErrors[item.id]);
              return (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-150 hover:border-slate-300"
                >
                  <div>
                    <div
                      className={`relative w-full overflow-hidden border-b border-slate-200 bg-slate-100 ${
                        activeCategory === 'facades' || activeCategory === 'exhibitions'
                          ? 'aspect-[4/3]'
                          : 'aspect-[3/4]'
                      }`}
                    >
                      {!hasImgError ? (
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => markImgError(item.id)}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-50 p-4">
                          <DisplayBlueprintSvg
                            brandLabel={item.brandLabel}
                            shelvesCount={item.shelvesCount}
                            shapeStyle={item.shapeStyle}
                            accentColor={item.accentColor}
                            lang={lang}
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                        <span>{item.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-nums">{item.dimensions}</span>
                        {item.shelvesCount > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono-nums">
                              {item.shelvesCount} {t.shelvesUnit}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="mt-2.5 font-display text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setSelectedItemId(item.id)}
                      className="inline-flex min-h-10 items-center gap-2 text-sm font-bold text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:text-red-600"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      <span>{t.inspectBtn}</span>
                    </button>

                    <a
                      href={buildWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-red-600 whitespace-nowrap shrink-0 transition-colors hover:text-red-700"
                    >
                      {t.similarBtn}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Mode 2: Interactive Carousel Showcase */}
        {viewMode === 'carousel' && (
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
              <div className="relative flex items-center justify-center bg-slate-100 lg:col-span-6">
                {!imgErrors[activeSlide.id] ? (
                  <img
                    src={activeSlide.imageSrc}
                    alt={activeSlide.title}
                    referrerPolicy="no-referrer"
                    onError={() => markImgError(activeSlide.id)}
                    className="max-h-[580px] w-full bg-slate-950/5 object-contain"
                  />
                ) : (
                  <div className="flex h-full min-h-96 w-full items-center justify-center bg-slate-50 p-6">
                    <DisplayBlueprintSvg
                      brandLabel={activeSlide.brandLabel}
                      shelvesCount={activeSlide.shelvesCount}
                      shapeStyle={activeSlide.shapeStyle}
                      accentColor={activeSlide.accentColor}
                      lang={lang}
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-medium text-slate-500">
                    <span>{activeSlide.categoryLabel}</span>
                    <span className="font-mono-nums">
                      {safeCarouselIndex + 1} / {filteredItems.length}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-950">
                    {activeSlide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {activeSlide.summary}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-200 py-4 text-sm">
                    <div>
                      <dt className="text-xs text-slate-500">
                        {t.dimensionsLabel}
                      </dt>
                      <dd className="mt-1 font-mono-nums font-bold text-slate-900">
                        {activeSlide.dimensions}
                      </dd>
                    </div>
                    {activeSlide.shelvesCount > 0 ? (
                      <div>
                        <dt className="text-xs text-slate-500">{t.maxLoadLabel}</dt>
                        <dd className="mt-1 font-mono-nums font-bold text-slate-900">
                          {activeSlide.maxLoadKg} {t.kgUnit}
                        </dd>
                      </div>
                    ) : (
                      <div>
                        <dt className="text-xs text-slate-500">{t.materialLabel}</dt>
                        <dd className="mt-1 font-semibold text-slate-900">
                          {activeSlide.material}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {activeSlide.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-600"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCarouselIndex(
                          (prev) =>
                            (prev - 1 + filteredItems.length) %
                            filteredItems.length,
                        )
                      }
                      aria-label={t.prevSlide}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100"
                    >
                      {isRtl ? (
                        <ChevronRight className="h-5 w-5" />
                      ) : (
                        <ChevronLeft className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCarouselIndex(
                          (prev) => (prev + 1) % filteredItems.length,
                        )
                      }
                      aria-label={t.nextSlide}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100"
                    >
                      {isRtl ? (
                        <ChevronLeft className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying((prev) => !prev)}
                      aria-label={isAutoPlaying ? t.pauseAuto : t.playAuto}
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                    >
                      {isAutoPlaying ? (
                        <>
                          <Pause className="h-3.5 w-3.5" />
                          <span>{t.pauseAuto}</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5" />
                          <span>{t.playAuto}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={buildWhatsAppLink(activeSlide)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>{t.orderDesignBtn}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Videos Showcase ("خانة الفيديوهات") — Always visible in 'videos' mode and directly below photo gallery */}
        <div
          id="videos-showcase"
          className={
            viewMode === 'videos'
              ? 'mt-8'
              : 'mt-16 border-t border-slate-200 pt-14'
          }
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-red-600">{t.videosKicker}</p>
              <h2
                className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                {t.videosTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.videosSubtitle}
              </p>
            </div>
            <a
              href={CONTACT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 w-fit items-center gap-2 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-slate-800"
            >
              <TikTokIcon className="h-4 w-4 shrink-0" />
              <span>{t.videosTiktokBtn}</span>
            </a>
          </div>

          <div className="space-y-6">
            {videos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
                  {/* Video Player Container */}
                  <div className="flex items-center justify-center bg-slate-950 lg:col-span-6">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={video.posterSrc}
                      className="max-h-[540px] w-full bg-slate-950 object-contain"
                    >
                      <source
                        src={
                          video.posterSrc
                            ? video.videoSrc
                            : `${video.videoSrc}#t=0.1`
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  {/* Video Details & WhatsApp CTA */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {video.categoryLabel}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-extrabold text-slate-950 sm:text-2xl">
                        {video.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {video.summary}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5 text-sm text-slate-700">
                        {video.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-600"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-5">
                      <a
                        href={buildVideoWhatsAppLink(video.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700"
                      >
                        <MessageCircle
                          className="h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{t.videosOrderBtn}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Inspection Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
          onClick={() => setSelectedItemId(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {selectedItem.categoryLabel} · {selectedItem.material}
                </p>
                <h3
                  id="modal-title"
                  className="mt-1 font-display text-lg font-extrabold text-slate-950 sm:text-xl"
                >
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItemId(null)}
                aria-label={t.closeBtn}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center bg-slate-100 p-4">
              {!imgErrors[selectedItem.id] ? (
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  onError={() => markImgError(selectedItem.id)}
                  className="max-h-[460px] w-auto rounded-lg object-contain"
                />
              ) : (
                <div className="w-full max-w-md bg-white">
                  <DisplayBlueprintSvg
                    brandLabel={selectedItem.brandLabel}
                    shelvesCount={selectedItem.shelvesCount}
                    shapeStyle={selectedItem.shapeStyle}
                    accentColor={selectedItem.accentColor}
                    lang={lang}
                  />
                </div>
              )}
            </div>

            <div className="p-6">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {selectedItem.summary}
              </p>

              {selectedItem.shelvesCount > 0 ? (
                <dl className="mt-6 grid grid-cols-3 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                  <div>
                    <dt className="text-xs text-slate-500">{t.dimensionsLabel}</dt>
                    <dd className="mt-1 font-mono-nums text-sm font-bold text-slate-950">
                      {selectedItem.dimensions}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">{t.shelvesLabel}</dt>
                    <dd className="mt-1 font-mono-nums text-sm font-bold text-slate-950">
                      {selectedItem.shelvesCount} {t.shelvesUnit}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">{t.maxLoadLabel}</dt>
                    <dd className="mt-1 font-mono-nums text-sm font-bold text-slate-950">
                      {selectedItem.maxLoadKg} {t.kgUnit}
                    </dd>
                  </div>
                </dl>
              ) : (
                <dl className="mt-6 grid grid-cols-1 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-slate-500">{t.dimensionsLabel}</dt>
                    <dd className="mt-1 font-mono-nums text-sm font-bold text-slate-950">
                      {selectedItem.dimensions}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">{t.materialLabel}</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-950">
                      {selectedItem.material}
                    </dd>
                  </div>
                </dl>
              )}

              <div className="mt-6">
                <h4 className="font-display text-sm font-bold text-slate-950">
                  {t.specsTitle}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {selectedItem.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-600"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedItemId(null)}
                  className="min-h-11 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                >
                  {t.closeBtn}
                </button>
                <a
                  href={buildWhatsAppLink(selectedItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{t.modalOrderBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
