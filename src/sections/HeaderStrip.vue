<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import ColorSchemeToggle from "@/components/site/ColorSchemeToggle.vue";

const links = [
  { href: "#starter", label: "The starter" },
  { href: "#faces", label: "Three faces" },
  { href: "#ga", label: "Architecture" },
  { href: "#crates", label: "The crates" },
  { href: "#frame", label: "The frame" },
  { href: "#rules", label: "Sponsors" },
];

const open = ref(false);
const active = ref("");
const watched: [string, string][] = [
  ["starter", "The starter"],
  ["faces", "Three faces"],
  ["ga", "Architecture"],
  ["crates", "The crates"],
  ["frame", "The frame"],
  ["rules", "Sponsors"],
  ["top", ""],
];

let io: IntersectionObserver | undefined;
onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        active.value = entry.target.id;
      }
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  for (const [id] of watched) {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  }
});
onBeforeUnmount(() => io?.disconnect());

function linkClass(href: string) {
  const id = href.slice(1);
  return [
    "px-1 py-1.5 font-mono text-[11px] uppercase tracking-[0.09em] whitespace-nowrap transition-colors rounded-sm",
    active.value === id
      ? "bg-[var(--ink-a07)] text-foreground shadow-[inset_0_-2px_0_var(--oxide)]"
      : "text-ink-2 hover:text-foreground hover:bg-[var(--ink-a05)]",
  ];
}

function close() {
  open.value = false;
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background">
    <div
      class="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-3 gap-y-2 px-[clamp(16px,3vw,44px)] py-2 lg:py-2.5"
    >
      <a href="#top" class="flex flex-col no-underline">
        <b
          class="font-display text-[22px] font-bold uppercase leading-none tracking-[0.08em] text-foreground"
          >Galvena</b
        >
        <span
          class="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-3"
          >The Harness Framework</span
        >
      </a>

      <nav
        id="site-menu"
        aria-label="Sections"
        class="max-md:order-last max-md:w-full md:flex md:items-center"
        :class="open ? 'flex flex-col' : 'hidden'"
        @click="close()"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="linkClass(link.href)"
          class="max-md:px-2 max-md:py-2"
          >{{ link.label }}</a
        >
        <span
          class="my-1 border-t border-line max-md:block md:hidden"
          aria-hidden="true"
        ></span>
        <a
          href="https://github.com/galvena/framework"
          rel="noopener"
          class="inline-flex items-center gap-2 px-2 py-2 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-2 transition-colors hover:text-foreground md:hidden"
        >
          <svg viewBox="0 0 16 16" class="size-4 fill-current" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          <span class="max-lg:hidden">GitHub</span>
        </a>
        <ColorSchemeToggle variant="inline" class="mt-2 md:hidden" />
      </nav>

      <div class="hidden items-center gap-3 md:inline-flex">
        <ColorSchemeToggle variant="dropdown" />
        <span class="h-5 w-px bg-border" aria-hidden="true"></span>
        <a
          href="https://github.com/galvena/framework"
          rel="noopener"
          class="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-2 no-underline transition-colors hover:text-foreground"
        >
          <svg viewBox="0 0 16 16" class="size-4 fill-current" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          <span class="max-lg:hidden">GitHub</span>
        </a>
      </div>

      <button
        type="button"
        class="thm-btn md:hidden"
        :aria-expanded="open"
        aria-controls="site-menu"
        @click="open = !open"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <template v-if="open">
            <path d="M2 2l8 8M10 2l-8 8" />
          </template>
          <template v-else>
            <path d="M1 2.5h10M1 6h10M1 9.5h10" />
          </template>
        </svg>
        <span>{{ open ? "Close" : "Menu" }}</span>
      </button>
    </div>
  </header>
</template>
