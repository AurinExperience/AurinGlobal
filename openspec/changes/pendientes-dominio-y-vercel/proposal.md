# Proposal

## Why

AurinGlobal se construyó para `aurinux.com`, pero el dominio definitivo será **aurin.consulting**. Hoy el código apunta a `aurinux.com` en canonical, sitemap, schema, OG, robots.txt, llms.txt, correos de leads y el aviso de privacidad: publicar así mandaría a Google a un dominio que no existe. Además, el 2026-10-28 quedaron pendientes de Vercel que hay que cerrar cuando el sitio salga en vivo.

Estado verificado el 2026-10-28:
- `aurinux.com` no tiene DNS: nunca se publicó, no hay historial en Google que proteger.
- `aurin.consulting` está estacionado en Hostinger (página "Parked Domain"), todavía no apunta a Vercel.

## What Changes

- El dominio principal del sitio pasa de `aurinux.com` a `aurin.consulting` en todo lo que ve Google, los crawlers de IA y la gente: canonical, hreflang, sitemap, robots.txt, llms.txt, JSON-LD, imágenes OG (texto del pie), enlace de WhatsApp, asunto de los correos de leads y aviso de privacidad.
- `www.aurin.consulting` redirige con 301 a `aurin.consulting` (hoy esa regla existe para `www.aurinux.com`).
- La documentación del proyecto (CLAUDE.md, README) usa el dominio nuevo.
- Pendientes de Vercel ligados al lanzamiento: retención de deploys en el proyecto nuevo, revisión del CPU tras la caché de aurin.mx y decisión sobre el plan Pro.
- Ya aplicado fuera de este change (2026-10-28), solo como referencia: el `<h1>` del hero de la home dice "Estudio de diseño UX/UI" / "UX/UI design studio" en AurinGlobal y en aurin.mx; los `<title>` siguen con "agencia/agency".

## Capabilities

### New Capabilities
- `site-domain`: Qué dominio publica el sitio como propio (canonical, sitemap, schema, robots, llms.txt, OG) y cómo se redirigen las variantes del host.

### Modified Capabilities

(ninguna: el proyecto aún no tiene specs)

## Impact

- Código: `astro.config.mjs` (`site`), `src/config/site.ts` (`url`, `logoUrl`, `ogImage`, texto de WhatsApp), `vercel.json` (redirect de www), `public/robots.txt`, `src/pages/og/[...path].png.ts`, `src/pages/api/contact.ts`, `src/pages/api/whatsapp-lead.ts`, `src/data/privacy.ts` (y su fecha), `package.json` (`name`, opcional).
- Comentarios que mencionan aurinux (estilos, componentes copiados de aurin.mx): cosméticos, no cambian comportamiento.
- Externos: DNS en Hostinger, dominio en Vercel, Search Console y Bing Webmaster, IDs de GA4/Clarity (la propiedad debe ser del dominio nuevo), perfiles en Clutch/DesignRush/GoodFirms.
- Resend: el remitente sigue siendo `noreply@aurin.mx` (dominio ya verificado); no cambia.
