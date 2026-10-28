# Design

## Context

- El dominio sale de dos fuentes: `site` en `astro.config.mjs` (Astro arma con él canonical, sitemap y `Astro.site`) y `SITE.url` en `src/config/site.ts` (schema, OG, WhatsApp). El resto de menciones son literales sueltos (robots.txt, OG, asuntos de correo, privacidad, vercel.json).
- `aurinux.com` nunca tuvo DNS (verificado 2026-10-28), así que no hay URLs indexadas ni enlaces externos que redirigir.
- `aurin.consulting` está en Hostinger, estacionado. El sitio se sirve desde Vercel (proyecto aún por conectar en la cuenta `aurins-projects`, plan Hobby).

## Goals / Non-Goals

**Goals:**
- Un solo cambio de dominio, completo, antes del primer deploy público.
- Que el cambio quede comprobable desde el build (buscar `aurinux.com` en la salida).

**Non-Goals:**
- Migrar el remitente de Resend: sigue `noreply@aurin.mx`.
- Reescribir los comentarios del código que dicen "aurinux" como nombre del proyecto; se cambian solo si confunden.
- Cambiar los `<title>` de "agencia" a "studio" (decidido: solo el `<h1>` del hero).

## Decisions

- **Cambiar el valor en sus dos fuentes y quitar los literales**: los literales que se puedan derivar de `SITE.url` (pie de OG, asuntos de correo) pasan a usar `new URL(SITE.url).host` en vez de repetir el dominio. Alternativa descartada: buscar y reemplazar texto, que deja la próxima mudanza igual de frágil.
- **Sin redirect desde aurinux.com**: no hay nada indexado. Si se conserva el dominio, se agrega en Vercel como redirect 308 a `aurin.consulting`, sin tocar código.
- **DNS en Hostinger apuntando a Vercel** (registros A/CNAME que indique Vercel al agregar el dominio). Alternativa: transferir el DNS a Vercel; no hace falta.
- **Search Console por DNS (propiedad de dominio)**, como dice CLAUDE.md; la verificación por meta (`PUBLIC_GOOGLE_SITE_VERIFICATION`) queda de respaldo.

## Risks / Trade-offs

- [Publicar antes de que el DNS apunte a Vercel] → el sitio quedaría con canonical a un dominio estacionado. Mitigación: hacer el cambio de código y el deploy solo cuando `aurin.consulting` responda desde Vercel.
- [GA4/Clarity creados con el dominio viejo] → datos mezclados o vacíos. Mitigación: crear las propiedades ya con `aurin.consulting`.
- [Hobby no permite uso comercial] → Vercel puede pausar el proyecto. Mitigación: tarea de decisión sobre Pro en tasks.md.

## Migration Plan

1. Agregar `aurin.consulting` y `www.aurin.consulting` al proyecto en Vercel; copiar los registros DNS a Hostinger.
2. Cuando Vercel marque el dominio como válido, aplicar los cambios de código y desplegar.
3. Verificar (tareas del grupo 3) y dar de alta Search Console / Bing con el sitemap nuevo.
4. Rollback: revertir el commit; el dominio puede seguir apuntando a Vercel sin daño.
