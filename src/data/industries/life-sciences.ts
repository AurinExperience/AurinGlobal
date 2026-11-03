import type { Service } from '@/data/services';

/**
 * Nicho sin tarjeta en la home; aurin.mx tiene salud y healthtech, no biotecnología para EE. UU. El comprador es inversionista, socio
 * o candidato, no el paciente (eso es healthcare). La revisión científica y regulatoria es del cliente. Sin nombres de clientes.
 */
export const lifeSciences: Service = {
  id: 'life-sciences',
  slug: { es: 'diseno-web-biotecnologia', en: 'biotech-web-design' },
  publishAt: '2026-11-08T06:00:00-06:00',
  cases: [],
  copy: {
    es: {
      seo: {
        title: 'Diseño web para biotecnología en Estados Unidos | Aurin',
        description:
          'Sitios para biotecnología y ciencias de la vida en EE. UU.: tu ciencia explicada para inversionistas, socios y talento. SEO básico o avanzado. Llamada gratis.',
      },
      name: 'Biotecnología y ciencias de la vida',
      summary: 'Diseño web, UX/UI y branding para empresas de biotecnología y ciencias de la vida en EE. UU.',
      tags: 'Biotecnología · Dispositivos · Diagnóstico · Laboratorios',
      hero: {
        titleLead: 'Diseño web para biotecnología',
        titleAccent: 'con ciencia que se entiende y se sostiene.',
        description:
          'Sitios y marca para empresas de ciencias de la vida en EE. UU.: lo que investigas, explicado para inversionistas, socios y candidatos, y revisado por tu equipo.',
        ctaSecondary: 'Qué hacemos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Biotecnología', 'Dispositivos médicos', 'Diagnóstico', 'Herramientas de laboratorio', 'Organizaciones de investigación (CRO)', 'Software para ciencias de la vida'],
      },
      approach: {
        heading: 'Tu sitio lo leen un científico y un inversionista: *los dos tienen que quedarse.*',
        text: 'El investigador quiere ver el mecanismo y los datos. El inversionista quiere entender en un minuto qué problema resuelves y en qué etapa vas. El candidato quiere saber si vale la pena cambiarse. Si todo está en un párrafo lleno de siglas, ninguno sigue leyendo. Por eso explicamos tu ciencia por niveles, de lo simple a lo técnico, y tu equipo revisa cada línea antes de publicarla.',
        layers: ['Tu ciencia por niveles', 'Equipo y evidencia', 'Inversionistas y talento'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que solo entiende quien ya lo sabe',
            items: ['Un párrafo de siglas en la primera pantalla', 'Fotos de pipetas que podrían ser de cualquiera', 'Avances y publicaciones sin actualizar', 'Sin sección clara para inversionistas', 'Vacantes en un enlace perdido'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que cada quien lee a su nivel',
            items: ['Primero el problema que resuelves, después el detalle', 'Figuras y esquemas hechos para tu ciencia', 'Publicaciones y noticias que tu equipo actualiza', 'Lo que un inversionista busca, reunido en un lugar', 'Tu equipo y tus vacantes a la vista'],
          },
        },
      },
      deliverables: {
        heading: 'Qué hacemos para *tu empresa de ciencia.*',
        intro: 'Puedes empezar por el sitio o por la marca. Todo viene en la propuesta, con precio y fechas.',
        items: [
          { icon: 'Monitor', title: 'Sitio de la empresa', service: 'web-design', text: 'Qué problema resuelves, cómo y en qué etapa vas, con páginas para cada tipo de lector.' },
          { icon: 'BookOpen', title: 'Ciencia explicada por niveles', text: 'Textos y esquemas que van de lo simple a lo técnico, a partir de lo que nos explica tu equipo.' },
          { icon: 'Gem', title: 'Nombre e identidad', service: 'branding', text: 'Una marca para cuando toca salir del laboratorio y buscar socios o inversión.' },
          { icon: 'LayoutDashboard', title: 'Plataformas y portales', service: 'web-development', text: 'Áreas privadas para socios, sitios o laboratorios, con usuarios y permisos.' },
          { icon: 'PanelsTopLeft', title: 'Software científico', service: 'ux-ui-design', text: 'Rediseño de herramientas de laboratorio o de análisis, revisando con quienes las usan dónde se atoran.' },
          { icon: 'Users', title: 'Empleo y cultura', text: 'Una sección para atraer científicos e ingenieros, con tu equipo y tus vacantes al día.' },
        ],
      },
      process: {
        heading: 'De la presentación para inversionistas a *un sitio que tu equipo aprueba.*',
        steps: [
          { name: 'Llamada gratis', text: 'Nos cuentas qué investigas, en qué etapa vas y a quién necesitas convencer ahora.', gets: 'Una propuesta con precio, qué incluye y fechas.' },
          { name: 'Tu ciencia en palabras', text: 'Tu equipo nos explica el tema, proponemos cómo contarlo por niveles y ustedes corrigen hasta que sea preciso.', gets: 'Textos revisados por tu equipo.' },
          { name: 'Prototipo', text: 'Recorres el sitio antes de programarlo, con tus textos y tus esquemas.', gets: 'Un prototipo que apruebas.' },
          { name: 'Revisión y lanzamiento', text: 'Lo programamos, lo probamos, tu equipo y tus asesores dan el visto bueno y lo publicamos contigo.', gets: 'Tu sitio en línea y aprobado.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Preguntas de empresas de *ciencias de la vida.*',
        items: [
          { question: '¿Cuánto cuesta un sitio web para una empresa de biotecnología?', answer: 'Depende de cuánta ciencia haya que explicar, de si hacen falta esquemas propios y de si incluye marca. Lo vemos en una llamada gratis y te mandamos un precio cerrado por escrito, con lo que incluye y las fechas.' },
          { question: '¿Quién revisa que la ciencia esté bien?', answer: 'Tu equipo. Nosotros no somos científicos: escribimos a partir de lo que nos explican y nada se publica sin su revisión. Tampoco inventamos datos ni resultados.' },
          { question: '¿Pueden revisar que el sitio cumpla con la FDA?', answer: 'No. Lo que puede decirse de un producto en investigación lo definen tus asesores regulatorios. Nosotros les pasamos los textos para que los revisen y dejamos el tiempo para eso en el calendario.' },
          { question: '¿Protegen información que todavía no es pública?', answer: 'Sí, nos dices qué es confidencial y no se publica ni pasa por herramientas de IA. Si hace falta, firmamos un acuerdo de confidencialidad antes de que nos la compartas.' },
          { question: '¿Pueden hacer un sitio de pocas páginas para una empresa recién formada?', answer: 'Sí. Muchas veces basta un sitio corto con el problema, el enfoque, el equipo y un contacto. Lo dejamos listo para crecer cuando haya más que contar.' },
          { question: '¿Incluye SEO?', answer: 'El básico sí: títulos, descripciones, velocidad y datos estructurados. Si quieres contenidos por tema o indicación y optimización para buscadores con IA, es SEO avanzado y se cotiza aparte.' },
        ],
      },
      cta: { titleLead: 'Cuéntanos qué investiga tu empresa', titleAccent: 'y a quién necesitas convencer ahora.' },
    },
    en: {
      seo: {
        title: 'Biotech Website Design Agency in the US | Aurin',
        description:
          'Websites for US biotech and life sciences companies: your science explained for investors, partners and talent. Basic or advanced SEO. Book a free call.',
      },
      name: 'Biotech and life sciences',
      summary: 'Web design, UX/UI and branding for US biotech and life sciences companies.',
      tags: 'Biotech · Devices · Diagnostics · Lab tools',
      hero: {
        titleLead: 'Website design for biotech',
        titleAccent: 'with science people understand and your team stands behind.',
        description:
          'Websites and branding for US life sciences companies: your research explained for investors, partners and candidates, and reviewed by your team.',
        ctaSecondary: 'What we do',
      },
      industries: {
        heading: 'We design for',
        items: ['Biotech', 'Medical devices', 'Diagnostics', 'Lab tools', 'Contract research (CROs)', 'Life sciences software'],
      },
      approach: {
        heading: 'A scientist and an investor both read your site: *you need both to stay.*',
        text: 'The researcher wants to see the mechanism and the data. The investor wants to understand in a minute what problem you solve and what stage you’re at. The candidate wants to know if it’s worth the move. If it’s all in one paragraph full of acronyms, none of them keep reading. So we explain your science in layers, from simple to technical, and your team reviews every line before it goes live.',
        layers: ['Your science in layers', 'Team and evidence', 'Investors and talent'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website only insiders understand',
            items: ['A paragraph of acronyms on the first screen', 'Stock photos of pipettes', 'Progress and publications out of date', 'No clear section for investors', 'Jobs behind a lost link'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website each reader takes at their level',
            items: ['The problem you solve first, the detail after', 'Figures and diagrams made for your science', 'Publications and news your team keeps current', 'What an investor looks for, gathered in one place', 'Your team and your open jobs in view'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your science company.*',
        intro: 'You can start with the website or the brand. It’s all in the proposal, with price and dates.',
        items: [
          { icon: 'Monitor', title: 'Company website', service: 'web-design', text: 'What problem you solve, how, and what stage you’re at, with pages for each kind of reader.' },
          { icon: 'BookOpen', title: 'Science explained in layers', text: 'Copy and diagrams that go from simple to technical, based on what your team explains to us.' },
          { icon: 'Gem', title: 'Name and identity', service: 'branding', text: 'A brand for when it’s time to leave the lab and look for partners or funding.' },
          { icon: 'LayoutDashboard', title: 'Platforms and portals', service: 'web-development', text: 'Private areas for partners, sites or labs, with logins and permissions.' },
          { icon: 'PanelsTopLeft', title: 'Scientific software', service: 'ux-ui-design', text: 'A redesign of lab or analysis tools, reviewing with the people using them where they get stuck.' },
          { icon: 'Users', title: 'Careers and culture', text: 'A section to attract scientists and engineers, with your team and open jobs kept current.' },
        ],
      },
      process: {
        heading: 'From the investor deck to *a website your team approves.*',
        steps: [
          { name: 'Free call', text: 'You tell us what you’re researching, what stage you’re at and who you need to convince right now.', gets: 'A proposal with price, scope and dates.' },
          { name: 'Your science in words', text: 'Your team explains the subject, we propose how to tell it in layers and you correct it until it’s accurate.', gets: 'Copy reviewed by your team.' },
          { name: 'Prototype', text: 'You click through the site before it’s built, with your copy and your diagrams.', gets: 'A prototype you approve.' },
          { name: 'Review and launch', text: 'We build it and test it, your team and advisors sign off and we go live with you.', gets: 'Your site live and approved.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Questions from *life sciences companies.*',
        items: [
          { question: 'How much does a website for a biotech company cost?', answer: 'It depends on how much science has to be explained, whether you need custom diagrams and whether it includes branding. We go over it on a free call and send you a fixed price in writing, with what’s included and the dates.' },
          { question: 'Who checks that the science is right?', answer: 'Your team. We aren’t scientists: we write from what they explain and nothing goes live without their review. We also don’t make up data or results.' },
          { question: 'Can you check that the site complies with the FDA?', answer: 'No. What can be said about an investigational product is defined by your regulatory advisors. We send them the copy for review and leave time for that on the calendar.' },
          { question: 'Do you protect information that isn’t public yet?', answer: 'Yes, you tell us what’s confidential and it isn’t published or put through AI tools. If needed, we sign a confidentiality agreement before you share it.' },
          { question: 'Can you build a short website for a newly formed company?', answer: 'Yes. A short site with the problem, the approach, the team and a contact is often enough. We leave it ready to grow when there’s more to tell.' },
          { question: 'Does it include SEO?', answer: 'The basics, yes: titles, descriptions, speed and structured data. If you want content by topic or indication and optimization for AI search, that’s advanced SEO, quoted separately.' },
        ],
      },
      cta: { titleLead: 'Tell us what your company is researching', titleAccent: 'and who you need to convince right now.' },
    },
  },
};
