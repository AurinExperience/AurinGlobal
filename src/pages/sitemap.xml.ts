import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { LOCALE } from '@/i18n';
import { indexablePages } from '@/lib/pages';

/*
 * Sitemap desde el mismo registro que llms.txt y las OG (lib/pages.ts): agregar
 * un estado no depende de acordarse de este archivo. Cada URL declara sus
 * alternas por idioma + x-default (inglés: el público está en EE. UU.).
 */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = () => {
  const pages = indexablePages();
  const urls = pages.map((page) => {
    const siblings = pages.filter((p) => p.key === page.key);
    const en = siblings.find((p) => p.lang === 'en');
    const links = [
      ...siblings.map((p) => `<xhtml:link rel="alternate" hreflang="${LOCALE[p.lang].hreflang}" href="${SITE.url}${p.path}"/>`),
      en && `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}${en.path}"/>`,
    ].filter(Boolean);
    return `  <url>
    <loc>${SITE.url}${page.path}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <priority>${page.kind === 'home' ? '1.0' : page.kind === 'legal' ? '0.3' : '0.9'}</priority>
    ${links.join('\n    ')}
  </url>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
