import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps asset URLs relative, so the build serves from the
// GitHub Pages project subpath (galvena.github.io/page/) untouched.
// whitespace "preserve" keeps <pre> blocks (code, the TUI mock) exact.
export default defineConfig({
  base: "./",
  plugins: [
    vue({ template: { compilerOptions: { whitespace: "preserve" } } }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
