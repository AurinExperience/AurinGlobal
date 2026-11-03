import type { Service } from '@/data/services';

/**
 * Nicho sin tarjeta en la home. aurin.mx tiene manufactura para exportadoras mexicanas (`for-manufacturers-and-exporters`):
 * aquí el terreno es el fabricante en EE. UU. que vende a otras empresas. Sin nombres de clientes.
 */
export const manufacturing: Service = {
  id: 'manufacturing',
  slug: { es: 'diseno-web-manufactura', en: 'manufacturing-web-design' },
  publishAt: '2026-11-05T06:00:00-06:00',
  cases: [],
  copy: {
    es: {
      seo: {
        title: 'Diseño web para manufactura en Estados Unidos | Aurin',
        description:
          'Sitios y portales para fabricantes en EE. UU.: capacidades, certificaciones y cotización que acepta planos, con SEO básico o avanzado. Llamada gratis.',
      },
      name: 'Manufactura',
      summary: 'Diseño web y portales para fabricantes y proveedores industriales en EE. UU.',
      tags: 'Talleres · Proveedores · Fabricantes · Distribuidores',
      hero: {
        titleLead: 'Diseño web para manufactura',
        titleAccent: 'que le dice al ingeniero lo que busca.',
        description:
          'Sitios y portales para fabricantes en EE. UU.: procesos, tolerancias y certificaciones a la vista, y una cotización que acepta planos.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Talleres de maquinado', 'Proveedores de primer y segundo nivel', 'Fabricantes por contrato', 'Metalmecánica', 'Plásticos y empaque', 'Distribuidores industriales'],
      },
      approach: {
        heading: 'El comprador industrial descarta rápido: *si no ve tu capacidad, no te llama.*',
        text: 'Un ingeniero o alguien de compras busca a un proveedor por proceso, material, tolerancia o certificación. Abre varios sitios y cierra los que solo dicen «calidad y compromiso». Por eso hacemos que lo técnico esté a un clic: qué máquinas tienes, qué piezas haces, con qué certificaciones y cómo mandar un plano para cotizar.',
        layers: ['Capacidades y procesos', 'Certificaciones', 'Cotización con planos'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que no dice qué sabes hacer',
            items: ['«Calidad y compromiso», igual que tu competencia', 'Certificaciones escondidas o sin actualizar', 'Un formulario de contacto sin dónde subir un plano', 'Catálogo en un PDF pesado de hace años', 'Sin fotos reales de la planta'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que responde lo que el comprador revisa',
            items: ['Procesos, materiales y tolerancias explicados por página', 'Certificaciones a la vista, que tu equipo actualiza', 'Solicitud de cotización que acepta planos', 'Catálogo o fichas técnicas que se consultan desde el celular', 'Tu planta y tu gente en fotos reales'],
          },
        },
      },
      deliverables: {
        heading: 'Qué hacemos para *tu planta o tu taller.*',
        intro: 'Empieza por el sitio y suma lo demás cuando haga falta. Todo viene en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Sitio industrial', service: 'web-design', text: 'Qué fabricas, para qué sectores y con qué capacidad, con una página por proceso cuando tiene sentido.' },
          { icon: 'Search', title: 'Catálogo y fichas técnicas', text: 'Productos o refacciones que se buscan por medida, material o aplicación, con fichas que se pueden descargar.' },
          { icon: 'LayoutDashboard', title: 'Portal de clientes y distribuidores', service: 'web-development', text: 'Pedidos, precios y documentos en un área privada, conectada con tu sistema cuando se puede.' },
          { icon: 'Smartphone', title: 'Pantallas para el piso de planta', service: 'ux-ui-design', text: 'Rediseño de las herramientas internas que usa tu personal, para que se entiendan rápido, también en pantallas chicas.' },
          { icon: 'Gem', title: 'Marca para una empresa con oficio', service: 'branding', text: 'Una imagen al día, sin borrar lo que te dio tu reputación, para tu sitio, tus camiones y tus vacantes.' },
          { icon: 'Users', title: 'Una sección de empleo que se lea', text: 'Cómo es trabajar contigo, qué puestos tienes y cómo postularse desde el teléfono.' },
        ],
      },
      process: {
        heading: 'De tu sitio de hoy a *uno que un ingeniero pueda usar.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas qué fabricas, a quién le vendes y a quién quieres empezar a venderle.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Tu planta en palabras', text: 'Tu equipo técnico nos explica procesos y capacidades, y revisa que todo lo que escribimos sea correcto.', gets: 'Páginas y textos que tu equipo aprobó.' },
          { name: 'Prototipo', text: 'Recorres el sitio antes de programarlo, con la cotización y el catálogo funcionando como van a quedar.', gets: 'Un prototipo que apruebas.' },
          { name: 'Lanzamiento', text: 'Lo programamos, lo probamos en celular y computadora, dejamos listo el SEO básico y lo publicamos contigo.', gets: 'Tu sitio en línea y probado.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas de *fabricantes y proveedores.*',
        items: [
          { question: '¿Cuánto cuesta un sitio web para una empresa de manufactura?', answer: 'Depende de cuántos procesos o productos lleve y de si necesitas catálogo o portal. Lo vemos en una llamada gratis y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿El formulario puede recibir planos?', answer: 'Sí. Se pueden subir archivos como PDF, STEP o DWG, y el mensaje le llega a la persona que definas. Si manejas planos confidenciales, definimos contigo dónde se guardan y quién los ve.' },
          { question: '¿Pueden conectar el sitio con nuestro ERP?', answer: 'Depende del sistema que uses y de lo que permita. Lo revisamos antes de la propuesta y, si no se puede o no conviene, te lo decimos y buscamos otra forma de resolverlo.' },
          { question: '¿Ustedes conocen nuestro proceso?', answer: 'No tenemos por qué saberlo de entrada: tu equipo técnico nos lo explica, nosotros lo ordenamos para el comprador y tu equipo revisa cada texto. Nada técnico se publica sin que lo aprueben.' },
          { question: '¿Me ayudan a llegar a otros sectores?', answer: 'Desde el sitio, sí: podemos hacer una página por sector que explique lo que ya sabes hacer en sus términos. Conseguir la venta sigue siendo trabajo de tu equipo comercial.' },
          { question: '¿Incluye SEO?', answer: 'El básico sí: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas por proceso o material, contenidos y optimización para buscadores con IA, es SEO avanzado y se cotiza aparte.' },
        ],
      },
      cta: { titleLead: 'Cuéntanos qué fabricas', titleAccent: 'y quién te gustaría que te encontrara.' },
    },
    en: {
      seo: {
        title: 'Manufacturing Website Design Agency in the US | Aurin',
        description:
          'Websites and portals for US manufacturers: capabilities, certifications and quote requests that accept drawings. Basic or advanced SEO. Book a free call.',
      },
      name: 'Manufacturing',
      summary: 'Web design and portals for US manufacturers and industrial suppliers.',
      tags: 'Machine shops · Suppliers · Manufacturers · Distributors',
      hero: {
        titleLead: 'Website design for manufacturers',
        titleAccent: 'that tells engineers what they’re looking for.',
        description:
          'Websites and portals for US manufacturers: processes, tolerances and certifications in plain view, and a quote request that accepts drawings.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Machine shops', 'Tier 1 and tier 2 suppliers', 'Contract manufacturers', 'Metal fabrication', 'Plastics and packaging', 'Industrial distributors'],
      },
      approach: {
        heading: 'Industrial buyers rule you out fast: *if they can’t see your capability, they don’t call.*',
        text: 'An engineer or a purchasing manager looks for a supplier by process, material, tolerance or certification. They open several sites and close the ones that only say “quality and commitment.” So we keep the technical details one click away: what machines you run, what parts you make, with which certifications and how to send a drawing for a quote.',
        layers: ['Capabilities and processes', 'Certifications', 'Quotes with drawings'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that doesn’t say what you can do',
            items: ['“Quality and commitment,” same as your competitors', 'Certifications hidden or out of date', 'A contact form with nowhere to upload a drawing', 'A heavy PDF catalog from years ago', 'No real photos of the plant'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that answers what buyers check',
            items: ['Processes, materials and tolerances explained page by page', 'Certifications in view, kept current by your team', 'A quote request that accepts drawings', 'A catalog or spec sheets you can browse on a phone', 'Your plant and your people in real photos'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your plant or shop.*',
        intro: 'Start with the website and add the rest when you need it. It’s all in the proposal, with price and dates.',
        items: [
          { icon: 'Monitor', title: 'Industrial website', service: 'web-design', text: 'What you make, for which sectors and with what capacity, with a page per process where it makes sense.' },
          { icon: 'Search', title: 'Catalog and spec sheets', text: 'Products or parts searchable by size, material or application, with sheets people can download.' },
          { icon: 'LayoutDashboard', title: 'Customer and dealer portal', service: 'web-development', text: 'Orders, pricing and documents in a private area, connected to your system where possible.' },
          { icon: 'Smartphone', title: 'Screens for the plant floor', service: 'ux-ui-design', text: 'A redesign of the internal tools your staff use, so they make sense quickly, on small screens too.' },
          { icon: 'Gem', title: 'A brand for a company with craft', service: 'branding', text: 'An up-to-date image that keeps what earned your reputation, for your site, your trucks and your job postings.' },
          { icon: 'Users', title: 'A careers section worth reading', text: 'What it’s like to work with you, which jobs are open and how to apply by phone.' },
        ],
      },
      process: {
        heading: 'From your website today to *one an engineer can use.*',
        steps: [
          { name: 'Free call', text: 'You tell us what you make, who you sell to and who you’d like to start selling to.', gets: 'A proposal with price, scope and dates.' },
          { name: 'Your plant in words', text: 'Your technical team explains processes and capabilities to us, and checks that everything we write is correct.', gets: 'Pages and copy your team approved.' },
          { name: 'Prototype', text: 'You click through the site before it’s built, with the quote request and catalog working as they will.', gets: 'A prototype you approve.' },
          { name: 'Launch', text: 'We build it, test it on phones and computers, finish the basic SEO and go live with you.', gets: 'Your site live and tested.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions from *manufacturers and suppliers.*',
        items: [
          { question: 'How much does a website for a manufacturing company cost?', answer: 'It depends on how many processes or products it covers and whether you need a catalog or portal. We go over it on a free call and send you a fixed price in writing, with what’s included and the dates.' },
          { question: 'Can the form accept drawings?', answer: 'Yes. People can upload files like PDF, STEP or DWG, and the message goes to whoever you choose. If you handle confidential drawings, we decide with you where they’re stored and who sees them.' },
          { question: 'Can you connect the site to our ERP?', answer: 'It depends on your system and what it allows. We check before the proposal, and if it can’t be done or isn’t worth it, we’ll tell you and look for another way to solve it.' },
          { question: 'Do you know our process?', answer: 'We don’t have to know it going in: your technical team explains it, we organize it for the buyer and your team reviews every line. Nothing technical goes live without their approval.' },
          { question: 'Can you help me reach other sectors?', answer: 'From the website side, yes: we can build a page per sector that explains what you already do in their terms. Winning the sale is still your sales team’s work.' },
          { question: 'Does it include SEO?', answer: 'The basics, yes: titles, descriptions, speed and structured data. If you want pages by process or material, content and optimization for AI search, that’s advanced SEO, quoted separately.' },
        ],
      },
      cta: { titleLead: 'Tell us what you make', titleAccent: 'and who you’d like to find you.' },
    },
  },
};
