import type { FaqItem, Lang, Step } from '@/data/types';
import type { CaseId } from '@/data/cases';

/** Copy de la home (diseño exportado de Claude Design, ver diseno-original/index.html). */
export interface HomeCopy {
  seo: { title: string; description: string };
  /** Hero del faro: el h1 es el lema; la descripción lleva las palabras clave. */
  hero: { titleLead: string; titleAccent: string; description: string };
  clients: { heading: string; items: { name: string; logo: string; w: number; h: number }[] };
  /** Las filas salen de src/data/services (nombre, resumen y enlace a cada página). */
  services: { eyebrow: string; heading: string; intro: string };
  industries: {
    eyebrow: string;
    heading: string;
    /** `links`: páginas a fondo de esa industria (aquí o en aurin.mx). */
    items: { name: string; text: string; clients: string; links?: { href: string; label: string }[] }[];
  };
  research: {
    eyebrow: string;
    heading: string;
    text: string;
    layers: string[];
  };
  /** Cómo usamos la IA: solo para acelerar el diseño y el desarrollo, nunca con datos del cliente. */
  ai: {
    eyebrow: string;
    heading: string;
    text: string;
    items: { title: string; text: string }[];
    note: string;
  };
  process: { eyebrow: string; heading: string; steps: Step[] };
  cases: { eyebrow: string; heading: string; link: string; ids: CaseId[] };
  us: {
    eyebrow: string;
    heading: string;
    items: { title: string; text: string }[];
  };
  about: { eyebrow: string; heading: string; text: string };
  faq: FaqItem[];
  cta: { titleLead: string; titleAccent: string };
}

/** Logos del carrusel de aurin.mx (public/logos), recortados sin margen. w × h (px) iguala su peso visual:
 *  alto = 62 · proporción^-0.42 (los anchos y bajos quedan más bajos, los cuadrados más altos), ancho máx. 200.
 *  Son grises sobre blanco: se invierten en CSS para el fondo negro. */
const CLIENTS = [
  { name: 'Antojos Sabores', logo: '/logos/antojos-sabores.webp', w: 92, h: 47 },
  { name: 'Galicia', logo: '/logos/galicia.svg', w: 144, h: 34 },
  { name: 'Inglés Individual', logo: '/logos/ingles-individual.webp', w: 200, h: 25 },
  { name: 'Latiz', logo: '/logos/latiz.svg', w: 56, h: 66 },
  { name: 'Mexico Pacific', logo: '/logos/mexico-pacific.webp', w: 69, h: 57 },
  { name: 'Pinnacle', logo: '/logos/pinnacle.webp', w: 107, h: 42 },
  { name: 'Orquesta Sinfónica de Minería', logo: '/logos/sinfonica-mineria.svg', w: 84, h: 50 },
  { name: 'Tío Francisco', logo: '/logos/tio-francisco.webp', w: 78, h: 52 },
  { name: 'Ancient Wallets', logo: '/logos/ancient.svg', w: 200, h: 22 },
  { name: 'Bonanza', logo: '/logos/bonanza.svg', w: 80, h: 52 },
  { name: 'Dentol', logo: '/logos/dentol.svg', w: 76, h: 54 },
  { name: 'Elite', logo: '/logos/elite.svg', w: 110, h: 41 },
  { name: 'Grupo Estrella', logo: '/logos/estrella.webp', w: 123, h: 38 },
  { name: 'Fruit Academy', logo: '/logos/fruit.svg', w: 51, h: 71 },
  { name: 'Identidad', logo: '/logos/identidad.webp', w: 104, h: 43 },
  { name: 'Ideograma', logo: '/logos/ideograma.svg', w: 164, h: 31 },
  { name: 'México', logo: '/logos/mexico.webp', w: 67, h: 58 },
  { name: 'Monetix', logo: '/logos/monetix.svg', w: 172, h: 30 },
];

export const HOME: Record<Lang, HomeCopy> = {
  es: {
    seo: {
      title: 'Aurin | Agencia digital de UX/UI, web y branding para EE. UU.',
      description:
        'Diseño web, desarrollo web, diseño UX/UI y branding en un solo equipo. Llevamos tu marca y tu producto digital de la estrategia al lanzamiento.',
    },
    hero: {
      // h1 = en lo que somos expertos; el mercado (EE. UU., cada estado) va en el <title> y en las landings
      titleLead: 'Estudio de diseño UX/UI',
      titleAccent: 'y desarrollo web.',
      description: 'Diseño web, branding y desarrollo de la mano, para que tu producto salga en su mejor versión.',
    },
    clients: {
      heading: 'Confían en nosotros',
      items: CLIENTS,
    },
    services: {
      eyebrow: 'Servicios',
      heading: 'Diseño web, desarrollo, UX/UI y branding, de la mano.',
      intro: 'Cuatro disciplinas, un solo equipo. Marca, experiencia y código se deciden juntos desde la primera llamada, así tu sitio o producto sale coherente, rápido y listo para convertir.',
    },
    industries: {
      eyebrow: 'Industrias',
      heading: 'Diseño web y UX/UI para industrias donde la confianza importa.',
      items: [
        { name: 'Fintech y finanzas', text: 'Wallets, remesas, crédito y factoraje: flujos complejos que se entienden y dan confianza.', clients: 'Ancient · Monetix · Bonanza · Fortrade', links: [{ href: '/diseno-apps-de-remesas/', label: 'Apps de remesas' }, { href: 'https://aurin.mx/diseno-ux-ui-para-fintech', label: 'UX/UI para fintech' }] },
        { name: 'Salud', text: 'Marcas y sitios bilingües que transmiten cuidado y profesionalismo desde la primera visita.', clients: 'Elite Home Health · Dentol' },
        { name: 'Educación', text: 'Plataformas de aprendizaje, sistemas de gestión de alumnos y sitios institucionales.', clients: 'Inglés Individual · Fruit Academy' },
        { name: 'Turismo y entretenimiento', text: 'Sitios y apps con venta de boletos, mapas y toda la información de la visita.', clients: 'El Rollo' },
        { name: 'Energía y construcción', text: 'Presencia institucional y apps de operación para empresas de la industria.', clients: 'Mexico Pacific · Grupo Estrella' },
        { name: 'Cultura y ciencia', text: 'Sitios y plataformas que acercan la música, la ciencia y la cultura a su público.', clients: 'Orquesta Sinfónica de Minería · instituciones académicas' },
      ],
    },
    research: {
      eyebrow: 'Basado en investigación',
      heading: 'Construido sobre lo que tus usuarios realmente hacen.',
      text: 'Cada proyecto empieza con entrevistas, mapas de usuario y pruebas de usabilidad reales. Las decisiones se sostienen en evidencia, no en suposiciones, así el trabajo convierte desde el primer día.',
      layers: ['Investigación de usuarios', 'Estructura y flujos', 'Pruebas de usabilidad'],
    },
    ai: {
      eyebrow: 'Inteligencia artificial',
      heading: 'Usamos IA para llegar más lejos, con criterio humano en cada decisión.',
      text: 'La inteligencia artificial está en nuestro proceso, no en lugar de nuestro equipo. Nos ayuda a hacer en días lo que antes tomaba semanas, y ese tiempo lo invertimos en lo que una máquina no puede decidir por ti: estrategia, criterio y detalle.',
      items: [
        { title: 'Del boceto al prototipo, más rápido', text: 'Generamos variantes de pantallas, textos de prueba y componentes en horas, así llegas antes a un prototipo que puedes navegar y aprobar.' },
        { title: 'Más opciones para elegir', text: 'Exploramos más rutas de diseño y de texto en la misma etapa, sin alargar el calendario.' },
        { title: 'Desarrollo más rápido y probado', text: 'Asistentes de código y pruebas automáticas aceleran la programación y atrapan errores antes del lanzamiento.' },
        { title: 'Listo para buscadores con IA', text: 'Estructura, datos estructurados y llms.txt para que ChatGPT, Perplexity y las respuestas de Google te encuentren y te citen.' },
      ],
      note: 'La usamos solo para acelerar el diseño y la programación de tu sitio. La información confidencial de tu negocio y de tus clientes no pasa por herramientas de IA, y cada entregable lo revisa y lo aprueba una persona de nuestro equipo.',
    },
    process: {
      eyebrow: 'Proceso',
      heading: 'Un camino claro desde la primera llamada hasta el lanzamiento, sin sorpresas.',
      steps: [
        { name: 'Llamada de 30 min', text: 'Entendemos tu negocio, tus usuarios y lo que frena tus resultados.' },
        { name: 'Propuesta clara', text: 'Te decimos qué incluye, cuánto cuesta y cuándo se entrega, antes de empezar.' },
        { name: 'Diseño y desarrollo', text: 'Ciclos cortos con tu equipo, revisiones periódicas y pruebas con usuarios reales.' },
        { name: 'Lanzamiento y crecimiento', text: 'Publicamos, medimos y mejoramos con acompañamiento después del lanzamiento.' },
      ],
    },
    cases: {
      eyebrow: 'Casos de estudio',
      heading: 'Marcas, sitios y productos que diseñamos y desarrollamos.',
      link: 'Ver caso',
      ids: ['fruit-academy', 'el-rollo', 'ingles-individual', 'ancient', 'mineria', 'mexico-pacific'],
    },
    us: {
      eyebrow: 'Trabajamos con empresas de EE. UU.',
      heading: 'Un equipo remoto que trabaja en tu zona horaria.',
      items: [
        { title: 'Horarios que se cruzan', text: 'Sesiones de trabajo programadas y revisiones asíncronas para avanzar rápido entre zonas horarias.' },
        { title: 'Precios claros', text: 'Antes de empezar sabes qué incluye tu proyecto, cuánto cuesta y cuándo se entrega. Sin sorpresas.' },
        { title: 'Hecho para ser encontrado', text: 'Cada sitio sale con estructura semántica, rendimiento medido y SEO técnico.' },
      ],
    },
    about: {
      eyebrow: 'Sobre Aurin',
      heading: 'Agencia de diseño web y branding desde 1998.',
      text: 'Aurin tiene sede en Cuernavaca, Morelos, México, y trabaja en modalidad remota con clientes en Estados Unidos, Canadá, España y Latinoamérica. Diseño web, desarrollo web, diseño UX/UI y branding viven en el mismo equipo: nada se pierde entre una etapa y otra.',
    },
    faq: [
      { question: '¿Qué servicios ofrece Aurin?', answer: 'Diseño web, desarrollo web, diseño UX/UI y branding. Los hacemos en un solo equipo y puedes empezar por el que más necesitas.' },
      { question: '¿Cuál es la diferencia entre diseño web y diseño UX/UI?', answer: 'El diseño web define cómo se ve y se organiza un sitio. El diseño UX/UI parte de investigar a tus usuarios para que cada pantalla sea fácil de entender y de usar. En Aurin van juntos: el sitio se ve bien y además funciona.' },
      { question: '¿Por qué hacer branding y sitio web con el mismo equipo?', answer: 'Porque la marca y el sitio se diseñan con el mismo criterio: colores, tono y estructura salen coherentes desde el inicio y no hay que adaptar una identidad hecha por otros.' },
      { question: '¿Qué hace diferente a Aurin de otras agencias?', answer: 'Estrategia, diseño y desarrollo en un mismo equipo, así nada se pierde entre una etapa y otra.' },
      { question: '¿Cómo empiezo un proyecto con Aurin?', answer: 'Agenda una llamada de 30 minutos. Después te enviamos una propuesta con lo que incluye, el precio y las fechas.' },
      { question: '¿Trabajan con empresas fuera de México?', answer: 'Sí. Trabajamos en remoto con empresas de Estados Unidos, Canadá, España y Latinoamérica.' },
      { question: '¿Usan inteligencia artificial en sus proyectos?', answer: 'Sí, para acelerar el diseño y la programación de tu sitio. La información confidencial de tu negocio no pasa por herramientas de IA, y cada decisión y entregable lo revisa nuestro equipo. Ganas tiempo sin perder calidad, y tu sitio sale preparado para aparecer en buscadores con IA como ChatGPT y Perplexity.' },
      { question: '¿Trabajan en inglés?', answer: 'Sí. Llamadas, entregables y textos del sitio, en inglés o en español. También diseñamos sitios bilingües, como el de Elite Home Health.' },
      { question: '¿Cuánto cuesta un sitio web o un proyecto de branding?', answer: 'Depende de lo que necesites. Después de la llamada te enviamos una propuesta con lo que incluye y el precio, así conoces la inversión completa antes de empezar.' },
      { question: '¿Cuánto tarda un proyecto?', answer: 'Una landing page toma menos que un sitio corporativo, una app o una marca completa. Cada propuesta incluye las fechas de entrega.' },
      { question: '¿Dan mantenimiento después del lanzamiento?', answer: 'Sí. Después de publicar medimos, corregimos y seguimos mejorando el sitio o el producto contigo.' },
      { question: '¿Qué necesitan de mi parte para empezar?', answer: 'Una llamada de 30 minutos para entender tu negocio y tus objetivos. Si ya tienes marca, textos o acceso a tu sitio actual, nos ayuda; si no, lo resolvemos dentro del proyecto.' },
    ],
    cta: { titleLead: '¿Listo para llevarte', titleAccent: 'más lejos?' },
  },
  en: {
    seo: {
      title: 'Aurin | UX/UI, Web & Branding Agency for US Companies',
      description:
        'Web design, web development, UX/UI design and branding in one team. We take your brand and digital product from strategy to launch.',
    },
    hero: {
      titleLead: 'UX/UI design studio',
      titleAccent: 'and web development.',
      description: 'Web design, branding and development hand in hand, so your product launches at its best.',
    },
    clients: {
      heading: 'Trusted by',
      items: CLIENTS,
    },
    services: {
      eyebrow: 'Services',
      heading: 'Web design, development, UX/UI and branding, hand in hand.',
      intro: 'Four disciplines, one team. Brand, experience and code are decided together from the first call, so your website or product launches consistent, fast and ready to convert.',
    },
    industries: {
      eyebrow: 'Industries',
      heading: 'Web design and UX/UI for industries where trust matters.',
      items: [
        { name: 'Fintech and finance', text: 'Wallets, remittances, lending and factoring: complex flows that are easy to follow and build trust.', clients: 'Ancient · Monetix · Bonanza · Fortrade', links: [{ href: '/en/remittance-app-design/', label: 'Remittance apps' }, { href: 'https://aurin.mx/en/ux-ui-design-for-fintech', label: 'Fintech UX/UI' }] },
        { name: 'Healthcare', text: 'Bilingual brands and websites that convey care and professionalism from the first visit.', clients: 'Elite Home Health · Dentol' },
        { name: 'Education', text: 'Learning platforms, student management systems and institutional websites.', clients: 'Inglés Individual · Fruit Academy' },
        { name: 'Tourism and entertainment', text: 'Websites and apps with ticketing, maps and everything visitors need to know.', clients: 'El Rollo' },
        { name: 'Energy and construction', text: 'Institutional presence and operations apps for industrial companies.', clients: 'Mexico Pacific · Grupo Estrella' },
        { name: 'Culture and science', text: 'Websites and platforms that bring music, science and culture closer to their audience.', clients: 'Minería Symphony Orchestra · academic institutions' },
      ],
    },
    research: {
      eyebrow: 'Research-based',
      heading: 'Built on what your users actually do.',
      text: 'Every project starts with interviews, user journey maps and real usability tests. Decisions rest on evidence, not assumptions, so the work converts from day one.',
      layers: ['User research', 'Structure and flows', 'Usability testing'],
    },
    ai: {
      eyebrow: 'Artificial intelligence',
      heading: 'We use AI to go further, with human judgment in every decision.',
      text: 'Artificial intelligence is part of our process, not a replacement for our team. It helps us do in days what used to take weeks, and we put that time into what a machine can’t decide for you: strategy, judgment and detail.',
      items: [
        { title: 'From sketch to prototype, faster', text: 'We generate screen variations, placeholder copy and components in hours, so you get to a prototype you can click through and approve sooner.' },
        { title: 'More options to choose from', text: 'We explore more design and copy directions in the same phase, without stretching the schedule.' },
        { title: 'Faster, better-tested development', text: 'Coding assistants and automated tests speed up development and catch bugs before launch.' },
        { title: 'Ready for AI search', text: 'Structure, structured data and llms.txt so ChatGPT, Perplexity and Google’s AI answers can find and cite you.' },
      ],
      note: 'We use it only to speed up the design and development of your website. Confidential information about your business and your customers never goes through AI tools, and every deliverable is reviewed and approved by a person on our team.',
    },
    process: {
      eyebrow: 'Process',
      heading: 'A clear path from the first call to launch, with no surprises.',
      steps: [
        { name: '30-min call', text: 'We get to know your business, your users and what is holding your results back.' },
        { name: 'Clear proposal', text: 'We tell you what’s included, what it costs and when it’s delivered, before we start.' },
        { name: 'Design and development', text: 'Short cycles with your team, regular reviews and testing with real users.' },
        { name: 'Launch and growth', text: 'We launch, measure and improve, with support after going live.' },
      ],
    },
    cases: {
      eyebrow: 'Case studies',
      heading: 'Brands, websites and products we designed and built.',
      link: 'View case',
      ids: ['fruit-academy', 'el-rollo', 'ingles-individual', 'ancient', 'mineria', 'mexico-pacific'],
    },
    us: {
      eyebrow: 'We work with US companies',
      heading: 'A remote team that works in your time zone.',
      items: [
        { title: 'Overlapping hours', text: 'Scheduled working sessions and async reviews to move fast across time zones.' },
        { title: 'Clear pricing', text: 'Before we start, you know what your project includes, what it costs and when it’s delivered. No surprises.' },
        { title: 'Built to be found', text: 'Every site ships with semantic structure, measured performance and technical SEO.' },
      ],
    },
    about: {
      eyebrow: 'About Aurin',
      heading: 'A web design and branding agency since 1998.',
      text: 'Aurin is headquartered in Cuernavaca, Morelos, Mexico, and works remotely with clients in the United States, Canada, Spain and Latin America. Web design, web development, UX/UI design and branding live in the same team, so nothing gets lost between phases.',
    },
    faq: [
      { question: 'What services does Aurin offer?', answer: 'Web design, web development, UX/UI design and branding. We do them in one team, and you can start with the one you need most.' },
      { question: 'What is the difference between web design and UX/UI design?', answer: 'Web design defines how a website looks and is organized. UX/UI design starts by researching your users so every screen is easy to understand and use. At Aurin they go together: the site looks good and it works.' },
      { question: 'Why do branding and the website with the same team?', answer: 'Because the brand and the website are designed with the same judgment: colors, tone and structure are consistent from the start, with no need to adapt an identity made by someone else.' },
      { question: 'What makes Aurin different from other agencies?', answer: 'Strategy, design and development in one team, so nothing gets lost between phases.' },
      { question: 'How do I start a project with Aurin?', answer: 'Book a 30-minute call. Then we send you a proposal with what’s included, the price and the dates.' },
      { question: 'Do you work with companies outside Mexico?', answer: 'Yes. We work remotely with companies in the United States, Canada, Spain and Latin America.' },
      { question: 'Do you use artificial intelligence in your projects?', answer: 'Yes, to speed up the design and development of your website. Confidential information about your business never goes through AI tools, and our team reviews every decision and deliverable. You save time without losing quality, and your site launches ready to show up in AI search like ChatGPT and Perplexity.' },
      { question: 'Do you work in English?', answer: 'Yes. Calls, deliverables and website copy, in English or Spanish. We also design bilingual websites, like Elite Home Health’s.' },
      { question: 'How much does a website or branding project cost?', answer: 'It depends on what you need. After the call we send you a proposal with what’s included and the price, so you know the full investment before we start.' },
      { question: 'How long does a project take?', answer: 'A landing page takes less time than a corporate website, an app or a full brand. Every proposal includes the delivery dates.' },
      { question: 'Do you offer maintenance after launch?', answer: 'Yes. After launch we measure, fix and keep improving the website or product with you.' },
      { question: 'What do you need from me to get started?', answer: 'A 30-minute call to understand your business and goals. If you already have a brand, copy or access to your current site, that helps; if not, we handle it within the project.' },
    ],
    cta: { titleLead: 'Ready to go', titleAccent: 'further?' },
  },
};
