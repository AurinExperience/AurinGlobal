import type { State } from './types';

/**
 * Texas — plantilla de las landings por estado (diseño exportado de Claude
 * Design, ver diseno-original/texas). Para un estado nuevo: copiar este archivo,
 * reescribir TODO el copy (no solo cambiar el nombre) y agregarlo en index.ts.
 */
export const texas: State = {
  id: 'texas',
  status: 'draft',
  slug: 'texas',
  name: 'Texas',
  geo: { latitude: 31.9686, longitude: -99.9018 },
  areas: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Texas | Houston y Dallas | Aurin',
        description:
          'Diseño de páginas web, UX/UI y branding para empresas de Houston, Dallas, Austin y San Antonio. Equipo bilingüe en tu zona horaria y precio claro.',
      },
      hero: {
        titleLead: 'Diseño web y UX/UI para empresas de',
        titleAccent: 'Texas.',
        description:
          'Sitios que venden, productos que la gente usa y marcas que se recuerdan, en inglés y en español, en tu zona horaria.',
        ctaSecondary: 'Ver servicios',
      },
      why: {
        heading: 'Cerca de tu equipo, *de tu horario y de tus clientes.*',
        items: [
          { title: 'En tu zona horaria', text: 'Trabajamos en horario del centro (UTC−6): la misma hora que Houston, Dallas, Austin y San Antonio en invierno y una hora de diferencia en verano. Las reuniones caben en tu jornada.' },
          { title: 'Bilingües de verdad', text: 'Más de 8 millones de texanos, casi 3 de cada 10, hablan español en casa (Censo de EE. UU., ACS 2024). Diseñamos y escribimos tu sitio en inglés y en español, con textos pensados para cada idioma y no traducciones literales.' },
          { title: 'Un solo equipo, cerca', text: 'Desde México, a un vuelo corto de Texas, el mismo equipo investiga, diseña y programa tu proyecto, con precio y fechas claros desde el inicio.' },
        ],
      },
      services: {
        heading: 'Lo que tu empresa en Texas necesita en digital, *en un mismo equipo.*',
        intro: 'Empieza por el servicio que necesitas hoy o combínalos: marca, sitio y producto salen coherentes porque los hace el mismo equipo.',
      },
      sectors: {
        heading: 'Experiencia en las industrias que *mueven a Texas.*',
        items: [
          { name: 'Energía', text: 'Sitios institucionales para empresas de energía que necesitan comunicar visión y confianza a inversionistas y comunidades.', clients: 'Mexico Pacific' },
          { name: 'Salud', text: 'Marcas y sitios bilingües para servicios de salud que atienden a familias en inglés y en español.', clients: 'Elite Home Health · Dentol' },
          { name: 'Fintech y remesas', text: 'Plataformas de pagos, envíos de dinero y crédito con flujos claros, clave en un estado con tanto comercio con México.', clients: 'Ancient · Monetix · Bonanza' },
          { name: 'Logística y construcción', text: 'Plataformas de pedidos y operación para empresas de materiales, distribución y obra.', clients: 'Grupo Estrella' },
          { name: 'Educación', text: 'Plataformas de aprendizaje y sistemas para gestionar alumnos, clases, pagos y sucursales.', clients: 'Inglés Individual · Fruit Academy' },
          { name: 'Turismo y entretenimiento', text: 'Sitios con venta de boletos, mapas y toda la información de la visita.', clients: 'El Rollo' },
        ],
      },
      process: {
        heading: 'De la primera llamada al lanzamiento, *en tres pasos.*',
        steps: [
          { name: 'Llamada inicial', text: 'Revisamos tus objetivos, tu audiencia y lo que frena tus ventas, en tu horario.' },
          { name: 'Propuesta clara', text: 'Qué incluye, cuánto cuesta y cuándo se entrega, antes de empezar.' },
          { name: 'Diseño, desarrollo y lanzamiento', text: 'Ciclos cortos, revisiones en línea y acompañamiento después de publicar.' },
        ],
      },
      cases: {
        heading: 'Proyectos que ya *diseñamos y desarrollamos.*',
        ids: ['mexico-pacific', 'ancient', 'el-rollo', 'ingles-individual'],
      },
      faq: {
        heading: 'Respuestas *antes de agendar.*',
        items: [
          { question: '¿Trabajan con empresas de Texas?', answer: 'Sí. Trabajamos en remoto con empresas de todo Texas, de Houston, Dallas y Fort Worth a Austin, San Antonio y El Paso, con reuniones en línea durante todo el proyecto.' },
          { question: '¿En qué horario trabajan?', answer: 'En horario del centro de México (UTC−6). Es la misma hora que Houston, Dallas, Austin y San Antonio en invierno y una hora de diferencia en verano, así que las reuniones caben en tu jornada.' },
          { question: '¿Por qué contratar una agencia a distancia y no una local?', answer: 'Porque trabajas con un equipo con experiencia desde 1998, en tu zona horaria, que habla inglés y español y que diseña y programa en el mismo lugar, con precios claros desde el inicio.' },
          { question: '¿Pueden hacer mi sitio en inglés y en español?', answer: 'Sí. Diseñamos sitios bilingües con textos y estructura pensados para cada idioma, y los configuramos para que Google muestre a cada visitante la versión correcta.' },
          { question: '¿Mi sitio aparecerá en Google en Texas?', answer: 'Lo construimos con SEO técnico: velocidad, datos estructurados, versiones por idioma y contenido que responde lo que buscan tus clientes. Para búsquedas locales también conviene tener al día tu perfil de Google Business.' },
          { question: '¿Cuánto cuesta un proyecto?', answer: 'El costo depende del alcance. Después de la llamada recibes una propuesta con lo que incluye, el precio y las fechas de entrega.' },
          { question: '¿Cuánto tarda un proyecto?', answer: 'Depende del alcance: una landing page toma menos que un sitio corporativo, una plataforma o una marca completa. La propuesta incluye las fechas de entrega.' },
          { question: '¿Se pueden reunir en persona?', answer: 'Por ahora todas las sesiones son en línea: videollamadas, prototipos compartidos y revisiones asíncronas.' },
        ],
      },
      cta: {
        titleLead: '¿Listo para llevar tu negocio de',
        titleAccent: 'Texas más lejos?',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'También diseñamos para empresas en estos estados.',
      },
      linkLabel: 'Diseño web en Texas',
      serviceName: 'Diseño web y UX/UI para empresas de Texas',
      howToDescription: 'Cómo trabaja Aurin un proyecto de diseño web o UX/UI con una empresa de Texas, de la primera llamada al lanzamiento.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Texas | Houston, Dallas, Austin | Aurin',
        description:
          'Web design, UX/UI and branding for businesses in Houston, Dallas, Austin and San Antonio. A senior team on Central Time, with clear pricing from the start.',
      },
      hero: {
        titleLead: 'Web design and UX/UI for businesses in',
        titleAccent: 'Texas.',
        description:
          'Websites that sell, products people actually use and brands people remember, from a team in your time zone.',
        ctaSecondary: 'See services',
      },
      why: {
        heading: 'Close to your team, *your schedule and your customers.*',
        items: [
          { title: 'In your time zone', text: 'We work on Central Mexico time (UTC−6): the same time as Houston, Dallas, Austin and San Antonio in winter and one hour apart in summer. Meetings fit inside your workday.' },
          { title: 'In English, from the first call', text: 'Calls, proposals, website copy and support are all in English, with the same team from kickoff to launch. You always know who is working on your project.' },
          { title: 'One team, close by', text: 'From Mexico, a short flight from Texas, the same team researches, designs and builds your project, with a clear price and dates from the start.' },
        ],
      },
      services: {
        heading: 'Everything your Texas business needs in digital, *in one team.*',
        intro: 'Start with the service you need today or combine them: brand, website and product stay consistent because the same team makes them.',
      },
      sectors: {
        heading: 'Experience in the industries that *drive Texas.*',
        items: [
          { name: 'Energy', text: 'Institutional websites for energy companies that need to convey vision and trust to investors and communities.', clients: 'Mexico Pacific' },
          { name: 'Healthcare', text: 'Brands and websites for healthcare services that convey care from the first visit.', clients: 'Elite Home Health · Dentol' },
          { name: 'Fintech and remittances', text: 'Payments, money transfer and lending platforms with clear flows, key in a state with so much trade with Mexico.', clients: 'Ancient · Monetix · Bonanza' },
          { name: 'Logistics and construction', text: 'Ordering and operations platforms for materials, distribution and construction companies.', clients: 'Grupo Estrella' },
          { name: 'Education', text: 'Learning platforms and systems to manage students, classes, payments and branches.', clients: 'Inglés Individual · Fruit Academy' },
          { name: 'Tourism and entertainment', text: 'Websites with ticketing, maps and everything visitors need to know.', clients: 'El Rollo' },
        ],
      },
      process: {
        heading: 'From the first call to launch, *in three steps.*',
        steps: [
          { name: 'Intro call', text: 'We review your goals, your audience and what is holding your sales back, on your schedule.' },
          { name: 'Clear proposal', text: 'What’s included, what it costs and when it’s delivered, before we start.' },
          { name: 'Design, development and launch', text: 'Short cycles, online reviews and support after going live.' },
        ],
      },
      cases: {
        heading: 'Projects we have already *designed and built.*',
        ids: ['mexico-pacific', 'ancient', 'el-rollo', 'ingles-individual'],
      },
      faq: {
        heading: 'Answers *before you book.*',
        items: [
          { question: 'Do you work with Texas businesses?', answer: 'Yes. We work remotely with businesses across Texas, from Houston, Dallas and Fort Worth to Austin, San Antonio and El Paso, with online meetings throughout the project.' },
          { question: 'Do you work in English?', answer: 'Yes. Calls, emails, deliverables and website copy are all in English, from the first call to launch.' },
          { question: 'What hours do you work?', answer: 'On Central Mexico time (UTC−6). That is the same time as Houston, Dallas, Austin and San Antonio in winter and one hour apart in summer, so meetings fit inside your workday.' },
          { question: 'Why hire a remote agency instead of a local one?', answer: 'Because you work with a team experienced since 1998, in your time zone, that designs and builds in one place, with clear pricing from the start.' },
          { question: 'Can you also build a Spanish version of my website?', answer: 'Yes. Over 8 million Texans, nearly 3 in 10, speak Spanish at home (US Census ACS 2024). If some of your customers are among them, we design a Spanish version with its own copy and set it up so Google shows every visitor the right version.' },
          { question: 'Will my website show up on Google in Texas?', answer: 'We build it with technical SEO: speed, structured data, language versions and content that answers what your customers search for. For local searches, it also helps to keep your Google Business Profile up to date.' },
          { question: 'How much does a project cost?', answer: 'It depends on the scope. After the call you get a proposal with what’s included, the price and the delivery dates.' },
          { question: 'How long does a project take?', answer: 'It depends on the scope: a landing page takes less time than a corporate website, a platform or a full brand. The proposal includes the delivery dates.' },
          { question: 'Can we meet in person?', answer: 'For now, all sessions are online: video calls, shared prototypes and async reviews.' },
        ],
      },
      cta: {
        titleLead: 'Ready to take your Texas business',
        titleAccent: 'further?',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We also design for businesses in these states.',
      },
      linkLabel: 'Web design in Texas',
      serviceName: 'Web Design and UX/UI for Texas Businesses',
      howToDescription: 'How Aurin runs a web design or UX/UI project with a Texas business, from the first call to launch.',
    },
  },
};
