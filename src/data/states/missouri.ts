import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Missouri: St. Louis y Kansas City, dos economías en un estado; software de salud, agroindustria, cerveza y Branson. Ángulo: empresas familiares y regionales que compiten con nacionales. */
export const missouri: State = {
  id: 'missouri',
  status: 'live',
  publishAt: '2026-11-07T06:00:00-06:00',
  slug: 'missouri',
  name: 'Missouri',
  geo: { latitude: 38.4561, longitude: -92.2884 },
  areas: ['St. Louis', 'Kansas City', 'Springfield', 'Columbia', 'Independence', 'Lee’s Summit', 'Jefferson City', 'Branson'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Missouri | Desde 1998 | Aurin',
        description: 'Páginas web y UX/UI para empresas de Missouri, de St. Louis a Kansas City, con SEO básico o avanzado. Precio cerrado y ves el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Missouri',
        titleAccent: 'para competir con las marcas nacionales.',
        description: 'Sitios y plataformas para empresas familiares y regionales de Missouri que ya compiten con cadenas nacionales, con el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu reputación en la región es real. *En internet, un cliente nuevo todavía no la ve.*',
        intro: 'Hazlo por partes o completo, con el mismo equipo de principio a fin. La IA acelera el trabajo y un experto revisa cada entrega. El SEO básico viene incluido.',
        items: {
          'web-design': { text: 'Décadas de buen servicio no se notan en un sitio viejo. Hacemos que quien no te conoce vea tu experiencia, tus proyectos y a tu gente, junto a una forma simple de pedir una cotización.', tags: 'Sitio de empresa · Rediseño · SEO básico' },
          'web-development': { text: 'Cotizadores, pedidos para distribuidores, portales de clientes y conexiones con tu sistema. Sirve cuando tu equipo ya pasa demasiado tiempo pasando datos de un lado a otro.', tags: 'Portales · Cotizadores · Conexiones' },
          'ux-ui-design': { text: 'Kansas City tiene una industria fuerte de software para salud, donde la pantalla la usa alguien que atiende pacientes. Revisamos dónde se atora tu usuario y te enseñamos un prototipo antes de programar.', tags: 'Revisión de uso · Prototipos · Apps' },
          branding: { text: 'Si tu marca se hizo hace treinta años, quizá ya no diga lo que eres hoy. La renovamos sin perder lo que tus clientes reconocen, y queda lista para tu sitio, tus camiones y tus vacantes.', tags: 'Renovación de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Sectores importantes en Missouri, *con clientes nuestros.*',
        intro: 'Clientes reales de Aurin en giros que aquí pesan. Entra a cada industria para ver qué incluye.',
        items: [
          { name: 'Desarrollo de software', text: 'Empresas de software, sobre todo de salud alrededor de Kansas City, con un producto difícil de explicar.', clients: 'Ancient', page: 'software' },
          { name: 'Salud', text: 'Redes hospitalarias y atención en casa, con servicios fáciles de encontrar y citas sencillas.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logística y construcción', text: 'Pedidos y seguimiento para quienes mueven materiales y carga, en un estado cruzado por ríos y carreteras.', clients: 'Grupo Estrella' },
          { name: 'Fintech y finanzas', text: 'Productos financieros donde cada monto y cada paso tienen que entenderse antes de confirmar.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Turismo y entretenimiento', text: 'Branson y las grandes ciudades reciben visitantes que deciden desde el teléfono. Boletos y fechas a la mano.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Educación', text: 'Cursos y plataformas de capacitación, con inscripciones y pagos en línea.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
        ],
      },
      cases: {
        heading: 'Proyectos publicados, *para que juzgues tú.*',
        ids: ['ancient', 'grupo-estrella', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'De St. Louis a las Ozarks: *qué le conviene a tu sitio en cada parte de Missouri.*',
        intro: 'St. Louis y Kansas City están en los dos extremos del estado y casi no comparten clientes. En medio, Columbia vive de su universidad y el sur, de las Ozarks.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'St. Louis', tags: 'Salud · Agrociencia · Manufactura', need: 'Empresas con historia, proveedores de grandes corporativos y un sector de ciencia que crece.', build: 'Experiencia a la vista, proyectos reales y lo técnico explicado para quien decide.' },
          { name: 'Kansas City', tags: 'Software de salud · Ingeniería · Logística', need: 'Compradores de los dos lados de la frontera entre Missouri y Kansas, sobre todo empresas técnicas y de servicios.', build: 'Un mensaje claro, casos reales y una demo o contacto fácil de encontrar.' },
          { name: 'Springfield', tags: 'Comercio · Salud · Exterior', need: 'Negocios regionales que le venden a toda la zona de las Ozarks y a clientes de fuera.', build: 'Tiendas o catálogos claros, fotos reales y una compra simple desde el celular.' },
          { name: 'Columbia y Jefferson City', tags: 'Universidad · Gobierno · Salud', need: 'Proveedores del estado y de la universidad, con compradores formales.', build: 'Información ordenada, requisitos claros y textos sobrios que se puedan revisar en comité.' },
          { name: 'Branson y las Ozarks', tags: 'Turismo · Espectáculos · Lagos', need: 'Familias que comparan planes de vacaciones desde el teléfono, muchas veces de último momento.', build: 'Boletos y reservas en pocos pasos, disponibilidad al día y fotos reales.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que nos preguntan *en Missouri.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Missouri?', answer: 'Actualizar el sitio de una empresa y construir un cotizador conectado con tu sistema no cuestan lo mismo. Hablamos en una llamada gratis y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en St. Louis, Kansas City y Springfield?', answer: 'Sí, y en Columbia, Independence, Lee’s Summit, Jefferson City y Branson. Trabajamos en línea con todo Missouri.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Missouri?', answer: 'Sí, incluidos negocios familiares. Con frecuencia basta un sitio claro de pocas páginas para empezar. Te decimos qué conviene primero y sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. En invierno tenemos la misma hora que Missouri y en verano vamos una hora atrás, así que nos reunimos en tu horario. Puedes conocer al equipo más abajo en esta página.' },
          { question: 'Mi empresa está del lado de Kansas en Kansas City. ¿También trabajan conmigo?', answer: 'Sí. Trabajamos en línea, así que da igual de qué lado de la frontera estés. Si tus clientes están en los dos estados, lo tomamos en cuenta en los textos y en las páginas de tu sitio.' },
          { question: '¿Mi marca puede verse como una nacional sin perder lo local?', answer: 'Esa es la idea. Cuidamos la calidad de la imagen y los textos, y dejamos a la vista lo que una cadena no tiene: quién eres, cuánto llevas aquí y a quién atiendes. Tu equipo aprueba todo antes de publicar.' },
          { question: '¿Ofrecen SEO para empresas de Missouri?', answer: 'Sí. El básico viene incluido: títulos, descripciones, velocidad y datos estructurados. Para competir por búsquedas más disputadas, con contenidos, páginas por servicio y optimización para buscadores con IA, está el SEO avanzado, que se cotiza aparte.' },
          ...commonFaq('es', 'support', 'copy'),
        ],
      },
      cta: { titleLead: 'Cuéntanos cuánto lleva tu empresa en Missouri', titleAccent: 'y contra quién compites hoy.' },
      linkLabel: 'Páginas web para empresas de Missouri',
      serviceName: 'Diseño web y UX/UI para empresas de Missouri',
      howToDescription: 'Cómo pasa con Aurin una empresa de Missouri del primer mensaje a un sitio publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Missouri | Since 1998 | Aurin',
        description: 'Web design and UX/UI for Missouri companies, from St. Louis to Kansas City, with basic or advanced SEO. A fixed price and the design first. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Missouri',
        titleAccent: 'for competing with national brands.',
        description: 'Websites and platforms for Missouri family and regional companies already up against national chains, with a fixed price before any work begins.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your reputation in the region is real. *Online, a new customer can’t see it yet.*',
        intro: 'Do it in parts or all at once, with the same team from start to finish. AI speeds up the work and an expert reviews every delivery. Basic SEO comes included.',
        items: {
          'web-design': { text: 'Decades of good service don’t show on an old website. We make sure someone who doesn’t know you can see your experience, your projects and your people, next to a simple way to request a quote.', tags: 'Company websites · Redesigns · Basic SEO' },
          'web-development': { text: 'Quote tools, dealer ordering, customer portals and connections to your system. It helps when your team already spends too much time moving data from one place to another.', tags: 'Portals · Quote tools · Integrations' },
          'ux-ui-design': { text: 'Kansas City has a strong healthcare software industry, where the screen is used by someone caring for patients. We review where your users get stuck and show you a prototype before any code.', tags: 'Usage review · Prototypes · Apps' },
          branding: { text: 'If your brand was made thirty years ago, it may no longer say what you are today. We refresh it without losing what customers recognize, ready for your site, your trucks and your job postings.', tags: 'Brand refresh · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Important sectors in Missouri, *with clients of ours.*',
        intro: 'Real Aurin clients in fields that carry weight here. Open an industry to see what’s included.',
        items: [
          { name: 'Software development', text: 'Software companies, especially healthcare ones around Kansas City, with a product that’s hard to explain.', clients: 'Ancient', page: 'software' },
          { name: 'Healthcare', text: 'Hospital networks and home care, with services easy to find and simple appointments.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Logistics and construction', text: 'Ordering and tracking for companies moving materials and freight, in a state crossed by rivers and highways.', clients: 'Grupo Estrella' },
          { name: 'Fintech and finance', text: 'Financial products where every amount and step has to make sense before people confirm.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Tourism and entertainment', text: 'Branson and the big cities draw visitors who decide by phone. Tickets and dates at hand.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Education', text: 'Courses and training platforms, with enrollment and payments online.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
        ],
      },
      cases: {
        heading: 'Live projects, *so you can judge for yourself.*',
        ids: ['ancient', 'grupo-estrella', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'From St. Louis to the Ozarks: *what your site needs across Missouri.*',
        intro: 'St. Louis and Kansas City sit at opposite ends of the state and share few customers. In between, Columbia lives on its university and the south on the Ozarks.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'St. Louis', tags: 'Healthcare · Ag science · Manufacturing', need: 'Companies with history, suppliers to large corporations and a growing science sector.', build: 'Experience in view, real projects and technical work explained for the people deciding.' },
          { name: 'Kansas City', tags: 'Healthcare software · Engineering · Logistics', need: 'Buyers on both sides of the Missouri–Kansas line, especially technical and service companies.', build: 'A clear message, real case studies and a demo or contact that’s easy to find.' },
          { name: 'Springfield', tags: 'Retail · Healthcare · Outdoor', need: 'Regional businesses selling across the Ozarks and to customers from elsewhere.', build: 'Clear stores or catalogs, real photos and a simple purchase on a phone.' },
          { name: 'Columbia and Jefferson City', tags: 'University · Government · Healthcare', need: 'Vendors to the state and the university, with formal buyers.', build: 'Organized information, clear requirements and sober copy a committee can review.' },
          { name: 'Branson and the Ozarks', tags: 'Tourism · Shows · Lakes', need: 'Families comparing vacation plans by phone, often at the last minute.', build: 'Tickets and booking in a few steps, availability kept current and real photos.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What we get asked *in Missouri.*',
        items: [
          { question: 'How much does a website cost in Missouri?', answer: 'Updating a company website and building a quote tool connected to your system don’t cost the same. We talk on a free call and send you a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in St. Louis, Kansas City and Springfield?', answer: 'Yes, and in Columbia, Independence, Lee’s Summit, Jefferson City and Branson. We work online across Missouri.' },
          { question: 'Do you build websites for small businesses in Missouri?', answer: 'Yes, including family businesses. A clear site of a few pages is often enough to start. We tell you what comes first, and you know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. In winter we share Missouri’s time and in summer we’re one hour behind, so we meet during your hours. You can meet the team further down this page.' },
          { question: 'My company is on the Kansas side of Kansas City. Can you work with me too?', answer: 'Yes. We work online, so it doesn’t matter which side of the line you’re on. If your customers are in both states, we account for that in the copy and pages of your site.' },
          { question: 'Can my brand look national without losing what’s local?', answer: 'That’s the idea. We take care of the quality of the image and copy, and put in view what a chain doesn’t have: who you are, how long you’ve been here and who you serve. Your team approves everything before it goes live.' },
          { question: 'Do you offer SEO for Missouri companies?', answer: 'Yes. The basics are included: titles, descriptions, speed and structured data. To compete for tougher searches, with content, pages by service and optimization for AI search, there’s advanced SEO, quoted separately.' },
          ...commonFaq('en', 'support', 'copy'),
        ],
      },
      cta: { titleLead: 'Tell us how long your company has been in Missouri', titleAccent: 'and who you’re up against today.' },
      linkLabel: 'Websites for Missouri companies',
      serviceName: 'Web Design and UX/UI for Missouri Companies',
      howToDescription: 'How a Missouri company goes with Aurin from first message to a live site, with the design approved before the build.',
    },
  },
};
