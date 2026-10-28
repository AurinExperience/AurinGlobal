/**
 * Idiomas y textos de interfaz (lo que se repite en todo el sitio: botones,
 * formulario, pie). El copy propio de cada página vive en src/data, como en
 * aurin.mx: si el texto de las landings fuera compartido, serían casi-duplicados
 * y Google no rankearía ninguna.
 *
 * Español sin prefijo (/texas/), inglés bajo /en/ (/en/texas/). Los slugs de
 * los estados son iguales en los dos idiomas, así que cambiar de idioma es solo
 * poner o quitar el prefijo. Los servicios sí traducen el slug (/diseno-web/ ↔
 * /en/web-design/): es la palabra que se busca en cada idioma.
 */
import { SERVICES } from '@/data/services';
import { INDUSTRY_PAGES } from '@/data/industries';
import { PRIVACY } from '@/data/privacy';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

/** Código para `lang`, hreflang y og:locale. El público de aurin.consulting está en EE. UU. */
export const LOCALE: Record<Lang, { html: string; hreflang: string; og: string }> = {
  es: { html: 'es', hreflang: 'es-US', og: 'es_US' },
  en: { html: 'en', hreflang: 'en-US', og: 'en_US' },
};

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en/') ? 'en' : 'es';
}

/** La misma ruta en otro idioma. Recibe y devuelve rutas con barra final. */
export function localizedPath(pathname: string, lang: Lang): string {
  let base = pathname.replace(/^\/en\//, '/');
  const service = [...SERVICES, ...INDUSTRY_PAGES].find((s) => LANGS.some((l) => base === `/${s.slug[l]}/`));
  if (service) base = `/${service.slug[lang]}/`;
  if (LANGS.some((l) => base === `/${PRIVACY[l].slug}/`)) base = `/${PRIVACY[lang].slug}/`;
  return lang === 'en' ? `/en${base}` : base;
}

export const UI = {
  es: {
    skip: 'Saltar al contenido',
    homeLabel: 'Aurin, inicio',
    home: 'Inicio',
    switchLang: { label: 'English', short: 'EN' },
    menu: { open: 'Abrir menú', label: 'Menú' },
    nav: { services: 'Servicios', cases: 'Casos', process: 'Proceso', about: 'Nosotros', industries: 'Industrias', states: 'Estados', faq: 'Preguntas', includes: 'Qué incluye' },
    otherServices: {
      heading: 'Otros servicios',
      description: 'Diseño web, desarrollo, UX/UI y branding viven en el mismo equipo: puedes empezar por uno y sumar los demás.',
    },
    caseLink: 'Ver caso',
    bookCall: 'Agenda una llamada',
    bookCallLong: 'Agenda una llamada gratis de 30 min',
    whatsapp: 'Escríbenos por WhatsApp',
    whatsappText: 'Hola, quiero información sobre un proyecto.',
    cookies: {
      title: '¿Aceptas las cookies?',
      text: 'Usamos cookies propias y de terceros para analizar el uso del sitio y mejorarlo.',
      link: 'Más información',
      reject: 'Rechazar',
      accept: 'Aceptar',
      noticeTitle: 'Usamos cookies',
      noticeText: 'Nos ayudan a analizar el uso del sitio y mejorarlo. Puedes desactivarlas en',
      noticeSettings: 'Preferencias de cookies',
      ok: 'Entendido',
    },
    wa: {
      cta: 'Hablemos por WhatsApp',
      title: 'Hablemos por WhatsApp',
      subtitle: 'Tu mensaje ya está listo, solo completa tus datos para enviarlo.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      phoneLabel: 'Tu WhatsApp',
      messageLabel: 'Mensaje',
      message: '¡Hola, Aurin! Vengo de su sitio web y me gustaría solicitar sus servicios. ¿Me pueden contar cómo trabajan y cómo puedo pedir una propuesta?',
      send: 'Enviar por WhatsApp',
      successTitle: '¡Tu mensaje está listo!',
      successText: 'Se abrió WhatsApp con tu mensaje. Solo presiona Enviar y te respondemos lo antes posible. ¿No se abrió? Usa el botón de abajo.',
      openNow: 'Abrir WhatsApp',
      close: 'Cerrar',
      closeBubble: 'Ocultar mensaje',
    },
    ctaText: 'Agenda una llamada gratis de 30 minutos. Sales con un plan claro y una propuesta con lo que incluye, el precio y las fechas.',
    ctaMail: '¿Prefieres escribirnos?',
    form: {
      title: 'Agenda tu llamada gratis',
      intro: '30 minutos, sin costo. Recibes una propuesta clara: qué incluye, cuánto cuesta y cuándo se entrega.',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo de trabajo',
      phone: 'Teléfono o WhatsApp',
      phoneError: 'Revisa el número: con la lada {lada} son {n} dígitos.',
      need: '¿Qué necesitas?',
      options: ['Diseño web', 'Desarrollo web', 'Diseño UX/UI', 'Branding', 'Varios servicios'],
      note: 'Te respondemos lo antes posible.',
      sending: 'Enviando…',
      successTitle: '¡Mensaje enviado!',
      success: '¡Listo! Recibimos tus datos y te escribimos lo antes posible.',
      errorTitle: 'No se pudo enviar',
      close: 'Entendido',
      error: 'No pudimos enviarlo. Inténtalo de nuevo o escríbenos a hey@aurin.mx.',
    },
    footer: {
      tagline: 'Diseño web, desarrollo web, diseño UX/UI y branding desde 1998.',
      services: 'Servicios',
      contact: 'Contacto',
      city: 'Cuernavaca, Morelos, México',
      remoteValue: 'Remoto: México · EE. UU. · Canadá · España · LatAm',
      site: 'Sitio',
      states: 'Estados',
      follow: 'Síguenos',
      backTop: 'Volver arriba',
      alsoAt: 'Portafolio completo en aurin.mx',
      rights: 'Todos los derechos reservados.',
      privacy: 'Aviso de privacidad',
      cookieSettings: 'Preferencias de cookies',
    },
    services: ['Diseño web', 'Desarrollo web', 'Diseño UX/UI', 'Branding'],
  },
  en: {
    skip: 'Skip to content',
    homeLabel: 'Aurin, home',
    home: 'Home',
    switchLang: { label: 'Español', short: 'ES' },
    menu: { open: 'Open menu', label: 'Menu' },
    nav: { services: 'Services', cases: 'Work', process: 'Process', about: 'About', industries: 'Industries', states: 'States', faq: 'FAQ', includes: 'What’s included' },
    otherServices: {
      heading: 'Other services',
      description: 'Web design, development, UX/UI and branding live in the same team: start with one and add the rest.',
    },
    caseLink: 'View case',
    bookCall: 'Book a call',
    bookCallLong: 'Book a free 30-min call',
    whatsapp: 'Message us on WhatsApp',
    whatsappText: 'Hi, I’d like information about a project.',
    cookies: {
      title: 'Do you accept cookies?',
      text: 'We use our own and third-party cookies to analyze how the site is used and improve it.',
      link: 'Learn more',
      reject: 'Reject',
      accept: 'Accept',
      noticeTitle: 'We use cookies',
      noticeText: 'They help us analyze how the site is used and improve it. You can turn them off in',
      noticeSettings: 'Cookie settings',
      ok: 'Got it',
    },
    wa: {
      cta: 'Let’s talk on WhatsApp',
      title: 'Let’s talk on WhatsApp',
      subtitle: 'Your message is ready, just fill in your details to send it.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Your WhatsApp',
      messageLabel: 'Message',
      message: 'Hi Aurin! I found you through your website and I’d like to hire your services. Could you tell me more about how you work and how to get a proposal?',
      send: 'Send via WhatsApp',
      successTitle: 'Your message is ready!',
      successText: 'WhatsApp opened with your message. Just tap Send and we’ll reply as soon as possible. Didn’t open? Use the button below.',
      openNow: 'Open WhatsApp',
      close: 'Close',
      closeBubble: 'Hide message',
    },
    ctaText: 'Book a free 30-minute call. You leave with a clear plan and a proposal showing what’s included, the price and the dates.',
    ctaMail: 'Prefer to write?',
    form: {
      title: 'Book your free call',
      intro: '30 minutes, no cost. You get a clear proposal: what’s included, what it costs and when it’s delivered.',
      name: 'Name',
      company: 'Company',
      email: 'Work email',
      phone: 'Phone or WhatsApp',
      phoneError: 'Check the number: numbers with country code {lada} have {n} digits.',
      need: 'What do you need?',
      options: ['Web design', 'Web development', 'UX/UI design', 'Branding', 'Several services'],
      note: 'We’ll get back to you as soon as possible.',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      success: 'Done! We got your details and will write back as soon as possible.',
      errorTitle: 'Couldn’t send it',
      close: 'Got it',
      error: 'We couldn’t send it. Try again or email us at hey@aurin.mx.',
    },
    footer: {
      tagline: 'Web design, web development, UX/UI design and branding since 1998.',
      services: 'Services',
      contact: 'Contact',
      city: 'Cuernavaca, Morelos, Mexico',
      remoteValue: 'Remote: Mexico · US · Canada · Spain · LatAm',
      site: 'Site',
      states: 'States',
      follow: 'Follow us',
      backTop: 'Back to top',
      alsoAt: 'Full portfolio at aurin.mx',
      rights: 'All rights reserved.',
      privacy: 'Privacy policy',
      cookieSettings: 'Cookie settings',
    },
    services: ['Web design', 'Web development', 'UX/UI design', 'Branding'],
  },
};

// Error de tipos (editor / npx astro check) si a un idioma le falta una clave del otro.
UI satisfies Record<Lang, typeof UI.es>;
