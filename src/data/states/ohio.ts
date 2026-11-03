import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Ohio: manufactura y proveedores, marcas de consumo, seguros y logística en Columbus. Ángulo: catálogo, cotización y reclutamiento. */
export const ohio: State = {
  id: 'ohio',
  status: 'live',
  publishAt: '2026-11-04T06:00:00-06:00',
  slug: 'ohio',
  name: 'Ohio',
  geo: { latitude: 40.4173, longitude: -82.9071 },
  areas: ['Columbus', 'Cleveland', 'Cincinnati', 'Dayton', 'Toledo', 'Akron', 'Youngstown'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Ohio | Precio cerrado | Aurin',
        description: 'Páginas web y catálogos en línea para empresas de Ohio, de Columbus a Cleveland. Precio cerrado y el diseño a la vista antes de programar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Ohio',
        titleAccent: 'que te traen cotizaciones y buenos candidatos.',
        description: 'Sitios y catálogos en línea para fabricantes, proveedores y empresas de servicios de Ohio, con precio cerrado y sin vueltas.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu empresa en Ohio hace cosas concretas. *Tu sitio también debería ser concreto.*',
        intro: 'Contrata lo que necesites hoy; el mismo equipo te acompaña después. IA para avanzar más rápido, siempre con un experto a cargo, y SEO básico incluido.',
        items: {
          'web-design': { text: 'Tu sitio dice «calidad y compromiso», igual que el de tus competidores. Lo cambiamos por lo que el comprador quiere ver: qué fabricas, para quién, con qué certificaciones y cómo pedir una cotización.', tags: 'Sitio industrial · Catálogo · SEO básico' },
          'web-development': { text: 'Cotizaciones que viajan entre correos y listas de precios en PDF desactualizados. Hacemos catálogos en línea, solicitudes de cotización y portales para distribuidores, conectados a tu sistema.', tags: 'Catálogos · Cotizaciones · Portal de distribuidores' },
          'ux-ui-design': { text: 'Las aseguradoras, los bancos y las cadenas de Ohio operan con sistemas que sus clientes apenas entienden. Vemos dónde se confunden y rediseñamos esos pasos para bajar llamadas y errores.', tags: 'Observación de uso · Prototipos · Portales' },
          branding: { text: 'Una empresa que lleva décadas haciendo bien su trabajo a veces se ve vieja junto a una recién llegada. Actualizamos la marca sin perder lo que tus clientes ya confían, y ayudamos también a atraer gente joven.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores *que sostienen a Ohio.*',
        intro: 'Clientes reales de Aurin en giros importantes para el estado. Entra a cada industria para ver el detalle.',
        items: [
          { name: 'Logística y construcción', text: 'Ohio queda a un día de camión de buena parte del país. Pedidos, seguimiento y cotización para quien mueve materiales y carga.', clients: 'Grupo Estrella' },
          { name: 'Energía', text: 'Sitios para explicar proyectos, permisos y avance a socios y comunidades, en un estado con mucha industria.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Salud', text: 'Junto a los grandes sistemas de salud de Ohio, consultorios y atención en casa con información fácil de encontrar.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech y finanzas', text: 'Pagos y crédito con pantallas claras para usuarios de una región más acostumbrada a su banco de toda la vida.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Educación', text: 'Sistemas de alumnos, clases y pagos para institutos y programas de capacitación técnica.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones comunitarias que necesitan explicar su trabajo y facilitar donativos y voluntariado.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Trabajo en línea, *para que lo compruebes.*',
        ids: ['grupo-estrella', 'mexico-pacific', 'fruit-academy', 'ingles-individual'],
      },
      cities: {
        heading: 'Cinco Ohios en un estado: *qué necesita tu sitio en cada uno.*',
        intro: 'Seguros y logística en el centro, salud y fábricas en el norte, marcas de consumo en el sur. Quien busca a tu empresa cambia bastante según la zona.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Columbus', tags: 'Seguros · Comercio · Logística', need: 'Aseguradoras, cadenas y operadores logísticos, con áreas de compras formales y mucha competencia por talento.', build: 'Información clara por línea de negocio, una sección de empleo que convenza y portales para clientes.' },
          { name: 'Cleveland y Akron', tags: 'Salud · Manufactura · Polímeros', need: 'Proveedores de los grandes sistemas de salud y fabricantes con clientes técnicos que revisan cada especificación.', build: 'Fichas técnicas, certificaciones a la vista y una solicitud de cotización que acepte archivos.' },
          { name: 'Cincinnati', tags: 'Marcas de consumo · Comercio · Servicios', need: 'Proveedores y agencias alrededor de grandes marcas de consumo, acostumbradas a procesos y presentaciones muy cuidadas.', build: 'Casos con nombre, una marca bien resuelta y un sitio que aguante la revisión de un equipo de compras.' },
          { name: 'Dayton', tags: 'Aeroespacial · Defensa · Investigación', need: 'Contratistas alrededor de la base de Wright-Patterson y empresas de investigación aplicada.', build: 'Capacidades y credenciales ordenadas, un sitio accesible y seguro, y textos sobrios sin promesas vagas.' },
          { name: 'Toledo y Youngstown', tags: 'Vidrio · Autopartes · Metal', need: 'Fabricantes de larga tradición que quieren nuevos clientes fuera de su cadena habitual.', build: 'Catálogo actualizado, detalle por proceso y material, y una página que explique por qué pueden confiar en ti.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que suelen preguntarnos *en Ohio.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Ohio?', answer: 'Un sitio de pocas páginas cuesta menos que uno con catálogo y cotizaciones conectadas, así que primero vemos qué te conviene. Después de la llamada gratis recibes por escrito un precio cerrado, lo que incluye y las fechas. Si pides algo extra, te decimos cuánto antes de hacerlo.' },
          { question: '¿Hacen diseño web en Columbus, Cleveland y Cincinnati?', answer: 'Sí, y en Dayton, Toledo, Akron y Youngstown. Trabajamos en línea con todo Ohio, y eso incluye a empresas industriales que nunca antes contrataron a una agencia: te explicamos cada paso sin tecnicismos.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Ohio?', answer: 'Sí, como talleres, proveedores y negocios familiares que quieren dejar de depender solo de la recomendación. Puede bastar un sitio pequeño y claro que diga qué haces y en qué zona trabajas.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Vamos una hora atrás de Ohio en invierno y dos en verano, y nos reunimos en tu horario de trabajo. Son las mismas personas de principio a fin, y puedes verlas más abajo en esta página.' },
          { question: '¿Puedo poner mi catálogo en línea aunque no venda por internet?', answer: 'Sí, y en industria es lo más común: el cliente revisa productos, descarga fichas y te pide cotización, sin carrito de compra. Y cada producto queda con su propia página, fácil de compartir con un comprador.' },
          { question: '¿Mi sitio me puede ayudar a contratar gente?', answer: 'Sí. Una buena sección de empleo con fotos reales, qué hace tu gente y cómo postularse desde el teléfono ayuda mucho cuando compites por técnicos y operarios. Lo incluimos en la propuesta si lo necesitas.' },
          { question: '¿Ofrecen SEO para empresas industriales en Ohio?', answer: 'Sí, el básico viene incluido: títulos, descripciones, velocidad y datos estructurados. Un comprador técnico busca por proceso, material o certificación; si quieres páginas para esas búsquedas, es un trabajo más especializado que cotizamos aparte y te decimos qué esperar. Igual podemos optimizarlo para buscadores con IA, donde también preguntan los compradores.' },
          ...commonFaq('es', 'copy', 'support'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué fabrica o hace tu empresa en Ohio', titleAccent: 'y te decimos cómo llegar a más compradores.' },
      linkLabel: 'Páginas web para empresas de Ohio',
      serviceName: 'Diseño web y catálogos en línea para empresas de Ohio',
      howToDescription: 'Cómo tiene su sitio o catálogo en línea una empresa de Ohio con Aurin, desde el primer mensaje hasta la publicación.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Ohio | Fixed Price | Aurin',
        description: 'Websites and online catalogs for Ohio companies, from Columbus to Cleveland. A fixed price, and you see the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Ohio',
        titleAccent: 'for websites that bring in quotes and good hires.',
        description: 'Websites and online catalogs for Ohio manufacturers, suppliers and service companies, at a fixed price and with no runaround.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your Ohio company makes real things. *Your website should be just as concrete.*',
        intro: 'Hire us for what you need today; the same team stays with you after. AI to move faster, always with an expert in charge, and basic SEO included.',
        items: {
          'web-design': { text: 'Your site says “quality and commitment,” same as your competitors’. We replace that with what buyers want to see: what you make, who for, which certifications and how to request a quote.', tags: 'Industrial websites · Catalogs · Basic SEO' },
          'web-development': { text: 'Quotes bouncing between emails and outdated PDF price lists. We build online catalogs, quote requests and distributor portals connected to your system.', tags: 'Catalogs · Quote requests · Distributor portals' },
          'ux-ui-design': { text: 'Ohio’s insurers, banks and retail chains run on systems their customers barely understand. We see where people get confused and redesign those steps to cut calls and errors.', tags: 'Usage research · Prototypes · Portals' },
          branding: { text: 'A company that’s done good work for decades can look old next to a newcomer. We update the brand without losing what customers trust, and help you appeal to younger talent too.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the sectors *that hold Ohio up.*',
        intro: 'Real Aurin clients in fields important to the state. Open an industry for the details.',
        items: [
          { name: 'Logistics and construction', text: 'Ohio is within a day’s drive of much of the country. Ordering, tracking and quotes for companies moving materials and freight.', clients: 'Grupo Estrella' },
          { name: 'Energy', text: 'Sites that explain projects, permits and progress to partners and communities, in a state with heavy industry.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Healthcare', text: 'Alongside Ohio’s big health systems, practices and home care with information that’s easy to find.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech and finance', text: 'Payments and lending with clear screens for users in a region more used to the bank they’ve always had.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Education', text: 'Student, class and tuition systems for institutes and technical training programs.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Community organizations that need to explain their work and make giving and volunteering easy.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Live work, *so you can check it yourself.*',
        ids: ['grupo-estrella', 'mexico-pacific', 'fruit-academy', 'ingles-individual'],
      },
      cities: {
        heading: 'Five Ohios in one state: *what your site needs in each.*',
        intro: 'Insurance and logistics in the center, healthcare and factories up north, consumer brands down south. Who’s searching for your company changes a lot by area.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Columbus', tags: 'Insurance · Retail · Logistics', need: 'Insurers, chains and logistics operators, with formal purchasing teams and fierce competition for talent.', build: 'Clear information by business line, a careers section that persuades, and customer portals.' },
          { name: 'Cleveland and Akron', tags: 'Healthcare · Manufacturing · Polymers', need: 'Suppliers to the big health systems and manufacturers whose technical customers check every spec.', build: 'Spec sheets, certifications in plain view and a quote request that accepts files.' },
          { name: 'Cincinnati', tags: 'Consumer brands · Retail · Services', need: 'Suppliers and agencies around major consumer brands, used to careful processes and polished presentations.', build: 'Named case studies, a well-resolved brand and a site that stands up to a purchasing team’s review.' },
          { name: 'Dayton', tags: 'Aerospace · Defense · Research', need: 'Contractors around Wright-Patterson Air Force Base and applied research firms.', build: 'Organized capabilities and credentials, an accessible and secure site, and sober copy with no vague promises.' },
          { name: 'Toledo and Youngstown', tags: 'Glass · Auto parts · Metals', need: 'Long-established manufacturers looking for new customers outside their usual supply chain.', build: 'An up-to-date catalog, details by process and material, and a page that explains why people can trust you.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What we’re usually asked *in Ohio.*',
        items: [
          { question: 'How much does a website cost in Ohio?', answer: 'A site with a few pages costs less than one with a catalog and connected quotes, so we first figure out what suits you. After a free call you get a fixed price in writing, what’s included and the dates. If you ask for something extra, we tell you the cost before doing it.' },
          { question: 'Do you do web design in Columbus, Cleveland and Cincinnati?', answer: 'Yes, and in Dayton, Toledo, Akron and Youngstown. We work online across Ohio, including with industrial companies that have never hired an agency: we explain each step without the technical talk.' },
          { question: 'Do you build websites for small businesses in Ohio?', answer: 'Yes, such as machine shops, suppliers and family businesses that want to stop relying on referrals alone. A small, clear site that says what you do and where you work may be enough.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We’re one hour behind Ohio in winter and two in summer, and we meet during your working hours. It’s the same people from start to finish, and you can see them further down this page.' },
          { question: 'Can I put my catalog online even if I don’t sell online?', answer: 'Yes, and in industry that’s the norm: customers browse products, download spec sheets and request a quote, with no shopping cart. And each product gets its own page, easy to share with a buyer.' },
          { question: 'Can my website help me hire people?', answer: 'Yes. A good careers section with real photos, what your people do and how to apply by phone helps a lot when you’re competing for technicians and operators. We include it in the proposal if you need it.' },
          { question: 'Do you offer SEO for industrial companies in Ohio?', answer: 'Yes, the basics are included: titles, descriptions, speed and structured data. A technical buyer searches by process, material or certification; if you want pages for those searches, that’s a more specialized effort we quote separately, and we tell you what to expect. We can also optimize it for AI search, where buyers ask questions too.' },
          ...commonFaq('en', 'copy', 'support'),
        ],
      },
      cta: { titleLead: 'Tell us what your Ohio company makes or does', titleAccent: 'and we’ll tell you how to reach more buyers.' },
      linkLabel: 'Websites for Ohio companies',
      serviceName: 'Web Design and Online Catalogs for Ohio Companies',
      howToDescription: 'How an Ohio company gets its website or online catalog with Aurin, from the first message to launch.',
    },
  },
};
