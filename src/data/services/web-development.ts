import type { Service } from './types';

export const webDevelopment: Service = {
  id: 'web-development',
  slug: { es: 'desarrollo-web', en: 'web-development' },
  cases: ['ingles-individual', 'el-rollo', 'ciencia', 'mexico-pacific'],
  copy: {
    es: {
      seo: {
        title: 'Desarrollo web a la medida para empresas en EE. UU. | Aurin',
        description:
          'Desarrollo de sitios y aplicaciones web rápidos, accesibles y medibles: front-end, back-end, administrador de contenidos e integraciones, con SEO técnico desde el primer día.',
      },
      name: 'Desarrollo web',
      summary: 'Sitios y aplicaciones web rápidos, accesibles y medibles, listos para crecer. SEO técnico y rendimiento desde el primer día.',
      tags: 'Desarrollo a la medida · Aplicaciones web · SEO técnico',
      hero: {
        eyebrow: 'Desarrollo web',
        titleLead: 'Desarrollo web rápido, medible',
        titleAccent: 'y listo para crecer.',
        description:
          'Programamos sitios, aplicaciones web y sistemas a la medida: front-end, back-end, administrador de contenidos e integraciones. Cada proyecto sale con SEO técnico y rendimiento medido.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Plataformas para',
        items: ['Educación', 'Turismo', 'Investigación', 'Salud', 'Energía', 'Cultura'],
      },
      approach: {
        eyebrow: 'Cómo lo construimos',
        heading: 'Código que carga rápido y se puede mantener.',
        text: 'La velocidad de un sitio cambia su posición en Google y cuántas visitas se convierten en clientes. Por eso medimos el rendimiento desde el inicio, escribimos HTML semántico y accesible y dejamos un administrador para que tu equipo actualice contenidos sin depender de nosotros. Si el proyecto lo pide, conectamos pagos, boletos, reservas, CRM u otros sistemas.',
        layers: ['Front-end y rendimiento', 'Back-end e integraciones', 'Pruebas y lanzamiento'],
      },
      deliverables: {
        eyebrow: 'Qué incluye',
        heading: 'Del diseño aprobado a un sitio en producción.',
        items: [
          { title: 'Front-end a la medida', text: 'Maquetación fiel al diseño, responsive y accesible, con animaciones que no frenan la carga.' },
          { title: 'Back-end y sistemas de gestión', text: 'Paneles para administrar alumnos, clases, pagos o sucursales, como el sistema de Inglés Individual.' },
          { title: 'Administrador de contenidos', text: 'Tu equipo edita textos, imágenes y páginas sin tocar código.' },
          { title: 'Integraciones', text: 'Venta de boletos, pagos, formularios, CRM y analítica conectados a tu sitio, como en El Rollo.' },
          { title: 'SEO técnico', text: 'Estructura semántica, datos estructurados, sitemap, velocidad medida y versiones por idioma.' },
          { title: 'Lanzamiento y acompañamiento', text: 'Publicación, medición y ajustes después de salir en vivo.' },
        ],
      },
      process: {
        eyebrow: 'Proceso',
        heading: 'De la primera línea de código al lanzamiento.',
        steps: [
          { name: 'Arquitectura técnica', text: 'Elegimos tecnología, hospedaje e integraciones según lo que necesita tu proyecto, no por costumbre.' },
          { name: 'Avances que revisas', text: 'Entregas parciales que revisas en un sitio de pruebas, no todo al final.' },
          { name: 'Pruebas', text: 'Navegadores, móviles, accesibilidad, velocidad y formularios, antes de publicar.' },
          { name: 'Lanzamiento', text: 'Publicamos, configuramos la medición y acompañamos los primeros ajustes.' },
        ],
      },
      cases: { eyebrow: 'Casos de desarrollo web', heading: 'Sitios, apps y sistemas que programamos.' },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        heading: 'Sobre el desarrollo de tu sitio o plataforma.',
        items: [
          { question: '¿Con qué tecnología desarrollan?', answer: 'Elegimos según el proyecto: sitios estáticos muy rápidos para sitios corporativos y aplicaciones con back-end y base de datos cuando hay usuarios, pagos o gestión interna.' },
          { question: '¿Mi equipo podrá actualizar el sitio?', answer: 'Sí. Incluimos un administrador de contenidos para editar textos, imágenes y páginas sin programar.' },
          { question: '¿El sitio queda optimizado para Google?', answer: 'Sí. Sale con SEO técnico: HTML semántico, datos estructurados, sitemap, velocidad medida y versiones por idioma.' },
          { question: '¿Mi sitio aparecerá en ChatGPT o Perplexity?', answer: 'Lo preparamos para eso: contenido claro que responde preguntas, datos estructurados, llms.txt y acceso permitido a los rastreadores de IA. Ningún proveedor puede garantizar que te citen, pero así le das a esos buscadores lo que necesitan.' },
          { question: '¿Pueden rehacer mi sitio actual sin perder posiciones en Google?', answer: 'Sí. Revisamos lo que hoy funciona, conservamos o redirigimos las URLs que ya posicionan y migramos el contenido.' },
          { question: '¿Dan mantenimiento después del lanzamiento?', answer: 'Sí. Acompañamos después del lanzamiento para medir, corregir y mejorar.' },
        ],
      },
      cta: { titleLead: 'Construyamos algo que llegue', titleAccent: 'más lejos.' },
    },
    en: {
      seo: {
        title: 'Custom Web Development for US Businesses | Aurin',
        description:
          'Fast, accessible, measurable websites and web apps: front-end, back-end, content management and integrations, with technical SEO from day one.',
      },
      name: 'Web development',
      summary: 'Fast, accessible, measurable websites and web apps, ready to scale. Technical SEO and performance from day one.',
      tags: 'Custom development · Web apps · Technical SEO',
      hero: {
        eyebrow: 'Web development',
        titleLead: 'Web development that’s fast, measurable',
        titleAccent: 'and ready to scale.',
        description:
          'We build websites, web apps and custom systems: front-end, back-end, content management and integrations. Every project ships with technical SEO and measured performance.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'Platforms for',
        items: ['Education', 'Tourism', 'Research', 'Healthcare', 'Energy', 'Culture'],
      },
      approach: {
        eyebrow: 'How we build it',
        heading: 'Code that loads fast and stays maintainable.',
        text: 'A site’s speed changes where it ranks on Google and how many visitors become customers. That’s why we measure performance from the start, write semantic, accessible HTML and leave a content manager so your team can update the site without depending on us. When the project needs it, we connect payments, ticketing, bookings, CRM or other systems.',
        layers: ['Front-end and performance', 'Back-end and integrations', 'Testing and launch'],
      },
      deliverables: {
        eyebrow: 'What’s included',
        heading: 'From approved design to a live website.',
        items: [
          { title: 'Custom front-end', text: 'Pixel-faithful, responsive and accessible build, with animations that don’t slow down loading.' },
          { title: 'Back-end and management systems', text: 'Dashboards to manage students, classes, payments or branches, like the Inglés Individual system.' },
          { title: 'Content management', text: 'Your team edits copy, images and pages without touching code.' },
          { title: 'Integrations', text: 'Ticketing, payments, forms, CRM and analytics connected to your site, like at El Rollo.' },
          { title: 'Technical SEO', text: 'Semantic structure, structured data, sitemap, measured speed and language versions.' },
          { title: 'Launch and support', text: 'Go-live, measurement and adjustments after launch.' },
        ],
      },
      process: {
        eyebrow: 'Process',
        heading: 'From the first line of code to launch.',
        steps: [
          { name: 'Technical architecture', text: 'We pick technology, hosting and integrations for what your project needs, not out of habit.' },
          { name: 'Progress you can review', text: 'Partial releases you review on a staging site, not everything at the end.' },
          { name: 'Testing', text: 'Browsers, mobile, accessibility, speed and forms, before going live.' },
          { name: 'Launch', text: 'We go live, set up measurement and support the first adjustments.' },
        ],
      },
      cases: { eyebrow: 'Web development work', heading: 'Websites, apps and systems we built.' },
      faq: {
        eyebrow: 'FAQ',
        heading: 'About building your website or platform.',
        items: [
          { question: 'What technology do you build with?', answer: 'It depends on the project: very fast static sites for corporate websites, and apps with a back-end and database when there are users, payments or internal management.' },
          { question: 'Will my team be able to update the site?', answer: 'Yes. We include a content manager to edit copy, images and pages without coding.' },
          { question: 'Is the site optimized for Google?', answer: 'Yes. It ships with technical SEO: semantic HTML, structured data, sitemap, measured speed and language versions.' },
          { question: 'Will my site show up in ChatGPT or Perplexity?', answer: 'We prepare it for that: clear content that answers questions, structured data, llms.txt and access for AI crawlers. No one can guarantee you will be cited, but this gives those search engines what they need.' },
          { question: 'Can you rebuild my current site without losing Google rankings?', answer: 'Yes. We review what works today, keep or redirect the URLs that already rank and migrate the content.' },
          { question: 'Do you offer maintenance after launch?', answer: 'Yes. We stay on after launch to measure, fix and improve.' },
        ],
      },
      cta: { titleLead: 'Let’s build something that goes', titleAccent: 'further.' },
    },
  },
};
