import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_Dllr5Ndf.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" class="w-full h-full m-0"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Noticias sobre desarrollo, tecnología, hacking y mucho más."><link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>InfoNetHack</title>${renderHead()}</head> <body class="w-full min-h-screen m-0 bg-background flex flex-col"> <header class="sticky top-0 p-4 w-full bg-surface shadow-md z-50 flex flex-col items-center justify-center"> <h1 class="py-2 m-0 text-4xl md:text-5xl font-semibold text-text">InfoNetHack</h1> <span class="text-sm md:text-xl text-center text-muted">
Noticias sobre desarrollo, tecnología, hacking y mucho más.
</span> </header> <main class="w-full flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="w-full p-4 text-white bg-surface mt-auto"> <span class="text-muted">&copy; Todos los derechos reservados</span> </footer> </body></html>`;
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
