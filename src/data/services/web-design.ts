import type { Service } from './types';

export const webDesign: Service = {
  id: 'web-design',
  slug: { es: 'diseno-web', en: 'web-design' },
  cases: ['el-rollo', 'mineria', 'ingles-individual', 'mexico-pacific'],
  copy: {
    es: {
      seo: {
        title: 'Agencia de diseño web para empresas en EE. UU. | Aurin',
        description:
          'Diseño web a la medida: arquitectura de contenidos, diseño responsive y prototipos que apruebas antes de programar. Sitios corporativos y landing pages que convierten.',
      },
      name: 'Diseño web',
      summary: 'Sitios web a la medida de tu marca y de tu cliente: arquitectura de contenidos, diseño responsive y prototipos que apruebas antes de programar.',
      tags: 'Sitios corporativos · Landing pages · Diseño responsive',
      hero: {
        eyebrow: 'Diseño web',
        titleLead: 'Diseño web que explica',
        titleAccent: 'y convierte.',
        description:
          'Sitios corporativos y landing pages diseñados alrededor de tu cliente: qué busca, qué duda y qué lo convence. Apruebas el prototipo antes de escribir una línea de código.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Sitios para',
        items: ['Salud', 'Fintech', 'Educación', 'Turismo', 'Energía', 'Cultura'],
      },
      approach: {
        eyebrow: 'Cómo lo diseñamos',
        heading: 'Primero el contenido, después la forma.',
        text: 'Un buen sitio no empieza con colores: empieza con lo que tu cliente necesita encontrar. Ordenamos los contenidos, definimos qué página responde a qué pregunta y probamos el recorrido en un prototipo navegable. Con esa estructura aprobada, el diseño visual trabaja a favor de la conversión y no al revés.',
        layers: ['Arquitectura de contenidos', 'Wireframes y prototipo', 'Diseño visual responsive'],
      },
      deliverables: {
        eyebrow: 'Qué incluye',
        heading: 'Todo lo que necesita tu sitio, antes de programarlo.',
        items: [
          { title: 'Mapa del sitio y contenidos', text: 'Qué páginas existen, qué responde cada una y cómo se enlazan entre sí, pensado también para el SEO.' },
          { title: 'Wireframes y prototipo navegable', text: 'Recorres el sitio antes de que exista. Un cambio en esta etapa cuesta minutos, no semanas.' },
          { title: 'Diseño visual responsive', text: 'Cada página en escritorio, tableta y móvil, con tu identidad aplicada de forma consistente.' },
          { title: 'Textos que convierten', text: 'Títulos, llamados a la acción y textos que responden lo que tu cliente pregunta, en español e inglés.' },
          { title: 'Sistema de componentes', text: 'Botones, tarjetas y secciones reutilizables, para que el sitio crezca sin perder coherencia.' },
          { title: 'Archivos listos para desarrollo', text: 'Especificaciones y recursos exportados, para que el sitio programado sea fiel al diseño.' },
        ],
      },
      process: {
        eyebrow: 'Proceso',
        heading: 'Del primer boceto al sitio aprobado, en cuatro pasos.',
        steps: [
          { name: 'Descubrimiento', text: 'Entendemos tu negocio, a tu cliente y lo que hoy frena tus ventas o tus contactos.' },
          { name: 'Estructura', text: 'Mapa del sitio, contenidos y wireframes de las páginas clave.' },
          { name: 'Diseño', text: 'Diseño visual de cada página en escritorio y móvil, con rondas de revisión.' },
          { name: 'Entrega', text: 'Prototipo final y archivos para desarrollo, o lo programamos nosotros.' },
        ],
      },
      cases: { eyebrow: 'Casos de diseño web', heading: 'Sitios web que diseñamos.' },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        heading: 'Sobre el diseño de tu sitio web.',
        items: [
          { question: '¿Cuánto cuesta diseñar un sitio web?', answer: 'Depende del número de páginas, los idiomas y las funciones. Antes de empezar te enviamos una propuesta con lo que incluye, el precio y las fechas.' },
          { question: '¿Cuánto tarda el diseño de un sitio web?', answer: 'Una landing page toma menos que un sitio corporativo con varias secciones. La propuesta incluye las fechas de entrega.' },
          { question: '¿Puedo ver el diseño antes de que lo programen?', answer: 'Sí. Apruebas un prototipo navegable de las páginas clave y la programación empieza cuando el diseño está aprobado.' },
          { question: '¿Diseñan sitios bilingües en inglés y español?', answer: 'Sí. Diseñamos sitios bilingües con textos y estructura pensados para cada idioma, como el de Elite Home Health.' },
          { question: '¿También programan el sitio?', answer: 'Sí. Diseño y desarrollo web están en el mismo equipo, así el sitio publicado se ve igual que el diseño que aprobaste.' },
        ],
      },
      cta: { titleLead: 'Tu sitio puede llegar', titleAccent: 'más lejos.' },
    },
    en: {
      seo: {
        title: 'Web Design Agency for US Businesses | Aurin',
        description:
          'Custom web design: content architecture, responsive design and prototypes you approve before any code is written. Corporate websites and landing pages built to convert.',
      },
      name: 'Web design',
      summary: 'Websites built around your brand and your customer: content architecture, responsive design and prototypes you approve before any code is written.',
      tags: 'Corporate websites · Landing pages · Responsive design',
      hero: {
        eyebrow: 'Web design',
        titleLead: 'Web design that explains',
        titleAccent: 'and converts.',
        description:
          'Corporate websites and landing pages designed around your customer: what they look for, what they doubt and what convinces them. You approve the prototype before a single line of code.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'Websites for',
        items: ['Healthcare', 'Fintech', 'Education', 'Tourism', 'Energy', 'Culture'],
      },
      approach: {
        eyebrow: 'How we design it',
        heading: 'Content first, then form.',
        text: 'A good website doesn’t start with colors: it starts with what your customer needs to find. We organize the content, decide which page answers which question and test the journey in a clickable prototype. With that structure approved, the visual design works for conversion, not against it.',
        layers: ['Content architecture', 'Wireframes and prototype', 'Responsive visual design'],
      },
      deliverables: {
        eyebrow: 'What’s included',
        heading: 'Everything your website needs, before it’s built.',
        items: [
          { title: 'Sitemap and content plan', text: 'Which pages exist, what each one answers and how they link to each other, planned for SEO too.' },
          { title: 'Wireframes and clickable prototype', text: 'You walk through the site before it exists. A change at this stage takes minutes, not weeks.' },
          { title: 'Responsive visual design', text: 'Every page on desktop, tablet and mobile, with your brand applied consistently.' },
          { title: 'Copy that converts', text: 'Headlines, calls to action and copy that answer what your customer asks, in English and Spanish.' },
          { title: 'Component system', text: 'Reusable buttons, cards and sections, so the site can grow without losing consistency.' },
          { title: 'Developer-ready files', text: 'Specs and exported assets, so the built site matches the design.' },
        ],
      },
      process: {
        eyebrow: 'Process',
        heading: 'From first sketch to approved website, in four steps.',
        steps: [
          { name: 'Discovery', text: 'We learn your business, your customer and what is holding back your sales or leads.' },
          { name: 'Structure', text: 'Sitemap, content and wireframes for the key pages.' },
          { name: 'Design', text: 'Visual design of every page on desktop and mobile, with review rounds.' },
          { name: 'Handoff', text: 'Final prototype and developer files, or we build it ourselves.' },
        ],
      },
      cases: { eyebrow: 'Web design work', heading: 'Websites we designed.' },
      faq: {
        eyebrow: 'FAQ',
        heading: 'About designing your website.',
        items: [
          { question: 'How much does a website design cost?', answer: 'It depends on the number of pages, languages and features. Before we start, you get a proposal with what’s included, the price and the dates.' },
          { question: 'How long does a website design take?', answer: 'A landing page takes less time than a corporate website with several sections. The proposal includes the delivery dates.' },
          { question: 'Can I see the design before it’s built?', answer: 'Yes. You approve a clickable prototype of the key pages, and development starts once the design is approved.' },
          { question: 'Do you design bilingual English and Spanish websites?', answer: 'Yes. We design bilingual websites with copy and structure planned for each language, like Elite Home Health’s.' },
          { question: 'Do you also build the website?', answer: 'Yes. Web design and development are in the same team, so the live site looks exactly like the design you approved.' },
        ],
      },
      cta: { titleLead: 'Your website can go', titleAccent: 'further.' },
    },
  },
};
