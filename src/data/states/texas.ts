import type { State } from './types';

/**
 * Texas — plantilla de las landings por estado (diseño exportado de Claude
 * Design, ver diseno-original/texas). Para un estado nuevo: copiar este archivo,
 * reescribir TODO el copy (no solo cambiar el nombre) y agregarlo en index.ts.
 */
export const texas: State = {
  id: 'texas',
  status: 'draft',
  slug: 'texas',
  name: 'Texas',
  geo: { latitude: 31.9686, longitude: -99.9018 },
  // Las mismas ciudades que las filas de `cities` (schema areaServed)
  areas: ['Houston', 'Dallas', 'Fort Worth', 'Austin', 'San Antonio', 'El Paso', 'McAllen', 'Edinburg', 'Brownsville'],
  copy: {
    es: {
      seo: {
        // Sin Houston, Dallas ni San Antonio: esas búsquedas son de las páginas de ciudad de aurin.mx (CLAUDE.md)
        title: 'Diseño de páginas web en Texas | Sitios bilingües | Aurin',
        description:
          'Diseño de páginas web, SEO, UX/UI y branding para empresas en todo Texas. Equipo bilingüe en tu horario desde 1998, con precio claro. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Texas',
        titleAccent: 'que venden en inglés y en español.',
        description:
          'Sitios, productos y marcas para empresas de todo Texas, con un equipo bilingüe en tu horario y precio claro desde el inicio.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Páginas web, sistemas y marca para empresas en Texas: *empieza por lo que hoy te frena.*',
        intro: 'Se contrata por separado o junto, con el mismo equipo. Todo lleva SEO desde el inicio y usamos IA para avanzar más rápido, siempre con un experto al frente de tu proyecto.',
        items: {
          'web-design': { text: 'Tu sitio ya no está al nivel de tu empresa y pierdes contra competidores más chicos que se ven mejor. Lo rehacemos para que en segundos se entienda qué haces, por qué confiar en ti y cómo contactarte, también desde el celular.', tags: 'Sitio de empresa · Rediseño · SEO' },
          'web-development': { text: 'Tu equipo sigue capturando pedidos a mano, cotizando por correo o pasando datos entre sistemas que no se hablan. Construimos lo que falta: portales para clientes, pagos, reservas y conexiones con lo que ya usas.', tags: 'Portales · Pagos y reservas · Conexiones' },
          'ux-ui-design': { text: 'Tienes una app o una plataforma y la gente se atora, llama a soporte o la abandona a medio camino. Vemos dónde se pierde y rediseñamos esas pantallas antes de que programes otra función.', tags: 'Investigación · Prototipos · Apps y plataformas' },
          branding: { text: 'Creciste, compraste otra empresa o cambiaste de giro, y tu marca sigue contando la historia de hace diez años. Definimos qué te hace distinto y lo volvemos logo, tono y guía para que te elijan antes de comparar precios.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los sectores que *más pesan en Texas.*',
        intro: 'Los nombres son clientes reales de Aurin. Entra a cada industria para ver qué incluye.',
        items: [
          { name: 'Energía', text: 'Inversionistas, socios y comunidades se forman una opinión de tu proyecto antes de la primera reunión. Sitios que explican alcance, permisos y avance sin esconderlos en un PDF.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Salud', text: 'Quien busca atención decide en minutos si llama o sigue buscando. Marcas y sitios en inglés y en español, con servicios, cobertura y forma de contacto a la vista.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech y remesas', text: 'Nadie le deja su dinero a una pantalla confusa. Flujos de pago, envío y crédito que se entienden a la primera, algo clave con tanto comercio entre Texas y México.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Logística y construcción', text: 'Cotizar por teléfono y llevar pedidos en hojas de cálculo frena a quien ya vende bien. Plataformas de pedidos y seguimiento para materiales, distribución y obra.', clients: 'Grupo Estrella' },
          { name: 'Educación', text: 'Alumnos, clases, pagos y sucursales en un solo lugar, en vez de cinco herramientas sueltas. Plataformas de aprendizaje y sistemas que de verdad se usan.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Turismo y entretenimiento', text: 'Si comprar el boleto cuesta trabajo, la visita se pierde. Sitios con venta en línea, mapas y todo lo que hay que saber antes de llegar.', clients: 'El Rollo', page: 'tourism' },
        ],
      },
      cases: {
        heading: 'Sitios y plataformas *que ya están en línea.*',
        ids: ['mexico-pacific', 'ancient', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'Qué necesita tu sitio *según la región de Texas.*',
        intro: 'Texas es el estado con más sedes de empresas Fortune 500 (57 en la lista de 2026), pero no se le vende igual a un corporativo que a un distribuidor en la frontera. Esto cambia según dónde estén tus clientes.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Houston', tags: 'Energía · Salud · Puerto', need: 'Ingenieros, áreas de compras y socios de proyecto en energía, además del gran mercado de salud alrededor del Texas Medical Center. Revisan tu experiencia y tus certificaciones antes de escribirte.', build: 'Fichas de proyecto y capacidades fáciles de encontrar, documentos descargables en orden y un formulario que llegue directo a la persona indicada.' },
          { name: 'Dallas–Fort Worth', tags: 'Corporativos · Finanzas · Bienes raíces', need: 'Directivos y equipos de compras de empresas grandes, muchas con sede en la región. Comparan a varios proveedores a la vez y descartan rápido al que se ve chico o no muestra pruebas.', build: 'Casos, sectores y forma de trabajo bien explicados, una página por línea de negocio y, si hace falta, un portal para clientes o sucursales.' },
          { name: 'Austin', tags: 'Software · Startups · Educación', need: 'Gente que prueba tu producto antes de hablar con ventas. Si no entiende la primera pantalla, se va a la siguiente pestaña.', build: 'Diseño UX/UI del producto, un registro y unos primeros pasos sin tropiezos, y un sitio que diga para quién es y qué le resuelve.' },
          { name: 'San Antonio', tags: 'Defensa · Ciberseguridad · Turismo', need: 'Contratistas de gobierno y empresas de ciberseguridad alrededor de las bases militares, junto con salud y turismo. Quien los contrata pide seriedad y capacidades demostrables.', build: 'Capacidades a la vista, textos sin jerga y un sitio rápido y accesible. En turismo, compra y reservas que funcionen bien desde el celular.' },
          { name: 'El Paso', tags: 'Manufactura · Transporte · Comercio', need: 'Plantas y transportistas que trabajan de los dos lados de la frontera con Ciudad Juárez. Quien compra quiere saber rápido qué produces, dónde y con cuánta capacidad.', build: 'Capacidades, plantas y rutas claras, una solicitud de cotización sin vueltas y el sitio en el idioma de quien decide la compra.' },
          { name: 'Valle del Río Grande', tags: 'Salud · Educación · Comercio', need: 'McAllen, Edinburg y Brownsville: hospitales, universidades y comercio con México, con familias que buscan en los dos idiomas.', build: 'Textos propios en inglés y en español, nada de traducción automática, y la configuración para que Google le muestre a cada quien su versión.' },
        ],
      },
      process: {
        heading: 'Así avanza tu proyecto, *del primer mensaje al sitio publicado.*',
        steps: [
          { name: 'Nos cuentas de tu negocio', text: 'Por mensaje o en una llamada gratis: qué vendes, a quién y qué te está frenando. Si vemos que no somos lo que necesitas, te lo decimos ahí mismo.', gets: 'Una idea clara de por dónde empezar.' },
          { name: 'Te mandamos la propuesta', text: 'Qué incluye, cuánto cuesta y cuándo se entrega. La revisas con tu equipo sin presión y decides con todo a la vista.', gets: 'Precio y fechas antes de comprometerte.' },
          { name: 'Apruebas el diseño', text: 'Recorres un prototipo de las páginas clave, en videollamada o cuando te quede bien, y nos pides los cambios que hagan falta.', gets: 'Tu sitio para probarlo antes de programarlo.' },
          { name: 'Lo programamos y lo publicamos', text: 'La IA nos ayuda a avanzar más rápido y un experto revisa cada parte, para que salga lo antes posible y bien. Lo probamos en celular y computadora, dejamos listo el SEO y lo publicamos contigo.', gets: 'Tu sitio en línea y probado.' },
        ],
      },
      commitments: {
        heading: 'Contratar a distancia da menos miedo *cuando todo va por escrito.*',
        intro: 'Antes de que pagues nada, tu propuesta trae estos cuatro puntos. También te sirven para comparar con cualquier otra agencia.',
        sheet: 'Tu propuesta incluye',
        you: 'Tu empresa',
        items: [
          { title: 'Ves el diseño antes de programar', text: 'Apruebas tus páginas en un prototipo que puedes recorrer, no una idea en una presentación. Hasta que dices que sí, no se programa nada.' },
          { title: 'Un precio cerrado', text: 'El de la propuesta es el que pagas. Si a medio camino quieres algo nuevo, primero te decimos cuánto cuesta y tú decides.' },
          { title: 'Tu sitio es tuyo', text: 'Hosting y dominio pueden estar en tu cuenta o en la nuestra, y la propuesta dice dónde queda cada cosa. Si un día quieres seguir con otro equipo, te entregamos código, dominio y accesos.' },
          { title: 'Fechas y soporte acordados', text: 'Cuándo se entrega cada parte y cómo te atendemos después de publicar. Así nadie depende de la memoria de nadie.' },
        ],
      },
      faq: {
        heading: 'Lo que preguntan las empresas de Texas *antes de contratarnos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Texas?', answer: 'Depende de lo que tenga que hacer: no cuesta lo mismo una landing page que un sitio con varias secciones en dos idiomas o uno conectado a pagos y a tus sistemas. Nuestro precio no cambia por la ciudad donde estés. Después de la llamada gratis recibes un precio cerrado por escrito, con lo que incluye y las fechas, para que lo compares con cualquier otra cotización.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, y trabaja desde 1998. Atendemos a empresas de todo Texas en línea, de Houston, Dallas y Fort Worth a Austin, San Antonio, El Paso y el Valle. El mismo equipo investiga, diseña y programa tu proyecto, y en esta página puedes ver quiénes son y conocer a los fundadores.' },
          { question: '¿Por qué no contratar una agencia local en Texas?', answer: 'Si para ti es clave sentarte en la misma mesa, una agencia local te conviene más: todas nuestras sesiones son en línea. Si te importa más quién hace el trabajo y saber qué vas a recibir, compáranos. Aun con una agencia en tu ciudad, casi todo pasa en videollamadas y prototipos compartidos, y con nosotros ves el diseño antes de programar y el precio queda cerrado.' },
          { question: '¿En qué horario trabajan?', answer: 'En la hora del centro de México, que no cambia en el año. En invierno es la misma de casi todo Texas y en verano vamos una hora atrás. En El Paso es al revés: en invierno vamos una hora adelante y en verano coincidimos. Las reuniones se agendan dentro de tu jornada.' },
          { question: '¿Pueden hacer mi sitio en inglés y en español?', answer: 'Sí, y en Texas suele valer la pena: más de 8 millones de personas, casi 3 de cada 10, hablan español en casa (Censo de EE. UU., ACS 2024). Escribimos los textos para cada idioma en vez de traducirlos palabra por palabra y configuramos el sitio para que Google muestre a cada visitante su versión.' },
          { question: '¿Hacen SEO? ¿Mi sitio va a salir en Google en Texas?', answer: 'Sí, hacemos SEO y lo dejamos listo para competir: cada página responde una búsqueda real, carga rápido y lleva sus datos estructurados. Nadie serio puede prometerte el primer lugar, porque depende de tu competencia y toma tiempo. Si atiendes clientes en una dirección física, también ayuda tener al día tu perfil de Google Business.' },
          { question: '¿Pierdo mi lugar en Google si rediseñan mi sitio?', answer: 'No tiene por qué. Antes de tocar nada revisamos qué páginas ya te traen visitas para conservarlas, y si cambia alguna dirección dejamos redirecciones. Un rediseño hecho sin ese cuidado es de lo que más tráfico hace perder.' },
          { question: '¿Mi sitio tiene que cumplir con la ley de privacidad de Texas?', answer: 'Puede que sí. La Texas Data Privacy and Security Act está vigente desde el 1 de julio de 2024 y alcanza a quien hace negocio en Texas o vende a sus residentes y trata datos personales; las pequeñas empresas, según la definición de la SBA, quedan casi fuera. Dejamos el sitio preparado, con formularios que piden solo lo necesario, tu aviso de privacidad y el control de cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Cómo se paga el proyecto?', answer: 'La forma de pago y su calendario se acuerdan contigo y quedan en la propuesta antes de empezar. No se cobra nada fuera de lo que aprobaste: si pides algo extra, te decimos cuánto cuesta antes de hacerlo.' },
          { question: '¿Quién escribe los textos y pone las fotos?', answer: 'Definimos contigo las páginas y los textos clave a partir de lo que nos cuentas de tu negocio; tú los revisas y los apruebas. Para las fotos, lo mejor son las reales de tu empresa. Si te faltan, te decimos cuáles conviene conseguir.' },
          { question: '¿Quién se encarga del sitio después de publicarlo?', answer: 'Podemos alojarlo nosotros y darte soporte: si algo falla o tienes una duda, te responde el mismo equipo que lo hizo. Si prefieres manejarlo por tu cuenta, te entregamos el código y los accesos.' },
          { question: '¿Cuánto tarda un proyecto?', answer: 'Buscamos que salga lo antes posible, pero depende de lo que incluya y de qué tan rápido apruebes cada paso: una landing page sale antes que una plataforma o una marca completa. Las fechas de cada parte vienen en la propuesta.' },
          { question: '¿Usan inteligencia artificial?', answer: 'Sí, para acelerar el diseño y la programación, y por eso tu proyecto avanza más rápido. Siempre va de la mano de un experto: una persona del equipo decide y revisa todo lo que se publica. La información confidencial de tu empresa y de tus clientes no pasa por esas herramientas.' },
        ],
      },
      cta: {
        titleLead: 'Cuéntanos qué hace tu empresa en Texas',
        titleAccent: 'y te decimos por dónde empezar.',
      },
      linkLabel: 'Diseño web en Texas',
      serviceName: 'Diseño web y UX/UI para empresas de Texas',
      howToDescription: 'Cómo avanza con Aurin el sitio de una empresa de Texas: del primer mensaje a la propuesta por escrito, el diseño aprobado y la publicación.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Texas | Since 1998 | Aurin',
        description:
          'Web design, SEO, UX/UI and branding for businesses across Texas. One senior team since 1998: you see the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Texas',
        titleAccent: 'for websites that bring in customers.',
        description:
          'Websites, products and brands for businesses across Texas, built by one senior team during your workday, with a clear price from day one.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Websites, systems and branding for Texas companies: *start with what’s slowing you down.*',
        intro: 'Hire us for one or several, with the same team. Everything comes with SEO from the start, and we use AI to move faster, always with an expert leading your project.',
        items: {
          'web-design': { text: 'Your company has outgrown its website, and smaller competitors with better sites are winning the first impression. We rebuild it so people grasp what you do, why to trust you and how to reach you within seconds, on any phone.', tags: 'Company websites · Redesigns · SEO' },
          'web-development': { text: 'Your staff still keys in orders by hand, sends quotes by email or copies data between systems that don’t talk. We build the missing piece: customer portals, payments, bookings and connections to the tools you already run.', tags: 'Portals · Payments and bookings · Integrations' },
          'ux-ui-design': { text: 'You have an app or platform, and people get stuck, call support or quit halfway through. We find where they drop off and redesign those screens before you pay to build another feature.', tags: 'Research · Prototypes · Apps and platforms' },
          branding: { text: 'You grew, bought another company or changed direction, and your brand still tells the story from ten years ago. We pin down what sets you apart and turn it into a logo, a voice and guidelines, so buyers pick you before they compare prices.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the sectors that *carry weight in Texas.*',
        intro: 'These are real Aurin clients. Open an industry to see what we’d build for it.',
        items: [
          { name: 'Energy', text: 'Investors, partners and neighbors judge your project long before the first meeting. Websites that lay out scope, permits and progress instead of burying them in a PDF.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Healthcare', text: 'Someone looking for care decides within minutes whether to call or keep searching. Brands and websites with services, coverage and contact details right where people look.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech and remittances', text: 'Nobody trusts their money to a confusing screen. Payment, transfer and lending flows that make sense on the first try, which matters in a state that trades this much with Mexico.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Logistics and construction', text: 'Phone quotes and spreadsheet orders hold back companies that are already selling well. Ordering and tracking platforms for materials, distribution and job sites.', clients: 'Grupo Estrella' },
          { name: 'Education', text: 'Students, classes, payments and campuses in one place, instead of five separate tools. Learning platforms and school systems that people actually use.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Tourism and entertainment', text: 'When buying a ticket is a chore, you lose the visit. Websites with online sales, maps and everything guests want to know before they arrive.', clients: 'El Rollo', page: 'tourism' },
        ],
      },
      cases: {
        heading: 'Websites and platforms *that are already live.*',
        ids: ['mexico-pacific', 'ancient', 'el-rollo', 'ingles-individual'],
      },
      cities: {
        heading: 'What your website needs, *region by region in Texas.*',
        intro: 'Texas has more Fortune 500 headquarters than any other state (57 on the 2026 list), yet selling to a corporate buyer is nothing like selling to a border distributor. Here’s what changes by region.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Houston', tags: 'Energy · Healthcare · Port', need: 'Engineers, procurement teams and project partners in energy, plus the huge healthcare market around the Texas Medical Center. They check your track record and certifications before they ever reach out.', build: 'Project sheets and capabilities that are easy to find, downloads kept in order, and a form that goes straight to the right person.' },
          { name: 'Dallas–Fort Worth', tags: 'Corporate · Finance · Real estate', need: 'Executives and purchasing teams at large companies, many of them headquartered in the region. They shortlist several vendors at once and quickly drop any that look small or can’t show proof.', build: 'Case studies, sectors and your way of working spelled out, one page per business line and, when it’s needed, a portal for clients or branches.' },
          { name: 'Austin', tags: 'Software · Startups · Education', need: 'People who try your product before they’ll talk to sales. If the first screen doesn’t make sense, they move on to the next tab.', build: 'UX/UI design for the product, smooth signup and first steps, and a website that says who it’s for and what it solves.' },
          { name: 'San Antonio', tags: 'Defense · Cybersecurity · Tourism', need: 'Government contractors and cybersecurity firms around the military bases, alongside healthcare and tourism. Their buyers expect seriousness and capabilities they can verify.', build: 'Capabilities up front, copy without jargon and a fast, accessible site. For tourism, tickets and bookings that work well on a phone.' },
          { name: 'El Paso', tags: 'Manufacturing · Freight · Trade', need: 'Plants and carriers working both sides of the border with Ciudad Juárez. Buyers want to know right away what you make, where, and how much capacity you have.', build: 'Clear capabilities, facilities and routes, plus a request-for-quote form with no runaround.' },
          { name: 'Rio Grande Valley', tags: 'Healthcare · Education · Trade', need: 'McAllen, Edinburg and Brownsville: hospitals, universities and cross-border commerce, with growing companies that have outgrown their first website.', build: 'A site as solid as the operation behind it, with locations, services and hiring easy to find, and pages that load fast on a phone.' },
        ],
      },
      process: {
        heading: 'How your project moves, *from first message to live site.*',
        steps: [
          { name: 'Tell us about your business', text: 'By message or on a free call: what you sell, who buys it and what’s getting in the way. If we’re not the right fit, we’ll say so on the spot.', gets: 'A clear idea of where to start.' },
          { name: 'Get the proposal', text: 'What’s included, what it costs and when it’s delivered. Go over it with your team, without pressure and with everything in front of you.', gets: 'Price and dates before you commit.' },
          { name: 'Approve the design', text: 'Click through a prototype of the key pages, on a video call or whenever suits you, and tell us what to change.', gets: 'Your site to try out before it’s built.' },
          { name: 'We build it and launch it', text: 'AI helps us move faster and an expert reviews every part, so it launches as soon as possible and done right. We test it on phones and computers, finish the SEO and go live with you.', gets: 'Your site live and tested.' },
        ],
      },
      commitments: {
        heading: 'Hiring a remote agency feels safer *when it’s all in writing.*',
        intro: 'Before you pay a dollar, your proposal spells out these four things. Use them to compare us with any other agency.',
        sheet: 'Your proposal includes',
        you: 'Your company',
        items: [
          { title: 'You see the design before we build', text: 'You approve your pages in a prototype you can click through, not a concept in a slide deck. Nothing gets built until you say yes.' },
          { title: 'A fixed price', text: 'The number on the proposal is the number you pay. If you want something new along the way, we tell you what it costs first and you decide.' },
          { title: 'Your site is yours', text: 'Hosting and domain can sit in your account or ours, and the proposal says where each one lives. If you ever want to move to another team, we hand over the code, domain and logins.' },
          { title: 'Dates and support agreed up front', text: 'When each part is delivered and how we look after you once it’s live, so nothing relies on anyone’s memory.' },
        ],
      },
      faq: {
        heading: 'What Texas companies ask us *before they hire us.*',
        items: [
          { question: 'How much does a website cost in Texas?', answer: 'It comes down to what the site has to do: a landing page, a multi-section company website and a site tied into payments and your systems are different jobs. Our price doesn’t change with your city. After a free call you get a fixed price in writing, with what’s included and the dates, so you can hold it up against any other quote.' },
          { question: 'Where is your team based?', answer: 'In Cuernavaca, Mexico, where we’ve worked since 1998. We serve companies across Texas online, from Houston, Dallas and Fort Worth to Austin, San Antonio, El Paso and the Valley. One team researches, designs and builds your project, and you can see who they are and meet the founders on this page.' },
          { question: 'Do you work in English?', answer: 'Yes. Calls, emails, proposals and website copy are all in English, from the first conversation through launch.' },
          { question: 'Why not hire a local Texas agency?', answer: 'If sitting at the same table matters most to you, a local agency is the better fit: all our sessions are online. If you care more about who does the work and knowing what you’ll get, compare us. Even with an agency across town, most of the job happens on video calls and shared prototypes, and with us you see the design before we build and the price is locked.' },
          { question: 'What hours do you work?', answer: 'We’re on central Mexico time, which doesn’t change during the year. In winter that matches most of Texas, and in summer we’re one hour behind. El Paso flips it: one hour ahead in winter and the same time in summer. Meetings get scheduled inside your workday.' },
          { question: 'Do you do SEO? Will my site show up on Google in Texas?', answer: 'Yes, we do SEO and get your site ready to compete: each page answers a real search, loads fast and carries structured data. Nobody honest can promise you the top spot, since that depends on your competition and takes time. If customers come to a physical address, an up-to-date Google Business Profile helps too.' },
          { question: 'Will a redesign cost me my Google rankings?', answer: 'It shouldn’t. Before we touch anything, we check which pages already bring in visitors so we can keep them, and if an address changes we set up redirects. Redesigns done without that care are one of the most common ways to lose traffic.' },
          { question: 'Does my website need to comply with the Texas privacy law?', answer: 'It might. The Texas Data Privacy and Security Act has been in force since July 1, 2024 and reaches anyone doing business in Texas or selling to its residents who processes personal data; small businesses, as the SBA defines them, are mostly left out. We set the site up for it, with forms that ask only for what’s needed, your privacy notice and cookie controls. Your advisor confirms whether it applies to you.' },
          { question: 'How do payments work?', answer: 'The payment terms and schedule are agreed with you and written into the proposal before we start. You’re never billed for anything you didn’t approve: if you ask for something extra, you hear what it costs first.' },
          { question: 'Who writes the copy and handles the photos?', answer: 'We work out the pages and key copy with you, based on what you tell us about your business, and you review and approve them. For photos, real ones of your company work best. If you’re missing some, we’ll tell you which are worth getting.' },
          { question: 'Who takes care of the site after launch?', answer: 'We can host it and support you: if something breaks or you have a question, the team that built it answers. If you’d rather run it yourself, we hand over the code and logins.' },
          { question: 'How long does a project take?', answer: 'We aim to launch as soon as possible, but it depends on what’s included and how quickly you approve each step: a landing page goes live sooner than a platform or a full brand. The dates for each part are in the proposal.' },
          { question: 'Do you use AI?', answer: 'Yes, to speed up design and development, which is why your project moves faster. It’s always guided by an expert: a person on our team makes the calls and reviews everything that goes live. Confidential information about your company and customers never goes through those tools.' },
          { question: 'Can you also build a Spanish version?', answer: 'Yes, if some of your customers would use it: over 8 million Texans, nearly 3 in 10, speak Spanish at home (US Census ACS 2024). We write it as its own copy and set it up so Google shows each visitor the right version.' },
        ],
      },
      cta: {
        titleLead: 'Tell us what your Texas company does',
        titleAccent: 'and we’ll tell you where to start.',
      },
      linkLabel: 'Web design in Texas',
      serviceName: 'Web Design and UX/UI for Texas Businesses',
      howToDescription: 'How a Texas company’s website moves forward with Aurin: from the first message to a written proposal, an approved design and launch.',
    },
  },
};
