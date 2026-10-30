import type { Service } from '@/data/services';

/** Industria general de HOME.industries. aurin.mx tiene energía y constructoras solo para México. Sin nombres de clientes. */
export const energy: Service = {
  id: 'energy',
  slug: { es: 'diseno-web-energia-construccion', en: 'energy-construction-web-design' },
  cases: [],
  photo: 'ind-energy',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para energía y construcción en EE. UU. | Aurin',
        description:
          'Sitios y portales para empresas de energía, construcción e industria en EE. UU.: proyectos claros para inversionistas, clientes y comunidades.',
      },
      name: 'Energía y construcción',
      summary: 'Diseño y desarrollo web para empresas de energía, construcción e industria en EE. UU.',
      tags: 'Energía · Construcción · Industria · Operación en campo',
      hero: {
        titleLead: 'Diseño web para energía y construcción',
        titleAccent: 'a la altura de tus proyectos.',
        description:
          'Sitios y portales para energía, construcción e industria en EE. UU.: inversionistas y clientes entienden tus proyectos y siguen su avance.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Energía', 'Petróleo y gas', 'Energía solar', 'Constructoras', 'Ingeniería', 'Manufactura'],
      },
      approach: {
        heading: 'Tus proyectos son enormes: *tu sitio no puede verse pequeño.*',
        text: 'Un inversionista, un cliente o una comunidad cercana quieren entender qué construyes, con qué cuidado y qué tan sólida es tu empresa. Un sitio viejo con fotos genéricas manda el mensaje contrario. Y los avances viven en correos y hojas sueltas. Diseñamos las dos cosas: la cara pública que da confianza y los portales donde clientes e inversionistas siguen cada proyecto.',
        layers: ['Proyectos', 'Confianza', 'Operación'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que no está a la altura',
            items: ['Fotos genéricas de cascos y turbinas', 'Proyectos sin datos ni avance', 'Seguridad y medio ambiente en un PDF', 'Avances que se mandan por correo', 'Vecinos que no entienden el proyecto'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio a la altura de la obra',
            items: ['Tus proyectos reales, con fotos y datos', 'Avance y alcance de cada proyecto claros', 'Seguridad, permisos y comunidad explicados', 'Un portal con el avance de cada proyecto', 'Avisos a la comunidad también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Lo que entregamos a *tu empresa de energía o construcción.*',
        intro: 'Puedes arrancar con el sitio, el portal de inversionistas o la marca. Firmamos confidencialidad desde el inicio y la propuesta trae alcance, precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Un sitio a la altura de la empresa', service: 'web-design', text: 'Quién eres, qué construyes y dónde, con proyectos reales y lo que cuidas en seguridad y medio ambiente.' },
          { icon: 'Layers', title: 'Fichas de proyecto', text: 'Cada proyecto con su alcance, avance, fotos y datos, para clientes, inversionistas y comunidades.' },
          { icon: 'LayoutDashboard', title: 'Portales y tableros', service: 'web-development', text: 'Portales para inversionistas o clientes con avances, documentos y datos de operación en un solo lugar.' },
          { icon: 'Gem', title: 'Marca de la empresa', service: 'branding', text: 'Logo, imagen y guía de marca a la altura de tus proyectos, para tu sitio, tus obras y tus presentaciones.' },
          { icon: 'Users', title: 'Reclutamiento', text: 'Una sección de vacantes que explica cada puesto y deja aplicar desde el celular.' },
          { icon: 'Languages', title: 'Comunidades y cuadrillas', text: 'Avisos a comunidades, vacantes y seguridad en español, para vecinos de tus proyectos y equipos que lo hablan.' },
        ],
      },
      process: {
        heading: 'Del sitio de hoy a *uno a la altura de tus obras.*',
        steps: [
          { name: 'Llamada de arranque', text: 'Nos dices a quién tienes que convencer (inversionistas, clientes o comunidades) y qué información te piden más.', gets: 'Propuesta con alcance, precio y fechas, bajo confidencialidad.' },
          { name: 'Conocemos tus proyectos', text: 'Revisamos tu sitio, tus fotos y datos de obra, y hablamos con tu equipo comercial y de proyectos.', gets: 'Qué mostrar de cada proyecto y en qué orden.' },
          { name: 'Revisión con clientes', text: 'Clientes e inversionistas recorren un prototipo navegable y nos dicen qué les falta para decidir.', gets: 'Un diseño aprobado por quienes lo van a usar.' },
          { name: 'Puesta en marcha', text: 'Diseño final, programación y conexión con tus sistemas; después hosting y soporte.', gets: 'Sitio o portal publicado, con tus proyectos al día.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que nos preguntan en *energía y construcción.*',
        items: [
          { question: '¿Con qué tipo de empresas trabajan?', answer: 'Empresas de energía, petróleo y gas, energía solar, constructoras, ingeniería y manufactura.' },
          { question: '¿Pueden hacer un portal para clientes o inversionistas?', answer: 'Sí. Un portal con acceso privado donde ven el avance, los documentos y los datos de cada proyecto, conectado con tus sistemas si lo permiten.' },
          { question: '¿Pueden mostrar datos de nuestros proyectos en el sitio?', answer: 'Sí. Conectamos el sitio o el portal con tus datos si tus sistemas lo permiten, o diseñamos cómo actualizarlos fácilmente.' },
          { question: '¿Pueden publicar avisos para la comunidad en español?', answer: 'Sí. Escribimos en español los avisos, preguntas frecuentes y vacantes para vecinos y trabajadores, para que tu proyecto se explique igual en los dos idiomas.' },
          { question: '¿Cuidan la información confidencial?', answer: 'Sí. Firmamos acuerdos de confidencialidad, trabajamos con datos de ejemplo cuando se puede y esa información no pasa por herramientas de IA.' },
        ],
      },
      cta: { titleLead: 'Hagamos un sitio', titleAccent: 'a la altura de tus proyectos.' },
    },
    en: {
      seo: {
        title: 'Energy & Construction Website Design in the US | Aurin',
        description:
          'Websites and portals for US energy, construction and industrial companies: projects explained clearly for investors, clients and communities.',
      },
      name: 'Energy and construction',
      summary: 'Web design and development for US energy, construction and industrial companies.',
      tags: 'Energy · Construction · Industrial · Field operations',
      hero: {
        titleLead: 'Website design for energy and construction',
        titleAccent: 'that matches the scale of your projects.',
        description:
          'Websites and portals for US energy, construction and industrial companies: investors and clients understand your projects and track their progress.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Energy', 'Oil and gas', 'Solar', 'Construction', 'Engineering', 'Manufacturing'],
      },
      approach: {
        heading: 'Your projects are huge: *your website can’t look small.*',
        text: 'An investor, a client or a nearby community wants to understand what you build, how carefully and how solid your company is. An old website with generic photos sends the opposite message. And progress updates live in scattered emails and spreadsheets. We design both: the public face that builds trust and the portals where clients and investors follow every project.',
        layers: ['Projects', 'Trust', 'Operations'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that falls short',
            items: ['Generic photos of hard hats and turbines', 'Projects with no data or progress', 'Safety and environment in a PDF', 'Progress updates sent by email'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that builds trust',
            items: ['Your real projects, with photos and data', 'Scope and progress of each project made clear', 'Safety, permits and community explained', 'A portal with every project’s progress'],
          },
        },
      },
      deliverables: {
        heading: 'What we deliver for *your energy or construction company.*',
        intro: 'You can begin with the website, the investor portal or the brand. We sign an NDA from day one, and the proposal includes scope, price and dates.',
        items: [
          { icon: 'Monitor', title: 'A website that matches your company', service: 'web-design', text: 'Who you are, what you build and where, with real projects and what you do for safety and the environment.' },
          { icon: 'Layers', title: 'Project pages', text: 'Each project with its scope, progress, photos and data, for clients, investors and communities.' },
          { icon: 'LayoutDashboard', title: 'Portals and dashboards', service: 'web-development', text: 'Investor or client portals with progress, documents and operating data in one place.' },
          { icon: 'Gem', title: 'Company brand', service: 'branding', text: 'Logo, visual identity and brand guide that match your projects, for your website, your job sites and your presentations.' },
          { icon: 'Users', title: 'Recruiting', text: 'A careers section that explains each role and lets people apply from their phone.' },
        ],
      },
      process: {
        heading: 'From today’s website to *one that matches your job sites.*',
        steps: [
          { name: 'Kickoff call', text: 'You tell us who you need to convince (investors, clients or communities) and what information they ask for most.', gets: 'A proposal with scope, price and dates, under NDA.' },
          { name: 'Getting to know your projects', text: 'We review your website, photos and project data, and talk to your sales and project teams.', gets: 'What to show for each project, and in what order.' },
          { name: 'Client review', text: 'Clients and investors click through a prototype and tell us what they’re missing to decide.', gets: 'A design approved by the people who will use it.' },
          { name: 'Go-live', text: 'Final design, development and the connection to your systems; then hosting and support.', gets: 'Website or portal live, with your projects up to date.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *energy and construction* companies ask us.',
        items: [
          { question: 'What kinds of companies do you work with?', answer: 'Energy, oil and gas, solar, construction, engineering and manufacturing companies.' },
          { question: 'Can you build a portal for clients or investors?', answer: 'Yes. A private portal where they see progress, documents and data for each project, connected to your systems if they allow it.' },
          { question: 'Can you show our project data on the website?', answer: 'Yes. We connect the website or portal to your data if your systems allow it, or design an easy way to keep it updated.' },
          { question: 'Do you protect confidential information?', answer: 'Yes. We sign NDAs, use sample data when we can, and that information never goes through AI tools.' },
        ],
      },
      cta: { titleLead: 'Let’s build a website', titleAccent: 'that matches your projects.' },
    },
  },
};
