<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/composables/useReveal";

const wrap = ref<HTMLElement | null>(null);
useReveal(wrap, "stamped");
</script>

<template>
  <section class="paper-scope border-t border-border bg-background text-foreground">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)] py-[clamp(64px,8vw,120px)]">
      <div
        class="grid grid-cols-1 items-center gap-[clamp(30px,4vw,64px)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]"
      >
        <div>
          <p class="eyebrow"><b>Sheet GA-5</b> · the next drawing · blank</p>
          <h2
            class="mt-4 font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
          >
            Assemble yours.
          </h2>
          <p class="mt-4 max-w-[62ch] text-[17px] text-[var(--muted-foreground)]">
            One clone and the engine answers. What the harness looks like and
            what it loads: those calls are yours to draw.
          </p>
          <div class="mt-7 flex flex-wrap gap-3.5">
            <Button as-child variant="default" size="sheet">
              <a href="https://github.com/galvena/galvena" rel="noopener">Clone the starter</a>
            </Button>
            <Button as-child variant="outline" size="sheet">
              <a href="https://github.com/galvena/framework" rel="noopener">Read the framework</a>
            </Button>
          </div>
          <p
            class="mt-5 max-w-full overflow-x-auto font-mono text-[13px] whitespace-nowrap text-paper-muted"
          >
            <span class="text-oxide-deep">$</span>
            <span class="text-paper-ink">git clone https://github.com/galvena/galvena</span>
          </p>
        </div>
        <div ref="wrap" class="stampwrap flex justify-center max-lg:justify-start" aria-hidden="true">
          <div class="stamp">Clone it<small>galvena · ga-1000 · rev 1.0</small></div>
        </div>
      </div>
    </div>
  </section>
</template>
