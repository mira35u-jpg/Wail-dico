import { Facebook, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO, getWhatsappUrl } from '../data/portfolioData';
import { type Language, UI_COPY } from '../i18n/translations';
import { PAGE_HASHES, type PageId } from '../navigation';
import { TikTokIcon } from './TikTokIcon';

interface ContactFooterProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export function ContactFooter({
  currentPage,
  onNavigate,
  lang,
}: ContactFooterProps) {
  const [logoError, setLogoError] = useState(false);

  const navCopy = UI_COPY[lang].nav;
  const footerCopy = UI_COPY[lang].footer;

  const footerLinks: { page: PageId; label: string }[] = [
    { page: 'home', label: navCopy.home },
    { page: 'works', label: navCopy.works },
    { page: 'process', label: navCopy.process },
    { page: 'faq', label: navCopy.faq },
    { page: 'contact', label: navCopy.contact },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      {currentPage !== 'contact' && (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-xl font-extrabold text-slate-950 sm:text-2xl">
                {footerCopy.ctaTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {footerCopy.ctaBody}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-red-700"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{footerCopy.waDirect}</span>
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-blue-700 bg-blue-600 px-4 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-700"
              >
                <Facebook className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{footerCopy.fbDirect}</span>
              </a>
              <a
                href={CONTACT_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-900 bg-slate-950 px-4 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-slate-800"
              >
                <TikTokIcon className="h-4 w-4 shrink-0" />
                <span>{footerCopy.tiktokDirect}</span>
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-100"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span dir="ltr" className="font-mono-nums">
                  {CONTACT_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quiet Footer Bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-start lg:px-8">
          <div className="flex items-center gap-3">
            {!logoError && (
              <img
                src={CONTACT_INFO.logoSrc}
                alt="WAIL DICO"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-8 w-8 rounded border border-slate-200 bg-white object-cover"
              />
            )}
            <p className="text-xs font-medium text-slate-600 sm:text-sm">
              © {new Date().getFullYear()} {footerCopy.copyright}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600 sm:text-sm"
          >
            {footerLinks.map((link) => (
              <a
                key={link.page}
                href={PAGE_HASHES[link.page]}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.page);
                }}
                className={
                  currentPage === link.page
                    ? 'text-red-600'
                    : 'hover:text-slate-950'
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook WAIL DICO"
              className="inline-flex items-center gap-1.5 text-blue-600 transition-colors hover:text-blue-700"
            >
              <Facebook className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{footerCopy.fbDirect}</span>
            </a>
            <a
              href={CONTACT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok WAIL DICO"
              className="inline-flex items-center gap-1.5 text-slate-900 transition-colors hover:text-red-600"
            >
              <TikTokIcon className="h-4 w-4 shrink-0" />
              <span>{footerCopy.tiktokDirect}</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
