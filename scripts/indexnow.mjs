// Avisa a IndexNow (Bing, Yandex, Seznam, Naver; Bing alimenta a ChatGPT y Copilot) de todas las URLs del
// sitemap publicado. Correrlo después de publicar páginas nuevas: node scripts/indexnow.mjs
// Google no usa IndexNow: le llega por el sitemap (Search Console).
// La clave es pública a propósito: se comprueba en https://aurin.consulting/<clave>.txt
const KEY = '855464b9ebb572c03dd6f35b4e9591e1';
const HOST = 'aurin.consulting';

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} (${urlList.length} URLs)`);
