import type { Service } from '@/data/services';

/** Industria general de HOME.industries. aurin.mx tiene fundaciones solo para México. Sin nombres de clientes. */
export const nonprofits: Service = {
  id: 'nonprofits',
  slug: { es: 'diseno-web-ong', en: 'nonprofit-web-design' },
  cases: [],
  photo: 'ind-nonprofits',
  copy: {
    es: {
      seo: {
        title: 'Diseño web para fundaciones y ONG en Estados Unidos | Aurin',
        description:
          'Sitios para fundaciones y organizaciones sin fines de lucro en EE. UU.: tu causa clara y donativos en un minuto, en inglés y español. Llamada gratis.',
      },
      name: 'Fundaciones y ONG',
      summary: 'Diseño web para fundaciones y organizaciones sin fines de lucro en EE. UU.',
      tags: 'Fundaciones · ONG · Asociaciones · Voluntariado',
      hero: {
        titleLead: 'Diseño web para fundaciones y ONG',
        titleAccent: 'que convierte visitas en donantes.',
        description:
          'Sitios para fundaciones y organizaciones sin fines de lucro en EE. UU.: quien llega entiende tu causa y dona en un minuto.',
        ctaSecondary: 'Qué diseñamos',
      },
      industries: {
        heading: 'Diseñamos para',
        items: ['Fundaciones', 'ONG', 'Asociaciones', 'Organizaciones comunitarias', 'Iglesias', 'Programas de voluntariado'],
      },
      approach: {
        heading: 'La gente quiere ayudar: *tu sitio tiene que decirle cómo.*',
        text: 'Quien llega a tu sitio ya siente algo por tu causa. Quiere entenderla rápido, saber que su dinero se usa bien y donar sin vueltas. Cuando el donativo pide crear una cuenta o los resultados están en un informe de cuarenta páginas, esa intención se pierde. Diseñamos para que la causa se sienta, los resultados se vean y donar sea lo más fácil de la página.',
        layers: ['Causa', 'Resultados', 'Donativo'],
        contrast: {
          bad: {
            label: 'Lo de siempre',
            title: 'Un sitio que no mueve a nadie',
            items: ['La misión en un párrafo largo', 'Resultados en un PDF anual', 'Donar pide crear una cuenta', 'El voluntariado es un correo', 'La comunidad a la que ayudas no lo puede leer'],
          },
          good: {
            label: 'Con Aurin',
            title: 'Un sitio que suma donantes',
            items: ['Tu causa contada con historias reales', 'Lo que logra cada donativo, a la vista', 'Donar en un minuto, también cada mes', 'Registro de voluntarios en línea', 'Historias y donativos también en español'],
          },
        },
      },
      deliverables: {
        heading: 'Cómo apoyamos a *tu organización.*',
        intro: 'Muchas organizaciones empiezan por los donativos antes de una campaña; otras por el sitio completo. La propuesta trae alcance, precio y fechas para llegar a tu próxima campaña.',
        items: [
          { icon: 'Monitor', title: 'Un sitio que cuenta tu causa', service: 'web-design', text: 'Tu causa, tus programas y las historias de la gente a la que ayudas, en un sitio fácil de recorrer.' },
          { icon: 'Gem', title: 'Donativos en línea', service: 'web-development', text: 'Donar en un minuto, una vez o cada mes, con montos sugeridos y recibo para deducir impuestos.' },
          { icon: 'ChartLine', title: 'Resultados a la vista', text: 'Lo que logran con cada donativo, en cifras y fotos que tu equipo puede actualizar.' },
          { icon: 'Users', title: 'Voluntariado', text: 'Registro de voluntarios con fechas y actividades, y aviso a tu equipo.' },
          { icon: 'CalendarCheck', title: 'Eventos y campañas', text: 'Páginas para eventos y campañas de recaudación, con boletos o metas a la vista.' },
          { icon: 'Languages', title: 'Tu comunidad hispana', text: 'Historias, programas y donativos en español para la comunidad a la que sirves y para donantes que prefieren dar en su idioma.' },
        ],
      },
      process: {
        heading: 'Cómo llegamos a *más donantes para tu causa.*',
        steps: [
          { name: 'Cuéntanos tu causa', text: 'En una llamada gratis vemos cómo llegan hoy los donativos y qué campañas vienen en el año.', gets: 'Alcance, precio y fechas para llegar a tu próxima campaña.' },
          { name: 'Escuchamos a donantes', text: 'Revisamos tu sitio y tus datos de donativos, y hablamos con donantes, voluntarios y tu equipo.', gets: 'Qué frena hoy a quien quiere donar.' },
          { name: 'Donativo de prueba', text: 'Donantes reales hacen un donativo y se registran como voluntarios en un prototipo navegable.', gets: 'Un donativo de un minuto, probado antes de programar.' },
          { name: 'Campaña en marcha', text: 'Diseño final, programación y conexión con tu plataforma de donativos; después hosting y soporte.', gets: 'Tu sitio en línea, listo para recibir donativos.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'Lo que preguntan *fundaciones y ONG.*',
        items: [
          { question: '¿Con qué tipo de organizaciones trabajan?', answer: 'Fundaciones, ONG, asociaciones, organizaciones comunitarias, iglesias y programas de voluntariado.' },
          { question: '¿Pueden usar nuestra plataforma de donativos?', answer: 'Sí. Conectamos el sitio con tu plataforma de donativos si lo permite, o te ayudamos a elegir una con comisiones claras.' },
          { question: '¿Se pueden hacer donativos cada mes?', answer: 'Sí. Diseñamos donativos únicos y mensuales, con recibo para deducir impuestos.' },
          { question: '¿Nuestro equipo puede actualizar el sitio?', answer: 'Sí. Te dejamos un administrador sencillo para subir historias, eventos y resultados sin depender de nosotros.' },
          { question: '¿Pueden recibir donativos en español?', answer: 'Sí. La página de donativos, los recibos y las historias quedan en español, para que donantes y voluntarios hispanos se sumen sin barreras.' },
        ],
      },
      cta: { titleLead: 'Hagamos que ayudar a tu causa', titleAccent: 'tome un minuto.' },
    },
    en: {
      seo: {
        title: 'Nonprofit Website Design Agency in the US | Aurin',
        description:
          'Websites for US foundations and nonprofits: your cause explained clearly, donations in a minute. Free call.',
      },
      name: 'Nonprofits',
      summary: 'Website design for US foundations and nonprofit organizations.',
      tags: 'Foundations · Nonprofits · Associations · Volunteering',
      hero: {
        titleLead: 'Website design for nonprofits',
        titleAccent: 'that turns visitors into donors.',
        description:
          'Websites for US foundations and nonprofits: visitors understand your cause, see their impact and give in a minute.',
        ctaSecondary: 'What we design',
      },
      industries: {
        heading: 'We design for',
        items: ['Foundations', 'Nonprofits', 'Associations', 'Community organizations', 'Churches', 'Volunteer programs'],
      },
      approach: {
        heading: 'People want to help: *your website has to show them how.*',
        text: 'Whoever lands on your website already cares about your cause. They want to understand it quickly, know their money is well used and give without detours. When donating means creating an account, or results live in a forty-page report, that intention fades. We design so the cause is felt, the results are visible and giving is the easiest thing on the page.',
        layers: ['Cause', 'Results', 'Giving'],
        contrast: {
          bad: {
            label: 'The usual',
            title: 'A website that moves no one',
            items: ['The mission in a long paragraph', 'Results in an annual PDF', 'Donating requires an account', 'Volunteering is an email address'],
          },
          good: {
            label: 'With Aurin',
            title: 'A website that wins donors',
            items: ['Your cause told through real stories', 'What each donation achieves, in plain sight', 'Give in a minute, monthly too', 'Online volunteer sign-up'],
          },
        },
      },
      deliverables: {
        heading: 'How we support *your organization.*',
        intro: 'Many organizations start with online giving before a campaign; others with the full website. The proposal includes scope, price and dates timed to your next campaign.',
        items: [
          { icon: 'Monitor', title: 'A website that tells your cause', service: 'web-design', text: 'Your cause, your programs and the stories of the people you help, on a website that’s easy to explore.' },
          { icon: 'Gem', title: 'Online giving', service: 'web-development', text: 'Give in a minute, once or monthly, with suggested amounts and a tax-deductible receipt.' },
          { icon: 'ChartLine', title: 'Results in plain sight', text: 'What each donation achieves, in numbers and photos your team can update.' },
          { icon: 'Users', title: 'Volunteering', text: 'Volunteer sign-up with dates and activities, and an alert to your team.' },
          { icon: 'CalendarCheck', title: 'Events and campaigns', text: 'Pages for events and fundraising campaigns, with tickets or goals in plain sight.' },
          { icon: 'Languages', title: 'Your Hispanic community', text: 'Stories, programs and giving in Spanish for the community you serve and for donors who prefer to give in their own language.' },
        ],
      },
      process: {
        heading: 'How we get *more donors for your cause.*',
        steps: [
          { name: 'Tell us about your cause', text: 'On a free call we look at how donations come in today and which campaigns are coming this year.', gets: 'Scope, price and dates timed to your next campaign.' },
          { name: 'Listening to donors', text: 'We review your website and giving data, and talk to donors, volunteers and your team.', gets: 'What’s stopping people who want to give.' },
          { name: 'Test donation', text: 'Real donors make a donation and sign up to volunteer on a clickable prototype.', gets: 'A one-minute donation, tested before any code.' },
          { name: 'Campaign live', text: 'Final design, development and the connection to your giving platform; then hosting and support.', gets: 'Your website live, ready to receive donations.' },
        ],
      },
      cases: { heading: '' },
      faq: {
        heading: 'What *nonprofits* ask us.',
        items: [
          { question: 'What kinds of organizations do you work with?', answer: 'Foundations, nonprofits, associations, community organizations, churches and volunteer programs.' },
          { question: 'Can you use our giving platform?', answer: 'Yes. We connect the website to your giving platform if it allows it, or help you choose one with clear fees.' },
          { question: 'Can people give monthly?', answer: 'Yes. We design one-time and monthly giving, with a tax-deductible receipt.' },
          { question: 'Can our team update the website?', answer: 'Yes. You get a simple admin to add stories, events and results without depending on us.' },
        ],
      },
      cta: { titleLead: 'Let’s make supporting your cause', titleAccent: 'take a minute.' },
    },
  },
};
