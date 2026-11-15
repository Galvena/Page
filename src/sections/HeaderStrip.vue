<script setup lang="ts">
const links = [
  { href: "#ga", label: "Architecture" },
  { href: "#faces", label: "Three faces" },
  { href: "#frame", label: "The frame" },
  { href: "#starter", label: "The starter" },
  { href: "#sponsors", label: "Sponsors" },
];
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background">
    <div
      class="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-[clamp(20px,4vw,44px)] py-3"
    >
      <a href="#top" class="flex items-baseline gap-3 no-underline">
        <b
          class="font-display text-[25px] font-bold uppercase tracking-[0.08em] text-foreground"
          >Galvena</b
        >
        <span
          class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3 max-md:hidden"
          >harness framework · Tauri 2.0</span
        >
      </a>
      <nav class="flex flex-wrap items-center gap-x-[clamp(14px,2.4vw,30px)] gap-y-2" aria-label="Sections">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="border-b border-transparent px-0.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-2 transition-colors hover:border-border hover:text-foreground"
          >{{ link.label }}</a
        >
        <a
          href="https://github.com/galvena/framework"
          rel="noopener"
          class="inline-flex items-center gap-2 border-b border-transparent px-0.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-2 transition-colors hover:border-border hover:text-foreground"
        >
          <svg viewBox="0 0 16 16" class="size-4 fill-current" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>
