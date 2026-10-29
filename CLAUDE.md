# Aurin · aurin.consulting

Sitio de Aurin (agencia de UX/UI, branding y desarrollo web) para posicionarse en Estados Unidos.
Diseño de Claude Design (export original en `diseno-original/`) llevado al mismo stack y arquitectura que aurin.mx (`../AurinWebsite`).

## Comandos

```bash
npm run dev        # http://localhost:4321 — muestra también los estados draft/programados
PROD_PREVIEW=1 npm run dev   # simula producción (solo lo publicado)
npm run build      # build en .vercel/output/ (estáticos en .vercel/output/static)
npm run preview
```

## Stack

Astro 6 estático (`output: 'static'`) en Vercel, CSS Modules, TypeScript estricto. Sin React por ahora:
nada en estas páginas necesita isla. `@astrojs/vercel` está instalado solo por los endpoints, que llevan
`export const prerender = false`; todo lo demás sigue siendo estático.

## Leads (formulario y WhatsApp)

- `/api/contact/` (LeadForm) y `/api/whatsapp-lead/` (botón flotante) mandan el correo con Resend desde
  `src/lib/mail.ts`: remitente "Aurin Consulting" `no-reply@aurin.mx` (dominio ya verificado en la cuenta de aurin.mx), destino
  info@sodio.net y leonel@sodio.net, `reply_to` = el correo del lead. Requiere `RESEND_API_KEY` en Vercel;
  `MAIL_TEST_TO` solo en local para probar sin escribirle al equipo.
- El resultado del LeadForm sale en un `<dialog>` modal (también al volver sin JS con `?enviado=1|0`): el aviso
  bajo el botón no se veía. aurin.mx tiene el suyo (`FormDialog`).
- LeadForm = mismos campos y look que el LeadForm de aurin.mx: nombre, correo (`EmailInput`, sugiere dedazos), teléfono,
  cómo contactarte, tipo de proyecto, mensaje opcional y aviso de privacidad bajo el botón. Obligatorios con * lima.
- Los dos tienen honeypot (`website` / `empresa`) y validan el teléfono con `src/lib/phone.ts` (libphonenumber).
- `PhoneInput` (copia de aurin.mx): lada por país, EE. UU. por omisión (aurin.mx usa México) y la región del
  idioma del navegador si coincide. Manda `phone` + `phoneLada`.
- `WhatsAppButton` (copia de aurin.mx, en Layout): burbuja 👋 → mini-formulario → abre wa.me ANTES de
  cualquier await (si no, es popup bloqueado) y en paralelo manda el respaldo por correo con `keepalive`.
  Sin el halo `waRing` de allá (animaba box-shadow) ni métricas (aún no hay GA4/Clarity aquí).
- Probar con curl: Astro exige el header `Origin` en POST (sin él da 403) y la ruta lleva barra final.

## Cookies, analítica y privacidad

- `Analytics.astro` (en el `<head>`): el script de consentimiento de aurin.mx. GA4 diferido hasta la primera
  interacción (no frena el LCP), Clarity al cargar. EE. UU./México/LatAm: activas por defecto y se apagan en
  "Preferencias de cookies" (opt-out, respeta GPC); Europa y Canadá: solo con "Aceptar". Elección en localStorage 12 meses.
- Solo se pinta con `PUBLIC_GA4_ID` o `PUBLIC_CLARITY_ID` (`ANALYTICS_ON` en config/site.ts): sin IDs no hay
  script, ni aviso, ni botón de preferencias en el pie. IDs propios de aurin.consulting, NUNCA los de aurin.mx.
- Conversiones: `window.aurinTrack('generate_lead')` (formulario) y `'whatsapp_lead'`. Marcarlas como evento clave en GA4.
- `/privacidad/` ↔ `/en/privacy/`: en el registro de páginas como `legal` (sitemap con prioridad 0.3, fuera de llms.txt).
  Enlazado desde el pie de todas las páginas (también las minimal). Si cambia un proveedor o una cookie, actualizar
  `data/privacy.ts` y su fecha. Conviene que lo revise un abogado.

## Estructura (igual que aurin.mx)

```
src/
├── pages/                index, en/index, [servicio] (ES), en/[service] (EN), [estado] (ES), en/[state] (EN), privacidad ↔ en/privacy,
│                         industrias ↔ en/industries (índice con buscador), 404,
│                         sitemap.xml, llms.txt, og/[...path].png (OG por página, en build)
├── components/
│   ├── ui/               ButtonIsland (de aurin.mx), MainButton, SecondaryButton, Grain, PhoneInput, WhatsAppButton,
│   │                     Analytics (GA4 + Clarity con consentimiento), CookieConsent
│   ├── layout/           Header, Footer (minimal en landings; NAP de SITE.address), CtaBanner
│   └── pages/            HomePage, ServicePage, StatePage (plantilla de estado; sin nombres de estados), PrivacyPage, IndustriesPage
├── blocks/
│   ├── home/             secciones exclusivas de la home (HeroHome = faro)
│   ├── landing-state/    HeroState (h1 + argumentos + botón al formulario del cierre; foto con shader), LeadForm, Industries, ServicesIncluded, FaqSection
│   └── shared/           SEO/ (AdvancedSEO, GlobalSchema), FaqList, ProcessSteps, RelatedLinks (estados/servicios hermanos),
│                         IndustryCards (tarjetas de industria con logos de clientes; home, estados y /industrias/),
│                         Team (fotos reales de la oficina, fundadores con LinkedIn, dirección + Google Maps)
├── data/
│   ├── home.ts           copy de la home ES/EN
│   ├── services/         un archivo por servicio (copy ES/EN de su página + fila de la home) + index.ts
│   ├── industries/       páginas de industria (misma plantilla ServicePage; hoy: apps de remesas)
│   ├── privacy.ts        aviso de privacidad y cookies ES/EN (`#cookies` = destino del aviso)
│   ├── cases.ts          casos de estudio (proyectos PUBLICADOS en el CMS de aurin.mx, con su URL real)
│   └── states/           un archivo por estado + index.ts (lista CERRADA)
├── i18n/index.ts         idiomas, rutas y textos de interfaz compartidos
├── lib/                  pages.ts (registro de páginas indexables), seo.ts (faqSchema), mail.ts (Resend), phone.ts
├── config/site.ts        NAP y entidad (idéntico a aurin.mx)
└── styles/               global.css → fonts + tokens/ + base + utilities
```

## Reglas de marca (no cambiar)

- Tipografías: **Titillium Web** títulos, **Clarity City** textos. Auto-hospedadas en `public/fonts` (mismas que aurin.mx). No usar Urbanist.
- Colores: negro `#000000`, lima `#D0DF00`, blanco `#FFFFFF`, gris `#7D7F79` / `#A3A69F`.
- Header: el de aurin.mx (fijo sobre el hero / sticky en landings, transparente arriba y, al bajar, vidrio negro de lado a lado
  (blur fuerte, hairline abajo) con `animation-timeline: scroll()`, idioma con globo). A diferencia de allá, los enlaces se ven en escritorio; en móvil,
  círculo lima que abre un `popover` nativo (sin MegaMenu). El CTA "Agenda una llamada" vive en el header; en landings y
  servicios el hero también lo lleva (el formulario está en el cierre de la página).
- Menú: el MISMO en todas las páginas y armado con los datos (Header.astro): Servicios ▾ (`SERVICES`),
  Industrias ▾ ("Todas las industrias" → /industrias/ + `INDUSTRY_PAGES`), Casos y Nosotros (anclas de la home).
  Estados NO va en el menú (decidido en octubre 2026): las landings de estado se enlazan desde el pie y entre ellas.
  Una página nueva en esas listas sale sola en el menú de todo el sitio (enlazado interno); un grupo vacío no se pinta.
  Los grupos abren con hover o foco (Tab), sin JS; la página actual va con `aria-current` y su grupo en lima.
  En móvil, el popover agrupa por sección y hace scroll si crece. Si un grupo pasa de ~8 enlaces, que su
  primer enlace sea una página índice (p. ej. /industrias/) en vez de alargar la lista.
- Botones: los de aurin.mx (`ButtonIsland`: texto + cuadro con flecha `lucide-astro`, la flecha gira al hover). `MainButton` lima, `SecondaryButton` oscuro, `small` en el header. Sin el `Tilt` de React de allá.
- Títulos (h1/h2): como el de aurin.mx, parte delgada + acento en lima y seminegrita (`.accent`). En los datos el acento va
  entre `*asteriscos*` y lo pinta `components/ui/Accent.astro`; en secciones blancas o lima el acento queda en negro
  (`.section :global(.accent) { color: inherit }` en su módulo). Si el título va a un schema, quitarle los `*`.
- Motivo de marca: la luz (el punto de la "i" del logo) y "+Cerca / +Lejos".
- Estética premium: mucho negro, la lima solo como acento.

## Tokens

`styles/tokens/*` son copia de aurin.mx (`--color-yellow`, `--color-black-a`, `--font-*`, `--spacing-*`…) para poder
traer componentes de allá sin tocarlos. Lo exclusivo de aurin.consulting va al final de cada archivo, marcado
(`--color-black`, `--color-gray-c`, `--color-text-dark`, `--container-*`). Sin estilos inline: todo en `.module.css`.

Ojo con las capas: tokens/base/utilities están en `@layer`, los módulos no. Un módulo SIEMPRE le gana a una
utilidad global, así que los cambios responsive de un componente van en su propio módulo.

## Idiomas

Español sin prefijo (`/texas/`), inglés en `/en/` (`/en/texas/`); los slugs de estado son iguales en los dos.
Los servicios sí traducen el slug (`/diseno-web/` ↔ `/en/web-design/`): `localizedPath` lo resuelve con `SERVICES`.
hreflang `es-US` / `en-US` y `x-default` al inglés (el público está en EE. UU.). URLs siempre con barra final.

## Home y páginas de servicio

- Home: hero, clientes, servicios (cada fila enlaza a su página), industrias (clientes reales), investigación, IA
  (solo acelera diseño y desarrollo; los datos del cliente no pasan por herramientas de IA, revisión humana), equipo, proceso, casos, EE. UU., nosotros + FAQ, CTA.
- Servicios (`/diseno-web/`, `/desarrollo-web/`, `/diseno-ux-ui/`, `/branding/`): reutilizan bloques de las landings
  (HeroState con formulario, Industries, ServicesIncluded = entregables, FaqSection) y de la home (Research = enfoque, Cases).
  Schema: Service con OfferCatalog (entregables), BreadcrumbList, FAQPage. Pie completo (no minimal).
  Con `approach.contrast` (los 4 servicios) la 2.ª sección es blanca: `Contrast` compara "lo de siempre" (gris) contra
  "con Aurin" (negro con luz lima) y "Qué incluye" pasa a negro (`dark`), para no juntar dos blancas.
  En los 4 servicios (los que llevan `contrast`) bajo el hero va el carrusel de logos (`Clients`) en vez de la franja de industrias.
  Con `types` (hoy solo diseño web: landing page, sitio de empresa, rediseño) van tipos de sitio (blanca) → casos (negra) →
  proceso (lima) → `support` (hosting y soporte, negra); sin `types`, los servicios con `contrast` no muestran casos.
  Sin rangos de precio ni de tiempo en ningún texto (decidido en octubre 2026). Sí ofrecemos hosting y soporte. Con `guarantees` (hoy desarrollo web, UX/UI y branding; se quitó de diseño web) va `Guarantees`: franja lima con lo que va por escrito
  (ves el diseño antes de programar, precio cerrado, el sitio es tuyo, fechas) y botón a la llamada. Se probaron y descartaron: muestras/demos interactivas
  de sitios inventados (se veían sencillas y no vendían).
- Casos: solo proyectos publicados en aurin.mx (uno en borrador allá daría 404). Sin cifras de resultados: no hay datos medidos.
- Industrias (`HOME[lang].industries.items`): la home muestra las primeras 6 + "Ver todas" → `/industrias/` (todas, con buscador
  que ignora acentos y lee el `alt` de los logos). Cada tarjeta: clientes reales con el logo del carrusel (`CLIENTS`, se busca por
  nombre) o el nombre si no hay logo; en una fila, y si no caben se deslizan (lo calcula IndustryCards al compilar). Sin enlaces
  dentro de las tarjetas. Logos en `CLIENTS` (también el carrusel): oscuros sobre blanco por defecto (gris + invertido);
  `tone: 'light'` si ya es claro sobre negro, `tone: 'color'` si es de colores claros.

## Landings por estado

- Agregar un estado: copiar `src/data/states/texas.ts`, reescribir TODO el copy en ES y EN (texto único: si no,
  son doorway pages) y sumarlo a `ALL_STATES`. Rutas, sitemap, llms.txt, OG, footer y enlaces entre estados salen solos.
- `status: 'draft'` lo oculta en producción. `publishAt` programa la publicación, pero el sitio es estático:
  se publica en el primer build después de la fecha → configurar un Deploy Hook de Vercel llamado a diario.
- Publicar de a uno, con semanas de por medio (misma estrategia que aurin.mx). Texas es el piloto: no sumar otro estado
  hasta ver impresiones en Search Console.
- Secciones: hero + formulario, clientes, por qué Aurin en el estado (`why`: zona horaria, idioma, cercanía, datos
  verificables como el Censo), servicios (enlazan a sus páginas), industrias con clientes reales (`sectors`), proceso,
  casos, FAQ, CTA, estados hermanos. Medido en build: FCP ~0.2 s, LCP ~0.33 s, ~108 KB, ~1,000 palabras.
- Inglés para estadounidenses: lo que se vende es "inglés fluido"; lo bilingüe es un extra, no el argumento principal.

## Canibalización (una búsqueda principal por página)

Dentro de aurin.consulting:
- Home: marca + agencia general ("agencia digital de UX/UI, web y branding"); no usar "agencia de diseño web" en su title.
- Se dice "agencia" / "agency", no "estudio" / "studio": es lo que la gente busca (decidido en octubre 2026). Sin "nearshore" en ningún texto.
- Servicios: cada uno su término (diseño web, desarrollo web, diseño UX/UI, branding) + EE. UU., y su comprador:
  diseño web = el sitio que convence y vende (dueño de negocio); desarrollo web = lo que el sitio HACE (pagos, reservas,
  portales, sistemas, conexiones); UX/UI = empresas con app o plataforma (usuarios que se atoran); branding = marca
  completa para que te elijan antes de comparar precios. Sin nombres de clientes en los textos de servicio.
- Estados: servicio + estado. Industrias: el nicho (p. ej. "apps de remesas").

Títulos de Google (`seo.title`): [búsqueda exacta como la escribe el cliente] + [dónde] | [diferenciador] | Aurin.
Máximo 60 caracteres (si no cabe, se quita el diferenciador antes que la búsqueda o el dónde); descripción máximo 155–160.
El title del home es marca + agencia general, sin "Estados Unidos" (decidido en octubre 2026).
En español "páginas web" (así busca el dueño de negocio; validar con Search Console) y "Estados Unidos" completo
(en los textos visibles, "EE. UU."). Diferenciadores reales: bilingüe, desde 1998, ves el diseño antes de programar,
precio claro. Nada de "#1" ni "la mejor". Descripción (~150): qué y para quién → prueba → diferenciador → llamada gratis.
En inglés lo bilingüe solo como producto (sitios en inglés y español), no como argumento del equipo.

Contra aurin.mx: competir entre dominios no se castiga, pero si dos páginas atacan la misma búsqueda Google suele
mostrar solo una, y gana aurin.mx (más antiguo y con más autoridad). Por eso cada sitio tiene su terreno. Los dos
deben poder salir en EE. UU.: SIN hreflang entre dominios (haría que Google mostrara solo uno).

| Búsqueda                                                         | Sitio     | Por qué                                         |
|------------------------------------------------------------------|-----------|-------------------------------------------------|
| "nearshore … Mexico", "hire a design agency in Mexico"           | aurin.mx  | Ya la tiene; su ángulo es "desde México"        |
| Industrias para EE. UU. que ya existen allá (fintech, wealthtech, med spas, clínicas…: `../AurinWebsite/src/data/sectors/us-*`) | aurin.mx | Ya publicadas |
| Guías informativas (costos, elegir agencia, sitio bilingüe…)     | aurin.mx  | Ya existen (`../AurinWebsite/src/data/guides`)   |
| Portafolio y casos completos                                     | aurin.mx  | Ahí viven los proyectos (CMS)                   |
| Agencia + servicio + EE. UU.                                     | aurin.consulting   | Razón de ser del sitio                          |
| Estados de EE. UU. (Texas y los que sigan)                       | aurin.consulting   | aurin.mx solo tiene estados de México           |
| Nichos que aurin.mx no toca (remesas, …)                         | aurin.consulting   | Terreno libre                                   |

Reglas para cada página nueva:
1. Antes de crearla, buscar en aurin.mx (`src/data/sectors`, `src/data/guides`, sitemap en vivo) si ya existe una
   sobre lo mismo. Si existe, se enlaza en vez de duplicarla.
2. Nunca copiar texto de un sitio al otro, ni "adaptado": se escribe de cero.
3. Títulos distintos: aurin.mx dice "from Mexico / nearshore"; aurin.consulting dice "for US businesses" o el estado, sin "nearshore".
4. Con datos, revisar cada mes en Search Console las búsquedas donde salgan páginas de los dos sitios. Si alternan
   semana a semana, cambiarle el enfoque a una.

Orden de trabajo en aurin.consulting:
1. Antes de publicar: `RESEND_API_KEY` en Vercel (el formulario ya está conectado), Search Console, IDs de GA4/Clarity.
2. Perfiles en directorios de agencias de EE. UU. (Clutch, DesignRush, GoodFirms) apuntando a aurin.consulting: autoridad
   para el dominio nuevo.
3. Esperar 8–12 semanas con home, 4 servicios, Texas y remesas; con los datos, decidir el siguiente estado o nicho.

## Git

- Commits y PRs sin atribución a Claude (sin `Co-Authored-By` ni "Generated with Claude Code"); `.claude/settings.json` la apaga.

## Tono

- Lenguaje simple para clientes que no son del medio: nada de "itemizada", "por etapas", "entregables" en textos de venta.
  Decir "qué incluye, cuánto cuesta y cuándo se entrega".

## SEO / AEO (mantener)

- Un solo `<h1>` por página. Secciones con `aria-labelledby`.
- `AdvancedSEO`: canonical, hreflang, OG/Twitter con imagen propia por página, robots, enlace a llms.txt.
- `GlobalSchema` en todas: ProfessionalService + WebSite (misma entidad y NAP que aurin.mx, `sameAs` a aurin.mx).
- Home: Service ×4 (salen de `data/services`, `url` = la página de cada servicio) + FAQPage. Servicio: Service + OfferCatalog, BreadcrumbList, FAQPage. Estado: Service (areaServed State + ciudades), HowTo, BreadcrumbList, FAQPage.
- El FAQ visible y el FAQPage salen de los mismos items (`faqSchema`). El texto `pending` se ve en lima y no entra al JSON-LD.
- `robots.txt`: misma política de bots de IA que aurin.mx. 404 real, nunca redirigir al home.

## Animaciones y rendimiento

- Solo se animan `transform`, `translate` y `opacity`. Sin `filter: blur` animado.
- Keyframes que use un `.module.css` se declaran en ese módulo (CSS Modules renombra los nombres de animación).
- WebGL puro, sin three.js (pesaría ~150 KB para dibujar un rectángulo). Cada shader vive en el script de su bloque,
  se pausa fuera de pantalla, pinta un solo cuadro con reduced-motion y sin WebGL queda la versión CSS/foto.
  El hero compila con `KHR_parallel_shader_compile` (no congela el hilo principal) y dibuja a 1x en táctiles
  (`pointer: coarse`), 1.5x en escritorio. Medido en M2: 0.3 ms de GPU por cuadro, 60 fps, script 7.4 KB gzip.
  - `HeroState` (servicios, estados, industrias): a pantalla completa con el header `overlay`, como la home. Foto
    `public/img/arco.avif` (Clarisse Meyer, Unsplash, licencia Unsplash: persona en un arco de roca con la linterna
    en alto y la Vía Láctea real; invertida y en gris con curva de noche). El procesado (script en el scratchpad, no en
    el repo) aclara un poco el cielo, sobre todo detrás de la persona (contraluz), y deja la roca y la persona oscuras:
    la roca se detecta por color (poco azul) unida al borde de abajo y conserva su textura real; la persona sale de
    la foto (la ropa casi no tiene rojo) + cabeza de perfil y el otro brazo medidos a mano, y conserva los pliegues
    de la ropa y la cara que alumbra la linterna (en negro plano se veía falsa). Shader: haz lima que llega lejos,
    neblina en el haz, polvo, brillo tenue de la lámpara, estrellas que titilan a saltos (como la atmósfera),
    neblina baja que avanza delante de las rocas y grano. Se dibuja hasta 2x. El cielo tiene que ser de foto real.
    Descartado: luz de la linterna con textura inventada sobre la roca (se veía falsa).
    `LAMP`/`BEAM` = la lámpara y el haz medidos en la foto; `POS` = el object-position. Texto a la izquierda;
    `.scene` ocupa del 25% a la derecha con el borde fundido (`mask-image`) y muestra la foto casi entera: la persona
    queda chica y nítida (ampliada se veía borrosa). h1 más chico que en la home (`clamp(36px, 4vw, 56px)`).
    Sin eyebrow en servicios (repetía el h1). Títulos: búsqueda + EE. UU. + beneficio concreto.
    El formulario NO va en el hero: va en el CtaBanner del cierre (como la home) y el hero lleva el botón "Agenda una llamada gratis".
    Se probaron y descartaron: foto de Joshua Gresham (cielo falso), persona en SVG, haz en CSS, aurora boreal, estrellas fugaces, cielo solo de estrellas.
    `setup()` de los shaders vive en `lib/webgl.ts` (lo usan los dos heros).
  - `HeroHome` (el faro): la foto `public/img/faro.avif` (original, lima) es el fondo y el LCP. Se ve en gris: `SAT`,
    `REVEAL` y `LIGHT` en el shader controlan saturación, color que devuelve la luz y color del haz (`SAT` va
    igual en `filter: saturate()` de `.photo`). El shader titila estrellas, mueve neblina y dibuja luciérnagas (`fireflies()`: destello corto cada 5–11 s en otro lugar, dos o tres a la vez).
    El lago también es 3D: el rayo de vista corta el plano del agua, `waves()` (tres capas de olas en el mundo) inclina
    la superficie y desplaza el reflejo de la foto; lejos se aplanan para no parpadear; la lámpara deja un camino de
    destellos (`spec`, fuerte solo cuando la lente mira a la cámara). El lago viene oscurecido en la foto (noche sin
    luna) y solo brilla donde pasa el haz (`wl`: reflejo del haz, terreno iluminado, `pool()`, camino de luz).
    La foto se generó del original con curva `0.82·x^1.5` y el lago oscurecido hacia abajo (hasta 0.4).
    El haz se calcula en 3D, como un faro real: cámara en el origen a la altura del horizonte (`HZ`), teleobjetivo
    (`F`, igual en script y shader), lámpara a distancia 1, haz inclinado ~10° hacia el agua (`DIP`, mayor que la
    altura de la lámpara para que de frente baje al lago y no suba al cielo). Vuelta de 360° cada `PERIOD` (30 s) a
    velocidad constante: logo → frente (destello tenue, `glare()`) → derecha → por detrás de la torre → logo.
    Cada píxel toma el punto del haz más cercano a su rayo de vista (perspectiva real), la neblina dispersa más
    hacia adelante (Henyey-Greenstein, `G`). Luz sobre superficies: `SKY` es la línea de las montañas medida en la
    foto; donde el haz pasa sobre montañas o isla (`land()` × `shaft()`) la luz se posa y saca la textura, y se refleja
    en el lago; `pool()` es donde el cono toca el agua (brillo suave + destellos sueltos, se suma porque el agua es oscura);
    la linterna alumbra la torre y las rocas. El foco (`glass`, `lens` en el shader): los vidrios se iluminan
    multiplicando la foto, así se ven marcos, cúpula y lente; el haz solo los tapa cuando la lente mira a la cámara.
    Techo y balcón (`housing`) son sólidos: tapan el haz y el resplandor, la luz sale solo por el vidrio.
    El logo va centrado (como el h1) justo bajo la linterna, con la lámpara sobre la "i". Para eso `.scene` se alarga
    hacia la izquierda (`left` en `HeroHome.module.css`, usa `--lockup-w`: "User Experts" mide .56 del logo; si cambias
    la tipografía o el texto, recalcúlalo). `object-position` = la lámpara, (51.6%, 31.65%) de la escena; la vuelta
    arranca con el haz alineado al haz del logo. El haz pasa por detrás del logo: el logo no se pinta ni brilla con la luz.
    Las posiciones se leen con `offset*` (no `getBoundingClientRect`) para que la animación de entrada no haga saltar
    el haz, y el lienzo solo cambia de tamaño si cambió (cambiarlo lo borra y parpadea).
    Si cambias la foto, actualiza `IMG`, `LAMP`, `HZ`, `SKY`, `horizon()`, `tower()` y esos porcentajes en `HeroHome.module.css`.
- Ritmo: nunca más de dos secciones negras seguidas; `Team` va junto a una sección blanca (home: IA → Equipo → Proceso;
  estado: Servicios → Equipo). En servicios va `<Team compact />`: blanca, una foto, datos y fundadores,
  antes del FAQ (corta la fila de negras casos → FAQ → cierre). Entre negras seguidas, hairline arriba (`--color-gray-b`).
- Cielo de fondo (`body::before/::after` en base.css): estrellas y franja tipo Vía Láctea generadas con `node scripts/sky.mjs`
  (`public/img/sky*.avif`, versión `-m` en celular; ~118 KB / ~63 KB, AVIF calidad 36 / 40: más bajo se pierden las estrellas tenues). Utilidad `.sky` por sección: cada una elige qué parte
  se ve (`--sky-x/-y`, `--sky-size`, `--sky-flip`) para que no se sienta repetido. Intensidad: `--sky-opacity`. Con franja: UsTeam, Industrias, CTA;
  `.sky-stars` (solo estrellas sueltas): Investigación, Casos, pie. Dos secciones seguidas nunca con el mismo cielo (se ve cortado).
  Sin cielo: heros (en las landings se volvía el LCP), logos (negro liso), Equipo, FAQ y relacionados. La luz que sigue al cursor es `.spotlight` (utilities.css + script en Layout).
- Revelado al scroll con la clase global `.reveal` (`animation-timeline: view()`, sin JS).
- Todo respeta `prefers-reduced-motion` (base.css).
- CSS inline en el HTML (`inlineStylesheets: 'always'`), prefetch al hover, Speed Insights. Se precargan Clarity City
  y Titillium 300 (h1). Los logos del carrusel van con `fetchpriority="low"` para no competir con el hero.
  Medido en el build (local): FCP/LCP ~0.3 s, CLS 0, ~210 KB transferidos en la home.

## Pendientes

- `RESEND_API_KEY` en Vercel (sin ella los leads dan error). El botón "Agenda una llamada" del CtaBanner de la home no tiene destino (`#`).
- Crear la propiedad GA4 y el proyecto Clarity de aurin.consulting y poner sus IDs en Vercel (`PUBLIC_GA4_ID`, `PUBLIC_CLARITY_ID`):
  hasta entonces no hay analítica ni aviso de cookies (sin cookies no hay nada que avisar).
- Testimonios: se quitaron por no tener citas reales. Si se consiguen, sección nueva en la home (sin schema Review: Google no muestra estrellas de reseñas propias).
- Search Console (propiedad de dominio, por DNS) y Bing Webmaster (puede importar de Search Console): verificar aurin.consulting
  y mandar el sitemap. Si se verifica por meta: `PUBLIC_GOOGLE_SITE_VERIFICATION` / `PUBLIC_BING_SITE_VERIFICATION`.
- En pausa (decidido no hacerlo por ahora): enlaces desde aurin.mx/en a aurin.consulting y aurin.consulting en el `sameAs` de aurin.mx.
- Perfiles en Clutch, DesignRush y GoodFirms apuntando a aurin.consulting.
- Revisar el copy en inglés con alguien nativo.
