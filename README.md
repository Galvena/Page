# galvena/page

The landing page for [Galvena](https://github.com/galvena/framework), the
harness framework for Tauri 2.0. Live at
**https://galvena.github.io/Page/**.

## How it is built

Vue 3 + Vite + TypeScript, Tailwind CSS v4, and
[shadcn-vue](https://www.shadcn-vue.com) (Reka UI) — the same Vue side of the
house as the starter's frontend. One page: sections live in `src/sections`,
the theme in `src/index.css`, owned shadcn components in
`src/components/ui`. Deploys itself: a push to `main` builds and publishes
`dist/` through GitHub Actions.

```sh
npm install
npm run dev       # vite dev server
npm run build     # vue-tsc + vite build → dist/
npm run preview   # serve the build locally
```

## Contribute

Small honest changes beat large clever ones. The page is the frame's front
door: keep every claim traceable to the framework or starter repositories,
and fix framework behavior in
[galvena/framework](https://github.com/galvena/framework) — never here. PRs
run the build and must pass it.
