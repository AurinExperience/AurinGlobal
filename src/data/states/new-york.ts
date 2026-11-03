import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Nueva York: el mercado más exigente y competido. Ángulo: nivel de agencia grande, trato directo con quien hace el trabajo. */
export const newYork: State = {
  id: 'new-york',
  status: 'live',
  publishAt: '2026-11-04T06:00:00-06:00',
  slug: 'new-york',
  name: 'New York',
  nameEs: 'Nueva York',
  geo: { latitude: 42.1657, longitude: -74.9481 },
  areas: ['New York City', 'Brooklyn', 'Long Island', 'Westchester', 'Albany', 'Rochester', 'Buffalo', 'Syracuse'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Nueva York | Precio cerrado | Aurin',
        description: 'Agencia de diseño web, SEO y UX/UI para empresas de Nueva York, de Manhattan a Buffalo. Trato directo con el equipo y precio cerrado. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Nueva York',
        titleAccent: 'con nivel de agencia grande y trato directo.',
        description: 'Sitios, productos y marcas para empresas de Nueva York, hechos por quienes hablan contigo, con el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Diseño web en Nueva York para quien *no puede verse como uno más.*',
        intro: 'Un servicio o todos, con un solo equipo y sin intermediarios. Hay SEO desde el inicio y la IA acelera el trabajo, con un experto respondiendo por cada entrega.',
        items: {
          'web-design': { text: 'Tu cliente vio ya diez sitios esta semana, varios hechos por agencias famosas. Hacemos uno con una idea clara y un diseño propio, sin plantillas, para que te recuerde al llegar al once.', tags: 'Sitio corporativo · Diseño a la medida · SEO' },
          'web-development': { text: 'Portales para clientes, cuentas con permisos, datos que no pueden fallar. Construimos lo que tu operación necesita y lo probamos a fondo antes de que nadie de fuera lo vea.', tags: 'Portales · Sistemas a la medida · Conexiones' },
          'ux-ui-design': { text: 'En finanzas, medios o salud, un usuario confundido cuesta caro y se va con un competidor en un clic. Investigamos, probamos y rediseñamos lo que frena a tu producto.', tags: 'Investigación · Prototipos · Productos digitales' },
          branding: { text: 'En una ciudad donde todos dicen ser los primeros, una marca sin postura se pierde. Definimos qué defiendes y lo llevamos a un sistema visual que aguante campañas, oficinas y sitio.', tags: 'Estrategia · Sistema visual · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Experiencia en los sectores *más exigentes de Nueva York.*',
        intro: 'Son clientes reales de Aurin. Abre cada industria para ver qué hacemos en ella.',
        items: [
          { name: 'Fintech y finanzas', text: 'Junto a Wall Street, tu producto compite en confianza. Flujos claros de pago, inversión y crédito, con la información que un comprador serio revisa.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Agencias de diseño', text: 'Programamos sitios para agencias de diseño y marca que necesitan respetar cada detalle de su visión. Trabajamos como su equipo técnico.', clients: 'Ideograma · Identidad', page: 'agencies' },
          { name: 'Cultura y ciencia', text: 'Instituciones culturales que compiten por atención en la ciudad con más oferta del país.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Salud', text: 'Servicios de atención con información clara para un paciente acostumbrado a escoger entre muchas opciones.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Plataformas de aprendizaje y gestión para escuelas e institutos con alumnos de todo el mundo.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que recaudan en un mercado de muchas causas y necesitan explicar la suya en un minuto.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Trabajo publicado, *sin promesas de presentación.*',
        ids: ['ancient', 'mineria', 'ciencia', 'mexico-pacific'],
      },
      cities: {
        heading: 'Nueva York es más que Manhattan: *qué le conviene a tu sitio en cada zona.*',
        intro: 'El estado tiene 53 sedes de empresas Fortune 500 en la lista de 2026, casi todas en el área de la ciudad. Al norte, el comprador y la competencia son otros.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Manhattan', tags: 'Finanzas · Medios · Servicios', need: 'Compradores que ven agencias todo el tiempo, juzgan rápido y piden pruebas de que entiendes su giro.', build: 'Una idea clara en la primera pantalla, casos con nombre y un sitio impecable también por dentro: rápido y sin errores.' },
          { name: 'Brooklyn y Queens', tags: 'Marcas · Comercio · Tecnología', need: 'Marcas jóvenes, comercios y empresas de tecnología con clientes que valoran identidad y detalle.', build: 'Una marca con carácter, buenas fotos propias y compra o reserva sin fricción en el teléfono.' },
          { name: 'Long Island y Westchester', tags: 'Salud · Servicios · Empresa familiar', need: 'Empresas de servicios y salud con clientes de toda la región, que buscan a alguien cercano y confiable.', build: 'Zonas que atiendes, reseñas y equipo a la vista, con páginas por servicio para ganar búsquedas locales.' },
          { name: 'Albany y el valle del Hudson', tags: 'Gobierno · Semiconductores · Educación', need: 'Proveedores del gobierno estatal, tecnología avanzada e instituciones educativas, con compradores muy formales.', build: 'Capacidades y requisitos claros, sitio accesible y textos sobrios que un comité pueda evaluar.' },
          { name: 'Rochester, Buffalo y Syracuse', tags: 'Óptica · Manufactura · Comercio con Canadá', need: 'Fabricantes y empresas de tecnología óptica, con clientes en otros estados y al otro lado de la frontera.', build: 'Fichas técnicas ordenadas, solicitud de cotización y SEO por producto para que te encuentren fuera de la región.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que preguntan en Nueva York *antes de contratar una agencia.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Nueva York?', answer: 'Lo que define el precio es lo que debe hacer y cuánto diseño a la medida lleva, no la dirección de tu oficina. Tras una llamada gratis recibes un precio cerrado por escrito, con lo incluido y las fechas, para compararlo línea por línea con otras agencias.' },
          { question: '¿Hacen diseño web en Manhattan, Brooklyn y Long Island?', answer: 'Sí. Trabajamos en línea con empresas de los cinco condados, Long Island, Westchester, Albany, Rochester y Buffalo. Todo el proceso se hace por videollamada y prototipos compartidos, así que tu ubicación dentro del estado no cambia nada.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Nueva York?', answer: 'Sí, cuando el negocio ya vende y necesita verse a la altura. Empezamos por lo que más te ayuda hoy, a veces una sola landing page bien hecha, y crecemos cuando se justifique. Sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Lo decimos desde el principio: no tenemos oficina en Nueva York ni vamos a simularla. A cambio, hablas directamente con quien diseña y programa, y puedes conocerlos más abajo en esta página.' },
          { question: '¿Qué tienen frente a una agencia de Manhattan?', answer: 'Si necesitas reuniones presenciales o una marca de agencia famosa en tu presentación, ellos te convienen más. Si quieres ver el diseño antes de programar, un precio cerrado y trabajar sin capas de cuentas con la gente que hace el proyecto, compáranos.' },
          { question: '¿Trabajan en horario de Nueva York?', answer: 'Las reuniones se agendan dentro de tu jornada. Vamos una hora atrás de Nueva York en invierno y dos en verano, y solemos reunirnos entre media mañana y la tarde de tu lado.' },
          { question: '¿Ofrecen SEO para empresas en Nueva York?', answer: 'Sí. En un mercado tan peleado no conviene atacar solo «agencia en Nueva York»: armamos páginas para búsquedas más específicas, donde quien llega ya sabe lo que quiere, y cuidamos velocidad y datos estructurados para aparecer también en respuestas de IA. Nadie serio promete el primer lugar.' },
          { question: '¿Qué pide la ley de Nueva York sobre datos de clientes?', answer: 'La ley SHIELD pide a quien maneja datos de residentes de Nueva York protegerlos con medidas razonables. En el sitio nos toca lo nuestro: formularios que piden solo lo necesario, conexión cifrada y accesos controlados. Tu asesor confirma lo que aplique a tu empresa.' },
          ...commonFaq('es', 'redesign', 'copy'),
        ],
      },
      cta: { titleLead: 'Enséñanos tu sitio de hoy en Nueva York', titleAccent: 'y te decimos qué cambiaríamos primero.' },
      linkLabel: 'Agencia de páginas web en Nueva York',
      serviceName: 'Diseño web, UX/UI y branding para empresas de Nueva York',
      howToDescription: 'Cómo trabaja Aurin con una empresa de Nueva York: del primer mensaje a la propuesta, el diseño aprobado y el sitio publicado.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in New York | Fixed Price | Aurin',
        description: 'Web design, SEO and UX/UI for New York companies, from Manhattan to Buffalo. Work directly with the people doing the work, at a fixed price. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in New York',
        titleAccent: 'with big-agency craft and no layers.',
        description: 'Websites, products and brands for New York companies, made by the people you actually talk to, with a fixed price up front.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'New York web design for companies *that can’t look like everyone else.*',
        intro: 'One service or all of them, with one team and no middlemen. SEO is in from the start, and AI speeds up the work, with an expert answering for every delivery.',
        items: {
          'web-design': { text: 'Your customer has seen ten sites this week, several from famous agencies. We build one with a clear idea and an original design, no templates, so they still remember you at number eleven.', tags: 'Corporate websites · Custom design · SEO' },
          'web-development': { text: 'Client portals, accounts with permissions, data that can’t fail. We build what your operation needs and test it hard before anyone outside sees it.', tags: 'Portals · Custom systems · Integrations' },
          'ux-ui-design': { text: 'In finance, media or healthcare, a confused user is expensive and one click from a competitor. We research, test and redesign what’s holding your product back.', tags: 'Research · Prototypes · Digital products' },
          branding: { text: 'In a city where everyone claims to be first, a brand with no point of view disappears. We define what you stand for and turn it into a visual system that survives campaigns, offices and the site.', tags: 'Strategy · Visual system · Guidelines' },
        },
      },
      sectors: {
        heading: 'Experience in *New York’s most demanding sectors.*',
        intro: 'These are real Aurin clients. Open an industry to see what we do in it.',
        items: [
          { name: 'Fintech and finance', text: 'Next door to Wall Street, your product competes on trust. Clear payment, investing and lending flows, with what a serious buyer checks.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Design agencies', text: 'We build sites for design and brand agencies that need every detail of their vision respected. We work as their technical team.', clients: 'Ideograma · Identidad', page: 'agencies' },
          { name: 'Culture and science', text: 'Cultural institutions competing for attention in the city with more on offer than any other.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Healthcare', text: 'Care services with clear information for patients used to choosing among many options.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Learning and management platforms for schools and institutes with students from around the world.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Organizations raising funds among countless causes, which need to explain theirs in a minute.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Published work, *not pitch-deck promises.*',
        ids: ['ancient', 'mineria', 'ciencia', 'mexico-pacific'],
      },
      cities: {
        heading: 'New York is more than Manhattan: *what your site needs in each area.*',
        intro: 'The state had 53 Fortune 500 headquarters on the 2026 list, most of them around the city. Upstate, both the buyer and the competition change.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Manhattan', tags: 'Finance · Media · Services', need: 'Buyers who see agencies constantly, judge fast and want proof you understand their business.', build: 'A clear idea on the first screen, named case studies and a site that’s flawless under the hood too: fast and error-free.' },
          { name: 'Brooklyn and Queens', tags: 'Brands · Retail · Technology', need: 'Young brands, shops and tech companies whose customers care about identity and detail.', build: 'A brand with character, good original photos, and buying or booking with no friction on a phone.' },
          { name: 'Long Island and Westchester', tags: 'Healthcare · Services · Family firms', need: 'Service and healthcare companies with clients across the region, who want someone close and reliable.', build: 'Service areas, reviews and team up front, with a page per service to win local searches.' },
          { name: 'Albany and the Hudson Valley', tags: 'Government · Semiconductors · Education', need: 'State government vendors, advanced technology and educational institutions, with very formal buyers.', build: 'Clear capabilities and requirements, an accessible site and sober copy a committee can evaluate.' },
          { name: 'Rochester, Buffalo and Syracuse', tags: 'Optics · Manufacturing · Canada trade', need: 'Manufacturers and optical technology firms with customers in other states and across the border.', build: 'Organized spec sheets, quote requests and SEO by product so you’re found outside the region.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What New York companies ask *before hiring an agency.*',
        items: [
          { question: 'How much does a website cost in New York?', answer: 'The price comes from what the site must do and how much custom design it takes, not your office address. After a free call you get a fixed price in writing, with what’s included and the dates, to compare line by line with other agencies.' },
          { question: 'Do you do web design in Manhattan, Brooklyn and Long Island?', answer: 'Yes. We work online with companies in all five boroughs, Long Island, Westchester, Albany, Rochester and Buffalo. The whole process runs on video calls and shared prototypes, so where you are in the state changes nothing.' },
          { question: 'Do you build websites for small businesses in New York?', answer: 'Yes, once the business is already selling and needs to look the part. We start with what helps most today, sometimes a single well-made landing page, and grow when it’s justified. You know the price before you decide.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We say so up front: we have no New York office and won’t pretend otherwise. In exchange, you talk directly to the people who design and build, and you can meet them further down this page.' },
          { question: 'What do you offer compared with a Manhattan agency?', answer: 'If you need in-person meetings or a famous agency name in your deck, they’re the better fit. If you want to see the design before the build, a fixed price and no account layers between you and the people doing the work, compare us.' },
          { question: 'Do you work New York hours?', answer: 'Meetings get scheduled within your workday. We’re one hour behind New York in winter and two in summer, and we usually meet from mid-morning through the afternoon on your side.' },
          { question: 'Do you offer SEO for New York companies?', answer: 'Yes. In a market this crowded it doesn’t pay to chase only “agency in New York”: we build pages for more specific searches, where visitors already know what they want, and we take care of speed and structured data so you also show up in AI answers. No honest agency promises the top spot.' },
          { question: 'What does New York law require for customer data?', answer: 'The SHIELD Act asks anyone handling New York residents’ data to protect it with reasonable safeguards. On the site, we handle our part: forms that ask only for what’s needed, encrypted connections and controlled access. Your advisor confirms what applies to your company.' },
          ...commonFaq('en', 'redesign', 'copy'),
        ],
      },
      cta: { titleLead: 'Show us your New York site as it stands', titleAccent: 'and we’ll tell you what we’d change first.' },
      linkLabel: 'New York web design agency',
      serviceName: 'Web Design, UX/UI and Branding for New York Companies',
      howToDescription: 'How Aurin works with a New York company: from the first message to the proposal, an approved design and a live site.',
    },
  },
};
