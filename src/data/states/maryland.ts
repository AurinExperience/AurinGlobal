import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Maryland: biotecnología en el corredor I-270, proveedores federales, Johns Hopkins y el puerto de Baltimore. Ángulo: hacer entendible algo complejo. */
export const maryland: State = {
  id: 'maryland',
  status: 'live',
  publishAt: '2026-11-06T06:00:00-06:00',
  slug: 'maryland',
  name: 'Maryland',
  geo: { latitude: 39.0458, longitude: -76.6413 },
  areas: ['Baltimore', 'Bethesda', 'Rockville', 'Columbia', 'Annapolis', 'Frederick', 'Silver Spring', 'Ocean City'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Maryland | Desde 1998 | Aurin',
        description: 'Diseño web y plataformas para empresas de Maryland, de Baltimore a Bethesda, con SEO básico o avanzado. Precio cerrado y el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Maryland',
        titleAccent: 'para que lo técnico se entienda sin simplificarlo de más.',
        description: 'Sitios y plataformas para empresas de ciencia, tecnología y servicios en Maryland, con textos que tu equipo revisa y un precio cerrado desde el inicio.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Tu lector es experto en su tema, *no en el tuyo.*',
        intro: 'Haz una parte o todo el proyecto, siempre con el mismo equipo. La IA nos ayuda a avanzar más rápido, con un experto que revisa todo, y el SEO básico ya va incluido.',
        items: {
          'web-design': { text: 'Inversionistas, oficiales de compras y médicos llegan a tu sitio con poco tiempo. Hacemos que encuentren rápido qué resuelves, con qué respaldo y con quién hablar, y tu equipo revisa la precisión de cada texto.', tags: 'Sitio de empresa · Textos técnicos · SEO básico' },
          'web-development': { text: 'Portales para clientes, áreas privadas con permisos, sistemas de solicitudes y conexiones con tus herramientas. Definimos juntos qué va abierto y qué va detrás de un usuario y contraseña.', tags: 'Portales · Áreas privadas · Conexiones' },
          'ux-ui-design': { text: 'Una plataforma científica o de gobierno puede estar bien hecha y aun así confundir a quien la usa. Revisamos con usuarios dónde se pierden y rediseñamos esos pasos antes de programar.', tags: 'Revisión con usuarios · Prototipos · Plataformas' },
          branding: { text: 'Cuando la empresa nace en un laboratorio o en un contrato, la marca suele quedar para después. La hacemos cuando toca buscar socios o inversión, sin promesas que tu equipo científico no firmaría.', tags: 'Nombre · Identidad · Guía de marca' },
        },
      },
      sectors: {
        heading: 'Sectores que pesan en Maryland *y donde tenemos experiencia.*',
        intro: 'Son clientes reales de Aurin en giros importantes aquí. Cada industria lleva a su página.',
        items: [
          { name: 'Salud', text: 'Alrededor de Johns Hopkins y los institutos federales de salud hay mucha atención médica especializada. Servicios claros y citas fáciles de pedir.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Cultura y ciencia', text: 'Instituciones que explican temas complejos a públicos muy distintos.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Desarrollo de software', text: 'Empresas de software y ciberseguridad cerca de Washington, con un producto difícil de explicar en una frase.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech y finanzas', text: 'Productos financieros donde el usuario tiene que entender cada monto antes de confirmar.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Educación', text: 'Cursos y plataformas para capacitar, con inscripciones y pagos en línea.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Fundaciones y ONG', text: 'Muchas organizaciones trabajan en esta región. Sitios que explican la causa y reciben donativos en pocos pasos.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Proyectos reales, *publicados y a la vista.*',
        ids: ['ciencia', 'mineria', 'ancient', 'mexico-pacific'],
      },
      cities: {
        heading: 'De Baltimore a la costa: *qué le conviene a tu sitio en cada parte de Maryland.*',
        intro: 'Es un estado chico con compradores muy distintos: la orilla de Washington vive de contratos y ciencia, Baltimore de su puerto y sus hospitales, y la costa del verano.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Bethesda, Rockville y el corredor I-270', tags: 'Biotecnología · Salud · Corporativos', need: 'Socios, inversionistas y candidatos que evalúan tu ciencia y tu equipo antes de escribirte.', build: 'Tu ciencia explicada por niveles, tu equipo y tus publicaciones a la vista, y una sección de empleo clara.' },
          { name: 'Baltimore', tags: 'Salud · Puerto · Universidades', need: 'Proveedores de hospitales y del puerto, y empresas que nacen cerca de las universidades.', build: 'Servicios y capacidades claras, con un contacto que llegue a la persona correcta.' },
          { name: 'Columbia y Fort Meade', tags: 'Ciberseguridad · Tecnología · Contratistas', need: 'Empresas de tecnología que le venden a gobierno y a grandes contratistas.', build: 'Una página de capacidades ordenada, certificaciones y códigos a la mano, y textos sobrios.' },
          { name: 'Annapolis', tags: 'Gobierno estatal · Náutica · Turismo', need: 'Proveedores del estado y negocios náuticos y de visitantes junto a la bahía de Chesapeake.', build: 'Información formal para quien compra y reservas o contacto simples para quien visita.' },
          { name: 'Frederick', tags: 'Biotecnología · Manufactura · Servicios', need: 'Empresas de ciencia y producción que crecen fuera de la zona más cara de la región.', build: 'Capacidades y ubicación claras, con una solicitud de información sencilla.' },
          { name: 'Ocean City y la costa este', tags: 'Turismo · Temporada · Agroindustria', need: 'Familias que planean sus vacaciones desde el teléfono y negocios con pocos meses fuertes.', build: 'Reservas simples, disponibilidad al día y fotos reales del lugar.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas frecuentes de empresas *en Maryland.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Maryland?', answer: 'Un sitio que explica tu ciencia y una plataforma con áreas privadas son trabajos muy distintos, así que no damos una cifra a ciegas. En una llamada gratis vemos qué necesitas y te enviamos un precio cerrado por escrito, con alcance y fechas.' },
          { question: '¿Hacen diseño web en Baltimore, Bethesda y Rockville?', answer: 'Sí, y en Columbia, Annapolis, Frederick, Silver Spring y Ocean City. Trabajamos en línea con todo Maryland.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Maryland?', answer: 'Sí, también para empresas de servicios y startups que apenas salen del laboratorio. Te decimos qué conviene hacer primero y qué puede esperar, y sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Lo decimos desde el inicio porque en algunos contratos importa: si exigen personal en Estados Unidos o acceso a información clasificada, no somos la opción. Para todo lo demás, nos reunimos en tu horario, una hora atrás en invierno y dos en verano.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Maryland?', answer: 'Puede que sí. La Maryland Online Data Privacy Act está vigente desde octubre de 2025 y alcanza a empresas desde 35,000 consumidores del estado, con reglas estrictas para datos sensibles. Si te aplica, integramos el aviso de privacidad que defina tu asesor y el control de cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Pueden explicar bien un producto científico?', answer: 'Lo intentamos con quien lo creó: nos explica el tema, proponemos cómo decirlo a tu comprador y tu equipo corrige lo que haga falta. Nada se publica sin que lo revisen ustedes.' },
          { question: '¿Ofrecen SEO para empresas de Maryland?', answer: 'Sí. Cada sitio incluye el básico: títulos, descripciones, velocidad y datos estructurados. Las páginas por tema o capacidad y la optimización para buscadores con IA son SEO avanzado y se cotizan aparte.' },
          ...commonFaq('es', 'support', 'payment'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué hace tu empresa en Maryland', titleAccent: 'y a quién le cuesta entenderlo.' },
      linkLabel: 'Páginas web para empresas de Maryland',
      serviceName: 'Diseño web y plataformas para empresas de Maryland',
      howToDescription: 'Cómo pasa con Aurin una empresa de Maryland del primer mensaje a un sitio o plataforma publicada, con textos revisados por su equipo.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Maryland | Since 1998 | Aurin',
        description: 'Web design and platforms for Maryland companies, from Baltimore to Bethesda, with basic or advanced SEO. A fixed price and the design first. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Maryland',
        titleAccent: 'that makes technical work clear without dumbing it down.',
        description: 'Websites and platforms for science, technology and service companies in Maryland, with copy your team reviews and a fixed price from the start.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'Your reader is an expert in their field, *not in yours.*',
        intro: 'Do one piece or the whole project, always with the same team. AI helps us move faster, with an expert reviewing everything, and basic SEO is already included.',
        items: {
          'web-design': { text: 'Investors, contracting officers and doctors reach your site short on time. We help them find quickly what you solve, what backs it and who to talk to, and your team checks the accuracy of every line.', tags: 'Company websites · Technical copy · Basic SEO' },
          'web-development': { text: 'Customer portals, private areas with permissions, request systems and connections to your tools. We decide together what stays open and what sits behind a login.', tags: 'Portals · Private areas · Integrations' },
          'ux-ui-design': { text: 'A scientific or government platform can be well built and still confuse the people using it. We review with users where they get lost and redesign those steps before any code.', tags: 'User reviews · Prototypes · Platforms' },
          branding: { text: 'When a company starts in a lab or on a contract, the brand tends to wait. We build it when it’s time to look for partners or funding, with no claims your scientists wouldn’t sign.', tags: 'Naming · Identity · Brand guidelines' },
        },
      },
      sectors: {
        heading: 'Sectors with weight in Maryland *where we have experience.*',
        intro: 'These are real Aurin clients in fields important here. Each industry links to its page.',
        items: [
          { name: 'Healthcare', text: 'Around Johns Hopkins and the federal health institutes there’s a lot of specialized care. Clear services and appointments that are easy to request.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Culture and science', text: 'Institutions explaining complex subjects to very different audiences.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
          { name: 'Software development', text: 'Software and cybersecurity companies near Washington, with a product that’s hard to explain in a sentence.', clients: 'Ancient', page: 'software' },
          { name: 'Fintech and finance', text: 'Financial products where users have to understand every amount before confirming.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Education', text: 'Courses and training platforms, with enrollment and payments online.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Nonprofits', text: 'Many organizations work in this region. Sites that explain the cause and take donations in a few steps.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Real projects, *live and in plain view.*',
        ids: ['ciencia', 'mineria', 'ancient', 'mexico-pacific'],
      },
      cities: {
        heading: 'From Baltimore to the shore: *what your site needs across Maryland.*',
        intro: 'It’s a small state with very different buyers: the edge of Washington lives on contracts and science, Baltimore on its port and hospitals, and the shore on summer.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Bethesda, Rockville and the I-270 corridor', tags: 'Biotech · Healthcare · Corporate', need: 'Partners, investors and candidates who assess your science and your team before writing.', build: 'Your science explained in layers, your team and publications in view, and a clear careers section.' },
          { name: 'Baltimore', tags: 'Healthcare · Port · Universities', need: 'Suppliers to hospitals and the port, and companies starting near the universities.', build: 'Clear services and capabilities, with a contact that reaches the right person.' },
          { name: 'Columbia and Fort Meade', tags: 'Cybersecurity · Technology · Contractors', need: 'Tech companies selling to government and large contractors.', build: 'An organized capabilities page, certifications and codes at hand, and sober copy.' },
          { name: 'Annapolis', tags: 'State government · Marine · Tourism', need: 'State vendors and marine and visitor businesses on the Chesapeake Bay.', build: 'Formal information for buyers, and simple booking or contact for visitors.' },
          { name: 'Frederick', tags: 'Biotech · Manufacturing · Services', need: 'Science and production companies growing outside the region’s priciest area.', build: 'Clear capabilities and location, with a simple information request.' },
          { name: 'Ocean City and the Eastern Shore', tags: 'Tourism · Seasonal · Agribusiness', need: 'Families planning vacations by phone and businesses with only a few strong months.', build: 'Simple booking, availability kept current and real photos of the place.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Common questions from *Maryland companies.*',
        items: [
          { question: 'How much does a website cost in Maryland?', answer: 'A site that explains your science and a platform with private areas are very different jobs, so we don’t give a number blind. On a free call we see what you need and send a fixed price in writing, with scope and dates.' },
          { question: 'Do you do web design in Baltimore, Bethesda and Rockville?', answer: 'Yes, and in Columbia, Annapolis, Frederick, Silver Spring and Ocean City. We work online across Maryland.' },
          { question: 'Do you build websites for small businesses in Maryland?', answer: 'Yes, including service companies and startups just out of the lab. We tell you what to do first and what can wait, and you know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We say so up front because it matters on some contracts: if one requires US-based staff or access to classified information, we’re not the right fit. For everything else we meet during your hours, one hour behind in winter and two in summer.' },
          { question: 'Does my company need to comply with the Maryland privacy law?', answer: 'It might. The Maryland Online Data Privacy Act has been in force since October 2025 and reaches companies from 35,000 state consumers, with strict rules for sensitive data. If it does, we add the privacy notice your advisor defines, plus cookie controls. Your advisor confirms whether it applies.' },
          { question: 'Can you explain a scientific product well?', answer: 'We work on it with the people who created it: they explain the subject, we propose how to say it to your buyer and your team corrects whatever needs it. Nothing goes live without your review.' },
          { question: 'Do you offer SEO for Maryland companies?', answer: 'Yes. Every site includes the basics: titles, descriptions, speed and structured data. Pages by topic or capability and optimization for AI search are advanced SEO, quoted separately.' },
          ...commonFaq('en', 'support', 'payment'),
        ],
      },
      cta: { titleLead: 'Tell us what your Maryland company does', titleAccent: 'and who struggles to understand it.' },
      linkLabel: 'Websites for Maryland companies',
      serviceName: 'Web Design and Platforms for Maryland Companies',
      howToDescription: 'How a Maryland company goes with Aurin from first message to a live site or platform, with copy reviewed by its own team.',
    },
  },
};
