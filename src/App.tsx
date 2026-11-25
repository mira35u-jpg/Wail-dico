import { useCallback, useEffect, useState } from 'react';
import { AiAssistantWidget } from './components/AiAssistantWidget';
import { BenefitsBento } from './components/BenefitsBento';
import { ContactFooter } from './components/ContactFooter';
import { ContactPage } from './components/ContactPage';
import { FaqAccordion } from './components/FaqAccordion';
import { HeroSection } from './components/HeroSection';
import { HomeFeaturedWorks } from './components/HomeFeaturedWorks';
import { HomePagesDirectory } from './components/HomePagesDirectory';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessAndConfigurator } from './components/ProcessAndConfigurator';
import { Testimonials } from './components/Testimonials';
import { type Language, PAGE_TITLES } from './i18n/translations';
import { PAGE_HASHES, type PageId, parsePageFromHash } from './navigation';

const STORAGE_LANG_KEY = 'wail_dico_lang';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';
  const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
  if (saved === 'fr' || saved === 'ar' || saved === 'en') {
    return saved;
  }
  return 'fr';
}

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  // Always open on the Home page when entering the site
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleLanguageChange = useCallback((nextLang: Language) => {
    setLang(nextLang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_LANG_KEY, nextLang);
    }
  }, []);

  const navigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    const targetHash = PAGE_HASHES[page];
    if (typeof window !== 'undefined') {
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash && window.location.hash !== PAGE_HASHES.home) {
      window.history.replaceState(null, '', PAGE_HASHES.home);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = PAGE_TITLES[lang][currentPage];
  }, [lang, currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(parsePageFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroSection onNavigate={navigate} lang={lang} />
            <BenefitsBento onNavigate={navigate} lang={lang} />
            <HomeFeaturedWorks onNavigate={navigate} lang={lang} />
            <Testimonials onNavigate={navigate} lang={lang} />
            <HomePagesDirectory onNavigate={navigate} lang={lang} />
          </>
        )}

        {currentPage === 'works' && <PortfolioSection lang={lang} />}

        {currentPage === 'process' && <ProcessAndConfigurator lang={lang} />}

        {currentPage === 'faq' && <FaqAccordion lang={lang} />}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigate} lang={lang} />
        )}
      </main>

      <ContactFooter
        currentPage={currentPage}
        onNavigate={navigate}
        lang={lang}
      />

      <AiAssistantWidget lang={lang} onNavigate={navigate} />
    </div>
  );
}
