import type { Lang } from '@/data/types';
import { SITE } from '@/config/site';

/**
 * Aviso de privacidad y cookies (/privacidad/ ↔ /en/privacy/). Mismo responsable y mismas reglas
 * que el de aurin.mx, pero con lo que de verdad recoge aurin.consulting: el formulario, el botón de WhatsApp
 * y la analítica (GA4 y Clarity, que solo cargan si sus IDs están configurados).
 * `#cookies` es el destino del enlace del aviso de cookies: no cambiarle el id.
 * Si se agrega un proveedor o una cookie, actualizar aquí y la fecha.
 */
export interface PrivacySection {
  id?: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

interface PrivacyCopy {
  slug: string;
  seo: { title: string; description: string };
  title: string;
  updated: string;
  sections: PrivacySection[];
}

const email = SITE.contactEmail;
const address = `${SITE.address.streetAddress}, ${SITE.address.postalCode} Cuernavaca, Morelos, México`;

export const PRIVACY: Record<Lang, PrivacyCopy> = {
  es: {
    slug: 'privacidad',
    seo: {
      title: 'Aviso de privacidad y cookies | Aurin',
      description: 'Qué datos recaba Aurin en aurin.consulting, para qué los usa, con quién los comparte, qué cookies usa y cómo ejercer tus derechos de privacidad.',
    },
    title: 'Aviso de privacidad',
    updated: 'Última actualización: 28 de octubre de 2026',
    sections: [
      {
        title: '1. Responsable',
        paragraphs: [`Aurin, con domicilio en ${address}, es responsable de los datos personales que recaba en aurin.consulting. Para cualquier tema de privacidad escríbenos a ${email}.`],
      },
      {
        title: '2. Datos que recabamos',
        paragraphs: ['Solo los que tú nos das al llenar el formulario o escribirnos por WhatsApp:'],
        list: [
          'Nombre, correo electrónico y teléfono o WhatsApp',
          'Empresa, el servicio que te interesa y tu mensaje',
        ],
        after: [
          'Si aceptas las cookies de analítica (sección 6), también datos de navegación: página de llegada y sitio de origen, páginas vistas, tipo de dispositivo y navegador, y ubicación aproximada (país o ciudad).',
          'No pedimos datos sensibles. El sitio no está dirigido a menores de 16 años.',
        ],
      },
      {
        title: '3. Para qué los usamos',
        list: [
          'Responder tu solicitud, enviarte una propuesta y agendar una llamada, porque tú lo pides.',
          'Prestar y facturar los servicios que contrates.',
          'Medir y mejorar el sitio con analítica.',
          'Proteger los formularios contra spam y abuso.',
        ],
        after: ['No vendemos tus datos personales ni los compartimos para publicidad dirigida.'],
      },
      {
        title: '4. Con quién los compartimos',
        paragraphs: ['Con proveedores que nos ayudan a operar el sitio y que solo reciben lo necesario para su función:'],
        list: [
          'Vercel: alojamiento del sitio (EE. UU.)',
          'Resend: envío de los correos con tu solicitud (EE. UU.)',
          'Google: Google Analytics (EE. UU.)',
          'Microsoft: Clarity, analítica y mapas de calor (EE. UU.)',
          'Meta (WhatsApp), solo si eliges escribirnos por WhatsApp',
        ],
        after: ['Aurin opera desde México y estos proveedores están en Estados Unidos, así que tus datos pueden tratarse fuera de tu país. También podemos entregar datos cuando una autoridad competente lo requiera conforme a la ley.'],
      },
      {
        title: '5. Cuánto tiempo los guardamos',
        list: [
          'Solicitudes que no se convierten en proyecto: hasta 2 años desde el último contacto.',
          'Clientes: mientras dure la relación y después el tiempo que exijan las obligaciones fiscales y legales.',
          'Analítica: un máximo de 14 meses.',
        ],
      },
      {
        id: 'cookies',
        title: '6. Cookies',
        paragraphs: [
          'Las necesarias hacen funcionar el sitio. Las de analítica (Google Analytics y Microsoft Clarity) nos dicen qué páginas se visitan y cómo se usan, para mejorarlas. Clarity registra de forma anónima clics y desplazamiento, y oculta lo que escribes en los formularios.',
          'Estas son las que usamos (nombre, de quién, para qué y cuánto duran):',
        ],
        list: [
          'aurin-consent (almacenamiento local, Aurin): guarda tu elección sobre cookies. Necesaria. 12 meses.',
          'wa-bubble-closed (almacenamiento de sesión, Aurin): recuerda que cerraste el globo de WhatsApp. Necesaria. Hasta cerrar el navegador.',
          '_ga y _ga_* (Google Analytics): distinguen visitas y sesiones. Analítica. Hasta 2 años.',
          '_clck, _clsk, CLID, MUID, ANONCHK y SM (Microsoft Clarity): agrupan visitas y sesiones. Analítica. De la sesión hasta 1 año.',
        ],
        after: [
          'Vercel Speed Insights mide la velocidad del sitio sin cookies.',
          'Si nos visitas desde el Espacio Económico Europeo, el Reino Unido, Suiza o Canadá, las cookies de analítica solo se activan si las aceptas. En los demás países se activan por defecto, como permite su ley, y puedes desactivarlas cuando quieras. Respetamos la señal Global Privacy Control (GPC) de tu navegador como rechazo.',
          'Cambia tu elección cuando quieras desde «Preferencias de cookies», al pie de cada página. Te volvemos a preguntar cada 12 meses.',
        ],
      },
      {
        title: '7. Tus derechos',
        paragraphs: [`Puedes pedirnos acceso a tus datos, corregirlos, eliminarlos u oponerte a su uso, y retirar tu consentimiento, escribiendo a ${email}. No te trataremos distinto por ejercerlos y podemos pedirte que confirmes tu identidad. Según dónde vivas:`],
        list: [
          'Estados Unidos (CCPA/CPRA de California y leyes estatales similares, como la de Texas): saber qué datos tenemos, pedir que se corrijan o eliminen y excluirte de su venta o uso compartido. No vendemos ni compartimos datos personales en ese sentido. Puedes actuar por medio de un agente autorizado.',
          'México: derechos ARCO (acceso, rectificación, cancelación y oposición) y revocación del consentimiento, conforme a la ley federal de protección de datos personales.',
          'Espacio Económico Europeo, Reino Unido y Suiza: además, limitar el tratamiento, la portabilidad de tus datos y reclamar ante tu autoridad de protección de datos.',
          'Canadá (PIPEDA y Ley 25 de Quebec): acceso, corrección, retiro del consentimiento y presentar una queja ante el Comisionado de Privacidad.',
        ],
      },
      {
        title: '8. Seguridad',
        paragraphs: ['Usamos conexiones cifradas (HTTPS), damos acceso solo a quien lo necesita y trabajamos con proveedores con estándares de seguridad reconocidos.'],
      },
      {
        title: '9. Cambios a este aviso',
        paragraphs: ['Podemos actualizar este aviso. La versión vigente es la publicada aquí con su fecha.'],
      },
    ],
  },
  en: {
    slug: 'privacy',
    seo: {
      title: 'Privacy and Cookie Policy | Aurin',
      description: 'What data Aurin collects on aurin.consulting, how it is used and shared, which cookies the site uses and how to exercise your privacy rights.',
    },
    title: 'Privacy Policy',
    updated: 'Last updated: October 28, 2026',
    sections: [
      {
        title: '1. Who is responsible',
        paragraphs: [`Aurin, located at ${address}, is responsible for the personal data collected on aurin.consulting. For any privacy question, email us at ${email}.`],
      },
      {
        title: '2. Data we collect',
        paragraphs: ['Only what you give us when you fill out the form or message us on WhatsApp:'],
        list: [
          'Name, email address and phone or WhatsApp number',
          'Company, the service you are interested in and your message',
        ],
        after: [
          'If you accept analytics cookies (section 6), also browsing data: landing page and referring site, pages viewed, device and browser type, and approximate location (country or city).',
          'We do not ask for sensitive data. This site is not directed to children under 16.',
        ],
      },
      {
        title: '3. How we use it',
        list: [
          'To answer your request, send you a proposal and schedule a call, because you asked us to.',
          'To provide and invoice the services you hire.',
          'To measure and improve the site with analytics.',
          'To protect our forms against spam and abuse.',
        ],
        after: ['We do not sell your personal data or share it for cross-context behavioral advertising.'],
      },
      {
        title: '4. Who we share it with',
        paragraphs: ['With service providers that help us run the site and only receive what they need for their function:'],
        list: [
          'Vercel: website hosting (US)',
          'Resend: delivery of the emails with your request (US)',
          'Google: Google Analytics (US)',
          'Microsoft: Clarity, analytics and heatmaps (US)',
          'Meta (WhatsApp), only if you choose to message us on WhatsApp',
        ],
        after: ['Aurin operates from Mexico and these providers are in the United States, so your data may be processed outside your country. We may also disclose data when required by a competent authority under the law.'],
      },
      {
        title: '5. How long we keep it',
        list: [
          'Requests that do not become a project: up to 2 years from the last contact.',
          'Clients: for the duration of the relationship and afterwards as long as tax and legal obligations require.',
          'Analytics: up to 14 months.',
        ],
      },
      {
        id: 'cookies',
        title: '6. Cookies',
        paragraphs: [
          'Necessary cookies make the site work. Analytics cookies (Google Analytics and Microsoft Clarity) tell us which pages are visited and how they are used, so we can improve them. Clarity anonymously records clicks and scrolling, and masks what you type in forms.',
          'These are the ones we use (name, provider, purpose and duration):',
        ],
        list: [
          'aurin-consent (local storage, Aurin): stores your cookie choice. Necessary. 12 months.',
          'wa-bubble-closed (session storage, Aurin): remembers that you closed the WhatsApp bubble. Necessary. Until you close the browser.',
          '_ga and _ga_* (Google Analytics): distinguish visits and sessions. Analytics. Up to 2 years.',
          '_clck, _clsk, CLID, MUID, ANONCHK and SM (Microsoft Clarity): group visits and sessions. Analytics. Session to 1 year.',
        ],
        after: [
          'Vercel Speed Insights measures site speed without cookies.',
          'If you visit from the European Economic Area, the UK, Switzerland or Canada, analytics cookies are only enabled if you accept them. In other countries they are on by default, as local law allows, and you can turn them off at any time. We honor your browser’s Global Privacy Control (GPC) signal as an opt-out.',
          'Change your choice at any time from “Cookie settings” at the bottom of every page. We ask again every 12 months.',
        ],
      },
      {
        title: '7. Your rights',
        paragraphs: [`You can ask us to access, correct or delete your data, object to its use and withdraw your consent by emailing ${email}. We will not discriminate against you for exercising these rights, and we may ask you to verify your identity. Depending on where you live:`],
        list: [
          'United States (California CCPA/CPRA and similar state laws, such as Texas): know what data we hold, request correction or deletion and opt out of its sale or sharing. We do not sell or share personal data in that sense. You may act through an authorized agent.',
          'Mexico: ARCO rights (access, rectification, cancellation and objection) and withdrawal of consent under Mexico’s federal data protection law.',
          'European Economic Area, UK and Switzerland: also restriction of processing, data portability and the right to complain to your data protection authority.',
          'Canada (PIPEDA and Quebec Law 25): access, correction, withdrawal of consent and the right to file a complaint with the Privacy Commissioner.',
        ],
      },
      {
        title: '8. Security',
        paragraphs: ['We use encrypted connections (HTTPS), give access only to those who need it and work with providers that follow recognized security standards.'],
      },
      {
        title: '9. Changes to this policy',
        paragraphs: ['We may update this policy. The current version is the one published here with its date.'],
      },
    ],
  },
};

export const privacyPath = (lang: Lang) => `${lang === 'en' ? '/en' : ''}/${PRIVACY[lang].slug}/`;
