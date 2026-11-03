import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Colorado: aeroespacial, marcas de exterior, tecnología en Boulder y turismo de montaña. Ángulo: empresas que venden a todo el país desde aquí. */
export const colorado: State = {
  id: 'colorado',
  status: 'live',
  publishAt: '2026-11-06T06:00:00-06:00',
  slug: 'colorado',
  name: 'Colorado',
  geo: { latitude: 39.0598, longitude: -105.3111 },
  areas: ['Denver', 'Aurora', 'Boulder', 'Colorado Springs', 'Fort Collins', 'Golden', 'Littleton', 'Grand Junction'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Colorado | Desde 1998 | Aurin',
        description: 'Diseño web y UX/UI para empresas de Colorado, de Denver a Colorado Springs, con SEO básico o avanzado. Ves el diseño antes de programar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Colorado',
        titleAccent: 'para empresas que venden mucho más allá de Denver.',
        description: 'Sitios, tiendas y plataformas para empresas de Colorado cuyo cliente está en todo el país, con precio cerrado y el diseño a la vista antes de programar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu cliente quizá nunca venga a Colorado: *tu sitio es lo primero que conoce de ti.*',
        intro: 'Contrata solo lo que te falta o todo junto, con un mismo equipo. La IA nos ayuda a avanzar más rápido, con un experto revisando cada parte, y el SEO básico ya viene en el sitio.',
        items: {
          'web-design': { text: 'Quien te compra desde Ohio o Texas no ha visto tu taller ni tu oficina. Hacemos un sitio que cuente quién eres, qué te distingue y cómo comprarte, con fotos reales y sin frases que podría decir cualquiera.', tags: 'Sitio de empresa · Landing pages · SEO básico' },
          'web-development': { text: 'Tiendas, distribuidores, reservas y cuentas de clientes conectados con lo que ya usas. Lo construimos para que tu equipo no tenga que copiar datos a mano de un sistema a otro.', tags: 'Tiendas en línea · Reservas · Conexiones' },
          'ux-ui-design': { text: 'Si tu producto ya tiene usuarios y aun así te llaman para preguntar cómo se usa, hay pasos que no se entienden. Vemos cuáles son, los rediseñamos y te mostramos un prototipo antes de programar.', tags: 'Revisión de uso · Prototipos · Apps' },
          branding: { text: 'En Colorado abundan las marcas con montañas en el logo. Partimos de lo que de verdad te hace distinto y lo convertimos en un nombre, un logo y un tono que tu equipo pueda usar igual en todas partes.', tags: 'Estrategia · Logo e identidad · Guía de marca' },
        },
      },
      sectors: {
        heading: 'Sectores que importan en Colorado, *con clientes nuestros.*',
        intro: 'Son clientes reales de Aurin en giros que aquí tienen peso. Entra a cada industria para ver qué incluye.',
        items: [
          { name: 'Desarrollo de software', text: 'Empresas de software en Denver y Boulder que le venden a equipos técnicos y necesitan explicarse sin jerga.', clients: 'Ancient', page: 'software' },
          { name: 'Energía', text: 'Proyectos de energía que tienen que explicarse a inversionistas, autoridades y comunidades.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Turismo y entretenimiento', text: 'Experiencias y eventos que se deciden desde el teléfono, con fechas y boletos fáciles de encontrar.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Salud', text: 'Clínicas y atención en casa, con servicios claros y citas fáciles de pedir.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Cursos y plataformas para aprender en línea, con pagos y avances en un solo lugar.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que necesitan explicar su causa y recibir donativos en pocos pasos.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Proyectos *que puedes visitar.*',
        ids: ['ancient', 'el-rollo', 'mexico-pacific', 'ingles-individual'],
      },
      cities: {
        heading: 'Del Front Range al oeste: *qué le conviene a tu sitio en cada parte de Colorado.*',
        intro: 'La mayor parte de la población vive al pie de las montañas, entre Fort Collins y Colorado Springs, pero cada ciudad de esa franja vive de algo distinto. Al otro lado de las Rocallosas, el negocio vuelve a cambiar.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Denver y Aurora', tags: 'Servicios · Salud · Construcción', need: 'Empresas que crecieron rápido y compradores que comparan tres proveedores antes de llamar.', build: 'Servicios claros, proyectos reales y una forma simple de pedir una cotización desde el celular.' },
          { name: 'Boulder', tags: 'Software · Exterior · Alimentos naturales', need: 'Marcas y startups con clientes exigentes en todo el país, que notan rápido un sitio descuidado.', build: 'Una historia propia, buenas fotos de producto y una compra o demo sin rodeos.' },
          { name: 'Colorado Springs', tags: 'Defensa · Aeroespacial · Ciberseguridad', need: 'Proveedores de bases militares y grandes contratistas, cuyos compradores revisan capacidades y certificaciones.', build: 'Capacidades y certificaciones a la vista, con textos sobrios y un contacto directo.' },
          { name: 'Golden, Littleton y el corredor sur', tags: 'Aeroespacial · Ingeniería · Manufactura', need: 'Ingenieros y áreas de compras que buscan un proveedor por lo que sabe hacer, no por su publicidad.', build: 'Fichas técnicas, procesos explicados y una solicitud de cotización que acepte planos.' },
          { name: 'Fort Collins', tags: 'Universidad · Cerveza artesanal · Tecnología', need: 'Empresas cerca de Colorado State University, que le venden a toda la región y compiten por talento joven.', build: 'Una marca con personalidad, una sección de empleo que dé ganas y compra o contacto simple.' },
          { name: 'Montañas y Western Slope', tags: 'Turismo · Exterior · Temporada', need: 'Visitantes que planean su viaje de esquí o de verano desde el teléfono, y negocios con pocos meses para vender.', build: 'Reservas simples, disponibilidad y temporadas al día, y fotos reales del lugar.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que preguntan las empresas de Colorado *antes de contratarnos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Colorado?', answer: 'No damos una cifra sin conocerte, porque una landing page y una tienda conectada con tu inventario no se parecen. Con una llamada gratis vemos qué necesitas y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en Denver, Boulder y Colorado Springs?', answer: 'Sí, y en Aurora, Fort Collins, Golden, Littleton y Grand Junction. Trabajamos en línea, así que no importa en qué parte de Colorado esté tu empresa.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Colorado?', answer: 'Sí. Muchas veces conviene empezar con un sitio corto que explique bien qué haces y agregar lo demás cuando el negocio lo pida. Te decimos qué dejar para después y sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. En verano tenemos la misma hora que Colorado y en invierno vamos una hora adelante, así que nos reunimos en tu horario. El equipo sale más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Colorado?', answer: 'Puede que sí. La Colorado Privacy Act está vigente desde julio de 2023 y depende de cuántos datos de consumidores del estado manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y las opciones de datos y cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden hacer una tienda en línea para mi marca?', answer: 'Sí, con tu catálogo, pagos y envíos, y conectada con las herramientas que ya usas si se puede. En la llamada revisamos qué plataforma te conviene y, si algo sencillo te basta, te lo decimos.' },
          { question: '¿Ofrecen SEO para empresas de Colorado?', answer: 'Sí. Cada sitio incluye el básico: títulos, descripciones, velocidad y datos estructurados. Más contenidos, páginas por ciudad o producto y la optimización para buscadores con IA son SEO avanzado y se cotizan aparte.' },
          ...commonFaq('es', 'redesign', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué vende tu empresa en Colorado', titleAccent: 'y a quién le quieres llegar.' },
      linkLabel: 'Páginas web para empresas de Colorado',
      serviceName: 'Diseño web y UX/UI para empresas de Colorado',
      howToDescription: 'Cómo pasa con Aurin una empresa de Colorado del primer mensaje a un sitio publicado, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Colorado | Since 1998 | Aurin',
        description: 'Web design and UX/UI for Colorado companies, from Denver to Colorado Springs, with basic or advanced SEO. See the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Colorado',
        titleAccent: 'for companies selling far beyond Denver.',
        description: 'Websites, stores and platforms for Colorado companies with customers across the country, at a fixed price, with the design in front of you before we build.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your customer may never come to Colorado: *your website is how they meet you.*',
        intro: 'Hire just what you’re missing or all of it, with one team. AI helps us move faster, with an expert reviewing every part, and basic SEO already comes with the site.',
        items: {
          'web-design': { text: 'A buyer in Ohio or Texas hasn’t seen your shop or your office. We build a site that says who you are, what sets you apart and how to buy, with real photos and none of the lines anyone could claim.', tags: 'Company websites · Landing pages · Basic SEO' },
          'web-development': { text: 'Stores, dealers, bookings and customer accounts connected to what you already use. We build it so your team doesn’t have to copy data by hand from one system to another.', tags: 'Online stores · Bookings · Integrations' },
          'ux-ui-design': { text: 'If your product has users and they still call to ask how it works, some steps aren’t landing. We find which ones, redesign them and show you a prototype before any code.', tags: 'Usage review · Prototypes · Apps' },
          branding: { text: 'Colorado has no shortage of brands with mountains in the logo. We start from what really sets you apart and turn it into a name, a logo and a voice your team can use the same way everywhere.', tags: 'Strategy · Logo and identity · Brand guidelines' },
        },
      },
      sectors: {
        heading: 'Sectors that matter in Colorado, *with clients of ours.*',
        intro: 'These are real Aurin clients in fields with weight here. Open an industry to see what’s included.',
        items: [
          { name: 'Software development', text: 'Software companies in Denver and Boulder selling to technical teams, who need to explain themselves without jargon.', clients: 'Ancient', page: 'software' },
          { name: 'Energy', text: 'Energy projects that have to be explained to investors, authorities and communities.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Tourism and entertainment', text: 'Experiences and events people decide on by phone, with dates and tickets that are easy to find.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Healthcare', text: 'Clinics and home care, with clear services and appointments that are easy to request.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Courses and platforms for learning online, with payments and progress in one place.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Organizations that need to explain their cause and take donations in a few steps.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Projects *you can visit.*',
        ids: ['ancient', 'el-rollo', 'mexico-pacific', 'ingles-individual'],
      },
      cities: {
        heading: 'From the Front Range to the west: *what your site needs across Colorado.*',
        intro: 'Most people live at the foot of the mountains, between Fort Collins and Colorado Springs, but each city along that strip lives on something different. Across the Rockies, the business changes again.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Denver and Aurora', tags: 'Services · Healthcare · Construction', need: 'Companies that grew fast and buyers who compare three vendors before calling.', build: 'Clear services, real projects and a simple way to request a quote by phone.' },
          { name: 'Boulder', tags: 'Software · Outdoor · Natural foods', need: 'Brands and startups with demanding customers nationwide, who quickly notice a careless website.', build: 'A story of your own, good product photos and a purchase or demo without detours.' },
          { name: 'Colorado Springs', tags: 'Defense · Aerospace · Cybersecurity', need: 'Suppliers to military bases and large contractors, whose buyers check capabilities and certifications.', build: 'Capabilities and certifications in plain view, with sober copy and a direct contact.' },
          { name: 'Golden, Littleton and the south corridor', tags: 'Aerospace · Engineering · Manufacturing', need: 'Engineers and purchasing teams looking for a supplier by what it can do, not by its advertising.', build: 'Spec sheets, processes explained and a quote request that accepts drawings.' },
          { name: 'Fort Collins', tags: 'University · Craft beer · Technology', need: 'Companies near Colorado State University, selling across the region and competing for young talent.', build: 'A brand with personality, a careers section worth reading and a simple purchase or contact.' },
          { name: 'Mountains and Western Slope', tags: 'Tourism · Outdoor · Seasonal', need: 'Visitors planning a ski or summer trip by phone, and businesses with only a few months to sell.', build: 'Simple booking, availability and seasons kept current, and real photos of the place.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What Colorado companies ask *before hiring us.*',
        items: [
          { question: 'How much does a website cost in Colorado?', answer: 'We don’t give a number before we know you, because a landing page and a store connected to your inventory have little in common. On a free call we work out what you need, then send a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Denver, Boulder and Colorado Springs?', answer: 'Yes, and in Aurora, Fort Collins, Golden, Littleton and Grand Junction. We work online, so it doesn’t matter where in Colorado your company is.' },
          { question: 'Do you build websites for small businesses in Colorado?', answer: 'Yes. It often makes sense to start with a short site that explains what you do well and add the rest when the business calls for it. We tell you what can wait, and you know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. In summer we share Colorado’s time and in winter we’re one hour ahead, so we meet during your hours. You can see the team further down this page.' },
          { question: 'Does my company need to comply with the Colorado privacy law?', answer: 'It might. The Colorado Privacy Act has been in force since July 2023 and depends on how much state consumer data you handle. If it does, we add the privacy notice your advisor defines, plus data and cookie options. Your advisor confirms whether it applies.' },
          { question: 'Can you build an online store for my brand?', answer: 'Yes, with your catalog, payments and shipping, connected to the tools you already use where possible. On the call we look at which platform suits you, and if something simple is enough, we’ll say so.' },
          { question: 'Do you offer SEO for Colorado companies?', answer: 'Yes. Every site includes the basics: titles, descriptions, speed and structured data. More content, pages by city or product and optimization for AI search are advanced SEO, quoted separately.' },
          ...commonFaq('en', 'redesign', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us what your Colorado company sells', titleAccent: 'and who you want to reach.' },
      linkLabel: 'Websites for Colorado companies',
      serviceName: 'Web Design and UX/UI for Colorado Companies',
      howToDescription: 'How a Colorado company goes with Aurin from first message to a live site, with the design approved before the build.',
    },
  },
};
