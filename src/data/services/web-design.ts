import type { Service } from './types';

export const webDesign: Service = {
  id: 'web-design',
  slug: { es: 'diseno-web', en: 'web-design' },
  cases: ['galicia', 'mineria', 'fruit-academy', 'ingles-individual'],
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web en Estados Unidos | Bilingüe | Aurin',
        description:
          'Diseñamos páginas web para empresas en Estados Unidos, en español e inglés. Apruebas el diseño antes de programar y sabes el precio desde el inicio.',
      },
      name: 'Diseño web',
      summary: 'Sitios web a la medida de tu marca y de tu cliente: arquitectura de contenidos, diseño responsive y prototipos que apruebas antes de programar.',
      tags: 'Sitios corporativos · Landing pages · Diseño responsive',
      hero: {
        titleLead: 'Diseño web que vende',
        titleAccent: 'mientras tú atiendes tu negocio.',
        description:
          'Sitios y landing pages para empresas en EE. UU., México y Latinoamérica, pensados para tu cliente: qué busca, qué dudas tiene y qué lo convence. Apruebas el prototipo antes de que escribamos una sola línea de código.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Ya diseñamos sitios para',
        items: [
          { name: 'Salud', client: 'Elite Home Health' },
          { name: 'Fintech', client: 'Monetix' },
          { name: 'Educación', client: 'Inglés Individual' },
          { name: 'Turismo', client: 'El Rollo' },
          { name: 'Energía', client: 'Mexico Pacific' },
          { name: 'Cultura', client: 'Orquesta Sinfónica de Minería' },
        ],
      },
      approach: {
        heading: 'Una página web hecha para vender, *no solo para verse bien.*',
        text: 'Un sitio bonito que no recibe llamadas es un gasto. Por eso empezamos por tu cliente: qué busca en Google, qué dudas tiene y qué necesita ver para confiar en ti. El diseño llega después, para que todo lo que ve en pantalla lo lleve a llamarte, escribirte o comprar.',
        layers: ['Lo que busca tu cliente', 'Las páginas que lo convencen', 'El diseño que lo hace llamar'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que solo se ve bien',
            items: ['Se diseña por gusto: colores y fotos bonitas', 'Tu cliente no encuentra lo que busca y se va', 'Nadie lo encuentra en Google', 'El contacto queda escondido al final', 'Ves el resultado cuando ya está programado'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que te trae clientes',
            items: ['Se diseña para lo que tu cliente busca y pregunta', 'Encuentra lo que necesita en segundos', 'Lista para salir en Google desde el diseño', 'Llamada, WhatsApp y formulario en cada página', 'Recorres el prototipo y lo apruebas antes de programar'],
          },
        },
      },
      deliverables: {
        heading: 'Qué incluye el diseño de *tu página web.*',
        intro: 'Todo viene detallado en la propuesta, con precio y fechas. Sin cobros sorpresa.',
        items: [
          { icon: 'PanelsTopLeft', title: 'Las páginas que necesitas, y ninguna de más', text: 'Definimos qué páginas lleva tu sitio y qué pregunta de tu cliente responde cada una, para que encuentre rápido lo que busca y te contacte.' },
          { icon: 'MousePointerClick', title: 'Un prototipo que recorres antes de programar', text: 'Ves y pruebas tu sitio antes de que exista. Cambiar algo en esta etapa cuesta minutos, no semanas.' },
          { icon: 'Smartphone', title: 'Diseño que se ve bien en el celular', text: 'Muchos de tus clientes te van a conocer desde el teléfono: cada página se diseña para celular, tableta y computadora.' },
          { icon: 'Languages', title: 'Textos que convencen, en inglés y español', text: 'Títulos y botones que responden lo que tu cliente pregunta y lo llevan a llamarte, escribirte o comprar, en uno o en los dos idiomas.' },
          { icon: 'Search', title: 'Listo para salir en Google', text: 'Cada página con su búsqueda, su título y su descripción, carga rápida y datos estructurados para que Google y los buscadores con IA entiendan qué ofreces.' },
          { icon: 'MessageCircle', title: 'Llamadas, WhatsApp y formularios que funcionan', text: 'Cada página tiene una forma clara de contactarte y los mensajes te llegan al correo.' },
        ],
      },
      types: {
        heading: '¿Qué tipo de *página web necesitas?*',
        intro: 'Te ayudamos a elegir en la llamada. Estos son los proyectos que más nos piden.',
        items: [
          { icon: 'Rocket', title: 'Landing page', text: 'Una sola página para un servicio o una campaña: tu cliente llega desde Google o un anuncio y en segundos sabe qué ofreces y cómo contactarte.' },
          { icon: 'Monitor', title: 'Página web para tu empresa', text: 'Tu sitio completo: quiénes son, qué servicios das, con quién has trabajado y cómo contactarte. Para que quien te busca en Google confíe en ti antes de llamarte.' },
          { icon: 'RefreshCw', title: 'Rediseño de tu página web', text: 'Si tu sitio se ve viejo, no se ve bien en el celular o no te trae clientes, lo rehacemos sin perder lo que ya te funciona en Google.' },
        ],
      },
      process: {
        heading: 'De la primera llamada a tu página web en línea, *sin sorpresas.*',
        steps: [
          { name: 'Llamada gratis y propuesta', text: 'Nos cuentas de tu negocio y de tu cliente. Revisamos tu sitio actual y a tu competencia.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Estructura', text: 'Definimos las páginas, los textos clave y el camino que lleva a tu cliente a contactarte.', gets: 'El mapa de tu sitio y sus textos principales.' },
          { name: 'Diseño y prototipo', text: 'Diseñamos cada página para celular y computadora. La recorres, nos pides cambios y la apruebas.', gets: 'Un prototipo que pruebas antes de programar.' },
          { name: 'Lanzamiento', text: 'La programamos, la dejamos lista para Google y la publicamos en internet.', gets: 'Tu página web en línea y lista para recibir clientes.' },
        ],
      },
      support: {
        heading: 'Tu página web en línea, *y nosotros detrás.*',
        intro: 'Cuando se publica tu sitio no te quedas solo: nos encargamos de que siga funcionando.',
        items: [
          { icon: 'ShieldCheck', title: 'Hosting rápido y seguro', text: 'Alojamos tu sitio en servidores rápidos, con certificado de seguridad (el candado junto a la dirección). Tú no tienes que tocar nada técnico.' },
          { icon: 'Users', title: 'Soporte del mismo equipo', text: 'Si algo falla o tienes una duda, nos escribes y te responde el equipo que hizo tu sitio, en inglés o en español.' },
          { icon: 'PenTool', title: 'Cambios cuando tu negocio cambia', text: 'Un servicio nuevo, otra promoción, fotos nuevas: lo actualizamos por ti. Si es algo más grande, te decimos cuánto cuesta antes.' },
        ],
      },
      cases: { heading: 'Páginas web que *ya trabajan.*', intro: 'Proyectos de diseño web para empresas como la tuya.' },
      faq: {
        heading: 'Preguntas frecuentes sobre *diseño de páginas web.*',
        items: [
          { question: '¿Cuánto cuesta una página web para una empresa en Estados Unidos?', answer: 'Depende de cuántas páginas lleva, en cuántos idiomas y qué tiene que hacer: formularios, reservas o pagos. Una landing page cuesta menos que un sitio corporativo. Antes de empezar recibes una propuesta con el precio, lo que incluye y las fechas, sin cobros sorpresa.' },
          { question: '¿Cuánto tarda el diseño de una página web?', answer: 'Una landing page se entrega antes que un sitio con varias secciones. Las fechas de cada paso vienen en la propuesta, y el tiempo también depende de qué tan rápido apruebes el prototipo.' },
          { question: '¿Puedo ver mi página web antes de que la programen?', answer: 'Sí. Recorres un prototipo navegable de las páginas clave, nos pides cambios y la programación empieza solo cuando el diseño está aprobado.' },
          { question: '¿Hacen páginas web bilingües en inglés y español?', answer: 'Sí. Diseñamos sitios bilingües con textos y estructura pensados para cada idioma, no traducidos palabra por palabra, y cada visitante ve el sitio en su idioma con un clic.' },
          { question: '¿Mi página web va a salir en Google?', answer: 'La preparamos para Google desde el diseño: cada página responde una búsqueda y lleva su título, su descripción, carga rápida y datos estructurados. Llegar a los primeros lugares toma tiempo y depende de tu competencia; te decimos qué búsquedas atacar primero.' },
          { question: '¿Pueden rediseñar mi página web actual?', answer: 'Sí. Primero revisamos qué funciona hoy, como las páginas que ya reciben visitas de Google, para no perderlo. Si cambian las direcciones de las páginas, dejamos redirecciones para conservar tu posicionamiento.' },
          { question: '¿Trabajan con empresas de cualquier estado de EE. UU.?', answer: 'Sí. Trabajamos por videollamada en un horario compatible con el tuyo, en inglés o en español, con empresas de todo Estados Unidos.' },
          { question: '¿También programan y publican la página web?', answer: 'Sí. Diseño y desarrollo web están en el mismo equipo, así el sitio publicado se ve igual que el diseño que aprobaste.' },
          { question: '¿Ustedes se encargan del hosting y del soporte?', answer: 'Sí. Alojamos tu página web en servidores rápidos y seguros, y después del lanzamiento te damos soporte: si algo falla, tienes una duda o quieres un cambio, te responde el mismo equipo que hizo tu sitio. Los cambios los puedes manejar con una mensualidad, así tu sitio se mantiene al día sin cotizar cada vez.' },
          { question: '¿Pueden hacer solo el diseño si ya tengo programador?', answer: 'Sí. Diseñamos tu sitio y se lo entregamos a tu programador con todo lo que necesita para construirlo igual al diseño que aprobaste.' },
        ],
      },
      cta: { titleLead: '¿Listo para una página web', titleAccent: 'que te traiga clientes?', light: true },
    },
    en: {
      seo: {
        title: 'Web Design Agency for US Businesses | Bilingual | Aurin',
        description:
          'Websites for US businesses in English, Spanish or both. You approve the design before we build it and know the price from day one. Book a free call.',
      },
      name: 'Web design',
      summary: 'Websites built around your brand and your customer: content architecture, responsive design and prototypes you approve before any code is written.',
      tags: 'Corporate websites · Landing pages · Responsive design',
      hero: {
        titleLead: 'Web design that sells',
        titleAccent: 'while you run your business.',
        description:
          'Corporate websites and landing pages designed around your customer: what they look for, what they doubt and what convinces them. You approve the prototype before a single line of code.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'We’ve designed websites for',
        items: [
          { name: 'Healthcare', client: 'Elite Home Health' },
          { name: 'Fintech', client: 'Monetix' },
          { name: 'Education', client: 'Inglés Individual' },
          { name: 'Tourism', client: 'El Rollo' },
          { name: 'Energy', client: 'Mexico Pacific' },
          { name: 'Culture', client: 'Orquesta Sinfónica de Minería' },
        ],
      },
      approach: {
        heading: 'A website built to sell, *not just to look good.*',
        text: 'A good-looking website that doesn’t get calls is an expense. So we start with your customer: what they search for on Google, what they doubt and what they need to see to trust you. Design comes after, so everything on screen moves them to call, message or buy.',
        layers: ['What your customer searches for', 'The pages that convince them', 'The design that makes them call'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that only looks good',
            items: ['Designed on taste: nice colors and photos', 'Customers can’t find what they need and leave', 'Nobody finds it on Google', 'The contact info is buried at the bottom', 'You see the result once it’s already built'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that wins customers',
            items: ['Designed around what your customer searches for and asks', 'They find what they need in seconds', 'Ready for Google from the design stage', 'Call, WhatsApp and a form on every page', 'You click through the prototype and approve it before any code'],
          },
        },
      },
      deliverables: {
        heading: 'What’s included in *your website design.*',
        intro: 'Everything is spelled out in the proposal, with price and dates. No surprise charges.',
        items: [
          { icon: 'PanelsTopLeft', title: 'The pages you need, and no more', text: 'We decide which pages your site needs and which customer question each one answers, so visitors find what they want fast and reach out.' },
          { icon: 'MousePointerClick', title: 'A prototype you click through before any code', text: 'You see and test your website before it exists. A change at this stage takes minutes, not weeks.' },
          { icon: 'Smartphone', title: 'Design that works on phones', text: 'Many of your customers will meet you on their phone: every page is designed for mobile, tablet and desktop.' },
          { icon: 'Languages', title: 'Copy that convinces, in English and Spanish', text: 'Headlines and buttons that answer what your customer asks and lead them to call, message or buy, in one language or both.' },
          { icon: 'Search', title: 'Built to show up on Google', text: 'Every page with its own search, title and description, fast loading and structured data, so Google and AI search understand what you offer.' },
          { icon: 'MessageCircle', title: 'Calls, WhatsApp and forms that work', text: 'Every page gives a clear way to reach you, and messages land in your inbox.' },
        ],
      },
      types: {
        heading: 'What kind of *website do you need?*',
        intro: 'We’ll help you choose on the call. These are the projects we’re asked for most.',
        items: [
          { icon: 'Rocket', title: 'Landing page', text: 'A single page for one service or campaign: customers arrive from Google or an ad and know in seconds what you offer and how to reach you.' },
          { icon: 'Monitor', title: 'Business website', text: 'Your full site: who you are, what you offer, who you’ve worked with and how to reach you. So people who find you on Google trust you before they call.' },
          { icon: 'RefreshCw', title: 'Website redesign', text: 'If your site looks dated, breaks on mobile or doesn’t bring in customers, we rebuild it without losing what already works for you on Google.' },
        ],
      },
      process: {
        heading: 'From the first call to your website going live, *with no surprises.*',
        steps: [
          { name: 'Free call and proposal', text: 'You tell us about your business and your customer. We review your current site and your competitors.', gets: 'A proposal with price, what’s included and dates.' },
          { name: 'Structure', text: 'We define the pages, the key copy and the path that leads your customer to contact you.', gets: 'Your sitemap and its main copy.' },
          { name: 'Design and prototype', text: 'We design every page for mobile and desktop. You click through it, ask for changes and approve it.', gets: 'A prototype you test before any code.' },
          { name: 'Launch', text: 'We build it, get it ready for Google and put it online.', gets: 'Your website live and ready to bring in customers.' },
        ],
      },
      support: {
        heading: 'Your website live, *with us behind it.*',
        intro: 'Once your site launches, you’re not on your own: we keep it running.',
        items: [
          { icon: 'ShieldCheck', title: 'Fast, secure hosting', text: 'We host your site on fast servers with a security certificate (the padlock next to the address). Nothing technical for you to handle.' },
          { icon: 'Users', title: 'Support from the same team', text: 'If something breaks or you have a question, you hear back from the team that built your site, in English or Spanish.' },
          { icon: 'PenTool', title: 'Updates as your business changes', text: 'A new service, a new promotion, new photos: we update it for you. If it’s something bigger, we tell you the cost first.' },
        ],
      },
      cases: { heading: 'Websites that *already work.*', intro: 'Web design projects for businesses like yours.' },
      faq: {
        heading: 'Web design *questions, answered.*',
        items: [
          { question: 'How much does a business website cost in the US?', answer: 'It depends on how many pages it has, how many languages and what it needs to do: forms, bookings or payments. A landing page costs less than a corporate website. Before we start, you get a proposal with the price, what’s included and the dates, with no surprise charges.' },
          { question: 'How long does it take to design a website?', answer: 'A landing page is delivered sooner than a website with several sections. The proposal has the date for each step, and timing also depends on how quickly you approve the prototype.' },
          { question: 'Can I see my website before it’s built?', answer: 'Yes. You click through a prototype of the key pages, ask for changes, and development only starts once the design is approved.' },
          { question: 'Do you build bilingual English and Spanish websites?', answer: 'Yes. We design bilingual websites with copy and structure planned for each language, not translated word for word, and every visitor switches language with one click.' },
          { question: 'Will my website show up on Google?', answer: 'We build it for Google from the design stage: every page targets a search and has its own title, description, fast loading and structured data. Reaching the top takes time and depends on your competition; we tell you which searches to go after first.' },
          { question: 'Can you redesign my current website?', answer: 'Yes. First we check what already works, like pages that get traffic from Google, so you don’t lose it. If page addresses change, we set up redirects to keep your rankings.' },
          { question: 'Do you work with businesses in any US state?', answer: 'Yes. We work over video calls at hours that fit yours, in English or Spanish, with businesses across the United States.' },
          { question: 'Do you also build and launch the website?', answer: 'Yes. Web design and development are in the same team, so the live site looks exactly like the design you approved.' },
          { question: 'Do you handle hosting and support?', answer: 'Yes. We host your website on fast, secure servers, and after launch we support you: if something breaks, you have a question or you want a change, you hear back from the same team that built your site. Updates can be covered by a monthly plan, so your site stays current without a new quote every time.' },
          { question: 'Can you do just the design if I already have a developer?', answer: 'Yes. We design your website and hand it to your developer with everything they need to build it exactly like the design you approved.' },
        ],
      },
      cta: { titleLead: 'Ready for a website', titleAccent: 'that brings in customers?', light: true },
    },
  },
};
