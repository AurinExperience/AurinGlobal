import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Indiana: manufactura, Eli Lilly y ciencias de la vida en Indianápolis, vehículos recreativos en Elkhart, Purdue. Ángulo: conseguir personal además de clientes. */
export const indiana: State = {
  id: 'indiana',
  status: 'live',
  publishAt: '2026-11-07T06:00:00-06:00',
  slug: 'indiana',
  name: 'Indiana',
  geo: { latitude: 39.8494, longitude: -86.2583 },
  areas: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Elkhart', 'Carmel', 'West Lafayette', 'Columbus'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Indiana | Precio cerrado | Aurin',
        description: 'Páginas web y portales para empresas de Indiana, de Indianápolis a Fort Wayne, con SEO básico o avanzado. Precio cerrado y el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Indiana',
        titleAccent: 'para que te encuentren clientes y también gente que contratar.',
        description: 'Sitios y portales para fabricantes y empresas de Indiana, con lo que un comprador y un candidato quieren saber, y el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu sitio lo leen dos personas: *quien te compra y quien quiere trabajar contigo.*',
        intro: 'Empieza por lo que más te hace falta o haz todo con un solo equipo. La IA agiliza el trabajo, un experto revisa cada parte y el SEO básico ya está incluido.',
        items: {
          'web-design': { text: 'El comprador busca capacidades y certificaciones; el candidato, cómo es trabajar contigo y cuánto puede crecer. Armamos un sitio con un camino claro para cada uno, con fotos reales de tu planta y de tu gente.', tags: 'Sitio industrial · Empleo · SEO básico' },
          'web-development': { text: 'Portales para distribuidores, consulta de refacciones, solicitudes de empleo y conexiones con tu sistema. Lo pensamos para que tu gente pase menos tiempo contestando lo mismo por teléfono.', tags: 'Portales · Catálogos · Conexiones' },
          'ux-ui-design': { text: 'El sistema con el que operan tus distribuidores o tu personal se fue llenando de pantallas con los años. Vemos con quienes lo usan qué los frena y te mostramos un prototipo antes de programar.', tags: 'Revisión de uso · Prototipos · Sistemas' },
          branding: { text: 'Muchas empresas con buen producto se ven anticuadas a los ojos de quien acaba de salir de Purdue o de Notre Dame. Renovamos tu imagen conservando lo que te dio tu reputación.', tags: 'Renovación de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Giros que mueven a Indiana, *donde tenemos experiencia.*',
        intro: 'Son clientes reales de Aurin en sectores relevantes aquí. Abre cada industria para ver el detalle.',
        items: [
          { name: 'Salud', text: 'Hospitales, consultorios y atención en casa, con servicios fáciles de encontrar y citas sencillas.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logística y construcción', text: 'En un estado cruzado por tantas carreteras interestatales, pedidos y seguimiento para quienes mueven materiales.', clients: 'Grupo Estrella' },
          { name: 'Energía', text: 'Proyectos que tienen que explicarse a socios, autoridades y comunidades.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Desarrollo de software', text: 'Empresas de software en Indianápolis, con un producto que tiene que entenderse rápido.', clients: 'Ancient', page: 'software' },
          { name: 'Educación', text: 'Plataformas para cursos y capacitación técnica, con inscripciones y pagos en línea.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Cultura y ciencia', text: 'Instituciones que quieren llegar a públicos nuevos y vender desde su propio sitio.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Proyectos reales *que ya funcionan.*',
        ids: ['mexico-pacific', 'grupo-estrella', 'fruit-academy', 'ancient'],
      },
      cities: {
        heading: 'De Indianápolis a Elkhart: *qué le conviene a tu sitio en cada parte de Indiana.*',
        intro: 'Eli Lilly tiene su sede en Indianápolis, Cummins en Columbus, y Elkhart concentra buena parte de la industria de vehículos recreativos del país. El comprador cambia mucho según la región.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Indianápolis y Carmel', tags: 'Ciencias de la vida · Software · Seguros', need: 'Empresas de ciencia, tecnología y servicios con clientes en todo el país, que compiten por talento.', build: 'Un mensaje preciso, casos reales y una sección de empleo a la altura de quien buscas.' },
          { name: 'Fort Wayne', tags: 'Manufactura · Defensa · Salud', need: 'Fabricantes y proveedores que buscan clientes fuera de la región.', build: 'Capacidades y certificaciones a la vista, con una solicitud de cotización que acepte planos.' },
          { name: 'Elkhart y South Bend', tags: 'Vehículos recreativos · Manufactura · Universidad', need: 'Fabricantes y proveedores que venden a través de distribuidores en todo el país.', build: 'Catálogo por línea, localizador de distribuidores y material que tu red pueda descargar.' },
          { name: 'Columbus y el sur', tags: 'Motores · Ingeniería · Manufactura', need: 'Proveedores y empresas de ingeniería, con compradores que revisan todo antes de escribirte.', build: 'Procesos explicados con detalle, fichas técnicas y un contacto que llegue a la persona correcta.' },
          { name: 'West Lafayette', tags: 'Universidad · Tecnología · Agroindustria', need: 'Empresas que nacen cerca de Purdue y buscan clientes, inversión y personal.', build: 'Tu tecnología explicada sin jerga, con una sección clara para inversionistas y candidatos.' },
          { name: 'Evansville', tags: 'Salud · Manufactura · Logística', need: 'Empresas de la zona donde se juntan Indiana, Kentucky e Illinois, con clientes en los tres estados.', build: 'Zonas de servicio claras, información fácil de encontrar y contacto simple desde el teléfono.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas de Indiana *antes de escribirnos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Indiana?', answer: 'Un sitio de empresa con página de empleo y un portal para distribuidores son presupuestos diferentes. Por eso primero vemos qué necesitas en una llamada gratis, y luego recibes un precio cerrado por escrito, con alcance y fechas.' },
          { question: '¿Hacen diseño web en Indianápolis, Fort Wayne y Elkhart?', answer: 'Sí, y en Evansville, South Bend, Carmel, West Lafayette y Columbus. Trabajamos en línea con todo Indiana.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Indiana?', answer: 'Sí, como talleres, proveedores y negocios familiares. Muchas veces alcanza con un sitio corto que explique qué haces y una página clara de vacantes. Sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Con casi todo Indiana vamos una hora atrás en invierno y dos en verano; con los condados en hora del centro, como Evansville, la misma en invierno y una atrás en verano. Nos reunimos en tu horario.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Indiana?', answer: 'Puede que sí. La Indiana Consumer Data Protection Act está vigente desde enero de 2026 y alcanza a quien trata datos de 100,000 consumidores del estado, o de 25,000 si más de la mitad de sus ingresos viene de venderlos. Si te aplica, integramos el aviso que defina tu asesor y las opciones de datos. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden ayudarnos a que se postule más gente?', answer: 'Podemos hacer que tu sitio cuente bien cómo es trabajar contigo y que postularse desde el celular sea fácil, también conectado con tu sistema de vacantes si tienes uno. Que lleguen más candidatos depende también del sueldo, la zona y el mercado, así que no prometemos un número.' },
          { question: '¿Ofrecen SEO para fabricantes en Indiana?', answer: 'Sí. El básico viene incluido: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas por proceso o producto, o que el sitio esté optimizado para buscadores con IA, es SEO avanzado y se cotiza aparte.' },
          ...commonFaq('es', 'time', 'payment'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué fabrica o hace tu empresa en Indiana', titleAccent: 'y a quién necesitas convencer.' },
      linkLabel: 'Páginas web para empresas de Indiana',
      serviceName: 'Diseño web y portales para empresas de Indiana',
      howToDescription: 'Cómo pasa con Aurin una empresa de Indiana del primer mensaje a un sitio publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Indiana | Fixed Price | Aurin',
        description: 'Websites and portals for Indiana companies, from Indianapolis to Fort Wayne, with basic or advanced SEO. A fixed price and the design first. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Indiana',
        titleAccent: 'for reaching customers and the people you want to hire.',
        description: 'Websites and portals for Indiana manufacturers and companies, with what buyers and candidates want to know, at a fixed price before any work begins.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Two people read your website: *the one buying and the one who wants to work with you.*',
        intro: 'Start with what you’re missing most or do it all with one team. AI speeds up the work, an expert reviews every part and basic SEO is already included.',
        items: {
          'web-design': { text: 'Buyers look for capabilities and certifications; candidates, for what it’s like to work with you and how far they can grow. We build a site with a clear path for each, with real photos of your plant and your people.', tags: 'Industrial websites · Careers · Basic SEO' },
          'web-development': { text: 'Dealer portals, parts lookup, job applications and connections to your system. We plan it so your people spend less time answering the same thing by phone.', tags: 'Portals · Catalogs · Integrations' },
          'ux-ui-design': { text: 'The system your dealers or staff run on has filled up with screens over the years. We see with the people using it what slows them down and show you a prototype before any code.', tags: 'Usage review · Prototypes · Systems' },
          branding: { text: 'Plenty of companies with a good product look dated to someone just out of Purdue or Notre Dame. We refresh your image and keep what earned your reputation.', tags: 'Brand refresh · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Fields that move Indiana, *where we have experience.*',
        intro: 'These are real Aurin clients in sectors relevant here. Open an industry for the details.',
        items: [
          { name: 'Healthcare', text: 'Hospitals, practices and home care, with services easy to find and simple appointments.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logistics and construction', text: 'In a state crossed by so many interstates, ordering and tracking for companies moving materials.', clients: 'Grupo Estrella' },
          { name: 'Energy', text: 'Projects that have to be explained to partners, authorities and communities.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Software development', text: 'Software companies in Indianapolis, with a product that has to make sense quickly.', clients: 'Ancient', page: 'software' },
          { name: 'Education', text: 'Platforms for courses and technical training, with enrollment and payments online.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Culture and science', text: 'Institutions looking to reach new audiences and sell from their own site.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Real projects *already at work.*',
        ids: ['mexico-pacific', 'grupo-estrella', 'fruit-academy', 'ancient'],
      },
      cities: {
        heading: 'From Indianapolis to Elkhart: *what your site needs across Indiana.*',
        intro: 'Eli Lilly is based in Indianapolis, Cummins in Columbus, and Elkhart holds much of the country’s RV industry. The buyer changes a lot by region.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Indianapolis and Carmel', tags: 'Life sciences · Software · Insurance', need: 'Science, tech and service companies with customers nationwide, competing for talent.', build: 'A precise message, real case studies and a careers section worthy of who you’re after.' },
          { name: 'Fort Wayne', tags: 'Manufacturing · Defense · Healthcare', need: 'Manufacturers and suppliers looking for customers outside the region.', build: 'Capabilities and certifications in view, with a quote request that accepts drawings.' },
          { name: 'Elkhart and South Bend', tags: 'RVs · Manufacturing · University', need: 'Manufacturers and suppliers selling through dealers across the country.', build: 'A catalog by product line, a dealer locator and material your network can download.' },
          { name: 'Columbus and the south', tags: 'Engines · Engineering · Manufacturing', need: 'Suppliers and engineering firms, with buyers who check everything before writing.', build: 'Processes explained in detail, spec sheets and a contact that reaches the right person.' },
          { name: 'West Lafayette', tags: 'University · Technology · Agribusiness', need: 'Companies starting near Purdue, looking for customers, funding and staff.', build: 'Your technology explained without jargon, with a clear section for investors and candidates.' },
          { name: 'Evansville', tags: 'Healthcare · Manufacturing · Logistics', need: 'Companies where Indiana, Kentucky and Illinois meet, with customers in all three states.', build: 'Clear service areas, information that’s easy to find and simple contact by phone.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from Indiana companies *before they write to us.*',
        items: [
          { question: 'How much does a website cost in Indiana?', answer: 'A company website with a careers page and a dealer portal are different budgets. So we first see what you need on a free call, and then you get a fixed price in writing, with scope and dates.' },
          { question: 'Do you do web design in Indianapolis, Fort Wayne and Elkhart?', answer: 'Yes, and in Evansville, South Bend, Carmel, West Lafayette and Columbus. We work online across Indiana.' },
          { question: 'Do you build websites for small businesses in Indiana?', answer: 'Yes, such as machine shops, suppliers and family businesses. A short site explaining what you do and a clear jobs page is often enough. You know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. With most of Indiana we’re one hour behind in winter and two in summer; with Central Time counties like Evansville, the same in winter and one behind in summer. We meet during your hours.' },
          { question: 'Does my company need to comply with the Indiana privacy law?', answer: 'It might. The Indiana Consumer Data Protection Act has been in force since January 2026 and reaches those processing data on 100,000 state consumers, or 25,000 if over half their revenue comes from selling it. If it does, we add the notice your advisor defines, plus data options. Your advisor confirms whether it applies.' },
          { question: 'Can you help us get more applicants?', answer: 'We can make your site tell the story of working with you and make applying by phone easy, connected to your hiring system if you have one. How many candidates arrive also depends on pay, location and the market, so we don’t promise a number.' },
          { question: 'Do you offer SEO for Indiana manufacturers?', answer: 'Yes. The basics are included: titles, descriptions, speed and structured data. If you want pages by process or product, or a site optimized for AI search, that’s advanced SEO, quoted separately.' },
          ...commonFaq('en', 'time', 'payment'),
        ],
      },
      cta: { titleLead: 'Tell us what your Indiana company makes or does', titleAccent: 'and who you need to convince.' },
      linkLabel: 'Websites for Indiana companies',
      serviceName: 'Web Design and Portals for Indiana Companies',
      howToDescription: 'How an Indiana company goes with Aurin from first message to a live site, with the design approved before the build.',
    },
  },
};
