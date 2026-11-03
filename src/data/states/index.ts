import type { Lang } from '@/i18n';
import type { State } from './types';
import { texas } from './texas';
import { florida } from './florida';
import { illinois } from './illinois';
import { georgia } from './georgia';
import { northCarolina } from './north-carolina';
import { pennsylvania } from './pennsylvania';
import { newYork } from './new-york';
import { california } from './california';
import { newJersey } from './new-jersey';
import { ohio } from './ohio';

export type { State, StateCopy } from './types';

/**
 * Los ÚNICOS estados que existen. Para agregar uno: un archivo en esta carpeta
 * y una línea aquí. Rutas, sitemap, llms.txt, hreflang, OG y los enlaces entre
 * estados salen de esta lista: no hay otra que se pueda desincronizar. Cualquier
 * slug fuera de ella no genera página (404 real, no redirect al home).
 */
export const ALL_STATES: State[] = [
  texas,
  florida,
  illinois,
  georgia,
  northCarolina,
  pennsylvania,
  newYork,
  california,
  newJersey,
  ohio,
];

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

export const stateName = (state: State, lang: Lang) => (lang === 'es' && state.nameEs) || state.name;

/**
 * Los siguientes en la lista, dando la vuelta: cada estado recibe enlaces de otros 6 aunque haya 50, y ninguno se queda
 * sin ellos como pasaría con los primeros del alfabeto. El resto se alcanza en /estados/.
 */
export function siblingStates(current: State, max = 6): State[] {
  const all = publishedStates();
  const i = all.findIndex((state) => state.id === current.id);
  return [...all.slice(i + 1), ...all.slice(0, i)].slice(0, max);
}

export const STATES_INDEX = {
  es: {
    slug: 'estados',
    seo: {
      title: 'Diseño de páginas web por estado en Estados Unidos | Aurin',
      description: 'Páginas web y branding con SEO básico o avanzado para empresas en cada estado de Estados Unidos. Qué le conviene a tu sitio según dónde vendes. Llamada gratis.',
    },
    title: 'Diseño de páginas web por estado',
    intro: 'Cada estado compra distinto. Entra al tuyo para ver qué le conviene a tu sitio según tu región. Si no aparece, escríbenos: trabajamos con empresas de todo Estados Unidos.',
  },
  en: {
    slug: 'states',
    seo: {
      title: 'Web Design by State for US Businesses | Aurin',
      description: 'Web design, UX/UI and branding with basic or advanced SEO for companies in each US state. See what your site needs based on where you sell. Book a free call.',
    },
    title: 'Web design by state',
    intro: 'Every state buys differently. Open yours to see what your site needs in your region. Not listed? Write to us: we work with companies across the United States.',
  },
} satisfies Record<Lang, unknown>;

export const statesPath = (lang: Lang) => `${lang === 'en' ? '/en' : ''}/${STATES_INDEX[lang].slug}/`;
