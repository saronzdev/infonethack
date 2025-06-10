import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate, f as renderComponent } from '../chunks/astro/server_Dllr5Ndf.mjs';
import { $ as $$Layout } from '../chunks/Layout_gikYtzoo.mjs';
import 'dotenv/config';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, date, tags, slug } = Astro2.props;
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="group w-full max-w-2xl bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 border border-muted/20"> <a${addAttribute(`/posts/${slug}`, "href")} class="block p-6"> <div class="flex flex-col gap-4"> <div class="flex items-center justify-between"> <h2 class="text-2xl font-bold text-text group-hover:text-accent transition-colors"> ${title} </h2> <time class="text-sm text-muted"${addAttribute(date, "datetime")}> ${formattedDate} </time> </div> <p class="text-muted line-clamp-2"> ${tags.map((tag) => renderTemplate`<span class="inline-block bg-muted/20 text-muted px-2 py-1 rounded-full text-xs mr-2">${tag}</span>`)} </p> <div class="flex justify-end"> <span class="text-accent text-sm font-medium group-hover:underline"> Leer más → </span> </div> </div> </a> </article>`;
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/components/PostCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const BASE_URL = "http://localhost:3000";
  const fetchPosts = async () => {
    try {
      const response = await fetch(BASE_URL + "/api/posts");
      if (!response.ok) {
        console.error("Error fetching posts:", response.statusText);
        return [];
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      return [];
    }
  };
  const posts = await fetchPosts();
  const isVoid = posts.length === 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-4 flex flex-col items-center gap-2 px-4"> <button type="submit" class="p-4 m-4 bg-surface/80 text-text border-muted rounded-full text-xl cursor-pointer"> <a href="/new">Crear nueva publicación</a> </button> <h2 class="text-2xl p-0 m-0 text-center font-light text-text"> ${isVoid ? "Upss... No hay publicaciones disponibles." : "Publicaciones recientes:"} </h2> <div class="w-full flex flex-col items-center gap-4"> ${!isVoid && posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.title, "tags": post.tags, "date": post.date, "slug": post.slug })}`)} </div> </section> ` })}`;
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/index.astro", void 0);
const $$file = "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
