import type { Service } from '@/data/services';

/**
 * Industria general de HOME.industries. aurin.mx tiene nichos de salud para EE. UU. (med spas, dentistas
 * cosméticos, fertilidad, medicina concierge…): aquí el terreno es "salud" en general para empresas en EE. UU.,
 * sitio + plataforma + marca, sin entrar a esos nichos. Sin nombres de clientes.
 */
export const healthcare: Service = {
  id: 'healthcare',
  slug: { es: 'diseno-web-salud', en: 'healthcare-web-design' },
  cases: [],
  photo: 'ind-healthcare',
  copy: {
    es: {
      seo: {
        title: 'Diseño de páginas web para salud en Estados Unidos | Aurin',
        description:
          'Sitios, portales y marca para clínicas, consultorios y empresas de salud en EE. UU.: citas fáciles, información clara, en inglés y español. Llamada gratis.',
      },
      name: 'Salud',
      summary: 'Diseño web y UX/UI para clínicas y empresas de salud en EE. UU.',
      tags: 'Clínicas · Consultorios · Cuidado en casa · Healthtech',
      hero: {
        titleLead: 'Diseño web para salud',
        titleAccent: 'que da tranquilidad desde el primer clic.',
        description:
          'Sitios y portales para clínicas y empresas de salud en EE. UU.: el paciente encuentra a su médico y agenda sin llamar.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Clínicas y hospitales', 'Consultorios', 'Cuidado en casa', 'Dentistas', 'Laboratorios', 'Healthtech'],
      },
      approach: {
        heading: 'Quien busca atención médica llega con dudas: *el sitio tiene que calmarlas.*',
        text: 'Un paciente compara opciones cuando algo le preocupa. Quiere saber si atiendes lo que tiene, si aceptas su seguro, dónde estás y cuándo lo pueden ver. Si tiene que adivinar o el formulario no funciona en su celular, llama a otro lado. Diseñamos para que esas respuestas estén a la vista y para que pedir una cita sea lo más fácil de la página.',
        layers: ['Servicios y médicos', 'Citas y contacto', 'Seguros y preguntas'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que preocupa más',
            items: ['Servicios escritos en lenguaje médico', 'Para agendar hay que llamar', 'No dice qué seguros aceptan', 'Fotos de banco que no son tu equipo', 'El paciente hispano no encuentra nada en español'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que tranquiliza',
            items: ['Cada servicio explicado como lo diría tu médico en consulta', 'Citas en línea en pocos pasos, desde el celular', 'Seguros, horarios y ubicación a la vista', 'Tu equipo y tus instalaciones reales', 'Cada página también en español, escrita para el paciente'],
          },
        },
      },
      deliverables: {
        heading: 'Lo que hacemos para *tu clínica o empresa de salud.*',
        intro: 'Puedes empezar por el sitio, el portal de pacientes o la marca, y sumar lo demás después. La propuesta dice qué incluye, cuánto cuesta y cuándo se entrega.',
        items: [
          { icon: 'Monitor', title: 'Un sitio que explica tus servicios', service: 'web-design', text: 'Qué atiendes, quién te atiende y cómo llegar, con páginas por servicio y por médico que los pacientes encuentran en Google.' },
          { icon: 'CalendarCheck', title: 'Citas en línea', service: 'ux-ui-design', text: 'Un camino corto para pedir cita, conectado con tu agenda o tu sistema, con recordatorios y confirmación.' },
          { icon: 'Users', title: 'Portal de pacientes', service: 'web-development', text: 'Resultados, recetas, pagos y mensajes en un solo lugar, fácil de usar para pacientes de todas las edades.' },
          { icon: 'Gem', title: 'Una marca que da confianza', service: 'branding', text: 'Nombre, logo e imagen para tu clínica o empresa de salud, pensados para tu sitio, tus consultorios y tus redes.' },
          { icon: 'ShieldCheck', title: 'Privacidad desde el diseño', text: 'Formularios que piden solo lo necesario y dicen para qué es cada dato. La revisión legal la hace tu equipo.' },
          { icon: 'Languages', title: 'Pacientes que hablan español', text: 'Páginas, formularios y recordatorios escritos para el paciente hispano, no traducidos palabra por palabra, para que llegue a su cita sin dudas.' },
        ],
      },
      process: {
        heading: 'Así pasamos de tu sitio de hoy a *uno donde agendar es lo más fácil.*',
        steps: [
          { name: 'Platiquemos', text: 'En una llamada gratis nos cuentas qué servicios quieres llenar, cómo agendan hoy tus pacientes y dónde se pierden.', gets: 'Propuesta por escrito: alcance, precio y fecha de entrega.' },
          { name: 'Escuchamos a recepción', text: 'Revisamos tu sitio y tus datos, y anotamos las preguntas que más llegan al teléfono de recepción.', gets: 'La lista de lo que más frena las citas.' },
          { name: 'Pacientes de prueba', text: 'Pacientes y personal usan un prototipo navegable antes de que escribamos una línea de código.', gets: 'Un camino de cita probado con pacientes reales.' },
          { name: 'Abrimos la agenda', text: 'Diseño final, programación y conexión con tu agenda o sistema de citas; después, hosting y soporte.', gets: 'Tu sitio publicado y recibiendo citas.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que nos preguntan *clínicas y consultorios.*',
        items: [
          { question: '¿Con qué tipo de empresas de salud trabajan?', answer: 'Clínicas, consultorios, cuidado en casa, dentistas, laboratorios y empresas de healthtech: desde un consultorio con un solo médico hasta redes con varias sedes.' },
          { question: '¿Pueden conectar las citas con nuestro sistema?', answer: 'Sí. Conectamos el sitio con tu agenda o tu sistema de citas si tiene cómo hacerlo, o te ayudamos a elegir uno que sí lo permita.' },
          { question: '¿El sitio cumple con HIPAA?', answer: 'Diseñamos para pedir solo los datos necesarios y para que el paciente sepa para qué son. El cumplimiento de HIPAA depende también de tus sistemas y proveedores; lo revisa tu equipo legal y te ayudamos a elegir herramientas que lo cumplan.' },
          { question: '¿Van a ver datos de nuestros pacientes?', answer: 'Solo lo que tu equipo decida compartir para el proyecto, y casi siempre trabajamos con datos de ejemplo. Esa información no pasa por herramientas de IA.' },
          { question: '¿Cómo atienden a pacientes que solo hablan español?', answer: 'Escribimos el sitio, los formularios y los avisos en español desde cero, con palabras de consulta y no de hospital, para que el paciente agende igual que en inglés.' },
          { question: '¿Pueden mejorar el sitio de nuestra clínica sin empezar de cero?', answer: 'Sí. Revisamos dónde se pierden los pacientes, qué preguntan por teléfono y qué buscan en Google, y empezamos por ahí.' },
        ],
      },
      cta: { titleLead: 'Hagamos que pedir cita contigo', titleAccent: 'sea más fácil que llamar.' },
    },
    en: {
      seo: {
        title: 'Healthcare Website Design Agency in the US | Aurin',
        description:
          'Websites, portals and branding for US clinics, practices and healthcare companies: easy booking, clear information. Free call.',
      },
      name: 'Healthcare',
      summary: 'Website and UX/UI design for US clinics and healthcare companies.',
      tags: 'Clinics · Practices · Home care · Healthtech',
      hero: {
        titleLead: 'Web and UX/UI design for healthcare',
        titleAccent: 'that puts patients at ease from the first click.',
        description:
          'Websites and portals for US clinics and healthcare companies: patients find their doctor and book without picking up the phone.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Clinics and hospitals', 'Private practices', 'Home care', 'Dentists', 'Labs', 'Healthtech'],
      },
      approach: {
        heading: 'People looking for care arrive worried: *your website has to ease that.*',
        text: 'A patient compares options when something is wrong. They want to know if you treat what they have, if you take their insurance, where you are and how soon they can be seen. If they have to guess, or the form breaks on their phone, they call somewhere else. We design so those answers are in plain sight and booking is the easiest thing on the page.',
        layers: ['Services and doctors', 'Booking and contact', 'Insurance and questions'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that adds worry',
            items: ['Services written in medical jargon', 'You have to call to book', 'No word on which insurance they take', 'Stock photos that aren’t your team'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website patients trust',
            items: ['Every service explained the way your doctor would in a visit', 'Online booking in a few steps, from a phone', 'Insurance, hours and location in plain sight', 'Your real team and your real facilities'],
          },
        },
      },
      deliverables: {
        heading: 'What we do for *your clinic or healthcare company.*',
        intro: 'Start with the website, the patient portal or the brand, and add the rest later. The proposal says what’s included, what it costs and when it’s delivered.',
        items: [
          { icon: 'Monitor', title: 'A website that explains your services', service: 'web-design', text: 'What you treat, who treats it and how to get there, with pages for each service and each doctor that patients find on Google.' },
          { icon: 'CalendarCheck', title: 'Online booking', service: 'ux-ui-design', text: 'A short path to book, connected to your calendar or your system, with reminders and confirmation.' },
          { icon: 'Users', title: 'Patient portal', service: 'web-development', text: 'Results, prescriptions, payments and messages in one place, easy to use for patients of every age.' },
          { icon: 'Gem', title: 'A brand patients trust', service: 'branding', text: 'Name, logo and visual identity for your clinic or healthcare company, made for your website, your offices and social media.' },
          { icon: 'ShieldCheck', title: 'Privacy by design', text: 'Forms that ask only for what’s needed and say why. Legal review is done by your team.' },
          { icon: 'Languages', title: 'Patients who speak Spanish', text: 'Pages, forms and reminders written for Hispanic patients, not translated word for word, so they arrive at their appointment with no doubts.' },
        ],
      },
      process: {
        heading: 'How we take your website from today to *one where booking is the easy part.*',
        steps: [
          { name: 'Let’s talk', text: 'On a free call you tell us which services you want to fill, how patients book today and where they drop off.', gets: 'A written proposal: scope, price and delivery date.' },
          { name: 'We listen to the front desk', text: 'We review your website and data, and note the questions your front desk hears most on the phone.', gets: 'A list of what’s holding appointments back.' },
          { name: 'Test patients', text: 'Patients and staff use a clickable prototype before we write a line of code.', gets: 'A booking path tested with real patients.' },
          { name: 'Open for booking', text: 'Final design, development and the connection to your calendar or booking system; then hosting and support.', gets: 'Your website live and taking appointments.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *clinics and practices* ask us.',
        items: [
          { question: 'What kinds of healthcare companies do you work with?', answer: 'Clinics, private practices, home care, dentists, labs and healthtech companies: from a single-doctor practice to networks with several locations.' },
          { question: 'Can you connect booking to our system?', answer: 'Yes. We connect the website to your calendar or booking system if it allows it, or help you choose one that does.' },
          { question: 'Will the website be HIPAA compliant?', answer: 'We design to collect only the data you need and to tell patients why. HIPAA compliance also depends on your systems and vendors; your legal team reviews it, and we help you choose tools that meet it.' },
          { question: 'Will you see our patients’ data?', answer: 'Only what your team decides to share for the project, and we almost always work with sample data. That information never goes through AI tools.' },
          { question: 'Can you improve our clinic’s website without starting over?', answer: 'Yes. We look at where patients drop off, what they ask on the phone and what they search on Google, and start there.' },
        ],
      },
      cta: { titleLead: 'Let’s make booking with you', titleAccent: 'easier than calling.' },
    },
  },
};
