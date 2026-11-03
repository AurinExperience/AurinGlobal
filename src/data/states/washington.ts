import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Washington (el estado, no la capital): compradores que viven de la tecnología; aeroespacial y puerto. Ángulo: producto y detalle. */
export const washington: State = {
  id: 'washington',
  status: 'live',
  publishAt: '2026-11-05T06:00:00-06:00',
  slug: 'washington',
  name: 'Washington',
  geo: { latitude: 47.7511, longitude: -120.7401 },
  areas: ['Seattle', 'Bellevue', 'Redmond', 'Tacoma', 'Everett', 'Spokane', 'Olympia', 'Vancouver'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Washington | Desde 1998 | Aurin',
        description: 'Páginas web y UX/UI para empresas del estado de Washington, de Seattle a Spokane, con SEO básico o avanzado. Ves el diseño antes de programar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Washington',
        titleAccent: 'para un comprador que ya lo ha visto todo.',
        description: 'Sitios y productos para empresas del estado de Washington: ves el diseño antes de programar y sabes el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'En Washington tu cliente trabaja con software todo el día. *Lo nota si el tuyo falla.*',
        intro: 'Pide un servicio o todos: te atiende el mismo equipo. Usamos IA para ganar tiempo, siempre con un experto decidiendo, y cada sitio sale con SEO básico.',
        items: {
          'web-design': { text: 'Quien entra a tu sitio quizá trabaja en Microsoft o en Amazon y sabe cuándo algo está lento o mal hecho. Lo hacemos rápido, claro y sin adornos que estorben para que no pierdas su confianza en los primeros segundos.', tags: 'Sitio de empresa · Sitio para startups · SEO básico' },
          'web-development': { text: 'Paneles, cuentas, integraciones con tu CRM o tus sistemas en la nube. Programamos lo que tu equipo no alcanza a atender este trimestre, con código ordenado que después pueden seguir ellos.', tags: 'Paneles · Integraciones · Nube' },
          'ux-ui-design': { text: 'Si tu producto ya tiene usuarios y aun así pierdes gente en el registro, hay un motivo que se puede encontrar. Observamos a tus usuarios, probamos prototipos y te mostramos qué cambiar primero.', tags: 'Pruebas con usuarios · Prototipos · Producto' },
          branding: { text: 'En una región llena de empresas de tecnología, muchas marcas terminan pareciéndose. Definimos qué te hace distinto y lo llevamos a un nombre, un tono y una identidad que tu equipo pueda usar sin nosotros.', tags: 'Estrategia · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores *que mueven a Washington.*',
        intro: 'Clientes reales de Aurin en giros con mucho peso en el estado. Abre cada uno para ver qué hacemos.',
        items: [
          { name: 'Desarrollo de software', text: 'Empresas de software que le venden a equipos técnicos y necesitan un sitio que no se quede atrás de su producto.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech y finanzas', text: 'Pagos y cuentas para usuarios que comparan con las apps más pulidas del mercado.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Salud', text: 'Atención médica y en casa, con información clara y cuidado especial en los datos de salud.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Energía', text: 'Proyectos que deben explicarse a socios y comunidades, en un estado donde la energía limpia pesa mucho.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Educación', text: 'Plataformas de alumnos, clases y pagos para institutos con grupos en distintos horarios.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Agencias de diseño', text: 'Programamos para agencias de diseño que necesitan respetar cada detalle de lo que diseñaron.', clients: 'Ideograma · Identidad', page: 'agencies' },
        ],
      },
      cases: {
        heading: 'Productos en uso, *no maquetas.*',
        ids: ['ancient', 'ingles-individual', 'fruit-academy', 'mexico-pacific'],
      },
      cities: {
        heading: 'Del Puget Sound a Spokane: *qué le conviene a tu sitio en cada zona.*',
        intro: 'Boeing, Microsoft, Amazon y un gran puerto comparten el oeste del estado. Al otro lado de las montañas, el comprador y la competencia cambian por completo.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Seattle', tags: 'Tecnología · Comercio · Salud', need: 'Compradores acostumbrados a productos muy cuidados, que descartan en segundos un sitio lento o confuso.', build: 'Un mensaje preciso, un sitio rápido y una demo o contacto a un clic desde el celular.' },
          { name: 'Bellevue y Redmond', tags: 'Software · Videojuegos · Servicios', need: 'Equipos técnicos y líderes de producto que revisan tu experiencia antes de aceptar una llamada.', build: 'Casos concretos, documentación fácil de encontrar y una página de seguridad para que la revise su equipo.' },
          { name: 'Tacoma y Everett', tags: 'Puerto · Aeroespacial · Manufactura', need: 'Proveedores de la cadena aeroespacial y logística, con compradores que piden certificaciones antes que nada.', build: 'Capacidades y certificaciones a la vista, fichas técnicas y una solicitud de cotización que acepte planos.' },
          { name: 'Olympia y Vancouver', tags: 'Gobierno · Servicios · Salud', need: 'Proveedores del estado y empresas del área de Portland, con clientes a los dos lados de la frontera estatal.', build: 'Textos sobrios, un sitio accesible y zonas de servicio claras para quien busca cerca.' },
          { name: 'Spokane y el este', tags: 'Agroindustria · Salud · Manufactura', need: 'Empresas familiares y agroindustria que venden lejos y compiten con proveedores más grandes de otros estados.', build: 'Catálogo ordenado, historia real de la empresa y un camino corto para pedir precio.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que preguntan en Washington *antes de contratarnos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Washington?', answer: 'Depende de si es un sitio de marketing o un producto con cuentas, datos y permisos, que son trabajos muy distintos. Tras la llamada gratis recibes por escrito un precio cerrado, con lo incluido y las fechas.' },
          { question: '¿Hacen diseño web en Seattle, Bellevue y Tacoma?', answer: 'Sí, y también en Redmond, Everett, Olympia y Spokane. Trabajamos en línea, con videollamadas y prototipos compartidos, de modo que un equipo acostumbrado a trabajar a distancia no nota ninguna diferencia.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Washington?', answer: 'Sí, y para startups que apenas lanzan. Si necesitas salir pronto, empezamos con pocas páginas muy bien pensadas y crecemos cuando el negocio lo pida. El alcance y el precio quedan claros en la propuesta.' },
          { question: '¿Dónde está su equipo y cómo trabajan con la hora del Pacífico?', answer: 'En Cuernavaca, México, desde 1998. Vamos dos horas adelante de Washington en invierno y una en verano, así que tus mañanas caben sin problema en nuestra jornada. Puedes conocer al equipo más abajo.' },
          { question: '¿Mi sitio debe cumplir con la ley de datos de salud de Washington?', answer: 'Si manejas datos relacionados con la salud de las personas, conviene revisarlo: la My Health My Data Act no se limita a clínicas y no tiene mínimo de ingresos. Diseñamos formularios que piden lo justo e integramos los avisos que defina tu asesor y el control de cookies. Lo que te aplica lo confirma tu asesor.' },
          { question: '¿Pueden trabajar con nuestro equipo de ingeniería?', answer: 'Sí. Entregamos prototipos, componentes y especificaciones, y resolvemos dudas durante la construcción. También podemos programar una parte y dejarles el código y los accesos.' },
          { question: '¿Ofrecen SEO para empresas de tecnología en Washington?', answer: 'Sí. Cada sitio incluye el básico: títulos, descripciones, velocidad y datos estructurados. El SEO avanzado, que se cotiza aparte, suma contenidos por problema que resuelves y la optimización para buscadores con IA como ChatGPT.' },
          ...commonFaq('es', 'support', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué construyes en Washington', titleAccent: 'y te decimos qué arreglaríamos primero.' },
      linkLabel: 'Páginas web en el estado de Washington',
      serviceName: 'Diseño web y UX/UI para empresas de Washington',
      howToDescription: 'Cómo pasa una empresa del estado de Washington, con Aurin, del primer mensaje a un sitio o producto publicado y probado.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Washington State | Fixed Price | Aurin',
        description: 'Web design and UX/UI for Washington State companies, from Seattle to Spokane, with basic or advanced SEO. See the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Washington',
        titleAccent: 'for buyers who have seen it all.',
        description: 'Websites and products for Washington State companies: you see the design before we build and get a fixed price before any work begins.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'In Washington, your customer uses software all day. *They notice when yours falls short.*',
        intro: 'Ask for one service or all of them: the same team handles it. We use AI to save time, with an expert always making the calls, and every site launches with basic SEO.',
        items: {
          'web-design': { text: 'The person on your site may work at Microsoft or Amazon and can tell when something is slow or sloppy. We build it fast and clear, with nothing in the way, so you keep their trust past the first few seconds.', tags: 'Company websites · Startup websites · Basic SEO' },
          'web-development': { text: 'Dashboards, accounts, integrations with your CRM or cloud systems. We build what your team can’t get to this quarter, with tidy code they can pick up afterward.', tags: 'Dashboards · Integrations · Cloud' },
          'ux-ui-design': { text: 'If your product has users and you’re still losing people at signup, there’s a reason you can find. We watch your users, test prototypes and show you what to change first.', tags: 'User testing · Prototypes · Product' },
          branding: { text: 'In a region packed with tech companies, a lot of brands end up looking alike. We define what sets you apart and carry it into a name, a voice and an identity your team can use without us.', tags: 'Strategy · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the sectors *that move Washington.*',
        intro: 'Real Aurin clients in fields with real weight in the state. Open one to see what we do.',
        items: [
          { name: 'Software development', text: 'Software companies selling to technical teams, which need a website that keeps up with their product.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech and finance', text: 'Payments and accounts for users who compare you with the most polished apps on the market.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Healthcare', text: 'Medical and home care with clear information and special attention to health data.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Energy', text: 'Projects that must be explained to partners and communities, in a state where clean energy carries weight.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Education', text: 'Student, class and payment platforms for institutes running groups at different hours.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Design agencies', text: 'We build for design agencies that need every detail of their design respected.', clients: 'Ideograma · Identidad', page: 'agencies' },
        ],
      },
      cases: {
        heading: 'Products in use, *not mockups.*',
        ids: ['ancient', 'ingles-individual', 'fruit-academy', 'mexico-pacific'],
      },
      cities: {
        heading: 'From Puget Sound to Spokane: *what your site needs in each area.*',
        intro: 'Boeing, Microsoft, Amazon and a major port share the west side of the state. Across the mountains, both the buyer and the competition change completely.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Seattle', tags: 'Technology · Retail · Healthcare', need: 'Buyers used to carefully made products, who drop a slow or confusing site within seconds.', build: 'A precise message, a fast site and a demo or contact one tap away on a phone.' },
          { name: 'Bellevue and Redmond', tags: 'Software · Gaming · Services', need: 'Technical teams and product leads who review your experience before agreeing to a call.', build: 'Concrete cases, documentation that’s easy to find and a security page their team can review.' },
          { name: 'Tacoma and Everett', tags: 'Port · Aerospace · Manufacturing', need: 'Aerospace and logistics suppliers whose buyers ask for certifications before anything else.', build: 'Capabilities and certifications in plain view, spec sheets and a quote request that accepts drawings.' },
          { name: 'Olympia and Vancouver', tags: 'Government · Services · Healthcare', need: 'State vendors and Portland-area companies with customers on both sides of the state line.', build: 'Sober copy, an accessible site and clear service areas for people searching nearby.' },
          { name: 'Spokane and the east', tags: 'Agribusiness · Healthcare · Manufacturing', need: 'Family firms and agribusiness selling far away and competing with bigger suppliers from other states.', build: 'An organized catalog, the company’s real history and a short path to a price.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What Washington companies ask *before hiring us.*',
        items: [
          { question: 'How much does a website cost in Washington?', answer: 'It depends on whether it’s a marketing site or a product with accounts, data and permissions, which are very different jobs. After a free call you get a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Seattle, Bellevue and Tacoma?', answer: 'Yes, and in Redmond, Everett, Olympia and Spokane too. We work online, with video calls and shared prototypes, so a team used to working remotely won’t notice any difference.' },
          { question: 'Do you build websites for small businesses in Washington?', answer: 'Yes, and for startups just launching. If you need to go live soon, we start with a few very well-thought-out pages and grow when the business calls for it. Scope and price are clear in the proposal.' },
          { question: 'Where is your team, and how do you handle Pacific Time?', answer: 'In Cuernavaca, Mexico, since 1998. We’re two hours ahead of Washington in winter and one in summer, so your mornings fit easily into our workday. You can meet the team further down.' },
          { question: 'Does my site need to comply with Washington’s health data law?', answer: 'If you handle data related to people’s health, it’s worth checking: the My Health My Data Act isn’t limited to clinics and has no revenue minimum. We design forms that ask only for what’s needed and add the notices your advisor defines, plus cookie controls. Your advisor confirms what applies.' },
          { question: 'Can you work with our engineering team?', answer: 'Yes. We deliver prototypes, components and specs, and answer questions during the build. We can also build one piece and leave them the code and logins.' },
          { question: 'Do you offer SEO for tech companies in Washington?', answer: 'Yes. Every site includes the basics: titles, descriptions, speed and structured data. Advanced SEO, quoted separately, adds content by problem you solve and optimization for AI search like ChatGPT.' },
          ...commonFaq('en', 'support', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us what you’re building in Washington', titleAccent: 'and we’ll tell you what we’d fix first.' },
      linkLabel: 'Washington State web design',
      serviceName: 'Web Design and UX/UI for Washington Companies',
      howToDescription: 'How a Washington State company goes with Aurin from first message to a live, tested site or product.',
    },
  },
};
