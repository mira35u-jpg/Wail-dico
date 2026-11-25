import { Globe, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  LANGUAGE_OPTIONS,
  type Language,
  UI_COPY,
} from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  lang,
  onLanguageChange,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const t = UI_COPY[lang].nav;

  const navItems: { page: PageId; label: string }[] = [
    { page: 'home', label: t.home },
    { page: 'works', label: t.works },
    { page: 'process', label: t.process },
    { page: 'faq', label: t.faq },
    { page: 'contact', label: t.contact },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href={PAGE_HASHES.home}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          {!logoError ? (
            <img
              src={CONTACT_INFO.logoSrc}
              alt="Logo WAIL DICO"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-9 w-9 shrink-0 rounded-md border border-slate-200 bg-white object-cover sm:h-10 sm:w-10"
            />
          ) : (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-600 font-display text-sm font-bold text-white sm:h-10 sm:w-10">
              WD
            </span>
          )}
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 sm:text-xl">
            WAIL DICO
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label={t.home}
          className="hidden lg:flex items-center gap-6 text-sm font-semibold"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={PAGE_HASHES[item.page]}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.page);
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-600 after:transition-transform after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 ${
                  isActive
                    ? 'text-slate-950 after:scale-x-100'
                    : 'text-slate-600 hover:text-slate-950 after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher (FR / AR / EN) + Primary CTA + Mobile Trigger */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          {/* Segmented Translation Switcher */}
          <div
            role="group"
            aria-label={t.langAria}
            className="inline-flex items-center gap-0.5 rounded-lg border border-slate-200 bg-slate-100 p-0.5"
          >
            <Globe
              className="mx-1.5 hidden h-3.5 w-3.5 text-slate-500 sm:block"
              aria-hidden="true"
            />
            {LANGUAGE_OPTIONS.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => onLanguageChange(opt.code)}
                  aria-pressed={active}
                  title={opt.label}
                  className={`min-h-8 rounded-md px-2 py-1 text-xs font-bold whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {opt.short}
                </button>
              );
            })}
          </div>

          <a
            href={PAGE_HASHES.process}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('process');
            }}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t.cta}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden focus-visible:outline-2 focus-visible:outline-red-600"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={PAGE_HASHES[item.page]}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.page);
                  }}
                  className={`flex min-h-11 items-center rounded-lg px-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-700'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={PAGE_HASHES.process}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('process');
              }}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{t.cta}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
