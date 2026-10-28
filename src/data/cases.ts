import type { Lang } from '@/data/types';
import type { ServiceId } from '@/data/services';

/**
 * Casos de estudio. Son proyectos PUBLICADOS en el CMS de aurin.mx (Payload): el texto sale de su
 * descripción y `slug` es su URL real (aurin.mx/project/<slug>/). Un proyecto en borrador allá
 * daría 404 desde aquí: no agregarlo hasta que se publique.
 */
export type CaseId =
  | 'fruit-academy'
  | 'el-rollo'
  | 'ingles-individual'
  | 'ancient'
  | 'mineria'
  | 'grupo-estrella'
  | 'mexico-pacific'
  | 'ciencia';

interface CaseCopy {
  name: string;
  industry: string;
  text: string;
}

interface Case {
  slug: string;
  services: ServiceId[];
  copy: Record<Lang, CaseCopy>;
}

export const CASES: Record<CaseId, Case> = {
  'fruit-academy': {
    slug: 'Fruit%20Academy',
    services: ['branding', 'ux-ui-design', 'web-development'],
    copy: {
      es: { name: 'Fruit Academy', industry: 'Educación', text: 'Branding, app móvil, landing page y materiales para una plataforma educativa de Grupo PM: identidad visual, arquitectura de contenidos, UX/UI y desarrollo.' },
      en: { name: 'Fruit Academy', industry: 'Education', text: 'Branding, mobile app, landing page and materials for a Grupo PM learning platform: visual identity, content architecture, UX/UI and development.' },
    },
  },
  'el-rollo': {
    slug: 'El-Rollo',
    services: ['web-design', 'ux-ui-design', 'web-development'],
    copy: {
      es: { name: 'El Rollo', industry: 'Turismo y recreación', text: 'Sitio web y app de un parque acuático, con venta de boletos y mapa interactivo de atracciones.' },
      en: { name: 'El Rollo', industry: 'Tourism and leisure', text: 'Website and app for a water park, with online ticketing and an interactive attractions map.' },
    },
  },
  'ingles-individual': {
    slug: 'ingles-individual',
    services: ['web-design', 'ux-ui-design', 'web-development'],
    copy: {
      es: { name: 'Inglés Individual', industry: 'Educación', text: 'Sitio institucional y sistema para gestionar alumnos, clases, pagos y sucursales.' },
      en: { name: 'Inglés Individual', industry: 'Education', text: 'Institutional website and a system to manage students, classes, payments and branches.' },
    },
  },
  ancient: {
    slug: 'ancient-wallets',
    services: ['ux-ui-design'],
    copy: {
      es: { name: 'Ancient', industry: 'Fintech', text: 'Experiencia y flujos completos de apps financieras: wallet, remesas, criptomonedas y banca empresarial.' },
      en: { name: 'Ancient', industry: 'Fintech', text: 'Complete experience and flows for financial apps: wallet, remittances, crypto and business banking.' },
    },
  },
  mineria: {
    slug: 'Miner%C3%ADa-Symphony-Orchestrah',
    services: ['web-design', 'web-development', 'branding'],
    copy: {
      es: { name: 'Orquesta Sinfónica de Minería', industry: 'Cultura', text: 'Rediseño del sitio web de la orquesta: música y tecnología en un mismo lugar.' },
      en: { name: 'Minería Symphony Orchestra', industry: 'Culture', text: 'Website redesign for the orchestra: music and technology in one place.' },
    },
  },
  'grupo-estrella': {
    slug: 'Grupo-estrella',
    services: ['ux-ui-design'],
    copy: {
      es: { name: 'Grupo Estrella', industry: 'Construcción', text: 'Flujos y experiencia completa de una app de logística para materiales de construcción en República Dominicana, junto con Ancient.' },
      en: { name: 'Grupo Estrella', industry: 'Construction', text: 'Flows and the full experience of a logistics app for construction materials in the Dominican Republic, together with Ancient.' },
    },
  },
  'mexico-pacific': {
    slug: 'mexico-pacific',
    services: ['web-design', 'web-development', 'branding'],
    copy: {
      es: { name: 'Mexico Pacific', industry: 'Energía', text: 'Sitio web institucional de una empresa de energía, diseñado y desarrollado junto con Ideograma.' },
      en: { name: 'Mexico Pacific', industry: 'Energy', text: 'Institutional website for an energy company, designed and developed together with Ideograma.' },
    },
  },
  ciencia: {
    slug: 'ciencia-investigacion',
    services: ['ux-ui-design', 'web-development'],
    copy: {
      es: { name: 'Ciencia e investigación', industry: 'Instituciones académicas', text: 'Plataformas para instituciones científicas y académicas: gestión de investigación, congresos y difusión del conocimiento.' },
      en: { name: 'Science and research', industry: 'Academic institutions', text: 'Platforms for scientific and academic institutions: research management, conferences and knowledge sharing.' },
    },
  },
};

/** Lo que pinta el bloque Cases. */
export interface CaseCard extends CaseCopy {
  services: ServiceId[];
  href: string;
}

export function caseCards(ids: readonly CaseId[], lang: Lang): CaseCard[] {
  return ids.map((id) => {
    const item = CASES[id];
    return {
      ...item.copy[lang],
      services: item.services,
      href: `https://aurin.mx${lang === 'en' ? '/en' : ''}/project/${item.slug}/`,
    };
  });
}
