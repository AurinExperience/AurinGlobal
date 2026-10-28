import type { FaqItem } from '@/data/types';

/**
 * FAQPage desde los mismos items que pinta FaqSection, para que el marcado y el
 * JSON-LD nunca se desincronicen (CLAUDE.md). El texto `pending` no entra.
 */
export const faqSchema = (items: readonly FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});
