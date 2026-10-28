import type { Service } from './types';

export const uxUiDesign: Service = {
  id: 'ux-ui-design',
  slug: { es: 'diseno-ux-ui', en: 'ux-ui-design' },
  cases: ['ancient', 'grupo-estrella', 'fruit-academy', 'ingles-individual'],
  copy: {
    es: {
      seo: {
        title: 'Agencia de diseño UX/UI para apps y plataformas | Aurin',
        description:
          'Diseño UX/UI basado en investigación con usuarios: flujos, prototipos y sistemas de diseño para apps y plataformas web de fintech, salud, educación y logística.',
      },
      name: 'Diseño UX/UI',
      summary: 'Investigación con usuarios, flujos, prototipos y sistemas de diseño. Interfaces que la gente entiende desde el primer uso.',
      tags: 'Investigación de usuarios · Prototipos · Sistemas de diseño',
      hero: {
        eyebrow: 'Diseño UX/UI',
        titleLead: 'Diseño UX/UI que se entiende',
        titleAccent: 'al primer uso.',
        description:
          'Investigamos a tus usuarios, definimos los flujos y diseñamos interfaces para apps y plataformas web. De wallets y remesas a sistemas de gestión y apps de logística.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Productos para',
        items: ['Fintech', 'Wallets y remesas', 'Logística', 'Educación', 'Salud', 'Turismo'],
      },
      approach: {
        eyebrow: 'Basado en investigación',
        heading: 'Decisiones de diseño con evidencia, no con gustos.',
        text: 'Antes de dibujar pantallas hablamos con quienes las van a usar. Entrevistas, mapas de recorrido y pruebas de usabilidad nos dicen dónde se pierde la gente y qué necesita ver para confiar. En productos financieros, donde cada paso cuenta, eso separa una app que se usa de una que se desinstala.',
        layers: ['Investigación con usuarios', 'Flujos y arquitectura', 'Prototipos y pruebas'],
      },
      deliverables: {
        eyebrow: 'Qué incluye',
        heading: 'Del problema del usuario a la interfaz lista para desarrollo.',
        items: [
          { title: 'Investigación con usuarios', text: 'Entrevistas, encuestas y análisis de tu producto actual para saber qué frena a tus usuarios.' },
          { title: 'Flujos de producto', text: 'Cada tarea paso a paso: registro, pagos, envíos, reservas. Sin callejones sin salida.' },
          { title: 'Arquitectura de información', text: 'Cómo se organiza y se nombra cada sección, para que la gente encuentre lo que busca.' },
          { title: 'Prototipos interactivos', text: 'Pantallas navegables que se prueban con usuarios reales antes de programar.' },
          { title: 'Diseño de interfaz (UI)', text: 'Pantallas para móvil y web con tu identidad, incluidos estados, errores y casos límite.' },
          { title: 'Sistema de diseño', text: 'Componentes, estilos y reglas documentadas, para que tu equipo diseñe y programe más rápido.' },
        ],
      },
      process: {
        eyebrow: 'Proceso',
        heading: 'Cómo pasamos de la investigación a la interfaz.',
        steps: [
          { name: 'Investigar', text: 'Entrevistas y análisis para entender a tus usuarios y a tu negocio.' },
          { name: 'Definir', text: 'Flujos, arquitectura y prioridades: qué se resuelve primero.' },
          { name: 'Prototipar y probar', text: 'Prototipos navegables probados con usuarios reales; ajustamos con lo que vemos.' },
          { name: 'Diseñar y entregar', text: 'Interfaz final, sistema de diseño y acompañamiento al equipo de desarrollo.' },
        ],
      },
      cases: { eyebrow: 'Casos de UX/UI', heading: 'Apps y plataformas que diseñamos.' },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        heading: 'Sobre el diseño UX/UI de tu producto.',
        items: [
          { question: '¿Qué es el diseño UX/UI?', answer: 'UX (experiencia de usuario) es cómo funciona un producto: qué pasos sigue la gente y qué tan fácil logra lo que busca. UI (interfaz de usuario) es cómo se ve: pantallas, botones, tipografía y color. Los diseñamos juntos.' },
          { question: '¿Diseñan apps móviles?', answer: 'Sí. Diseñamos apps móviles y plataformas web: wallets, remesas, banca empresarial, logística y educación, entre otras.' },
          { question: '¿Tienen experiencia en fintech?', answer: 'Sí. Diseñamos flujos y experiencias para wallets, remesas, criptomonedas, factoraje y banca empresarial.' },
          { question: '¿Pueden trabajar con nuestro equipo de desarrollo?', answer: 'Sí. Entregamos prototipos, sistema de diseño y especificaciones, y acompañamos a tu equipo durante el desarrollo. También podemos programarlo nosotros.' },
          { question: '¿Cuánto tarda un proyecto de UX/UI?', answer: 'Depende del número de flujos y pantallas. La propuesta incluye las fechas de entrega.' },
        ],
      },
      cta: { titleLead: 'Diseñemos un producto que llegue', titleAccent: 'más lejos.' },
    },
    en: {
      seo: {
        title: 'UX/UI Design Agency for Apps and Platforms | Aurin',
        description:
          'Research-based UX/UI design: user flows, prototypes and design systems for fintech, healthcare, education and logistics apps and web platforms.',
      },
      name: 'UX/UI design',
      summary: 'User research, flows, prototypes and design systems. Interfaces people understand from the first use.',
      tags: 'User research · Prototypes · Design systems',
      hero: {
        eyebrow: 'UX/UI design',
        titleLead: 'UX/UI design people understand',
        titleAccent: 'from the first use.',
        description:
          'We research your users, define the flows and design interfaces for apps and web platforms. From wallets and remittances to management systems and logistics apps.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'Products for',
        items: ['Fintech', 'Wallets and remittances', 'Logistics', 'Education', 'Healthcare', 'Tourism'],
      },
      approach: {
        eyebrow: 'Research-based',
        heading: 'Design decisions based on evidence, not taste.',
        text: 'Before drawing screens, we talk to the people who will use them. Interviews, journey maps and usability tests show us where people get lost and what they need to see to trust a product. In financial products, where every step counts, that is the difference between an app people use and one they uninstall.',
        layers: ['User research', 'Flows and architecture', 'Prototypes and testing'],
      },
      deliverables: {
        eyebrow: 'What’s included',
        heading: 'From the user’s problem to a developer-ready interface.',
        items: [
          { title: 'User research', text: 'Interviews, surveys and an analysis of your current product to learn what holds your users back.' },
          { title: 'Product flows', text: 'Every task step by step: sign-up, payments, transfers, bookings. No dead ends.' },
          { title: 'Information architecture', text: 'How each section is organized and named, so people find what they’re looking for.' },
          { title: 'Interactive prototypes', text: 'Clickable screens tested with real users before any code is written.' },
          { title: 'Interface design (UI)', text: 'Mobile and web screens in your brand, including states, errors and edge cases.' },
          { title: 'Design system', text: 'Documented components, styles and rules, so your team designs and builds faster.' },
        ],
      },
      process: {
        eyebrow: 'Process',
        heading: 'How we go from research to interface.',
        steps: [
          { name: 'Research', text: 'Interviews and analysis to understand your users and your business.' },
          { name: 'Define', text: 'Flows, architecture and priorities: what gets solved first.' },
          { name: 'Prototype and test', text: 'Clickable prototypes tested with real users; we adjust based on what we see.' },
          { name: 'Design and hand off', text: 'Final interface, design system and support for the development team.' },
        ],
      },
      cases: { eyebrow: 'UX/UI work', heading: 'Apps and platforms we designed.' },
      faq: {
        eyebrow: 'FAQ',
        heading: 'About the UX/UI design of your product.',
        items: [
          { question: 'What is UX/UI design?', answer: 'UX (user experience) is how a product works: the steps people follow and how easily they get what they want. UI (user interface) is how it looks: screens, buttons, type and color. We design them together.' },
          { question: 'Do you design mobile apps?', answer: 'Yes. We design mobile apps and web platforms: wallets, remittances, business banking, logistics and education, among others.' },
          { question: 'Do you have fintech experience?', answer: 'Yes. We have designed flows and experiences for wallets, remittances, crypto, factoring and business banking.' },
          { question: 'Can you work with our development team?', answer: 'Yes. We deliver prototypes, a design system and specs, and support your team during development. We can also build it ourselves.' },
          { question: 'How long does a UX/UI project take?', answer: 'It depends on the number of flows and screens. The proposal includes the delivery dates.' },
        ],
      },
      cta: { titleLead: 'Let’s design a product that goes', titleAccent: 'further.' },
    },
  },
};
