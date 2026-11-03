import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Utah: Silicon Slopes, marcas que venden directo, Hill Air Force Base y turismo de parques. Ángulo: software y marcas que crecen rápido y necesitan verse a la altura. */
export const utah: State = {
  id: 'utah',
  status: 'live',
  publishAt: '2026-11-07T06:00:00-06:00',
  slug: 'utah',
  name: 'Utah',
  geo: { latitude: 39.321, longitude: -111.0937 },
  areas: ['Salt Lake City', 'Lehi', 'Provo', 'Orem', 'Ogden', 'Park City', 'St. George', 'Sandy'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Utah | Precio cerrado | Aurin',
        description: 'Diseño web y UX/UI para empresas de Utah, de Salt Lake City a Lehi, con SEO básico o avanzado. Ves el diseño antes de programar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Utah',
        titleAccent: 'para empresas que crecieron más rápido que su producto.',
        description: 'Sitios, tiendas y diseño de producto para empresas de software y marcas de Utah, con un prototipo que puedes probar antes de programar y el precio cerrado.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Vendiste rápido, sumaste funciones y un día *tu producto ya no se entiende.*',
        intro: 'Toma lo que te urge o todo a la vez, con un mismo equipo. La IA nos ayuda a avanzar más rápido, un experto revisa cada parte y el SEO básico ya está incluido.',
        items: {
          'web-design': { text: 'Tu sitio se hizo cuando tenías un solo producto y un solo tipo de cliente. Lo reordenamos para lo que vendes hoy, con un mensaje claro y un camino simple hacia la demo o la compra.', tags: 'Sitio de producto · Landing pages · SEO básico' },
          'web-development': { text: 'Tiendas, cuentas de clientes, paneles y conexiones con tu CRM y tus pagos. Podemos construirlo completo o una parte, y dejar el código y los accesos a tu equipo.', tags: 'Tiendas en línea · Paneles · Conexiones' },
          'ux-ui-design': { text: 'Cada función que se sumó para cerrar una venta dejó otra pantalla. Revisamos qué usan de verdad tus clientes, rediseñamos lo que confunde y te entregamos un prototipo y un sistema de diseño para tu equipo.', tags: 'Revisión de producto · Prototipos · Sistema de diseño' },
          branding: { text: 'Utah tiene muchas marcas jóvenes que venden directo y se parecen entre sí. Partimos de lo que de verdad te hace distinto y lo volvemos nombre, logo y tono, para tu sitio, tu producto y tus redes.', tags: 'Estrategia · Logo e identidad · Guía de marca' },
        },
      },
      sectors: {
        heading: 'Sectores con fuerza en Utah, *donde tenemos experiencia.*',
        intro: 'Clientes reales de Aurin en giros importantes aquí. Abre cada uno para ver qué hacemos.',
        items: [
          { name: 'Desarrollo de software', text: 'De Salt Lake City a Provo hay mucha empresa de software que le vende a otras empresas y necesita explicarse rápido.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech y finanzas', text: 'Productos financieros donde cada monto, comisión y paso tienen que entenderse antes de confirmar.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Turismo y entretenimiento', text: 'Montañas, parques nacionales y eventos, con viajes que se planean desde el teléfono.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Salud', text: 'Atención médica y en casa, con servicios fáciles de encontrar y citas sencillas.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Cursos y plataformas para aprender en línea, con pagos y avances en un solo lugar.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que necesitan explicar su causa y recibir donativos en pocos pasos.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Producto y sitios *publicados.*',
        ids: ['ancient', 'fruit-academy', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'De Lehi a St. George: *qué le conviene a tu sitio en cada parte de Utah.*',
        intro: 'Adobe, Qualtrics y Domo tienen fuerte presencia en la zona conocida como Silicon Slopes, entre Salt Lake City y Provo. Más al norte manda la industria aeroespacial, y al sur, los visitantes.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Lehi, Provo y Orem', tags: 'Software · Marcas directas · Startups', need: 'Compradores técnicos y de negocio, que comparan tu producto con varios más antes de pedir una demo.', build: 'Un mensaje preciso, un sitio rápido, precios y demo fáciles de encontrar.' },
          { name: 'Salt Lake City y Sandy', tags: 'Finanzas · Salud · Servicios', need: 'Empresas de servicios y bancos especializados, con clientes en todo el país.', build: 'Información clara y sobria, seguridad y datos a la vista y un contacto directo.' },
          { name: 'Ogden', tags: 'Aeroespacial · Defensa · Exterior', need: 'Proveedores de Hill Air Force Base y marcas de equipo para la montaña.', build: 'Capacidades y certificaciones para quien compra, y tienda o catálogo para quien usa tu producto.' },
          { name: 'Park City', tags: 'Turismo · Esquí · Eventos', need: 'Visitantes de todo el país que reservan desde el teléfono, con meses de temporada muy marcados.', build: 'Reservas simples, fotos reales y disponibilidad al día.' },
          { name: 'St. George y el sur', tags: 'Parques nacionales · Construcción · Salud', need: 'Viajeros rumbo a los parques y una zona que crece rápido, con mucha gente que acaba de mudarse.', build: 'Servicios y zonas claras, con reservas o contacto a un toque desde el celular.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas de Utah, *antes de la primera llamada.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Utah?', answer: 'Una landing page, una tienda y el rediseño de un producto no se cotizan igual. En una llamada gratis vemos qué necesitas y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en Salt Lake City, Lehi y Provo?', answer: 'Sí, y en Orem, Ogden, Park City, Sandy y St. George. Trabajamos en línea con todo Utah.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Utah?', answer: 'Sí, y para startups que apenas lanzan. Empezamos por lo que más urge y dejamos lo demás para cuando el negocio lo pida. Sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. En verano tenemos la misma hora que Utah y en invierno vamos una hora adelante, así que nos reunimos en tu horario. Puedes ver al equipo más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Utah?', answer: 'Puede que sí. La Utah Consumer Privacy Act está vigente desde el 31 de diciembre de 2023 y depende de tus ingresos y de cuántos datos de consumidores del estado manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y las opciones de datos. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden trabajar junto con nuestro equipo de producto?', answer: 'Sí. Entregamos prototipos, componentes y especificaciones, y resolvemos dudas durante la construcción. Si tu equipo prefiere que programemos una parte, también lo hacemos y le dejamos el código y los accesos.' },
          { question: '¿Ofrecen SEO para empresas de software en Utah?', answer: 'Sí. El básico va incluido: títulos, descripciones, velocidad y datos estructurados. Contenidos por problema que resuelves, comparativas y optimización para buscadores con IA son SEO avanzado y se cotizan aparte.' },
          ...commonFaq('es', 'time', 'redesign'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué vende tu empresa en Utah', titleAccent: 'y qué parte ya no se entiende.' },
      linkLabel: 'Páginas web para empresas de Utah',
      serviceName: 'Diseño web y UX/UI para empresas de Utah',
      howToDescription: 'Cómo pasa con Aurin una empresa de Utah del primer mensaje a un sitio o producto publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Utah | Fixed Price | Aurin',
        description: 'Web design and UX/UI for Utah companies, from Salt Lake City to Lehi, with basic or advanced SEO. See the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Utah',
        titleAccent: 'for companies that grew faster than their product.',
        description: 'Websites, stores and product design for Utah software companies and brands, with a prototype you can try before any code and a fixed price.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'You sold fast, added features and one day *your product stopped making sense.*',
        intro: 'Take what’s urgent or all of it at once, with one team. AI helps us move faster, an expert reviews every part and basic SEO is already included.',
        items: {
          'web-design': { text: 'Your site was made when you had one product and one kind of customer. We reorganize it around what you sell today, with a clear message and a simple path to a demo or purchase.', tags: 'Product websites · Landing pages · Basic SEO' },
          'web-development': { text: 'Stores, customer accounts, dashboards and connections to your CRM and payments. We can build all of it or one piece, and leave the code and logins with your team.', tags: 'Online stores · Dashboards · Integrations' },
          'ux-ui-design': { text: 'Every feature added to close a deal left another screen behind. We review what your customers really use, redesign what confuses them and hand your team a prototype and a design system.', tags: 'Product review · Prototypes · Design systems' },
          branding: { text: 'Utah has plenty of young direct-to-consumer brands that look alike. We start from what really sets you apart and turn it into a name, a logo and a voice for your site, your product and your social media.', tags: 'Strategy · Logo and identity · Brand guidelines' },
        },
      },
      sectors: {
        heading: 'Sectors with momentum in Utah, *where we have experience.*',
        intro: 'Real Aurin clients in fields important here. Open one to see what we do.',
        items: [
          { name: 'Software development', text: 'From Salt Lake City to Provo there are many software companies selling to other businesses, who need to explain themselves quickly.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech and finance', text: 'Financial products where every amount, fee and step has to make sense before people confirm.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Tourism and entertainment', text: 'Mountains, national parks and events, with trips planned by phone.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Healthcare', text: 'Medical and home care, with services easy to find and simple appointments.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Courses and platforms for learning online, with payments and progress in one place.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Organizations that need to explain their cause and take donations in a few steps.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Product and websites, *live.*',
        ids: ['ancient', 'fruit-academy', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'From Lehi to St. George: *what your site needs across Utah.*',
        intro: 'Adobe, Qualtrics and Domo have a strong presence in the area known as Silicon Slopes, between Salt Lake City and Provo. Further north aerospace leads, and in the south, visitors.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Lehi, Provo and Orem', tags: 'Software · Direct brands · Startups', need: 'Technical and business buyers, who compare your product with several others before asking for a demo.', build: 'A precise message, a fast site, and pricing and demo that are easy to find.' },
          { name: 'Salt Lake City and Sandy', tags: 'Finance · Healthcare · Services', need: 'Service companies and specialized banks, with customers across the country.', build: 'Clear, sober information, security and data in view and a direct contact.' },
          { name: 'Ogden', tags: 'Aerospace · Defense · Outdoor', need: 'Suppliers to Hill Air Force Base and mountain gear brands.', build: 'Capabilities and certifications for buyers, and a store or catalog for those using your product.' },
          { name: 'Park City', tags: 'Tourism · Skiing · Events', need: 'Visitors from across the country booking by phone, with very defined season months.', build: 'Simple booking, real photos and availability kept current.' },
          { name: 'St. George and the south', tags: 'National parks · Construction · Healthcare', need: 'Travelers heading to the parks and a fast-growing area full of recent arrivals.', build: 'Clear services and areas, with booking or contact one tap away on a phone.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from Utah companies, *before the first call.*',
        items: [
          { question: 'How much does a website cost in Utah?', answer: 'A landing page, a store and a product redesign aren’t quoted the same way. On a free call we see what you need and send a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Salt Lake City, Lehi and Provo?', answer: 'Yes, and in Orem, Ogden, Park City, Sandy and St. George. We work online across Utah.' },
          { question: 'Do you build websites for small businesses in Utah?', answer: 'Yes, and for startups just launching. We start with what’s most urgent and leave the rest until the business calls for it. You know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. In summer we share Utah’s time and in winter we’re one hour ahead, so we meet during your hours. You can see the team further down this page.' },
          { question: 'Does my company need to comply with the Utah privacy law?', answer: 'It might. The Utah Consumer Privacy Act has been in force since December 31, 2023 and depends on your revenue and how much state consumer data you handle. If it does, we add the privacy notice your advisor defines, plus data options. Your advisor confirms whether it applies.' },
          { question: 'Can you work alongside our product team?', answer: 'Yes. We deliver prototypes, components and specs, and answer questions during the build. If your team would rather have us build one piece, we do that too and leave them the code and logins.' },
          { question: 'Do you offer SEO for software companies in Utah?', answer: 'Yes. The basics are included: titles, descriptions, speed and structured data. Content by problem you solve, comparison pages and optimization for AI search are advanced SEO, quoted separately.' },
          ...commonFaq('en', 'time', 'redesign'),
        ],
      },
      cta: { titleLead: 'Tell us what your Utah company sells', titleAccent: 'and which part no longer makes sense.' },
      linkLabel: 'Websites for Utah companies',
      serviceName: 'Web Design and UX/UI for Utah Companies',
      howToDescription: 'How a Utah company goes with Aurin from first message to a live site or product, with the design approved before the build.',
    },
  },
};
