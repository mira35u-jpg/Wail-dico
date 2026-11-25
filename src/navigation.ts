export type PageId = 'home' | 'works' | 'process' | 'faq' | 'contact';

export const PAGE_HASHES: Record<PageId, string> = {
  home: '#/',
  works: '#/works',
  process: '#/process',
  faq: '#/faq',
  contact: '#/contact',
};

export function parsePageFromHash(hash: string): PageId {
  const normalized = hash.replace(/^#\/?/, '').trim().toLowerCase();
  switch (normalized) {
    case 'works':
    case 'portfolio':
      return 'works';
    case 'process':
    case 'order':
    case 'quote':
      return 'process';
    case 'faq':
      return 'faq';
    case 'contact':
      return 'contact';
    default:
      return 'home';
  }
}
