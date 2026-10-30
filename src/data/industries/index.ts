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
import { legal } from './legal';
import { realEstate } from './real-estate';
import { nonprofits } from './nonprofits';

/**
 * Página índice /industrias/ ↔ /en/industries/: todas las industrias de la home (HOME[lang].industries.items)
 * con buscador. La home muestra solo las primeras 6 y enlaza aquí.
 */
export const INDUSTRIES_INDEX = {
  es: {
    slug: 'industrias',
    seo: {
      title: 'Diseño web y UX/UI por industria | Clientes reales | Aurin',
      description: 'Sitios web, plataformas y marcas para fintech, salud, educación, turismo, legal, bienes raíces y más, con clientes reales en cada industria. Llamada gratis.',
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
      description: 'Websites, platforms and brands for fintech, healthcare, education, tourism, energy, legal, real estate and more, with real clients in each industry. Free call.',
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
 * Sin nombres de clientes. Una nueva: su archivo aquí + sumarla a esta lista.
 */
export const INDUSTRY_PAGES: Service[] = [fintech, healthcare, education, tourism, energy, culture, software, agencies, legal, realEstate, nonprofits, remittances];
