import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Nueva Jersey: farmacéutica, logística del puerto y empresas entre Nueva York y Filadelfia. Ángulo: revisiones internas y privacidad. */
export const newJersey: State = {
  id: 'new-jersey',
  status: 'live',
  publishAt: '2026-11-04T06:00:00-06:00',
  slug: 'new-jersey',
  name: 'New Jersey',
  nameEs: 'Nueva Jersey',
  geo: { latitude: 40.0583, longitude: -74.4057 },
  areas: ['Newark', 'Jersey City', 'Hoboken', 'Edison', 'Princeton', 'Trenton', 'Cherry Hill', 'Atlantic City'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Nueva Jersey | Desde 1998 | Aurin',
        description: 'Páginas web y plataformas para empresas de Nueva Jersey, de Newark a Princeton. Precio cerrado y revisión por tu equipo antes de publicar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Nueva Jersey',
        titleAccent: 'para competir con Nueva York y Filadelfia.',
        description: 'Sitios y plataformas para empresas de Nueva Jersey, que tu equipo revisa y aprueba antes de publicar, con el precio cerrado desde el inicio.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tus clientes en Nueva Jersey *también están viendo proveedores de dos ciudades enormes.*',
        intro: 'Empieza con un servicio o con todos; el equipo es el mismo. La IA acelera el trabajo, con un experto que revisa cada paso, y el SEO básico va en el precio.',
        items: {
          'web-design': { text: 'Estás a minutos de Manhattan y de Filadelfia, y tu competencia también. Hacemos un sitio que te ponga al nivel de cualquiera de ellas, con tus zonas y servicios claros para que el cliente de cerca te elija.', tags: 'Sitio de empresa · Páginas por zona · SEO básico' },
          'web-development': { text: 'Almacenes, pedidos, proveedores y documentos que viven en correos. Construimos portales y seguimiento conectados a tus sistemas para que tus clientes dejen de llamar a preguntar.', tags: 'Portales · Seguimiento · Conexiones' },
          'ux-ui-design': { text: 'Un sistema para profesionales de salud, ciencia o finanzas tiene que evitar errores, no solo verse bien. Observamos cómo trabaja la gente y simplificamos el flujo, con cada cambio aprobado por tu equipo.', tags: 'Observación de uso · Prototipos · Sistemas' },
          branding: { text: 'Quedar entre dos marcas de ciudad grande hace fácil pasar desapercibido. Definimos por qué elegirte a ti y lo llevamos a una identidad clara para clientes, candidatos y socios.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores *clave de Nueva Jersey.*',
        intro: 'Clientes reales de Aurin en giros relevantes para el estado. Cada industria lleva a su página.',
        items: [
          { name: 'Salud', text: 'Servicios y consultorios con información que se entiende, en un estado con mucha cultura de salud y ciencias de la vida.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logística y construcción', text: 'Pedidos y seguimiento para distribuidores que se mueven alrededor del puerto de Newark y el corredor de la autopista.', clients: 'Grupo Estrella' },
          { name: 'Fintech y finanzas', text: 'Empresas financieras de Jersey City y sus usuarios: pagos y crédito que dan confianza desde la primera pantalla.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Educación', text: 'Plataformas y sistemas para escuelas e institutos que hoy reparten sus trámites en varias herramientas.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Turismo y entretenimiento', text: 'Boletos, mapas y horarios para atracciones de la costa con temporadas cortas e intensas.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Desarrollo de software', text: 'Producto y sitio para empresas de software que venden a farmacéuticas, bancos y otras firmas de la región.', clients: 'Ancient', page: 'software' },
        ],
      },
      cases: {
        heading: 'Sitios y sistemas *ya publicados.*',
        ids: ['grupo-estrella', 'ancient', 'el-rollo', 'fruit-academy'],
      },
      cities: {
        heading: 'De Newark a la costa: *qué le conviene a tu sitio en Nueva Jersey.*',
        intro: 'Es un estado chico con mercados muy distintos: farmacéutica y ciencia, un gran puerto, finanzas junto al río y una costa que vive de la temporada.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Newark y Elizabeth', tags: 'Puerto · Logística · Aeropuerto', need: 'Agentes de carga, transportistas y almacenes que necesitan saber rápido si tienes capacidad en su ruta.', build: 'Servicios y rutas a la vista, cotización rápida y seguimiento en línea para clientes frecuentes.' },
          { name: 'Jersey City y Hoboken', tags: 'Finanzas · Tecnología · Servicios', need: 'Empresas financieras y de tecnología al otro lado del río, comparadas directamente con proveedores de Manhattan.', build: 'Una imagen al nivel de Nueva York, pruebas claras de experiencia y seguridad, y un sitio muy rápido.' },
          { name: 'Princeton y Edison', tags: 'Farmacéutica · Ciencia · Educación', need: 'Empresas farmacéuticas y de ciencia, con equipos de revisión interna que leen cada palabra antes de aprobarla.', build: 'Contenido bien ordenado, un flujo de revisión claro y un administrador para actualizar sin programar.' },
          { name: 'Cherry Hill y el sur', tags: 'Salud · Servicios · Distribución', need: 'Empresas de la órbita de Filadelfia, con clientes en los dos estados y mucha oferta alrededor.', build: 'Páginas por zona y servicio, sin repetir texto, para clientes de los dos lados del río.' },
          { name: 'Atlantic City y la costa', tags: 'Turismo · Hospitalidad · Eventos', need: 'Visitantes de fin de semana y de temporada que deciden el mismo día, casi siempre desde el teléfono.', build: 'Reservas simples, horarios al día y avisos rápidos cuando cambia el clima o el calendario.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Antes de decidir, *en Nueva Jersey nos preguntan.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Nueva Jersey?', answer: 'Varía con el contenido, las páginas por zona y lo que el sitio debe conectar. Trabajamos con precio cerrado: tras una llamada gratis recibes por escrito el monto, lo que incluye y cuándo se entrega, y solo cambia si tú pides algo nuevo.' },
          { question: '¿Hacen diseño web en Newark, Jersey City y Princeton?', answer: 'Sí, y en Hoboken, Edison, Trenton, Cherry Hill y Atlantic City. Trabajamos en línea con todo Nueva Jersey, con videollamadas y prototipos que puedes abrir con tu equipo desde cualquier oficina.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Nueva Jersey?', answer: 'Sí. Para un negocio que atiende a varias ciudades cercanas, a veces lo mejor es un sitio pequeño con buenas páginas por servicio y zona. Te proponemos solo lo que necesitas y sabes el precio antes de empezar.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Vamos una hora atrás de Nueva Jersey en invierno y dos en verano, y agendamos dentro de tu jornada. El mismo equipo hace todo el proyecto: lo conoces más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Nueva Jersey?', answer: 'Puede que sí. La New Jersey Data Privacy Act está vigente desde enero de 2025 y alcanza a quien trata datos de 100,000 consumidores del estado, o de 25,000 si gana por venderlos, sin mínimo de ingresos. Dejamos formularios sobrios, aviso de privacidad y control de cookies. Tu asesor confirma si te aplica.' },
          { question: '¿Pueden trabajar con revisiones internas largas?', answer: 'Sí. En farmacéutica, salud o finanzas, los textos pasan por varias áreas. Lo planeamos desde la propuesta: quién revisa, en qué momento y por dónde. Firmamos confidencialidad desde el inicio, y nada se publica sin tu aprobación.' },
          { question: '¿Ofrecen SEO para salir en búsquedas locales de Nueva Jersey?', answer: 'Incluimos el SEO básico: títulos, descripciones, velocidad y datos estructurados. Las páginas con contenido propio por servicio y zona y la ayuda con tu perfil de Google Business son un trabajo más especializado que se cotiza aparte. Y podemos optimizar tu sitio para aparecer en buscadores con IA como ChatGPT. No prometemos un lugar exacto.' },
          ...commonFaq('es', 'payment', 'copy'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué vendes en Nueva Jersey', titleAccent: 'y te decimos cómo destacar entre dos gigantes.' },
      linkLabel: 'Diseño de páginas en Nueva Jersey',
      serviceName: 'Diseño web y plataformas para empresas de Nueva Jersey',
      howToDescription: 'Cómo avanza con Aurin el sitio de una empresa de Nueva Jersey, con cada paso revisado y aprobado por su equipo antes de publicar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in New Jersey | See It First | Aurin',
        description: 'Websites and platforms for New Jersey companies, from Newark to Princeton. A fixed price, and your team signs off before launch. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in New Jersey',
        titleAccent: 'for holding your own against New York and Philadelphia.',
        description: 'Websites and platforms for New Jersey companies, reviewed and approved by your team before launch, with a fixed price from the start.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your New Jersey customers *are also looking at vendors in two huge cities.*',
        intro: 'Start with one service or all of them; the team stays the same. AI speeds up the work, with an expert reviewing every step, and basic SEO is part of the price.',
        items: {
          'web-design': { text: 'You’re minutes from Manhattan and Philadelphia, and so is your competition. We build a site that puts you on their level, with your service areas spelled out so nearby customers pick you.', tags: 'Company websites · Service area pages · Basic SEO' },
          'web-development': { text: 'Warehouses, orders, suppliers and documents living in email threads. We build portals and tracking tied to your systems so customers stop calling to ask.', tags: 'Portals · Tracking · Integrations' },
          'ux-ui-design': { text: 'A system for health, science or finance professionals has to prevent errors, not just look good. We watch how people work and simplify the flow, with every change approved by your team.', tags: 'Usage research · Prototypes · Systems' },
          branding: { text: 'Sitting between two big-city brands makes it easy to go unnoticed. We define why people should choose you and carry it into a clear identity for customers, recruits and partners.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for *New Jersey’s key sectors.*',
        intro: 'Real Aurin clients in fields relevant to the state. Each industry links to its page.',
        items: [
          { name: 'Healthcare', text: 'Services and practices with information people can follow, in a state steeped in healthcare and life sciences.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logistics and construction', text: 'Ordering and tracking for distributors working around Port Newark and the Turnpike corridor.', clients: 'Grupo Estrella' },
          { name: 'Fintech and finance', text: 'Financial firms in Jersey City and their users: payments and lending that build trust from the first screen.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Education', text: 'Platforms and systems for schools and institutes that spread their paperwork across several tools today.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Tourism and entertainment', text: 'Tickets, maps and hours for Shore attractions with short, intense seasons.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Software development', text: 'Product and website for software companies selling to pharma, banks and other firms in the region.', clients: 'Ancient', page: 'software' },
        ],
      },
      cases: {
        heading: 'Sites and systems *already live.*',
        ids: ['grupo-estrella', 'ancient', 'el-rollo', 'fruit-academy'],
      },
      cities: {
        heading: 'From Newark to the Shore: *what your New Jersey site should do.*',
        intro: 'It’s a small state with very different markets: pharma and science, a major port, finance along the river and a coast that lives by the season.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Newark and Elizabeth', tags: 'Port · Logistics · Airport', need: 'Freight forwarders, carriers and warehouses that need to know fast whether you have capacity on their route.', build: 'Services and routes up front, quick quotes and online tracking for repeat customers.' },
          { name: 'Jersey City and Hoboken', tags: 'Finance · Technology · Services', need: 'Finance and tech firms across the river, directly compared with vendors in Manhattan.', build: 'A look on par with New York, clear proof of experience and security, and a very fast site.' },
          { name: 'Princeton and Edison', tags: 'Pharma · Science · Education', need: 'Pharma and science companies, with internal review teams that read every word before approving it.', build: 'Well-organized content, a clear review flow, and an admin area for updates without a developer.' },
          { name: 'Cherry Hill and South Jersey', tags: 'Healthcare · Services · Distribution', need: 'Companies in Philadelphia’s orbit, with customers in both states and plenty of options around them.', build: 'Pages by area and service, with no repeated text, for customers on both sides of the river.' },
          { name: 'Atlantic City and the Shore', tags: 'Tourism · Hospitality · Events', need: 'Weekend and seasonal visitors deciding the same day, nearly always on a phone.', build: 'Simple booking, up-to-date hours and quick notices when the weather or calendar changes.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Before deciding, *New Jersey companies ask us.*',
        items: [
          { question: 'How much does a website cost in New Jersey?', answer: 'It varies with the content, the area pages and what the site has to connect to. We work at a fixed price: after a free call you get the amount, what’s included and the delivery dates in writing, and it only changes if you ask for something new.' },
          { question: 'Do you do web design in Newark, Jersey City and Princeton?', answer: 'Yes, and in Hoboken, Edison, Trenton, Cherry Hill and Atlantic City. We work online across New Jersey, with video calls and prototypes your team can open from any office.' },
          { question: 'Do you build websites for small businesses in New Jersey?', answer: 'Yes. For a business serving several nearby towns, the right answer is sometimes a small site with strong pages by service and area. We propose only what you need, and you know the price before we start.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We’re one hour behind New Jersey in winter and two in summer, and we schedule inside your workday. One team handles the whole project, and you can meet them further down this page.' },
          { question: 'Does my company need to comply with the New Jersey privacy law?', answer: 'It might. The New Jersey Data Privacy Act has been in force since January 2025 and reaches anyone processing data on 100,000 state consumers, or 25,000 if they profit from selling it, with no revenue minimum. We set up modest forms, a privacy notice and cookie controls. Your advisor confirms whether it applies.' },
          { question: 'Can you work with long internal reviews?', answer: 'Yes. In pharma, healthcare or finance, copy passes through several departments. We plan for it in the proposal: who reviews, when and how. We sign confidentiality agreements from the start, and nothing goes live without your approval.' },
          { question: 'Do you offer SEO for local searches in New Jersey?', answer: 'We include basic SEO: titles, descriptions, speed and structured data. Pages with original content by service and area, plus help with your Google Business Profile, are a more specialized effort quoted separately. And we can optimize your site to appear in AI search like ChatGPT. We don’t promise an exact position.' },
          ...commonFaq('en', 'payment', 'copy'),
        ],
      },
      cta: { titleLead: 'Tell us what you sell in New Jersey', titleAccent: 'and we’ll show you how to stand out between two giants.' },
      linkLabel: 'New Jersey website design',
      serviceName: 'Web Design and Platforms for New Jersey Companies',
      howToDescription: 'How a New Jersey company’s site moves forward with Aurin, with each step reviewed and approved by its team before launch.',
    },
  },
};
