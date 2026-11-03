import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Georgia: Atlanta como sede corporativa, pagos (Transaction Alley), puerto de Savannah, ciberseguridad en Augusta. */
export const georgia: State = {
  id: 'georgia',
  status: 'live',
  slug: 'georgia',
  name: 'Georgia',
  geo: { latitude: 32.1656, longitude: -82.9001 },
  areas: ['Atlanta', 'Alpharetta', 'Savannah', 'Augusta', 'Athens', 'Columbus', 'Dalton'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Georgia | Desde 1998 | Aurin',
        description: 'Páginas web y UX/UI para empresas de Georgia, de Atlanta a Savannah, con SEO básico o avanzado. Precio cerrado y ves el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Georgia',
        titleAccent: 'para empresas que ya juegan en grande.',
        description: 'Sitios, plataformas y marcas para empresas de Atlanta y de todo Georgia, con el diseño aprobado por ti antes de programar una línea.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'En Georgia hay mucha competencia seria: *tu sitio tiene que estar a la altura.*',
        intro: 'Un servicio o todos, siempre con el mismo equipo. La IA acelera el trabajo y un experto revisa cada parte. Tu sitio ya trae el SEO básico.',
        items: {
          'web-design': { text: 'Tu empresa creció en Atlanta entre sedes globales y tu sitio sigue pareciendo de un negocio pequeño. Lo rehacemos para que un comprador con varias opciones te tome en serio en la primera visita.', tags: 'Sitio corporativo · Rediseño · SEO básico' },
          'web-development': { text: 'Cobros, conciliación y datos de clientes que dependen de una persona y un archivo. Hacemos portales y flujos de pago que funcionan sin esa persona, con las conexiones que tu operación ya usa.', tags: 'Pagos · Portales · Conexiones' },
          'ux-ui-design': { text: 'Los usuarios de tu plataforma de pagos o de software tienen poca paciencia y otras opciones. Encontramos dónde abandonan el registro o la operación, y lo corregimos antes de que pagues por más tráfico.', tags: 'Registro y activación · Prototipos · Plataformas' },
          branding: { text: 'Si tu empresa pasó de local a regional, el nombre y el logo a veces siguen hablándole al primer cliente. Definimos cómo debes sonar hoy y lo aplicamos en todo lo que tu gente usa.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para las industrias *con más empuje en Georgia.*',
        intro: 'Clientes reales de Aurin en sectores que crecen aquí. Entra a la industria que te toca para ver qué incluye.',
        items: [
          { name: 'Fintech y pagos', text: 'En el estado conocido como «Transaction Alley», un flujo de pago confuso cuesta clientes rápido. Lo hacemos claro desde la primera pantalla.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Logística y construcción', text: 'Pedidos y seguimiento en línea para quien mueve carga entre el puerto de Savannah, Atlanta y el resto del sureste.', clients: 'Grupo Estrella' },
          { name: 'Desarrollo de software', text: 'Producto y sitio de venta para empresas de software que quieren que el comprador entienda en un minuto qué resuelven.', clients: 'Ancient', page: 'software' },
          { name: 'Salud', text: 'Servicios y consultorios con su cobertura clara, en un mercado donde el paciente compara desde el teléfono.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Plataformas para que escuelas e institutos dejen de perseguir pagos e inscripciones por correo.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Energía', text: 'Sitios serios para hablar de proyectos y permisos con socios y comunidades, sin esconder lo importante.', clients: 'Mexico Pacific', page: 'energy' },
        ],
      },
      cases: {
        heading: 'Ejemplos que *puedes abrir ahora mismo.*',
        ids: ['ancient', 'grupo-estrella', 'fruit-academy', 'el-rollo'],
      },
      cities: {
        heading: 'Qué cambia en tu sitio *de Atlanta a la costa de Georgia.*',
        intro: 'El área de Atlanta reúne unas 15 sedes de Fortune 500 (RealPage, 2026). Fuera de ahí, el puerto, las fábricas y la ciberseguridad piden otra forma de presentarse.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Atlanta', tags: 'Corporativos · Pagos · Medios', need: 'Compradores de grandes empresas y equipos de pagos y tecnología, con mucha oferta local para escoger y poco tiempo para revisarla.', build: 'Un mensaje claro en la primera pantalla, casos con nombre y una forma directa de hablar con alguien.' },
          { name: 'Alpharetta y el norte de Atlanta', tags: 'Software · Tecnología · Servicios', need: 'Empresas de software y tecnología que venden a otras empresas y necesitan demos, no folletos.', build: 'Páginas por producto y por comprador, solicitud de demo simple y un diseño de producto que se sostenga en esa demo.' },
          { name: 'Savannah', tags: 'Puerto · Logística · Turismo', need: 'Agentes de carga, almacenes y proveedores del puerto, además de un turismo muy activo con otro tipo de visitante.', build: 'Para carga: servicios, rutas y cotización. Para turismo: fechas, mapas y compra desde el teléfono. Nunca los dos en la misma página.' },
          { name: 'Augusta', tags: 'Ciberseguridad · Defensa · Salud', need: 'Proveedores de defensa y ciberseguridad alrededor de Fort Eisenhower, cuyos clientes revisan credenciales y seriedad.', build: 'Capacidades y certificaciones visibles, textos sobrios y un sitio rápido, seguro y accesible.' },
          { name: 'Dalton y el norte de Georgia', tags: 'Alfombras · Manufactura · Exportación', need: 'Fabricantes de la región que se conoce por sus alfombras y pisos, con compradores comerciales en todo el país.', build: 'Catálogo con fichas técnicas y muestras, una red de distribuidores fácil de encontrar y una página clara por tipo de producto.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que más nos preguntan *en Georgia.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Georgia?', answer: 'Depende de cuántas páginas lleve y de si tiene que cobrar, agendar o conectarse a otros sistemas. No manejamos paquetes genéricos: tras una llamada gratis recibes un precio cerrado por escrito con todo lo que incluye y las fechas, para decidir con los números en la mano.' },
          { question: '¿Dónde está su oficina?', answer: 'En Cuernavaca, México; ahí trabaja el equipo desde 1998. Atendemos en línea a empresas de Atlanta, Alpharetta, Savannah, Augusta y el resto de Georgia. Más abajo ves al equipo y a los fundadores: con ellos hablas durante todo el proyecto.' },
          { question: '¿Mi sitio puede cobrar con tarjeta de forma segura?', answer: 'Sí. Lo conectamos con un proveedor de pagos reconocido, de modo que los datos de la tarjeta se capturen ahí y no pasen por tu servidor. Eso reduce riesgos y trabajo de seguridad para tu empresa. Te ayudamos a elegir el que te convenga.' },
          { question: '¿En qué horario nos podemos reunir?', answer: 'En tu jornada. Vamos una hora atrás de Georgia en invierno y dos en verano, y por eso solemos agendar entre media mañana y la tarde de tu lado.' },
          { question: '¿Ofrecen SEO para salir en Google en Atlanta y en Georgia?', answer: 'Sí, el básico: cada sitio sale con títulos, descripciones, carga rápida y datos estructurados, sin costo extra. También hacemos SEO avanzado, con páginas por servicio y sector para competir en Atlanta y optimización para buscadores con IA, que se cotiza aparte. Es más lento que pagar anuncios, pero el tráfico se queda.' },
          { question: '¿Me sirve una versión en español?', answer: 'Depende de a quién le vendes. Tiene sentido en salud, educación y servicios a familias en el área de Atlanta o en el norte de Georgia. Si no aporta, te lo decimos y no la incluimos: no cobramos por algo que no vayas a usar.' },
          { question: '¿Hacen diseño web en Atlanta, Alpharetta y Savannah?', answer: 'Sí, y en Augusta y el resto de Georgia. Coordinamos todo por videollamada y con prototipos compartidos, de modo que trabajar desde Midtown, el norte de Atlanta o la costa no cambia ni el proceso ni el precio.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Georgia?', answer: 'Sí. Para muchos negocios el primer paso es un sitio claro que reciba citas o pagos sin vueltas, y el resto llega después. Lo definimos juntos en la llamada gratis y lo ponemos por escrito.' },
          ...commonFaq('es', 'redesign', 'payment'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué hace tu empresa en Georgia', titleAccent: 'y te proponemos el primer paso.' },
      linkLabel: 'Agencia de diseño web en Georgia',
      serviceName: 'Diseño web y UX/UI para empresas de Georgia',
      howToDescription: 'Qué pasa desde que una empresa de Georgia escribe a Aurin hasta que su sitio o plataforma se publica.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Georgia | See It First | Aurin',
        description: 'Web design and UX/UI for Georgia companies, from Atlanta to Savannah, with basic or advanced SEO. A fixed price and the design before the build. Free call.',
      },
      hero: {
        titleLead: 'Web design agency in Georgia',
        titleAccent: 'for companies playing in the big leagues.',
        description: 'Websites, platforms and brands for companies in Atlanta and across Georgia, with a design you approve before a line of code gets written.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Georgia has plenty of serious competition: *your website has to keep up.*',
        intro: 'One service or all of them, always with the same team. AI speeds up the work and an expert checks every part. Your site comes with the SEO basics.',
        items: {
          'web-design': { text: 'Your company grew up in Atlanta among global headquarters, and your site still looks like a small shop. We rebuild it so a buyer with options takes you seriously on the first visit.', tags: 'Corporate websites · Redesigns · Basic SEO' },
          'web-development': { text: 'Billing, reconciliation and customer data that depend on one person and one file. We build portals and payment flows that run without that person, connected to what your operation already uses.', tags: 'Payments · Portals · Integrations' },
          'ux-ui-design': { text: 'Users of your payments platform or software have little patience and other choices. We find where they abandon signup or a transaction and fix it before you pay for more traffic.', tags: 'Signup and activation · Prototypes · Platforms' },
          branding: { text: 'When a company goes from local to regional, the name and logo often keep talking to its first customer. We define how you should sound today and apply it across everything your people use.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for the industries *pushing Georgia forward.*',
        intro: 'Real Aurin clients in sectors growing here. Open yours to see what’s included.',
        items: [
          { name: 'Fintech and payments', text: 'In the state known as Transaction Alley, a confusing payment flow loses customers fast. We make it clear from the first screen.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Logistics and construction', text: 'Online ordering and tracking for companies moving freight between the Port of Savannah, Atlanta and the rest of the Southeast.', clients: 'Grupo Estrella' },
          { name: 'Software development', text: 'Product design and a sales site for software companies that want buyers to grasp what they solve within a minute.', clients: 'Ancient', page: 'software' },
          { name: 'Healthcare', text: 'Services and practices with clear coverage, in a market where patients compare from a phone.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Platforms that free schools and institutes from chasing tuition and enrollment by email.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Energy', text: 'Serious sites for talking through projects and permits with partners and communities, with nothing important tucked away.', clients: 'Mexico Pacific', page: 'energy' },
        ],
      },
      cases: {
        heading: 'Examples you *can open right now.*',
        ids: ['ancient', 'grupo-estrella', 'fruit-academy', 'el-rollo'],
      },
      cities: {
        heading: 'What changes on your site *from Atlanta to the Georgia coast.*',
        intro: 'The Atlanta area is home to about 15 Fortune 500 headquarters (RealPage, 2026). Beyond it, the port, the mills and cybersecurity call for a different way of presenting yourself.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Atlanta', tags: 'Corporate · Payments · Media', need: 'Buyers at big companies and payments and tech teams, with plenty of local options and little time to review them.', build: 'A clear message on the first screen, case studies with names and a direct way to reach a person.' },
          { name: 'Alpharetta and north Atlanta', tags: 'Software · Technology · Services', need: 'Software and technology firms selling to other businesses, who need demos rather than brochures.', build: 'Pages by product and by buyer, a simple demo request and product design that holds up during that demo.' },
          { name: 'Savannah', tags: 'Port · Logistics · Tourism', need: 'Freight forwarders, warehouses and port suppliers, along with a busy tourism trade and a very different kind of visitor.', build: 'For freight: services, routes and quotes. For tourism: dates, maps and buying by phone. Never both on one page.' },
          { name: 'Augusta', tags: 'Cybersecurity · Defense · Healthcare', need: 'Defense and cybersecurity suppliers around Fort Eisenhower, whose clients check credentials and seriousness.', build: 'Capabilities and certifications in plain view, sober copy, and a fast, secure, accessible site.' },
          { name: 'Dalton and north Georgia', tags: 'Carpet · Manufacturing · Export', need: 'Manufacturers in the region known for carpet and flooring, with commercial buyers nationwide.', build: 'A catalog with spec sheets and samples, a dealer network that’s easy to find, and a clear page per product type.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What we get asked most *in Georgia.*',
        items: [
          { question: 'How much does a website cost in Georgia?', answer: 'It depends on how many pages it needs and whether it has to take payments, schedule or connect to other systems. We don’t sell generic packages: after a free call you get a fixed price in writing with everything included and the dates, so you decide with the numbers in hand.' },
          { question: 'Where is your office?', answer: 'In Cuernavaca, Mexico, where the team has worked since 1998. We serve companies in Atlanta, Alpharetta, Savannah, Augusta and across Georgia online. You can see the team and founders further down: they’re who you talk to throughout the project.' },
          { question: 'Can my site take card payments securely?', answer: 'Yes. We connect it to an established payment provider, so card details are captured there and never pass through your server. That cuts risk and security work for your company. We’ll help you pick the one that suits you.' },
          { question: 'What hours can we meet?', answer: 'During your workday. We’re one hour behind Georgia in winter and two in summer, so we usually book from mid-morning through the afternoon on your side.' },
          { question: 'Do you offer SEO to show up on Google in Atlanta and Georgia?', answer: 'Yes, the basics: every site launches with titles, descriptions, fast loading and structured data, at no extra cost. We also do advanced SEO, with pages by service and sector to compete in Atlanta and optimization for AI search engines, quoted separately. It’s slower than paying for ads, but the traffic stays.' },
          { question: 'Do you do web design in Atlanta, Alpharetta and Savannah?', answer: 'Yes, and in Augusta and the rest of Georgia. We coordinate by video call and shared prototypes, so working from Midtown, North Atlanta or the coast changes neither the process nor the price.' },
          { question: 'Do you build websites for small businesses in Georgia?', answer: 'Yes. For many businesses the first step is a clear site that takes appointments or payments without fuss, and the rest comes later. We define it together on the free call and put it in writing.' },
          ...commonFaq('en', 'redesign', 'payment'),
        ],
      },
      cta: { titleLead: 'Tell us what your Georgia company does', titleAccent: 'and we’ll suggest the first step.' },
      linkLabel: 'Georgia web design agency',
      serviceName: 'Web Design and UX/UI for Georgia Companies',
      howToDescription: 'What happens from the moment a Georgia company contacts Aurin until its website or platform is live.',
    },
  },
};
