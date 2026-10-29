/**
 * Genera el cielo de fondo de las secciones oscuras (public/img/sky*.avif), con el carácter de la
 * guía de marca: estrellas blancas y lima y una franja tipo Vía Láctea con neblina teal/lima,
 * sobre transparente. Dos capas: `sky` (fija) y `sky-twinkle` (estrellas brillantes que titilan
 * con opacidad en base.css). La intensidad final se ajusta en CSS (`--sky-opacity`), no aquí.
 * Uso: node scripts/sky.mjs
 */
import sharp from 'sharp';

const W = 2400, H = 1500;
const STARS = 3200;      // estrellas sueltas
const BAND = 18000;      // estrellas extra dentro de la franja
const BAND_WIDTH = 230;  // ancho de la franja (px)
const TWINKLE = 120;     // estrellas que titilan
const LIME = [214, 228, 40], WHITE = [255, 255, 255], BLUE = [205, 225, 255];

// Aleatorio con semilla: el cielo sale igual en cada corrida
let seed = 1998;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const gauss = () => (rand() + rand() + rand() - 1.5) / 1.5;

// Franja diagonal: de abajo a la izquierda hacia arriba a la derecha, como en la referencia
const bandY = (x) => H * 1.02 - x * 0.62;

function stars(count, { band = false, lime, big, alpha }) {
  const px = new Float32Array(W * H * 4); // premultiplicado
  const plot = (x, y, [r, g, b], a) => {
    if (x < 0 || y < 0 || x >= W || y >= H || a < 0.003) return;
    const i = (y * W + x) * 4, keep = 1 - a;
    px[i] = px[i] * keep + r * a; px[i + 1] = px[i + 1] * keep + g * a; px[i + 2] = px[i + 2] * keep + b * a;
    px[i + 3] = px[i + 3] * keep + a;
  };
  for (let n = 0; n < count; n++) {
    const x = rand() * W;
    const y = band ? bandY(x) + gauss() * BAND_WIDTH : rand() * H;
    const c = rand(), color = c < lime ? LIME : c < lime + 0.2 ? BLUE : WHITE;
    const radius = rand() < big ? 1.3 + rand() * 1.3 : 0.6 + rand() * 0.5;
    const a = alpha[0] + rand() ** 2 * (alpha[1] - alpha[0]);
    const R = Math.ceil(radius * 2.5), cx = Math.round(x), cy = Math.round(y);
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
      const d = Math.hypot(dx + cx - x, dy + cy - y) / radius;
      plot(cx + dx, cy + dy, color, a * Math.exp(-d * d * 1.4));
    }
  }
  const out = Buffer.alloc(W * H * 4);
  for (let i = 0; i < px.length; i += 4) {
    const a = px[i + 3];
    for (let c = 0; c < 3; c++) out[i + c] = a ? Math.min(255, Math.round(px[i + c] / a)) : 0;
    out[i + 3] = Math.round(Math.min(1, a) * 255);
  }
  return sharp(out, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer();
}

// Neblina: nubes suaves a lo largo de la franja, dibujadas en chico y agrandadas (sale lisa)
async function haze() {
  const w = 240, h = 150, s = W / w, buf = Buffer.alloc(w * h * 4);
  // Muchas nubes chicas y desiguales: la franja sale con manchas, no como un tubo liso
  const clouds = Array.from({ length: 70 }, () => {
    const x = rand() * W;
    return { x: x / s, y: (bandY(x) + gauss() * BAND_WIDTH * 0.7) / s, r: (35 + rand() * 95) / s, teal: x > W * 0.45 ? 0.8 : 0.3, a: 0.03 + rand() * 0.06 };
  });
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let a = 0, teal = 0;
    for (const c of clouds) {
      const k = c.a * Math.exp(-((x - c.x) ** 2 + (y - c.y) ** 2) / (2 * c.r * c.r));
      a += k; teal += k * c.teal;
    }
    const t = a ? teal / a : 0, i = (y * w + x) * 4;
    // Curva suave en vez de un tope: sin bordes planos. Donde más se junta, un poco más claro.
    const soft = 1 - Math.exp(-a / 0.07);
    buf[i] = Math.round(120 - 50 * t + 50 * soft); buf[i + 1] = Math.round(190 + 20 * soft); buf[i + 2] = Math.round(70 + 110 * t + 30 * soft);
    buf[i + 3] = Math.round(0.2 * soft * 255);
  }
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } }).resize(W, H, { kernel: 'cubic' }).blur(10).png().toBuffer();
}

// Cada capa en dos tamaños: escritorio y celular (`-m`, la mitad), elegidos con media query en base.css
const avif = async (input, file) => {
  await sharp(input).avif({ quality: 36, effort: 9 }).toFile(file);
  await sharp(input).resize(W / 2).avif({ quality: 40, effort: 9 }).toFile(file.replace('.avif', '-m.avif'));
};
const canvas = () => sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } });

const layers = [await haze(), await stars(STARS, { lime: 0.22, big: 0.05, alpha: [0.2, 0.9] }), await stars(BAND, { band: true, lime: 0.25, big: 0.008, alpha: [0.1, 0.5] })];
await avif(await canvas().composite(layers.map((input) => ({ input }))).png().toBuffer(), 'public/img/sky.avif');
await avif(await stars(TWINKLE, { lime: 0.4, big: 0.6, alpha: [0.6, 1] }), 'public/img/sky-twinkle.avif');
console.log('ok');
