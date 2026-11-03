import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Tennessee: empresas de salud en Nashville, logística en Memphis, música y turismo, manufactura en Chattanooga. Ángulo: empresas que crecieron y su sitio se quedó atrás. */
export const tennessee: State = {
  id: 'tennessee',
  status: 'live',
  publishAt: '2026-11-06T06:00:00-06:00',
  slug: 'tennessee',
  name: 'Tennessee',
  geo: { latitude: 35.8605, longitude: -86.3505 },
  areas: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Franklin', 'Murfreesboro', 'Clarksville', 'Oak Ridge'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Tennessee | Precio cerrado | Aurin',
        description: 'Páginas web y portales para empresas de Tennessee, de Nashville a Memphis, con SEO básico o avanzado. Ves el diseño antes y precio cerrado. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Tennessee',
        titleAccent: 'para empresas que ya crecieron más que su sitio.',
        description: 'Sitios y portales para empresas de Tennessee que ya no caben en la página que hicieron al empezar, con precio cerrado y el diseño a la vista antes de programar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu empresa cambió en cinco años. *Tu sitio sigue contando la historia de antes.*',
        intro: 'Toma el servicio que necesites o todos; el equipo es el mismo. Con IA avanzamos más rápido, y un experto revisa cada parte. El SEO básico ya viene con el sitio.',
        items: {
          'web-design': { text: 'Abriste otra sede, sumaste servicios o ya le vendes a clientes más grandes, y tu página sigue igual. La rehacemos con lo que ofreces hoy, cuidando lo que ya te trae visitas.', tags: 'Rediseño · Sitio de empresa · SEO básico' },
          'web-development': { text: 'Portales de clientes, citas, pedidos y seguimiento conectados con tus sistemas. Lo programamos para que lo que hoy se resuelve por teléfono o correo también se pueda hacer en línea.', tags: 'Portales · Citas y pedidos · Conexiones' },
          'ux-ui-design': { text: 'Si le vendes software a hospitales o a empresas de logística, quien lo usa tiene prisa y poca capacitación. Revisamos dónde se atora y te enseñamos un prototipo antes de programar.', tags: 'Revisión de uso · Prototipos · Plataformas' },
          branding: { text: 'Una marca hecha para una sola oficina se queda chica con varias sedes. La ordenamos para que se vea igual en tu sitio, tus sucursales y tus vacantes.', tags: 'Renovación de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Giros fuertes en Tennessee, *con clientes nuestros.*',
        intro: 'Clientes reales de Aurin en sectores que aquí tienen peso. Abre cada industria para ver qué hacemos.',
        items: [
          { name: 'Salud', text: 'Nashville es sede de grandes empresas de hospitales y de muchas otras alrededor. Servicios claros y citas fáciles de pedir.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logística y construcción', text: 'Pedidos y seguimiento para quienes mueven carga y materiales, en el estado donde FedEx tiene su sede.', clients: 'Grupo Estrella' },
          { name: 'Turismo y entretenimiento', text: 'Música y visitantes todo el año, con boletos y fechas fáciles de encontrar en el celular.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Cultura y ciencia', text: 'Instituciones que quieren vender sus temporadas y llegar a públicos nuevos.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Desarrollo de software', text: 'Empresas de software para salud y logística, con un producto que tiene que entenderse rápido.', clients: 'Ancient', page: 'software' },
          { name: 'Educación', text: 'Cursos y plataformas para capacitar, con inscripciones y pagos en línea.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
        ],
      },
      cases: {
        heading: 'Sitios y plataformas *que ya están en línea.*',
        ids: ['grupo-estrella', 'el-rollo', 'fruit-academy', 'ancient'],
      },
      cities: {
        heading: 'De Memphis a Knoxville: *qué le conviene a tu sitio en cada parte de Tennessee.*',
        intro: 'Tennessee se recorre en tres mitades con economías distintas, y hasta con dos husos horarios: Nashville y Memphis van en hora del centro, Knoxville y Chattanooga en la del este.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Nashville y Franklin', tags: 'Salud · Música · Servicios', need: 'Empresas de salud y sus proveedores, y compañías que llegaron hace poco y compiten por clientes y talento.', build: 'Un mensaje claro para cada tipo de comprador, casos reales y una sección de empleo cuidada.' },
          { name: 'Memphis', tags: 'Logística · Dispositivos médicos · Agroindustria', need: 'Empresas de almacén, carga y distribución cuyos clientes quieren saber dónde va su pedido.', build: 'Cobertura y capacidades a la vista, cotización sencilla y seguimiento en línea si lo necesitas.' },
          { name: 'Knoxville y Oak Ridge', tags: 'Investigación · Energía · Universidad', need: 'Empresas técnicas cerca del laboratorio de Oak Ridge y de la Universidad de Tennessee.', build: 'Lo técnico explicado por niveles, con credenciales ordenadas y un contacto directo.' },
          { name: 'Chattanooga', tags: 'Manufactura · Automotriz · Tecnología', need: 'Proveedores de la cadena automotriz y empresas de tecnología que eligieron quedarse en una ciudad chica.', build: 'Capacidades y certificaciones claras, con una solicitud de cotización que acepte archivos.' },
          { name: 'Murfreesboro y Clarksville', tags: 'Servicios · Manufactura · Base militar', need: 'Negocios de ciudades que crecen rápido, con clientes que los buscan desde el teléfono.', build: 'Zonas y servicios claros, fotos reales y un contacto a un toque.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Antes de empezar, *lo que suelen preguntar en Tennessee.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Tennessee?', answer: 'Rehacer un sitio informativo y construir un portal conectado con tu sistema tienen presupuestos muy distintos. Primero hablamos en una llamada gratis, y después recibes un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en Nashville, Memphis y Knoxville?', answer: 'Sí, y en Chattanooga, Franklin, Murfreesboro, Clarksville y Oak Ridge. Trabajamos en línea con todo Tennessee.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Tennessee?', answer: 'Sí. Empezamos con lo que más urge para conseguir clientes y dejamos el sitio listo para crecer contigo. El precio queda claro antes de que decidas.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Con Nashville y Memphis tenemos la misma hora en invierno y vamos una atrás en verano; con Knoxville y Chattanooga, una atrás en invierno y dos en verano. Nos reunimos en tu horario, y el equipo sale más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Tennessee?', answer: 'Puede que sí. La Tennessee Information Protection Act está vigente desde julio de 2025 y depende de tus ingresos y de cuántos datos de consumidores del estado manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y el control de cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden hacer un sitio con una página por sede?', answer: 'Sí. Cada sede puede tener su dirección, sus servicios, su equipo y su forma de contacto, con un sistema que tu gente puede actualizar sin programar. Para que no sean páginas repetidas, cada una necesita información propia que definimos contigo.' },
          { question: '¿Ofrecen SEO para empresas de Tennessee?', answer: 'Sí, el básico va incluido: títulos, descripciones, velocidad y datos estructurados. Las páginas por ciudad o servicio, los contenidos y la optimización para buscadores con IA son SEO avanzado y se cotizan aparte.' },
          ...commonFaq('es', 'time', 'copy'),
        ],
      },
      cta: { titleLead: 'Cuéntanos cómo ha cambiado tu empresa en Tennessee', titleAccent: 'y qué ya no dice tu sitio.' },
      linkLabel: 'Páginas web para empresas de Tennessee',
      serviceName: 'Diseño web y portales para empresas de Tennessee',
      howToDescription: 'Cómo pasa con Aurin una empresa de Tennessee del primer mensaje a un sitio publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Tennessee | Fixed Price | Aurin',
        description: 'Websites and portals for Tennessee companies, from Nashville to Memphis, with basic or advanced SEO. See the design first, at a fixed price. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Tennessee',
        titleAccent: 'for companies that have outgrown their website.',
        description: 'Websites and portals for Tennessee companies that no longer fit the site they launched with, at a fixed price, with the design in front of you before we build.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your company has changed in five years. *Your website still tells the old story.*',
        intro: 'Take the service you need or all of them; the team is the same. AI helps us move faster, and an expert reviews every part. Basic SEO already comes with the site.',
        items: {
          'web-design': { text: 'You opened another location, added services or now sell to bigger customers, and your site hasn’t moved. We rebuild it around what you offer today, looking after what already brings you traffic.', tags: 'Redesigns · Company websites · Basic SEO' },
          'web-development': { text: 'Customer portals, appointments, orders and tracking connected to your systems. We build it so what gets handled by phone or email today can also be done online.', tags: 'Portals · Appointments and orders · Integrations' },
          'ux-ui-design': { text: 'If you sell software to hospitals or logistics companies, the person using it is in a hurry with little training. We review where they get stuck and show you a prototype before any code.', tags: 'Usage review · Prototypes · Platforms' },
          branding: { text: 'A brand made for one office gets tight with several locations. We sort it out so it looks the same on your site, your branches and your job postings.', tags: 'Brand refresh · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Strong fields in Tennessee, *with clients of ours.*',
        intro: 'Real Aurin clients in sectors with weight here. Open an industry to see what we do.',
        items: [
          { name: 'Healthcare', text: 'Nashville is home to large hospital companies and many more around them. Clear services and appointments that are easy to request.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logistics and construction', text: 'Ordering and tracking for companies moving freight and materials, in the state FedEx calls home.', clients: 'Grupo Estrella' },
          { name: 'Tourism and entertainment', text: 'Music and visitors all year, with tickets and dates easy to find on a phone.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Culture and science', text: 'Institutions looking to sell their seasons and reach new audiences.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Software development', text: 'Software companies for healthcare and logistics, with a product that has to make sense quickly.', clients: 'Ancient', page: 'software' },
          { name: 'Education', text: 'Courses and training platforms, with enrollment and payments online.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
        ],
      },
      cases: {
        heading: 'Websites and platforms *already online.*',
        ids: ['grupo-estrella', 'el-rollo', 'fruit-academy', 'ancient'],
      },
      cities: {
        heading: 'From Memphis to Knoxville: *what your site needs across Tennessee.*',
        intro: 'Tennessee runs in three parts with different economies, and even two time zones: Nashville and Memphis are on Central time, Knoxville and Chattanooga on Eastern.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Nashville and Franklin', tags: 'Healthcare · Music · Services', need: 'Healthcare companies and their vendors, and recent arrivals competing for customers and talent.', build: 'A clear message for each type of buyer, real case studies and a careful careers section.' },
          { name: 'Memphis', tags: 'Logistics · Medical devices · Agribusiness', need: 'Warehousing, freight and distribution companies whose customers want to know where their order is.', build: 'Coverage and capabilities in view, simple quotes and online tracking if you need it.' },
          { name: 'Knoxville and Oak Ridge', tags: 'Research · Energy · University', need: 'Technical companies near the Oak Ridge lab and the University of Tennessee.', build: 'Technical work explained in layers, with organized credentials and a direct contact.' },
          { name: 'Chattanooga', tags: 'Manufacturing · Automotive · Technology', need: 'Automotive suppliers and tech companies that chose to stay in a smaller city.', build: 'Clear capabilities and certifications, with a quote request that accepts files.' },
          { name: 'Murfreesboro and Clarksville', tags: 'Services · Manufacturing · Military base', need: 'Businesses in fast-growing cities, with customers finding them by phone.', build: 'Clear areas and services, real photos and a contact one tap away.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Before we start, *what Tennessee companies usually ask.*',
        items: [
          { question: 'How much does a website cost in Tennessee?', answer: 'Rebuilding an informational site and building a portal connected to your system are very different budgets. We talk first on a free call, and then you get a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Nashville, Memphis and Knoxville?', answer: 'Yes, and in Chattanooga, Franklin, Murfreesboro, Clarksville and Oak Ridge. We work online across Tennessee.' },
          { question: 'Do you build websites for small businesses in Tennessee?', answer: 'Yes. We start with what matters most for winning customers and leave the site ready to grow with you. The price is clear before you decide.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We share Nashville and Memphis’s time in winter and are one hour behind in summer; with Knoxville and Chattanooga, one behind in winter and two in summer. We meet during your hours, and you can see the team further down this page.' },
          { question: 'Does my company need to comply with the Tennessee privacy law?', answer: 'It might. The Tennessee Information Protection Act has been in force since July 2025 and depends on your revenue and how much state consumer data you handle. If it does, we add the privacy notice your advisor defines, plus cookie controls. Your advisor confirms whether it applies.' },
          { question: 'Can you build a site with a page for each location?', answer: 'Yes. Each location can have its address, services, team and contact, with a system your people can update without code. So they aren’t repeated pages, each one needs information of its own, which we define with you.' },
          { question: 'Do you offer SEO for Tennessee companies?', answer: 'Yes, the basics are included: titles, descriptions, speed and structured data. Pages by city or service, content and optimization for AI search are advanced SEO, quoted separately.' },
          ...commonFaq('en', 'time', 'copy'),
        ],
      },
      cta: { titleLead: 'Tell us how your Tennessee company has changed', titleAccent: 'and what your website no longer says.' },
      linkLabel: 'Websites for Tennessee companies',
      serviceName: 'Web Design and Portals for Tennessee Companies',
      howToDescription: 'How a Tennessee company goes with Aurin from first message to a live site, with the design approved before the build.',
    },
  },
};
