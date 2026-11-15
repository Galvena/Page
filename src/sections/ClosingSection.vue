<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/composables/useReveal";
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";

const wrap = ref<HTMLElement | null>(null);
useReveal(wrap, "stamped");
</script>

<template>
  <SectionShell
    class="paper-scope border-t border-border bg-background text-foreground"
  >
    <SectionHead
      mark="Sheet GA-5"
      label="the next drawing · blank"
      title="Assemble yours."
      lede="One clone and the engine answers. What the harness looks like and what it loads: those calls are yours to draw."
    />
    <div
      class="grid grid-cols-1 items-center gap-[clamp(30px,4vw,64px)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]"
    >
      <div class="max-lg:order-first">
        <div class="flex flex-wrap gap-3.5">
          <Button as-child variant="default" size="sheet">
            <a href="https://github.com/galvena/galvena" rel="noopener">Clone the starter</a>
          </Button>
          <Button as-child variant="outline" size="sheet">
            <a href="https://github.com/galvena/framework" rel="noopener">Read the framework</a>
          </Button>
        </div>
        <p
          class="mt-5 max-w-full overflow-x-auto font-mono text-[13px] whitespace-nowrap text-muted-foreground"
        >
          <span class="text-oxide-deep">$</span>
          <span class="text-foreground">git clone https://github.com/galvena/galvena</span>
        </p>
      </div>
      <div ref="wrap" class="stampwrap flex justify-center max-lg:justify-start" aria-hidden="true">
        <div class="stamp">Clone it<small>galvena · ga-1000 · rev 1.0</small></div>
      </div>
    </div>
  </SectionShell>
</template>
