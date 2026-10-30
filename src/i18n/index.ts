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
import { INDUSTRY_PAGES, INDUSTRIES_INDEX } from '@/data/industries';
import { PRIVACY } from '@/data/privacy';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

/** Código para `lang`, hreflang y og:locale. El público de aurin.consulting está en EE. UU. y Canadá: `regions` son
 *  los hreflang de cada idioma (la misma URL para los dos países) y `ogAlt` sus og:locale:alternate. */
export const LOCALE: Record<Lang, { html: string; hreflang: string; og: string; regions: string[]; ogAlt: string[] }> = {
  es: { html: 'es', hreflang: 'es-US', og: 'es_US', regions: ['es-US', 'es-CA'], ogAlt: ['es_CA'] },
  en: { html: 'en', hreflang: 'en-US', og: 'en_US', regions: ['en-US', 'en-CA'], ogAlt: ['en_CA'] },
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
  if (LANGS.some((l) => base === `/${INDUSTRIES_INDEX[l].slug}/`)) base = `/${INDUSTRIES_INDEX[lang].slug}/`;
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
    related: {
      heading: 'Sigue explorando',
      description: 'Diseño web, desarrollo, UX/UI y branding en el mismo equipo, para empresas de cualquier industria.',
    },
    otherServices: {
      heading: 'Otros servicios',
      description: 'Diseño web, desarrollo, UX/UI y branding viven en el mismo equipo: puedes empezar por uno y sumar los demás.',
    },
    caseLink: 'Ver caso',
    industries: { allSub: 'Con clientes reales en cada una', all: 'Todas las industrias', more: 'Ver todas las industrias', clients: 'Clientes' },
    bookCall: 'Agendar llamada',
    bookCallLong: 'Agenda una llamada gratis',
    /** Etiqueta sobre el h1 de servicios, industrias y estados: datos reales, iguales en todas */
    heroBadge: ['Desde 1998', 'Sitios en inglés y español'],
    industryPage: {
      fixesNote: '¿Tu sitio se parece a «Lo de siempre»? Cuéntanos cómo es hoy y te decimos qué cambiaríamos primero.',
      write: 'Mándanos un mensaje',
      offerCta: 'Cuéntanos tu proyecto',
      journeyNote: 'El primer paso es un mensaje: dinos qué necesitas y te proponemos por dónde empezar.',
    },
    process: { gets: 'Recibes', cta: 'Empieza con una llamada gratis', note: 'Sin costo ni compromiso.' },
    faqAside: { title: '¿Tienes otra pregunta?', text: 'Pregúntanos en una llamada gratis y sin compromiso. Sales con una idea clara de qué necesitas y cuánto cuesta.' },
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
    ctaText: 'Agenda una llamada gratis. Sales con un plan claro y una propuesta con lo que incluye, el precio y las fechas.',
    ctaMail: '¿Prefieres escribirnos?',
    // Junto al formulario del cierre de la home: qué pasa al enviarlo (sin prometer tiempos)
    ctaNext: {
      title: 'Qué pasa después',
      steps: [
        'Te contactamos por el medio que elegiste para agendar la llamada.',
        'Nos cuentas tu proyecto. Sin costo ni compromiso.',
        'Te mandamos la propuesta: qué incluye, cuánto cuesta y cuándo se entrega.',
      ],
    },
    form: {
      title: 'Agenda tu llamada gratis',
      intro: 'Sin costo ni compromiso. Recibes una propuesta clara: qué incluye, cuánto cuesta y cuándo se entrega.',
      // Mismos campos que el LeadForm de aurin.mx
      name: 'Nombre completo',
      namePlaceholder: 'Tu nombre completo',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@empresa.com',
      emailSuggestion: '¿Quisiste decir',
      phone: 'Teléfono',
      phoneError: 'Revisa el número: con la lada {lada} son {n} dígitos.',
      contactPref: '¿Cómo te contactamos?',
      contactPrefs: ['WhatsApp', 'Llamada telefónica', 'Videollamada', 'Correo electrónico'],
      need: 'Tipo de proyecto',
      options: ['Diseño web', 'Desarrollo web', 'Diseño UX/UI', 'Branding', 'Varios servicios'],
      select: 'Selecciona…',
      message: 'Cuéntanos sobre tu proyecto (opcional)',
      messagePlaceholder: 'Ej. Necesitamos un sitio bilingüe de 6 secciones con formulario, para lanzar en dos meses.',
      privacyBefore: 'Al enviar aceptas nuestro ',
      privacyLink: 'aviso de privacidad',
      privacyAfter: '.',
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
      industries: 'Industrias',
      allIndustries: 'Todas las industrias',
      languages: 'Te atendemos en inglés y en español',
      follow: 'Síguenos',
      backTop: 'Volver arriba',
      alsoAt: 'Portafolio completo en aurin.mx',
      rights: 'Todos los derechos reservados.',
      privacy: 'Aviso de privacidad',
      cookieSettings: 'Preferencias de cookies',
    },
    services: ['Diseño web', 'Desarrollo web', 'Diseño UX/UI', 'Branding'],
    team: {
      titleLead: 'Personas reales',
      titleAccent: 'detrás de cada proyecto.',
      text: 'Desde 1998 trabajamos desde nuestra oficina en Cuernavaca, México. Diseño, investigación y programación se sientan en la misma mesa, así tu proyecto no pasa de mano en mano.',
      office: 'Nuestra oficina en Cuernavaca, Morelos',
      meeting: 'Una sesión de trabajo del equipo',
      foundersLabel: 'Fundada y dirigida por',
      compact: {
        titleLead: 'Hablas directo con el equipo',
        titleAccent: 'que hace tu proyecto.',
        text: 'Desde 1998, diseño, investigación y programación trabajan en la misma mesa. Tu proyecto no pasa de mano en mano y siempre sabes con quién hablar.',
      },
      roles: { 'elias-aquique': 'CEO y cofundador', 'nayeli-quinto': 'CCO y cofundadora' },
      linkedin: 'Perfil de LinkedIn de',
      remote: {
        heading: 'Trabajamos a distancia con empresas de EE. UU.',
        office: 'Oficina en Cuernavaca, México',
        language: 'Llamadas en inglés o español',
        hours: 'Lunes a viernes, en horario del centro de EE. UU.',
      },
      map: 'Ver en Google Maps',
    },
  },
  en: {
    skip: 'Skip to content',
    homeLabel: 'Aurin, home',
    home: 'Home',
    switchLang: { label: 'Español', short: 'ES' },
    menu: { open: 'Open menu', label: 'Menu' },
    nav: { services: 'Services', cases: 'Work', process: 'Process', about: 'About', industries: 'Industries', states: 'States', faq: 'FAQ', includes: 'What’s included' },
    related: {
      heading: 'Keep exploring',
      description: 'Web design, development, UX/UI and branding in one team, for companies in any industry.',
    },
    otherServices: {
      heading: 'Other services',
      description: 'Web design, development, UX/UI and branding live in the same team: start with one and add the rest.',
    },
    caseLink: 'View case',
    industries: { allSub: 'With real clients in each one', all: 'All industries', more: 'See all industries', clients: 'Clients' },
    bookCall: 'Book a call',
    bookCallLong: 'Book a free call',
    heroBadge: ['Since 1998', 'You see the design before we build'],
    industryPage: {
      fixesNote: 'Does your website look like “The usual”? Tell us how it works today and we’ll tell you what we’d change first.',
      write: 'Send us a message',
      offerCta: 'Tell us about your project',
      journeyNote: 'Step one is a message: tell us what you need and we’ll suggest where to start.',
    },
    process: { gets: 'You get', cta: 'Start with a free call', note: 'No cost, no commitment.' },
    faqAside: { title: 'Have another question?', text: 'Ask us on a free call, with no commitment. You leave with a clear idea of what you need and what it costs.' },
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
    ctaText: 'Book a free call. You leave with a clear plan and a proposal showing what’s included, the price and the dates.',
    ctaMail: 'Prefer to write?',
    ctaNext: {
      title: 'What happens next',
      steps: [
        'We reach out the way you chose to schedule the call.',
        'You tell us about your project. No cost, no commitment.',
        'We send you the proposal: what’s included, what it costs and when it’s delivered.',
      ],
    },
    form: {
      title: 'Book your free call',
      intro: 'No cost, no commitment. You get a clear proposal: what’s included, what it costs and when it’s delivered.',
      name: 'Full name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      emailSuggestion: 'Did you mean',
      phone: 'Phone',
      phoneError: 'Check the number: numbers with country code {lada} have {n} digits.',
      contactPref: 'How should we reach you?',
      contactPrefs: ['WhatsApp', 'Phone call', 'Video call', 'Email'],
      need: 'Project type',
      options: ['Web design', 'Web development', 'UX/UI design', 'Branding', 'Several services'],
      select: 'Select…',
      message: 'Tell us about your project (optional)',
      messagePlaceholder: 'E.g. We need a 6-page website with a contact form, launching in two months.',
      privacyBefore: 'By submitting you agree to our ',
      privacyLink: 'privacy policy',
      privacyAfter: '.',
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
      industries: 'Industries',
      allIndustries: 'All industries',
      languages: 'Working on US Central Time',
      follow: 'Follow us',
      backTop: 'Back to top',
      alsoAt: 'Full portfolio at aurin.mx',
      rights: 'All rights reserved.',
      privacy: 'Privacy policy',
      cookieSettings: 'Cookie settings',
    },
    services: ['Web design', 'Web development', 'UX/UI design', 'Branding'],
    team: {
      titleLead: 'Real people',
      titleAccent: 'behind every project.',
      text: 'Since 1998 we have worked from our office in Cuernavaca, Mexico. Design, research and development sit at the same table, so your project never gets passed from hand to hand.',
      office: 'Our office in Cuernavaca, Morelos',
      meeting: 'A working session with the team',
      foundersLabel: 'Founded and led by',
      compact: {
        titleLead: 'You talk directly to the team',
        titleAccent: 'building your project.',
        text: 'Since 1998, design, research and development have worked at the same table. Your project never gets passed around, and you always know who to talk to.',
      },
      roles: { 'elias-aquique': 'CEO and co-founder', 'nayeli-quinto': 'CCO and co-founder' },
      linkedin: 'LinkedIn profile of',
      remote: {
        heading: 'We work remotely with US businesses',
        office: 'Office in Cuernavaca, Mexico',
        language: 'All calls and documents in English',
        hours: 'Monday to Friday, during US Central business hours',
      },
      map: 'View on Google Maps',
    },
  },
};

// Error de tipos (editor / npx astro check) si a un idioma le falta una clave del otro.
UI satisfies Record<Lang, typeof UI.es>;
