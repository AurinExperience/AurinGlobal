import type { Lang } from '@/data/types';
import type { Service } from '@/data/services';
import { remittances } from './remittances';

/**
 * Página índice /industrias/ ↔ /en/industries/: todas las industrias de la home (HOME[lang].industries.items)
 * con buscador. La home muestra solo las primeras 6 y enlaza aquí.
 */
export const INDUSTRIES_INDEX = {
  es: {
    slug: 'industrias',
    seo: {
      title: 'Diseño web y UX/UI por industria | Clientes reales | Aurin',
      description: 'Sitios web, apps y marcas para fintech, salud, educación, turismo, energía, legal, bienes raíces y más, con clientes reales en cada industria. Llamada gratis.',
    },
    title: 'Diseño web y UX/UI por industria',
    intro: 'Busca la tuya y mira con qué clientes ya trabajamos en ella. Si no aparece, escríbenos: lo más probable es que ya hayamos resuelto algo parecido.',
    search: 'Buscar industria',
    placeholder: 'Ej. salud, fintech, educación',
    empty: 'No encontramos esa industria todavía. Agenda una llamada y te contamos qué proyectos parecidos hemos hecho.',
  },
  en: {
    slug: 'industries',
    seo: {
      title: 'Web design and UX/UI by industry for US businesses | Aurin',
      description: 'Websites, apps and brands for fintech, healthcare, education, tourism, energy, legal, real estate and more, with real clients in each industry. Free call.',
    },
    title: 'Web design and UX/UI by industry',
    intro: 'Find yours and see which clients we already work with in it. If it’s not listed, write to us: chances are we’ve already solved something similar.',
    search: 'Search industries',
    placeholder: 'E.g. healthcare, fintech, education',
    empty: 'We don’t have that industry listed yet. Book a call and we’ll tell you about similar projects we’ve done.',
  },
} satisfies Record<Lang, unknown>;

export const industriesPath = (lang: Lang) => `${lang === 'en' ? '/en' : ''}/${INDUSTRIES_INDEX[lang].slug}/`;

/**
 * Páginas de industria: usan la plantilla de servicio (ServicePage) pero no salen en la lista de
 * servicios de la home. Solo nichos que aurin.mx NO cubre: allá ya hay fintech, wealthtech y otras
 * industrias para EE. UU. (ver Canibalización en CLAUDE.md).
 */
export const INDUSTRY_PAGES: Service[] = [remittances];
