import type { FaqItem, Lang, Step } from '@/data/types';
import type { CaseId } from '@/data/cases';

/**
 * Copy de una página de servicio. Igual que en las landings por estado, todo es texto único:
 * cada página tiene que responder su propia búsqueda ("agencia de diseño web", "branding"…).
 */
export interface ServiceCopy {
  seo: { title: string; description: string };
  /** Nombre corto: la fila de la home, el pie, el schema y los enlaces entre servicios. */
  name: string;
  /** Texto y etiquetas de la fila en la home (#servicios). */
  summary: string;
  tags: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaSecondary: string;
    points?: string[];
  };
  /** Franja bajo el hero: industrias para las que se hace este servicio. */
  industries: { heading: string; items: string[] };
  /** Cómo lo hacemos: texto largo + las tres capas en perspectiva (bloque Research). */
  approach: { eyebrow: string; heading: string; text: string; layers: string[] };
  /** Qué incluye: los entregables (van también al OfferCatalog del schema). */
  deliverables: { eyebrow: string; heading: string; items: { title: string; text: string }[] };
  process: { eyebrow: string; heading: string; steps: Step[] };
  cases: { eyebrow: string; heading: string };
  faq: { eyebrow: string; heading: string; items: FaqItem[] };
  cta: { titleLead: string; titleAccent: string };
}

export type ServiceId = 'web-design' | 'web-development' | 'ux-ui-design' | 'branding';

/** Un servicio (src/data/services) o una página de industria (src/data/industries): misma plantilla. */
export interface Service {
  id: string;
  /** Segmento de URL por idioma: /diseno-web/ y /en/web-design/. */
  slug: Record<Lang, string>;
  /** Proyectos de src/data/cases.ts que muestra la página. */
  cases: CaseId[];
  copy: Record<Lang, ServiceCopy>;
}
