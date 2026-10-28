import type { Service } from '@/data/services';
import { remittances } from './remittances';

/**
 * Páginas de industria: usan la plantilla de servicio (ServicePage) pero no salen en la lista de
 * servicios de la home. Solo nichos que aurin.mx NO cubre: allá ya hay fintech, wealthtech y otras
 * industrias para EE. UU. (ver Canibalización en CLAUDE.md).
 */
export const INDUSTRY_PAGES: Service[] = [remittances];
