import type { Service } from './types';

/**
 * Búsqueda: "desarrollo web a la medida" / "custom web development company". Comprador: un negocio cuyo
 * sitio tiene que HACER cosas (cobrar, agendar, dar acceso a clientes, conectarse con sus sistemas).
 * Diseño web vende el sitio que convence; aquí se vende lo que el sitio hace. Sin nombres de clientes.
 */
export const webDevelopment: Service = {
  id: 'web-development',
  slug: { es: 'desarrollo-web', en: 'web-development' },
  cases: ['ingles-individual', 'el-rollo', 'ciencia', 'mexico-pacific'],
  copy: {
    es: {
      seo: {
        title: 'Desarrollo web a la medida en Estados Unidos | Aurin',
        description:
          'Desarrollo web a la medida en Estados Unidos: pagos, reservas, portales y sistemas conectados con tus herramientas. Precio cerrado. Llamada gratis.',
      },
      name: 'Desarrollo web',
      summary: 'Sitios y sistemas a la medida que cobran, agendan y se conectan con tus herramientas. Tu equipo los actualiza sin programar.',
      tags: 'Pagos y reservas · Portales y sistemas · Integraciones',
      hero: {
        titleLead: 'Desarrollo web a la medida:',
        titleAccent: 'tu sitio cobra, agenda y trabaja solo.',
        description:
          'Para empresas en EE. UU. que necesitan más que páginas: pagos en línea, reservas, portales para tus clientes y sistemas internos, conectados con las herramientas que ya usas.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Ya programamos sitios y sistemas para',
        items: ['Educación', 'Turismo', 'Legal', 'Energía', 'Cultura'],
      },
      approach: {
        heading: 'Un sitio que hace el trabajo, *no uno que te da más trabajo.*',
        text: 'Muchos sitios se arman con plantillas y plugins que se rompen con cada actualización y cargan lento en el celular. Nosotros programamos a la medida lo que tu negocio necesita: cobrar, agendar, dar acceso a tus clientes o conectar tus sistemas.',
        layers: ['Lo que tu sitio tiene que hacer', 'Cómo se conecta con tus herramientas', 'Pruebas y lanzamiento'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Una plantilla que se queda corta',
            items: ['Plugins que fallan con cada actualización', 'Lento en el celular', 'Para cambiar un texto dependes del programador', 'No se conecta con tus pagos ni con tu CRM', 'Las tareas se siguen haciendo a mano'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio hecho a la medida',
            items: ['Código propio, sin plugins que se rompan', 'Carga rápido, también en el celular', 'Tu equipo lo edita sin programar', 'Conectado con tus pagos, tu CRM y tus herramientas', 'Cobra, agenda y responde aunque no estés'],
          },
        },
      },
      deliverables: {
        heading: 'Qué puede hacer *tu sitio.*',
        intro: 'Lo que necesites, en la propuesta con precio y fechas. Lo más común:',
        items: [
          { icon: 'CreditCard', title: 'Pagos y ventas en línea', text: 'Tus clientes pagan con tarjeta desde el sitio: productos, boletos, servicios o anticipos.' },
          { icon: 'CalendarCheck', title: 'Reservas y citas', text: 'Eligen día y hora, reciben su confirmación y a ti te llega todo ordenado.' },
          { icon: 'LayoutDashboard', title: 'Portales y sistemas internos', text: 'Cuentas para tus clientes y paneles para que tu equipo administre pedidos, alumnos o sucursales.' },
          { icon: 'Plug', title: 'Conectado con tus herramientas', text: 'Tu CRM, tu correo, tu facturación y tu analítica reciben los datos solos, sin copiar y pegar.' },
          { icon: 'PenTool', title: 'Un administrador fácil de usar', text: 'Tu equipo cambia textos, fotos y páginas sin tocar código ni esperar a nadie.' },
          { icon: 'ArrowRightLeft', title: 'Cambio de sitio sin perder Google', text: 'Si ya tienes un sitio, pasamos tu contenido y conservamos las páginas que hoy te traen visitas.' },
        ],
      },
      process: {
        heading: 'De la idea a tu sitio funcionando, *sin sorpresas.*',
        steps: [
          { name: 'Llamada gratis y propuesta', text: 'Nos cuentas qué tiene que hacer tu sitio y con qué herramientas trabajas hoy.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Plan', text: 'Definimos cada función, cada conexión y quién usa qué.', gets: 'La lista de funciones aprobada por ti.' },
          { name: 'Desarrollo con avances', text: 'Revisas el avance en un sitio de prueba mientras lo construimos, no todo al final.', gets: 'Acceso al sitio de prueba.' },
          { name: 'Lanzamiento y soporte', text: 'Lo probamos en celulares y navegadores, lo publicamos y acompañamos los primeros ajustes.', gets: 'Tu sitio en línea y funcionando.' },
        ],
      },
      cases: { heading: 'Sitios, apps y sistemas que *programamos.*' },
      guarantees: {
        heading: 'Sin riesgo *para ti.*',
        intro: 'Un desarrollo no debería ser una caja negra. Todo esto va por escrito en tu propuesta.',
        items: [
          { title: 'Lo pruebas antes de publicar', text: 'Revisas cada función en un sitio de prueba. Se publica cuando tú lo apruebas.' },
          { title: 'Precio cerrado, sin cobros sorpresa', text: 'El precio de la propuesta es el que pagas. Si quieres agregar algo, te decimos cuánto cuesta antes y tú decides.' },
          { title: 'El código es tuyo', text: 'Código, dominio, hosting y accesos quedan a tu nombre. No dependes de nosotros para seguir.' },
          { title: 'Fechas y soporte por escrito', text: 'Cada etapa tiene su fecha, y la propuesta dice cómo te acompañamos después del lanzamiento.' },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre *desarrollo web a la medida.*',
        items: [
          { question: '¿Cuánto cuesta el desarrollo web a la medida?', answer: 'Depende de lo que tiene que hacer tu sitio: pagos, reservas, cuentas de usuario o conexiones con otros sistemas. Antes de empezar recibes una propuesta con el precio cerrado, lo que incluye y las fechas.', pending: 'Agregar un rango real (desde $X USD): una cifra responde mejor la búsqueda.' },
          { question: '¿Cuánto tarda?', answer: 'Depende de cuántas funciones lleva. Las fechas de cada etapa vienen en la propuesta y revisas avances durante el desarrollo.' },
          { question: '¿Me conviene WordPress o un sitio a la medida?', answer: 'Si solo necesitas publicar páginas, algo sencillo puede bastar y te lo decimos. Cuando hay pagos, reservas, usuarios o sistemas, a la medida es más rápido, más seguro y no depende de plugins de terceros.' },
          { question: '¿Pueden conectar pagos, reservas o mi CRM?', answer: 'Sí. Conectamos pagos con tarjeta, calendarios de reservas, CRM, correo, facturación y analítica, para que los datos lleguen solos a donde los necesitas.' },
          { question: '¿Mi equipo podrá actualizar el sitio?', answer: 'Sí. Incluimos un administrador para cambiar textos, imágenes y páginas sin programar.' },
          { question: '¿Pueden rehacer mi sitio sin perder posiciones en Google?', answer: 'Sí. Revisamos qué páginas te traen visitas hoy, las conservamos o las redirigimos y pasamos el contenido.' },
          { question: '¿El código es mío?', answer: 'Sí. Al terminar, el código, el dominio, el hosting y los accesos quedan a tu nombre.' },
          { question: '¿Mi sitio aparecerá en ChatGPT o Perplexity?', answer: 'Lo preparamos para eso: contenido claro que responde preguntas, datos estructurados y acceso permitido a los buscadores con IA. Nadie puede garantizar que te citen, pero así les das lo que necesitan.' },
          { question: '¿Dan mantenimiento después del lanzamiento?', answer: 'Sí. Te acompañamos después del lanzamiento para medir, corregir y mejorar.' },
        ],
      },
      cta: { titleLead: '¿Tu sitio tiene que cobrar, agendar o conectar sistemas?', titleAccent: 'Lo construimos.' },
    },
    en: {
      seo: {
        title: 'Custom Web Development Company in the US | Aurin',
        description:
          'Custom web development for US businesses: payments, bookings, customer portals and systems connected to your tools. Fixed price. Book a free call.',
      },
      name: 'Web development',
      summary: 'Custom websites and systems that take payments, book appointments and connect to your tools. Your team updates them without code.',
      tags: 'Payments & bookings · Portals & systems · Integrations',
      hero: {
        titleLead: 'Custom web development:',
        titleAccent: 'your website sells, books and works on its own.',
        description:
          'For businesses that need more than pages: online payments, bookings, customer portals and internal systems, connected to the tools you already use.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'We’ve built websites and systems for',
        items: ['Education', 'Tourism', 'Legal', 'Energy', 'Culture'],
      },
      approach: {
        heading: 'A website that does the work, *not one that makes more work.*',
        text: 'Many websites are built on templates and plugins that break with every update and load slowly on phones. We build exactly what your business needs: taking payments, booking appointments, giving customers access or connecting your systems.',
        layers: ['What your website needs to do', 'How it connects to your tools', 'Testing and launch'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A template that falls short',
            items: ['Plugins that break with every update', 'Slow on phones', 'You need a developer to change a line of text', 'Doesn’t connect to your payments or CRM', 'Your team still does tasks by hand'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website built for your business',
            items: ['Custom-built, with no plugins to break', 'Loads fast, on phones too', 'Your team edits it without code', 'Connected to your payments, CRM and tools', 'Sells, books and replies even when you’re away'],
          },
        },
      },
      deliverables: {
        heading: 'What *your website can do.*',
        intro: 'Whatever you need, in the proposal with price and dates. The most common:',
        items: [
          { icon: 'CreditCard', title: 'Payments and online sales', text: 'Customers pay by card on your website: products, tickets, services or deposits.' },
          { icon: 'CalendarCheck', title: 'Bookings and appointments', text: 'They pick a day and time, get a confirmation, and you get everything organized.' },
          { icon: 'LayoutDashboard', title: 'Portals and internal systems', text: 'Accounts for your customers and dashboards for your team to manage orders, students or locations.' },
          { icon: 'Plug', title: 'Connected to your tools', text: 'Your CRM, email, invoicing and analytics get the data automatically, no copy and paste.' },
          { icon: 'PenTool', title: 'An easy content manager', text: 'Your team changes copy, photos and pages without touching code or waiting on anyone.' },
          { icon: 'ArrowRightLeft', title: 'Switch sites without losing Google', text: 'If you already have a website, we move your content and keep the pages that bring you traffic today.' },
        ],
      },
      process: {
        heading: 'From idea to a working website, *with no surprises.*',
        steps: [
          { name: 'Free call and proposal', text: 'You tell us what your website needs to do and which tools you use today.', gets: 'A proposal with price, what’s included and dates.' },
          { name: 'Plan', text: 'We define every feature, every connection and who uses what.', gets: 'The feature list, approved by you.' },
          { name: 'Development with progress', text: 'You review progress on a test site while we build it, not everything at the end.', gets: 'Access to the test site.' },
          { name: 'Launch and support', text: 'We test it on phones and browsers, take it live and support the first adjustments.', gets: 'Your website live and working.' },
        ],
      },
      cases: { heading: 'Websites, apps and systems *we built.*' },
      guarantees: {
        heading: 'Zero risk *for you.*',
        intro: 'Development shouldn’t be a black box. All of this goes in writing in your proposal.',
        items: [
          { title: 'Test it before it goes live', text: 'You review every feature on a test site. It goes live when you approve it.' },
          { title: 'Fixed price, no surprise charges', text: 'The price in the proposal is what you pay. Want to add something? We tell you the cost first, and you decide.' },
          { title: 'The code is yours', text: 'Code, domain, hosting and logins are in your name. You never depend on us to keep going.' },
          { title: 'Dates and support in writing', text: 'Every stage has its date, and the proposal says how we support you after launch.' },
        ],
      },
      faq: {
        heading: 'Custom web development *questions, answered.*',
        items: [
          { question: 'How much does custom web development cost?', answer: 'It depends on what your website needs to do: payments, bookings, user accounts or connections to other systems. Before we start, you get a proposal with a fixed price, what’s included and the dates.', pending: 'Add a real range (from $X): a number answers the search better.' },
          { question: 'How long does it take?', answer: 'It depends on how many features it has. The proposal has the date for each stage, and you review progress during development.' },
          { question: 'Should I use WordPress or a custom website?', answer: 'If you only need to publish pages, something simple may be enough, and we’ll tell you. When there are payments, bookings, users or systems, custom is faster, safer and doesn’t depend on third-party plugins.' },
          { question: 'Can you connect payments, bookings or my CRM?', answer: 'Yes. We connect card payments, booking calendars, CRM, email, invoicing and analytics, so the data reaches the right place automatically.' },
          { question: 'Will my team be able to update the website?', answer: 'Yes. We include a content manager to change copy, images and pages without code.' },
          { question: 'Can you rebuild my website without losing Google rankings?', answer: 'Yes. We check which pages bring you traffic today, keep or redirect them and move the content.' },
          { question: 'Do I own the code?', answer: 'Yes. When we finish, the code, domain, hosting and logins are in your name.' },
          { question: 'Will my website show up in ChatGPT or Perplexity?', answer: 'We prepare it for that: clear content that answers questions, structured data and access for AI search engines. No one can guarantee you’ll be cited, but this gives them what they need.' },
          { question: 'Do you offer maintenance after launch?', answer: 'Yes. We stay with you after launch to measure, fix and improve.' },
        ],
      },
      cta: { titleLead: 'Does your website need to take payments, book or connect systems?', titleAccent: 'We’ll build it.' },
    },
  },
};
