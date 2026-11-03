import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Minnesota: grandes corporativos en las Twin Cities, tecnología médica y Mayo Clinic. Ángulo: proveedores que le venden a áreas de compras grandes. */
export const minnesota: State = {
  id: 'minnesota',
  status: 'live',
  publishAt: '2026-11-06T06:00:00-06:00',
  slug: 'minnesota',
  name: 'Minnesota',
  geo: { latitude: 46.7296, longitude: -94.6859 },
  areas: ['Minneapolis', 'Saint Paul', 'Bloomington', 'Eden Prairie', 'Rochester', 'Duluth', 'St. Cloud', 'Mankato'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Minnesota | Precio cerrado | Aurin',
        description: 'Páginas web y plataformas para empresas de Minnesota, de Minneapolis a Rochester, con SEO básico o avanzado. Precio cerrado por escrito. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Minnesota',
        titleAccent: 'para pasar la revisión de un área de compras.',
        description: 'Sitios y plataformas para proveedores y empresas de Minnesota que le venden a corporativos, con los datos que un comprador revisa antes de escribirte.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Antes de invitarte a cotizar, *alguien de compras ya revisó tu sitio.*',
        intro: 'Puedes empezar por una sola parte o hacer todo con un mismo equipo. Usamos IA para avanzar más rápido, un experto revisa cada entrega y el SEO básico ya está incluido.',
        items: {
          'web-design': { text: 'Target, Best Buy, 3M y General Mills tienen su sede en el área de las Twin Cities, y a su alrededor vive una larga cadena de proveedores. Hacemos un sitio que diga rápido qué haces, para quién y con qué respaldo.', tags: 'Sitio de empresa · Capacidades · SEO básico' },
          'web-development': { text: 'Portales para clientes y distribuidores, formularios que llegan a la persona correcta y conexiones con tu sistema. Si tu proceso aún depende de correos y hojas de cálculo, empezamos por ahí.', tags: 'Portales · Sistemas a la medida · Conexiones' },
          'ux-ui-design': { text: 'Una herramienta médica o una plataforma interna la usan personas con prisa y poca paciencia para pantallas confusas. Revisamos dónde se atoran y te mostramos un prototipo antes de programar.', tags: 'Revisión de uso · Prototipos · Plataformas' },
          branding: { text: 'Cuando tu empresa creció comprando otras, suele quedarse con tres nombres y cuatro logos. Ordenamos la marca para que clientes, candidatos y socios entiendan que es una sola compañía.', tags: 'Estrategia de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Sectores con peso en Minnesota, *donde tenemos experiencia.*',
        intro: 'Clientes reales de Aurin en giros relevantes para el estado. Abre cada industria para ver el detalle.',
        items: [
          { name: 'Salud', text: 'Entre Mayo Clinic y las empresas de tecnología médica, el estado vive de la salud. Información clara y citas fáciles de pedir.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech y finanzas', text: 'Productos financieros donde cada monto y cada comisión tienen que entenderse antes de confirmar.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Desarrollo de software', text: 'Empresas de software que le venden a corporativos y tienen que convencer a más de una persona.', clients: 'Ancient', page: 'software' },
          { name: 'Energía', text: 'Proyectos que tienen que explicarse a inversionistas, autoridades y comunidades.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Educación', text: 'Cursos y plataformas de capacitación, con inscripciones y pagos en línea.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Minnesota tiene una vida filantrópica muy activa. Sitios que explican la causa y reciben donativos en pocos pasos.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Trabajo real, *abierto para que lo revises.*',
        ids: ['ancient', 'mexico-pacific', 'fruit-academy', 'ciencia'],
      },
      cities: {
        heading: 'De las Twin Cities a Duluth: *qué le conviene a tu sitio en cada parte de Minnesota.*',
        intro: 'Casi toda la actividad corporativa se concentra alrededor de Minneapolis y Saint Paul. Fuera de ahí, Rochester vive de la medicina, Duluth de su puerto y el resto del estado, de la industria y el campo.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Minneapolis y Saint Paul', tags: 'Comercio · Finanzas · Servicios', need: 'Áreas de compras y mercadotecnia de grandes empresas, que piden experiencia y seguridad antes de hablar contigo.', build: 'Casos reales, capacidades claras y una sección de seguridad y datos fácil de encontrar.' },
          { name: 'Bloomington, Eden Prairie y Minnetonka', tags: 'Seguros de salud · Tecnología · Corporativos', need: 'Compañías de servicios y tecnología en los suburbios, que compiten por clientes y por talento.', build: 'Un mensaje directo, una demo o contacto a un clic y una sección de empleo bien cuidada.' },
          { name: 'Rochester', tags: 'Medicina · Investigación · Dispositivos', need: 'Médicos e investigadores que evalúan una empresa por su evidencia, no por sus adjetivos.', build: 'Información técnica ordenada, referencias a la vista y textos que tu equipo revisa antes de publicar.' },
          { name: 'Duluth y la Iron Range', tags: 'Puerto · Minería · Turismo', need: 'Proveedores industriales y negocios de temporada junto al lago Superior.', build: 'Servicios y capacidades claras para quien compra, y reservas simples para quien visita.' },
          { name: 'St. Cloud y Mankato', tags: 'Manufactura · Agroindustria · Universidades', need: 'Fabricantes y empresas familiares que venden fuera del estado y buscan personal joven.', build: 'Catálogo o fichas técnicas, cotización sencilla y una página de empleo que se entienda en el celular.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Dudas de empresas de Minnesota, *resueltas sin rodeos.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Minnesota?', answer: 'Depende de lo que necesite tu empresa: pocas páginas o un portal conectado con tu sistema cambian mucho el presupuesto. Después de una llamada gratis recibes un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en Minneapolis, Saint Paul y Rochester?', answer: 'Sí, y en Bloomington, Eden Prairie, Duluth, St. Cloud y Mankato. Trabajamos en línea con todo Minnesota.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Minnesota?', answer: 'Sí. Si eres proveedor o negocio familiar, puede bastar un sitio corto que explique qué haces y para quién. Te lo decimos en la llamada, y sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. En invierno tenemos la misma hora que Minnesota y en verano vamos una hora atrás, así que nos reunimos en tu horario de trabajo. El equipo sale más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Minnesota?', answer: 'Puede que sí. La Minnesota Consumer Data Privacy Act está vigente desde julio de 2025 y depende de cuántos datos de consumidores del estado manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y las opciones de datos y cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden responder el cuestionario de proveedores de un corporativo?', answer: 'Te ayudamos con lo que toca al sitio o a la plataforma que hagamos, como dónde se aloja y qué datos pide. Lo que toca a tu empresa, como seguros o políticas internas, lo responde tu equipo. Si hay un requisito que no podemos cumplir, te lo decimos antes de empezar.' },
          { question: '¿Ofrecen SEO para empresas de Minnesota?', answer: 'Sí. El básico viene incluido: títulos, descripciones, velocidad y datos estructurados. Si buscas contenidos, páginas por servicio o que tu sitio esté optimizado para buscadores con IA, es SEO avanzado y lo cotizamos aparte.' },
          ...commonFaq('es', 'payment', 'redesign'),
        ],
      },
      cta: { titleLead: 'Cuéntanos a quién le vende tu empresa en Minnesota', titleAccent: 'y qué revisan antes de comprarte.' },
      linkLabel: 'Páginas web para empresas de Minnesota',
      serviceName: 'Diseño web y plataformas para empresas de Minnesota',
      howToDescription: 'Cómo pasa con Aurin una empresa de Minnesota del primer mensaje a un sitio o plataforma publicada, con el diseño aprobado antes de programar.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Minnesota | Fixed Price | Aurin',
        description: 'Websites and platforms for Minnesota companies, from Minneapolis to Rochester, with basic or advanced SEO. A fixed price in writing. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Minnesota',
        titleAccent: 'for getting past a procurement review.',
        description: 'Websites and platforms for Minnesota suppliers and companies selling to corporations, with the facts a buyer checks before reaching out.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Before you’re invited to bid, *someone in procurement has read your website.*',
        intro: 'Start with one piece or do it all with one team. We use AI to move faster, an expert reviews every delivery, and basic SEO is already included.',
        items: {
          'web-design': { text: 'Target, Best Buy, 3M and General Mills are based in the Twin Cities area, with a long chain of suppliers around them. We build a site that says quickly what you do, who for and what stands behind it.', tags: 'Company websites · Capabilities · Basic SEO' },
          'web-development': { text: 'Portals for customers and distributors, forms that reach the right person and connections to your system. If your process still runs on email and spreadsheets, that’s where we start.', tags: 'Portals · Custom systems · Integrations' },
          'ux-ui-design': { text: 'A medical tool or an internal platform gets used by people in a hurry with little patience for confusing screens. We review where they get stuck and show you a prototype before any code.', tags: 'Usage review · Prototypes · Platforms' },
          branding: { text: 'When a company grows by acquisition, it often ends up with three names and four logos. We sort out the brand so customers, candidates and partners see one company.', tags: 'Brand strategy · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Sectors with weight in Minnesota, *where we have experience.*',
        intro: 'Real Aurin clients in fields relevant to the state. Open an industry for the details.',
        items: [
          { name: 'Healthcare', text: 'Between Mayo Clinic and the medical technology companies, this state lives on healthcare. Clear information and appointments that are easy to request.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech and finance', text: 'Financial products where every amount and fee has to make sense before people confirm.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Software development', text: 'Software companies selling to corporations, who have to convince more than one person.', clients: 'Ancient', page: 'software' },
          { name: 'Energy', text: 'Projects that have to be explained to investors, authorities and communities.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Education', text: 'Courses and training platforms, with enrollment and payments online.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Minnesota has a very active philanthropic life. Sites that explain the cause and take donations in a few steps.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Real work, *open for you to review.*',
        ids: ['ancient', 'mexico-pacific', 'fruit-academy', 'ciencia'],
      },
      cities: {
        heading: 'From the Twin Cities to Duluth: *what your site needs across Minnesota.*',
        intro: 'Most corporate activity sits around Minneapolis and Saint Paul. Beyond that, Rochester lives on medicine, Duluth on its port, and the rest of the state on industry and agriculture.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Minneapolis and Saint Paul', tags: 'Retail · Finance · Services', need: 'Purchasing and marketing teams at large companies, who ask about experience and security before talking to you.', build: 'Real case studies, clear capabilities and a security and data section that’s easy to find.' },
          { name: 'Bloomington, Eden Prairie and Minnetonka', tags: 'Health insurance · Technology · Corporate', need: 'Service and tech companies in the suburbs, competing for customers and talent.', build: 'A direct message, a demo or contact one click away and a careful careers section.' },
          { name: 'Rochester', tags: 'Medicine · Research · Devices', need: 'Doctors and researchers who judge a company by its evidence, not its adjectives.', build: 'Organized technical information, references in view and copy your team reviews before it goes live.' },
          { name: 'Duluth and the Iron Range', tags: 'Port · Mining · Tourism', need: 'Industrial suppliers and seasonal businesses on Lake Superior.', build: 'Clear services and capabilities for buyers, and simple booking for visitors.' },
          { name: 'St. Cloud and Mankato', tags: 'Manufacturing · Agribusiness · Universities', need: 'Manufacturers and family firms selling out of state and looking for young staff.', build: 'A catalog or spec sheets, simple quotes and a careers page that works on a phone.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from Minnesota companies, *answered plainly.*',
        items: [
          { question: 'How much does a website cost in Minnesota?', answer: 'It depends on what your company needs: a few pages or a portal connected to your system change the budget a lot. After a free call you get a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Minneapolis, Saint Paul and Rochester?', answer: 'Yes, and in Bloomington, Eden Prairie, Duluth, St. Cloud and Mankato. We work online across Minnesota.' },
          { question: 'Do you build websites for small businesses in Minnesota?', answer: 'Yes. If you’re a supplier or a family business, a short site that explains what you do and who for may be enough. We’ll tell you on the call, and you know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. In winter we share Minnesota’s time and in summer we’re one hour behind, so we meet during your working hours. You can see the team further down this page.' },
          { question: 'Does my company need to comply with the Minnesota privacy law?', answer: 'It might. The Minnesota Consumer Data Privacy Act has been in force since July 2025 and depends on how much state consumer data you handle. If it does, we add the privacy notice your advisor defines, plus data and cookie options. Your advisor confirms whether it applies.' },
          { question: 'Can you help with a corporate vendor questionnaire?', answer: 'We help with what concerns the site or platform we build, such as where it’s hosted and what data it collects. What concerns your company, like insurance or internal policies, is for your team to answer. If there’s a requirement we can’t meet, we’ll tell you before we start.' },
          { question: 'Do you offer SEO for Minnesota companies?', answer: 'Yes. The basics are included: titles, descriptions, speed and structured data. If you’re after content, pages by service or optimizing your site for AI search, that’s advanced SEO, quoted separately.' },
          ...commonFaq('en', 'payment', 'redesign'),
        ],
      },
      cta: { titleLead: 'Tell us who your Minnesota company sells to', titleAccent: 'and what they check before buying.' },
      linkLabel: 'Websites for Minnesota companies',
      serviceName: 'Web Design and Platforms for Minnesota Companies',
      howToDescription: 'How a Minnesota company goes with Aurin from first message to a live site or platform, with the design approved before the build.',
    },
  },
};
