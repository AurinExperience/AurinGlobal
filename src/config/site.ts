/**
 * Datos de la entidad Aurin. Son los mismos que en aurin.mx (src/config/site.ts):
 * es la misma empresa con dos dominios, y el NAP tiene que coincidir carácter por
 * carácter con la ficha de Google Business Profile para que Google lea una sola
 * entidad y no dos negocios distintos.
 */
export const SITE = {
  name: 'Aurin User Experts',
  alternateName: 'Aurin',
  url: 'https://aurin.consulting',
  logoUrl: 'https://aurin.consulting/favicon/web-app-manifest-512x512.png',
  ogImage: 'https://aurin.consulting/og/aurin-og.png',
  contactEmail: 'hey@aurin.mx',
  // Mismo teléfono que aurin.mx y la ficha de Google Business Profile (NAP idéntico).
  telephone: '+52 777 327 2365',
  // Mismo WhatsApp que aurin.mx (el teléfono de la ficha de Google Business Profile).
  whatsapp: '527773272365',
  foundingDate: '1998',
  // Otros perfiles OFICIALES de Aurin. aurin.mx es el sitio de la misma empresa.
  sameAs: [
    'https://aurin.mx',
    'https://www.instagram.com/aurinmx',
    'https://www.linkedin.com/company/aurinmx/',
    'https://www.facebook.com/profile.php?id=61569531232140',
    'https://www.google.com/search?kgmid=/g/11zkyjfy49',
    'https://www.wikidata.org/wiki/Q141808745',
  ],
  address: {
    streetAddress: 'San Jerónimo 207, Tlaltenango',
    addressLocality: 'Cuernavaca',
    addressRegion: 'Morelos',
    postalCode: '62170',
    addressCountry: 'MX',
  },
  // Ficha de Google Business Profile (la misma que aurin.mx)
  mapsUrl: 'https://maps.google.com/?cid=17105070640348628758',
  geo: { latitude: 18.9389376, longitude: -99.2468182 },
  // Igual que el horario de la ficha. Formato schema.org: días en inglés, 24 h.
  openingHours: { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  founders: [
    { id: 'elias-aquique', name: 'Elias Aquique', jobTitle: 'CEO', linkedin: 'https://www.linkedin.com/in/elias-aquique-a5772037/' },
    { id: 'nayeli-quinto', name: 'Nayeli Quinto', jobTitle: 'CCO', linkedin: 'https://www.linkedin.com/in/nayeliquinto/' },
  ],
};

export const ORG_ID = `${SITE.url}/#organization`;

/** Enlace a WhatsApp con el mensaje ya escrito; la página de origen va al final para saber de dónde llegó. */
export const whatsappUrl = (text: string, path: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`${text} (aurin.consulting${path})`)}`;

/** GA4 / Clarity de aurin.consulting (variables en Vercel). Sin ellas no hay analítica ni aviso de cookies. */
export const ANALYTICS_ON = Boolean(import.meta.env.PUBLIC_GA4_ID || import.meta.env.PUBLIC_CLARITY_ID);
