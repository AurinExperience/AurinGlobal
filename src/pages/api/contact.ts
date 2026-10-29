import type { APIRoute } from 'astro';
import { sendLead } from '@/lib/mail';
import { isValidPhone } from '@/lib/phone';

/**
 * Formulario de contacto (LeadForm). Manda el lead por correo (src/lib/mail.ts).
 * Acepta el envío con JS (fetch, responde JSON) y sin JS (POST normal, redirige de vuelta).
 */
export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  const back = request.headers.get('referer') ?? '/';
  const reply = (ok: boolean, status = ok ? 200 : 400) =>
    wantsJson
      ? new Response(JSON.stringify({ ok }), { status, headers: { 'Content-Type': 'application/json' } })
      : redirect(`${back.split('#')[0].split('?')[0]}?enviado=${ok ? 1 : 0}#contacto`, 303);

  const form = await request.formData().catch(() => null);
  if (!form) return reply(false);
  const field = (name: string, max = 500) => String(form.get(name) ?? '').trim().slice(0, max);

  // Trampa para bots: campo oculto que una persona nunca llena. Se responde "ok" para no darles pista.
  if (field('website')) return reply(true);

  // PhoneInput manda el número nacional y la lada aparte
  const phone = `${field('phoneLada')} ${field('phone')}`.trim();
  const email = field('email');
  if (!field('name') || !EMAIL.test(email) || !isValidPhone(phone)) return reply(false);

  const ok = await sendLead({
    title: 'Nuevo mensaje de contacto',
    name: field('name'),
    rows: [
      ['Nombre', field('name')],
      ['Correo', email],
      ['Teléfono', phone],
      ['Prefiere que lo contacten por', field('contactPref') || '—'],
      ['Tipo de proyecto', field('service') || '—'],
    ],
    message: field('message', 2000) || undefined,
    origin: [
      ['Formulario', field('source')],
      ['Idioma', field('lang')],
      ['Página', back],
    ],
    replyTo: email,
  });
  return reply(ok, ok ? 200 : 502);
};
