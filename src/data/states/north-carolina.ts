import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Carolina del Norte: banca en Charlotte, ciencia y software en el Triangle, muebles y fábricas en el Triad. Productos difíciles de explicar. */
export const northCarolina: State = {
  id: 'north-carolina',
  status: 'live',
  slug: 'north-carolina',
  name: 'North Carolina',
  nameEs: 'Carolina del Norte',
  geo: { latitude: 35.7596, longitude: -79.0193 },
  areas: ['Charlotte', 'Raleigh', 'Durham', 'Chapel Hill', 'Greensboro', 'Winston-Salem', 'High Point', 'Wilmington', 'Asheville'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Carolina del Norte | Aurin',
        description: 'Páginas web y UX/UI para empresas de Carolina del Norte, de Charlotte a Raleigh y Durham, con SEO básico o avanzado y precio cerrado. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Carolina del Norte',
        titleAccent: 'para que lo complejo se entienda rápido.',
        description: 'Sitios y productos digitales para empresas de banca, ciencia, software y manufactura, explicados en palabras que cualquier comprador entiende.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Si lo que vendes es difícil de explicar, *tu sitio tiene que hacerlo por ti.*',
        intro: 'Hazlo por partes o todo junto, con un solo equipo en Aurin. La IA acelera el trabajo, un experto revisa cada parte y el SEO básico viene incluido.',
        items: {
          'web-design': { text: 'Tu equipo técnico escribió el sitio y solo otro especialista lo entiende. Lo reescribimos y lo diseñamos para quien firma el contrato, sin perder la precisión que tus ingenieros o científicos exigen.', tags: 'Sitio de empresa · Textos claros · SEO básico' },
          'web-development': { text: 'Tu cliente quiere ver avances, documentos o estados de cuenta sin llamar. Hacemos portales privados con permisos por usuario, conectados a los sistemas que ya usas.', tags: 'Portales privados · Permisos · Conexiones' },
          'ux-ui-design': { text: 'Una plataforma médica, financiera o de datos no perdona confusiones. Probamos con gente real dónde se equivoca y simplificamos esos pasos, cuidando lo que no se puede quitar.', tags: 'Pruebas con usuarios · Prototipos · Plataformas' },
          branding: { text: 'Pasar del laboratorio, del taller o de la región a un mercado nacional exige otra voz. Definimos tu lugar frente a la competencia y lo llevamos a logo, tono y materiales.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para la economía *de Carolina del Norte.*',
        intro: 'Son clientes reales de Aurin en sectores que aquí importan. Abre cada industria para ver qué incluye.',
        items: [
          { name: 'Fintech y finanzas', text: 'Con Charlotte como gran centro bancario, los compradores esperan seriedad. Flujos de crédito y pago que la transmiten sin complicar al usuario.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Desarrollo de software', text: 'Sitios y producto para empresas del Triangle que ya tienen tecnología sólida y aún no saben contarla.', clients: 'Ancient', page: 'software' },
          { name: 'Salud', text: 'Servicios de salud con información que un paciente o su familia entiende sin ser médico.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Sistemas de alumnos y pagos para instituciones en un estado con mucha vida universitaria.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Logística y construcción', text: 'Pedidos, inventario y seguimiento para distribuidores y fabricantes que crecieron con teléfono y correo.', clients: 'Grupo Estrella' },
          { name: 'Cultura y ciencia', text: 'Instituciones que necesitan explicar ciencia y cultura a un público que no es experto.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Proyectos *ya publicados*, para que nos juzgues.',
        ids: ['ciencia', 'ancient', 'ingles-individual', 'grupo-estrella'],
      },
      cities: {
        heading: 'Banca, ciencia y fábricas: *qué pide cada región de Carolina del Norte.*',
        intro: 'Pocos estados juntan una capital bancaria, un polo de investigación y una tradición industrial a un par de horas entre sí. Tu sitio tiene que hablarle al comprador de tu zona.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Charlotte', tags: 'Banca · Energía · Servicios', need: 'Bancos, firmas financieras y sus proveedores, con procesos de compra largos y varias personas que revisan antes de decidir.', build: 'Pruebas de experiencia, información de seguridad a la vista y material que el contacto pueda reenviar a su jefe.' },
          { name: 'Research Triangle', tags: 'Biotecnología · Software · Universidades', need: 'Empresas de ciencia y software de Raleigh, Durham y Chapel Hill, que buscan clientes, talento e inversión al mismo tiempo.', build: 'Una historia clara para no especialistas, páginas para inversionistas y candidatos, y detalle técnico para quien lo pida.' },
          { name: 'Piedmont Triad', tags: 'Muebles · Manufactura · Logística', need: 'Fabricantes y distribuidores de Greensboro y High Point, conocida por sus muebles, con compradores de todo el país.', build: 'Catálogos que se puedan filtrar, un espacio privado para distribuidores y solicitud de cotización por producto.' },
          { name: 'Wilmington y la costa', tags: 'Puerto · Turismo · Cine', need: 'Empresas del puerto, negocios de playa y servicios para producción de cine y televisión, con ritmos muy distintos.', build: 'Reservas o cotización según el giro, con textos propios para cada cliente en vez de un sitio para todos.' },
          { name: 'Asheville', tags: 'Turismo · Bebidas · Artesanía', need: 'Visitantes de otros estados y marcas locales de bebidas y productos que quieren vender más allá de las montañas.', build: 'Una marca con carácter, venta en línea y fotos reales que transmitan por qué vale la pena el viaje.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas *de Carolina del Norte.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Carolina del Norte?', answer: 'Hacer entendible un producto técnico requiere más trabajo de textos que una página simple, y un portal más que un sitio informativo. Por eso cotizamos después de conocerte: en la llamada gratis vemos qué necesitas y recibes un precio cerrado, con alcance y fechas, por escrito.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Atendemos en línea a empresas de Charlotte, Raleigh, Durham, Greensboro, Wilmington y el resto del estado. El mismo equipo investiga, escribe, diseña y programa, y lo conoces más abajo en esta página.' },
          { question: '¿Pueden explicar un producto científico o muy técnico?', answer: 'Sí. Hablamos con quien lo creó, traducimos el tema a lo que le importa a tu comprador y te pasamos los textos para que tu equipo revise la precisión. Nada se publica sin esa revisión.' },
          { question: '¿Firman acuerdo de confidencialidad?', answer: 'Sí, desde el inicio, si tu proyecto incluye datos o tecnología que aún no son públicos. Y la información confidencial no pasa por herramientas de IA.' },
          { question: '¿En qué horario trabajan?', answer: 'Una hora atrás de Carolina del Norte en invierno y dos en verano. Las reuniones se agendan sin problema dentro de tu jornada, y entre una y otra avanzamos con revisiones que puedes ver a tu ritmo.' },
          { question: '¿Ofrecen SEO para empresas especializadas en Carolina del Norte?', answer: 'Sí, el SEO básico ya viene con el sitio: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas para cada problema que resuelves, escritas como lo busca tu cliente y no como lo llama tu laboratorio, también lo hacemos, como SEO avanzado, que se cotiza aparte. El SEO avanzado también incluye optimizar el sitio para que las herramientas de IA entiendan bien lo que haces.' },
          { question: '¿Hacen diseño web en Charlotte, Raleigh y Durham?', answer: 'Sí, y en Greensboro, Winston-Salem y Asheville. Trabajamos en línea con todo el estado, y es igual de sencillo para un banco del centro de Charlotte que para una empresa de ciencia en el Research Triangle.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Carolina del Norte?', answer: 'Sí, también para empresas nuevas de tecnología o ciencia con poco equipo. Te ayudamos a decir con claridad qué haces, con un sitio del tamaño que hoy te conviene y un precio que conoces desde el inicio.' },
          ...commonFaq('es', 'copy', 'time'),
        ],
      },
      cta: { titleLead: 'Explícanos lo que vendes en Carolina del Norte', titleAccent: 'y te lo devolvemos más claro.' },
      linkLabel: 'Sitios web en Carolina del Norte',
      serviceName: 'Diseño web y UX/UI para empresas de Carolina del Norte',
      howToDescription: 'Los pasos con los que una empresa de Carolina del Norte llega con Aurin de un producto difícil de explicar a un sitio claro y publicado.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in North Carolina | Aurin',
        description: 'Web design and UX/UI for North Carolina companies, from Charlotte to the Research Triangle, with basic or advanced SEO and a fixed price. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in North Carolina',
        titleAccent: 'that makes complex things quick to grasp.',
        description: 'Websites and digital products for banking, science, software and manufacturing companies, explained in words any buyer can follow.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'If what you sell is hard to explain, *your website has to do it for you.*',
        intro: 'Take it in pieces or all at once, with one team at Aurin. AI speeds up the work, an expert reviews every part and basic SEO comes included.',
        items: {
          'web-design': { text: 'Your technical team wrote the site and only another specialist understands it. We rewrite and redesign it for the person signing the contract, keeping the accuracy your engineers or scientists demand.', tags: 'Company websites · Clear copy · Basic SEO' },
          'web-development': { text: 'Your clients want to see progress, documents or statements without calling. We build private portals with per-user permissions, connected to the systems you already use.', tags: 'Private portals · Permissions · Integrations' },
          'ux-ui-design': { text: 'A medical, financial or data platform doesn’t forgive confusion. We test with real people to see where they slip, then simplify those steps while protecting what can’t be removed.', tags: 'User testing · Prototypes · Platforms' },
          branding: { text: 'Going from the lab, the workshop or the region to a national market takes a different voice. We define your place against the competition and carry it through logo, tone and materials.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for *North Carolina’s economy.*',
        intro: 'These are real Aurin clients in sectors that matter here. Open an industry to see what’s included.',
        items: [
          { name: 'Fintech and finance', text: 'With Charlotte as a major banking center, buyers expect seriousness. Lending and payment flows that convey it without burdening the user.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Software development', text: 'Sites and products for Triangle companies with solid technology that haven’t yet figured out how to tell its story.', clients: 'Ancient', page: 'software' },
          { name: 'Healthcare', text: 'Health services with information a patient or their family can follow without being a doctor.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Student and tuition systems for institutions in a state with a lively university scene.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Logistics and construction', text: 'Ordering, inventory and tracking for distributors and manufacturers that grew up on phone and email.', clients: 'Grupo Estrella' },
          { name: 'Culture and science', text: 'Institutions that need to explain science and culture to people who aren’t experts.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Projects *already live*, so you can judge for yourself.',
        ids: ['ciencia', 'ancient', 'ingles-individual', 'grupo-estrella'],
      },
      cities: {
        heading: 'Banks, labs and factories: *what each North Carolina region asks for.*',
        intro: 'Few states put a banking capital, a research hub and an industrial tradition a couple of hours apart. Your site has to speak to the buyer in your part of the state.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Charlotte', tags: 'Banking · Energy · Services', need: 'Banks, financial firms and their vendors, with long buying processes and several people reviewing before a decision.', build: 'Proof of experience, security information in plain view, and material your contact can forward to their boss.' },
          { name: 'Research Triangle', tags: 'Biotech · Software · Universities', need: 'Science and software firms in Raleigh, Durham and Chapel Hill, seeking customers, talent and investment all at once.', build: 'A clear story for non-specialists, pages for investors and candidates, and technical detail for those who ask.' },
          { name: 'Piedmont Triad', tags: 'Furniture · Manufacturing · Logistics', need: 'Manufacturers and distributors in Greensboro and High Point, known for furniture, with buyers from across the country.', build: 'Filterable catalogs, a private area for dealers and quote requests by product.' },
          { name: 'Wilmington and the coast', tags: 'Port · Tourism · Film', need: 'Port companies, beach businesses and services for film and TV production, all on very different rhythms.', build: 'Booking or quotes depending on the business, with copy written for each customer instead of one site for everyone.' },
          { name: 'Asheville', tags: 'Tourism · Beverages · Crafts', need: 'Out-of-state visitors and local beverage and product brands that want to sell beyond the mountains.', build: 'A brand with character, online sales and real photos that show why the trip is worth it.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from *North Carolina companies.*',
        items: [
          { question: 'How much does a website cost in North Carolina?', answer: 'Making a technical product understandable takes more copy work than a simple page, and a portal takes more than an informational site. So we quote after we know you: on the free call we work out what you need, then you get a fixed price, scope and dates in writing.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We work online with companies in Charlotte, Raleigh, Durham, Greensboro, Wilmington and the rest of the state. One team researches, writes, designs and builds, and you can meet them further down this page.' },
          { question: 'Can you explain a scientific or highly technical product?', answer: 'Yes. We talk with the people who created it, translate it into what matters to your buyer, and hand the copy to your team to check accuracy. Nothing goes live without that review.' },
          { question: 'Do you sign NDAs?', answer: 'Yes, from the start, if your project involves data or technology that isn’t public yet. And confidential information doesn’t go through AI tools.' },
          { question: 'What hours do you work?', answer: 'One hour behind North Carolina in winter and two in summer. Meetings fit easily into your workday, and between them we move forward with reviews you can look at on your own schedule.' },
          { question: 'Do you offer SEO for specialized companies in North Carolina?', answer: 'Yes, basic SEO comes with the site: titles, descriptions, speed and structured data. If you want pages for each problem you solve, written the way your customer searches for it rather than the way your lab names it, we do that too, as advanced SEO, quoted separately. Advanced SEO also covers optimizing the site so AI tools understand what you do accurately.' },
          { question: 'Do you do web design in Charlotte, Raleigh and Durham?', answer: 'Yes, and in Greensboro, Winston-Salem and Asheville. We work online across the state, and it’s just as simple for a bank in Uptown Charlotte as for a science company in the Research Triangle.' },
          { question: 'Do you build websites for small businesses in North Carolina?', answer: 'Yes, including young tech or science companies with a small team. We help you say clearly what you do, on a site sized for where you are today, at a price you know from the start.' },
          ...commonFaq('en', 'copy', 'time'),
        ],
      },
      cta: { titleLead: 'Explain what you sell in North Carolina', titleAccent: 'and we’ll hand it back clearer.' },
      linkLabel: 'North Carolina websites',
      serviceName: 'Web Design and UX/UI for North Carolina Companies',
      howToDescription: 'The steps a North Carolina company takes with Aurin from a product that’s hard to explain to a clear, published site.',
    },
  },
};
