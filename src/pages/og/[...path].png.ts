import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { create, type Font } from 'fontkitten';
import { indexablePages, ogPath } from '@/lib/pages';

/*
 * Imagen OG por página (1200×630) con su título, generada en el build.
 * /og/index.png → "/", /og/en/texas.png → "/en/texas/". Misma pieza que en
 * aurin.mx: con una sola imagen genérica, cada página citada por ChatGPT,
 * Perplexity o un link compartido mostraba la misma miniatura.
 *
 * El texto se convierte a trazos con fontkitten: así no depende de las fuentes
 * instaladas donde corra el build (un <text> en el SVG saldría en blanco).
 */

const W = 1200;
const H = 630;
const BG = '#000000';
const YELLOW = '#D0DF00';
const PAD = 80;

export const getStaticPaths = (() =>
  indexablePages().map((page) => ({
    params: { path: ogPath(page.path).replace(/^\/og\/|\.png$/g, '') },
    props: { title: page.title, pagePath: page.path },
  }))) satisfies GetStaticPaths;

const fromPublic = (p: string) => readFile(join(process.cwd(), 'public', p));

let assets: Promise<{ fonts: Font[]; logo: string }> | undefined;

async function loadAssets() {
  const [latin, latinExt, logo] = await Promise.all([
    fromPublic('fonts/titillium-web-700-normal-latin.woff2'),
    fromPublic('fonts/titillium-web-700-normal-latin-ext.woff2'),
    fromPublic('img/aurin.svg'),
  ]);
  return {
    fonts: [latin, latinExt].map((b) => create(b) as Font),
    logo: logo.toString('base64'),
  };
}

function glyphFor(fonts: Font[], char: string) {
  const cp = char.codePointAt(0)!;
  for (const font of fonts) {
    const glyph = font.glyphForCodePoint(cp);
    if (glyph.id !== 0) return { font, glyph };
  }
  return { font: fonts[0], glyph: fonts[0].glyphForCodePoint(cp) };
}

function measure(fonts: Font[], text: string, size: number) {
  let w = 0;
  for (const ch of text) {
    const { font, glyph } = glyphFor(fonts, ch);
    w += (glyph.advanceWidth * size) / font.unitsPerEm;
  }
  return w;
}

function wrap(fonts: Font[], text: string, size: number, maxWidth: number) {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (line && measure(fonts, next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textPaths(fonts: Font[], text: string, size: number, x: number, y: number, fill: string) {
  let out = '';
  for (const ch of text) {
    const { font, glyph } = glyphFor(fonts, ch);
    const s = size / font.unitsPerEm;
    const d = glyph.path.toSVG();
    if (d) out += `<path transform="translate(${x.toFixed(1)} ${y}) scale(${s} ${-s})" d="${d}"/>`;
    x += glyph.advanceWidth * s;
  }
  return `<g fill="${fill}">${out}</g>`;
}

// "Agencia de diseño web … de Texas | Aurin" → "Agencia de diseño web … de Texas"
const cleanTitle = (raw: string) => raw.split(' | ').find((part) => part.trim() !== 'Aurin')?.trim() || 'Aurin';

export const GET: APIRoute = async ({ props }) => {
  const { title, pagePath } = props as { title: string; pagePath: string };
  assets ??= loadAssets();
  const { fonts, logo } = await assets;

  // Títulos largos bajan de tamaño antes de cortarse a tres líneas.
  const maxWidth = W - PAD * 2;
  let size = 76;
  let lines = wrap(fonts, cleanTitle(title), size, maxWidth);
  if (lines.length > 2) {
    size = 60;
    lines = wrap(fonts, cleanTitle(title), size, maxWidth).slice(0, 3);
  }
  const lineHeight = size * 1.12;
  const lastBaseline = 470;
  const firstBaseline = lastBaseline - lineHeight * (lines.length - 1);
  const titleSvg = lines
    .map((line, i) => textPaths(fonts, line, size, PAD, firstBaseline + i * lineHeight, '#FFFFFF'))
    .join('');
  const footer = textPaths(fonts, `aurinux.com${pagePath === '/' ? '' : pagePath.replace(/\/$/, '')}`, 28, PAD, 560, '#A0A0A0');

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs><radialGradient id="glow" cx="0.85" cy="0.25" r="0.85">
      <stop offset="0%" stop-color="${YELLOW}" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="${YELLOW}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${YELLOW}" stop-opacity="0"/>
    </radialGradient></defs>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
    <image x="${PAD}" y="${PAD}" width="161" height="48" xlink:href="data:image/svg+xml;base64,${logo}"/>
    <rect x="${PAD}" y="${firstBaseline - size - 28}" width="96" height="5" fill="${YELLOW}"/>
    ${titleSvg}
    ${footer}
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
