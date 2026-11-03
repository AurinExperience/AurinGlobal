import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/**
 * California: la economía más grande del país; software, entretenimiento, biotecnología. Ángulo: producto y privacidad.
 * Sin Inland Empire: esa búsqueda es de aurin.mx (CLAUDE.md).
 */
export const california: State = {
  id: 'california',
  status: 'live',
  publishAt: '2026-11-04T06:00:00-06:00',
  slug: 'california',
  name: 'California',
  geo: { latitude: 36.7783, longitude: -119.4179 },
  areas: ['Los Angeles', 'San Francisco', 'San Jose', 'Oakland', 'San Diego', 'Orange County', 'Sacramento', 'Fresno'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en California | Desde 1998 | Aurin',
        description: 'Agencia de diseño web y UX/UI para empresas de California, de Los Ángeles a San Francisco, con SEO básico o avanzado y privacidad resuelta. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en California',
        titleAccent: 'para competir con los que marcan el estándar.',
        description: 'Sitios y productos digitales para empresas de California, con investigación real, privacidad bien resuelta y el precio cerrado desde el inicio.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Diseño web y UX/UI en California, *donde tus usuarios ya esperan nivel mundial.*',
        intro: 'Elige por dónde empezar; un solo equipo hace el resto. Usamos IA para acelerar, con un experto al frente de cada decisión, y el sitio sale con su SEO básico.',
        items: {
          'web-design': { text: 'Tu cliente usa a diario los mejores productos del mundo y compara tu sitio con ellos sin darse cuenta. Hacemos uno rápido y claro, que diga en una frase para quién es y qué le resuelve.', tags: 'Sitio de empresa · Sitio para startups · SEO básico' },
          'web-development': { text: 'Paneles para clientes, integraciones con tu CRM, cuentas y pagos. Desarrollamos lo que tu equipo interno no alcanza a priorizar, con código que después le pueden entregar a ellos.', tags: 'Paneles · Integraciones · Pagos' },
          'ux-ui-design': { text: 'Tus métricas caen entre el registro y el primer uso, y nadie sabe por qué. Investigamos con usuarios, proponemos cambios y los probamos en un prototipo antes de gastar en desarrollo.', tags: 'Investigación · Activación · Prototipos' },
          branding: { text: 'Pasar de una ronda de inversión a clientes grandes, o de una región a todo el país, cambia a quién le hablas. Ponemos en orden tu posición, tu nombre de producto y tu sistema visual.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para las industrias *fuertes de California.*',
        intro: 'Clientes reales de Aurin en sectores con mucho peso aquí. Entra a cada uno para ver qué hacemos.',
        items: [
          { name: 'Desarrollo de software', text: 'Empresas de software que venden a otras empresas y necesitan que su producto y su sitio cuenten lo mismo.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech y remesas', text: 'Pagos, envíos y crédito en un estado con muchos usuarios exigentes y una regulación que hay que respetar en cada paso.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Salud', text: 'Servicios de atención que se explican bien en la primera visita, también para la familia que busca por el paciente.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Plataformas y sistemas para alumnos en distintos niveles, idiomas y sucursales.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Cultura y entretenimiento', text: 'Instituciones y espectáculos que venden boletos con competencia enorme por la misma noche.', clients: 'Orquesta Sinfónica de Minería · El Rollo', page: 'culture' },
          { name: 'Agencias de diseño', text: 'Somos el equipo técnico que programa sitios de agencias sin tocar lo que su equipo creativo decidió.', clients: 'Ideograma · Identidad', page: 'agencies' },
        ],
      },
      cases: {
        heading: 'Productos y sitios *que ya usa gente real.*',
        ids: ['ancient', 'fruit-academy', 'ingles-individual', 'el-rollo'],
      },
      cities: {
        heading: 'California no compra igual *en el norte que en el sur.*',
        intro: 'Solo el área de Los Ángeles tiene unos 4.2 millones de personas que hablan español en casa (ACS 2019–2023), y unas horas al norte tu comprador puede ser un equipo de producto de Silicon Valley.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Los Ángeles', tags: 'Entretenimiento · Marcas · Comercio', need: 'Marcas de consumo, entretenimiento y comercio con clientes que deciden por cómo se ve y se siente una empresa.', build: 'Una marca con presencia, video y foto bien cuidados, compra simple y dos idiomas cuando tu cliente lo pida.' },
          { name: 'San Francisco y Silicon Valley', tags: 'Software · Fintech · Biotecnología', need: 'Equipos de producto y fundadores de San Francisco, San José y Oakland, que evalúan tu sitio como si fuera software.', build: 'Mensaje preciso, un sitio rápido, demo o prueba a un clic, y diseño de producto con investigación detrás.' },
          { name: 'San Diego', tags: 'Biotecnología · Defensa · Turismo', need: 'Ciencias de la vida y proveedores de defensa con compradores técnicos, junto a un turismo muy activo.', build: 'Ciencia explicada para quien decide, credenciales ordenadas y páginas distintas para cada público.' },
          { name: 'Orange County', tags: 'Servicios · Salud · Bienes raíces', need: 'Empresas de servicios profesionales, salud y bienes raíces con clientes que comparan varias opciones cerca de casa.', build: 'Páginas por servicio y zona, reseñas reales y un camino corto para agendar.' },
          { name: 'Sacramento y Valle Central', tags: 'Gobierno · Agroindustria · Logística', need: 'Proveedores del estado y agroindustria de Sacramento y Fresno, que venden lejos de donde los conocen.', build: 'Capacidades claras, requisitos para comprar y una página por producto que un distribuidor de otro estado entienda sin llamarte.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas de California *antes de contratarnos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en California?', answer: 'Un sitio de marketing y un producto con cuentas, pagos y permisos no se parecen en nada, así que depende de lo que necesites construir. Después de la llamada gratis recibes un precio cerrado por escrito, con el alcance y las fechas.' },
          { question: '¿Hacen diseño web en Los Ángeles, San Francisco y San Diego?', answer: 'Sí, y también en San José, Orange County, Sacramento y Fresno. Trabajamos en línea con videollamadas y prototipos compartidos, con el mismo equipo de principio a fin, sin importar en qué parte de California estés.' },
          { question: '¿Hacen páginas web para pequeñas empresas en California?', answer: 'Sí, y también para startups que apenas lanzan. Si tu presupuesto es limitado, empezamos con lo que más urge para conseguir clientes y dejamos el resto para cuando el negocio lo justifique. Te lo decimos claro en la propuesta.' },
          { question: '¿Mi sitio tiene que cumplir con la CCPA?', answer: 'Depende de tu tamaño. La ley de privacidad de California alcanza, entre otros, a empresas con ingresos de unos 26.6 millones de dólares al año o que compran, venden o comparten datos de 100,000 consumidores. Si te aplica, integramos el aviso de privacidad que defina tu asesor, las opciones para no compartir datos y el control de cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Dónde está su equipo y cómo trabajan con la hora del Pacífico?', answer: 'En Cuernavaca, México, desde 1998. Vamos dos horas adelante de California en invierno y una en verano, así que tus mañanas caben muy bien en nuestra jornada. El equipo aparece más abajo en esta página.' },
          { question: '¿Pueden trabajar junto a mi equipo interno de producto?', answer: 'Sí, y es común. Podemos encargarnos de investigación y diseño y entregarle a tu equipo prototipos y especificaciones, o programar una parte y dejarles el código y sus accesos para que sigan.' },
          { question: '¿Ofrecen SEO para aparecer en Google y en las respuestas de IA?', answer: 'Sí. El sitio sale con lo básico: estructura clara, títulos, velocidad y datos estructurados, que también ayudan a herramientas como ChatGPT o Perplexity a entenderlo. El SEO avanzado, con contenidos, seguimiento y optimización para esos buscadores con IA, se cotiza aparte. Nadie puede garantizar la posición.' },
          { question: '¿Pueden hacer el sitio en inglés y en español?', answer: 'Sí, y en California suele pagar: solo en el área de Los Ángeles, unos 4.2 millones de personas hablan español en casa (ACS 2019–2023). Cada versión lleva textos propios y queda configurada para que Google muestre la correcta.' },
          ...commonFaq('es', 'support', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué estás construyendo en California', titleAccent: 'y te decimos dónde empezar.' },
      linkLabel: 'Diseño web y UX/UI en California',
      serviceName: 'Diseño web y UX/UI para empresas de California',
      howToDescription: 'Cómo llega con Aurin una empresa de California del primer mensaje a un sitio o producto publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in California | Since 1998 | Aurin',
        description: 'Web design and UX/UI for California companies, from Los Angeles to San Francisco, with basic or advanced SEO and privacy handled properly. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in California',
        titleAccent: 'for competing with the ones who set the standard.',
        description: 'Websites and digital products for California companies, with real research, privacy done right and a fixed price from the start.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Web design and UX/UI in California, *where users expect world-class.*',
        intro: 'Choose where to start; one team handles the rest. We use AI to speed things up, with an expert leading every decision, and the site launches with its basic SEO.',
        items: {
          'web-design': { text: 'Your customers use the world’s top products every day and compare your site to them without realizing it. We build one that’s fast and clear, and says in one sentence who it’s for and what it solves.', tags: 'Company websites · Startup websites · Basic SEO' },
          'web-development': { text: 'Customer dashboards, CRM integrations, accounts and payments. We build what your in-house team can’t get to, with code they can take over afterward.', tags: 'Dashboards · Integrations · Payments' },
          'ux-ui-design': { text: 'Your numbers drop between signup and first use, and nobody knows why. We research with users, propose changes and test them in a prototype before you spend on development.', tags: 'Research · Activation · Prototypes' },
          branding: { text: 'Going from a funding round to enterprise customers, or from a region to the whole country, changes who you’re talking to. We put your positioning, product naming and visual system in order.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for *California’s strongest industries.*',
        intro: 'Real Aurin clients in sectors with real weight here. Open one to see what we do.',
        items: [
          { name: 'Software development', text: 'Software companies selling to other businesses, whose product and website need to tell the same story.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech and remittances', text: 'Payments, transfers and lending in a state of demanding users and rules to respect at every step.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Healthcare', text: 'Care services explained well on the first visit, including for family members searching on a patient’s behalf.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Platforms and systems for students across levels, languages and locations.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Culture and entertainment', text: 'Institutions and shows selling tickets with huge competition for the same night.', clients: 'Orquesta Sinfónica de Minería · El Rollo', page: 'culture' },
          { name: 'Design agencies', text: 'We’re the technical team that builds agency websites without touching what their creatives decided.', clients: 'Ideograma · Identidad', page: 'agencies' },
        ],
      },
      cases: {
        heading: 'Products and sites *real people already use.*',
        ids: ['ancient', 'fruit-academy', 'ingles-individual', 'el-rollo'],
      },
      cities: {
        heading: 'California doesn’t buy the same way *in the north and the south.*',
        intro: 'A consumer brand in Los Angeles sells on look and feel, while a few hours north your buyer may be a Silicon Valley product team reading your site like software.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Los Angeles', tags: 'Entertainment · Brands · Retail', need: 'Consumer, entertainment and retail brands whose customers decide based on how a company looks and feels.', build: 'A brand with presence, well-crafted video and photos, and simple buying.' },
          { name: 'San Francisco and Silicon Valley', tags: 'Software · Fintech · Biotech', need: 'Product teams and founders in San Francisco, San Jose and Oakland, who evaluate your website as if it were software.', build: 'A precise message, a fast site, a demo or trial one click away, and product design with research behind it.' },
          { name: 'San Diego', tags: 'Biotech · Defense · Tourism', need: 'Life sciences and defense suppliers with technical buyers, next to a very active tourism trade.', build: 'Science explained for decision-makers, organized credentials and separate pages for each audience.' },
          { name: 'Orange County', tags: 'Services · Healthcare · Real estate', need: 'Professional services, healthcare and real estate firms whose clients compare several options close to home.', build: 'Pages by service and area, real reviews and a short path to booking.' },
          { name: 'Sacramento and the Central Valley', tags: 'Government · Agribusiness · Logistics', need: 'State vendors and agribusiness in Sacramento and Fresno, selling far from where people know them.', build: 'Clear capabilities, purchasing requirements and a page per product that a distributor in another state can follow without calling.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from California companies *before they hire us.*',
        items: [
          { question: 'How much does a website cost in California?', answer: 'A marketing site and a product with accounts, payments and permissions are nothing alike, so it depends on what you need built. After a free call you get a fixed price in writing, with the scope and dates.' },
          { question: 'Do you do web design in Los Angeles, San Francisco and San Diego?', answer: 'Yes, and in San Jose, Orange County, Sacramento and Fresno too. We work online with video calls and shared prototypes, with the same team from start to finish, wherever you are in California.' },
          { question: 'Do you build websites for small businesses in California?', answer: 'Yes, and for startups just launching. On a tight budget, we start with what matters most for winning customers and leave the rest until the business justifies it. The proposal spells it out.' },
          { question: 'Does my website need to comply with the CCPA?', answer: 'It depends on your size. California’s privacy law reaches, among others, companies with about $26.6 million in annual revenue or that buy, sell or share data on 100,000 consumers. If it does, we add the privacy notice your advisor defines, opt-out options and cookie controls. Your advisor confirms whether it applies.' },
          { question: 'Where is your team, and how do you handle Pacific Time?', answer: 'In Cuernavaca, Mexico, since 1998. We’re two hours ahead of California in winter and one in summer, so your mornings fit well within our workday. You can see the team further down this page.' },
          { question: 'Can you work alongside my in-house product team?', answer: 'Yes, and it’s common. We can take on research and design and hand your team prototypes and specs, or build a piece and leave them the code and logins to carry on.' },
          { question: 'Do you offer SEO to show up on Google and in AI answers?', answer: 'Yes. The site launches with the basics: clear structure, titles, speed and structured data, which also help tools like ChatGPT or Perplexity understand it. Advanced SEO, with content, ongoing tracking and optimization for those AI search tools, is quoted separately. Nobody can guarantee a position.' },
          { question: 'Can you build a Spanish version of the site?', answer: 'Yes, and in California it often pays off: in the Los Angeles area alone, about 4.2 million people speak Spanish at home (ACS 2019–2023). It gets its own copy and is set up so Google shows the right version.' },
          ...commonFaq('en', 'support', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us what you’re building in California', titleAccent: 'and we’ll tell you where to start.' },
      linkLabel: 'California web design and UX/UI',
      serviceName: 'Web Design and UX/UI for California Companies',
      howToDescription: 'How a California company gets from first message to a live site or product with Aurin, with the design approved before the build.',
    },
  },
};
