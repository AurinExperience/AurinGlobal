import type { Lang } from '@/data/types';
import type { Service, ServiceId } from './types';
import { webDesign } from './web-design';
import { webDevelopment } from './web-development';
import { uxUiDesign } from './ux-ui-design';
import { branding } from './branding';

export type { Service, ServiceCopy, ServiceId } from './types';

/** Los servicios, en el orden de la home. Rutas, sitemap, llms.txt, OG y pie salen de esta lista. */
export const SERVICES: Service[] = [webDesign, webDevelopment, uxUiDesign, branding];

export function servicePath(service: Service, lang: Lang): string {
  return `${lang === 'en' ? '/en' : ''}/${service.slug[lang]}/`;
}

export const serviceById = (id: ServiceId) => SERVICES.find((service) => service.id === id)!;
