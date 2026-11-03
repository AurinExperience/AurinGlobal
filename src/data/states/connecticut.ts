import type { State } from './types';
import { COMMITMENTS, commonFaq, PROCESS } from './common';

/** Connecticut: seguros en Hartford, finanzas en Stamford, aeroespacial y Yale. Ángulo: empresas muy reguladas y formales cuyo sitio quedó anticuado. */
export const connecticut: State = {
  id: 'connecticut',
  status: 'live',
  publishAt: '2026-11-07T06:00:00-06:00',
  slug: 'connecticut',
  name: 'Connecticut',
  geo: { latitude: 41.6032, longitude: -73.0877 },
  areas: ['Hartford', 'Stamford', 'New Haven', 'Bridgeport', 'Norwalk', 'Greenwich', 'Waterbury', 'Groton'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Connecticut | Desde 1998 | Aurin',
        description: 'Diseño web y UX/UI para empresas de Connecticut, de Hartford a Stamford, con SEO básico o avanzado. Precio cerrado y el diseño antes. Llamada gratis.',
      },
      hero: {
        titleLead: 'Diseño de páginas web en Connecticut',
        titleAccent: 'para empresas serias que ya no quieren verse viejas.',
        description: 'Sitios y plataformas para empresas de seguros, finanzas, ingeniería y servicios en Connecticut, sobrios y claros, con precio cerrado antes de empezar.',
        ctaSecondary: 'Ver servicios',
      },
      services: {
        heading: 'Se puede ser formal *sin parecer de hace quince años.*',
        intro: 'Contrata una parte o el proyecto completo, siempre con el mismo equipo. La IA nos ayuda a avanzar más rápido, un experto revisa cada entrega y el SEO básico ya viene incluido.',
        items: {
          'web-design': { text: 'El sitio de una firma formal no tiene que ser aburrido ni difícil de leer. Lo rehacemos con textos sencillos, buena estructura y el tono que tu área de cumplimiento pueda revisar sin reescribirlo todo.', tags: 'Sitio corporativo · Rediseño · SEO básico' },
          'web-development': { text: 'Portales para asegurados, clientes y socios, formularios por tipo de solicitud y conexiones con tus sistemas. Definimos contigo qué datos se piden y quién puede ver cada cosa.', tags: 'Portales · Formularios · Conexiones' },
          'ux-ui-design': { text: 'Una póliza o un estado de cuenta en línea puede ser una pantalla que nadie entiende. Revisamos dónde se confunde tu usuario y rediseñamos esos pasos, con un prototipo que apruebas antes de programar.', tags: 'Revisión de uso · Prototipos · Portales' },
          branding: { text: 'Cuando dos firmas se fusionan o cambia la generación que dirige, la marca suele quedarse atrás. La ponemos al día sin que tus clientes de siempre sientan que eres otra empresa.', tags: 'Renovación de marca · Identidad · Guía de uso' },
        },
      },
      sectors: {
        heading: 'Sectores fuertes en Connecticut, *con clientes nuestros.*',
        intro: 'Clientes reales de Aurin en giros que aquí tienen peso. Cada industria lleva a su página.',
        items: [
          { name: 'Fintech y finanzas', text: 'Productos financieros donde cada monto, comisión y plazo debe entenderse antes de confirmar.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Salud', text: 'Grandes redes médicas y atención en casa, con servicios claros y citas fáciles de pedir.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Energía', text: 'Proyectos que tienen que explicarse a inversionistas, autoridades y comunidades.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Desarrollo de software', text: 'Empresas de software que le venden a aseguradoras y financieras, con varias personas que convencer.', clients: 'Ancient', page: 'software' },
          { name: 'Educación', text: 'Escuelas, academias y plataformas de cursos, con información clara para las familias.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Cultura y ciencia', text: 'Museos, orquestas y teatros con mucha historia, que quieren vender desde su propio sitio.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Trabajo publicado *que puedes revisar.*',
        ids: ['ancient', 'mineria', 'mexico-pacific', 'ciencia'],
      },
      cities: {
        heading: 'De Stamford a Groton: *qué le conviene a tu sitio en cada parte de Connecticut.*',
        intro: 'El suroeste mira hacia Nueva York, Hartford lleva generaciones viviendo de los seguros, New Haven gira alrededor de Yale y la costa este, de la construcción naval.',
        needLabel: 'Quién te busca',
        buildLabel: 'Qué le conviene a tu sitio',
        items: [
          { name: 'Stamford, Greenwich y Norwalk', tags: 'Finanzas · Corporativos · Servicios', need: 'Compradores que también ven proveedores de Nueva York y comparan sin decirlo.', build: 'Una imagen cuidada, experiencia comprobable y un contacto directo, sin frases infladas.' },
          { name: 'Hartford', tags: 'Seguros · Salud · Gobierno', need: 'Aseguradoras y sus proveedores, con áreas de compras formales y procesos largos.', build: 'Capacidades claras, seguridad y datos fáciles de encontrar, y textos que un comité pueda revisar.' },
          { name: 'New Haven', tags: 'Universidad · Biotecnología · Salud', need: 'Empresas de ciencia que nacen cerca de Yale y buscan socios, inversión y talento.', build: 'Tu ciencia explicada por niveles, con tu equipo y tus publicaciones a la vista.' },
          { name: 'Bridgeport y Waterbury', tags: 'Manufactura · Aeroespacial · Servicios', need: 'Fabricantes con mucho oficio y proveedores de la cadena aeroespacial.', build: 'Capacidades, certificaciones y una solicitud de cotización que acepte planos.' },
          { name: 'Groton y la costa este', tags: 'Construcción naval · Turismo · Farmacéutica', need: 'Proveedores de grandes contratistas y negocios de temporada junto a la costa.', build: 'Información formal para quien compra y reservas simples para quien visita.' },
        ],
      },
      process: PROCESS.es,
      commitments: COMMITMENTS.es,
      faq: {
        heading: 'Preguntas de empresas *en Connecticut.*',
        items: [
          { question: '¿Cuánto cuesta una página web en Connecticut?', answer: 'Depende de cuántas páginas lleve, de si hay un portal y de cuánta revisión interna requiera. Lo vemos en una llamada gratis, y después recibes un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Hacen diseño web en Hartford, Stamford y New Haven?', answer: 'Sí, y en Bridgeport, Norwalk, Greenwich, Waterbury y Groton. Trabajamos en línea con todo Connecticut.' },
          { question: '¿Hacen páginas web para pequeñas empresas en Connecticut?', answer: 'Sí, como firmas de servicios y negocios familiares. Puede bastar un sitio breve, bien escrito y fácil de leer en el celular. Sabes el precio antes de decidir.' },
          { question: '¿Dónde está su equipo?', answer: 'En Cuernavaca, México, desde 1998. Vamos una hora atrás de Connecticut en invierno y dos en verano, y nos reunimos en tu horario de trabajo. No tenemos oficina aquí, y puedes conocer al equipo más abajo en esta página.' },
          { question: '¿Mi empresa debe cumplir con la ley de privacidad de Connecticut?', answer: 'Puede que sí. La Connecticut Data Privacy Act está vigente desde julio de 2023, tuvo cambios que entraron en vigor en julio de 2026 y depende de cuántos datos manejas. Si te aplica, integramos el aviso de privacidad que defina tu asesor y el control de cookies. Si te aplica o no lo confirma tu asesor.' },
          { question: '¿Cómo trabajan con un área de cumplimiento que revisa todo?', answer: 'La incluimos en el calendario desde la propuesta. Les pasamos textos y pantallas para que los revisen por partes y dejamos por escrito qué se aprobó. Nada se publica sin su visto bueno. Si esa revisión toma tiempo, las fechas lo toman en cuenta.' },
          { question: '¿Ofrecen SEO para empresas de Connecticut?', answer: 'Sí. Cada sitio incluye el básico: títulos, descripciones, velocidad y datos estructurados. El SEO avanzado, que se cotiza aparte, suma contenidos, páginas por servicio y la optimización para buscadores con IA.' },
          ...commonFaq('es', 'copy', 'redesign'),
        ],
      },
      cta: { titleLead: 'Cuéntanos qué hace tu firma en Connecticut', titleAccent: 'y quién tiene que aprobar el sitio.' },
      linkLabel: 'Páginas web para empresas de Connecticut',
      serviceName: 'Diseño web y UX/UI para empresas de Connecticut',
      howToDescription: 'Cómo pasa con Aurin una empresa de Connecticut del primer mensaje a un sitio publicado, con cada texto revisado por su equipo.',
    },
    en: {
      seo: {
        title: 'Web Design Agency in Connecticut | Since 1998 | Aurin',
        description: 'Web design and UX/UI for Connecticut companies, from Hartford to Stamford, with basic or advanced SEO. A fixed price and the design first. Book a free call.',
      },
      hero: {
        titleLead: 'Web design agency in Connecticut',
        titleAccent: 'for serious companies done looking dated.',
        description: 'Websites and platforms for Connecticut insurance, finance, engineering and service companies, sober and clear, at a fixed price before any work begins.',
        ctaSecondary: 'See services',
      },
      services: {
        heading: 'You can be formal *without looking fifteen years old.*',
        intro: 'Hire one piece or the whole project, always with the same team. AI helps us move faster, an expert reviews every delivery and basic SEO already comes included.',
        items: {
          'web-design': { text: 'A formal firm’s website doesn’t have to be dull or hard to read. We rebuild it with plain copy, good structure and a tone your compliance team can review without rewriting all of it.', tags: 'Corporate websites · Redesigns · Basic SEO' },
          'web-development': { text: 'Portals for policyholders, clients and partners, forms by request type and connections to your systems. We decide with you what data gets collected and who can see what.', tags: 'Portals · Forms · Integrations' },
          'ux-ui-design': { text: 'A policy or an online statement can be a screen nobody understands. We review where your users get confused and redesign those steps, with a prototype you approve before any code.', tags: 'Usage review · Prototypes · Portals' },
          branding: { text: 'When two firms merge or a new generation takes over, the brand tends to lag behind. We bring it up to date without your long-time clients feeling you’ve become another company.', tags: 'Brand refresh · Identity · Guidelines' },
        },
      },
      sectors: {
        heading: 'Strong sectors in Connecticut, *with clients of ours.*',
        intro: 'Real Aurin clients in fields with weight here. Each industry links to its page.',
        items: [
          { name: 'Fintech and finance', text: 'Financial products where every amount, fee and timeline has to make sense before people confirm.', clients: 'Ancient · Monetix · Bonanza', page: 'fintech' },
          { name: 'Healthcare', text: 'Large medical networks and home care, with clear services and appointments that are easy to request.', clients: 'Elite Home Health · Dentol', page: 'healthcare' },
          { name: 'Energy', text: 'Projects that have to be explained to investors, authorities and communities.', clients: 'Mexico Pacific', page: 'energy' },
          { name: 'Software development', text: 'Software companies selling to insurers and financial firms, with several people to convince.', clients: 'Ancient', page: 'software' },
          { name: 'Education', text: 'Schools, academies and course platforms, with clear information for families.', clients: 'Inglés Individual · Fruit Academy', page: 'education' },
          { name: 'Culture and science', text: 'Museums, orchestras and theaters with a long history, looking to sell from their own site.', clients: 'Orquesta Sinfónica de Minería', page: 'culture' },
        ],
      },
      cases: {
        heading: 'Published work *you can review.*',
        ids: ['ancient', 'mineria', 'mexico-pacific', 'ciencia'],
      },
      cities: {
        heading: 'From Stamford to Groton: *what your site needs across Connecticut.*',
        intro: 'The southwest looks toward New York, Hartford has lived on insurance for generations, New Haven revolves around Yale, and the eastern shore around shipbuilding.',
        needLabel: 'Who’s looking for you',
        buildLabel: 'What your site should do',
        items: [
          { name: 'Stamford, Greenwich and Norwalk', tags: 'Finance · Corporate · Services', need: 'Buyers who also look at New York vendors and compare without saying so.', build: 'A careful image, proven experience and a direct contact, with no inflated claims.' },
          { name: 'Hartford', tags: 'Insurance · Healthcare · Government', need: 'Insurers and their vendors, with formal purchasing teams and long processes.', build: 'Clear capabilities, security and data information that’s easy to find, and copy a committee can review.' },
          { name: 'New Haven', tags: 'University · Biotech · Healthcare', need: 'Science companies starting near Yale, looking for partners, funding and talent.', build: 'Your science explained in layers, with your team and publications in view.' },
          { name: 'Bridgeport and Waterbury', tags: 'Manufacturing · Aerospace · Services', need: 'Manufacturers with deep craft and suppliers in the aerospace chain.', build: 'Capabilities, certifications and a quote request that accepts drawings.' },
          { name: 'Groton and the eastern shore', tags: 'Shipbuilding · Tourism · Pharma', need: 'Suppliers to large contractors and seasonal businesses along the coast.', build: 'Formal information for buyers and simple booking for visitors.' },
        ],
      },
      process: PROCESS.en,
      commitments: COMMITMENTS.en,
      faq: {
        heading: 'Questions from companies *in Connecticut.*',
        items: [
          { question: 'How much does a website cost in Connecticut?', answer: 'It depends on how many pages it has, whether there’s a portal and how much internal review it needs. We go over it on a free call, and then you get a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do web design in Hartford, Stamford and New Haven?', answer: 'Yes, and in Bridgeport, Norwalk, Greenwich, Waterbury and Groton. We work online across Connecticut.' },
          { question: 'Do you build websites for small businesses in Connecticut?', answer: 'Yes, such as service firms and family businesses. A brief, well-written site that reads easily on a phone may be enough. You know the price before deciding.' },
          { question: 'Where is your team?', answer: 'In Cuernavaca, Mexico, since 1998. We’re one hour behind Connecticut in winter and two in summer, and we meet during your working hours. We have no office here, and you can meet the team further down this page.' },
          { question: 'Does my company need to comply with the Connecticut privacy law?', answer: 'It might. The Connecticut Data Privacy Act has been in force since July 2023, had changes take effect in July 2026 and depends on how much data you handle. If it does, we add the privacy notice your advisor defines, plus cookie controls. Your advisor confirms whether it applies.' },
          { question: 'How do you work with a compliance team that reviews everything?', answer: 'We put them on the calendar from the proposal. We send copy and screens in parts for review and keep a written record of what’s approved. Nothing goes live without their sign-off. If that review takes time, the dates account for it.' },
          { question: 'Do you offer SEO for Connecticut companies?', answer: 'Yes. Every site includes the basics: titles, descriptions, speed and structured data. Advanced SEO, quoted separately, adds content, pages by service and optimization for AI search.' },
          ...commonFaq('en', 'copy', 'redesign'),
        ],
      },
      cta: { titleLead: 'Tell us what your Connecticut firm does', titleAccent: 'and who has to approve the website.' },
      linkLabel: 'Websites for Connecticut companies',
      serviceName: 'Web Design and UX/UI for Connecticut Companies',
      howToDescription: 'How a Connecticut company goes with Aurin from first message to a live site, with every line reviewed by its own team.',
    },
  },
};
