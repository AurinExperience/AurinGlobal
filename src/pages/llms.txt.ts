import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { indexablePages } from '@/lib/pages';

/*
 * llms.txt (https://llmstxt.org): el índice que leen ChatGPT, Claude,
 * Perplexity y compañía para decidir qué citar. Se genera desde src/data, como
 * en aurin.mx, para que nunca se quede sin las landings nuevas.
 */
export const GET: APIRoute = () => {
  const pages = indexablePages();
  const line = (p: (typeof pages)[number]) => `- [${p.label}](${SITE.url}${p.path}): ${p.description}`;
  const section = (title: string, lang: 'es' | 'en', kind: 'home' | 'service' | 'industry' | 'state') => {
    const items = pages.filter((p) => p.lang === lang && p.kind === kind);
    return items.length ? [`## ${title}`, '', ...items.map(line), ''] : [];
  };

  const body = [
    `# ${SITE.name}`,
    '',
    `> Aurin is a web design, web development, UX/UI design and branding agency founded in ${SITE.foundingDate}, headquartered in ${SITE.address.addressLocality}, ${SITE.address.addressRegion}, Mexico. It works remotely with companies in the United States, Canada, Spain and Latin America. aurinux.com is its site for the US market; aurin.mx is its main site.`,
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
    `- [Aurin (main site, portfolio and case studies)](https://aurin.mx/en/)`,
    '',
    '## Contact',
    '',
    `- Email: ${SITE.contactEmail}`,
    `- [Sitemap](${SITE.url}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
