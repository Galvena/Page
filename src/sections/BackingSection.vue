<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
import SlotPlate from "@/components/site/SlotPlate.vue";

const goldSlots = [1, 2, 3];
</script>

<template>
  <SectionShell
    id="sponsors-cloud"
    class="border-y border-border bg-[var(--ink-a16)] py-[clamp(44px,6vw,72px)]!"
  >
    <div
      class="flex flex-col items-start justify-between gap-[clamp(16px,3vw,32px)] lg:flex-row lg:items-end"
    >
      <SectionHead
        size="sm"
        mark="The backing"
        label="sponsors, noted first"
        title="Sponsors."
        lede="Galvena is MIT licensed and free. Sponsorship keeps it maintained. Gold marks land here, on the repositories, and on every release."
      />
      <a
        href="#rules"
        class="mb-1 inline-flex items-center gap-2 border-b border-border pb-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-oxide-hi no-underline transition-colors hover:border-[var(--oxide-hi)]"
      >
        Sponsorship rules
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" class="size-3" aria-hidden="true">
          <path d="M6 1v9M2.5 6.5L6 10l3.5-3.5" />
        </svg>
      </a>
    </div>

    <div class="grid gap-3">
      <div class="flex flex-wrap gap-3">
        <SlotPlate tier="platinum" />
      </div>
      <div class="flex flex-wrap gap-3">
        <SlotPlate v-for="n in goldSlots" :key="n" tier="gold" />
      </div>
    </div>
  </SectionShell>
</template>
