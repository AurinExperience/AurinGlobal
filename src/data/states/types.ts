import type { FaqItem, Lang, Step } from '@/data/types';
import type { CaseId } from '@/data/cases';
import type { Industry } from '@/data/home';
import type { ServiceId } from '@/data/services/types';

/**
 * Copy de una landing por estado. Todo es texto único por estado: con copy
 * compartido las landings serían casi-duplicados (doorway pages) y la
 * penalización de Google es de sitio, no de página.
 */
export interface StateCopy {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaSecondary: string;
  };
  /** Una fila por servicio con la situación de quien compra en este estado; el nombre y el enlace salen de src/data/services. */
  services: {
    heading: string;
    intro: string;
    items: Record<ServiceId, { text: string; tags: string }>;
  };
  /** Industrias del estado, cada una con clientes reales (bloque IndustriesGrid). */
  sectors: {
    heading: string;
    intro: string;
    items: Industry[];
  };
  /**
   * Regiones del estado: quién compra ahí y qué le conviene a su sitio (bloque Cities). Texto propio de cada región. Sin
   * páginas propias por ahora: una ciudad se gana su página cuando Search Console muestre búsquedas de "diseño web +
   * ciudad" cayendo en el estado, y nunca las que ya tiene aurin.mx (CLAUDE.md).
   */
  cities: {
    heading: string;
    intro: string;
    needLabel: string;
    buildLabel: string;
    items: { name: string; tags: string; need: string; build: string }[];
  };
  /** Lo que va por escrito en la propuesta (bloque Commitments, una hoja blanca sobre negro). */
  commitments: {
    heading: string;
    intro: string;
    sheet: string;
    you: string;
    items: { title: string; text: string }[];
  };
  process: {
    heading: string;
    steps: Step[];
  };
  cases: { heading: string; ids: CaseId[] };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  cta: {
    titleLead: string;
    titleAccent: string;
  };
  /** Anchor text con el que los OTROS estados enlazan a este. Único por estado. */
  linkLabel: string;
  /** Nombre del servicio en el schema Service. */
  serviceName: string;
  /** Descripción del HowTo del proceso. */
  howToDescription: string;
}

export interface State {
  /** Clave interna. También es el `source` del formulario. */
  id: string;
  /**
   * `draft` = existe en código pero NO se publica: no genera página, no entra
   * al sitemap, a llms.txt ni a los enlaces entre estados. Soltar muchos estados
   * el mismo día es la huella programática que Google lee como doorway pages:
   * se pasan a `live` cuando su copy está listo, con semanas de por medio.
   */
  status: 'live' | 'draft';
  /**
   * ISO con zona (p. ej. '2026-11-02T00:00:00-06:00'). Un estado `live` con
   * fecha futura se comporta como `draft`. El sitio es estático: se publica en
   * el primer build después de esa fecha (ver CLAUDE.md, deploy hook diario).
   */
  publishAt?: string;
  /** Segmento de URL, igual en los dos idiomas: /texas/ y /en/texas/. */
  slug: string;
  /** Nombre del estado para el schema `areaServed`. */
  name: string;
  /** Nombre en español, solo si cambia (Nueva York). Se lee con `stateName`. */
  nameEs?: string;
  /** Centro geográfico del estado. */
  geo: { latitude: number; longitude: number };
  /** Ciudades principales dentro del área de servicio (schema `areaServed`). */
  areas: string[];
  copy: Record<Lang, StateCopy>;
}
