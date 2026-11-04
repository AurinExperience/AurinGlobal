import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';

/*
 * robots.txt como endpoint (antes en /public): así sale con `charset=utf-8` también en
 * `npm run dev`, donde el archivo estático salía sin charset y los acentos se veían rotos.
 */
const body = `# Todos los bots tienen permiso de entrar, también los de inteligencia artificial.
# Solo se excluye /api/: son los formularios y ahí no hay nada que leer.
User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE.url}/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
