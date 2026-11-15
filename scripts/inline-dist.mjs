/**
 * Post-build: fold dist's JS module and stylesheet into dist/index.html.
 *
 * A built Vite app loads its entry as `<script type="module" src=…>`, and
 * module scripts are strictly checked for CORS and MIME — so opening the
 * file straight from disk (file://, opaque origin) or through a server that
 * skips Content-Type fails with "disallowed MIME type". Inlining removes
 * every subresource fetch: the page opens from the filesystem again, and
 * GitHub Pages serves the same file untouched. Fonts stay as files; they are
 * plain subresources and load fine from file://.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const htmlPath = join(dist, "index.html");
let html = readFileSync(htmlPath, "utf8");

// inline the module entry; escape `</script` so the bundle cannot close its own tag
html = html.replace(
  /<script type="module"[^>]*\ssrc="([^"]+)"[^>]*><\/script>/g,
  (_, src) => {
    const js = readFileSync(join(dist, src.replace(/^\.\//, "")), "utf8")
      .replace(/<\/script/gi, "<\\/script");
    return `<script type="module">\n${js}\n</script>`;
  },
);

// inline the stylesheet
html = html.replace(
  /<link rel="stylesheet"[^>]*\shref="([^"]+)"[^>]*>/g,
  (_, href) => {
    const css = readFileSync(join(dist, href.replace(/^\.\//, "")), "utf8");
    return `<style>\n${css}\n</style>`;
  },
);

// a preloaded module no longer exists as a fetch target
html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");

writeFileSync(htmlPath, html);

const leftover = [...html.matchAll(/(?:src|href)="(\.\/assets\/[^"]+)"/g)].map(
  (m) => m[1],
);
console.log(
  `inlined; remaining ./assets references: ${leftover.length ? leftover.join(", ") : "none (fonts load lazily via CSS url())"}`,
);
