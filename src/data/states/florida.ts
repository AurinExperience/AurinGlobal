import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Florida: turismo, bienes raíces, comercio con América Latina y mucha competencia en temporada. El español pesa de verdad. */
export const florida: State = {
  id: 'florida',
  status: 'live',
  slug: 'florida',
  name: 'Florida',
  geo: { latitude: 27.6648, longitude: -81.5158 },
  areas: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Orlando', 'Tampa', 'St. Petersburg', 'Jacksonville', 'Pensacola'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Florida | Sitios bilingües | Aurin',
        description: 'Páginas web, SEO y branding para empresas de Florida, de Miami a Jacksonville. En inglés y en español, con precio cerrado. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Florida',
        titleAccent: 'para vender todo el año, no solo en temporada.',
        description: 'Sitios y marcas en inglés y en español para empresas de Florida, con un solo equipo y el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Para empresas en Florida que compiten por *la misma búsqueda cada temporada.*',
        intro: 'Elige lo que te urge o contrátalo junto, con el mismo equipo. Todo lleva SEO desde el inicio y usamos IA para avanzar más rápido, con un experto al frente.',
        items: {
          'web-design': { text: 'Quien te visita viene de otro estado o de otro país y te compara desde el celular, a veces desde el hotel. Hacemos un sitio que resuelve en una pantalla qué ofreces, dónde estás y cómo reservar o escribirte.', tags: 'Sitio de empresa · Sitio bilingüe · SEO' },
          'web-development': { text: 'Reservas por teléfono, disponibilidad en una hoja de cálculo, cobros que se confirman a mano: en temporada alta eso se desborda. Lo pasamos a reservas, pagos y un panel para tu equipo.', tags: 'Reservas · Pagos · Paneles internos' },
          'ux-ui-design': { text: 'Si tu app o tu plataforma atiende a viajeros, compradores o clientes en América Latina, cada idioma y cada país trae dudas distintas. Vemos dónde se traba cada grupo y lo arreglamos antes de sumar funciones.', tags: 'Investigación · Prototipos · Varios idiomas' },
          branding: { text: 'En Florida hay cientos de negocios con sol y palmeras en el logo. Te ayudamos a encontrar lo que solo tú puedes decir y a volverlo una marca que se recuerda después de volver a casa.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores *que mueven a Florida.*',
        intro: 'Son clientes reales de Aurin en giros que aquí pesan mucho. Entra a cada industria para ver qué incluye.',
        items: [
          { name: 'Turismo y entretenimiento', text: 'Boletos, horarios y mapas que se entienden en el teléfono, porque la decisión muchas veces se toma ya en el viaje.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Bienes raíces', text: 'Desarrollos con planos, avance y planes de pago claros para quien compra desde otro estado o país sin haber pisado el lugar.', clients: 'Gein', page: 'real-estate' },
          { name: 'Fintech y remesas', text: 'Pagos y envíos que dan confianza a la primera, con Miami como puerta natural hacia América Latina.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Salud', text: 'Servicios de atención en casa y consultorios con cobertura, horarios y contacto a la vista, para pacientes y también para sus hijos que buscan por ellos.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Escuelas e institutos que reciben alumnos de muchos países, con inscripción, pagos y clases en un solo sistema.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que necesitan contar su causa con claridad y facilitar la donación a quien las conoció de visita.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Proyectos publicados que *puedes revisar hoy.*',
        ids: ['el-rollo', 'ancient', 'ingles-individual', 'fruit-academy'],
      },
      cities: {
        heading: 'Florida son varios mercados: *esto cambia en cada uno.*',
        intro: 'Solo en el área de Miami, unos 2.5 millones de personas hablan español en casa (Censo de EE. UU., ACS 2019–2023). Unas horas al norte, tu cliente puede ser otro por completo.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Miami y el sur de Florida', tags: 'Comercio · Finanzas · Bienes raíces', need: 'Empresas y compradores de América Latina y de todo EE. UU., acostumbrados a comparar en dos idiomas y a esperar un sitio con nivel internacional.', build: 'Dos versiones con textos propios, una imagen a la altura de Miami y formularios que lleguen a quien atiende cada idioma.' },
          { name: 'Orlando', tags: 'Turismo · Convenciones · Simulación', need: 'Visitantes con fechas fijas y organizadores de eventos que comparan opciones con prisa, además de empresas de tecnología y simulación.', build: 'Reservas y disponibilidad sin vueltas, información práctica de la visita y páginas separadas para quien viene por negocio.' },
          { name: 'Tampa Bay', tags: 'Salud · Finanzas · Servicios', need: 'Empresas de servicios financieros y de salud cuyos clientes quieren saber, antes de llamar, si eres serio y a quién atiendes.', build: 'Servicios explicados sin jerga, equipo real con nombre y foto, y un camino corto para pedir una cita o cotización.' },
          { name: 'Jacksonville', tags: 'Logística · Puerto · Banca', need: 'Áreas de compras de empresas de transporte, distribución y servicios financieros, que revisan capacidad antes de pedir precio.', build: 'Capacidades, cobertura y sectores a la vista, una solicitud de cotización simple y, si conviene, un portal para clientes.' },
          { name: 'Panhandle', tags: 'Defensa · Turismo · Construcción', need: 'Proveedores de las bases militares y negocios de playa con clientes muy distintos, en un mercado más chico donde el boca a boca sigue pesando.', build: 'Un sitio directo que confirme la recomendación: qué haces, dónde trabajas y quién te avala. Y ojo: esta zona va en otro horario que el resto del estado.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Dudas que escuchamos de *empresas de Florida.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Florida?', answer: 'Lo que más mueve el precio es lo que el sitio debe hacer: una página informativa no cuesta lo mismo que una con reservas, pagos y dos idiomas. Después de una llamada gratis te mandamos un precio cerrado por escrito, con lo que incluye y las fechas, y ese es el que pagas.' },
          { question: '¿Dónde está su equipo si no están en Florida?', answer: 'En Cuernavaca, México, desde 1998. Trabajamos en línea con empresas de Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville y el resto del estado. Más abajo en esta página conoces al equipo y a los fundadores, y es el mismo de principio a fin.' },
          { question: '¿Por qué hacer mi sitio en inglés y en español?', answer: 'Porque en buena parte de Florida tu cliente se mueve entre los dos idiomas: solo en el área de Miami, unos 2.5 millones de personas hablan español en casa (ACS 2019–2023). Escribimos cada versión aparte, sin traducir palabra por palabra, y configuramos el sitio para que Google muestre la correcta.' },
          { question: '¿Puedo avisar rápido en mi sitio si viene un huracán?', answer: 'Sí, y conviene dejarlo previsto desde el diseño: un aviso que se activa en minutos, sin programador, para cambios de horario, cierres o reservas. Así tus clientes no tienen que llamar justo cuando estás ocupado protegiendo el negocio.' },
          { question: '¿Me aplica la ley de privacidad de Florida?', answer: 'A la mayoría de las empresas no: la Florida Digital Bill of Rights, vigente desde julio de 2024, apunta sobre todo a compañías de más de mil millones de dólares de ingresos. Aun así, si vendes a otros estados te pueden aplicar sus leyes, así que dejamos formularios sobrios, aviso de privacidad y control de cookies. Lo confirma tu asesor.' },
          { question: '¿En qué horario nos reunimos?', answer: 'Dentro de tu jornada. Vamos una hora atrás de Miami en invierno y dos en verano, y coincidimos con el Panhandle en invierno, porque esa zona usa la hora del centro.' },
          { question: '¿Ofrecen SEO para salir en Google en cada ciudad de Florida?', answer: 'Sí. Si atiendes varias zonas, hacemos páginas con contenido real de cada una, no el mismo texto con otro nombre, y te ayudamos con tu perfil de Google Business. Nadie serio te promete el primer lugar: depende de tu competencia y toma tiempo.' },
          { question: '¿Hacen diseño web en Miami, Orlando y Tampa?', answer: 'Sí, y también en Fort Lauderdale y Jacksonville. Trabajamos en línea, con videollamadas y prototipos que abres desde cualquier dispositivo, así que atendemos igual a una empresa de Brickell que a una del norte del estado.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Florida?', answer: 'Sí, sobre todo negocios de servicios, turismo y salud que dependen de que los encuentren en el teléfono. Empezamos con lo que más clientes puede traerte y lo dejamos listo para crecer, con el precio claro desde el principio.' },
          ...commonFaq('es', 'time', 'support'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué vendes en Florida', titleAccent: 'y vemos qué le falta a tu sitio.' },
      linkLabel: 'Páginas web en Florida',
      serviceName: 'Diseño web y branding para empresas de Florida',
      howToDescription: 'Los pasos para que una empresa de Florida tenga su sitio con Aurin: mensaje, propuesta por escrito, diseño aprobado y publicación.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Florida | Since 1998 | Aurin',
        description: 'Web design, SEO and branding for Florida companies, from Miami to Jacksonville. One senior team, a fixed price and the design before the build. Free call.',
      },
      hero: {
        titleLead: 'Web design agency in Florida',
        titleAccent: 'for selling all year, not just in season.',
        description: 'Websites and brands for Florida companies, from one senior team, with a fixed price before any work begins.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'For Florida companies chasing *the same search every season.*',
        intro: 'Pick what’s urgent or hire us for it all, with one team. Everything comes with SEO from the start, and we use AI to move faster, with an expert in charge.',
        items: {
          'web-design': { text: 'Your visitors come from out of state or abroad and size you up on a phone, sometimes from a hotel room. We build a site that answers what you offer, where you are and how to book or reach you on a single screen.', tags: 'Company websites · Booking pages · SEO' },
          'web-development': { text: 'Phone reservations, availability in a spreadsheet, payments confirmed by hand: peak season breaks all of that. We move it to online booking, payments and a dashboard your staff can run.', tags: 'Bookings · Payments · Staff dashboards' },
          'ux-ui-design': { text: 'If your app serves travelers, buyers or clients across Latin America, every market brings different questions. We find where each group stalls and fix it before you fund more features.', tags: 'Research · Prototypes · Multi-market' },
          branding: { text: 'Florida has no shortage of logos with suns and palm trees. We help you find what only you can say and turn it into a brand people still remember once they’re back home.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the sectors *driving Florida.*',
        intro: 'These are real Aurin clients in fields that matter here. Open an industry to see what we’d build.',
        items: [
          { name: 'Tourism and entertainment', text: 'Tickets, hours and maps that make sense on a phone, because the decision often gets made mid-trip.', clients: 'El Rollo', page: 'tourism' },
          { name: 'Real estate', text: 'Developments with floor plans, progress and payment plans laid out for buyers purchasing from out of state, sight unseen.', clients: 'Gein', page: 'real-estate' },
          { name: 'Fintech and remittances', text: 'Payments and transfers that earn trust on the first screen, with Miami as the natural gateway to Latin America.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Healthcare', text: 'Home care and practices with coverage, hours and contact details in plain view, for patients and for the adult children searching on their behalf.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Schools and institutes with students from many countries, with enrollment, tuition and classes in one system.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Organizations that need to explain their cause clearly and make giving easy for people who met them on a visit.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Published projects *you can check out today.*',
        ids: ['el-rollo', 'ancient', 'ingles-individual', 'fruit-academy'],
      },
      cities: {
        heading: 'Florida is several markets: *here’s what shifts in each.*',
        intro: 'A buyer in Miami, a family planning an Orlando trip and a Jacksonville freight manager want very different things from the same search. Your site should know which one it’s talking to.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Miami and South Florida', tags: 'Trade · Finance · Real estate', need: 'Companies and buyers from across the US and Latin America who compare internationally and expect a site with real polish.', build: 'A look that holds up in Miami, clear pages for each type of client, and forms that reach the right person the first time.' },
          { name: 'Orlando', tags: 'Tourism · Conventions · Simulation', need: 'Visitors with fixed dates and event planners comparing in a hurry, plus the region’s technology and simulation companies.', build: 'Booking and availability with no runaround, practical visit details, and separate pages for people coming on business.' },
          { name: 'Tampa Bay', tags: 'Healthcare · Finance · Services', need: 'Financial and healthcare firms whose clients want to know, before calling, whether you’re serious and who you serve.', build: 'Services explained without jargon, a real team with names and photos, and a short path to an appointment or quote.' },
          { name: 'Jacksonville', tags: 'Logistics · Port · Banking', need: 'Purchasing teams at freight, distribution and financial firms who check your capacity before they ever ask for a price.', build: 'Capabilities, coverage and sectors up front, a simple quote request and, when it pays off, a client portal.' },
          { name: 'The Panhandle', tags: 'Defense · Tourism · Construction', need: 'Suppliers to the military bases and beach businesses with very different customers, in a smaller market where word of mouth still counts.', build: 'A direct site that backs up the referral: what you do, where you work and who vouches for you. Note this area runs on a different clock from the rest of the state.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What we hear from *Florida companies.*',
        items: [
          { question: 'How much does a website cost in Florida?', answer: 'The biggest factor is what the site has to do: an informational site and one with bookings and payments are different projects. After a free call, we send you a fixed price in writing, with what’s included and the dates, and that’s what you pay.' },
          { question: 'Where is your team if you’re not in Florida?', answer: 'In Cuernavaca, Mexico, since 1998. We work online with companies in Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville and the rest of the state. You can meet the team and the founders further down this page, and it’s the same people from start to finish.' },
          { question: 'Can I post a quick notice on my site when a hurricane is coming?', answer: 'Yes, and it’s worth planning from the design stage: a notice you can switch on in minutes, with no developer, for closures, new hours or booking changes. Customers get answers without calling while you’re busy protecting the business.' },
          { question: 'Does the Florida privacy law apply to me?', answer: 'For most companies, no: the Florida Digital Bill of Rights, in force since July 2024, mainly targets companies with over a billion dollars in revenue. If you sell into other states their laws may still apply, so we set up modest forms, a privacy notice and cookie controls. Your advisor confirms the rest.' },
          { question: 'What hours can we meet?', answer: 'During your workday. We’re one hour behind Miami in winter and two in summer, and we match the Panhandle in winter, since that area runs on Central Time.' },
          { question: 'Do you offer SEO to rank in different Florida cities?', answer: 'Yes. If you serve several areas, we build pages with real content for each one, not the same text with a new name, and help with your Google Business Profile. No honest agency promises the top spot: it depends on your competition and takes time.' },
          { question: 'Should my Florida site have a Spanish version?', answer: 'Often, yes, if your customers would use it: in the Miami area alone, about 2.5 million people speak Spanish at home (ACS 2019–2023). We write it as its own copy and set it up so Google shows each visitor the right version.' },
          { question: 'Do you do web design in Miami, Orlando and Tampa?', answer: 'Yes, and in Fort Lauderdale and Jacksonville too. We work online, with video calls and prototypes you can open on any device, so a company in Brickell and one in North Florida get the same service.' },
          { question: 'Do you build websites for small businesses in Florida?', answer: 'Yes, especially service, tourism and healthcare businesses that depend on being found by phone. We start with what can bring in the most customers and leave it ready to grow, with a clear price from the beginning.' },
          ...commonFaq('en', 'time', 'support'),
        ],
      },
      cta: { titleLead: 'Tell us what you sell in Florida', titleAccent: 'and we’ll show you what your site is missing.' },
      linkLabel: 'Florida web design',
      serviceName: 'Web Design and Branding for Florida Companies',
      howToDescription: 'The steps for a Florida company to get its site with Aurin: a message, a written proposal, an approved design and launch.',
    },
  },
};
