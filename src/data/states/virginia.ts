import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Virginia: proveedores del gobierno federal, centros de datos y construcción naval. Ángulo: capacidades claras y accesibilidad. */
export const virginia: State = {
  id: 'virginia',
  status: 'live',
  publishAt: '2026-11-05T06:00:00-06:00',
  slug: 'virginia',
  name: 'Virginia',
  geo: { latitude: 37.4316, longitude: -78.6569 },
  areas: ['Arlington', 'Alexandria', 'Tysons', 'Reston', 'Richmond', 'Virginia Beach', 'Norfolk', 'Roanoke', 'Charlottesville'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Virginia | Precio cerrado | Aurin',
        description: 'Páginas web y plataformas para empresas de Virginia, de Arlington a Virginia Beach, con SEO básico o avanzado. Accesibles y a precio cerrado. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Virginia',
        titleAccent: 'para que un comité de compras lo entienda.',
        description: 'Sitios y plataformas para proveedores de gobierno, tecnología y empresas de Virginia, accesibles, seguros y con el precio cerrado desde el inicio.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'En Virginia te evalúan antes de contestarte. *Tu sitio hace la primera revisión.*',
        intro: 'Toma el servicio que te falte o todos juntos, con un solo equipo. Un experto dirige cada parte, la IA acelera lo que se puede acelerar y el SEO básico va incluido.',
        items: {
          'web-design': { text: 'Antes de invitarte a una licitación o a una reunión, alguien entra a tu sitio a revisar capacidades, experiencia y códigos de contratación. Ponemos eso donde se encuentre en segundos, sin frases vacías.', tags: 'Sitio corporativo · Capacidades · SEO básico' },
          'web-development': { text: 'Portales para clientes, sistemas de solicitudes y áreas privadas con permisos por usuario. Construimos con seguridad y accesibilidad desde el principio, porque tus clientes lo van a revisar.', tags: 'Portales · Accesos · Conexiones' },
          'ux-ui-design': { text: 'Un sistema pensado para ingenieros termina usándolo gente que no lo es. Observamos a quienes de verdad lo operan y rediseñamos las pantallas pensando en reducir errores y horas de capacitación.', tags: 'Observación de uso · Prototipos · Accesibilidad' },
          branding: { text: 'Cuando creces de subcontratista a contratista principal, tu imagen tiene que crecer contigo. Ordenamos tu marca, tus presentaciones y tu mensaje para competir por contratos más grandes.', tags: 'Estrategia · Identidad · Presentaciones' },
        },
      },
      sectors: {
        heading: 'Diseño web para las industrias *clave de Virginia.*',
        intro: 'Clientes reales de Aurin en sectores que importan aquí. Entra a cada uno para ver qué hacemos.',
        items: [
          { name: 'Desarrollo de software', text: 'Empresas de software y servicios de TI que le venden a agencias y a grandes contratistas.', clients: 'Ancient', page: 'software' },
          { name: 'Energía', text: 'Proyectos de infraestructura con muchos interesados, en un estado con enorme demanda de energía por sus centros de datos.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Logística y construcción', text: 'Sistemas de pedidos y obra para quienes mueven materiales y carga.', clients: 'Grupo Estrella' },
          { name: 'Salud', text: 'Atención médica y en casa para familias, también las de militares que cambian de ciudad con frecuencia.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech y finanzas', text: 'Pagos y crédito con mucha claridad y confianza, cerca del centro financiero de Richmond.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Fundaciones y ONG', text: 'Organizaciones cercanas a la capital del país, que necesitan mostrar misión y resultados a donantes y aliados.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Proyectos reales *que puedes revisar.*',
        ids: ['mexico-pacific', 'grupo-estrella', 'ancient', 'ciencia'],
      },
      cities: {
        heading: 'Cinco Virginias con compradores distintos: *qué le conviene a tu sitio.*',
        intro: 'El norte vive del gobierno federal y de los centros de datos, la costa de la Marina y los astilleros, y Richmond de las finanzas. Un mismo sitio no le habla igual a todos.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Arlington, Tysons y Reston', tags: 'Gobierno · Tecnología · Consultoría', need: 'Oficiales de contratación y contratistas principales que buscan socios con experiencia comprobable.', build: 'Página de capacidades, códigos NAICS, contratos previos y un sitio cuidado en accesibilidad.' },
          { name: 'Alexandria y Fredericksburg', tags: 'Asociaciones · Defensa · Servicios', need: 'Asociaciones y empresas de servicios que le hablan a miembros, a dependencias y a la prensa.', build: 'Áreas para socios, información fácil de citar y un calendario que se actualice sin programar.' },
          { name: 'Richmond', tags: 'Finanzas · Salud · Gobierno estatal', need: 'Bancos, aseguradoras regionales y proveedores del estado, con procesos de compra largos y formales.', build: 'Textos sobrios, seguridad a la vista y material que el equipo pueda pasar a su comité.' },
          { name: 'Virginia Beach y Norfolk', tags: 'Marina · Astilleros · Puerto', need: 'Proveedores de defensa y del puerto, con compradores que conocen muy bien lo técnico.', build: 'Certificaciones, sectores que atiendes y solicitud de cotización que acepte documentos.' },
          { name: 'Roanoke y Charlottesville', tags: 'Salud · Universidades · Manufactura', need: 'Empresas regionales y salidas de universidades, que quieren vender más allá de su zona.', build: 'Una historia propia bien contada, páginas por servicio y un sitio ligero para conexiones lentas.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Lo que nos preguntan en Virginia *antes de firmar.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Virginia?', answer: 'Un sitio de capacidades cuesta menos que un portal con cuentas y permisos, así que depende de lo que necesites. Te mandamos un precio cerrado por escrito tras la llamada gratis, con lo incluido y fechas, ya en un formato útil para tu área de compras.' },
          { question: '¿Hacen diseño web en Arlington, Richmond y Virginia Beach?', answer: 'Sí, y también en Alexandria, Tysons, Reston, Norfolk, Roanoke y Charlottesville. Trabajamos en línea y acordamos contigo cómo compartir archivos y hacer las reuniones.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Virginia?', answer: 'Sí, incluidas empresas pequeñas que quieren empezar a trabajar con el gobierno. Muchas veces el primer paso es un sitio breve y claro que muestre capacidades y experiencia. Te decimos el precio antes de empezar.' },
          { question: '¿Pueden hacer un sitio accesible para la Sección 508?', answer: 'Cuidamos lo principal de las pautas WCAG, la referencia de la Sección 508: contraste, teclado, lectores de pantalla y formularios claros. Antes de publicar te decimos qué revisamos. Que cumpla formalmente lo confirma la auditoría de un tercero: si tu contrato la exige, la planeamos desde la propuesta.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Lo decimos desde el inicio porque en algunos contratos importa: si exigen personal en Estados Unidos o acceso a información clasificada, no somos la opción. Para todo lo demás, nos reunimos en tu horario, una hora atrás en invierno y dos en verano.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Virginia?', answer: 'Puede que sí: la Virginia Consumer Data Protection Act está vigente desde enero de 2023 y depende de cuántos datos de consumidores del estado manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y las opciones de datos. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Ofrecen SEO para contratistas y empresas de Virginia?', answer: 'Sí. Todo sitio incluye el básico: títulos, descripciones, velocidad y datos estructurados. Para aparecer por capacidades y servicios específicos, o para optimizarlo para buscadores con IA, está el SEO avanzado, que se cotiza aparte.' },
          ...commonFaq('es', 'payment', 'time'),
        ],
      },
      cta: { titleLead: 'Cuéntanos a quién le vendes en Virginia', titleAccent: 'y te decimos qué debe ver primero.' },
      linkLabel: 'Páginas web para empresas de Virginia',
      serviceName: 'Diseño web y plataformas para empresas de Virginia',
      howToDescription: 'Cómo avanza con Aurin el sitio de una empresa de Virginia, del primer mensaje a un sitio accesible, aprobado y publicado.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Virginia | Fixed Price | Aurin',
        description: 'Websites and platforms for Virginia companies, from Arlington to Virginia Beach, with basic or advanced SEO. Accessible, at a fixed price. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Virginia',
        titleAccent: 'that a procurement team can follow.',
        description: 'Websites and platforms for Virginia government vendors, tech firms and companies, accessible, secure and at a fixed price from the start.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'In Virginia they vet you before they reply. *Your website does the first review.*',
        intro: 'Take the service you’re missing or all of them, with one team. An expert leads every part, AI speeds up what can be sped up, and basic SEO is included.',
        items: {
          'web-design': { text: 'Before inviting you to bid or to a meeting, someone checks your site for capabilities, past performance and contract codes. We put that where it can be found in seconds, with no empty phrases.', tags: 'Corporate websites · Capabilities · Basic SEO' },
          'web-development': { text: 'Customer portals, request systems and private areas with per-user permissions. We build security and accessibility in from the start, because your customers will check.', tags: 'Portals · Access control · Integrations' },
          'ux-ui-design': { text: 'A system designed for engineers ends up used by people who aren’t. We watch those who really operate it and redesign the screens with fewer errors and less training in mind.', tags: 'Usage research · Prototypes · Accessibility' },
          branding: { text: 'When you grow from subcontractor to prime, your image has to grow with you. We put your brand, your decks and your message in order so you can compete for bigger contracts.', tags: 'Strategy · Identity · Presentations' },
        },
      },
      sectors: {
        heading: 'Web design for *Virginia’s key industries.*',
        intro: 'Real Aurin clients in sectors that matter here. Open one to see what we do.',
        items: [
          { name: 'Software development', text: 'Software and IT services firms selling to agencies and large contractors.', clients: 'Ancient', page: 'software' },
          { name: 'Energy', text: 'Infrastructure projects with many stakeholders, in a state with huge power demand from its data centers.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Logistics and construction', text: 'Ordering and job-site systems for companies moving materials and freight.', clients: 'Grupo Estrella' },
          { name: 'Healthcare', text: 'Medical and home care for families, including military ones who change cities often.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Fintech and finance', text: 'Payments and lending with real clarity and trust, near Richmond’s financial center.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Nonprofits', text: 'Organizations near the nation’s capital that must show mission and results to donors and allies.', clients: 'Equipar', page: 'nonprofits' },
        ],
      },
      cases: {
        heading: 'Real projects *you can review.*',
        ids: ['mexico-pacific', 'grupo-estrella', 'ancient', 'ciencia'],
      },
      cities: {
        heading: 'Five Virginias with different buyers: *what your site should do.*',
        intro: 'The north lives on the federal government and data centers, the coast on the Navy and shipyards, and Richmond on finance. One site doesn’t speak to all of them the same way.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Arlington, Tysons and Reston', tags: 'Government · Technology · Consulting', need: 'Contracting officers and prime contractors looking for partners with proven experience.', build: 'A capabilities page, NAICS codes, past contracts and a site built with accessibility in mind.' },
          { name: 'Alexandria and Fredericksburg', tags: 'Associations · Defense · Services', need: 'Associations and service firms speaking to members, agencies and the press.', build: 'Member areas, information that’s easy to cite and a calendar that updates without a developer.' },
          { name: 'Richmond', tags: 'Finance · Healthcare · State government', need: 'Banks, regional insurers and state vendors, with long, formal buying processes.', build: 'Sober copy, security in plain view and material the team can pass to its committee.' },
          { name: 'Virginia Beach and Norfolk', tags: 'Navy · Shipyards · Port', need: 'Defense and port suppliers whose buyers know the technical side very well.', build: 'Certifications, sectors you serve and a quote request that accepts documents.' },
          { name: 'Roanoke and Charlottesville', tags: 'Healthcare · Universities · Manufacturing', need: 'Regional companies and university spin-offs that want to sell beyond their area.', build: 'Their own story told well, pages by service and a light site for slower connections.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'What Virginia companies ask us *before signing.*',
        items: [
          { question: 'How much does a website cost in Virginia?', answer: 'A capabilities site costs less than a portal with accounts and permissions, so it depends on what you need. We send a fixed price in writing after a free call, with what’s included and dates, in a format your purchasing team can use.' },
          { question: 'Do you do web design in Arlington, Richmond and Virginia Beach?', answer: 'Yes, and in Alexandria, Tysons, Reston, Norfolk, Roanoke and Charlottesville. We work online and agree with you on how to share files and hold meetings.' },
          { question: 'Do you build websites for small businesses in Virginia?', answer: 'Yes, including small companies that want to start working with the government. Often the first step is a short, clear site showing capabilities and experience. We give you the price before we start.' },
          { question: 'Can you build an accessible site for Section 508?', answer: 'We take care of the main points of the WCAG guidelines, the reference for Section 508: contrast, keyboard use, screen readers and clear forms. Before launch we tell you what we checked. Formal compliance is confirmed by a third-party audit: if your contract requires one, we plan for it in the proposal.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We say so up front because it matters on some contracts: if one requires US-based staff or access to classified information, we’re not the right fit. For everything else we meet during your hours, one hour behind in winter and two in summer.' },
          { question: 'Does my company need to comply with the Virginia privacy law?', answer: 'It might: the Virginia Consumer Data Protection Act has been in force since January 2023 and depends on how much state consumer data you handle. If it does, we add the privacy notice your advisor defines and the data options. Your advisor confirms whether it applies.' },
          { question: 'Do you offer SEO for Virginia contractors and companies?', answer: 'Yes. Every site includes the basics: titles, descriptions, speed and structured data. To show up for specific capabilities and services, or to optimize for AI search, there’s advanced SEO, quoted separately.' },
          ...commonFaq('en', 'payment', 'time'),
        ],
      },
      cta: { titleLead: 'Tell us who you sell to in Virginia', titleAccent: 'and we’ll tell you what they should see first.' },
      linkLabel: 'Websites for Virginia companies',
      serviceName: 'Web Design and Platforms for Virginia Companies',
      howToDescription: 'How a Virginia company’s site moves forward with Aurin, from first message to an accessible, approved and live website.',
    },
  },
};
