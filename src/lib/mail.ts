/**
 * Correo de leads al equipo con Resend: la misma cuenta y el mismo remitente verificado que
 * aurin.mx (noreply@aurin.mx). Lo usan /api/contact y /api/whatsapp-lead.
 *
 * Variables: RESEND_API_KEY (en Vercel). MAIL_TEST_TO (solo en local) cambia el destino para
 * probar sin escribirle al equipo; nunca definirla en Vercel.
 */
const TEAM_INBOX = process.env.MAIL_TEST_TO ? process.env.MAIL_TEST_TO.split(',') : ['info@sodio.net', 'leonel@sodio.net'];

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function sendLead(subject: string, rows: [string, string][], replyTo?: string): Promise<boolean> {
  const table = rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">${k}</td><td style="padding:6px 0"><strong>${escape(v).replace(/\n/g, '<br>')}</strong></td></tr>`)
    .join('');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Aurin <noreply@aurin.mx>',
      to: TEAM_INBOX,
      reply_to: replyTo,
      subject,
      html: `<h2 style="font-family:sans-serif">${escape(subject)}</h2><table style="font-family:sans-serif;font-size:14px">${table}</table>`,
    }),
  }).catch(() => null);
  if (!response?.ok) console.error('Resend rechazó el lead:', response?.status, await response?.text().catch(() => ''));
  return Boolean(response?.ok);
}
