import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries: desarrollo web para agencias de diseño y marketing de EE. UU., con su marca
 * (marca blanca). aurin.mx no lo tiene. Sin nombres de clientes.
 */
export const agencies: Service = {
  id: 'agencies',
  slug: { es: 'desarrollo-web-para-agencias', en: 'web-development-for-agencies' },
  cases: [],
  photo: 'ind-agencies',
  copy: {
    es: {
      seo: {
        title: 'Desarrollo web para agencias en Estados Unidos | Aurin',
        description:
          'Programamos los sitios que diseña tu agencia, fieles al diseño y con tu marca, para agencias de diseño y marketing en EE. UU. Precio cerrado. Llamada gratis.',
      },
      name: 'Agencias de diseño',
      summary: 'Desarrollo web con tu marca para agencias de diseño y marketing en EE. UU.',
      tags: 'Agencias de diseño · Branding · Marketing · Marca blanca',
      hero: {
        titleLead: 'Desarrollo web para agencias',
        titleAccent: 'fiel a cada detalle de tu diseño.',
        description:
          'Programamos los sitios que diseña tu agencia, con tu marca e invisibles para tu cliente: idénticos al diseño y a tiempo.',
        ctaSecondary: 'Cómo trabajamos',
      },
      industries: {
        heading: 'Trabajamos con',
        items: ['Agencias de diseño', 'Estudios de branding', 'Agencias de marketing', 'Agencias de publicidad', 'Diseñadores independientes', 'Consultoras'],
      },
      approach: {
        heading: 'Tu diseño es lo que vendiste: *el sitio tiene que verse igual.*',
        text: 'Una agencia gana el proyecto con el diseño. Luego el desarrollador lo «adapta», las animaciones desaparecen, el celular se ve distinto y la fecha se recorre. El cliente culpa a la agencia. Somos diseñadores que programan: respetamos cada espacio, tipografía y animación, y te avisamos antes si algo no se puede hacer.',
        layers: ['Diseño', 'Desarrollo', 'Entrega'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que no se parece al diseño',
            items: ['Espacios y tipografías «aproximados»', 'Animaciones que se quedan fuera', 'El celular se resuelve al final', 'Fechas que se recorren', 'El cliente termina hablando con el desarrollador'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio igual a tu diseño',
            items: ['Cada pantalla igual al Figma', 'Animaciones e interacciones como las diseñaste', 'Celular y escritorio revisados contigo', 'Fechas por escrito', 'Tú hablas con tu cliente; nosotros, contigo'],
          },
        },
      },
      deliverables: {
        heading: 'Qué hacemos para *tu agencia.*',
        intro: 'Desde un sitio hasta todos los proyectos de tu agencia. Cada uno con precio cerrado y fechas.',
        items: [
          { icon: 'Code', title: 'Desarrollo desde tu Figma', service: 'web-development', text: 'Programamos tu diseño tal cual, con animaciones e interacciones, y lo revisamos contigo pantalla por pantalla.' },
          { icon: 'PanelsTopLeft', title: 'Administrador fácil', text: 'Tu cliente cambia textos, fotos y páginas sin romper el diseño. Trabajamos con el administrador que prefieras.' },
          { icon: 'Rocket', title: 'Sitios rápidos', text: 'Carga rápida y bien hechos para Google desde el primer día, para que el diseño se luzca.' },
          { icon: 'ShieldCheck', title: 'Con tu marca', text: 'Trabajamos como parte de tu equipo, sin nuestro nombre en el sitio ni en los correos con tu cliente.' },
          { icon: 'Plug', title: 'Integraciones', text: 'Formularios, CRM, tienda, reservas o pagos: conectamos lo que el proyecto necesita.' },
          { icon: 'RefreshCw', title: 'Hosting y soporte', text: 'Nos quedamos con el mantenimiento si quieres, para que tu agencia no tenga que cargar con eso.' },
        ],
      },
      process: {
        heading: 'De tu diseño en Figma a *un sitio igual en línea.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas el proyecto, la fecha que le prometiste a tu cliente y cómo trabajan.', gets: 'Precio cerrado y fechas por proyecto.' },
          { name: 'Revisión del diseño', text: 'Revisamos tu Figma y te avisamos antes de empezar si algo no se puede hacer o costaría más.', gets: 'Sin sorpresas a la mitad.' },
          { name: 'Desarrollo y revisiones', text: 'Programamos y te mostramos avances en un enlace privado para revisar celular y escritorio.', gets: 'Un sitio que apruebas antes que tu cliente.' },
          { name: 'Lanzamiento', text: 'Lo publicamos, capacitamos a tu cliente con tu marca y nos quedamos con el soporte si quieres.', gets: 'Tu proyecto en línea, en la fecha.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas sobre *trabajar con tu agencia.*',
        items: [
          { question: '¿Su nombre aparece en el sitio?', answer: 'No. Trabajamos con tu marca: ni el sitio ni los correos con tu cliente llevan nuestro nombre, y firmamos un acuerdo de confidencialidad.' },
          { question: '¿Con qué herramientas trabajan?', answer: 'Partimos de Figma y programamos con el administrador que el proyecto necesite. Te recomendamos uno según lo que tu cliente va a cambiar.' },
          { question: '¿Qué pasa si algo del diseño no se puede programar?', answer: 'Te lo decimos al revisar el diseño, antes de empezar, con una alternativa. Nada de sorpresas a la mitad.' },
          { question: '¿Pueden hacer varios proyectos a la vez?', answer: 'Sí. Muchas agencias nos mandan todos sus sitios; cada uno lleva su precio cerrado y sus fechas.' },
          { question: '¿Trabajan en inglés?', answer: 'Sí. Trabajamos en inglés con tu equipo y en tu zona horaria; también hacemos sitios en español si tu cliente los necesita.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tu próximo sitio', titleAccent: 'se vea igual a tu diseño.' },
    },
    en: {
      seo: {
        title: 'White-Label Web Development for US Agencies | Aurin',
        description:
          'We build the websites your agency designs, true to the design and under your brand, for US design and marketing agencies. Fixed price. Free call.',
      },
      name: 'Design agencies',
      summary: 'White-label web development for US design and marketing agencies.',
      tags: 'Design agencies · Branding · Marketing · White label',
      hero: {
        titleLead: 'Web development for agencies',
        titleAccent: 'true to every detail of your design.',
        description:
          'We build the websites your agency designs, under your brand and invisible to your client: true to the design and on time.',
        ctaSecondary: 'How we work',
      },
      industries: {
        heading: 'We work with',
        items: ['Design agencies', 'Branding studios', 'Marketing agencies', 'Ad agencies', 'Freelance designers', 'Consultancies'],
      },
      approach: {
        heading: 'Your design is what you sold: *the website has to look the same.*',
        text: 'An agency wins the project with the design. Then the developer “adapts” it, the animations disappear, mobile looks different and the date slips. The client blames the agency. We’re designers who code: we respect every space, typeface and animation, and tell you upfront if something can’t be done.',
        layers: ['Design', 'Development', 'Delivery'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that doesn’t match',
            items: ['“Close enough” spacing and type', 'Animations left out', 'Mobile figured out at the end', 'Dates that slip', 'Your client ends up talking to the developer'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website identical to your design',
            items: ['Every screen matches the Figma', 'Animations and interactions as designed', 'Mobile and desktop reviewed with you', 'Dates in writing', 'You talk to your client; we talk to you'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your agency.*',
        intro: 'From one website to every project your agency runs. Each with a fixed price and dates.',
        items: [
          { icon: 'Code', title: 'Development from your Figma', service: 'web-development', text: 'We build your design as is, with animations and interactions, and review it with you screen by screen.' },
          { icon: 'PanelsTopLeft', title: 'Easy admin', text: 'Your client edits copy, photos and pages without breaking the design. We work with the CMS you prefer.' },
          { icon: 'Rocket', title: 'Fast websites', text: 'Fast loading and built right for Google from day one, so the design shines.' },
          { icon: 'ShieldCheck', title: 'Under your brand', text: 'We work as part of your team, with no name of ours on the website or in emails with your client.' },
          { icon: 'Plug', title: 'Integrations', text: 'Forms, CRM, store, bookings or payments: we connect what the project needs.' },
          { icon: 'RefreshCw', title: 'Hosting and support', text: 'We take on maintenance if you want, so your agency doesn’t have to carry it.' },
        ],
      },
      process: {
        heading: 'From your Figma design to *an identical website live.*',
        steps: [
          { name: 'Free call', text: 'You tell us about the project, the date you promised your client and how you work.', gets: 'Fixed price and dates per project.' },
          { name: 'Design review', text: 'We review your Figma and tell you before we start if anything can’t be done or would cost more.', gets: 'No surprises halfway through.' },
          { name: 'Development and reviews', text: 'We build and share progress on a private link so you can review mobile and desktop.', gets: 'A website you approve before your client does.' },
          { name: 'Launch', text: 'We publish it, train your client under your brand and keep the support if you want.', gets: 'Your project live, on time.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions about *working with your agency.*',
        items: [
          { question: 'Does your name appear on the website?', answer: 'No. We work under your brand: neither the website nor the emails with your client carry our name, and we sign an NDA.' },
          { question: 'What tools do you work with?', answer: 'We start from Figma and build on the CMS the project needs. We recommend one based on what your client will edit.' },
          { question: 'What if part of the design can’t be built?', answer: 'We tell you during the design review, before we start, with an alternative. No surprises halfway through.' },
          { question: 'Can you take several projects at once?', answer: 'Yes. Many agencies send us all their websites; each one gets its own fixed price and dates.' },
          { question: 'Do you work in English?', answer: 'Yes. We work in English with your team and in your time zone; we also build Spanish websites if your client needs them.' },
        ],
      },
      cta: { titleLead: 'Let’s make your next website', titleAccent: 'look exactly like your design.' },
    },
  },
};
