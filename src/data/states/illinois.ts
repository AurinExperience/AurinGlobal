import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Illinois: empresas que venden a empresas (Chicago, manufactura, logística, agroindustria). Comprador serio, ciclo largo. */
export const illinois: State = {
  id: 'illinois',
  status: 'live',
  slug: 'illinois',
  name: 'Illinois',
  geo: { latitude: 40.6331, longitude: -89.3985 },
  areas: ['Chicago', 'Naperville', 'Schaumburg', 'Rockford', 'Peoria', 'Moline', 'Springfield', 'Champaign'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Illinois | Precio cerrado | Aurin',
        description: 'Páginas web, SEO y plataformas para empresas de Illinois que venden a otras empresas, de Chicago a Peoria. Ves el diseño antes de programar. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Illinois',
        titleAccent: 'para empresas que venden a otras empresas.',
        description: 'Sitios y plataformas para fábricas, distribuidores y firmas de servicios de Illinois, con precio cerrado y el diseño a la vista antes de programar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu empresa en Illinois ya vende bien. *Tu sitio todavía no lo demuestra.*',
        intro: 'Contrata solo lo que te falta o todo con el mismo equipo. Lleva SEO desde el inicio y usamos IA para avanzar más rápido, con un experto a cargo de cada parte.',
        items: {
          'web-design': { text: 'Antes de pedirte una cotización, el área de compras entra a tu sitio. Si parece de hace quince años, te descarta sin decírtelo. Lo rehacemos para que muestre tamaño, experiencia y a quién le trabajas.', tags: 'Sitio corporativo · Rediseño · SEO' },
          'web-development': { text: 'Pedidos por correo, inventario en Excel y clientes que llaman para saber dónde va su entrega. Construimos el portal que les responde solo y lo conectamos con el sistema que ya tienes.', tags: 'Portal de clientes · Pedidos · Conexiones' },
          'ux-ui-design': { text: 'Tu software interno o tu plataforma funciona, pero capacitar a alguien nuevo toma semanas. Observamos a la gente usándola y rediseñamos las pantallas que causan más errores y llamadas.', tags: 'Observación de uso · Prototipos · Sistemas internos' },
          branding: { text: 'Fusiones, un cambio de generación o una línea de negocio nueva dejan a la marca contando otra historia. La ordenamos para que clientes, candidatos e inversionistas entiendan quién eres hoy.', tags: 'Estrategia · Logo e identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Diseño web para los giros *fuertes de Illinois.*',
        intro: 'Clientes reales de Aurin en sectores con mucho peso en el estado. Entra a cada industria para ver el detalle.',
        items: [
          { name: 'Logística y construcción', text: 'Plataformas de pedidos y seguimiento para distribuidores y materiales, en el estado donde se cruzan buena parte de los trenes de carga del país.', clients: 'Grupo Estrella' },
          { name: 'Fintech y finanzas', text: 'Para un mercado que nació entre bolsas de futuros: pantallas donde los números y los riesgos se entienden sin leer un manual.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Energía', text: 'Sitios para explicar proyectos, permisos y avance a socios y comunidades, con datos en la página y no en un anexo.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Salud', text: 'Redes y consultorios con servicios, cobertura y contacto fáciles de encontrar, en un área con mucha oferta para comparar.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Educación', text: 'Sistemas de alumnos, clases y pagos para instituciones que hoy los llevan en varias herramientas sueltas.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Cultura y ciencia', text: 'Sitios para que orquestas e instituciones llenen sus salas y expliquen lo que hacen a un público nuevo.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Trabajo real, *en línea y con nombre.*',
        ids: ['grupo-estrella', 'ancient', 'mineria', 'mexico-pacific'],
      },
      cities: {
        heading: 'De Chicago a los campos: *cada zona de Illinois compra distinto.*',
        intro: 'El área de Chicago tiene unas 30 sedes de Fortune 500 (RealPage, 2026), pero buena parte de la economía del estado está en fábricas y maquinaria lejos del lago.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Chicago', tags: 'Corporativos · Finanzas · Servicios', need: 'Directivos y compras de grandes empresas, con varios proveedores en la mesa y una lista de requisitos antes de la primera llamada.', build: 'Casos, sectores y forma de trabajo a la vista, con una imagen que no desentone frente a competidores del Loop.' },
          { name: 'Suburbios de Chicago', tags: 'Distribución · Tecnología · Salud', need: 'Empresas medianas de Naperville, Schaumburg y alrededores, a menudo familiares, que crecieron más rápido que su sitio.', build: 'Un rediseño ordenado por línea de negocio y un portal si tus clientes ya piden seguir sus pedidos en línea.' },
          { name: 'Rockford', tags: 'Manufactura · Aeroespacial · Herramientas', need: 'Ingenieros y compradores técnicos que buscan capacidad, tolerancias y certificaciones, y que casi nunca llenan un formulario sin ver eso.', build: 'Fichas de capacidades, equipos y certificaciones descargables, y una solicitud de cotización que acepte planos.' },
          { name: 'Peoria y Quad Cities', tags: 'Maquinaria · Agroindustria · Proveedores', need: 'Proveedores de la industria de maquinaria que quieren crecer más allá de un solo gran cliente y necesitan verse en otros mercados.', build: 'Un sitio que explique a qué industrias sirves, con textos claros para quien no conoce tu nombre en la región.' },
          { name: 'Springfield y Champaign', tags: 'Gobierno · Universidad · Investigación', need: 'Proveedores del estado y empresas nacidas de la investigación universitaria, que deben explicar algo técnico a quien firma el presupuesto.', build: 'Textos sin jerga, accesibilidad cuidada y páginas para cada tipo de lector: técnico, comprador e inversionista.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Antes de contratar, *en Illinois nos preguntan esto.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Illinois?', answer: 'Un sitio corporativo y un portal conectado a tu sistema son proyectos muy distintos, así que no damos una cifra sin conocerte. Tras la llamada gratis recibes una propuesta con precio cerrado, alcance y fechas, lista para pasarla a quien aprueba compras en tu empresa.' },
          { question: '¿Dónde trabaja su equipo?', answer: 'En Cuernavaca, México, desde 1998. Atendemos en línea a empresas de Chicago, Naperville, Rockford, Peoria y el resto de Illinois. Es un solo equipo que investiga, diseña y programa, y más abajo puedes ver quiénes son.' },
          { question: '¿Pueden conectar el sitio con mi ERP o mi sistema de pedidos?', answer: 'Sí, cuando tu sistema permite conectarse. Primero revisamos qué tienes y qué datos conviene mostrar, para que tus clientes vean pedidos o inventario sin que nadie los capture dos veces. Si no se puede conectar directo, te lo decimos antes de cotizar.' },
          { question: '¿Qué pasa si mi sitio usa huella digital o reconocimiento facial?', answer: 'Hay que revisarlo con cuidado: la Biometric Information Privacy Act de Illinois (BIPA) exige avisar y obtener consentimiento por escrito antes de recolectar datos biométricos. Diseñamos ese paso dentro del flujo o buscamos una alternativa sin biometría. Tu asesor confirma cómo te aplica.' },
          { question: '¿Trabajan en mi horario?', answer: 'Sí. En invierno tenemos la misma hora que Illinois y en verano vamos una hora atrás, así que las reuniones caben sin problema en tu día.' },
          { question: '¿Ofrecen SEO para empresas que venden a otras empresas en Illinois?', answer: 'Sí, aunque distinto: pocas búsquedas, pero de mucho valor. Atacamos lo que escribe un comprador que ya sabe lo que necesita, con páginas por servicio y sector, en vez de perseguir tráfico que nunca te va a comprar.' },
          { question: '¿Pueden hacer una versión en español para mi planta o mis clientes?', answer: 'Sí. Es útil en el área de Chicago, sobre todo para reclutar o atender a clientes hispanos. La escribimos aparte y configuramos el sitio para que Google muestre a cada quien su idioma.' },
          { question: '¿Hacen diseño web en Chicago y en los suburbios?', answer: 'Sí: Chicago, Naperville, Schaumburg y el resto del área metropolitana, además de Rockford y Peoria. Como todo se hace en línea y en tu horario, el proyecto avanza igual en un edificio del Loop que en una planta de las afueras.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Illinois?', answer: 'Sí, incluidos talleres, distribuidores y firmas familiares que venden a otras empresas. Muchas veces alcanza con un sitio corto que explique bien qué haces y facilite pedir cotización. Te damos el precio antes de empezar.' },
          ...commonFaq('es', 'payment', 'support'),
        ],
      },
      cta: { titleLead: 'Cuéntanos a quién le vendes en Illinois', titleAccent: 'y te decimos qué necesita ver antes de llamarte.' },
      linkLabel: 'Diseño de sitios en Illinois',
      serviceName: 'Diseño web y plataformas para empresas de Illinois',
      howToDescription: 'Cómo avanza con Aurin el sitio o la plataforma de una empresa de Illinois, desde el primer contacto hasta salir en línea.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Illinois | Fixed Price | Aurin',
        description: 'Websites, SEO and platforms for Illinois companies that sell to other businesses, from Chicago to Peoria. See the design before we build. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Illinois',
        titleAccent: 'for companies that sell to other companies.',
        description: 'Websites and platforms for Illinois manufacturers, distributors and service firms, with a fixed price and the design in hand before we build.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your Illinois company already sells well. *Your website doesn’t show it yet.*',
        intro: 'Hire us for the piece you’re missing, or all of it with one team. SEO is built in from the start, and we use AI to move faster, with an expert in charge of every part.',
        items: {
          'web-design': { text: 'Before they ask for a quote, procurement checks your site. If it looks fifteen years old, they cross you off and never mention it. We rebuild it to show your size, your experience and who you work with.', tags: 'Corporate websites · Redesigns · SEO' },
          'web-development': { text: 'Orders by email, inventory in Excel and customers calling to track a delivery. We build the portal that answers them automatically and connect it to the system you already run.', tags: 'Customer portals · Ordering · Integrations' },
          'ux-ui-design': { text: 'Your internal software or platform works, but training a new hire takes weeks. We watch people use it and redesign the screens behind the most errors and support calls.', tags: 'Usage research · Prototypes · Internal tools' },
          branding: { text: 'A merger, a new generation in charge or a new business line can leave your brand telling an old story. We sort it out so customers, recruits and investors understand who you are today.', tags: 'Strategy · Logo and identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Web design for *Illinois’ strongest industries.*',
        intro: 'Real Aurin clients in sectors that carry weight in the state. Open an industry for the details.',
        items: [
          { name: 'Logistics and construction', text: 'Ordering and tracking platforms for distributors and materials suppliers, in the state where so much of the nation’s rail freight crosses paths.', clients: 'Grupo Estrella' },
          { name: 'Fintech and finance', text: 'For a market that grew up around futures exchanges: screens where numbers and risk make sense without a manual.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Energy', text: 'Sites that explain projects, permits and progress to partners and communities, with the data on the page rather than in an appendix.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Healthcare', text: 'Networks and practices with services, coverage and contact details that are easy to find in a crowded market.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Education', text: 'Student, class and tuition systems for institutions that juggle several disconnected tools today.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Culture and science', text: 'Sites that help orchestras and institutions fill their halls and explain their work to new audiences.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Real work, *live and with names on it.*',
        ids: ['grupo-estrella', 'ancient', 'mineria', 'mexico-pacific'],
      },
      cities: {
        heading: 'From Chicago to farm country: *each part of Illinois buys differently.*',
        intro: 'The Chicago area has about 30 Fortune 500 headquarters (RealPage, 2026), but much of the state’s economy runs on factories and machinery far from the lake.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Chicago', tags: 'Corporate · Finance · Services', need: 'Executives and procurement at large companies, with several vendors on the table and a checklist before the first call.', build: 'Case studies, sectors and your way of working up front, with a look that holds its own next to competitors in the Loop.' },
          { name: 'Chicago suburbs', tags: 'Distribution · Technology · Healthcare', need: 'Mid-size firms in Naperville, Schaumburg and nearby, often family-owned, that grew faster than their website did.', build: 'A redesign organized by business line, and a portal if customers already ask to track orders online.' },
          { name: 'Rockford', tags: 'Manufacturing · Aerospace · Tooling', need: 'Engineers and technical buyers looking for capacity, tolerances and certifications, who rarely fill out a form without seeing them.', build: 'Downloadable capability sheets, equipment lists and certifications, plus a quote request that accepts drawings.' },
          { name: 'Peoria and the Quad Cities', tags: 'Machinery · Agribusiness · Suppliers', need: 'Suppliers to the machinery industry that want to grow beyond one big customer and need to be found in other markets.', build: 'A site that spells out which industries you serve, in plain words for people who don’t know your name in the region.' },
          { name: 'Springfield and Champaign', tags: 'Government · University · Research', need: 'State vendors and university spinouts that have to explain something technical to the person who signs the budget.', build: 'Copy free of jargon, careful accessibility, and pages for each reader: technical, purchasing and investor.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Before they sign, *Illinois companies ask us this.*',
        items: [
          { question: 'How much does a website cost in Illinois?', answer: 'A corporate site and a portal tied into your system are very different jobs, so we don’t quote a figure before we know you. After a free call you get a proposal with a fixed price, scope and dates, ready to hand to whoever approves purchases at your company.' },
          { question: 'Where does your team work?', answer: 'In Cuernavaca, Mexico, since 1998. We work online with companies in Chicago, Naperville, Rockford, Peoria and the rest of Illinois. One team researches, designs and builds, and you can see who they are further down this page.' },
          { question: 'Can you connect my website to my ERP or ordering system?', answer: 'Yes, when your system allows it. We first review what you have and which data is worth showing, so customers see orders or inventory without anyone typing it twice. If a direct connection isn’t possible, we tell you before we quote.' },
          { question: 'What if my site uses fingerprints or face recognition?', answer: 'That needs care: the Illinois Biometric Information Privacy Act (BIPA) requires notice and written consent before collecting biometric data. We design that step into the flow or find a route without biometrics. Your advisor confirms how it applies to you.' },
          { question: 'Do you work during my hours?', answer: 'Yes. In winter we’re on the same time as Illinois and in summer we’re one hour behind, so meetings fit easily into your day.' },
          { question: 'Do you offer SEO for B2B companies in Illinois?', answer: 'Yes, but differently: fewer searches, each worth far more. We go after what a buyer types once they know what they need, with pages by service and sector, instead of chasing traffic that will never buy.' },
          { question: 'Do you do web design in Chicago and the suburbs?', answer: 'Yes: Chicago, Naperville, Schaumburg and the rest of the metro area, plus Rockford and Peoria. Since everything happens online and during your hours, the project moves the same from a Loop office or a plant out in the suburbs.' },
          { question: 'Do you build websites for small businesses in Illinois?', answer: 'Yes, including machine shops, distributors and family firms selling to other businesses. Often a short site that explains what you do and makes it easy to request a quote is plenty. You get the price before we start.' },
          ...commonFaq('en', 'payment', 'support'),
        ],
      },
      cta: { titleLead: 'Tell us who you sell to in Illinois', titleAccent: 'and we’ll tell you what they need to see before calling.' },
      linkLabel: 'Illinois website design',
      serviceName: 'Web Design and Platforms for Illinois Companies',
      howToDescription: 'How an Illinois company’s website or platform moves forward with Aurin, from first contact to going live.',
    },
  },
};
