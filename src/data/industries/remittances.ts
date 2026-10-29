import type { Service } from '@/data/services';

/** Nicho propio de aurin.consulting: aurin.mx tiene "UX/UI para fintech" en general, pero nada de remesas. */
export const remittances: Service = {
  id: 'remittances',
  slug: { es: 'diseno-apps-de-remesas', en: 'remittance-app-design' },
  cases: ['ancient'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de apps de remesas y pagos internacionales | Aurin',
        description:
          'Diseño UX/UI para apps de remesas y pagos entre EE. UU., México y Latinoamérica: registro, verificación y cotizaciones claras que dan confianza.',
      },
      name: 'Apps de remesas',
      summary: 'Diseño UX/UI para apps de remesas, wallets y pagos internacionales.',
      tags: 'Remesas · Wallets · Pagos internacionales',
      hero: {
        eyebrow: 'Diseño UX/UI · Remesas y pagos',
        titleLead: 'Diseño de apps de remesas que',
        titleAccent: 'dan confianza al enviar.',
        description:
          'Diseñamos apps y plataformas para enviar dinero entre Estados Unidos, México y Latinoamérica: registro, verificación de identidad, cotización y seguimiento del envío, pensados para quien manda dinero a su familia y para quien lo recibe.',
        ctaSecondary: 'Qué diseñamos',
        points: ['Wallets, remesas y cripto', 'Pantallas en inglés y español', 'Flujos de verificación (KYC) claros'],
      },
      industries: {
        heading: 'Diseñamos',
        items: ['Apps de remesas', 'Wallets', 'Pagos internacionales', 'Cripto', 'Banca empresarial', 'Agregadores de pagos'],
      },
      approach: {
        heading: 'Quien envía dinero quiere saber tres cosas: *cuánto cuesta, cuánto llega y cuándo.*',
        text: 'México recibe más de 60 mil millones de dólares al año en remesas, la mayoría desde Estados Unidos (Banco de México). En ese mercado, una app compite primero en confianza: mucha gente envía dinero a su familia con frecuencia y abandona si una pantalla no le deja claro el tipo de cambio o la comisión. Diseñamos los flujos para que esa información se vea antes de pagar, para que la verificación de identidad no se sienta como un interrogatorio y para que el estado del envío esté siempre a la vista.',
        layers: ['Registro y verificación', 'Cotización y envío', 'Seguimiento y soporte'],
      },
      deliverables: {
        heading: 'Cada pantalla de una app de remesas, *de punta a punta.*',
        items: [
          { icon: 'ShieldCheck', title: 'Registro y verificación (KYC)', text: 'Pasos cortos para capturar datos y documentos, con explicaciones claras de por qué se piden.' },
          { icon: 'ChartLine', title: 'Cotización transparente', text: 'Tipo de cambio, comisión y monto que recibe la otra persona, visibles antes de pagar.' },
          { icon: 'Users', title: 'Destinatarios y formas de cobro', text: 'A quién envías y cómo recibe (cuenta, efectivo o wallet), sin capturar todo cada vez.' },
          { icon: 'Route', title: 'Seguimiento del envío', text: 'Estados claros y avisos en cada paso, para que nadie tenga que llamar a preguntar.' },
          { icon: 'Languages', title: 'Experiencia bilingüe', text: 'Textos y pantallas en inglés y en español, pensados para cada usuario y no traducidos palabra por palabra.' },
          { icon: 'Layers', title: 'Sistema de diseño financiero', text: 'Componentes para montos, estados, errores y alertas, iguales en móvil y en web.' },
        ],
      },
      process: {
        heading: 'De los flujos críticos a *la app lista para desarrollo.*',
        steps: [
          { name: 'Mapear el envío', text: 'Recorremos el flujo completo con tu equipo de producto y de cumplimiento: dónde se pierde la gente y qué pide la regulación.' },
          { name: 'Hablar con usuarios', text: 'Entrevistamos a quienes envían y reciben dinero para entender sus dudas, sus miedos y cómo usan el celular.' },
          { name: 'Prototipar y probar', text: 'Prototipos navegables del registro, la cotización y el envío, probados con usuarios reales.' },
          { name: 'Diseñar y entregar', text: 'Interfaz final, sistema de diseño y acompañamiento a tu equipo de desarrollo.' },
        ],
      },
      cases: { heading: 'Apps financieras que *diseñamos.*' },
      faq: {
        heading: 'Sobre el diseño de *tu app de remesas.*',
        items: [
          { question: '¿Tienen experiencia en apps de remesas?', answer: 'Sí. Diseñamos la experiencia y los flujos de las apps financieras de Ancient (wallet, remesas, criptomonedas y banca empresarial) y el UX/UI de Debiti, una app de wallet y remesas.' },
          { question: '¿Cómo ayuda el diseño a cumplir con la regulación?', answer: 'Diseñamos las pantallas para que muestren antes de pagar lo que el usuario necesita saber, como el tipo de cambio, las comisiones y el monto que llega, y para que la verificación de identidad sea clara. La revisión legal y de cumplimiento la hace tu equipo o tus asesores.' },
          { question: '¿Diseñan para usuarios que prefieren el español?', answer: 'Sí. Diseñamos textos y pantallas en los dos idiomas, con lenguaje sencillo y sin términos financieros innecesarios.' },
          { question: '¿Pueden mejorar una app que ya está publicada?', answer: 'Sí. Revisamos los datos y las reseñas de tu app, encontramos dónde se pierden los usuarios y rediseñamos esos flujos primero.' },
          { question: '¿Trabajan con nuestro equipo de desarrollo?', answer: 'Sí. Entregamos prototipos, sistema de diseño y especificaciones, y acompañamos a tu equipo durante la construcción.' },
        ],
      },
      cta: { titleLead: 'Hagamos que cada envío llegue', titleAccent: 'más lejos.' },
    },
    en: {
      seo: {
        title: 'Remittance App Design & Cross-Border Payments UX | Aurin',
        description:
          'UX/UI design for remittance apps and cross-border payments between the US, Mexico and Latin America: onboarding, KYC and transparent quotes people trust.',
      },
      name: 'Remittance apps',
      summary: 'UX/UI design for remittance apps, wallets and cross-border payments.',
      tags: 'Remittances · Wallets · Cross-border payments',
      hero: {
        eyebrow: 'UX/UI design · Remittances and payments',
        titleLead: 'Remittance app design that',
        titleAccent: 'people trust with their money.',
        description:
          'We design apps and platforms for sending money between the United States, Mexico and Latin America: sign-up, identity verification, quotes and transfer tracking, built for the person sending money home and the person receiving it.',
        ctaSecondary: 'What we design',
        points: ['Wallets, remittances and crypto', 'Screens in English and Spanish', 'Clear KYC verification flows'],
      },
      industries: {
        heading: 'We design',
        items: ['Remittance apps', 'Wallets', 'Cross-border payments', 'Crypto', 'Business banking', 'Payment aggregators'],
      },
      approach: {
        heading: 'Anyone sending money wants to know three things: *what it costs, how much arrives and when.*',
        text: 'Mexico receives more than 60 billion dollars a year in remittances, most of it from the United States (Banco de México). In that market, an app competes on trust first: many people send money to family often, and they drop off when a screen doesn’t make the exchange rate or the fee clear. We design the flows so that information shows up before paying, identity verification doesn’t feel like an interrogation and the transfer status is always in sight.',
        layers: ['Sign-up and verification', 'Quote and transfer', 'Tracking and support'],
      },
      deliverables: {
        heading: 'Every screen of a remittance app, *end to end.*',
        items: [
          { icon: 'ShieldCheck', title: 'Sign-up and verification (KYC)', text: 'Short steps to capture data and documents, with clear explanations of why they’re needed.' },
          { icon: 'ChartLine', title: 'Transparent quotes', text: 'Exchange rate, fee and the amount the recipient gets, visible before paying.' },
          { icon: 'Users', title: 'Recipients and payout methods', text: 'Who you send to and how they receive it (bank account, cash pickup or wallet), without retyping everything.' },
          { icon: 'Route', title: 'Transfer tracking', text: 'Clear statuses and notifications at every step, so nobody has to call to ask.' },
          { icon: 'Languages', title: 'Bilingual experience', text: 'Copy and screens in English and Spanish, crafted for each user, not translated word for word.' },
          { icon: 'Layers', title: 'Financial design system', text: 'Components for amounts, statuses, errors and alerts, consistent on mobile and web.' },
        ],
      },
      process: {
        heading: 'From critical flows to *a developer-ready app.*',
        steps: [
          { name: 'Map the transfer', text: 'We walk the whole flow with your product and compliance teams: where people drop off and what regulation requires.' },
          { name: 'Talk to users', text: 'We interview people who send and receive money to understand their doubts, their fears and how they use their phones.' },
          { name: 'Prototype and test', text: 'Clickable prototypes of sign-up, quote and transfer, tested with real users.' },
          { name: 'Design and hand off', text: 'Final interface, design system and support for your development team.' },
        ],
      },
      cases: { heading: 'Financial apps *we designed.*' },
      faq: {
        heading: 'About designing *your remittance app.*',
        items: [
          { question: 'Do you have experience with remittance apps?', answer: 'Yes. We designed the experience and flows of Ancient’s financial apps (wallet, remittances, crypto and business banking) and the UX/UI of Debiti, a wallet and remittance app.' },
          { question: 'How does design help with regulatory requirements?', answer: 'We design the screens to show what users need to know before paying, such as the exchange rate, fees and the amount received, and to make identity verification clear. Legal and compliance review is done by your team or your advisors.' },
          { question: 'Do you design for Spanish-speaking users?', answer: 'Yes. We design copy and screens in both languages, in plain language and without unnecessary financial jargon.' },
          { question: 'Can you improve an app that is already live?', answer: 'Yes. We review your app’s data and reviews, find where users drop off and redesign those flows first.' },
          { question: 'Do you work with our development team?', answer: 'Yes. We deliver prototypes, a design system and specs, and support your team during the build.' },
        ],
      },
      cta: { titleLead: 'Let’s help every transfer go', titleAccent: 'further.' },
    },
  },
};
