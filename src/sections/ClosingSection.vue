<script setup lang="ts">
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
</script>

<template>
  <SectionShell
    class="paper-scope border-t border-border bg-background text-foreground"
  >
    <div
      class="flex flex-col items-start gap-[clamp(24px,4vw,56px)] lg:flex-row lg:items-center lg:justify-between"
    >
      <SectionHead
        class="max-w-[620px]"
        mark="Sheet GA-5"
        label="the next drawing · blank"
        title="Assemble yours."
        lede="One clone and the engine answers. What the harness looks like and what it loads: those calls are yours to draw."
      />
      <div class="flex flex-col items-start gap-4 lg:items-end">
        <div class="flex flex-wrap gap-3.5">
          <Button as-child variant="default" size="sheet">
            <a href="https://github.com/galvena/galvena" rel="noopener">Clone the starter</a>
          </Button>
          <Button as-child variant="outline" size="sheet">
            <a href="https://github.com/galvena/framework" rel="noopener">Read the framework</a>
          </Button>
        </div>
        <p
          class="mt-5 max-w-full overflow-x-auto font-mono text-[13px] whitespace-nowrap text-muted-foreground lg:mt-0"
        >
          <span class="text-oxide-deep">$</span>
          <span class="text-foreground">git clone https://github.com/galvena/galvena</span>
        </p>
      </div>
    </div>
  </SectionShell>
</template>
