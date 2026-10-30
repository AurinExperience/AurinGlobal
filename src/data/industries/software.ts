import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries. aurin.mx tiene UX para startups de IA en EE. UU.: aquí el terreno es la
 * empresa de software ya en marcha (sitio que vende el producto + diseño del producto), sin hablar de startups ni IA.
 * Sin nombres de clientes.
 */
export const software: Service = {
  id: 'software',
  slug: { es: 'diseno-web-empresas-de-software', en: 'software-company-web-design' },
  cases: [],
  photo: 'ind-software',
  copy: {
    es: {
      seo: {
        title: 'Diseño web y UX/UI para empresas de software | Aurin',
        description:
          'Diseño y desarrollo web, UX/UI y branding para empresas de software en EE. UU.: más demos y más pruebas que terminan en clientes. Desde 1998. Llamada gratis.',
      },
      name: 'Desarrollo de software',
      summary: 'Diseño y desarrollo web, UX/UI y branding para empresas de software en EE. UU.',
      tags: 'Software · Plataformas · SaaS · Herramientas para empresas',
      hero: {
        titleLead: 'Diseño web, UX/UI y desarrollo para empresas de software',
        titleAccent: 'que convierte visitas en clientes que pagan.',
        description:
          'El sitio que vende tu producto y el producto que lo cumple, para empresas de software en EE. UU.: se entiende en segundos.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Software para empresas', 'Plataformas', 'SaaS', 'Herramientas para desarrolladores', 'Marketplaces', 'Software vertical'],
      },
      approach: {
        heading: 'Tu producto es bueno: *el problema es que no se entiende rápido.*',
        text: 'El comprador visita tu sitio entre juntas y en segundos decide si vale la pena pedir una demo. Después abre el producto y, si en la primera sesión no ve para qué sirve, no vuelve. Ahí se pierden la mayoría de los clientes de una empresa de software: no por el precio ni por la competencia, sino porque nadie les explicó rápido. Diseñamos y programamos esos dos momentos con el mismo cuidado: un sitio que vende y un producto que se usa sin manual.',
        layers: ['Sitio', 'Primera sesión', 'Producto'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un producto que cuesta entender',
            items: ['Frases como «la plataforma todo en uno»', 'Precios escondidos tras «contáctanos»', 'La primera sesión empieza en una pantalla vacía', 'Cada pantalla diseñada distinto', 'Diseños que el equipo no puede programar'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un producto que se entiende',
            items: ['Qué resuelves y para quién, en la primera pantalla', 'Planes y siguiente paso a la vista', 'Una primera sesión que lleva directo al valor', 'Un sistema de componentes coherente', 'Diseños listos para programar, o programados por nosotros'],
          },
        },
      },
      deliverables: {
        heading: 'Diseño, desarrollo, UX/UI y marca *para tu empresa de software.*',
        intro: 'Un solo equipo para el sitio, el producto y la marca: no tienes que coordinar a tres proveedores. Puedes empezar por lo que más urge; trabajamos al ritmo de tus sprints, con precio cerrado y fechas.',
        items: [
          { icon: 'Monitor', title: 'Diseño web para empresas de software', service: 'web-design', text: 'Un sitio que explica en cinco segundos qué resuelves y para quién, con precios claros y páginas por caso de uso que tus compradores encuentran en Google.' },
          { icon: 'Code', title: 'Desarrollo web: sitio y producto', service: 'web-development', text: 'Programamos el sitio para que tu equipo de marketing lo edite sin pedirle nada a desarrollo, y también partes del producto: paneles, portales, pagos y conexiones con tu CRM.' },
          { icon: 'LayoutDashboard', title: 'Diseño UX/UI del producto', service: 'ux-ui-design', text: 'Registro, primera sesión, tableros y flujos, probados con usuarios reales antes de que tu equipo invierta horas de desarrollo.' },
          { icon: 'Gem', title: 'Branding para software', service: 'branding', text: 'Nombre, logo e identidad para que tu producto no se vea igual a todos los demás, pensados para el sitio, el producto y tus presentaciones de venta.' },
          { icon: 'MousePointerClick', title: 'Demos y pruebas gratis', text: 'Un camino corto para pedir demo o empezar a probar, conectado con tu CRM, para que ventas reciba al prospecto con todo su contexto.' },
          { icon: 'Layers', title: 'Sistema de diseño', text: 'Componentes y reglas en Figma y en código, para que tu equipo diseñe y programe más rápido y todo se vea parte del mismo producto.' },
        ],
      },
      process: {
        heading: 'Cómo trabajamos con *tu equipo de producto.*',
        steps: [
          { name: 'Llamada de producto', text: 'En una llamada gratis nos cuentas a quién le vendes, en qué paso se van los usuarios y qué sigue en tu plan de producto.', gets: 'Precio cerrado y fechas que encajan con tus sprints.' },
          { name: 'Datos y entrevistas', text: 'Revisamos tu sitio y tus métricas de uso, y entrevistamos a clientes que se quedaron y a los que se fueron.', gets: 'Los momentos donde más usuarios abandonan.' },
          { name: 'Prueba con usuarios', text: 'Usuarios reales prueban un prototipo navegable antes de que tu equipo invierta horas de desarrollo.', gets: 'Flujos validados, listos para tu backlog.' },
          { name: 'Lanzamiento', text: 'Diseño final y componentes en Figma, con acompañamiento a tus programadores; o lo programamos nosotros, con hosting y soporte.', gets: 'Sitio o producto listo para lanzar.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *equipos de producto.*',
        items: [
          { question: '¿Qué servicios ofrecen para empresas de software?', answer: 'Diseño web, desarrollo web, diseño UX/UI y branding, con un solo equipo. Puedes empezar solo por el sitio, solo por el producto o hacer todo junto.' },
          { question: '¿Pueden trabajar junto a nuestros programadores?', answer: 'Sí. Entregamos diseños y componentes listos para programar y acompañamos a tu equipo. Si no tienes equipo, o está ocupado con el producto, programamos nosotros.' },
          { question: '¿Diseñan solo el sitio o también el producto?', answer: 'Los dos. Diseñarlos juntos hace que el producto cumpla lo que promete el sitio, y que el usuario no sienta que entró a otra empresa al registrarse.' },
          { question: '¿Usan Figma?', answer: 'Sí. Todo el diseño vive en Figma, con componentes ordenados que tu equipo puede seguir usando.' },
          { question: '¿Pueden mejorar un producto que ya está en uso?', answer: 'Sí. Revisamos tus datos de uso y hablamos con usuarios para mejorar lo que más afecta, sin rehacer todo de golpe.' },
          { question: '¿Cuidan nuestro código y nuestros datos?', answer: 'Sí. Firmamos acuerdos de confidencialidad y la información de tu producto no pasa por herramientas de IA.' },
        ],
      },
      cta: { titleLead: 'Hagamos un producto', titleAccent: 'que se venda solo.' },
    },
    en: {
      seo: {
        title: 'Web Design & UX/UI for Software Companies in the US | Aurin',
        description:
          'Web design and development, UX/UI and branding for US software companies: more demos, and more trials that turn into customers. Since 1998. Free call.',
      },
      name: 'Software development',
      summary: 'Web design and development, UX/UI and branding for US software companies.',
      tags: 'Software · Platforms · SaaS · Business tools',
      hero: {
        titleLead: 'Web design, UX/UI and development for software companies',
        titleAccent: 'that turns visitors into paying customers.',
        description:
          'The website that sells your product and the product that delivers on it, for US software companies: understood in seconds.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['B2B software', 'Platforms', 'SaaS', 'Developer tools', 'Marketplaces', 'Vertical software'],
      },
      approach: {
        heading: 'Your product is good: *the problem is it doesn’t click fast enough.*',
        text: 'Buyers visit your website between meetings and decide in seconds whether a demo is worth it. Then they open the product and, if the first session doesn’t show them what it’s for, they don’t come back. That’s where most software companies lose customers: not on price or to a competitor, but because nobody explained it fast. We design and build both moments with the same care: a website that sells and a product that works without a manual.',
        layers: ['Website', 'First session', 'Product'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A product that’s hard to get',
            items: ['Lines like “the all-in-one platform”', 'Pricing hidden behind “contact us”', 'The first session starts on an empty screen', 'Every screen designed differently', 'Designs your team can’t build'],
          },
          good: {
            label: 'With Aurin',
            title: 'A product that clicks',
            items: ['What you solve and for whom, on the first screen', 'Plans and next step in plain sight', 'A first session that goes straight to value', 'A consistent component system', 'Designs ready to build, or built by us'],
          },
        },
      },
      deliverables: {
        heading: 'Design, development, UX/UI and branding *for your software company.*',
        intro: 'One team for the website, the product and the brand: no juggling three vendors. Start with what’s most urgent; we work to your sprint cadence, with a fixed price and dates.',
        items: [
          { icon: 'Monitor', title: 'Website design for software companies', service: 'web-design', text: 'A website that explains in five seconds what you solve and for whom, with clear pricing and use-case pages your buyers find on Google.' },
          { icon: 'Code', title: 'Web development: website and product', service: 'web-development', text: 'We build the website so your marketing team can edit it without asking engineering, and parts of the product too: dashboards, portals, payments and CRM connections.' },
          { icon: 'LayoutDashboard', title: 'Product UX/UI design', service: 'ux-ui-design', text: 'Sign-up, first session, dashboards and flows, tested with real users before your team spends development hours.' },
          { icon: 'Gem', title: 'Branding for software', service: 'branding', text: 'Name, logo and identity so your product doesn’t look like every other one, made for the website, the product and your sales decks.' },
          { icon: 'MousePointerClick', title: 'Demos and free trials', text: 'A short path to book a demo or start a trial, connected to your CRM, so sales gets each lead with full context.' },
          { icon: 'Layers', title: 'Design system', text: 'Components and rules in Figma and in code, so your team designs and ships faster and everything feels like one product.' },
        ],
      },
      process: {
        heading: 'How we work with *your product team.*',
        steps: [
          { name: 'Product call', text: 'On a free call you tell us who you sell to, at which step users leave and what’s next on your roadmap.', gets: 'A fixed price and dates that fit your sprints.' },
          { name: 'Data and interviews', text: 'We review your website and usage metrics, and interview customers who stayed and those who left.', gets: 'The moments where most users drop off.' },
          { name: 'User testing', text: 'Real users try a clickable prototype before your team spends development hours.', gets: 'Validated flows, ready for your backlog.' },
          { name: 'Launch', text: 'Final design and components in Figma, with support for your developers; or we build it, with hosting and support.', gets: 'Website or product ready to launch.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *product teams* ask us.',
        items: [
          { question: 'What services do you offer software companies?', answer: 'Web design, web development, UX/UI design and branding, from one team. Start with just the website, just the product, or all of it together.' },
          { question: 'Can you work alongside our developers?', answer: 'Yes. We hand off designs and components ready to build and support your team. If you don’t have one, or it’s busy with the product, we build it.' },
          { question: 'Do you design just the website or the product too?', answer: 'Both. Designing them together makes the product deliver on what the website promises, so users don’t feel they landed at another company when they sign up.' },
          { question: 'Do you use Figma?', answer: 'Yes. All design lives in Figma, with organized components your team can keep using.' },
          { question: 'Can you improve a product that’s already live?', answer: 'Yes. We review usage data and talk to users to improve what matters most, without rebuilding everything at once.' },
          { question: 'Do you protect our code and data?', answer: 'Yes. We sign NDAs, and your product information never goes through AI tools.' },
        ],
      },
      cta: { titleLead: 'Let’s build a product', titleAccent: 'that sells itself.' },
    },
  },
};
