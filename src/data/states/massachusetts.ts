import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Massachusetts: biotecnología, universidades y hospitales alrededor de Boston. Ángulo: credibilidad ante un público que lee con lupa. */
export const massachusetts: State = {
  id: 'massachusetts',
  status: 'live',
  publishAt: '2026-11-05T06:00:00-06:00',
  slug: 'massachusetts',
  name: 'Massachusetts',
  geo: { latitude: 42.4072, longitude: -71.3824 },
  areas: ['Boston', 'Cambridge', 'Waltham', 'Worcester', 'Lowell', 'Springfield', 'Plymouth', 'Cape Cod'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Massachusetts | Desde 1998 | Aurin',
        description: 'Páginas web y marca para empresas de Massachusetts, de Boston a Springfield, con SEO básico o avanzado. Precio cerrado y ves el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Massachusetts',
        titleAccent: 'a la altura de quien lee con lupa.',
        description: 'Sitios, plataformas y marcas para empresas e instituciones de Massachusetts, con textos serios y el precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'En Massachusetts un error en tu sitio *pesa más que un mal color.*',
        intro: 'Empieza por lo que más urge; el resto lo sigue el mismo equipo. La IA acelera lo repetitivo, un experto revisa cada texto y pantalla, y el SEO básico viene incluido.',
        items: {
          'web-design': { text: 'Tu visitante puede ser un investigador, un médico o un comité de compras, y nota cuando un sitio exagera. Hacemos uno claro, bien escrito y con pruebas, para que te tome en serio desde la primera lectura.', tags: 'Sitio de empresa · Sitio institucional · SEO básico' },
          'web-development': { text: 'Portales para socios, registros a eventos, datos que deben verse igual en todas las áreas. Construimos sistemas sobrios, con permisos bien pensados, que tu gente de sistemas pueda revisar sin sorpresas.', tags: 'Portales · Permisos · Conexiones' },
          'ux-ui-design': { text: 'Una herramienta para laboratorio o para pacientes no puede dejar lugar a dudas. Vemos cómo la usa la gente en su día a día y simplificamos cada paso, sin quitar la precisión que tu área exige.', tags: 'Observación de uso · Prototipos · Sistemas' },
          branding: { text: 'Pasar del laboratorio o la universidad al mercado cambia a quién le hablas. Convertimos un proyecto de mucho prestigio técnico en una marca que también entienden inversionistas y clientes.', tags: 'Estrategia · Nombre e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Sectores donde tenemos experiencia *y que pesan en Massachusetts.*',
        intro: 'Son clientes reales de Aurin, en giros que aquí tienen mucho peso. Cada industria lleva a su página.',
        items: [
          { name: 'Educación', text: 'Sistemas y sitios para instituciones que atienden a muchos alumnos, en un estado con una gran oferta educativa.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Salud', text: 'Servicios de atención que compiten junto a hospitales de renombre y deben explicarse sin rodeos.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Cultura y ciencia', text: 'Museos, orquestas y divulgación para un público exigente y muy activo.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Desarrollo de software', text: 'Empresas de software de la Ruta 128 que le venden a áreas técnicas y necesitan explicar su valor.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech y finanzas', text: 'Productos financieros junto a la gestión de inversiones de Boston, donde la confianza se gana con claridad.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones que recaudan entre donantes muy informados y deben mostrar con claridad qué logran.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Proyectos que puedes abrir *y revisar con calma.*',
        ids: ['ciencia', 'mineria', 'ingles-individual', 'ancient'],
      },
      cities: {
        heading: 'Boston no es todo el estado: *qué necesita tu sitio en cada región.*',
        intro: 'Harvard, MIT y los hospitales del área de Boston marcan el nivel, pero un fabricante de Worcester o un negocio de Cape Cod le venden a personas muy distintas.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Boston', tags: 'Finanzas · Salud · Educación', need: 'Compradores con mucha formación y procesos largos, que comparan varias opciones y consultan a su equipo.', build: 'Argumentos serios, casos con nombre y material que puedan reenviar internamente sin tener que explicarlo.' },
          { name: 'Cambridge y Kendall Square', tags: 'Biotecnología · Software · Investigación', need: 'Empresas de ciencias de la vida que le hablan a la vez a inversionistas, científicos y talento.', build: 'Una página para cada público, ciencia bien explicada y una sección de empleo que atraiga candidatos.' },
          { name: 'Waltham y la Ruta 128', tags: 'Software · Dispositivos médicos · Defensa', need: 'Áreas técnicas y de compras de empresas consolidadas, que piden pruebas antes de abrirle la puerta a un proveedor.', build: 'Capacidades, certificaciones y documentación a la vista, con un formulario que llegue a la persona correcta.' },
          { name: 'Worcester y Lowell', tags: 'Manufactura · Salud · Universidades', need: 'Fabricantes y proveedores que venden a clientes más grandes y quieren dejar de depender de una sola cuenta.', build: 'Procesos y materiales bien explicados, fichas técnicas y una solicitud de cotización sencilla.' },
          { name: 'Springfield, Plymouth y Cape Cod', tags: 'Seguros · Turismo · Servicios', need: 'Empresas regionales y negocios de temporada, con clientes que deciden por cercanía y reseñas.', build: 'Zonas de servicio claras, reservas o contacto en el teléfono y horarios siempre al día.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Dudas frecuentes en Massachusetts *antes de elegir agencia.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Massachusetts?', answer: 'Lo que más cambia el precio es cuánto contenido técnico hay que ordenar y qué debe conectar el sitio. Después de una llamada gratis recibes un precio cerrado por escrito, con alcance y fechas, listo para pasarlo a tu comité o a compras.' },
          { question: '¿Hacen diseño web en Boston, Cambridge y Worcester?', answer: 'Sí, y en Waltham, Lowell, Springfield y Cape Cod. Trabajamos en línea con todo el estado, por videollamada y con prototipos que tu equipo puede abrir y comentar por su cuenta.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Massachusetts?', answer: 'Sí, también para empresas salidas de una universidad o un laboratorio que todavía son pocas personas. Armamos lo necesario para presentarse bien ante clientes e inversionistas y dejamos el resto para después.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Vamos una hora atrás de Boston en invierno y dos en verano, y nos reunimos en tu jornada. No tenemos oficina en el estado y preferimos decirlo desde el inicio. Al equipo lo conoces más abajo.' },
          { question: '¿Qué pide Massachusetts sobre los datos personales de sus residentes?', answer: 'La norma 201 CMR 17 pide un programa escrito de seguridad a quien guarda información personal de residentes del estado. En el sitio cuidamos lo que nos toca: conexión cifrada, formularios que piden lo necesario y accesos controlados. Tu asesor define el resto.' },
          { question: '¿Pueden trabajar con revisiones de varias áreas o de un comité?', answer: 'Sí, es normal en universidades, hospitales y empresas de ciencia. Acordamos desde la propuesta quién aprueba cada parte y en qué momento, para que las revisiones no frenen el proyecto ni se contradigan.' },
          { question: '¿Ofrecen SEO para instituciones y empresas de Massachusetts?', answer: 'Sí. Tu sitio ya incluye el básico: títulos, descripciones, velocidad y datos estructurados. El SEO avanzado va aparte y suma contenidos especializados, seguimiento y la optimización para buscadores con IA. Te decimos si en tu caso vale la inversión.' },
          ...commonFaq('es', 'redesign', 'support'),
        ],
      },
      cta: { titleLead: 'Enséñanos cómo te presentas hoy en Massachusetts', titleAccent: 'y te decimos qué afinaríamos.' },
      linkLabel: 'Agencia de páginas web en Massachusetts',
      serviceName: 'Diseño web y branding para empresas de Massachusetts',
      howToDescription: 'Cómo avanza con Aurin el sitio de una empresa o institución de Massachusetts, con cada parte aprobada por quien corresponde.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Massachusetts | Since 1998 | Aurin',
        description: 'Web design and branding for Massachusetts companies, from Boston to Springfield, with basic or advanced SEO. A fixed price and the design first. Free call.',
      },
      hero: {
        titleLead: 'Web design agency in Massachusetts',
        titleAccent: 'for readers who check every claim.',
        description: 'Websites, platforms and brands for Massachusetts companies and institutions, with serious copy and a fixed price before we begin.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'In Massachusetts, a mistake on your site *weighs more than a bad color.*',
        intro: 'Start with what’s most urgent; the same team picks up the rest. AI speeds up the repetitive work, an expert reviews every line and screen, and basic SEO comes included.',
        items: {
          'web-design': { text: 'Your visitor may be a researcher, a physician or a buying committee, and they notice when a site overstates. We build one that’s clear, well written and backed with proof, so you’re taken seriously from the first read.', tags: 'Company websites · Institutional sites · Basic SEO' },
          'web-development': { text: 'Partner portals, event registration, data that has to read the same across departments. We build sober systems, with well-planned permissions, that your IT people can review without surprises.', tags: 'Portals · Permissions · Integrations' },
          'ux-ui-design': { text: 'A tool for a lab or for patients can’t leave room for doubt. We see how people use it day to day and simplify every step, without losing the precision your field demands.', tags: 'Usage research · Prototypes · Systems' },
          branding: { text: 'Moving from the lab or the university to the market changes who you’re talking to. We turn a project with deep technical prestige into a brand investors and customers can follow too.', tags: 'Strategy · Name and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Sectors we know *that matter in Massachusetts.*',
        intro: 'These are real Aurin clients, in fields that carry weight here. Each industry links to its page.',
        items: [
          { name: 'Education', text: 'Systems and sites for institutions serving many students, in a state with a deep education market.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Healthcare', text: 'Care services competing alongside renowned hospitals, which need to explain themselves plainly.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Culture and science', text: 'Museums, orchestras and outreach for a demanding, very active public.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Software development', text: 'Route 128 software companies selling to technical departments, which need to explain their value.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech and finance', text: 'Financial products next to Boston’s investment management firms, where trust is earned through clarity.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Nonprofits', text: 'Organizations raising funds from very informed donors, which must show clearly what they achieve.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Projects you can open *and review at your own pace.*',
        ids: ['ciencia', 'mineria', 'ingles-individual', 'ancient'],
      },
      cities: {
        heading: 'Boston isn’t the whole state: *what your site needs in each region.*',
        intro: 'Harvard, MIT and the Boston-area hospitals set the bar, but a Worcester manufacturer or a Cape Cod business sells to very different people.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Boston', tags: 'Finance · Healthcare · Education', need: 'Highly educated buyers with long processes, who compare several options and consult their team.', build: 'Serious arguments, named cases and material they can forward internally without having to explain it.' },
          { name: 'Cambridge and Kendall Square', tags: 'Biotech · Software · Research', need: 'Life sciences companies speaking at once to investors, scientists and talent.', build: 'A page for each audience, science explained well and a careers section that attracts candidates.' },
          { name: 'Waltham and Route 128', tags: 'Software · Medical devices · Defense', need: 'Technical and purchasing teams at established companies, who want proof before letting a vendor in.', build: 'Capabilities, certifications and documentation in plain view, with a form that reaches the right person.' },
          { name: 'Worcester and Lowell', tags: 'Manufacturing · Healthcare · Universities', need: 'Manufacturers and suppliers selling to larger customers, who want to stop relying on a single account.', build: 'Processes and materials explained well, spec sheets and a simple quote request.' },
          { name: 'Springfield, Plymouth and Cape Cod', tags: 'Insurance · Tourism · Services', need: 'Regional companies and seasonal businesses, whose customers decide on proximity and reviews.', build: 'Clear service areas, booking or contact on a phone and hours that are always current.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Common questions in Massachusetts *before choosing an agency.*',
        items: [
          { question: 'How much does a website cost in Massachusetts?', answer: 'What moves the price most is how much technical content needs organizing and what the site has to connect to. After a free call you get a fixed price in writing, with scope and dates, ready to pass to your committee or purchasing team.' },
          { question: 'Do you do web design in Boston, Cambridge and Worcester?', answer: 'Yes, and in Waltham, Lowell, Springfield and Cape Cod. We work online across the state, by video call and with prototypes your team can open and comment on by themselves.' },
          { question: 'Do you build websites for small businesses in Massachusetts?', answer: 'Yes, including university or lab spin-offs that are still just a few people. We build what you need to present yourself well to customers and investors, and leave the rest for later.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We’re one hour behind Boston in winter and two in summer, and we meet during your workday. We have no office in the state and prefer to say so up front. You can meet the team further down.' },
          { question: 'What does Massachusetts require for residents’ personal data?', answer: 'Regulation 201 CMR 17 calls for a written security program from anyone holding residents’ personal information. On the site we handle our part: encrypted connections, forms that ask only for what’s needed and controlled access. Your advisor defines the rest.' },
          { question: 'Can you work with reviews from several departments or a committee?', answer: 'Yes, it’s normal at universities, hospitals and science companies. We agree in the proposal who approves each part and when, so reviews don’t stall the project or contradict each other.' },
          { question: 'Do you offer SEO for Massachusetts institutions and companies?', answer: 'Yes. Your site already includes the basics: titles, descriptions, speed and structured data. Advanced SEO is separate and adds specialized content, ongoing tracking and optimization for AI search. We’ll tell you whether it’s worth it in your case.' },
          ...commonFaq('en', 'redesign', 'support'),
        ],
      },
      cta: { titleLead: 'Show us how you present yourself in Massachusetts', titleAccent: 'and we’ll tell you what we’d sharpen.' },
      linkLabel: 'Massachusetts web design agency',
      serviceName: 'Web Design and Branding for Massachusetts Companies',
      howToDescription: 'How a Massachusetts company or institution’s site moves forward with Aurin, with each part approved by the right people.',
    },
  },
};
