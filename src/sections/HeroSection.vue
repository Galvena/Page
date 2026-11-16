<script setup lang="ts">
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/site/SectionShell.vue";
import Eyebrow from "@/components/site/Eyebrow.vue";
import HarnessPreview from "@/components/site/HarnessPreview.vue";

</script>

<template>
  <SectionShell id="top">
    <div
      class="grid grid-cols-1 items-stretch gap-[clamp(36px,5vw,72px)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)]"
    >
      <div>
        <Eyebrow mark="GA-1000" label="general arrangement · rev 1.0" class="mb-6" />
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

      <div class="flex h-full justify-center lg:justify-end">
        <HarnessPreview class="h-full w-full max-w-[520px]" />
      </div>
    </div>

  </SectionShell>
</template>
