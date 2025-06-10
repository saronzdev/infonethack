import { c as createComponent, a as createAstro, f as renderComponent, e as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_Dllr5Ndf.mjs';
import { marked } from 'marked';
import { $ as $$Layout } from '../../chunks/Layout_gikYtzoo.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const BASE_URL = "http://localhost:3000";
  const { slug } = Astro2.params;
  const fetchPost = async () => {
    try {
      const response = await fetch(BASE_URL + `/api/posts/${slug}`);
      if (!response.ok) {
        console.error("Error fetching post:", response.statusText);
        return null;
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  };
  const post = await fetchPost();
  if (!post) {
    return Astro2.redirect("/404");
  }
  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const html = marked(post.body);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-9/12 mx-auto px-8 py-8"> <header class="pb-8 border-b-2 border-slate-600"> <h1 class="text-4xl md:text-5xl font-bold text-slate-50 mb-4 leading-tight"> ${post.title} </h1> <div class="flex flex-wrap gap-6 items-center mb-6 text-sm text-slate-400"> <div class="flex items-center gap-2"> <span class="text-base">👤</span> <span>${post.author === "Unknown" ? "Anónimo" : post.author}</span> </div> <div class="flex items-center gap-2"> <span class="text-base">📅</span> <span>${formattedDate}</span> </div> </div> <div class="flex flex-wrap gap-2 mt-4"> ${post.tags.map((tag) => renderTemplate`<span class="bg-slate-800 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-slate-600 hover:bg-slate-700 hover:border-blue-400 transition-all duration-200"> ${tag} </span>`)} </div> </header> <article class="post-content">${unescapeHTML(html)}</article> </div>` })}`;
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/posts/[slug].astro", void 0);
const $$file = "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
