import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries. aurin.mx tiene bienes raíces de lujo y constructoras de casas de lujo para
 * EE. UU.: aquí el terreno es bienes raíces en general (desarrollos, inmobiliarias, administración de propiedades),
 * sin hablar de lujo. Sin nombres de clientes.
 */
export const realEstate: Service = {
  id: 'real-estate',
  slug: { es: 'diseno-web-inmobiliario', en: 'real-estate-web-design' },
  cases: [],
  photo: 'ind-real-estate',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para bienes raíces en Estados Unidos | Aurin',
        description:
          'Sitios y portales para desarrollos, inmobiliarias y administradoras de propiedades en EE. UU.: propiedades fáciles de buscar y citas en línea. Llamada gratis.',
      },
      name: 'Bienes raíces',
      summary: 'Diseño web y UX/UI para desarrollos, inmobiliarias y administradoras en EE. UU.',
      tags: 'Desarrollos · Inmobiliarias · Rentas · Administración',
      hero: {
        titleLead: 'Diseño web para bienes raíces',
        titleAccent: 'que convierte visitas en citas.',
        description:
          'Sitios y portales para desarrollos e inmobiliarias en EE. UU.: el comprador encuentra su propiedad y agenda la visita desde el celular.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Desarrollos', 'Inmobiliarias', 'Administradoras de propiedades', 'Rentas', 'Comercial e industrial', 'Proptech'],
      },
      approach: {
        heading: 'Quien busca casa compara diez sitios: *el tuyo tiene que ganar en segundos.*',
        text: 'El comprador o inquilino revisa propiedades en el celular, de noche y con prisa. Quiere filtrar por precio y zona, ver fotos grandes, entender qué incluye y agendar la visita sin esperar una llamada. Si tiene que llenar un formulario largo para ver el precio, se va al portal de siempre. Diseñamos para que tu sitio sea más fácil que el portal.',
        layers: ['Propiedades', 'Zona', 'Visita'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que manda al portal',
            items: ['Fotos chicas y fichas incompletas', 'Precio «a consultar»', 'Filtros que no funcionan en el celular', 'Para visitar hay que esperar una llamada', 'Fichas que el comprador hispano no entiende'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que agenda visitas',
            items: ['Fotos grandes, planos y recorridos', 'Precio, cuotas y qué incluye a la vista', 'Filtros por zona, precio y tamaño, pensados para el celular', 'Visitas agendadas en línea', 'Fichas y requisitos también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Lo que diseñamos para *tu desarrollo o inmobiliaria.*',
        intro: 'Hay quien empieza por el sitio de un desarrollo en preventa y quien empieza por el buscador o el portal de inquilinos. La propuesta trae alcance, precio y fechas para llegar a tu lanzamiento.',
        items: [
          { icon: 'Monitor', title: 'Sitio de desarrollo', service: 'web-design', text: 'Ubicación, amenidades, planos y avance de obra en un sitio que vende antes de terminar de construir.' },
          { icon: 'Search', title: 'Buscador de propiedades', service: 'ux-ui-design', text: 'Filtros por zona, precio y tamaño, conectados con tu inventario o tu MLS.' },
          { icon: 'CalendarCheck', title: 'Visitas en línea', text: 'Agendar una visita o una videollamada en pocos pasos, con aviso a tu equipo.' },
          { icon: 'Users', title: 'Portal de inquilinos', service: 'web-development', text: 'Pagos de renta, solicitudes de mantenimiento y documentos en un solo lugar.' },
          { icon: 'Route', title: 'Mapas de la zona', text: 'Escuelas, comercios y trayectos alrededor de cada propiedad, en un mapa claro.' },
          { icon: 'Languages', title: 'Compradores hispanos', text: 'Fichas, cuotas y requisitos explicados en español para compradores e inquilinos hispanos, sin depender de un traductor en la visita.' },
        ],
      },
      process: {
        heading: 'De la primera llamada a *propiedades con visitas agendadas.*',
        steps: [
          { name: 'Llamada de inventario', text: 'Nos cuentas qué propiedades quieres mover, cómo llegan hoy tus contactos y en qué paso se pierden.', gets: 'Alcance, precio y fechas pensadas para tu lanzamiento o preventa.' },
          { name: 'Recorrido del comprador', text: 'Revisamos tu sitio, tu inventario y lo que preguntan compradores e inquilinos antes de visitar.', gets: 'Qué información falta en tus fichas.' },
          { name: 'Búsqueda de prueba', text: 'Compradores reales buscan, filtran y agendan una visita en un prototipo navegable.', gets: 'Un buscador probado desde el celular.' },
          { name: 'Propiedades en línea', text: 'Diseño final, programación y conexión con tu MLS, inventario o CRM; después hosting y soporte.', gets: 'Tu sitio publicado y agendando visitas.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *desarrollos e inmobiliarias.*',
        items: [
          { question: '¿Con qué tipo de empresas inmobiliarias trabajan?', answer: 'Desarrollos, inmobiliarias, administradoras de propiedades, empresas de rentas, bienes raíces comerciales y proptech.' },
          { question: '¿Pueden conectar el sitio con el MLS o nuestro inventario?', answer: 'Sí. Conectamos el buscador con tu MLS, tu CRM o tu inventario si lo permiten, para que las propiedades se actualicen solas.' },
          { question: '¿Hacen sitios para un solo desarrollo?', answer: 'Sí. Un sitio para un desarrollo, con ubicación, amenidades, planos y avance de obra, pensado para vender en preventa.' },
          { question: '¿Pueden conectar las visitas con nuestro CRM?', answer: 'Sí. Cada visita o contacto llega a tu CRM con la propiedad que le interesó.' },
          { question: '¿Las fichas de propiedades pueden estar en español?', answer: 'Sí. Las fichas, los filtros y la solicitud de visita quedan en español, para que el comprador hispano compare y agende sin depender de nadie.' },
        ],
      },
      cta: { titleLead: 'Hagamos que tus propiedades', titleAccent: 'se visiten más.' },
    },
    en: {
      seo: {
        title: 'Real Estate Website Design Agency in the US | Aurin',
        description:
          'Websites and portals for US developments, brokerages and property managers: listings that are easy to search and online showings. Free call.',
      },
      name: 'Real estate',
      summary: 'Web and UX/UI design for US developments, brokerages and property managers.',
      tags: 'Developments · Brokerages · Rentals · Property management',
      hero: {
        titleLead: 'Website design for real estate',
        titleAccent: 'that turns visits into showings.',
        description:
          'Websites and portals for US developments and brokerages: buyers find the right property and book a showing from their phone.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Developments', 'Brokerages', 'Property managers', 'Rentals', 'Commercial and industrial', 'Proptech'],
      },
      approach: {
        heading: 'Home buyers compare ten websites: *yours has to win in seconds.*',
        text: 'Buyers and renters browse listings on their phone, at night and in a hurry. They want to filter by price and area, see big photos, understand what’s included and book a showing without waiting for a call. If they have to fill out a long form to see the price, they go back to the usual portal. We design your website to be easier than the portal.',
        layers: ['Listings', 'Neighborhood', 'Showing'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that sends buyers to the portal',
            items: ['Small photos and incomplete listings', 'Price “on request”', 'Filters that break on phones', 'To visit, you wait for a call'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that books showings',
            items: ['Big photos, floor plans and tours', 'Price, fees and what’s included in plain sight', 'Filters by area, price and size, built for phones', 'Showings booked online'],
          },
        },
      },
      deliverables: {
        heading: 'What we design for *your development or brokerage.*',
        intro: 'Some start with a pre-sale development website, others with the property search or the tenant portal. The proposal includes scope, price and dates timed to your launch.',
        items: [
          { icon: 'Monitor', title: 'Development website', service: 'web-design', text: 'Location, amenities, floor plans and construction progress on a website that sells before it’s finished.' },
          { icon: 'Search', title: 'Property search', service: 'ux-ui-design', text: 'Filters by area, price and size, connected to your inventory or your MLS.' },
          { icon: 'CalendarCheck', title: 'Online showings', text: 'Book a showing or a video call in a few steps, with an alert to your team.' },
          { icon: 'Users', title: 'Tenant portal', service: 'web-development', text: 'Rent payments, maintenance requests and documents in one place.' },
          { icon: 'Route', title: 'Neighborhood maps', text: 'Schools, shops and commutes around each property, on a clear map.' },
          { icon: 'Languages', title: 'Hispanic buyers', text: 'Listings, fees and requirements explained in Spanish for Hispanic buyers and renters, with no translator needed at the showing.' },
        ],
      },
      process: {
        heading: 'From the first call to *listings with booked showings.*',
        steps: [
          { name: 'Inventory call', text: 'You tell us which properties you want to move, how leads come in today and at which step they drop off.', gets: 'Scope, price and dates timed to your launch or pre-sale.' },
          { name: 'The buyer’s path', text: 'We review your website, your inventory and what buyers and renters ask before a showing.', gets: 'What’s missing from your listings.' },
          { name: 'Test search', text: 'Real buyers search, filter and book a showing on a clickable prototype.', gets: 'A property search tested on a phone.' },
          { name: 'Listings live', text: 'Final design, development and the connection to your MLS, inventory or CRM; then hosting and support.', gets: 'Your website live and booking showings.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *developers and brokerages* ask us.',
        items: [
          { question: 'What kinds of real estate companies do you work with?', answer: 'Developments, brokerages, property managers, rental companies, commercial real estate and proptech.' },
          { question: 'Can you connect the website to the MLS or our inventory?', answer: 'Yes. We connect the search to your MLS, CRM or inventory if they allow it, so listings update on their own.' },
          { question: 'Do you build websites for a single development?', answer: 'Yes. A website for one development, with location, amenities, floor plans and construction progress, built for pre-sales.' },
          { question: 'Can you connect showings to our CRM?', answer: 'Yes. Every showing or lead reaches your CRM with the property they were interested in.' },
        ],
      },
      cta: { titleLead: 'Let’s get your properties', titleAccent: 'more showings.' },
    },
  },
};
