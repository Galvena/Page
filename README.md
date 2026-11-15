# galvena/page

The landing page for [Galvena](https://github.com/galvena/framework), the
harness framework for Tauri 2.0. Built with Vue 3, Vite, Tailwind CSS v4, and
[shadcn-vue](https://www.shadcn-vue.com) (Reka UI primitives) — the same Vue
side of the house as the starter's own frontend. The visual identity is the
cyanotype drawing sheet: Prussian blue ground, pale drafting linework, oxide
stamp red. The two typefaces (Big Shoulders, IBM Plex Mono, both OFL) ride in
the bundle.

## Develop it

```sh
npm install
npm run dev        # vite dev server
npm run build      # vue-tsc + vite build → dist/ (then folded into one file)
npm run preview    # serve the build locally
```

The build ends with `scripts/inline-dist.mjs`, which folds the JS module and
CSS into a single standalone `dist/index.html` — fonts ride in as data URIs,
so the built page opens straight from the filesystem (no server, no MIME
errors) exactly as it serves from Pages.

## Publish it

The page deploys to GitHub Pages as a project page, served from
`https://galvena.github.io/Page/`:

1. Push `main` to `github.com/galvena/page`.
2. In the repository settings, set **Pages → Source → GitHub Actions**.

The bundled workflow (`.github/workflows/pages.yml`) installs, builds, and
deploys `dist/` on every push to `main`. Vite's `base` is `"./"`, so all
asset URLs stay relative and the `/page/` subpath works untouched.

## Editing notes

- The theme lives in `src/index.css`: shadcn tokens (`--background`,
  `--primary`, `--border`, …) mapped through `@theme inline`, plus the
  drawing-sheet extras (oxide reds, paper, code-well). The closing section
  flips to drafting bond inside a `.paper-scope` wrapper.
- One section per file under `src/sections/`; the shadcn components
  (`Button`, `Tabs`, `Table`) are the owned copies under
  `src/components/ui/`, extendable with `npx shadcn-vue add`.
- Copy follows the project's house voice: plain, exact, no em dashes, no
  invented numbers. Every claim traces to the framework or starter
  repositories.
