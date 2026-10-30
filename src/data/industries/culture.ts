import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries. aurin.mx tiene galerías de arte para EE. UU.: aquí el terreno es
 * teatros, orquestas, museos de ciencia e instituciones culturales (temporadas, taquilla, donativos), sin galerías.
 * Sin nombres de clientes.
 */
export const culture: Service = {
  id: 'culture',
  slug: { es: 'diseno-web-cultura', en: 'arts-culture-web-design' },
  cases: [],
  photo: 'ind-culture',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para teatros y museos en Estados Unidos | Aurin',
        description:
          'Diseño y desarrollo web, UX/UI y branding para teatros, orquestas y museos en EE. UU.: boletos y donativos en tu sitio. Bilingüe, desde 1998. Llamada gratis.',
      },
      name: 'Cultura y ciencia',
      summary: 'Diseño y desarrollo web, UX/UI y branding para teatros, orquestas, museos y centros de ciencia en EE. UU.',
      tags: 'Teatros · Orquestas · Museos · Ciencia',
      hero: {
        titleLead: 'Diseño y desarrollo web para cultura y ciencia',
        titleAccent: 'que agota funciones.',
        description:
          'Sitios, taquilla en línea y marca para teatros, orquestas y museos en EE. UU.: el público compra en tu sitio y vuelve cada temporada.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Teatros y compañías', 'Orquestas', 'Museos', 'Centros de ciencia', 'Festivales', 'Salas de concierto'],
      },
      approach: {
        heading: 'Las butacas se llenan o se vacían en tu sitio: *ahí deciden si van.*',
        text: 'Quien piensa en salir el fin de semana no compara tu temporada con la de otro teatro: la compara con quedarse en casa. Decide en su celular, en un par de minutos. Si tu sitio no le dice por qué ir, el calendario es una tabla y para comprar lo manda a otra página con cargos extra, se queda en casa. Diseñamos y programamos para que quien entra compre su boleto, vuelva con un abono y, el día que pueda, done.',
        layers: ['Temporada', 'Boletos', 'Donativos'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que solo anuncia',
            items: ['Calendario en una tabla larga', 'Para comprar te mandan a otra página con cargos extra', 'Donar es un formulario escondido', 'Textos para especialistas: el público nuevo no se anima', 'El público hispano no sabe que también es para él'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que llena la sala',
            items: ['Cada función con fotos, video y por qué ir', 'Boletos y abonos en tu sitio, en pocos pasos', 'Donar o hacerse miembro en un minuto', 'Textos que invitan a quien nunca ha ido', 'Programas y boletos también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Diseño, desarrollo, UX/UI y marca *para tu institución cultural.*',
        intro: 'Un solo equipo para todo: no tienes que coordinar a tres proveedores. Puedes empezar por lo que más urge, con precio cerrado y fechas para estrenar antes de anunciar la temporada.',
        items: [
          { icon: 'Monitor', title: 'Diseño web para cultura', service: 'web-design', text: 'Un sitio con la emoción del escenario: temporada, funciones y exposiciones con fotos y video, y páginas que aparecen en Google cuando buscan qué hacer en tu ciudad.' },
          { icon: 'Code', title: 'Desarrollo web: taquilla en línea', service: 'web-development', text: 'Programamos tu taquilla en tu propio sitio: funciones, butacas, abonos y pagos con tus precios, o la conectamos a tu sistema de boletos actual.' },
          { icon: 'MousePointerClick', title: 'Diseño UX/UI de la compra', service: 'ux-ui-design', text: 'Elegir función, butaca y pagar en pocos pasos desde el celular. Probamos la compra con asistentes reales antes de programar, para que nadie la deje a la mitad.' },
          { icon: 'Gem', title: 'Branding para teatros, orquestas y museos', service: 'branding', text: 'Nombre, logo e imagen para tu institución o tu temporada, pensados para el sitio, los carteles, el programa de mano y las redes.' },
          { icon: 'Users', title: 'Abonos, membresías y donativos', text: 'Hacerse miembro, renovar el abono o donar en un minuto, con montos sugeridos, recibo inmediato y beneficios claros.' },
          { icon: 'Languages', title: 'Nuevo público en español', text: 'Programas, notas y taquilla escritos en español para el público hispano de tu ciudad, que muchas veces no sabe que tu temporada también es para él.' },
        ],
      },
      process: {
        heading: 'Del sitio de hoy a *una sala llena.*',
        steps: [
          { name: 'Cuéntanos tu temporada', text: 'En una llamada gratis vemos qué funciones quieres llenar, cómo vendes hoy los boletos y cómo llegan los donativos.', gets: 'Precio cerrado y fechas pensadas para tu próxima temporada.' },
          { name: 'Entre bambalinas', text: 'Revisamos tu sitio y tus datos de taquilla, y platicamos con asistentes fieles y con quien nunca ha ido.', gets: 'Por qué el público nuevo no compra y qué lo invitaría.' },
          { name: 'Ensayo general', text: 'Asistentes y donantes recorren un prototipo desde su celular: eligen función, compran y donan.', gets: 'Taquilla y donativos probados antes de programar.' },
          { name: 'Estreno', text: 'Diseño final, programación y conexión con tu sistema de boletos; después, hosting y soporte toda la temporada.', gets: 'Tu sitio vendiendo antes de anunciar la temporada.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *teatros, orquestas y museos.*',
        items: [
          { question: '¿Qué servicios ofrecen para instituciones culturales?', answer: 'Diseño web, desarrollo web, diseño UX/UI y branding, con un solo equipo. Puedes empezar solo por la taquilla, solo por la marca de tu temporada o hacer todo junto.' },
          { question: '¿Trabajan con instituciones pequeñas?', answer: 'Sí. Teatros y compañías, orquestas, museos, centros de ciencia, festivales y salas de concierto, desde una compañía independiente hasta instituciones con varias sedes.' },
          { question: '¿Pueden programar nuestra taquilla en línea?', answer: 'Sí. Programamos la venta de boletos y abonos en tu propio sitio, con tus precios, butacas y pagos. Si ya tienes un sistema de boletos y te funciona, lo conectamos y diseñamos la compra para que se vea parte de tu sitio.' },
          { question: '¿Pueden hacer que donar sea más fácil?', answer: 'Sí. Diseñamos donativos y membresías en pocos pasos, con montos sugeridos, recibo inmediato y lo que recibe cada donante a la vista.' },
          { question: '¿Nuestro equipo puede actualizar la temporada?', answer: 'Sí. Te dejamos un administrador sencillo para subir funciones, fotos y textos sin depender de nosotros.' },
          { question: '¿De qué sirve tener el sitio en español?', answer: 'Abre tu temporada a un público que hoy no te busca: escribimos en español programas, notas y la compra de boletos, para que se sienta invitado y no traducido.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tu próxima temporada', titleAccent: 'se venda desde tu sitio.' },
    },
    en: {
      seo: {
        title: 'Theater & Museum Website Design in the US | Aurin',
        description:
          'Web design and development, UX/UI and branding for US theaters, orchestras and museums: tickets and giving on your own site. Since 1998. Free call.',
      },
      name: 'Culture and science',
      summary: 'Web design and development, UX/UI and branding for US theaters, orchestras, museums and science centers.',
      tags: 'Theaters · Orchestras · Museums · Science',
      hero: {
        titleLead: 'Web design and development for arts, culture and science',
        titleAccent: 'that sells out shows.',
        description:
          'Websites, online box office and branding for US theaters, orchestras and museums: audiences buy on your site and come back every season.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Theaters and companies', 'Orchestras', 'Museums', 'Science centers', 'Festivals', 'Concert halls'],
      },
      approach: {
        heading: 'Seats fill up or stay empty on your website: *that’s where people decide.*',
        text: 'Someone planning a night out isn’t comparing your season with another theater’s: they’re comparing it with staying home. They decide on their phone, in a couple of minutes. If your website doesn’t tell them why to go, the calendar is a table and buying sends them to another page with extra fees, they stay home. We design and build so visitors buy a ticket, come back with a subscription and, when they can, give.',
        layers: ['Season', 'Tickets', 'Giving'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that only announces',
            items: ['The calendar is a long table', 'Buying sends you to another page with extra fees', 'Giving is a hidden form', 'Copy written for experts: new audiences don’t take the leap'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that fills the house',
            items: ['Every performance with photos, video and why to go', 'Tickets and subscriptions on your site, in a few steps', 'Give or become a member in a minute', 'Copy that invites people who have never been'],
          },
        },
      },
      deliverables: {
        heading: 'Design, development, UX/UI and branding *for your cultural institution.*',
        intro: 'One team for all of it: no juggling three vendors. Start with what’s most urgent, with a fixed price and dates to launch before you announce the season.',
        items: [
          { icon: 'Monitor', title: 'Website design for the arts', service: 'web-design', text: 'A website with the excitement of the stage: season, performances and exhibitions with photos and video, and pages that show up on Google when people look for things to do in your city.' },
          { icon: 'Code', title: 'Web development: online box office', service: 'web-development', text: 'We build your box office into your own website: performances, seats, subscriptions and payments with your prices, or connect it to the ticketing system you already use.' },
          { icon: 'MousePointerClick', title: 'UX/UI design for checkout', service: 'ux-ui-design', text: 'Pick a performance, a seat and pay in a few steps from a phone. We test checkout with real attendees before we build, so nobody gives up halfway.' },
          { icon: 'Gem', title: 'Branding for theaters, orchestras and museums', service: 'branding', text: 'Name, logo and visual identity for your institution or your season, made for the website, posters, the printed program and social media.' },
          { icon: 'Users', title: 'Subscriptions, memberships and giving', text: 'Become a member, renew a subscription or donate in a minute, with suggested amounts, an instant receipt and clear benefits.' },
          { icon: 'BookOpen', title: 'Content and education', text: 'Program notes, school programs and archives, organized for audiences and teachers, and easy for your team to update.' },
        ],
      },
      process: {
        heading: 'From today’s website to *a full house.*',
        steps: [
          { name: 'Tell us about your season', text: 'On a free call we look at which performances you want to fill, how tickets sell today and how donations come in.', gets: 'A fixed price and dates timed to your next season.' },
          { name: 'Backstage', text: 'We review your website and box office data, and talk to loyal attendees and to people who have never been.', gets: 'Why new audiences don’t buy, and what would invite them.' },
          { name: 'Dress rehearsal', text: 'Attendees and donors click through a prototype on their phones: they pick a show, buy and give.', gets: 'Box office and giving tested before any code.' },
          { name: 'Opening night', text: 'Final design, development and the connection to your ticketing system; then hosting and support all season.', gets: 'Your website selling before you announce the season.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *theaters, orchestras and museums* ask us.',
        items: [
          { question: 'What services do you offer cultural institutions?', answer: 'Web design, web development, UX/UI design and branding, from one team. Start with just the box office, just the brand for your season, or all of it together.' },
          { question: 'Do you work with smaller institutions?', answer: 'Yes. Theaters and companies, orchestras, museums, science centers, festivals and concert halls, from an independent company to institutions with several venues.' },
          { question: 'Can you build our online box office?', answer: 'Yes. We build ticket and subscription sales into your own website, with your prices, seats and payments. If you already have a ticketing system that works, we connect it and design checkout so it feels like part of your site.' },
          { question: 'Can you make giving easier?', answer: 'Yes. We design donations and memberships in a few steps, with suggested amounts, an instant receipt and what each donor gets in plain sight.' },
          { question: 'Can our team update the season?', answer: 'Yes. You get a simple admin to add performances, photos and copy without depending on us.' },
        ],
      },
      cta: { titleLead: 'Let’s sell your next season', titleAccent: 'from your own website.' },
    },
  },
};
