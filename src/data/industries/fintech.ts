import type { Service } from '@/data/services';

/**
 * Industria general (la primera de HOME.industries). aurin.mx tiene "UX/UI para fintech" sin país:
 * aquí el terreno es "para empresas en EE. UU." y sitio + plataforma + marca, no solo UX/UI. Sin nombres de clientes.
 */
export const fintech: Service = {
  id: 'fintech',
  slug: { es: 'diseno-fintech', en: 'fintech-design' },
  cases: [],
  photo: 'ind-fintech',
  copy: {
    es: {
      seo: {
        title: 'Diseño web y UX/UI para fintech en Estados Unidos | Aurin',
        description:
          'Sitios y plataformas para fintech y empresas financieras en EE. UU.: registro, montos y comisiones que se entienden, en inglés y español. Llamada gratis.',
      },
      name: 'Fintech y finanzas',
      summary: 'Diseño web y UX/UI para fintech y empresas financieras en EE. UU.',
      tags: 'Wallets · Crédito · Pagos · Inversión',
      hero: {
        titleLead: 'Diseño web y UX/UI para fintech',
        titleAccent: 'que se gana la confianza.',
        description:
          'Sitios y plataformas para empresas financieras en EE. UU.: abrir una cuenta, verificarse o enviar dinero se entiende a la primera.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Wallets', 'Remesas', 'Crédito y préstamos', 'Pagos', 'Inversión y trading', 'Banca para empresas'],
      },
      approach: {
        heading: 'En finanzas nadie compra lo que no entiende: *primero tiene que confiar.*',
        text: 'Antes de darte su dinero o sus datos, tu cliente quiere saber quién eres, cuánto le va a costar y qué pasa si algo sale mal. Si el sitio no lo explica o la plataforma lo hace dudar en un paso, se va. Por eso diseñamos cada pantalla para que lo importante se vea antes de que lo pregunte: comisiones, plazos, riesgos y cómo contactarte.',
        layers: ['Registro y verificación', 'Montos y movimientos', 'Ayuda y soporte'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un producto que da desconfianza',
            items: ['Comisiones y plazos en letra chica', 'La verificación parece un interrogatorio', 'Términos financieros que nadie entiende', 'No se sabe en qué va cada movimiento', 'Solo en inglés'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un producto que da confianza',
            items: ['Comisiones y plazos a la vista antes de pagar', 'Verificación en pasos cortos, diciendo para qué es cada dato', 'Lenguaje claro, sin jerga financiera', 'El estado de cada movimiento siempre a la vista', 'En inglés y en español, para cada cliente'],
          },
        },
      },
      deliverables: {
        heading: 'Qué diseñamos para *tu empresa financiera.*',
        intro: 'Puedes empezar por el sitio, la plataforma o la marca. Todo viene en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Un sitio que explica tu producto', service: 'web-design', text: 'Qué haces, para quién y cuánto cuesta, con la información legal en su lugar y un camino claro para abrir una cuenta o pedir una demo.' },
          { icon: 'ShieldCheck', title: 'Registro y verificación (KYC)', service: 'ux-ui-design', text: 'Pasos cortos para capturar datos y documentos, con mensajes claros cuando algo falla y sin pedir nada de más.' },
          { icon: 'ChartLine', title: 'Montos, tasas y comisiones', text: 'Pantallas de cotización, crédito o inversión donde cada número se entiende antes de confirmar.' },
          { icon: 'LayoutDashboard', title: 'Paneles y portales', service: 'web-development', text: 'Tableros para tus clientes, para empresas o para tu equipo interno, con movimientos, reportes y permisos.' },
          { icon: 'Layers', title: 'Sistema de diseño financiero', text: 'Componentes para montos, estados, errores y alertas, iguales en toda tu plataforma, que tu equipo de desarrollo reutiliza.' },
          { icon: 'Languages', title: 'En inglés y en español', text: 'Textos y pantallas escritos para cada idioma, para el cliente que prefiere manejar su dinero en español.' },
        ],
      },
      process: {
        heading: 'De tu producto de hoy a *uno que se entiende a la primera.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas tu producto, tus usuarios y dónde se te van: en el sitio, en el registro o después.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Revisión y usuarios', text: 'Revisamos tus datos y hablamos con usuarios para encontrar los pasos que generan dudas o abandono.', gets: 'Los problemas a resolver primero, en orden.' },
          { name: 'Prototipo y pruebas', text: 'Prototipos navegables de los flujos clave, probados con personas reales antes de programar.', gets: 'Un prototipo probado que apruebas.' },
          { name: 'Diseño y entrega', text: 'Diseño final, sistema de diseño y acompañamiento a tu equipo de desarrollo, o lo programamos nosotros.', gets: 'Pantallas y componentes listos para construir.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas sobre el diseño de *tu producto financiero.*',
        items: [
          { question: '¿Con qué tipo de empresas financieras trabajan?', answer: 'Wallets, remesas, crédito, pagos, inversión y banca para empresas: desde startups que lanzan su primer producto hasta empresas que rediseñan una plataforma que ya tiene usuarios.' },
          { question: '¿Diseñan el sitio web, la plataforma o los dos?', answer: 'Los dos, o solo el que necesites. Al hacerlos con el mismo equipo, el sitio promete lo mismo que la plataforma cumple, con la misma marca y el mismo tono.' },
          { question: '¿Cómo ayuda el diseño a cumplir con la regulación?', answer: 'Diseñamos para que lo que el usuario debe saber, como comisiones, tasas, plazos y riesgos, se vea en el momento correcto y sin letra chica. La revisión legal y de cumplimiento la hace tu equipo o tus asesores.' },
          { question: '¿Pueden mejorar una plataforma que ya tiene usuarios?', answer: 'Sí. Revisamos tus datos, tus reseñas y las dudas que llegan a soporte, encontramos dónde se pierden los usuarios y rediseñamos esos pasos primero.' },
          { question: '¿Van a ver información confidencial de nuestros clientes?', answer: 'Solo lo que tu equipo decida compartir para el proyecto. Esa información no pasa por herramientas de IA, y cuando hace falta trabajamos con datos de ejemplo.' },
          { question: '¿Diseñan en inglés y en español?', answer: 'Sí. Escribimos los textos para cada idioma, con lenguaje sencillo, para que el cliente maneje su dinero en el que prefiera.' },
          { question: '¿Trabajan con nuestro equipo de desarrollo?', answer: 'Sí. Entregamos prototipos, sistema de diseño y especificaciones, y acompañamos la construcción. Si no tienes equipo, también lo programamos.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tu producto', titleAccent: 'se gane la confianza.' },
    },
    en: {
      seo: {
        title: 'Fintech Website & App Design Agency in the US | Aurin',
        description:
          'Websites and platforms for US fintech and financial companies: onboarding, amounts and fees people understand. Free call.',
      },
      name: 'Fintech and finance',
      summary: 'Website and UX/UI design for US fintech and financial companies.',
      tags: 'Wallets · Lending · Payments · Investing',
      hero: {
        titleLead: 'Website and UX/UI design for fintech',
        titleAccent: 'that earns people’s trust.',
        description:
          'Websites and platforms for US financial companies: opening an account, verifying identity or sending money makes sense the first time.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Wallets', 'Remittances', 'Lending', 'Payments', 'Investing and trading', 'Business banking'],
      },
      approach: {
        heading: 'In finance, nobody buys what they don’t understand: *trust comes first.*',
        text: 'Before handing over their money or their data, your customers want to know who you are, what it will cost them and what happens if something goes wrong. If the website doesn’t explain it, or one step in the platform makes them hesitate, they leave. So we design every screen to show what matters before they have to ask: fees, timelines, risks and how to reach you.',
        layers: ['Onboarding and verification', 'Amounts and transactions', 'Help and support'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A product people don’t trust',
            items: ['Fees and timelines in the fine print', 'Verification feels like an interrogation', 'Financial jargon nobody understands', 'No way to tell where a transaction is'],
          },
          good: {
            label: 'With Aurin',
            title: 'A product people trust',
            items: ['Fees and timelines in plain sight before paying', 'Short verification steps that say why each detail is needed', 'Plain language, no financial jargon', 'The status of every transaction always visible'],
          },
        },
      },
      deliverables: {
        heading: 'What we design for *your financial company.*',
        intro: 'You can start with the website, the platform or the brand. It’s all in the proposal, with price and dates.',
        items: [
          { icon: 'Monitor', title: 'A website that explains your product', service: 'web-design', text: 'What you do, who it’s for and what it costs, with the legal information where it belongs and a clear path to open an account or book a demo.' },
          { icon: 'ShieldCheck', title: 'Onboarding and verification (KYC)', service: 'ux-ui-design', text: 'Short steps to collect details and documents, with clear messages when something fails and nothing asked for that isn’t needed.' },
          { icon: 'ChartLine', title: 'Amounts, rates and fees', text: 'Quote, lending or investing screens where every number makes sense before people confirm.' },
          { icon: 'LayoutDashboard', title: 'Dashboards and portals', service: 'web-development', text: 'Dashboards for your customers, for businesses or for your internal team, with transactions, reports and permissions.' },
          { icon: 'Layers', title: 'A financial design system', text: 'Components for amounts, statuses, errors and alerts, consistent across your whole platform, that your developers can reuse.' },
        ],
      },
      process: {
        heading: 'From your product today to *one that makes sense the first time.*',
        steps: [
          { name: 'Free call', text: 'You tell us about your product, your users and where they drop off: on the website, during onboarding or later.', gets: 'A proposal with price, scope and dates.' },
          { name: 'Review and users', text: 'We review your data and talk to users to find the steps that cause doubt or drop-off.', gets: 'The problems to solve first, in order.' },
          { name: 'Prototype and testing', text: 'Clickable prototypes of the key flows, tested with real people before any code.', gets: 'A tested prototype you approve.' },
          { name: 'Design and handoff', text: 'Final design, design system and support for your development team, or we build it ourselves.', gets: 'Screens and components ready to build.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions about designing *your financial product.*',
        items: [
          { question: 'What kinds of financial companies do you work with?', answer: 'Wallets, remittances, lending, payments, investing and business banking: from startups launching their first product to companies redesigning a platform that already has users.' },
          { question: 'Do you design the website, the platform or both?', answer: 'Both, or just the one you need. With one team on both, the website promises what the platform delivers, with the same brand and the same tone.' },
          { question: 'How does design help with regulation?', answer: 'We design so what users need to know, such as fees, rates, timelines and risks, shows up at the right moment and never in the fine print. Legal and compliance review is done by your team or your advisors.' },
          { question: 'Can you improve a platform that already has users?', answer: 'Yes. We review your data, your reviews and the questions that reach support, find where users get lost and redesign those steps first.' },
          { question: 'Will you see our customers’ confidential information?', answer: 'Only what your team decides to share for the project. That information never goes through AI tools, and when needed we work with sample data.' },
          { question: 'Do you work with our development team?', answer: 'Yes. We deliver prototypes, a design system and specs, and support the build. If you don’t have a team, we build it too.' },
        ],
      },
      cta: { titleLead: 'Let’s make your product', titleAccent: 'one people trust.' },
    },
  },
};
