import type { FaqItem, Lang, Step } from '@/data/types';
import type { StateCopy } from './types';

/**
 * Lo que es igual en todos los estados porque son promesas de la empresa, no texto sobre el estado: proceso, lo que va
 * por escrito y las preguntas que no dependen del lugar. En un solo lugar para que no se contradigan entre páginas
 * (cámbialas aquí si cambia la promesa). Todo lo demás de cada estado se escribe de cero.
 */
export const PROCESS: Record<Lang, { heading: string; steps: Step[] }> = {
  es: {
      heading: 'Así avanza tu proyecto, *del primer mensaje al sitio publicado.*',
      steps: [
        { name: 'Nos cuentas de tu negocio', text: 'Por mensaje o en una llamada gratis: qué vendes, a quién y qué te está frenando. Si vemos que no somos lo que necesitas, te lo decimos ahí mismo.', gets: 'Una idea clara de por dónde empezar.' },
        { name: 'Te mandamos la propuesta', text: 'Qué incluye, cuánto cuesta y cuándo se entrega. La revisas con tu equipo sin presión y decides con todo a la vista.', gets: 'Precio y fechas antes de comprometerte.' },
        { name: 'Apruebas el diseño', text: 'Recorres un prototipo de las páginas clave, en videollamada o cuando te quede bien, y nos pides los cambios que hagan falta.', gets: 'Tu sitio para probarlo antes de programarlo.' },
        { name: 'Lo programamos y lo publicamos', text: 'La IA nos ayuda a avanzar más rápido y un experto revisa cada parte, para que salga lo antes posible y bien. Lo probamos en celular y computadora, dejamos listo el SEO y lo publicamos contigo.', gets: 'Tu sitio en línea y probado.' },
      ],
  },
  en: {
      heading: 'How your project moves, *from first message to live site.*',
      steps: [
        { name: 'Tell us about your business', text: 'By message or on a free call: what you sell, who buys it and what’s getting in the way. If we’re not the right fit, we’ll say so on the spot.', gets: 'A clear idea of where to start.' },
        { name: 'Get the proposal', text: 'What’s included, what it costs and when it’s delivered. Go over it with your team, without pressure and with everything in front of you.', gets: 'Price and dates before you commit.' },
        { name: 'Approve the design', text: 'Click through a prototype of the key pages, on a video call or whenever suits you, and tell us what to change.', gets: 'Your site to try out before it’s built.' },
        { name: 'We build it and launch it', text: 'AI helps us move faster and an expert reviews every part, so it launches as soon as possible and done right. We test it on phones and computers, finish the SEO and go live with you.', gets: 'Your site live and tested.' },
      ],
  },
};

export const COMMITMENTS: Record<Lang, StateCopy['commitments']> = {
  es: {
      heading: 'Contratar a distancia da menos miedo *cuando todo va por escrito.*',
      intro: 'Antes de que pagues nada, tu propuesta trae estos cuatro puntos. También te sirven para comparar con cualquier otra agencia.',
      sheet: 'Tu propuesta incluye',
      you: 'Tu empresa',
      items: [
        { title: 'Ves el diseño antes de programar', text: 'Apruebas tus páginas en un prototipo que puedes recorrer, no una idea en una presentación. Hasta que dices que sí, no se programa nada.' },
        { title: 'Un precio cerrado', text: 'El de la propuesta es el que pagas. Si a medio camino quieres algo nuevo, primero te decimos cuánto cuesta y tú decides.' },
        { title: 'Tu sitio es tuyo', text: 'Hosting y dominio pueden estar en tu cuenta o en la nuestra, y la propuesta dice dónde queda cada cosa. Si un día quieres seguir con otro equipo, te entregamos código, dominio y accesos.' },
        { title: 'Fechas y soporte acordados', text: 'Cuándo se entrega cada parte y cómo te atendemos después de publicar. Así nadie depende de la memoria de nadie.' },
      ],
  },
  en: {
      heading: 'Hiring a remote agency feels safer *when it’s all in writing.*',
      intro: 'Before you pay a dollar, your proposal spells out these four things. Use them to compare us with any other agency.',
      sheet: 'Your proposal includes',
      you: 'Your company',
      items: [
        { title: 'You see the design before we build', text: 'You approve your pages in a prototype you can click through, not a concept in a slide deck. Nothing gets built until you say yes.' },
        { title: 'A fixed price', text: 'The number on the proposal is the number you pay. If you want something new along the way, we tell you what it costs first and you decide.' },
        { title: 'Your site is yours', text: 'Hosting and domain can sit in your account or ours, and the proposal says where each one lives. If you ever want to move to another team, we hand over the code, domain and logins.' },
        { title: 'Dates and support agreed up front', text: 'When each part is delivered and how we look after you once it’s live, so nothing relies on anyone’s memory.' },
      ],
  },
};

export const COMMON_FAQ: Record<Lang, FaqItem[]> = {
  es: [
    { question: '¿Pierdo mi lugar en Google si rediseñan mi sitio?', answer: 'No tiene por qué. Antes de tocar nada revisamos qué páginas ya te traen visitas para conservarlas, y si cambia alguna dirección dejamos redirecciones. Un rediseño hecho sin ese cuidado es de lo que más tráfico hace perder.' },
    { question: '¿Cómo se paga el proyecto?', answer: 'La forma de pago y su calendario se acuerdan contigo y quedan en la propuesta antes de empezar. No se cobra nada fuera de lo que aprobaste: si pides algo extra, te decimos cuánto cuesta antes de hacerlo.' },
    { question: '¿Quién escribe los textos y pone las fotos?', answer: 'Definimos contigo las páginas y los textos clave a partir de lo que nos cuentas de tu negocio; tú los revisas y los apruebas. Para las fotos, lo mejor son las reales de tu empresa. Si te faltan, te decimos cuáles conviene conseguir.' },
    { question: '¿Quién se encarga del sitio después de publicarlo?', answer: 'Podemos alojarlo nosotros y darte soporte: si algo falla o tienes una duda, te responde el mismo equipo que lo hizo. Si prefieres manejarlo por tu cuenta, te entregamos el código y los accesos.' },
    { question: '¿Cuánto tarda un proyecto?', answer: 'Buscamos que salga lo antes posible, pero depende de lo que incluya y de qué tan rápido apruebes cada paso: una landing page sale antes que una plataforma o una marca completa. Las fechas de cada parte vienen en la propuesta.' },
    { question: '¿Usan inteligencia artificial?', answer: 'Sí, para acelerar el diseño y la programación, y por eso tu proyecto avanza más rápido. Siempre va de la mano de un experto: una persona del equipo decide y revisa todo lo que se publica. La información confidencial de tu empresa y de tus clientes no pasa por esas herramientas.' },
  ],
  en: [
    { question: 'Will a redesign cost me my Google rankings?', answer: 'It shouldn’t. Before we touch anything, we check which pages already bring in visitors so we can keep them, and if an address changes we set up redirects. Redesigns done without that care are one of the most common ways to lose traffic.' },
    { question: 'How do payments work?', answer: 'The payment terms and schedule are agreed with you and written into the proposal before we start. You’re never billed for anything you didn’t approve: if you ask for something extra, you hear what it costs first.' },
    { question: 'Who writes the copy and handles the photos?', answer: 'We work out the pages and key copy with you, based on what you tell us about your business, and you review and approve them. For photos, real ones of your company work best. If you’re missing some, we’ll tell you which are worth getting.' },
    { question: 'Who takes care of the site after launch?', answer: 'We can host it and support you: if something breaks or you have a question, the team that built it answers. If you’d rather run it yourself, we hand over the code and logins.' },
    { question: 'How long does a project take?', answer: 'We aim to launch as soon as possible, but it depends on what’s included and how quickly you approve each step: a landing page goes live sooner than a platform or a full brand. The dates for each part are in the proposal.' },
    { question: 'Do you use AI?', answer: 'Yes, to speed up design and development, which is why your project moves faster. It’s always guided by an expert: a person on our team makes the calls and reviews everything that goes live. Confidential information about your company and customers never goes through those tools.' },
  ],
};

const FAQ_KEYS = ['redesign', 'payment', 'copy', 'support', 'time', 'ai'] as const;

/**
 * La de IA y dos más, elegidas por estado: las 6 en las 10 páginas serían el mismo texto repetido (doorway pages).
 * Texas, el piloto, las lleva todas. Al sumar un estado, una combinación que no se haya usado.
 */
export const commonFaq = (lang: Lang, a: (typeof FAQ_KEYS)[number], b: (typeof FAQ_KEYS)[number]): FaqItem[] =>
  [a, b, 'ai' as const].map((key) => COMMON_FAQ[lang][FAQ_KEYS.indexOf(key)]);
