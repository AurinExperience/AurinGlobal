import type { Service } from './types';

/**
 * Búsqueda: "agencia de branding" / "branding agency" + logo e identidad. Comprador: una empresa que
 * empieza o que renueva su marca porque se ve igual que la competencia o no funciona en digital.
 * Se vende: que te elijan antes de comparar precios. Sin nombres de clientes.
 */
export const branding: Service = {
  id: 'branding',
  slug: { es: 'branding', en: 'branding' },
  cases: ['fruit-academy', 'mineria', 'mexico-pacific'],
  copy: {
    es: {
      seo: {
        title: 'Agencia de branding y logo en Estados Unidos | Aurin',
        description:
          'Branding para empresas en Estados Unidos: estrategia, logo, identidad visual y guía de marca, pensados para tu sitio, tus redes y tu app. Llamada gratis.',
      },
      name: 'Branding',
      summary: 'Estrategia, logo, identidad visual y guía de marca, para que tu marca se vea igual de bien en el sitio, en redes y en todo lo demás.',
      tags: 'Estrategia de marca · Logo e identidad · Guía de marca',
      hero: {
        titleLead: 'Branding que te hace',
        titleAccent: 'la opción obvia.',
        description:
          'Para empresas en EE. UU. que empiezan o que ya no se distinguen de su competencia: estrategia, logo, identidad visual y guía de marca, pensados desde el inicio para tu sitio, tus redes y tu app.',
        ctaSecondary: 'Qué incluye',
      },
      industries: {
        heading: 'Ya creamos marcas para',
        items: ['Salud', 'Educación', 'Alimentos', 'Cultura', 'Energía'],
      },
      approach: {
        heading: 'Una marca que se elige, *no solo un logo.*',
        text: 'Cuando tu marca se ve igual que la de tu competencia, tu cliente decide por precio. Por eso empezamos por lo que te hace distinto, y de ahí sale todo lo visual: logo, colores, tipografías y tono.',
        layers: ['Estrategia de marca', 'Identidad visual', 'Guía y aplicaciones'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un logo y ya',
            items: ['Se parece al de tu competencia', 'No dice por qué elegirte', 'No se lee en el celular ni en redes', 'Cada proveedor lo usa distinto', 'Tu cliente decide por precio'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Una marca completa',
            items: ['Distinta a la de tu competencia', 'Clara en por qué elegirte a ti', 'Diseñada para pantallas desde el inicio', 'Una guía para usarla igual en todos lados', 'Te eligen antes de comparar precios'],
          },
        },
      },
      deliverables: {
        heading: 'Qué incluye el branding de *tu empresa.*',
        intro: 'Todo viene detallado en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Gem', title: 'Estrategia de marca', text: 'A quién le hablas, qué te hace distinto y cómo suenas: la base de cada decisión.' },
          { icon: 'Type', title: 'Nombre', text: 'Si lo necesitas, opciones de nombre para tu empresa o tu producto, cada una con su porqué.' },
          { icon: 'Fingerprint', title: 'Logo e identidad visual', text: 'Logotipo, colores, tipografías e íconos que se reconocen en cualquier tamaño.' },
          { icon: 'BookOpen', title: 'Guía de marca', text: 'Reglas claras para que tu equipo, tus proveedores y cualquier agencia la usen igual.' },
          { icon: 'RefreshCw', title: 'Renovación de marca', text: 'Si ya tienes una, conservamos lo que tus clientes reconocen y corregimos lo que no funciona.' },
          { icon: 'Megaphone', title: 'Lista para usarse', text: 'Plantillas para redes, presentaciones y papelería, y la marca aplicada a tu sitio.' },
        ],
      },
      process: {
        heading: 'De tu idea a una marca *lista para salir al mundo.*',
        steps: [
          { name: 'Llamada gratis y propuesta', text: 'Nos cuentas de tu negocio, tu cliente y tu competencia.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Estrategia', text: 'Definimos qué te hace distinto, a quién le hablas y cómo suenas.', gets: 'Tu estrategia de marca en un documento.' },
          { name: 'Identidad', text: 'Te presentamos propuestas de logo y sistema visual y las ajustamos contigo.', gets: 'Tu logo e identidad aprobados.' },
          { name: 'Guía y entrega', text: 'Armamos la guía de uso y aplicamos la marca a lo que necesites.', gets: 'Archivos finales, guía y plantillas.' },
        ],
      },
      cases: { heading: 'Marcas que *diseñamos.*' },
      guarantees: {
        heading: 'Sin riesgo *para ti.*',
        intro: 'Tu marca es lo primero que ve tu cliente. Todo esto va por escrito en tu propuesta.',
        items: [
          { title: 'Ves las propuestas antes de decidir', text: 'Eliges entre varias direcciones y la ajustamos contigo hasta que la apruebes.' },
          { title: 'Precio cerrado, sin cobros sorpresa', text: 'El precio de la propuesta es el que pagas. Si quieres agregar algo, te decimos cuánto cuesta antes y tú decides.' },
          { title: 'La marca es 100% tuya', text: 'Te entregamos todos los archivos editables y los derechos de tu logo e identidad.' },
          { title: 'Fechas de entrega por escrito', text: 'Cada etapa tiene su fecha en la propuesta, antes de empezar.' },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre *branding.*',
        items: [
          { question: '¿Cuánto cuesta un proyecto de branding?', answer: 'Depende de si incluye estrategia y nombre o solo logo e identidad visual. Antes de empezar recibes una propuesta con el precio cerrado, lo que incluye y las fechas.', pending: 'Agregar un rango real (desde $X USD): una cifra responde mejor la búsqueda.' },
          { question: '¿Qué incluye un proyecto de branding?', answer: 'Estrategia de marca, logo e identidad visual (colores, tipografías e íconos) y guía de uso. Si lo necesitas, también nombre, renovación de marca y plantillas para redes y materiales.' },
          { question: '¿Cuál es la diferencia entre un logo y el branding?', answer: 'El logo es una pieza. El branding es el sistema completo: qué te hace distinto, cómo suenas, colores, tipografías y reglas de uso que hacen que tu marca se reconozca en cualquier lugar.' },
          { question: '¿Cuánto tarda un proyecto de branding?', answer: 'Depende de si incluye estrategia y nombre o solo identidad visual. La propuesta incluye las fechas de cada etapa.' },
          { question: '¿Pueden renovar mi marca sin empezar de cero?', answer: 'Sí. Conservamos lo que tus clientes ya reconocen y corregimos lo que no funciona, sobre todo en el celular y en redes.' },
          { question: '¿Qué archivos recibo?', answer: 'Tu logo en todas sus versiones y formatos (para web, redes e impresión), la paleta de color, las tipografías, la guía de marca y las plantillas acordadas. Todo editable y a tu nombre.' },
          { question: '¿Pueden hacer solo el logo?', answer: 'Sí, aunque te recomendamos sumar al menos los colores, las tipografías y una guía corta, para que el logo se use bien en todos lados.' },
          { question: '¿También hacen el sitio web con la nueva marca?', answer: 'Sí. Branding, diseño web y desarrollo están en el mismo equipo, así la marca llega al sitio tal como se diseñó.' },
        ],
      },
      cta: { titleLead: 'Que te elijan', titleAccent: 'antes de comparar precios.' },
    },
    en: {
      seo: {
        title: 'Branding Agency for US Businesses | Logo & Identity | Aurin',
        description:
          'Branding for US businesses: strategy, logo, visual identity and brand guidelines, designed for your website, social media and app. Book a free call.',
      },
      name: 'Branding',
      summary: 'Strategy, logo, visual identity and brand guidelines, so your brand looks just as good on your website, on social media and everywhere else.',
      tags: 'Brand strategy · Logo & identity · Brand guidelines',
      hero: {
        titleLead: 'Branding that makes you',
        titleAccent: 'the obvious choice.',
        description:
          'For businesses that are just starting or no longer stand out from their competitors: strategy, logo, visual identity and brand guidelines, designed from the start for your website, social media and app.',
        ctaSecondary: 'What’s included',
      },
      industries: {
        heading: 'We’ve built brands for',
        items: ['Healthcare', 'Education', 'Food', 'Culture', 'Energy'],
      },
      approach: {
        heading: 'A brand people choose, *not just a logo.*',
        text: 'When your brand looks like your competitors’, customers decide on price. That’s why we start with what makes you different, and everything visual comes from there: logo, colors, typefaces and tone.',
        layers: ['Brand strategy', 'Visual identity', 'Guidelines and applications'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'Just a logo',
            items: ['Looks like your competitors’', 'Doesn’t say why to choose you', 'Hard to read on phones and social media', 'Every vendor uses it differently', 'Customers decide on price'],
          },
          good: {
            label: 'With Aurin',
            title: 'A complete brand',
            items: ['Stands apart from your competitors', 'Clear on why to choose you', 'Designed for screens from the start', 'Guidelines to use it the same way everywhere', 'People choose you before comparing prices'],
          },
        },
      },
      deliverables: {
        heading: 'What’s included in *your brand.*',
        intro: 'Everything is detailed in the proposal, with price and dates.',
        items: [
          { icon: 'Gem', title: 'Brand strategy', text: 'Who you talk to, what makes you different and how you sound: the basis for every decision.' },
          { icon: 'Type', title: 'Naming', text: 'If you need it, name options for your company or product, each with its rationale.' },
          { icon: 'Fingerprint', title: 'Logo and visual identity', text: 'Logo, colors, typefaces and icons that are recognizable at any size.' },
          { icon: 'BookOpen', title: 'Brand guidelines', text: 'Clear rules so your team, your vendors and any agency use it the same way.' },
          { icon: 'RefreshCw', title: 'Rebranding', text: 'If you already have a brand, we keep what customers recognize and fix what doesn’t work.' },
          { icon: 'Megaphone', title: 'Ready to use', text: 'Templates for social media, presentations and stationery, and the brand applied to your website.' },
        ],
      },
      process: {
        heading: 'From your idea to a brand *ready for the world.*',
        steps: [
          { name: 'Free call and proposal', text: 'You tell us about your business, your customer and your competitors.', gets: 'A proposal with price, what’s included and dates.' },
          { name: 'Strategy', text: 'We define what makes you different, who you talk to and how you sound.', gets: 'Your brand strategy in one document.' },
          { name: 'Identity', text: 'We present logo and visual system options and refine them with you.', gets: 'Your logo and identity, approved.' },
          { name: 'Guidelines and delivery', text: 'We build the usage guide and apply the brand to whatever you need.', gets: 'Final files, guidelines and templates.' },
        ],
      },
      cases: { heading: 'Brands *we designed.*' },
      guarantees: {
        heading: 'Zero risk *for you.*',
        intro: 'Your brand is the first thing customers see. All of this goes in writing in your proposal.',
        items: [
          { title: 'See the options before you decide', text: 'You choose between several directions, and we refine it with you until you approve it.' },
          { title: 'Fixed price, no surprise charges', text: 'The price in the proposal is what you pay. Want to add something? We tell you the cost first, and you decide.' },
          { title: 'The brand is 100% yours', text: 'You get every editable file and the rights to your logo and identity.' },
          { title: 'Delivery dates in writing', text: 'Every stage has its date in the proposal, before we start.' },
        ],
      },
      faq: {
        heading: 'Branding *questions, answered.*',
        items: [
          { question: 'How much does a branding project cost?', answer: 'It depends on whether it includes strategy and naming or only the logo and visual identity. Before we start, you get a proposal with a fixed price, what’s included and the dates.', pending: 'Add a real range (from $X): a number answers the search better.' },
          { question: 'What does a branding project include?', answer: 'Brand strategy, logo and visual identity (colors, typefaces and icons) and usage guidelines. If you need it, also naming, rebranding and templates for social media and materials.' },
          { question: 'What is the difference between a logo and branding?', answer: 'A logo is one piece. Branding is the whole system: what makes you different, how you sound, colors, typefaces and usage rules that make your brand recognizable anywhere.' },
          { question: 'How long does a branding project take?', answer: 'It depends on whether it includes strategy and naming or only visual identity. The proposal includes the date for each stage.' },
          { question: 'Can you refresh my brand without starting from scratch?', answer: 'Yes. We keep what your customers already recognize and fix what doesn’t work, especially on phones and social media.' },
          { question: 'What files do I get?', answer: 'Your logo in every version and format (web, social media and print), the color palette, typefaces, brand guidelines and the agreed templates. All editable and in your name.' },
          { question: 'Can you design just the logo?', answer: 'Yes, though we recommend adding at least the colors, typefaces and a short guide, so the logo is used well everywhere.' },
          { question: 'Do you also build the website with the new brand?', answer: 'Yes. Branding, web design and development are in the same team, so the brand reaches the website exactly as designed.' },
        ],
      },
      cta: { titleLead: 'Get chosen', titleAccent: 'before they compare prices.' },
    },
  },
};
