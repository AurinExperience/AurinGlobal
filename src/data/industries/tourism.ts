import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries. aurin.mx tiene hoteles boutique, rentas vacacionales y yates para EE. UU.:
 * aquí el terreno es atracciones, tours y eventos (boletos, mapas, horarios), sin hoteles. Sin nombres de clientes.
 */
export const tourism: Service = {
  id: 'tourism',
  slug: { es: 'diseno-web-turismo', en: 'tourism-web-design' },
  cases: [],
  photo: 'ind-tourism',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para turismo en Estados Unidos | Bilingüe | Aurin',
        description:
          'Diseño y desarrollo web, UX/UI y branding para atracciones, tours y eventos en EE. UU.: boletos directo, sin comisión. Bilingüe, desde 1998. Llamada gratis.',
      },
      name: 'Turismo y entretenimiento',
      summary: 'Diseño y desarrollo web, UX/UI y branding para atracciones, tours y eventos en EE. UU.',
      tags: 'Atracciones · Tours · Parques · Eventos',
      hero: {
        titleLead: 'Diseño y desarrollo web para turismo y entretenimiento',
        titleAccent: 'que convierte curiosos en visitantes.',
        description:
          'Sitios, plataformas de boletos y marca para atracciones, tours y eventos en EE. UU.: el visitante siente la experiencia y compra directo desde el celular.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Atracciones', 'Parques', 'Tours y experiencias', 'Museos', 'Festivales y eventos', 'Centros de entretenimiento'],
      },
      approach: {
        heading: 'La visita empieza en tu sitio: *si no emociona, eligen otro plan.*',
        text: 'Antes de llegar a tu puerta, el visitante ya decidió en su celular, comparando dos o tres planes en minutos. Elige al que le deja ver lo que va a vivir, le dice cuánto cuesta y le vende el boleto ahí mismo. Si tu sitio no emociona o lo manda a comprar a otra página, la venta se va, o se la queda una plataforma de reservas que te cobra comisión. Diseñamos y programamos para que te elijan a ti y te compren directo.',
        layers: ['Experiencias', 'Boletos', 'Visita'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que solo informa',
            items: ['Fotos chicas y textos que nadie lee', 'Para comprar te mandan a otra página', 'Las ventas llegan por plataformas que cobran comisión', 'Horarios y precios escondidos en un PDF', 'El turista hispano no entiende y compra en otro lado'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que vende la experiencia',
            items: ['Fotos y video grandes que dan ganas de ir', 'Boletos en pocos pasos, sin salir de tu sitio', 'Más ventas directas, sin comisión de por medio', 'Horarios, precios y disponibilidad a la vista', 'La misma compra fácil, también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Diseño, desarrollo, UX/UI y marca *para tu atracción.*',
        intro: 'Un solo equipo para todo: no tienes que coordinar a tres proveedores. Puedes empezar por lo que más urge, con precio cerrado y fechas para estrenar antes de tu temporada alta.',
        items: [
          { icon: 'Monitor', title: 'Diseño web para turismo', service: 'web-design', text: 'Un sitio que da ganas de ir: fotos y video grandes, horarios, mapa y cómo llegar a la vista, y páginas que aparecen en Google cuando buscan qué hacer en tu ciudad.' },
          { icon: 'Code', title: 'Desarrollo web: boletos y reservas', service: 'web-development', text: 'Programamos tu propia aplicación web de boletos y reservas, con tus precios, horarios, cupos y pagos, o la conectamos a tu sistema actual. Venta directa desde el celular, sin comisión de plataformas.' },
          { icon: 'MousePointerClick', title: 'Diseño UX/UI de la compra', service: 'ux-ui-design', text: 'Elegir fecha, boleto y pagar en pocos pasos. Probamos la compra con visitantes reales antes de programar, para que nadie la abandone a la mitad.' },
          { icon: 'Gem', title: 'Branding para atracciones', service: 'branding', text: 'Nombre, logo e imagen que se recuerdan, pensados para tu sitio, tus boletos, tu señalización y las fotos que tus visitantes suben a redes.' },
          { icon: 'Layers', title: 'Combos, pases y grupos', text: 'Paquetes, pases anuales, tarjetas de regalo y reservas para escuelas, empresas y cumpleaños, que suben lo que gasta cada visitante.' },
          { icon: 'Languages', title: 'Sitio y compra en español', text: 'Horarios, precios y compra escritos en español para el turista hispano, con la misma compra rápida que en inglés.' },
        ],
      },
      process: {
        heading: 'De la primera llamada a *la temporada llena.*',
        steps: [
          { name: 'Cuéntanos tu temporada', text: 'En una llamada gratis vemos qué fechas quieres llenar, cómo vendes hoy y cuánto se te va en comisiones.', gets: 'Precio cerrado y fechas pensadas para tu temporada alta.' },
          { name: 'Seguimos al visitante', text: 'Revisamos tu sitio, tus ventas y lo que preguntan los visitantes antes de comprar.', gets: 'Dónde se pierden las ventas y qué cambiar primero.' },
          { name: 'Compra de prueba', text: 'Visitantes reales compran un boleto en un prototipo desde su celular, antes de programar.', gets: 'Una compra rápida, probada con gente real.' },
          { name: 'Taquilla abierta', text: 'Diseño final, programación y conexión con tu sistema de boletos. Después, hosting y soporte toda la temporada.', gets: 'Tu sitio vendiendo antes de que empiece la temporada.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *atracciones y eventos.*',
        items: [
          { question: '¿Qué servicios ofrecen para empresas de turismo?', answer: 'Diseño web, desarrollo web, diseño UX/UI y branding, con un solo equipo. Puedes empezar solo por la venta de boletos, solo por la marca o hacer todo junto.' },
          { question: '¿Con qué tipo de negocios de turismo trabajan?', answer: 'Atracciones, parques, tours y experiencias, museos, festivales y centros de entretenimiento.' },
          { question: '¿Nos ayudan a depender menos de las plataformas de reservas?', answer: 'Sí. Las plataformas sirven para que te descubran, pero cada venta te cuesta comisión. Diseñamos tu sitio para que quien ya te encontró compre directo contigo, y para que aparezca en Google cuando buscan qué hacer en tu ciudad.' },
          { question: '¿Desarrollan plataformas de boletos y reservas?', answer: 'Sí. Programamos tu aplicación web de boletos y reservas, con tus precios, horarios, cupos y pagos. Si ya tienes un sistema y te funciona, lo conectamos y diseñamos la compra para que se vea parte de tu sitio.' },
          { question: '¿El sitio aguanta las fechas de más visitas?', answer: 'Sí. Lo preparamos para picos de tráfico, como vacaciones o el lanzamiento de un evento, y lo probamos antes.' },
          { question: '¿La compra de boletos puede ser en español?', answer: 'Sí. El sitio y la compra quedan en inglés y en español, escritos por separado, para que el turista hispano pague sin traducir nada.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tu próxima temporada', titleAccent: 'se venda desde tu sitio.' },
    },
    en: {
      seo: {
        title: 'Tourism Website Design & Development in the US | Aurin',
        description:
          'Web design, development, UX/UI and branding for US attractions, tours and events: direct ticketing, no platform commission. Since 1998. Free call.',
      },
      name: 'Tourism and entertainment',
      summary: 'Web design, development, UX/UI and branding for US attractions, tours and events.',
      tags: 'Attractions · Tours · Parks · Events',
      hero: {
        titleLead: 'Web design and development for tourism and entertainment',
        titleAccent: 'that turns browsers into visitors.',
        description:
          'Websites, ticketing platforms and brands for US attractions, tours and events: visitors feel the experience and buy direct from their phone.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Attractions', 'Parks', 'Tours and experiences', 'Museums', 'Festivals and events', 'Entertainment centers'],
      },
      approach: {
        heading: 'The visit starts on your website: *if it doesn’t excite, they pick another plan.*',
        text: 'Before anyone reaches your gate, they’ve already decided on their phone, comparing two or three plans in minutes. They choose the one that shows what they’ll experience, tells them what it costs and sells the ticket right there. If your site falls flat or sends them to buy somewhere else, the sale is gone, or a booking platform keeps a commission on it. We design and build so people choose you and buy direct.',
        layers: ['Experiences', 'Tickets', 'The visit'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that only informs',
            items: ['Small photos and text nobody reads', 'Buying sends people to another site', 'Sales come through platforms that take a commission', 'Hours and prices buried in a PDF'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that sells the experience',
            items: ['Big photos and video that make people want to go', 'Tickets in a few steps, without leaving your site', 'More direct sales, no commission in between', 'Hours, prices and availability in plain sight'],
          },
        },
      },
      deliverables: {
        heading: 'Design, development, UX/UI and branding *for your attraction.*',
        intro: 'One team for all of it, so you never coordinate three vendors. Start with what’s most urgent, with a fixed price and dates to launch before your peak season.',
        items: [
          { icon: 'Monitor', title: 'Tourism website design', service: 'web-design', text: 'A website that makes people want to go: big photos and video, hours, map and directions in plain sight, and pages that show up on Google when people search for things to do in your city.' },
          { icon: 'Code', title: 'Web development: ticketing and bookings', service: 'web-development', text: 'We build your own ticketing and booking web app, with your prices, hours, capacity and payments, or connect your current system. Direct sales from a phone, no platform commission.' },
          { icon: 'MousePointerClick', title: 'UX/UI design for checkout', service: 'ux-ui-design', text: 'Pick a date, a ticket and pay in a few steps. We test checkout with real visitors before any code, so nobody drops off halfway.' },
          { icon: 'Gem', title: 'Branding for attractions', service: 'branding', text: 'Name, logo and visual identity people remember, made for your website, tickets, signage and the photos visitors post on social media.' },
          { icon: 'Layers', title: 'Bundles, passes and groups', text: 'Packages, annual passes, gift cards and bookings for schools, companies and birthday parties that raise what each visitor spends.' },
        ],
      },
      process: {
        heading: 'From the first call to *a full season.*',
        steps: [
          { name: 'Tell us about your season', text: 'On a free call we look at which dates you want to fill, how you sell today and how much goes to commissions.', gets: 'Fixed price and dates planned around your peak season.' },
          { name: 'Following the visitor', text: 'We review your website, your sales and what visitors ask before they buy.', gets: 'Where sales slip away and what to fix first.' },
          { name: 'Test purchase', text: 'Real visitors buy a ticket on a prototype from their phone, before any code.', gets: 'A fast checkout, tested with real people.' },
          { name: 'Box office open', text: 'Final design, development and the connection to your ticketing system. Then hosting and support all season long.', gets: 'Your website selling before the season starts.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *attractions and events* ask us.',
        items: [
          { question: 'What services do you offer tourism businesses?', answer: 'Web design, web development, UX/UI design and branding, from one team. You can start with just ticketing, just the brand, or do it all together.' },
          { question: 'What kinds of tourism businesses do you work with?', answer: 'Attractions, parks, tours and experiences, museums, festivals and entertainment centers.' },
          { question: 'Can you help us rely less on booking platforms?', answer: 'Yes. Platforms help people discover you, but every sale costs you a commission. We design your website so people who already found you buy direct, and so it shows up on Google when they search for things to do in your city.' },
          { question: 'Do you build ticketing and booking platforms?', answer: 'Yes. We build your ticketing and booking web app, with your prices, hours, capacity and payments. If you already have a system that works, we connect it and design checkout so it feels like part of your site.' },
          { question: 'Will the website hold up on peak days?', answer: 'Yes. We prepare it for traffic spikes, like holidays or an event launch, and test it beforehand.' },
        ],
      },
      cta: { titleLead: 'Let’s make your next season', titleAccent: 'sell from your own website.' },
    },
  },
};
