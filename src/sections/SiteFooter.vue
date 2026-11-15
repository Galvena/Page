<script setup lang="ts">
const links = [
  { href: "https://github.com/galvena/framework", label: "Framework" },
  { href: "https://github.com/galvena/galvena", label: "Starter" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "https://github.com/galvena/framework/blob/1.x/LICENSE", label: "MIT license" },
];
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)] pt-[clamp(36px,5vw,56px)] pb-[clamp(30px,4vw,44px)]"
    >
      <div class="grid grid-cols-1 gap-[clamp(28px,4vw,56px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div class="rounded-sm border border-border">
          <header class="blocklabel !text-[10px]">
            <span>Title block · sheet GA-1000</span>
          </header>
          <table class="kv w-full border-collapse">
            <tbody>
              <tr>
                <td class="k w-[34%] px-3.5 pt-2.5 pb-2 text-[9.5px]">Drawn by</td>
                <td class="px-3.5 py-2 text-[11.5px]">the roadmap, in epochs</td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-2.5 pb-2 text-[9.5px]">Checked by</td>
                <td class="px-3.5 py-2 text-[11.5px]">fmt · clippy · test · smoke, every PR</td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-2.5 pb-2 text-[9.5px]">Approved by</td>
                <td class="px-3.5 py-2 text-[11.5px]">you, at first clone</td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-2.5 pb-2 text-[9.5px]">Sources</td>
                <td class="px-3.5 py-2 text-[11.5px]">framework · galvena · docs/architecture.md</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav class="mt-1 flex flex-wrap content-start gap-x-[26px] gap-y-3" aria-label="Footer">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :rel="link.href.startsWith('http') ? 'noopener' : undefined"
            class="border-b border-border pb-0.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-2 no-underline hover:border-[var(--ink-3)] hover:text-foreground"
            >{{ link.label }}</a
          >
        </nav>
      </div>
      <div
        class="mt-[clamp(28px,4vw,44px)] flex flex-wrap justify-between gap-3.5 border-t border-[rgba(233,241,250,0.11)] pt-[18px] font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3"
      >
        <span><b class="font-normal text-ink-2">Galvena</b> · the harness framework for Tauri 2.0</span>
        <span>no account · no cloud · no telemetry</span>
        <span>MIT</span>
      </div>
    </div>
  </footer>
</template>
