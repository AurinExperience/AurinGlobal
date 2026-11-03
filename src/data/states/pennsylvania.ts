import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Pensilvania: empresas con historia que necesitan modernizarse (Filadelfia, Pittsburgh, Lehigh Valley). Ángulo: renovar sin perder lo ganado. */
export const pennsylvania: State = {
  id: 'pennsylvania',
  status: 'live',
  slug: 'pennsylvania',
  name: 'Pennsylvania',
  nameEs: 'Pensilvania',
  geo: { latitude: 41.2033, longitude: -77.1945 },
  areas: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Bethlehem', 'Harrisburg', 'Lancaster', 'Erie', 'Scranton'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Pensilvania | Desde 1998 | Aurin',
        description: 'Páginas web, rediseño y branding para empresas de Pensilvania, de Filadelfia a Pittsburgh. Moderniza tu sitio sin perder lo que ya funciona. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Pensilvania',
        titleAccent: 'para empresas con historia y ganas de crecer.',
        description: 'Renovamos sitios y marcas de empresas de Pensilvania sin perder sus clientes de siempre ni el lugar que ya tienen en Google.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Décadas de buen trabajo en Pensilvania *merecen un sitio que lo cuente.*',
        intro: 'Empieza por lo más urgente; el mismo equipo sigue con lo demás. La IA nos ayuda a ir más rápido, con un experto a cargo, y dejamos listo el SEO básico.',
        items: {
          'web-design': { text: 'Tu sitio se hizo cuando el negocio era otro y hoy los clientes jóvenes te descartan sin conocerte. Lo renovamos conservando lo que ya te trae visitas, tu historia y las páginas que Google conoce.', tags: 'Rediseño · Sitio de empresa · SEO básico' },
          'web-development': { text: 'Un sistema a la medida de hace años que solo una persona sabe mover. Revisamos qué rescatar y lo llevamos a una plataforma actual, sin detener tu operación mientras tanto.', tags: 'Modernización · Portales · Conexiones' },
          'ux-ui-design': { text: 'Hospitales, universidades y empresas grandes acumulan pantallas que nadie diseñó completas. Las ordenamos a partir de lo que la gente intenta hacer, con pruebas antes de cambiar nada en serio.', tags: 'Pruebas con usuarios · Prototipos · Sistemas' },
          branding: { text: 'Pasar la empresa a la siguiente generación o comprar a un competidor pide renovar la marca sin que parezca otra compañía. Cuidamos lo que tus clientes reconocen y cambiamos lo que estorba.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores *de Pensilvania.*',
        intro: 'Clientes reales de Aurin en giros importantes del estado. Cada industria lleva a su detalle.',
        items: [
          { name: 'Salud', text: 'Entre los grandes sistemas de Pittsburgh y Filadelfia, también compiten consultorios y atención en casa. Información clara y contacto fácil.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Universidades y escuelas con trámites dispersos: inscripción, pagos y clases en un mismo sistema.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Energía', text: 'Un estado de gas natural y proyectos que requieren confianza local. Sitios que explican permisos, avance y comunidad.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Logística y construcción', text: 'Almacenes y distribuidores del corredor del Lehigh Valley, con pedidos y seguimiento en línea.', clients: 'Grupo Estrella' },
          { name: 'Cultura y ciencia', text: 'Orquestas, museos e instituciones con mucha historia, que necesitan llegar a un público nuevo.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que deben explicar su trabajo a nuevos donantes, no solo a quienes las conocen de siempre.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Sitios que renovamos y creamos, *en línea hoy.*',
        ids: ['mineria', 'mexico-pacific', 'ingles-individual', 'grupo-estrella'],
      },
      cities: {
        heading: 'Dos grandes ciudades y mucho en medio: *lo que pide cada parte de Pensilvania.*',
        intro: 'Filadelfia mira a la costa este, Pittsburgh al medio oeste y entre las dos hay almacenes, granjas y fábricas. El mismo sitio no le habla igual a todos.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Filadelfia', tags: 'Ciencias de la vida · Educación · Salud', need: 'Empresas de ciencias de la vida, instituciones y servicios profesionales que le venden a compradores exigentes de toda la costa este.', build: 'Un sitio sobrio y preciso, con credenciales a la vista y páginas para cada tipo de cliente.' },
          { name: 'Pittsburgh', tags: 'Robótica · Salud · Energía', need: 'Empresas de robótica y tecnología nacidas de sus universidades, junto a salud y a una base industrial que se reinventó.', build: 'Productos explicados para quien no es ingeniero, con videos y demostraciones. Un portal si tus clientes ya lo piden.' },
          { name: 'Lehigh Valley', tags: 'Almacenes · Distribución · Manufactura', need: 'Operadores logísticos y fabricantes de Allentown y Bethlehem, a un día de camión de buena parte del noreste.', build: 'Cobertura, instalaciones y tiempos visibles, con cotización simple y seguimiento en línea para clientes.' },
          { name: 'Harrisburg y Lancaster', tags: 'Gobierno · Agroindustria · Empresa familiar', need: 'Proveedores del gobierno estatal y empresas familiares que dependieron por décadas de la recomendación.', build: 'Un sitio que respalde esa recomendación, con su historia y su gente, sin perder el trato cercano que los distingue.' },
          { name: 'Erie y Scranton', tags: 'Manufactura · Salud · Servicios', need: 'Fabricantes y servicios regionales que quieren venderle a clientes fuera de su ciudad y competir con empresas más grandes.', build: 'Capacidades claras y una página por tipo de producto o servicio, para convencer a quien todavía no te conoce.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Dudas frecuentes *en Pensilvania.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Pensilvania?', answer: 'En un rediseño, el precio depende de cuánto contenido hay que rescatar y qué tiene que hacer el sitio nuevo. Revisamos el actual, hablamos contigo en una llamada gratis y te enviamos un precio cerrado por escrito, sin cargos sorpresa a medio camino.' },
          { question: '¿Dónde están ubicados?', answer: 'En Cuernavaca, México, desde 1998. Atendemos en línea a empresas de Filadelfia, Pittsburgh, Allentown, Harrisburg, Lancaster y todo el estado. Trabajas siempre con el mismo equipo, que puedes conocer en esta misma página.' },
          { question: 'Mi empresa tiene décadas. ¿Se puede modernizar sin perder su historia?', answer: 'Sí, y esa historia es una ventaja que tus competidores nuevos no tienen. Identificamos lo que tus clientes reconocen y confían, lo conservamos y cambiamos lo que hoy te hace parecer anticuado.' },
          { question: 'Mi sitio viejo aún trae clientes. ¿Lo pongo en riesgo?', answer: 'Por eso medimos antes de cambiar nada: vemos qué páginas y búsquedas te traen clientes, las mantenemos en el sitio nuevo y dejamos redirecciones. Tu equipo puede probarlo todo antes de publicar.' },
          { question: '¿Cuál es su horario de reuniones?', answer: 'Dentro de tu jornada: vamos una hora atrás de Pensilvania en invierno y dos en verano, así que preferimos media mañana o tarde.' },
          { question: '¿Ofrecen SEO para aparecer en ciudades de Pensilvania donde no tengo oficina?', answer: 'Tu sitio incluye el SEO básico, pero llegar a otras ciudades pide un trabajo más especializado que se cotiza aparte: páginas honestas sobre el servicio que das ahí, sin direcciones inventadas. Lo mismo si quieres aparecer en buscadores con IA: también optimizamos el sitio para eso. Toma tiempo y depende de tu competencia.' },
          { question: '¿Hacen diseño web en Filadelfia y Pittsburgh?', answer: 'Sí, y en Allentown, Harrisburg, Lancaster y Erie. Trabajamos en línea, así que puedes empezar con una llamada y ver el rediseño en un prototipo, estés en el centro de Filadelfia o en una planta del oeste del estado.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Pensilvania?', answer: 'Sí, y muchas ya tienen un sitio viejo y una clientela fiel. Conservamos lo que funciona, renovamos lo que ya no ayuda y te decimos el precio completo antes de empezar.' },
          ...commonFaq('es', 'payment', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos la historia de tu empresa en Pensilvania', titleAccent: 'y vemos cómo renovarla.' },
      linkLabel: 'Rediseño web en Pensilvania',
      serviceName: 'Diseño y rediseño web para empresas de Pensilvania',
      howToDescription: 'Cómo renueva Aurin el sitio de una empresa de Pensilvania, de la primera conversación a la publicación, sin perder lo que ya funciona.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Pennsylvania | Since 1998 | Aurin',
        description: 'Web design, redesigns and branding for Pennsylvania companies, from Philadelphia to Pittsburgh. Modernize your site and keep what works. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Pennsylvania',
        titleAccent: 'for companies with history and room to grow.',
        description: 'We renew websites and brands for Pennsylvania companies without losing longtime customers or the spot you’ve earned on Google.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Decades of good work in Pennsylvania *deserve a website that says so.*',
        intro: 'Start with what’s most urgent; the same team carries on with the rest. AI helps us go faster, with an expert in charge, and we set up the basic SEO.',
        items: {
          'web-design': { text: 'Your site was built for the business you used to be, and younger buyers rule you out before they know you. We renew it while keeping what brings visitors today, your history and the pages Google knows.', tags: 'Redesigns · Company websites · Basic SEO' },
          'web-development': { text: 'A custom system from years back that only one person knows how to run. We review what’s worth saving and move it to a current platform, without stopping your operation along the way.', tags: 'Modernization · Portals · Integrations' },
          'ux-ui-design': { text: 'Hospitals, universities and large companies pile up screens nobody ever designed as a whole. We sort them around what people are trying to do, with testing before anything serious changes.', tags: 'User testing · Prototypes · Systems' },
          branding: { text: 'Handing the company to the next generation or buying a competitor calls for a brand refresh that doesn’t look like a different company. We protect what customers recognize and change what gets in the way.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for *Pennsylvania’s sectors.*',
        intro: 'Real Aurin clients in fields important to the state. Each industry links to its details.',
        items: [
          { name: 'Healthcare', text: 'Alongside the big systems in Pittsburgh and Philadelphia, practices and home care compete too. Clear information and easy contact.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Universities and schools with scattered processes: enrollment, tuition and classes in one system.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Energy', text: 'A natural gas state, with projects that depend on local trust. Sites that explain permits, progress and community.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Logistics and construction', text: 'Warehouses and distributors along the Lehigh Valley corridor, with online ordering and tracking.', clients: 'Grupo Estrella' },
          { name: 'Culture and science', text: 'Orchestras, museums and institutions rich in history that need to reach new audiences.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Nonprofits', text: 'Organizations that must explain their work to new donors, not only to those who’ve always known them.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Sites we’ve renewed and created, *live today.*',
        ids: ['mineria', 'mexico-pacific', 'ingles-individual', 'grupo-estrella'],
      },
      cities: {
        heading: 'Two big cities and plenty in between: *what each part of Pennsylvania asks for.*',
        intro: 'Philadelphia faces the East Coast, Pittsburgh looks toward the Midwest, and between them lie warehouses, farms and factories. One site doesn’t speak to all of them the same way.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Philadelphia', tags: 'Life sciences · Education · Healthcare', need: 'Life sciences firms, institutions and professional services selling to demanding buyers along the whole East Coast.', build: 'A sober, precise site with credentials up front and pages for each type of client.' },
          { name: 'Pittsburgh', tags: 'Robotics · Healthcare · Energy', need: 'Robotics and tech firms born from its universities, alongside healthcare and an industrial base that reinvented itself.', build: 'Products explained for non-engineers, with video and demos. A portal if your customers are already asking.' },
          { name: 'Lehigh Valley', tags: 'Warehousing · Distribution · Manufacturing', need: 'Logistics operators and manufacturers in Allentown and Bethlehem, within a day’s drive of much of the Northeast.', build: 'Coverage, facilities and lead times in plain view, with a simple quote and online tracking for customers.' },
          { name: 'Harrisburg and Lancaster', tags: 'Government · Agribusiness · Family firms', need: 'State government vendors and family businesses that relied for decades on referrals.', build: 'A site that backs up the referral with your history and your people, keeping the personal touch that sets you apart.' },
          { name: 'Erie and Scranton', tags: 'Manufacturing · Healthcare · Services', need: 'Regional manufacturers and service firms looking to sell outside their city and compete with bigger companies.', build: 'Clear capabilities and a page per product or service type, to win over people who don’t know you yet.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Common questions *in Pennsylvania.*',
        items: [
          { question: 'How much does a website cost in Pennsylvania?', answer: 'For a redesign, the price depends on how much content needs rescuing and what the new site has to do. We review your current one, talk on a free call and send a fixed price in writing, with no surprise charges halfway through.' },
          { question: 'Where are you located?', answer: 'In Cuernavaca, Mexico, since 1998. We work online with companies in Philadelphia, Pittsburgh, Allentown, Harrisburg, Lancaster and across the state. You always work with the same team, and you can meet them on this page.' },
          { question: 'My company is decades old. Can it modernize without losing its history?', answer: 'Yes, and that history is an edge newer competitors don’t have. We identify what customers recognize and trust, keep it, and change whatever makes you look dated today.' },
          { question: 'My old site still brings in customers. Am I putting that at risk?', answer: 'That’s why we measure before changing anything: we see which pages and searches bring customers, keep them on the new site and set up redirects. Your team can test everything before launch.' },
          { question: 'When can we meet?', answer: 'During your workday: we’re one hour behind Pennsylvania in winter and two in summer, so we prefer mid-morning or afternoon.' },
          { question: 'Do you offer SEO to show up in Pennsylvania cities where I have no office?', answer: 'Your site includes basic SEO, but reaching other cities takes a more specialized effort, quoted separately: honest pages about the service you offer there, with no made-up addresses. The same goes for AI search: we can optimize the site for that as well. It takes time and depends on your competition.' },
          { question: 'Do you do web design in Philadelphia and Pittsburgh?', answer: 'Yes, and in Allentown, Harrisburg, Lancaster and Erie. We work online, so you can start with a call and see the redesign in a prototype, whether you’re in Center City or at a plant in the western part of the state.' },
          { question: 'Do you build websites for small businesses in Pennsylvania?', answer: 'Yes, and many already have an old site and loyal customers. We keep what works, renew what no longer helps and give you the full price before we start.' },
          ...commonFaq('en', 'payment', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us your Pennsylvania company’s story', titleAccent: 'and we’ll see how to renew it.' },
      linkLabel: 'Pennsylvania website redesign',
      serviceName: 'Web Design and Redesign for Pennsylvania Companies',
      howToDescription: 'How Aurin renews a Pennsylvania company’s website, from the first conversation to launch, keeping what already works.',
    },
  },
};
