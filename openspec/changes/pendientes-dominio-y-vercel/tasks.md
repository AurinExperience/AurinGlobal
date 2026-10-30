# Tasks

## 1. Dominio en Vercel y DNS

- [ ] 1.1 Conectar AurinGlobal a Vercel (cuenta `aurins-projects`) y verificar que el proyecto aparece con un deploy Ready
- [x] 1.2 Poner la retención de deploys del proyecto en Canceled 1 día, Errored 1 día, Pre-Production 1 semana, Production 2 semanas (Settings → Build and Deployment) y verificar que dice "Deployment retention policy updated"
- [x] 1.3 Agregar `aurin.consulting` y `www.aurin.consulting` al proyecto y copiar los registros DNS a Hostinger; verificar que Vercel marca los dos como "Valid Configuration" y que `curl -sI https://aurin.consulting/` responde `server: Vercel`

## 2. Cambio de dominio en el código

- [ ] 2.1 Cambiar `site` en `astro.config.mjs` y `url`/`logoUrl`/`ogImage` en `src/config/site.ts` a `https://aurin.consulting`; verificar con `npm run build` que el sitemap y el canonical usan el dominio nuevo
- [ ] 2.2 Derivar de `SITE.url` el host en el texto de WhatsApp (`site.ts`), el pie de las OG (`src/pages/og/[...path].png.ts`) y los asuntos de `api/contact.ts` y `api/whatsapp-lead.ts`; verificar con un lead de prueba (`MAIL_TEST_TO`) que el asunto dice `aurin.consulting`
- [x] 2.3 Actualizar `public/robots.txt` (comentarios y línea `Sitemap:`) y el redirect de www en `vercel.json`; verificar que `curl -sI https://www.aurin.consulting/diseno-web/` da 301/308 a `https://aurin.consulting/diseno-web/` (el de `vercel.json` no se aplica con el adaptador de Astro: el 308 lo hace el dominio en Vercel, Settings → Domains)
- [ ] 2.4 Actualizar `src/data/privacy.ts` (dominio en ES y EN y fecha de actualización); verificar en `/privacidad/` y `/en/privacy/`
- [ ] 2.5 Actualizar CLAUDE.md y README.md al dominio nuevo; verificar con `grep -rn "aurinux.com" CLAUDE.md README.md` sin resultados

## 3. Verificación del dominio

- [ ] 3.1 Buscar `aurinux.com` en la salida del build (`grep -rl "aurinux.com" .vercel/output/static`) y en `/sitemap.xml`, `/robots.txt` y `/llms.txt` en producción; verificar que no aparece
- [ ] 3.2 Revisar canonical, hreflang y JSON-LD de la home, un servicio y Texas con el validador de Rich Results; verificar que todo usa `https://aurin.consulting`

## 4. Alta y medición

- [ ] 4.1 Verificar `aurin.consulting` en Search Console (propiedad de dominio por DNS) y en Bing Webmaster, y enviar el sitemap; verificar que ambos lo marcan como leído
- [ ] 4.2 Crear la propiedad GA4 y el proyecto Clarity con el dominio nuevo y poner `PUBLIC_GA4_ID` / `PUBLIC_CLARITY_ID` en Vercel; verificar que aparece el aviso de cookies y que GA4 recibe la visita en tiempo real
- [ ] 4.3 Apuntar los perfiles de Clutch, DesignRush y GoodFirms a `aurin.consulting`; verificar que cada perfil enlaza al dominio nuevo

## 5. Pendientes de Vercel (2026-10-28)

- [ ] 5.1 Revisar en Usage el Fluid Active CPU de `aurinsite` y `aurin-payload-cms` tras el cambio de caché de aurin.mx (`s-maxage` 60 s → 1 día, commit 77f1ef7); verificar que baja respecto a 3h/4h y anotar el valor
- [ ] 5.2 Revisar en Observability → CDN Requests de `aurinsite` el % de caché; verificar que sube del 10.6% medido antes del cambio
- [ ] 5.3 Revisar que Functions Storage baja de 7.03 GB tras la retención de deploys; anotar el valor
- [ ] 5.4 Decidir el plan Pro (US$20/mes) antes de publicar aurin.consulting: Hobby no permite uso comercial y ya serían tres sitios comerciales; verificar el plan en Settings → Billing
- [ ] 5.5 Terminar la mudanza del task manager a Dokploy y borrar o dejar pausado `aurin-task-manager` en Vercel; verificar que `pm.aurincloud.com` responde desde el servidor nuevo

## Workflow follow-up

- No cambiar a "studio" los `<title>` ni las landings: se decidió solo el `<h1>` del hero (aplicado el 2026-10-28).
- Las URLs con `?gclid=`/`utm_` de aurin.mx se dejan como visitas distintas en la caché, por decisión del usuario.
- Archivar el change cuando todas las tareas estén completas.
