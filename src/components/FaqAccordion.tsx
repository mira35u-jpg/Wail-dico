import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { getWhatsappUrl } from '../data/portfolioData';
import {
  FAQ_ITEMS_BY_LANG,
  FAQ_TOPICS_BY_LANG,
  type FaqTopic,
  type Language,
  UI_COPY,
} from '../i18n/translations';

interface FaqAccordionProps {
  lang: Language;
}

export function FaqAccordion({ lang }: FaqAccordionProps) {
  const [activeTopic, setActiveTopic] = useState<FaqTopic>('all');
  const [openId, setOpenId] = useState<string | null>('material-load');

  const t = UI_COPY[lang].faq;
  const topics = FAQ_TOPICS_BY_LANG[lang];
  const items = FAQ_ITEMS_BY_LANG[lang];

  const visibleItems =
    activeTopic === 'all'
      ? items
      : items.filter((item) => item.topic === activeTopic);

  const handleTopicChange = (topic: FaqTopic) => {
    setActiveTopic(topic);
    const nextList =
      topic === 'all' ? items : items.filter((item) => item.topic === topic);
    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id);
    }
  };

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Header & Topic Filter */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-bold text-red-600">{t.kicker}</p>
              <h1
                className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                {t.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.subtitle}
              </p>

              {/* Topic Filter Tabs */}
              <div
                role="tablist"
                aria-label={t.kicker}
                className="mt-6 flex flex-wrap gap-2"
              >
                {topics.map((topic) => {
                  const isActive = activeTopic === topic.key;
                  return (
                    <button
                      key={topic.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleTopicChange(topic.key)}
                      className={`min-h-10 rounded-lg border px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors sm:text-sm ${
                        isActive
                          ? 'border-slate-950 bg-slate-950 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>

              {/* Direct Question Fallback */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-slate-900">
                  {t.customQuestion}
                </p>
                <a
                  href={getWhatsappUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.askWa}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {visibleItems.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `faq-panel-${item.id}`;
                const buttonId = `faq-button-${item.id}`;

                return (
                  <div key={item.id} className="bg-white">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-5 text-start transition-colors hover:bg-slate-50/80 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-red-600 sm:px-7"
                      >
                        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
                          <span className="font-mono-nums text-xs font-bold text-red-600">
                            {item.number}.
                          </span>
                          <div>
                            <span className="block font-display text-base font-bold text-slate-950 sm:text-lg">
                              {item.question}
                            </span>
                            <span className="mt-0.5 block text-xs font-medium text-slate-500">
                              {item.topicLabel}
                            </span>
                          </div>
                        </div>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-red-600' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="border-t border-slate-100 bg-slate-50/60 px-5 py-5 text-sm leading-relaxed text-slate-700 sm:px-7 sm:ps-14 sm:text-base"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
