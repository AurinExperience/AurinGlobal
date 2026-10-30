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
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaSecondary: string;
  };
  /** Franja bajo el hero: industrias para las que ya se hizo este servicio, con el cliente real (su logo si está en CLIENTS). */
  industries: { heading: string; items: (string | { name: string; client: string })[] };
  /** Cómo lo hacemos: texto largo + las tres capas en perspectiva (bloque Research). */
  approach: {
    heading: string;
    text: string;
    layers: string[];
    /** Si está, la sección es blanca y compara "lo de siempre" contra lo que hacemos (bloque Contrast) en vez de las capas. */
    contrast?: Record<'bad' | 'good', { label: string; title: string; items: string[] }>;
  };
  /** Qué incluye: los entregables (van también al OfferCatalog del schema). `service`: en las industrias, el ítem enlaza a esa página de servicio (uno por servicio). */
  deliverables: { heading: string; intro?: string; items: { icon?: string; title: string; text: string; service?: ServiceId }[] };
  /** Tipos de sitio (bloque ServicesIncluded, blanco): el visitante se reconoce en uno. Con esto los casos van antes del proceso. */
  types?: ServiceCopy['deliverables'];
  process: { heading: string; steps: Step[] };
  /** Después del lanzamiento: hosting y soporte (ServicesIncluded negro), tras el proceso. */
  support?: ServiceCopy['deliverables'];
  cases: { heading: string; intro?: string };
  /** Si está, después del proceso va una franja lima de garantías (bloque Guarantees). */
  guarantees?: { heading: string; intro: string; items: { title: string; text: string }[] };
  faq: { heading: string; items: FaqItem[] };
  /** `light`: el cierre va en blanco. */
  cta: { titleLead: string; titleAccent: string; light?: boolean };
}

export type ServiceId = 'web-design' | 'web-development' | 'ux-ui-design' | 'branding';

/** Un servicio (src/data/services) o una página de industria (src/data/industries): misma plantilla. */
/** Fotos del hero de las páginas de industria (public/img/<id>.avif; medidas y animación en PHOTOS de HeroState). */
export type IndustryPhoto =
  | 'ind-fintech' | 'ind-remittances' | 'ind-healthcare' | 'ind-education' | 'ind-tourism' | 'ind-energy'
  | 'ind-culture' | 'ind-software' | 'ind-agencies' | 'ind-legal' | 'ind-real-estate' | 'ind-nonprofits';

export interface Service {
  id: string;
  /** Segmento de URL por idioma: /diseno-web/ y /en/web-design/. */
  slug: Record<Lang, string>;
  /** Proyectos de src/data/cases.ts que muestra la página. */
  cases: CaseId[];
  /** Páginas de industria: la foto de su hero (cada industria la suya; ver PHOTOS en HeroState). */
  photo?: IndustryPhoto;
  copy: Record<Lang, ServiceCopy>;
}
