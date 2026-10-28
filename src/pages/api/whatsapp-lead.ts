import type { APIRoute } from 'astro';
import { sendLead } from '@/lib/mail';
import { isValidPhone } from '@/lib/phone';

/*
 * Registro del mini-formulario del botón de WhatsApp (nombre, teléfono, mensaje), como en aurin.mx.
 * El navegador abre WhatsApp con el mensaje en paralelo; este correo es el respaldo por si la
 * persona no termina de enviarlo allá.
 */
export const prerender = false;

const json = (body: object, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const data: Record<string, unknown> | null = await request.json().catch(() => null);
  if (!data) return json({ error: 'JSON inválido' }, 400);

  const nombre = String(data.nombre ?? '').trim().slice(0, 100);
  const telefono = String(data.telefono ?? '').trim().slice(0, 30);
  const mensaje = String(data.mensaje ?? '').trim().slice(0, 1000);

  // Honeypot: campo invisible que solo llenan los bots. Se responde 200 para no darles pista.
  if (data.empresa) return json({ success: true }, 200);
  if (!nombre || !mensaje) return json({ error: 'Nombre y mensaje requeridos' }, 400);
  if (!isValidPhone(telefono)) return json({ error: 'Teléfono inválido' }, 400);

  const ok = await sendLead({
    title: 'Nuevo mensaje por WhatsApp',
    name: nombre,
    rows: [
      ['Nombre', nombre],
      ['WhatsApp', telefono],
      ['Contactar por', 'WhatsApp (se abrió el chat con este mensaje)'],
    ],
    message: mensaje,
    origin: [
      ['Página', String(data.origen ?? '').slice(0, 500)],
      ['Procedencia', String(data.referrer ?? 'Directo').slice(0, 500)],
    ],
  });
  return ok ? json({ success: true }, 200) : json({ error: 'No se pudo enviar' }, 500);
};
