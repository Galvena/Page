<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <section id="top" class="pt-[clamp(56px,8vw,110px)]">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)]">
      <div
        class="grid grid-cols-1 items-start gap-[clamp(36px,5vw,72px)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)]"
      >
        <div>
          <p class="eyebrow mb-6"><b>GA-1000</b> · general arrangement · rev 1.0</p>
          <h1
            class="font-display text-[clamp(54px,7.4vw,99px)] leading-[0.97] font-bold tracking-[-0.015em]"
          >
            The frame your harness stands&nbsp;on.
          </h1>
          <p class="mt-6 max-w-[62ch] text-lg text-ink-2">
            Galvena is a harness framework for Tauri 2.0. Ten Rust crates keep
            the plumbing: the engine, the bus, the bridge, the vault. A
            developer assembles the harness on top, with their name, their
            panels, their policies.
          </p>
          <div class="mt-8 flex flex-wrap gap-3.5">
            <Button as-child variant="default" size="sheet">
              <a href="https://github.com/galvena/galvena" rel="noopener">Clone the starter</a>
            </Button>
            <Button as-child variant="sheet-outline" size="sheet">
              <a href="#ga">Read the architecture</a>
            </Button>
          </div>
          <p
            class="mt-5 max-w-full overflow-x-auto pb-0.5 font-mono text-[13px] whitespace-nowrap text-ink-3"
          >
            <span class="text-oxide-hi">$</span>
            <span class="text-foreground">git clone https://github.com/galvena/galvena</span>
            <span> # the starter harness</span>
          </p>
        </div>

        <aside
          aria-label="Title block"
          class="rounded-sm border border-border max-lg:max-w-[560px]"
        >
          <header class="blocklabel">
            <span>Title block</span><b>Sheet 1 of 5</b>
          </header>
          <table class="kv w-full border-collapse">
            <tbody>
              <tr>
                <td class="k w-[38%] px-3.5 pt-3 pb-2.5 text-[10.5px]">Drawing no</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">GA-1000</td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-3 pb-2.5 text-[10.5px]">Subject</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">The harness frame</td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-3 pb-2.5 text-[10.5px]">Crates</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">10<small>ruler below, to scale</small></td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-3 pb-2.5 text-[10.5px]">Engine</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">
                  127.0.0.1:8317<small>HTTP · WebSocket · localhost only</small>
                </td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-3 pb-2.5 text-[10.5px]">Webview floor</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">
                  WebKitGTK<small>WKWebView · WebView2 · WebKitGTK, via wry</small>
                </td>
              </tr>
              <tr>
                <td class="k px-3.5 pt-3 pb-2.5 text-[10.5px]">Rev</td>
                <td class="v px-3.5 py-2.5 text-[12.5px]">1.0 · MIT</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>

      <div
        class="chain mt-[clamp(44px,6vw,72px)] flex flex-wrap items-center gap-[18px] border-y border-[rgba(233,241,250,0.11)] py-[18px]"
      >
        <span
          class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3"
          >Policy flows</span
        >
        <ol class="flex list-none flex-wrap items-center gap-3 p-0">
          <li
            v-for="role in ['Implementor', 'Subscription', 'Business', 'User']"
            :key="role"
            class="font-mono text-xs uppercase tracking-[0.1em] text-ink-2"
          >
            {{ role }}
          </li>
        </ol>
        <span class="font-mono text-[11.5px] tracking-[0.03em] text-ink-3 max-sm:basis-full">
          each level tightens what it inherits, never loosens
        </span>
      </div>
    </div>
  </section>
</template>
