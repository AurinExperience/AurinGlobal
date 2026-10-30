import type { Service } from '@/data/services';

/** Industria general de HOME.industries. aurin.mx no tiene educación para EE. UU. Sin nombres de clientes. */
export const education: Service = {
  id: 'education',
  slug: { es: 'diseno-web-educacion', en: 'education-web-design' },
  cases: [],
  photo: 'ind-education',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para escuelas en Estados Unidos | Aurin',
        description:
          'Sitios para escuelas, academias y cursos en línea en EE. UU. que llenan grupos: recorridos agendados en línea y solicitudes completas. Llamada gratis.',
      },
      name: 'Educación',
      summary: 'Sitios y plataformas para escuelas y academias en EE. UU. que quieren llenar sus grupos.',
      tags: 'Escuelas · Universidades · Academias · Cursos en línea',
      hero: {
        titleLead: 'Diseño web para escuelas y academias',
        titleAccent: 'que llena tus grupos.',
        description:
          'Sitios para escuelas en EE. UU. que convierten la visita de una familia en un recorrido agendado y una solicitud.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Escuelas privadas', 'Universidades', 'Academias de idiomas', 'Cursos en línea', 'Capacitación para empresas', 'Institutos técnicos'],
      },
      approach: {
        heading: 'Las familias eligen escuela en tu sitio: *antes de visitarte, ya te compararon.*',
        text: 'Los papás revisan varias escuelas desde el celular, casi siempre de noche, y buscan tres cosas: qué aprenderá su hijo, cuánto cuesta y cómo es un día ahí. Si no lo encuentran rápido, agendan el recorrido en otra escuela. Hacemos que tu sitio conteste eso primero y que agendar una visita o empezar la solicitud tome un minuto.',
        layers: ['Programas', 'Recorrido', 'Solicitud'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que pierde familias',
            items: ['Colegiaturas escondidas tras «pide informes»', 'Avisos de la comunidad mezclados con lo de familias nuevas', 'Para conocer la escuela hay que llamar', 'Una solicitud en PDF para imprimir', 'Requisitos solo en inglés'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que llena grupos',
            items: ['Qué aprende el alumno y cuánto cuesta, a la vista', 'Un camino para familias nuevas y otro para tu comunidad', 'Recorridos agendados en línea, con recordatorio', 'Una solicitud en línea que guarda el avance', 'Requisitos y solicitud también en español'],
          },
        },
      },
      deliverables: {
        heading: 'De la primera visita a la inscripción: *lo que hacemos para tu escuela.*',
        intro: 'Puedes empezar por el sitio, la solicitud en línea o la plataforma de clases. La propuesta dice qué incluye, cuánto cuesta y cuándo se entrega, para tenerlo listo antes de que abran inscripciones.',
        items: [
          { icon: 'Monitor', title: 'Un sitio que vende tus programas', service: 'web-design', text: 'Cada programa con qué aprende el alumno, cómo es un día, costos y requisitos, en páginas que las familias encuentran en Google.' },
          { icon: 'CalendarCheck', title: 'Recorridos agendados en línea', text: 'La familia elige día y hora para conocer la escuela y recibe un recordatorio; tu equipo ve cada visita en su calendario.' },
          { icon: 'Route', title: 'Solicitud en línea', service: 'ux-ui-design', text: 'Por pasos, guarda el avance, pide documentos y le avisa a tu equipo en cuanto llega una solicitud.' },
          { icon: 'BookOpen', title: 'Plataforma de clases', service: 'web-development', text: 'Cursos, tareas, calificaciones y mensajes en una plataforma que alumnos y maestros entienden sin manual.' },
          { icon: 'CreditCard', title: 'Pagos de colegiaturas', text: 'Pagos en línea con recibos y recordatorios, conectados con tu sistema de cobro.' },
          { icon: 'Languages', title: 'Familias que prefieren el español', text: 'Requisitos, costos e inscripción explicados en español para papás que no leen inglés con soltura, sin perder detalle.' },
        ],
      },
      process: {
        heading: 'Cómo llegamos a *más familias inscritas.*',
        steps: [
          { name: 'Primera llamada', text: 'Nos cuentas qué programas quieres llenar, cómo se inscriben hoy y qué dudas repiten las familias.', gets: 'Una propuesta con alcance, costo y calendario.' },
          { name: 'Hablamos con papás y alumnos', text: 'Revisamos tu sitio y tus datos de inscripción, y entrevistamos a familias y alumnos actuales.', gets: 'Las razones reales por las que una inscripción se queda a medias.' },
          { name: 'Prueba con familias', text: 'Papás como los tuyos usan un prototipo navegable, agendan un recorrido y empiezan la solicitud; vemos dónde se traban.', gets: 'Un diseño ajustado con lo que vimos en las pruebas.' },
          { name: 'Listo para el ciclo', text: 'Diseño final, programación y conexión con tu sistema escolar; después nos quedamos con hosting y soporte.', gets: 'Sitio o plataforma en línea antes de que abran inscripciones.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Dudas frecuentes de *escuelas y academias.*',
        items: [
          { question: '¿Esto nos ayuda a llenar grupos?', answer: 'Para eso lo diseñamos: que más familias que entran al sitio agenden un recorrido y terminen la solicitud. Dejamos medido cuántas lo hacen, para que veas qué cambió.' },
          { question: '¿Trabajan solo con escuelas privadas?', answer: 'No. También con universidades, academias de idiomas, empresas de cursos en línea y áreas de capacitación de empresas.' },
          { question: '¿Pueden conectar el sitio con nuestro sistema escolar?', answer: 'Sí, si el sistema tiene cómo conectarse. Si no, diseñamos la inscripción para que la información llegue ordenada a tu equipo.' },
          { question: '¿Diseñan plataformas de cursos en línea?', answer: 'Sí. Diseñamos plataformas propias o mejoramos la que ya usas, para que alumnos y maestros la entiendan sin capacitación.' },
          { question: '¿Cuidan los datos de los alumnos?', answer: 'Pedimos solo lo necesario y decimos para qué es cada dato. Las reglas de privacidad de alumnos (como FERPA o COPPA) las revisa tu equipo legal; nosotros diseñamos para cumplirlas.' },
          { question: '¿Pueden explicar la inscripción a familias que hablan español?', answer: 'Sí. Escribimos requisitos, costos y pasos de inscripción en español aparte, con el mismo detalle que en inglés, para que los papás no tengan que pedir ayuda.' },
        ],
      },
      cta: { titleLead: 'Llenemos tus grupos', titleAccent: 'desde la primera visita a tu sitio.' },
    },
    en: {
      seo: {
        title: 'School Website Design Agency in the US | Aurin',
        description:
          'Websites for US private schools, academies and online courses that fill seats: tours booked online and applications families finish. Free call.',
      },
      name: 'Education',
      summary: 'Websites and platforms for US schools and academies that want to fill their seats.',
      tags: 'Schools · Universities · Academies · Online courses',
      hero: {
        titleLead: 'Website design for schools and academies',
        titleAccent: 'that fills your seats.',
        description:
          'Websites for US schools and academies that turn a parent’s first visit into a booked tour and a finished application.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Private schools', 'Universities', 'Language academies', 'Online courses', 'Corporate training', 'Technical institutes'],
      },
      approach: {
        heading: 'Parents choose a school on your website: *they compared you before they ever visit.*',
        text: 'Parents look at several schools on their phone, usually at night, and want three answers: what their child will learn, what it costs and what a day there looks like. If they can’t find them fast, they book a tour somewhere else. We make your website answer those first and make booking a visit or starting an application take a minute.',
        layers: ['Programs', 'Tour', 'Application'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that loses families',
            items: ['Tuition hidden behind “request info”', 'Community news mixed with info for new families', 'To book a tour, you have to call', 'An application PDF you print and scan'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that fills seats',
            items: ['What students learn and what it costs, up front', 'One path for prospective families, another for your community', 'Tours booked online, with reminders', 'An online application that saves progress'],
          },
        },
      },
      deliverables: {
        heading: 'From first visit to enrollment: *what we do for your school.*',
        intro: 'You can start with the website, the online application or the class platform. The proposal says what’s included, what it costs and when it’s delivered, so it’s ready before enrollment opens.',
        items: [
          { icon: 'Monitor', title: 'A website that sells your programs', service: 'web-design', text: 'Each program with what students learn, what a day looks like, tuition and requirements, on pages parents find on Google.' },
          { icon: 'CalendarCheck', title: 'Tours booked online', text: 'Parents pick a day and time to visit and get a reminder; your team sees every tour on its calendar.' },
          { icon: 'Route', title: 'Online application', service: 'ux-ui-design', text: 'Step by step, it saves progress, collects documents and alerts your team the moment an application comes in.' },
          { icon: 'BookOpen', title: 'Class platform', service: 'web-development', text: 'Courses, homework, grades and messages on a platform students and teachers understand without a manual.' },
          { icon: 'CreditCard', title: 'Tuition payments', text: 'Online payments with receipts and reminders, connected to your billing system.' },
          { icon: 'Languages', title: 'Families who prefer Spanish', text: 'Requirements, tuition and enrollment explained in Spanish for parents who aren’t comfortable reading English, with nothing left out.' },
        ],
      },
      process: {
        heading: 'How we get you *more enrolled families.*',
        steps: [
          { name: 'First call', text: 'You tell us which programs you want to fill, how people enroll today and which questions families keep asking.', gets: 'A proposal with scope, cost and schedule.' },
          { name: 'Talking to parents and students', text: 'We review your website and enrollment data, and interview current families and students.', gets: 'The real reasons applications stall halfway.' },
          { name: 'Testing with parents', text: 'Parents like yours use a clickable prototype, book a tour and start an application; we see where they get stuck.', gets: 'A design adjusted to what we saw in testing.' },
          { name: 'Ready for the school year', text: 'Final design, development and the connection to your student system; then we keep hosting and support.', gets: 'Website or platform live before enrollment opens.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Common questions from *schools and academies.*',
        items: [
          { question: 'Will this help us fill seats?', answer: 'That’s what we design it for: more of the parents who visit your website book a tour and finish the application. We set up tracking so you can see what changed.' },
          { question: 'Do you only work with private schools?', answer: 'No. Also universities, language academies, online course companies and corporate training teams.' },
          { question: 'Can you connect the website to our student system?', answer: 'Yes, if the system allows it. If not, we design enrollment so the information reaches your team in order.' },
          { question: 'Do you design online course platforms?', answer: 'Yes. We design custom platforms or improve the one you already use, so students and teachers understand it without training.' },
          { question: 'Do you protect student data?', answer: 'We ask only for what’s needed and say why. Student privacy rules (such as FERPA or COPPA) are reviewed by your legal team; we design to meet them.' },
        ],
      },
      cta: { titleLead: 'Let’s fill your seats,', titleAccent: 'starting with the first visit to your website.' },
    },
  },
};
