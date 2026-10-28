import type { Lang } from '@/i18n';
import type { State } from './types';
import { texas } from './texas';

export type { State, StateCopy } from './types';

/**
 * Los ÚNICOS estados que existen. Para agregar uno: un archivo en esta carpeta
 * y una línea aquí. Rutas, sitemap, llms.txt, hreflang, OG y los enlaces entre
 * estados salen de esta lista: no hay otra que se pueda desincronizar. Cualquier
 * slug fuera de ella no genera página (404 real, no redirect al home).
 */
export const ALL_STATES: State[] = [texas];

/**
 * `npm run dev` muestra también los draft y programados para revisarlos;
 * `PROD_PREVIEW=1 npm run dev` simula producción. `MODE` y no `DEV`: DEV sigue
 * a NODE_ENV y en aurin.mx eso publicó programadas antes de tiempo.
 */
const SHOW_ALL = import.meta.env.MODE === 'development' && !process.env.PROD_PREVIEW;

export function isPublished(state: Pick<State, 'status' | 'publishAt'>, now = Date.now()): boolean {
  if (SHOW_ALL) return true;
  if (state.status !== 'live') return false;
  return !state.publishAt || Date.parse(state.publishAt) <= now;
}

/** Todo lo que mira al exterior pasa por aquí. */
export function publishedStates(): State[] {
  return ALL_STATES.filter((state) => isPublished(state));
}

export function statePath(state: State, lang: Lang): string {
  return `${lang === 'en' ? '/en' : ''}/${state.slug}/`;
}

/** Los demás estados publicados, ordenados por nombre, para los enlaces cruzados. */
export function siblingStates(current: State): State[] {
  return publishedStates()
    .filter((state) => state.id !== current.id)
    .sort((a, b) => a.name.localeCompare(b.name));
}
