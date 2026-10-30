import type { Service } from './types';

/**
 * Búsqueda: "agencia de diseño UX/UI" / "UX/UI design agency" + apps y plataformas. Comprador: una empresa
 * con app, plataforma o software (o por lanzarlo) que pierde usuarios porque no se entiende. Se vende:
 * menos abandono, menos soporte, decisiones probadas con usuarios. Sin nombres de clientes.
 */
export const uxUiDesign: Service = {
  id: 'ux-ui-design',
  slug: { es: 'diseno-ux-ui', en: 'ux-ui-design' },
  cases: ['ancient', 'grupo-estrella', 'fruit-academy', 'ingles-individual'],
  copy: {
    es: {
      seo: {
        title: 'Agencia de diseño UX/UI en Estados Unidos | Apps | Aurin',
        description:
          'Diseño UX/UI de apps y plataformas para empresas en Estados Unidos y Canadá: probamos el prototipo con tus usuarios antes de programar. Llamada gratis.',
      },
      name: 'Diseño UX/UI',
      summary: 'Apps y plataformas que la gente entiende desde el primer uso: investigación con usuarios, prototipos probados y un sistema de diseño para tu equipo.',
      tags: 'Apps móviles · Plataformas web · Sistemas de diseño',
      hero: {
        titleLead: 'Diseño UX/UI que convierte usuarios',
        titleAccent: 'en clientes que se quedan.',
        description:
          'Para empresas en EE. UU. con app o plataforma: encontramos dónde se atoran tus usuarios y diseñamos pantallas que se entienden.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Ya diseñamos apps y plataformas para',
        items: ['Wallets y remesas', 'Logística', 'Educación', 'Legal', 'Turismo'],
      },
      approach: {
        heading: 'Decisiones de diseño con evidencia, *no con gustos.*',
        text: 'Cada paso confuso de tu app es un usuario que se va o una llamada más a soporte. Por eso hablamos con quienes la usan, vemos dónde se pierden y probamos cada cambio con personas reales antes de programar.',
        layers: ['Investigación con usuarios', 'Flujos y arquitectura', 'Prototipos y pruebas'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Pantallas bonitas que nadie entiende',
            items: ['Se diseña con gustos, no con usuarios', 'La gente se atora y abandona', 'Más llamadas y correos a soporte', 'Se programa sin probar el diseño', 'Tu equipo de desarrollo tiene que adivinar'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un producto que la gente usa',
            items: ['Decisiones tomadas con usuarios reales', 'Cada tarea en menos pasos', 'Menos dudas y menos llamadas a soporte', 'Prototipo probado antes de programar', 'Un sistema de diseño que tu equipo sigue'],
          },
        },
      },
      deliverables: {
        heading: 'Qué incluye el diseño UX/UI de *tu app o plataforma.*',
        intro: 'Todo viene detallado en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Users', title: 'Entrevistas con tus usuarios', text: 'Hablamos con ellos y revisamos tu producto actual para saber qué los frena.' },
          { icon: 'Workflow', title: 'Cada tarea paso a paso', text: 'Registro, pagos, envíos o reservas: el camino más corto, sin callejones sin salida.' },
          { icon: 'Network', title: 'Menús y secciones claros', text: 'Cómo se organiza y se nombra cada parte, para que la gente encuentre lo que busca.' },
          { icon: 'MousePointerClick', title: 'Un prototipo que se prueba', text: 'Pantallas navegables que probamos con usuarios reales antes de programar.' },
          { icon: 'Smartphone', title: 'Diseño de cada pantalla', text: 'Para celular y web, con tu marca, incluidos mensajes de error y pantallas vacías.' },
          { icon: 'Layers', title: 'Sistema de diseño', text: 'Botones, colores y reglas documentados, para que tu equipo diseñe y programe más rápido.' },
        ],
      },
      process: {
        heading: 'De lo que frena a tus usuarios *a pantallas listas para programar.*',
        steps: [
          { name: 'Llamada gratis y propuesta', text: 'Nos cuentas de tu producto, tus usuarios y lo que quieres mejorar.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Investigar', text: 'Entrevistamos a tus usuarios y revisamos tu producto actual.', gets: 'Lo que los frena, en orden de importancia.' },
          { name: 'Prototipar y probar', text: 'Diseñamos los flujos clave y los probamos con usuarios reales.', gets: 'Un prototipo probado y ajustado.' },
          { name: 'Diseñar y entregar', text: 'Terminamos cada pantalla y acompañamos a tu equipo mientras programa.', gets: 'Pantallas finales y sistema de diseño.' },
        ],
      },
      cases: { heading: 'Apps y plataformas que *diseñamos.*' },
      guarantees: {
        heading: 'Sin riesgo *para ti.*',
        intro: 'Rediseñar un producto no debería ser una apuesta. Todo esto va por escrito en tu propuesta.',
        items: [
          { title: 'Probado antes de programar', text: 'Probamos el prototipo con usuarios reales. Tu equipo programa algo que ya funciona.' },
          { title: 'Precio cerrado, sin cobros sorpresa', text: 'El precio de la propuesta es el que pagas. Si quieres agregar pantallas, te decimos cuánto cuesta antes y tú decides.' },
          { title: 'Todos los archivos son tuyos', text: 'Diseños, prototipos y sistema de diseño quedan en tu cuenta, editables, para siempre.' },
          { title: 'Fechas y acompañamiento por escrito', text: 'Cada etapa tiene su fecha, y acompañamos a tu equipo de desarrollo hasta que lo construye.' },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre *diseño UX/UI.*',
        items: [
          { question: '¿Cuánto cuesta el diseño UX/UI de una app?', answer: 'Depende de cuántos flujos y pantallas lleva y de si hace falta investigación con usuarios. Antes de empezar recibes una propuesta con el precio cerrado, lo que incluye y las fechas.', pending: 'Agregar un rango real (desde $X USD): una cifra responde mejor la búsqueda.' },
          { question: '¿Qué es el diseño UX/UI?', answer: 'UX (experiencia de usuario) es cómo funciona un producto: qué pasos sigue la gente y qué tan fácil logra lo que busca. UI (interfaz de usuario) es cómo se ve: pantallas, botones, tipografía y color. Los diseñamos juntos.' },
          { question: '¿Cuánto tarda un proyecto de UX/UI?', answer: 'Depende del número de flujos y pantallas. La propuesta incluye las fechas de cada etapa.' },
          { question: '¿Diseñan apps móviles?', answer: 'Sí. Diseñamos apps para iPhone y Android y plataformas web: wallets, remesas, logística, educación y sistemas de gestión, entre otras.' },
          { question: '¿Pueden mejorar una app que ya existe?', answer: 'Sí. Empezamos por ver dónde se atoran tus usuarios hoy y mejoramos primero lo que más impacto tiene, sin rehacer lo que ya funciona.' },
          { question: '¿Pueden trabajar con nuestro equipo de desarrollo?', answer: 'Sí. Entregamos prototipos, sistema de diseño y especificaciones, y acompañamos a tu equipo mientras programa. También podemos programarlo nosotros.' },
          { question: '¿Qué recibo al terminar?', answer: 'Las pantallas finales en Figma, el prototipo navegable, el sistema de diseño y la documentación para desarrollo. Todo queda en tu cuenta.' },
          { question: '¿Tienen experiencia en fintech?', answer: 'Sí. Diseñamos flujos para wallets, remesas, criptomonedas, factoraje y banca empresarial.' },
        ],
      },
      cta: { titleLead: '¿Tus usuarios se atoran en tu app?', titleAccent: 'Lo resolvemos.' },
    },
    en: {
      seo: {
        title: 'UX/UI Design Agency for Apps in the US & Canada | Aurin',
        description:
          'UX/UI design for apps and platforms of US and Canadian companies: we research your users and test the prototype before any code is written. Book a free call.',
      },
      name: 'UX/UI design',
      summary: 'Apps and platforms people understand from the first use: user research, tested prototypes and a design system for your team.',
      tags: 'Mobile apps · Web platforms · Design systems',
      hero: {
        titleLead: 'UX/UI design that turns users',
        titleAccent: 'into customers who stay.',
        description:
          'For companies with an app or platform: we find where your users get stuck and design screens they understand right away.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'We’ve designed apps and platforms for',
        items: ['Wallets and remittances', 'Logistics', 'Education', 'Legal', 'Tourism'],
      },
      approach: {
        heading: 'Design decisions based on evidence, *not taste.*',
        text: 'Every confusing step in your app is a user who leaves or one more support call. So we talk to the people who use it, see where they get lost and test every change with real people before any code.',
        layers: ['User research', 'Flows and architecture', 'Prototypes and testing'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'Pretty screens nobody understands',
            items: ['Designed on taste, not with users', 'People get stuck and drop off', 'More support calls and emails', 'Built without testing the design', 'Your developers have to guess'],
          },
          good: {
            label: 'With Aurin',
            title: 'A product people actually use',
            items: ['Decisions made with real users', 'Every task in fewer steps', 'Fewer questions and support calls', 'Prototype tested before any code', 'A design system your team follows'],
          },
        },
      },
      deliverables: {
        heading: 'What’s included in the UX/UI design of *your app or platform.*',
        intro: 'Everything is detailed in the proposal, with price and dates.',
        items: [
          { icon: 'Users', title: 'Interviews with your users', text: 'We talk to them and review your current product to learn what holds them back.' },
          { icon: 'Workflow', title: 'Every task, step by step', text: 'Sign-up, payments, transfers or bookings: the shortest path, with no dead ends.' },
          { icon: 'Network', title: 'Clear menus and sections', text: 'How every part is organized and named, so people find what they’re looking for.' },
          { icon: 'MousePointerClick', title: 'A prototype we test', text: 'Clickable screens we test with real users before any code is written.' },
          { icon: 'Smartphone', title: 'Every screen designed', text: 'For mobile and web, in your brand, including error messages and empty states.' },
          { icon: 'Layers', title: 'Design system', text: 'Documented buttons, colors and rules, so your team designs and builds faster.' },
        ],
      },
      process: {
        heading: 'From what holds your users back *to screens ready to build.*',
        steps: [
          { name: 'Free call and proposal', text: 'You tell us about your product, your users and what you want to improve.', gets: 'A proposal with price, what’s included and dates.' },
          { name: 'Research', text: 'We interview your users and review your current product.', gets: 'What holds them back, ranked by impact.' },
          { name: 'Prototype and test', text: 'We design the key flows and test them with real users.', gets: 'A tested, refined prototype.' },
          { name: 'Design and hand off', text: 'We finish every screen and support your team while they build.', gets: 'Final screens and a design system.' },
        ],
      },
      cases: { heading: 'Apps and platforms *we designed.*' },
      guarantees: {
        heading: 'Zero risk *for you.*',
        intro: 'Redesigning a product shouldn’t be a gamble. All of this goes in writing in your proposal.',
        items: [
          { title: 'Tested before any code', text: 'We test the prototype with real users. Your team builds something that already works.' },
          { title: 'Fixed price, no surprise charges', text: 'The price in the proposal is what you pay. Want more screens? We tell you the cost first, and you decide.' },
          { title: 'All the files are yours', text: 'Designs, prototypes and the design system stay in your account, editable, forever.' },
          { title: 'Dates and support in writing', text: 'Every stage has its date, and we support your developers until it’s built.' },
        ],
      },
      faq: {
        heading: 'UX/UI design *questions, answered.*',
        items: [
          { question: 'How much does UX/UI design for an app cost?', answer: 'It depends on how many flows and screens it has and whether user research is needed. Before we start, you get a proposal with a fixed price, what’s included and the dates.', pending: 'Add a real range (from $X): a number answers the search better.' },
          { question: 'What is UX/UI design?', answer: 'UX (user experience) is how a product works: the steps people follow and how easily they get what they want. UI (user interface) is how it looks: screens, buttons, type and color. We design them together.' },
          { question: 'How long does a UX/UI project take?', answer: 'It depends on the number of flows and screens. The proposal includes the date for each stage.' },
          { question: 'Do you design mobile apps?', answer: 'Yes. We design iPhone and Android apps and web platforms: wallets, remittances, logistics, education and management systems, among others.' },
          { question: 'Can you improve an app that already exists?', answer: 'Yes. We start by seeing where your users get stuck today and fix what has the most impact first, without redoing what already works.' },
          { question: 'Can you work with our development team?', answer: 'Yes. We deliver prototypes, a design system and specs, and support your team while they build. We can also build it ourselves.' },
          { question: 'What do I get at the end?', answer: 'The final screens in Figma, the clickable prototype, the design system and the documentation for development. Everything stays in your account.' },
          { question: 'Do you have fintech experience?', answer: 'Yes. We have designed flows for wallets, remittances, crypto, factoring and business banking.' },
        ],
      },
      cta: { titleLead: 'Are your users getting stuck in your app?', titleAccent: 'We’ll fix it.' },
    },
  },
};
