# Spec Delta

## Purpose

Define cuál es el dominio propio del sitio de Aurin para EE. UU. y garantiza que buscadores, crawlers de IA y visitantes vean siempre ese único dominio.

## ADDED Requirements

### Requirement: Dominio principal único
El sitio SHALL publicar `https://aurin.consulting` como su único dominio en canonical, hreflang, sitemap, robots.txt, llms.txt, JSON-LD y metadatos Open Graph/Twitter. Ninguna respuesta pública SHALL contener URLs absolutas de `aurinux.com`.

#### Scenario: Canonical y hreflang de una página
- **WHEN** se pide `https://aurin.consulting/en/texas/`
- **THEN** el `<link rel="canonical">` y todos los `<link rel="alternate" hreflang>` apuntan a URLs que empiezan con `https://aurin.consulting/`

#### Scenario: Sitemap y robots
- **WHEN** se piden `/sitemap.xml` y `/robots.txt`
- **THEN** cada `<loc>` del sitemap y la línea `Sitemap:` de robots.txt usan `https://aurin.consulting`

#### Scenario: Datos estructurados
- **WHEN** se lee el JSON-LD de cualquier página
- **THEN** `url`, `@id`, `logo` e `image` de la entidad usan `https://aurin.consulting`

#### Scenario: Sin rastros del dominio anterior
- **WHEN** se busca la cadena `aurinux.com` en el HTML, el sitemap, robots.txt y llms.txt del build
- **THEN** no aparece

### Requirement: Variante www redirige al dominio principal
Toda petición a `www.aurin.consulting` SHALL responder con un redirect permanente (301 o 308) a la misma ruta en `https://aurin.consulting`.

#### Scenario: Redirect de www conservando la ruta
- **WHEN** se pide `https://www.aurin.consulting/diseno-web/`
- **THEN** la respuesta es un redirect permanente a `https://aurin.consulting/diseno-web/`

### Requirement: El dominio aparece en lo que ve la gente y el equipo
Los textos visibles y los mensajes generados que nombran el sitio SHALL usar `aurin.consulting`: pie de las imágenes OG, mensaje prellenado de WhatsApp, asunto de los correos de leads y aviso de privacidad.

#### Scenario: Correo de un lead
- **WHEN** alguien envía el formulario de contacto
- **THEN** el asunto del correo que recibe el equipo dice `aurin.consulting`

#### Scenario: Aviso de privacidad
- **WHEN** se abre `/privacidad/` o `/en/privacy/`
- **THEN** el responsable de los datos se describe en `aurin.consulting` y la fecha de actualización es la del cambio
