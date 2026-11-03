import type { Service } from '@/data/services';

/**
 * Nicho sin tarjeta en la home; aurin.mx no lo toca. Empresas de ciberseguridad en EE. UU. que tienen que explicar algo técnico
 * y ganarse la confianza. Ojo: hacemos su sitio y su producto, no auditorías de seguridad. Sin nombres de clientes.
 */
export const cybersecurity: Service = {
  id: 'cybersecurity',
  slug: { es: 'diseno-web-ciberseguridad', en: 'cybersecurity-web-design' },
  publishAt: '2026-11-07T06:00:00-06:00',
  cases: [],
  copy: {
    es: {
      seo: {
        title: 'Diseño web para ciberseguridad en Estados Unidos | Aurin',
        description:
          'Sitios y UX/UI para empresas de ciberseguridad en EE. UU.: tu producto explicado sin miedo ni jerga, con SEO básico o avanzado. Llamada gratis.',
      },
      name: 'Ciberseguridad',
      summary: 'Diseño web, UX/UI y branding para empresas de ciberseguridad en EE. UU.',
      tags: 'MSSP · Software de seguridad · Cumplimiento · Consultoras',
      hero: {
        titleLead: 'Diseño web para ciberseguridad',
        titleAccent: 'sin candados, escudos ni miedo.',
        description:
          'Sitios, paneles y marca para empresas de seguridad en EE. UU.: qué proteges, cómo y con qué respaldo, en palabras que un comprador puede llevar a su jefe.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Software de seguridad', 'Servicios administrados (MSSP)', 'Pruebas de penetración', 'Identidad y accesos', 'Cumplimiento y riesgo', 'Consultoras de seguridad'],
      },
      approach: {
        heading: 'En seguridad todos dicen lo mismo: *el que se explica mejor se gana la siguiente llamada.*',
        text: 'Tu comprador lee sobre su problema todos los días y ya no cree en palabras como «próxima generación». El responsable de seguridad quiere saber qué detectas y cómo; el director de finanzas, qué riesgo baja y cuánto cuesta. Si tu sitio solo tiene candados brillantes, no le sirve a ninguno. Por eso ordenamos tu mensaje para cada uno, con detalle técnico que tu equipo revisa y sin asustar a nadie.',
        layers: ['Mensaje por comprador', 'Detalle técnico', 'Producto y paneles'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio igual a todos los demás',
            items: ['Candados, escudos y fondos azules', '«Próxima generación» sin decir qué hace', 'Mensajes basados en el miedo', 'La documentación técnica escondida', 'Un panel lleno de alertas que nadie entiende'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que da información, no sustos',
            items: ['Una identidad que no se parece a la de tu competencia', 'Qué detectas y cómo, explicado en una página', 'Mensajes distintos para seguridad, finanzas y dirección', 'Certificaciones y documentación fáciles de encontrar', 'Paneles diseñados para decidir qué atender primero'],
          },
        },
      },
      deliverables: {
        heading: 'Qué hacemos para *tu empresa de seguridad.*',
        intro: 'Puedes empezar por el sitio, el producto o la marca. Todo viene en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Sitio que explica tu producto', service: 'web-design', text: 'Qué haces, para quién y cómo funciona, con páginas por comprador y un camino claro hacia la demo.' },
          { icon: 'LayoutDashboard', title: 'Paneles y consolas', service: 'ux-ui-design', text: 'Rediseño de tu producto para que el analista vea qué atender primero, sin ahogarse en alertas.' },
          { icon: 'Code', title: 'Portales y áreas privadas', service: 'web-development', text: 'Portal de clientes, documentación y reportes detrás de usuario y contraseña, conectados con tu producto cuando se puede.' },
          { icon: 'Gem', title: 'Una marca que no parezca un candado', service: 'branding', text: 'Nombre, logo e identidad para distinguirte en una categoría donde casi todas las marcas se parecen.' },
          { icon: 'ShieldCheck', title: 'Página de confianza', text: 'Certificaciones, políticas y respuestas a lo que pide un cuestionario de seguridad, reunidas donde el comprador las busca.' },
          { icon: 'BookOpen', title: 'Recursos y documentación', text: 'Un lugar ordenado para reportes, guías y documentación técnica, que tu equipo publica sin programar.' },
        ],
      },
      process: {
        heading: 'De un sitio genérico a *uno que tu equipo técnico respalda.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas tu producto, a quién le vendes y contra quién compites.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Tu producto en palabras', text: 'Hablamos con tu equipo técnico y de ventas, y escribimos el mensaje para cada comprador.', gets: 'Mensajes que tu equipo revisó y corrigió.' },
          { name: 'Prototipo', text: 'Recorres el sitio o las pantallas del producto antes de programarlos, y pides los cambios que hagan falta.', gets: 'Un prototipo que apruebas.' },
          { name: 'Lanzamiento', text: 'Lo programamos o se lo entregamos a tu equipo de desarrollo, y lo publicamos contigo.', gets: 'Tu sitio en línea, o pantallas listas para construir.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas de empresas de *ciberseguridad.*',
        items: [
          { question: '¿Cuánto cuesta un sitio web para una empresa de ciberseguridad?', answer: 'Depende de cuántos productos y compradores haya que explicar, y de si también rediseñamos tu consola. Lo vemos en una llamada gratis y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Ustedes hacen auditorías de seguridad?', answer: 'No. Hacemos tu sitio, tu producto y tu marca. Programamos con buenas prácticas, pero si necesitas una prueba de penetración o una certificación, la hace un especialista, que puede ser tu propio equipo.' },
          { question: '¿Quién se asegura de que lo técnico sea correcto?', answer: 'Tu equipo. Escribimos a partir de lo que nos explican, y nada técnico se publica sin que lo revisen. No inventamos cifras ni capacidades.' },
          { question: '¿Van a ver información sensible de nuestro producto?', answer: 'Solo lo que tu equipo decida compartir para el proyecto, y podemos trabajar con datos de ejemplo. Esa información no pasa por herramientas de IA. Si tienes una regla más estricta, la revisamos antes de empezar.' },
          { question: '¿Quién contesta nuestro cuestionario de seguridad de proveedores?', answer: 'Te contestamos lo que toca a nuestro trabajo. Si tu política exige certificaciones que no tenemos, como SOC 2, te lo decimos en la primera llamada para que decidas con esa información.' },
          { question: '¿Incluye SEO?', answer: 'El básico sí: títulos, descripciones, velocidad y datos estructurados. Si quieres páginas por amenaza o por norma, contenidos y optimización para buscadores con IA, es SEO avanzado y se cotiza aparte.' },
        ],
      },
      cta: { titleLead: 'Cuéntanos qué protege tu producto', titleAccent: 'y a quién le cuesta entenderlo.' },
    },
    en: {
      seo: {
        title: 'Cybersecurity Website Design Agency in the US | Aurin',
        description:
          'Websites and UX/UI for US cybersecurity companies: a technical product explained without fear or jargon. Basic or advanced SEO. Book a free call.',
      },
      name: 'Cybersecurity',
      summary: 'Web design, UX/UI and branding for US cybersecurity companies.',
      tags: 'MSSPs · Security software · Compliance · Consultancies',
      hero: {
        titleLead: 'Website design for cybersecurity',
        titleAccent: 'with no padlocks, shields or fear.',
        description:
          'Websites, dashboards and branding for US security companies: what you protect, how, and what backs it, in words a buyer can take to their boss.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Security software', 'Managed services (MSSPs)', 'Penetration testing', 'Identity and access', 'Compliance and risk', 'Security consultancies'],
      },
      approach: {
        heading: 'In security everyone says the same thing: *whoever explains it best gets the next call.*',
        text: 'Your buyer reads about their problem every day and no longer believes words like “next-generation.” The security lead wants to know what you detect and how; the CFO, what risk it lowers and what it costs. If your site only has shiny padlocks, it’s no use to either. So we organize your message for each of them, with technical detail your team reviews, and without scaring anyone.',
        layers: ['Message by buyer', 'Technical detail', 'Product and dashboards'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website like all the others',
            items: ['Padlocks, shields and blue backgrounds', '“Next-generation” without saying what it does', 'Fear-based messaging', 'Technical documentation hidden away', 'A dashboard full of alerts nobody understands'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that informs instead of scares',
            items: ['An identity unlike your competitors’', 'What you detect and how, explained on one page', 'Different messages for security, finance and leadership', 'Certifications and documentation that are easy to find', 'Dashboards designed to decide what to handle first'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your security company.*',
        intro: 'You can start with the website, the product or the brand. It’s all in the proposal, with price and dates.',
        items: [
          { icon: 'Monitor', title: 'A website that explains your product', service: 'web-design', text: 'What you do, who it’s for and how it works, with pages by buyer and a clear path to a demo.' },
          { icon: 'LayoutDashboard', title: 'Dashboards and consoles', service: 'ux-ui-design', text: 'A redesign of your product so analysts see what to handle first, without drowning in alerts.' },
          { icon: 'Code', title: 'Portals and private areas', service: 'web-development', text: 'A customer portal, documentation and reports behind a login, connected to your product where possible.' },
          { icon: 'Gem', title: 'A brand that doesn’t look like a padlock', service: 'branding', text: 'Name, logo and identity to stand apart in a category where most brands look alike.' },
          { icon: 'ShieldCheck', title: 'Trust page', text: 'Certifications, policies and answers to what a security questionnaire asks, gathered where buyers look for them.' },
          { icon: 'BookOpen', title: 'Resources and documentation', text: 'An organized home for reports, guides and technical documentation, which your team publishes without code.' },
        ],
      },
      process: {
        heading: 'From a generic website to *one your technical team stands behind.*',
        steps: [
          { name: 'Free call', text: 'You tell us about your product, who you sell to and who you compete with.', gets: 'A proposal with price, scope and dates.' },
          { name: 'Your product in words', text: 'We talk with your technical and sales teams and write the message for each buyer.', gets: 'Messages your team reviewed and corrected.' },
          { name: 'Prototype', text: 'You click through the site or product screens before they’re built, and tell us what to change.', gets: 'A prototype you approve.' },
          { name: 'Launch', text: 'We build it or hand it to your development team, and go live with you.', gets: 'Your site live, or screens ready to build.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions from *cybersecurity companies.*',
        items: [
          { question: 'How much does a website for a cybersecurity company cost?', answer: 'It depends on how many products and buyers have to be explained, and whether we also redesign your console. We go over it on a free call and send you a fixed price in writing, with what’s included and the dates.' },
          { question: 'Do you do security audits?', answer: 'No. We build your website, your product and your brand. We develop with good practices, but if you need a penetration test or a certification, that comes from a specialist, which may be your own team.' },
          { question: 'Who makes sure the technical content is correct?', answer: 'Your team. We write from what they explain to us, and nothing technical goes live without their review. We don’t make up figures or capabilities.' },
          { question: 'Will you see sensitive information about our product?', answer: 'Only what your team decides to share for the project, and we can work with sample data. That information never goes through AI tools. If you have a stricter rule, we review it before we start.' },
          { question: 'Who answers our vendor security questionnaire?', answer: 'We answer what concerns our work. If your policy requires certifications we don’t hold, such as SOC 2, we’ll tell you on the first call so you can decide with that information.' },
          { question: 'Does it include SEO?', answer: 'The basics, yes: titles, descriptions, speed and structured data. If you want pages by threat or standard, content and optimization for AI search, that’s advanced SEO, quoted separately.' },
        ],
      },
      cta: { titleLead: 'Tell us what your product protects', titleAccent: 'and who struggles to understand it.' },
    },
  },
};
