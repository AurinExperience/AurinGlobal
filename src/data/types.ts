import type { Lang } from '@/i18n';

export type { Lang };

/**
 * `pending` = texto por confirmar con el cliente. Se ve en lima en la página
 * (para que nadie lo publique sin notarlo) y NUNCA entra al JSON-LD.
 */
export interface FaqItem {
  question: string;
  answer: string;
  pending?: string;
}

export interface Step {
  name: string;
  text: string;
}
