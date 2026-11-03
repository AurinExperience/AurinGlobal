import type { Lang } from '@/data/types';
import type { Service } from '@/data/services';
import { fintech } from './fintech';
import { remittances } from './remittances';
import { healthcare } from './healthcare';
import { education } from './education';
import { tourism } from './tourism';
import { energy } from './energy';
import { culture } from './culture';
import { software } from './software';
import { agencies } from './agencies';
import { realEstate } from './real-estate';
import { nonprofits } from './nonprofits';
import { isPublished } from '@/data/states';

/**
 * Página índice /industrias/ ↔ /en/industries/: todas las industrias de la home (HOME[lang].industries.items)
 * con buscador. La home muestra solo las primeras 6 y enlaza aquí.
 */
export const INDUSTRIES_INDEX = {
  es: {
    slug: 'industrias',
    seo: {
      title: 'Diseño web y UX/UI por industria | Clientes reales | Aurin',
      description: 'Sitios web, plataformas y marcas para fintech, salud, educación, turismo, energía, bienes raíces y más, con clientes reales en cada industria. Llamada gratis.',
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
      title: 'Web Design & UX/UI by Industry, US & Canada | Aurin',
      description: 'Websites, platforms and brands for fintech, healthcare, education, tourism, energy, real estate and more, with real clients in each industry. Free call.',
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
 * servicios de la home. Dos tipos: las industrias generales de HOME.industries (fintech, salud…;
 * su tarjeta en /industrias/ enlaza aquí con `page`) y nichos que aurin.mx no toca (remesas).
 * Sin nombres de clientes. Una nueva: su archivo aquí + sumarla a esta lista. Con `publishAt` sale sola en esa fecha
 * (menú, rutas, sitemap y enlaces leen de aquí): el sitio es estático, sale en el primer build después de la fecha.
 */
const ALL_INDUSTRIES: Service[] = [fintech, healthcare, education, tourism, energy, culture, software, agencies, realEstate, nonprofits, remittances];

export const INDUSTRY_PAGES = ALL_INDUSTRIES.filter((page) => isPublished({ status: 'live', publishAt: page.publishAt }));
