import { LANGS, UI, type Lang } from '@/i18n';
import { HOME } from '@/data/home';
import { publishedStates, statePath } from '@/data/states';
import { SERVICES, servicePath } from '@/data/services';
import { INDUSTRY_PAGES, INDUSTRIES_INDEX, industriesPath } from '@/data/industries';
import { PRIVACY, privacyPath } from '@/data/privacy';

export interface PageEntry {
  /** Ruta con barra final, igual que el canonical. */
  path: string;
  lang: Lang;
  /** Clave compartida entre idiomas, para armar los hreflang del sitemap. */
  key: string;
  title: string;
  description: string;
  /** Texto del enlace en llms.txt. */
  label: string;
  kind: 'home' | 'service' | 'industry' | 'state' | 'legal';
}

/**
 * Todas las páginas indexables. Sitemap, llms.txt y las imágenes OG salen de
 * aquí: agregar un estado a src/data/states basta para que aparezca en los tres.
 * Las páginas utilitarias (404) quedan fuera a propósito.
 */
export function indexablePages(): PageEntry[] {
  return LANGS.flatMap((lang) => [
    {
      path: lang === 'en' ? '/en/' : '/',
      lang,
      key: 'home',
      title: HOME[lang].seo.title,
      description: HOME[lang].seo.description,
      label: UI[lang].home,
      kind: 'home' as const,
    },
    ...SERVICES.map((service) => ({
      path: servicePath(service, lang),
      lang,
      key: service.id,
      title: service.copy[lang].seo.title,
      description: service.copy[lang].seo.description,
      label: service.copy[lang].name,
      kind: 'service' as const,
    })),
    ...INDUSTRY_PAGES.map((page) => ({
      path: servicePath(page, lang),
      lang,
      key: page.id,
      title: page.copy[lang].seo.title,
      description: page.copy[lang].seo.description,
      label: page.copy[lang].name,
      kind: 'industry' as const,
    })),
    {
      path: industriesPath(lang),
      lang,
      key: 'industries',
      title: INDUSTRIES_INDEX[lang].seo.title,
      description: INDUSTRIES_INDEX[lang].seo.description,
      label: INDUSTRIES_INDEX[lang].title,
      kind: 'industry' as const,
    },
    ...publishedStates().map((state) => ({
      path: statePath(state, lang),
      lang,
      key: state.id,
      title: state.copy[lang].seo.title,
      description: state.copy[lang].seo.description,
      label: state.copy[lang].linkLabel,
      kind: 'state' as const,
    })),
    {
      path: privacyPath(lang),
      lang,
      key: 'privacy',
      title: PRIVACY[lang].seo.title,
      description: PRIVACY[lang].seo.description,
      label: PRIVACY[lang].title,
      kind: 'legal' as const,
    },
  ]);
}

/** "/" → "/og/index.png", "/en/texas/" → "/og/en/texas.png" */
export function ogPath(pathname: string): string {
  return `/og/${pathname.replace(/^\/|\/$/g, '') || 'index'}.png`;
}
