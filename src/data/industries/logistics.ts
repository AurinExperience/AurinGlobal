import type { Service } from '@/data/services';

/**
 * Nicho sin tarjeta en la home. aurin.mx tiene UX/UI para logística, sin país (`for-logistics`):
 * aquí el terreno es la empresa de carga y almacén en EE. UU. y el sitio + portal + marca. Sin nombres de clientes.
 */
export const logistics: Service = {
  id: 'logistics',
  slug: { es: 'diseno-web-logistica', en: 'logistics-web-design' },
  publishAt: '2026-11-06T06:00:00-06:00',
  cases: [],
  copy: {
    es: {
      seo: {
        title: 'Diseño web para logística en Estados Unidos | Aurin',
        description:
          'Sitios y portales para carga, almacén y distribución en EE. UU.: cobertura, cotización y seguimiento claros, con SEO básico o avanzado. Llamada gratis.',
      },
      name: 'Logística y transporte',
      summary: 'Diseño web y portales para empresas de carga, almacén y distribución en EE. UU.',
      tags: 'Carga · Almacenes · Distribución · Última milla',
      hero: {
        titleLead: 'Diseño web para logística y transporte',
        titleAccent: 'que deja claro a dónde llegas y cómo cotizar.',
        description:
          'Sitios y portales para empresas de carga, almacén y distribución en EE. UU.: cobertura, servicios, cotización y seguimiento fáciles de encontrar.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Transporte de carga', 'Agentes de carga', 'Almacenes y 3PL', 'Distribuidores', 'Última milla', 'Agentes aduanales'],
      },
      approach: {
        heading: 'Quien mueve carga no tiene tiempo: *quiere saber si llegas y cuánto cuesta.*',
        text: 'Un gerente de operaciones entra a tu sitio con un envío pendiente. Quiere saber si cubres esa ruta, si manejas ese tipo de carga y cómo pedir una cotización. Si tiene que llamar para averiguarlo, seguramente llamará a otro primero. Por eso ordenamos tu sitio alrededor de esas preguntas y, si te hace falta, sumamos un portal para que tus clientes consulten sus envíos.',
        layers: ['Cobertura y servicios', 'Cotización', 'Portal y seguimiento'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que obliga a llamar',
            items: ['«Soluciones logísticas integrales» y nada más', 'No se sabe qué rutas cubres', 'Cotizar es mandar un correo y esperar', 'El estado de un envío solo se sabe por teléfono', 'Una foto de un camión genérico'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que responde antes de que llamen',
            items: ['Servicios y tipos de carga explicados, con ejemplos', 'Cobertura y rutas a la vista', 'Una cotización con los datos que de verdad necesitas', 'Consulta de envíos en línea, si tu sistema lo permite', 'Tus patios, tus unidades y tu gente en fotos reales'],
          },
        },
      },
      deliverables: {
        heading: 'Qué hacemos para *tu operación.*',
        intro: 'Puedes empezar por el sitio y sumar el portal después. Todo viene en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Sitio de empresa', service: 'web-design', text: 'Servicios, cobertura, flota o almacenes y experiencia, para que tu comprador sepa rápido si eres su opción.' },
          { icon: 'Route', title: 'Cobertura y rutas', text: 'Mapas y páginas por ruta o región, con información que tu equipo puede mantener al día.' },
          { icon: 'MousePointerClick', title: 'Cotización en línea', text: 'Un formulario por tipo de carga que pide lo necesario y le llega a la persona correcta.' },
          { icon: 'LayoutDashboard', title: 'Portal de clientes', service: 'web-development', text: 'Envíos, documentos y facturas en un área privada, conectada con tu sistema cuando se puede.' },
          { icon: 'Smartphone', title: 'Pantallas para operadores y almacén', service: 'ux-ui-design', text: 'Rediseño de apps y sistemas internos para quien los usa de pie, con prisa y desde el teléfono.' },
          { icon: 'Gem', title: 'Marca para tus unidades y tu sitio', service: 'branding', text: 'Una imagen que se reconozca en tus camiones, tu sitio y tus documentos, y que también ayude a atraer personal.' },
        ],
      },
      process: {
        heading: 'De las llamadas de hoy a *un sitio que resuelve lo básico.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas qué mueves, por dónde y qué te preguntan más tus clientes por teléfono.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Revisión de tu operación', text: 'Vemos tus preguntas frecuentes, tus sistemas y lo que se podría conectar, sin prometer lo que tu sistema no permite.', gets: 'Qué conviene hacer primero, en orden.' },
          { name: 'Prototipo', text: 'Recorres el sitio y el portal antes de programarlos, con tu cotización y tus rutas.', gets: 'Un prototipo que apruebas.' },
          { name: 'Lanzamiento', text: 'Lo programamos, lo probamos en celular y computadora, dejamos listo el SEO básico y lo publicamos contigo.', gets: 'Tu sitio en línea y probado.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas de empresas de *carga y distribución.*',
        items: [
          { question: '¿Cuánto cuesta un sitio web para una empresa de logística?', answer: 'Un sitio informativo con cotización y un portal conectado con tu sistema son presupuestos muy distintos. Lo vemos en una llamada gratis y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Pueden conectar el portal con nuestro TMS o WMS?', answer: 'Depende del sistema y de si permite conectarse. Lo revisamos antes de la propuesta y te decimos qué se puede y qué no. Si no se puede, buscamos otra forma, como cargar los datos desde un archivo.' },
          { question: '¿Pueden mostrar el seguimiento de envíos en tiempo real?', answer: 'Solo con los datos que tu sistema entregue y con la frecuencia con la que los actualice. Por eso primero revisamos qué tienes y escribimos en la propuesta qué va a ver tu cliente.' },
          { question: '¿Sirve el sitio para conseguir operadores?', answer: 'Podemos hacer una sección clara de vacantes y postulación desde el teléfono. Cuántos lleguen depende también de la paga, las rutas y el mercado, así que no prometemos un número.' },
          { question: '¿Trabajan con empresas chicas?', answer: 'Sí. Un sitio corto con tus servicios, tu cobertura y una forma simple de cotizar suele ser buen primer paso. Lo demás puede esperar a cuando el negocio lo pida.' },
          { question: '¿Incluye SEO?', answer: 'El básico sí: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas por ruta o tipo de carga, contenidos y optimización para buscadores con IA, es SEO avanzado y se cotiza aparte.' },
        ],
      },
      cta: { titleLead: 'Cuéntanos qué mueves y por dónde', titleAccent: 'y qué te preguntan más por teléfono.' },
    },
    en: {
      seo: {
        title: 'Logistics Website Design Agency in the US | Aurin',
        description:
          'Websites and portals for US freight, warehousing and distribution: coverage, quotes and tracking made clear. Basic or advanced SEO. Book a free call.',
      },
      name: 'Logistics and transportation',
      summary: 'Web design and portals for US freight, warehousing and distribution companies.',
      tags: 'Freight · Warehousing · Distribution · Last mile',
      hero: {
        titleLead: 'Website design for logistics and transportation',
        titleAccent: 'that makes it clear where you go and how to get a quote.',
        description:
          'Websites and portals for US freight, warehousing and distribution companies: coverage, services, quotes and tracking that are easy to find.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Trucking', 'Freight forwarders and brokers', 'Warehouses and 3PLs', 'Distributors', 'Last mile', 'Customs brokers'],
      },
      approach: {
        heading: 'People moving freight are short on time: *they want to know if you go there and what it costs.*',
        text: 'An operations manager lands on your site with a shipment pending. They want to know if you cover that lane, if you handle that kind of freight and how to request a quote. If they have to call to find out, they may well call someone else first. So we organize your site around those questions and, if you need it, add a portal where customers can check their shipments.',
        layers: ['Coverage and services', 'Quotes', 'Portal and tracking'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that forces a phone call',
            items: ['“Integrated logistics solutions” and nothing else', 'No way to tell which lanes you cover', 'Getting a quote means emailing and waiting', 'Shipment status only available by phone', 'A stock photo of a generic truck'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that answers before they call',
            items: ['Services and freight types explained, with examples', 'Coverage and lanes in view', 'A quote form with the details you really need', 'Shipment lookup online, if your system allows it', 'Your yards, your trucks and your people in real photos'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your operation.*',
        intro: 'You can start with the website and add the portal later. It’s all in the proposal, with price and dates.',
        items: [
          { icon: 'Monitor', title: 'Company website', service: 'web-design', text: 'Services, coverage, fleet or warehouses and experience, so a buyer knows quickly whether you’re an option.' },
          { icon: 'Route', title: 'Coverage and lanes', text: 'Maps and pages by lane or region, with information your team can keep current.' },
          { icon: 'MousePointerClick', title: 'Online quotes', text: 'A form by freight type that asks for what’s needed and reaches the right person.' },
          { icon: 'LayoutDashboard', title: 'Customer portal', service: 'web-development', text: 'Shipments, documents and invoices in a private area, connected to your system where possible.' },
          { icon: 'Smartphone', title: 'Screens for drivers and warehouses', service: 'ux-ui-design', text: 'A redesign of apps and internal systems for people using them on their feet, in a hurry, by phone.' },
          { icon: 'Gem', title: 'A brand for your fleet and your site', service: 'branding', text: 'An image people recognize on your trucks, your site and your documents, which also helps you attract staff.' },
        ],
      },
      process: {
        heading: 'From today’s phone calls to *a website that handles the basics.*',
        steps: [
          { name: 'Free call', text: 'You tell us what you move, where and what customers ask you most by phone.', gets: 'A proposal with price, scope and dates.' },
          { name: 'Review of your operation', text: 'We look at your common questions, your systems and what could be connected, without promising what your system doesn’t allow.', gets: 'What to do first, in order.' },
          { name: 'Prototype', text: 'You click through the site and portal before they’re built, with your quote form and your lanes.', gets: 'A prototype you approve.' },
          { name: 'Launch', text: 'We build it, test it on phones and computers, finish the basic SEO and go live with you.', gets: 'Your site live and tested.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions from *freight and distribution companies.*',
        items: [
          { question: 'How much does a website for a logistics company cost?', answer: 'An informational site with quotes and a portal connected to your system are very different budgets. We go over it on a free call and send you a fixed price in writing, with what’s included and the dates.' },
          { question: 'Can you connect the portal to our TMS or WMS?', answer: 'It depends on the system and whether it allows connections. We check before the proposal and tell you what can be done and what can’t. If it can’t, we look for another way, like loading data from a file.' },
          { question: 'Can you show shipment tracking in real time?', answer: 'Only with the data your system provides, as often as it updates it. That’s why we first review what you have and write into the proposal what your customer will see.' },
          { question: 'Can the site help us find drivers?', answer: 'We can build a clear jobs section with applications by phone. How many arrive also depends on pay, routes and the market, so we don’t promise a number.' },
          { question: 'Do you work with small companies?', answer: 'Yes. A short site with your services, your coverage and a simple way to get a quote is usually a good first step. The rest can wait until the business calls for it.' },
          { question: 'Does it include SEO?', answer: 'The basics, yes: titles, descriptions, speed and structured data. If you want pages by lane or freight type, content and optimization for AI search, that’s advanced SEO, quoted separately.' },
        ],
      },
      cta: { titleLead: 'Tell us what you move and where', titleAccent: 'and what you get asked most by phone.' },
    },
  },
};
