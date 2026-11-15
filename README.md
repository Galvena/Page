# galvena/page

The landing page for [Galvena](https://github.com/galvena/framework), the
harness framework for Tauri 2.0. One self-contained `index.html`: no build
step, no external requests, no dependencies. The two typefaces (Big Shoulders,
IBM Plex Mono, both OFL) ride embedded as data URIs.

## Run it

Open `index.html` in a browser. That is the whole story.

## Publish it

The page deploys to GitHub Pages as a project page, served from
`https://galvena.github.io/page/`:

1. Push `main` to `github.com/galvena/page`.
2. In the repository settings, set **Pages → Source → GitHub Actions**.

The bundled workflow (`.github/workflows/pages.yml`) uploads the repository
root and deploys on every push to `main`. All asset references in the page
are relative, so the `/page/` subpath works untouched.

## Editing notes

- Copy follows the project's house voice: plain, exact, no em dashes, no
  invented numbers. Every claim traces to the framework or starter
  repositories.
- Tokens live on `:root` at the top of the `<style>` block; the palette is
  the cyanotype drawing sheet (Prussian blue ground, pale linework, oxide
  stamp red).
