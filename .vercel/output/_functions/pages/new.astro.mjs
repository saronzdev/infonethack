import { c as createComponent, e as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_Dllr5Ndf.mjs';
import { $ as $$Layout } from '../chunks/Layout_gikYtzoo.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="p-4 w-full flex flex-col justify-center items-center"> <h2 class="p-2 text-4xl text-text font-light">Publicaci\xF3n</h2> <form id="form" class="w-full md:w-2/3 md:max-w-3xl p-6 border-2 border-muted rounded-lg shadow-lg"> <div class="mb-6 space-y-2"> <label for="title" class="block text-lg font-medium text-text">T\xEDtulo</label> <input id="title" name="title" type="text" required placeholder="Escribe un t\xEDtulo atractivo..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="date" class="block text-lg font-medium text-text">Fecha y hora</label> <input id="date" name="date" type="datetime-local" required class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none [color-scheme:dark] text-text [&:not(:valid)]:text-muted [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:p-1 [&::-webkit-calendar-picker-indicator]:rounded [&::-webkit-calendar-picker-indicator]:hover:bg-surface/50"> </div> <div class="mb-6 space-y-2"> <label for="tags" class="block text-lg font-medium text-text">Etiquetas</label> <input id="tags" name="tags" type="text" required placeholder="Escribe etiquetas separadas por comas..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="title" class="block text-lg font-medium text-text">Autor</label> <input id="author" name="author" type="text" placeholder="Escribe el nombre del autor..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="body" class="block text-lg font-medium text-text">Contenido</label> <div class="relative"> <textarea id="body" name="md" required placeholder="Escribe tu contenido en Markdown...

# Ejemplo de encabezado y ## Subencabezado

**Texto en negrita** y *texto en cursiva*

- Lista de elementos
- Otro elemento

\`\`\`c\xF3digo\`\`\`" rows="12" class="w-full p-3 border border-muted rounded-md placeholder-muted resize-vertical font-mono text-sm leading-relaxed transition-colors focus:border-primary focus:outline-none text-text resize-none"></textarea> </div> </div> <div class="flex justify-end"> <button type="submit" class="p-4 m-4 bg-surface/80 text-text border-muted rounded-full text-xl mr-2 cursor-pointer">
Publicar
</button> </div> </form> </section> <script type="module">
  import { submitPost } from '../modules/submitPost'

  const form = document.getElementById('form')
  form?.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
      await submitPost(form, BACKEND_URL)
      alert('Post creado exitosamente!')
      form.reset()
      window.location.href = '/'
    } catch (error) {
      console.error('Error al crear el post:', error)
      alert(error.message || 'Error al crear el post. Por favor, intenta de nuevo.')
    }
  })
<\/script>`], ["", `<section class="p-4 w-full flex flex-col justify-center items-center"> <h2 class="p-2 text-4xl text-text font-light">Publicaci\xF3n</h2> <form id="form" class="w-full md:w-2/3 md:max-w-3xl p-6 border-2 border-muted rounded-lg shadow-lg"> <div class="mb-6 space-y-2"> <label for="title" class="block text-lg font-medium text-text">T\xEDtulo</label> <input id="title" name="title" type="text" required placeholder="Escribe un t\xEDtulo atractivo..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="date" class="block text-lg font-medium text-text">Fecha y hora</label> <input id="date" name="date" type="datetime-local" required class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none [color-scheme:dark] text-text [&:not(:valid)]:text-muted [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:p-1 [&::-webkit-calendar-picker-indicator]:rounded [&::-webkit-calendar-picker-indicator]:hover:bg-surface/50"> </div> <div class="mb-6 space-y-2"> <label for="tags" class="block text-lg font-medium text-text">Etiquetas</label> <input id="tags" name="tags" type="text" required placeholder="Escribe etiquetas separadas por comas..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="title" class="block text-lg font-medium text-text">Autor</label> <input id="author" name="author" type="text" placeholder="Escribe el nombre del autor..." class="w-full p-3 border border-muted rounded-md placeholder-muted transition-colors focus:border-primary focus:outline-none text-text"> </div> <div class="mb-6 space-y-2"> <label for="body" class="block text-lg font-medium text-text">Contenido</label> <div class="relative"> <textarea id="body" name="md" required placeholder="Escribe tu contenido en Markdown...

# Ejemplo de encabezado y ## Subencabezado

**Texto en negrita** y *texto en cursiva*

- Lista de elementos
- Otro elemento

\\\`\\\`\\\`c\xF3digo\\\`\\\`\\\`" rows="12" class="w-full p-3 border border-muted rounded-md placeholder-muted resize-vertical font-mono text-sm leading-relaxed transition-colors focus:border-primary focus:outline-none text-text resize-none"></textarea> </div> </div> <div class="flex justify-end"> <button type="submit" class="p-4 m-4 bg-surface/80 text-text border-muted rounded-full text-xl mr-2 cursor-pointer">
Publicar
</button> </div> </form> </section> <script type="module">
  import { submitPost } from '../modules/submitPost'

  const form = document.getElementById('form')
  form?.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
      await submitPost(form, BACKEND_URL)
      alert('Post creado exitosamente!')
      form.reset()
      window.location.href = '/'
    } catch (error) {
      console.error('Error al crear el post:', error)
      alert(error.message || 'Error al crear el post. Por favor, intenta de nuevo.')
    }
  })
<\/script>`])), maybeRenderHead());
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/components/Form.astro", void 0);

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", $$Form, {})} ` })}`;
}, "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/new.astro", void 0);

const $$file = "/home/ronald/Dev/web/InfoNetHack/fronted/src/pages/new.astro";
const $$url = "/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
