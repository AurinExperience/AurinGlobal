import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://aurin.consulting',
  // Estático: las páginas no tienen nada que calcular por request. Solo los
  // endpoints marcados con `export const prerender = false` (/api/contact) corren
  // como función de Vercel, como en aurin.mx.
  output: 'static',
  adapter: vercel(),
  // Las URLs son /texas/ (CLAUDE.md). Una sola forma por página: sin esto
  // /texas y /texas/ serían dos URLs con el mismo contenido.
  trailingSlash: 'always',
  // Precompila la página al pasar el mouse sobre el link: el click ya la encuentra lista.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: {
    // Mismo motivo que en aurin.mx: el CSS en archivos aparte bloquea el primer
    // pintado con round trips extra, y estas landings viven de primeras visitas.
    inlineStylesheets: 'always',
  },
});
