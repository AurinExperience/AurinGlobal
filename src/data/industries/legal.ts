import type { Service } from '@/data/services';

/** Industria general de HOME.industries. aurin.mx no tiene despachos legales para EE. UU. Sin nombres de clientes. */
export const legal: Service = {
  id: 'legal',
  slug: { es: 'diseno-web-despachos-legales', en: 'law-firm-web-design' },
  cases: [],
  photo: 'ind-legal',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para despachos de abogados en EE. UU. | Aurin',
        description:
          'Sitios para despachos de abogados y consultoras legales en EE. UU.: áreas de práctica claras, consultas en línea y en inglés y español. Llamada gratis.',
      },
      name: 'Legal',
      summary: 'Diseño web y herramientas digitales para despachos de abogados en EE. UU.',
      tags: 'Despachos · Abogados · Consultoras legales · Migración',
      hero: {
        titleLead: 'Diseño web para despachos de abogados',
        titleAccent: 'que transmite seriedad y consigue consultas.',
        description:
          'Sitios para despachos de abogados en EE. UU.: el cliente ve que llevas casos como el suyo y agenda su consulta en línea.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Despachos corporativos', 'Abogados de migración', 'Lesiones personales', 'Derecho familiar', 'Bienes raíces', 'Consultoras legales'],
      },
      approach: {
        heading: 'Quien busca un abogado tiene un problema: *tu sitio tiene que decirle que llegó al lugar correcto.*',
        text: 'Un cliente busca abogado cuando algo le preocupa y quiere saber tres cosas: si llevas casos como el suyo, si puede confiar en ti y cómo hablar contigo hoy. Un sitio con lenguaje legal, fotos de martillos y un solo teléfono no responde ninguna. Diseñamos un sitio sobrio, fácil de recorrer y con la consulta siempre a la mano.',
        layers: ['Áreas de práctica', 'Equipo', 'Consulta'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que aleja clientes',
            items: ['Textos en lenguaje legal', 'Fotos de martillos y balanzas', 'Áreas de práctica en una sola lista', 'Solo un teléfono en horario de oficina', 'El cliente hispano no sabe si llevas su caso'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio serio y cercano',
            items: ['Cada área explicada en palabras simples', 'Tu equipo real, con su experiencia', 'Una página por área que aparece en Google', 'Consulta en línea a cualquier hora', 'Cada área de práctica también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Qué incluye el trabajo con *tu despacho.*',
        intro: 'Puedes arrancar por el sitio o por las herramientas para tus clientes. Firmamos confidencialidad y la propuesta detalla alcance, precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Un sitio sobrio y claro', service: 'web-design', text: 'Quiénes son, qué casos llevan y cómo trabajan, con un diseño a la altura de tu despacho.' },
          { icon: 'Layers', title: 'Páginas por área de práctica', text: 'Una página para cada área, escrita para el cliente y pensada para aparecer en Google.' },
          { icon: 'CalendarCheck', title: 'Consultas en línea', service: 'ux-ui-design', text: 'Agendar o pedir una consulta en pocos pasos, con preguntas que ayudan a tu equipo a filtrar casos.' },
          { icon: 'Users', title: 'Portal de clientes', service: 'web-development', text: 'Documentos, avances del caso y mensajes en un lugar seguro, conectado con tu sistema.' },
          { icon: 'ShieldCheck', title: 'Formularios seguros', text: 'Formularios que piden solo lo necesario y dicen para qué es cada dato.' },
          { icon: 'Languages', title: 'Clientes que hablan español', text: 'Áreas de práctica y consulta escritas en español para el cliente hispano, con la misma seriedad que en inglés.' },
        ],
      },
      process: {
        heading: 'Del sitio actual a *uno que llena tu agenda de consultas.*',
        steps: [
          { name: 'Llamada confidencial', text: 'Nos cuentas qué casos quieres atraer, cómo llegan hoy tus clientes y qué preguntan en la primera llamada.', gets: 'Precio y fechas por escrito, con acuerdo de confidencialidad.' },
          { name: 'Cómo te buscan', text: 'Revisamos tu sitio, las búsquedas de Google de tus áreas de práctica y lo que tus clientes preguntan al llamar.', gets: 'Qué áreas de práctica necesitan su propia página.' },
          { name: 'Clientes de prueba', text: 'Personas como tus clientes recorren un prototipo navegable y piden una consulta.', gets: 'Un camino a la consulta probado antes de programar.' },
          { name: 'Despacho en línea', text: 'Diseño final, programación y conexión con tu agenda o sistema del despacho; luego hosting y soporte.', gets: 'Tu sitio publicado y recibiendo consultas.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *despachos y abogados.*',
        items: [
          { question: '¿Con qué tipo de despachos trabajan?', answer: 'Despachos corporativos, abogados de migración, lesiones personales, derecho familiar, bienes raíces y consultoras legales.' },
          { question: '¿Escriben los textos de las áreas de práctica?', answer: 'Sí, en palabras simples y a partir de lo que tu equipo nos cuenta. Tu despacho los revisa antes de publicarlos.' },
          { question: '¿El sitio cumple las reglas de publicidad para abogados?', answer: 'Diseñamos con cuidado: sin promesas de resultados ni «el mejor». Las reglas de tu estado las revisa tu despacho, y ajustamos lo que haga falta.' },
          { question: '¿Pueden conectar las consultas con nuestro sistema?', answer: 'Sí, si tu sistema lo permite. Si no, la consulta llega ordenada al correo de tu equipo.' },
          { question: '¿Pueden atender a clientes que solo hablan español?', answer: 'Sí. Las páginas por área y la solicitud de consulta quedan en español, escritas aparte, para que el cliente explique su caso en su idioma.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tus clientes', titleAccent: 'te encuentren y confíen.' },
    },
    en: {
      seo: {
        title: 'Law Firm Website Design Agency in the US | Aurin',
        description:
          'Websites for US law firms and legal consultancies: clear practice areas, online consultations. Free call.',
      },
      name: 'Legal',
      summary: 'Website design and digital tools for US law firms.',
      tags: 'Law firms · Attorneys · Legal consultancies · Immigration',
      hero: {
        titleLead: 'Website design for law firms',
        titleAccent: 'that conveys credibility and books consultations.',
        description:
          'Websites for US law firms: clients see you handle cases like theirs and book a consultation online, any time.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Corporate firms', 'Immigration attorneys', 'Personal injury', 'Family law', 'Real estate law', 'Legal consultancies'],
      },
      approach: {
        heading: 'People looking for a lawyer have a problem: *your website has to tell them they’re in the right place.*',
        text: 'A client looks for a lawyer when something is wrong and wants to know three things: whether you handle cases like theirs, whether they can trust you and how to talk to you today. A website full of legalese, gavel photos and a single phone number answers none of them. We design an understated website that’s easy to navigate, with a consultation always within reach.',
        layers: ['Practice areas', 'Team', 'Consultation'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that turns clients away',
            items: ['Copy full of legalese', 'Gavel and scales photos', 'Practice areas in a single list', 'One phone number, office hours only'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website clients trust',
            items: ['Every area explained in plain words', 'Your real team and their experience', 'A page per area that shows up on Google', 'Online consultations any time'],
          },
        },
      },
      deliverables: {
        heading: 'What working with *your firm* includes.',
        intro: 'You can start with the website or the tools for your clients. We sign an NDA, and the proposal details scope, price and dates.',
        items: [
          { icon: 'Monitor', title: 'An understated, clear website', service: 'web-design', text: 'Who you are, which cases you take and how you work, with a design that matches your firm.' },
          { icon: 'Layers', title: 'Practice area pages', text: 'One page per area, written for the client and built to show up on Google.' },
          { icon: 'CalendarCheck', title: 'Online consultations', service: 'ux-ui-design', text: 'Book or request a consultation in a few steps, with questions that help your team screen cases.' },
          { icon: 'Users', title: 'Client portal', service: 'web-development', text: 'Documents, case updates and messages in a secure place, connected to your system.' },
          { icon: 'ShieldCheck', title: 'Secure forms', text: 'Forms that ask only for what’s needed and say why.' },
          { icon: 'Languages', title: 'Spanish-speaking clients', text: 'Practice areas and consultation requests written in Spanish for Hispanic clients, with the same credibility as in English.' },
        ],
      },
      process: {
        heading: 'From today’s website to *one that fills your consultation calendar.*',
        steps: [
          { name: 'Confidential call', text: 'You tell us which cases you want to attract, how clients find you today and what they ask on the first call.', gets: 'Price and dates in writing, with an NDA.' },
          { name: 'How people search for you', text: 'We review your website, the Google searches for your practice areas and what clients ask when they call.', gets: 'Which practice areas need their own page.' },
          { name: 'Test clients', text: 'People like your clients click through a prototype and request a consultation.', gets: 'A path to consultation tested before any code.' },
          { name: 'Firm online', text: 'Final design, development and the connection to your calendar or practice system; then hosting and support.', gets: 'Your website live and taking consultations.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *law firms* ask us.',
        items: [
          { question: 'What kinds of firms do you work with?', answer: 'Corporate firms, immigration attorneys, personal injury, family law, real estate law and legal consultancies.' },
          { question: 'Do you write the practice area copy?', answer: 'Yes, in plain words and based on what your team tells us. Your firm reviews it before it goes live.' },
          { question: 'Does the website follow attorney advertising rules?', answer: 'We design carefully: no promised outcomes and no “the best”. Your firm reviews your state’s rules and we adjust whatever is needed.' },
          { question: 'Can you connect consultations to our system?', answer: 'Yes, if your system allows it. If not, requests arrive organized in your team’s inbox.' },
        ],
      },
      cta: { titleLead: 'Let’s help clients', titleAccent: 'find you and trust you.' },
    },
  },
};
