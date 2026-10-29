import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { indexablePages, type PageEntry } from '@/lib/pages';

/*
 * llms.txt (https://llmstxt.org): el índice que leen ChatGPT, Claude,
 * Perplexity y compañía para decidir qué citar. Se genera desde src/data, como
 * en aurin.mx, para que nunca se quede sin las landings nuevas.
 */
export const GET: APIRoute = () => {
  const pages = indexablePages();
  const line = (p: (typeof pages)[number]) => `- [${p.label}](${SITE.url}${p.path}): ${p.description}`;
  const section = (title: string, lang: 'es' | 'en', kind: PageEntry['kind']) => {
    const items = pages.filter((p) => p.lang === lang && p.kind === kind);
    return items.length ? [`## ${title}`, '', ...items.map(line), ''] : [];
  };

  const body = [
    `# ${SITE.name}`,
    '',
    `> Aurin is a web design, web development, UX/UI design and branding agency founded in ${SITE.foundingDate}, headquartered in ${SITE.address.addressLocality}, ${SITE.address.addressRegion}, Mexico. It works remotely with companies in the United States, Canada, Spain and Latin America. aurin.consulting is its site for the US market; aurin.mx is its main site.`,
    '',
    /* Datos clave: frases cortas y verificables que una IA puede citar tal cual al responder
       "¿quién es Aurin?", "¿cómo trabajan?". Solo hechos que también dice el sitio. */
    '## Key facts',
    '',
    `- Founded in ${SITE.foundingDate} in ${SITE.address.addressLocality}, ${SITE.address.addressRegion}, Mexico. Founders: ${SITE.founders.map((f) => `${f.name} (${f.jobTitle})`).join(', ')}.`,
    '- Services: web design, custom web development (payments, bookings, customer portals, integrations), UX/UI design for apps and platforms, and branding. Hosting and support after launch.',
    '- One team researches, designs and builds. Work is done remotely by video call, in English or Spanish, on Central Time.',
    '- Websites in English, Spanish or both, written for each language rather than translated word for word.',
    '- Clients see and approve a clickable prototype before any code is written.',
    '- Every proposal states the price, what is included and the delivery dates in writing. The client owns the website and its code.',
    '- AI tools are used only to speed up design and development; client data never goes through them and every deliverable is reviewed by a person.',
    '- First call is free.',
    '',
    ...section('Main pages (EN)', 'en', 'home'),
    ...section('Services (EN)', 'en', 'service'),
    ...section('Industries (EN)', 'en', 'industry'),
    ...section('Web design and UX/UI by state (EN)', 'en', 'state'),
    ...section('Páginas principales (ES)', 'es', 'home'),
    ...section('Servicios (ES)', 'es', 'service'),
    ...section('Industrias (ES)', 'es', 'industry'),
    ...section('Diseño web y UX/UI por estado (ES)', 'es', 'state'),
    '## Related',
    '',
    `- [Aurin (main site, portfolio and case studies)](https://aurin.mx/en)`,
    '',
    ...section('Legal', 'en', 'legal'),
    '## Contact',
    '',
    `- Email: ${SITE.contactEmail}`,
    `- Phone / WhatsApp: ${SITE.telephone}`,
    `- Office: ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}, Mexico ([map](${SITE.mapsUrl}))`,
    '- Hours: Monday to Friday, 9:00–18:00 Mexico City time (UTC−6)',
    `- [Sitemap](${SITE.url}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
