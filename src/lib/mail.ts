/**
 * Correo de leads al equipo con Resend: la misma cuenta y el mismo remitente verificado que
 * aurin.mx (no-reply@aurin.mx). Lo usan /api/contact y /api/whatsapp-lead.
 * El HTML copia el diseño de contactEmailTemplate de aurin.mx (src/lib/mailing/templates.ts).
 *
 * Variables: RESEND_API_KEY (en Vercel). MAIL_TEST_TO (solo en local) cambia el destino para
 * probar sin escribirle al equipo; nunca definirla en Vercel.
 */
// import.meta.env y no process.env: en `astro dev` el .env solo llega a import.meta.env
const TEAM_INBOX = import.meta.env.MAIL_TEST_TO ? import.meta.env.MAIL_TEST_TO.split(',') : ['info@sodio.net', 'leonel@sodio.net'];

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

type Lead = {
  title: string;
  name: string;
  rows: [string, string][];
  message?: string;
  /** Página y procedencia, en la sección "Origen del lead" */
  origin: [string, string][];
  replyTo?: string;
};

// Correos, teléfonos y URLs salen como enlace, como en aurin.mx
const LINK = 'color:#0A0A0A;';
const value = (label: string, raw: string) => {
  const v = escape(raw);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) return `<a href="mailto:${v}" style="${LINK}">${v}</a>`;
  if (label === 'Teléfono' || label === 'WhatsApp') return `<a href="tel:${escape(raw.replace(/[^0-9+]/g, ''))}" style="${LINK}">${v}</a>`;
  if (/^https?:\/\//.test(raw)) return `<a href="${v}" style="${LINK}" target="_blank">${v}</a>`;
  return v;
};

const row = (label: string, raw: string) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 130px; vertical-align: top; font-family: Arial, sans-serif;">${label}</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-family: Arial, sans-serif;">${value(label, raw || 'No disponible')}</td>
    </tr>`;

const leadHtml = ({ title, rows, message, origin }: Lead) => {
  const fecha = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City', dateStyle: 'long', timeStyle: 'short' });
  return `
  <div style="background: #f4f4f4; padding: 24px 0; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
      <tr>
        <td style="background: #0A0A0A; padding: 28px 32px;">
          <div style="color: #D0DF00; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">Aurin Consulting</div>
          <div style="color: #ffffff; font-size: 22px; font-weight: bold; margin-top: 6px;">${escape(title)}</div>
        </td>
      </tr>
      <tr><td style="padding: 24px 32px 8px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">${rows.map(([k, v]) => row(k, v)).join('')}</table>
      </td></tr>
      ${message ? `
      <tr><td style="padding: 16px 32px 8px;">
        <div style="background: #fafaf0; border-left: 4px solid #D0DF00; border-radius: 8px; padding: 16px 18px;">
          <div style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Mensaje</div>
          <div style="color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escape(message)}</div>
        </div>
      </td></tr>` : ''}
      <tr><td style="padding: 8px 32px 4px;">
        <div style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 12px 0 4px;">Origen del lead</div>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">${origin.map(([k, v]) => row(k, v)).join('')}</table>
      </td></tr>
      <tr><td style="padding: 24px 32px; background: #fafafa; color: #999; font-size: 12px; line-height: 1.5;">
        Enviado desde <strong>aurin.consulting</strong><br>
        ${fecha}
      </td></tr>
    </table>
  </div>`;
};

export async function sendLead(lead: Lead): Promise<boolean> {
  // "Aurin Consulting" en remitente y asunto: los leads de aurin.mx llegan a la misma bandeja como "Aurin"
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Aurin Consulting <no-reply@aurin.mx>',
      to: TEAM_INBOX,
      reply_to: lead.replyTo,
      subject: `Aurin Consulting · ${lead.title} - ${lead.name}`,
      html: leadHtml(lead),
    }),
  }).catch(() => null);
  if (!response?.ok) console.error('Resend rechazó el lead:', response?.status, await response?.text().catch(() => ''));
  return Boolean(response?.ok);
}
