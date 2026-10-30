import type { Service } from '@/data/services';

/**
 * Nicho propio de aurin.consulting: aurin.mx tiene "UX/UI para fintech" en general, pero nada de remesas.
 * Sitios y plataformas web para empresas de remesas (no apps: no las hacemos). Distinto de fintech: aquí todo
 * gira alrededor del envío de dinero entre EE. UU. y Latinoamérica.
 */
export const remittances: Service = {
  id: 'remittances',
  slug: { es: 'diseno-web-remesas', en: 'remittance-web-design' },
  cases: [],
  photo: 'ind-remittances',
  copy: {
    es: {
      seo: {
        title: 'Diseño web y UX/UI para remesas en Estados Unidos | Aurin',
        description:
          'Sitios y plataformas para empresas de remesas entre EE. UU., México y Latinoamérica: alta, verificación y cotizaciones claras que dan confianza.',
      },
      name: 'Remesas y pagos',
      summary: 'Sitios y plataformas para empresas de remesas y pagos internacionales.',
      tags: 'Remesas · Envíos de dinero · Pagos internacionales',
      hero: {
        titleLead: 'Diseño web y UX/UI para remesas',
        titleAccent: 'que dan confianza al enviar.',
        description:
          'Sitios y plataformas para empresas de remesas entre EE. UU. y Latinoamérica: registro, cotización y seguimiento claros para quien envía y quien recibe.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Empresas de remesas', 'Envíos a México', 'Envíos a Centroamérica', 'Pago en efectivo y a cuenta', 'Wallets para migrantes', 'Redes de agentes'],
      },
      approach: {
        heading: 'Quien envía dinero quiere saber tres cosas: *cuánto cuesta, cuánto llega y cuándo.*',
        text: 'México recibe más de 60 mil millones de dólares al año en remesas, la mayoría desde Estados Unidos (Banco de México). En ese mercado se compite primero en confianza: mucha gente envía dinero a su familia cada semana o cada quincena y se va con otra empresa si una pantalla no le deja claro el tipo de cambio o la comisión. Diseñamos tu sitio y tu plataforma para que esa información se vea antes de pagar, para que verificar la identidad no se sienta como un interrogatorio y para que el estado del envío esté siempre a la vista.',
        layers: ['Alta y verificación', 'Cotización y envío', 'Seguimiento y soporte'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un envío que da desconfianza',
            items: ['La comisión aparece hasta el final', 'No se sabe cuánto recibe la familia', 'Verificar la identidad toma días y nadie explica por qué', 'El dinero «en proceso» sin más detalle', 'Textos traducidos con máquina'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un envío que da confianza',
            items: ['Tipo de cambio y comisión antes de pagar', 'El monto exacto que llega, en la moneda de destino', 'Verificación en pasos cortos, diciendo para qué es cada dato', 'Cada paso del envío con fecha y aviso', 'Español escrito para quien recibe el dinero'],
          },
        },
      },
      deliverables: {
        heading: 'Del primer clic al dinero entregado: *cada paso del envío.*',
        intro: 'Puedes empezar por el sitio, el cotizador o el flujo completo de envío. La propuesta dice qué incluye, cuánto cuesta y cuándo se entrega.',
        items: [
          { icon: 'ShieldCheck', title: 'Alta y verificación de identidad', service: 'ux-ui-design', text: 'Pasos cortos para capturar datos y documentos, explicando para qué se pide cada uno.' },
          { icon: 'ChartLine', title: 'Cotizador transparente', text: 'Tipo de cambio, comisión y lo que recibe la otra persona, visibles antes de pagar.' },
          { icon: 'Users', title: 'Destinatarios y formas de cobro', text: 'A quién envías y cómo cobra (cuenta, efectivo o wallet), sin capturar todo cada vez.' },
          { icon: 'Route', title: 'Rastreo del envío', service: 'web-development', text: 'Estados claros y avisos en cada paso, para que nadie tenga que llamar a preguntar dónde va su dinero.' },
          { icon: 'Languages', title: 'Para quien envía y quien recibe', text: 'El que envía lee en inglés o en español; el que recibe, casi siempre en español. Escribimos para los dos, sin traducir palabra por palabra.' },
          { icon: 'Monitor', title: 'Un sitio que compite con los grandes', service: 'web-design', text: 'Tarifas por país, cobertura y cómo enviar, con páginas por destino que la gente encuentra cuando busca a dónde mandar dinero.' },
        ],
      },
      process: {
        heading: 'Del flujo actual a *envíos que no se abandonan.*',
        steps: [
          { name: 'Mapear el envío', text: 'Recorremos el flujo completo con tu equipo de producto y de cumplimiento: dónde se pierde la gente y qué pide la regulación.', gets: 'El mapa del envío con los pasos que más clientes pierden.' },
          { name: 'Hablar con quien envía', text: 'Entrevistamos a quienes envían y reciben dinero para entender sus dudas, sus miedos y cómo usan el celular.', gets: 'Las dudas que frenan un envío, en palabras de tus clientes.' },
          { name: 'Prototipar y probar', text: 'Prototipos navegables del alta, la cotización y el envío, probados con usuarios reales.', gets: 'Un envío completo probado antes de programar.' },
          { name: 'Diseñar y entregar', text: 'Diseño final, componentes y acompañamiento a tu equipo de desarrollo; o lo programamos nosotros.', gets: 'Tu sitio y tu plataforma listos para lanzar.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Sobre el diseño de *tu plataforma de remesas.*',
        items: [
          { question: '¿Tienen experiencia en remesas?', answer: 'Sí. Hemos diseñado plataformas de wallet, remesas, criptomonedas y banca empresarial, con envíos entre Estados Unidos y Latinoamérica.' },
          { question: '¿El diseño ayuda con lo que pide la regulación de envíos?', answer: 'Diseñamos las pantallas para que muestren antes de pagar lo que el usuario necesita saber, como el tipo de cambio, las comisiones y el monto que llega, y para que la verificación de identidad sea clara. La revisión legal y de cumplimiento la hace tu equipo o tus asesores.' },
          { question: '¿Diseñan para usuarios que prefieren el español?', answer: 'Sí. Diseñamos textos y pantallas en los dos idiomas, con lenguaje sencillo y sin términos financieros innecesarios.' },
          { question: '¿Pueden mejorar una plataforma que ya tiene usuarios?', answer: 'Sí. Revisamos tus datos, las dudas que llegan a soporte y dónde se abandona el envío, y rediseñamos esos pasos primero.' },
          { question: '¿Hacen también el sitio de la empresa?', answer: 'Sí. Diseñamos y programamos el sitio con tarifas, cobertura por país y cómo enviar, con la misma marca que tu plataforma.' },
        ],
      },
      cta: { titleLead: 'Hagamos que cada envío llegue', titleAccent: 'más lejos.' },
    },
    en: {
      seo: {
        title: 'Remittance Website & UX/UI Design in the US | Aurin',
        description:
          'Websites and platforms for remittance companies between the US, Mexico and Latin America: onboarding, identity checks and clear quotes people trust.',
      },
      name: 'Remittances and payments',
      summary: 'Websites and platforms for remittance and cross-border payment companies.',
      tags: 'Remittances · Money transfers · Cross-border payments',
      hero: {
        titleLead: 'Website and UX/UI design for remittances',
        titleAccent: 'that people trust with their money.',
        description:
          'Websites and platforms for remittance companies between the US and Latin America: clear sign-up, quotes and tracking for senders and receivers.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Remittance companies', 'Transfers to Mexico', 'Transfers to Central America', 'Cash pickup and bank payout', 'Wallets for immigrants', 'Agent networks'],
      },
      approach: {
        heading: 'Anyone sending money wants to know three things: *what it costs, how much arrives and when.*',
        text: 'Mexico receives more than 60 billion dollars a year in remittances, most of it from the United States (Banco de México). In that market, trust comes first: many people send money to family every week or two, and they switch companies when a screen doesn’t make the exchange rate or the fee clear. We design your website and platform so that information shows up before paying, identity verification doesn’t feel like an interrogation and the transfer status is always in sight.',
        layers: ['Sign-up and verification', 'Quote and transfer', 'Tracking and support'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A transfer people don’t trust',
            items: ['The fee shows up at the very end', 'No way to know how much the family gets', 'Identity checks take days and nobody says why', 'Money stuck “in process” with no detail', 'Machine-translated copy'],
          },
          good: {
            label: 'With Aurin',
            title: 'A transfer people trust',
            items: ['Exchange rate and fee before paying', 'The exact amount that arrives, in the local currency', 'Verification in short steps, saying why each detail is needed', 'Every step of the transfer with a date and a notification', 'Spanish written for the person receiving the money'],
          },
        },
      },
      deliverables: {
        heading: 'From the first click to money delivered: *every step of the transfer.*',
        intro: 'You can start with the website, the quote tool or the full transfer flow. The proposal says what’s included, what it costs and when it’s delivered.',
        items: [
          { icon: 'ShieldCheck', title: 'Sign-up and identity checks', service: 'ux-ui-design', text: 'Short steps to capture data and documents, explaining why each one is needed.' },
          { icon: 'ChartLine', title: 'Transparent quote tool', text: 'Exchange rate, fee and what the recipient gets, visible before paying.' },
          { icon: 'Users', title: 'Recipients and payout methods', text: 'Who you send to and how they get paid (bank account, cash pickup or wallet), without retyping everything.' },
          { icon: 'Route', title: 'Transfer tracking', service: 'web-development', text: 'Clear statuses and notifications at every step, so nobody has to call to ask where their money is.' },
          { icon: 'Languages', title: 'For senders and recipients', text: 'Senders read in English or Spanish; recipients, almost always in Spanish. We write for both, not word for word.' },
          { icon: 'Monitor', title: 'A website that competes with the big names', service: 'web-design', text: 'Rates by country, coverage and how to send, with destination pages people find when they search where to send money.' },
        ],
      },
      process: {
        heading: 'From your current flow to *transfers people finish.*',
        steps: [
          { name: 'Map the transfer', text: 'We walk the whole flow with your product and compliance teams: where people drop off and what regulation requires.', gets: 'A map of the transfer with the steps that lose the most customers.' },
          { name: 'Talk to senders', text: 'We interview people who send and receive money to understand their doubts, their fears and how they use their phones.', gets: 'The doubts that stop a transfer, in your customers’ words.' },
          { name: 'Prototype and test', text: 'Clickable prototypes of sign-up, quote and transfer, tested with real users.', gets: 'A full transfer tested before any code.' },
          { name: 'Design and hand off', text: 'Final design, components and support for your development team; or we build it.', gets: 'Your website and platform ready to launch.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'About designing *your remittance platform.*',
        items: [
          { question: 'Do you have remittance experience?', answer: 'Yes. We have designed wallet, remittance, crypto and business banking platforms, with transfers between the United States and Latin America.' },
          { question: 'Does design help with money transfer regulations?', answer: 'We design the screens to show what users need to know before paying, such as the exchange rate, fees and the amount received, and to make identity verification clear. Legal and compliance review is done by your team or your advisors.' },
          { question: 'Do you design for Spanish-speaking users?', answer: 'Yes. We design copy and screens in both languages, in plain language and without unnecessary financial jargon.' },
          { question: 'Can you improve a platform that already has users?', answer: 'Yes. We review your data, the questions that reach support and where transfers get abandoned, and redesign those steps first.' },
          { question: 'Do you build the company website too?', answer: 'Yes. We design and build the website with rates, coverage by country and how to send, in the same brand as your platform.' },
        ],
      },
      cta: { titleLead: 'Let’s help every transfer go', titleAccent: 'further.' },
    },
  },
};
