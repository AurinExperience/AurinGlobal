import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Michigan: autos y sus proveedores, muebles de oficina, salud y Ann Arbor. Ángulo: ayudar al proveedor a vender más allá de sus clientes de siempre. */
export const michigan: State = {
  id: 'michigan',
  status: 'live',
  publishAt: '2026-11-05T06:00:00-06:00',
  slug: 'michigan',
  name: 'Michigan',
  geo: { latitude: 44.3148, longitude: -85.6024 },
  areas: ['Detroit', 'Troy', 'Auburn Hills', 'Ann Arbor', 'Grand Rapids', 'Lansing', 'Flint', 'Traverse City'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Michigan | Precio cerrado | Aurin',
        description: 'Páginas web y portales para empresas de Michigan, de Detroit a Grand Rapids, con SEO básico o avanzado. Precio cerrado y ves el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Michigan',
        titleAccent: 'para vender más allá de tu cliente de siempre.',
        description: 'Sitios, catálogos y portales para proveedores, fabricantes y empresas de Michigan, con precio cerrado y un equipo que habla claro.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Si la mitad de tus ventas depende de un solo cliente, *tu sitio tiene trabajo por hacer.*',
        intro: 'Elige una parte o el proyecto completo; el equipo no cambia. Avanzamos más rápido con IA, con un experto revisando todo, y el sitio ya trae el SEO básico.',
        items: {
          'web-design': { text: 'Durante años te bastó con tu lista de clientes y tus certificaciones. Para entrar a otros sectores, alguien que no te conoce tiene que entender qué haces y por qué puede confiarte una pieza crítica. Hacemos ese sitio.', tags: 'Sitio industrial · Nuevos mercados · SEO básico' },
          'web-development': { text: 'Portales de proveedores, consulta de piezas, seguimiento de pedidos y documentos de calidad en un mismo lugar. Lo conectamos con tu sistema para quitarle llamadas y correos a tu equipo.', tags: 'Portal de proveedores · Catálogo · Conexiones' },
          'ux-ui-design': { text: 'El software que usan tus técnicos en planta o tus distribuidores en la calle se hizo pensando en la oficina. Hablamos con quienes lo usan, vemos cómo lo usan en su jornada y rediseñamos lo que los frena, también en pantallas chicas.', tags: 'Observación de uso · Prototipos · Sistemas' },
          branding: { text: 'Una empresa con décadas de oficio puede verse igual que hace veinte años. Renovamos tu imagen sin borrar lo que te dio reputación, y te ayudamos a atraer ingenieros jóvenes en un mercado que se los pelea.', tags: 'Renovación de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para la industria *que sostiene a Michigan.*',
        intro: 'Clientes reales de Aurin en sectores cercanos a los del estado. Abre cada industria para conocer el detalle.',
        items: [
          { name: 'Logística y construcción', text: 'Pedidos y seguimiento para quienes mueven materiales entre plantas y proveedores.', clients: 'Grupo Estrella' },
          { name: 'Energía', text: 'Proyectos y plantas que deben explicarse a socios, autoridades y comunidades.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Desarrollo de software', text: 'Empresas de software automotriz y de movilidad en Ann Arbor y Detroit, con un producto difícil de explicar.', clients: 'Ancient', page: 'software' },
          { name: 'Salud', text: 'Atención médica y en casa junto a grandes redes hospitalarias, con información fácil de encontrar.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Plataformas para institutos y programas de capacitación técnica que alimentan a la industria.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Cultura y ciencia', text: 'Instituciones culturales con mucha historia, que quieren llegar a públicos nuevos.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Sistemas y sitios *funcionando hoy.*',
        ids: ['grupo-estrella', 'mexico-pacific', 'ciencia', 'fruit-academy'],
      },
      cities: {
        heading: 'De Detroit al norte: *qué le conviene a tu sitio en cada parte de Michigan.*',
        intro: 'Ford y General Motors siguen marcando el paso alrededor de Detroit, pero Grand Rapids vive de muebles de oficina y salud, y el norte, del turismo.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Detroit, Troy y Auburn Hills', tags: 'Automotriz · Ingeniería · Proveedores', need: 'Compradores e ingenieros de armadoras y proveedores grandes, que filtran por capacidad y certificación.', build: 'Procesos, tolerancias e IATF 16949 a la vista, con una solicitud de cotización que acepte planos.' },
          { name: 'Ann Arbor', tags: 'Software · Movilidad · Universidad', need: 'Empresas de tecnología cerca de la Universidad de Michigan, que compiten por clientes e ingenieros.', build: 'Un producto explicado sin jerga, demo a un clic y una sección de empleo con personalidad.' },
          { name: 'Grand Rapids', tags: 'Muebles de oficina · Salud · Alimentos', need: 'Fabricantes y empresas familiares que venden a todo el país a través de distribuidores.', build: 'Catálogo por línea, localizador de distribuidores y material que tu red pueda descargar.' },
          { name: 'Lansing y Flint', tags: 'Gobierno · Seguros · Manufactura', need: 'Proveedores del estado y fabricantes en plena renovación, con clientes que aún los recuerdan como eran.', build: 'Una imagen al día, capacidades claras y textos sobrios para compradores formales.' },
          { name: 'Traverse City y el norte', tags: 'Turismo · Lagos · Negocios de temporada', need: 'Visitantes que planean su verano en el lago desde el teléfono, a veces con meses de anticipación.', build: 'Reservas simples, fotos reales y fechas de temporada siempre al día.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas de Michigan *antes de empezar.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Michigan?', answer: 'Un sitio de pocas páginas y un catálogo con portal de proveedores son presupuestos muy distintos, así que primero vemos qué te hace falta. Tras la llamada gratis recibes un precio cerrado por escrito, con alcance y fechas.' },
          { question: '¿Hacen diseño web en Detroit, Grand Rapids y Ann Arbor?', answer: 'Sí, y en Troy, Auburn Hills, Lansing, Flint y Traverse City. Trabajamos en línea con todo Michigan.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Michigan?', answer: 'Sí, como talleres, proveedores de segundo y tercer nivel y negocios familiares. Con frecuencia basta un sitio corto que explique bien qué fabricas, para quién y con qué certificaciones. Sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Vamos una hora atrás de Michigan en invierno y dos en verano. Puedes ver al equipo más abajo en esta página.' },
          { question: '¿Pueden ayudarme a vender fuera del sector automotriz?', answer: 'Sí, desde el sitio. Traducimos lo que ya sabes hacer a lo que le importa a otros sectores, como aeroespacial, médico o energía, con una página para cada uno. Vender sigue siendo tu trabajo, pero así te encuentran y te entienden.' },
          { question: '¿Mi información técnica queda protegida si la subimos al sitio?', answer: 'Lo definimos juntos. Lo público va abierto para que ayude a vender; planos y documentos sensibles van en un área privada, con usuario y permisos. Firmamos confidencialidad desde el inicio si hace falta.' },
          { question: '¿Ofrecen SEO para fabricantes y proveedores en Michigan?', answer: 'Sí. El básico va incluido: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas por proceso, material o sector, o optimizar el sitio para buscadores con IA, eso es SEO avanzado y se cotiza aparte.' },
          ...commonFaq('es', 'copy', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué hace tu empresa en Michigan', titleAccent: 'y a qué nuevos clientes quieres llegar.' },
      linkLabel: 'Páginas web para empresas de Michigan',
      serviceName: 'Diseño web y portales para empresas de Michigan',
      howToDescription: 'Cómo pasa con Aurin una empresa de Michigan del primer mensaje a un sitio o catálogo publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Michigan | Fixed Price | Aurin',
        description: 'Websites and portals for Michigan companies, from Detroit to Grand Rapids, with basic or advanced SEO. A fixed price and the design first. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Michigan',
        titleAccent: 'for selling beyond your usual customer.',
        description: 'Websites, catalogs and portals for Michigan suppliers, manufacturers and companies, at a fixed price, with a team that talks straight.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'If half your sales ride on one customer, *your website has work to do.*',
        intro: 'Choose one piece or the full project; the team doesn’t change. We move faster with AI, with an expert reviewing everything, and the site already comes with basic SEO.',
        items: {
          'web-design': { text: 'For years your customer list and certifications were enough. To enter other sectors, someone who doesn’t know you has to understand what you do and why they can trust you with a critical part. We build that site.', tags: 'Industrial websites · New markets · Basic SEO' },
          'web-development': { text: 'Supplier portals, part lookup, order tracking and quality documents in one place. We connect it to your system to take calls and emails off your team’s plate.', tags: 'Supplier portals · Catalogs · Integrations' },
          'ux-ui-design': { text: 'The software your plant techs or field distributors use was made with the office in mind. We talk to the people who use it, see how it fits their day and redesign what slows them down, on small screens too.', tags: 'Usage research · Prototypes · Systems' },
          branding: { text: 'A company with decades of craft can look the same as it did twenty years ago. We renew your image without erasing what earned your reputation, and help you attract young engineers in a market fighting over them.', tags: 'Brand refresh · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the industry *that holds Michigan up.*',
        intro: 'Real Aurin clients in sectors close to the state’s. Open an industry for the details.',
        items: [
          { name: 'Logistics and construction', text: 'Ordering and tracking for companies moving materials between plants and suppliers.', clients: 'Grupo Estrella' },
          { name: 'Energy', text: 'Projects and plants that have to be explained to partners, authorities and communities.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Software development', text: 'Automotive and mobility software firms in Ann Arbor and Detroit, with a product that’s hard to explain.', clients: 'Ancient', page: 'software' },
          { name: 'Healthcare', text: 'Medical and home care alongside big hospital networks, with information that’s easy to find.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Platforms for institutes and technical training programs that feed the industry.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Culture and science', text: 'Cultural institutions with a long history, looking to reach new audiences.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Systems and sites *running today.*',
        ids: ['grupo-estrella', 'mexico-pacific', 'ciencia', 'fruit-academy'],
      },
      cities: {
        heading: 'From Detroit up north: *what your site needs across Michigan.*',
        intro: 'Ford and General Motors still set the pace around Detroit, but Grand Rapids lives on office furniture and healthcare, and the north on tourism.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Detroit, Troy and Auburn Hills', tags: 'Automotive · Engineering · Suppliers', need: 'Buyers and engineers at automakers and large suppliers, who filter by capability and certification.', build: 'Processes, tolerances and IATF 16949 in plain view, with a quote request that accepts drawings.' },
          { name: 'Ann Arbor', tags: 'Software · Mobility · University', need: 'Tech companies near the University of Michigan, competing for customers and engineers.', build: 'A product explained without jargon, a demo one click away and a careers section with personality.' },
          { name: 'Grand Rapids', tags: 'Office furniture · Healthcare · Food', need: 'Manufacturers and family firms selling nationwide through dealers.', build: 'A catalog by product line, a dealer locator and material your network can download.' },
          { name: 'Lansing and Flint', tags: 'Government · Insurance · Manufacturing', need: 'State vendors and manufacturers in the middle of a renewal, whose customers still remember them as they were.', build: 'An up-to-date image, clear capabilities and sober copy for formal buyers.' },
          { name: 'Traverse City and the north', tags: 'Tourism · Lakes · Seasonal business', need: 'Visitors planning their summer on the lake by phone, sometimes months ahead.', build: 'Simple booking, real photos and season dates that are always current.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from Michigan companies *before we begin.*',
        items: [
          { question: 'How much does a website cost in Michigan?', answer: 'A site with a few pages and a catalog with a supplier portal are very different budgets, so we first look at what you’re missing. After a free call you get a fixed price in writing, with scope and dates.' },
          { question: 'Do you do web design in Detroit, Grand Rapids and Ann Arbor?', answer: 'Yes, and in Troy, Auburn Hills, Lansing, Flint and Traverse City. We work online across Michigan.' },
          { question: 'Do you build websites for small businesses in Michigan?', answer: 'Yes, such as machine shops, tier 2 and tier 3 suppliers and family businesses. Often a short site that explains what you make, who for and with which certifications is enough. You know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We’re one hour behind Michigan in winter and two in summer. You can see the team further down this page.' },
          { question: 'Can you help me sell outside the auto industry?', answer: 'Yes, from the website side. We translate what you already know how to do into what matters to other sectors, like aerospace, medical or energy, with a page for each. Selling is still your job, but this way they find you and understand you.' },
          { question: 'Is my technical information protected if we put it on the site?', answer: 'We decide that together. Public material stays open so it helps you sell; drawings and sensitive documents go in a private area, with logins and permissions. We sign confidentiality agreements from the start if needed.' },
          { question: 'Do you offer SEO for manufacturers and suppliers in Michigan?', answer: 'Yes. The basics are included: titles, descriptions, speed and structured data. If you want pages by process, material or sector, or to optimize the site for AI search, that’s advanced SEO, quoted separately.' },
          ...commonFaq('en', 'copy', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us what your Michigan company does', titleAccent: 'and which new customers you want to reach.' },
      linkLabel: 'Websites for Michigan companies',
      serviceName: 'Web Design and Portals for Michigan Companies',
      howToDescription: 'How a Michigan company goes with Aurin from first message to a live site or catalog, with the design approved before the build.',
    },
  },
};
