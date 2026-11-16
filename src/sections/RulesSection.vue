<script setup lang="ts">
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";

const tiers = [
  {
    mark: "Platinum",
    text: "Top of the README, early access to releases, and a say in the roadmap.",
  },
  {
    mark: "Gold",
    text: "The sponsors list, every release, and a place in the sponsors cloud above.",
  },
  {
    mark: "Contributors",
    text: "Code, docs, or skills puts you among the contributors, forever.",
  },
];
</script>

<template>
  <SectionShell
    id="rules"
    class="border-y border-border bg-[var(--ink-a16)] py-[clamp(44px,6vw,72px)]!"
  >
    <SectionHead
      size="sm"
      mark="The backing"
      label="sponsorship rules"
      title="Sponsorship."
      lede="Galvena is MIT licensed and free. Sponsorship pays for maintenance and new work."
    />

    <div class="grid grid-cols-1 items-start gap-[clamp(20px,3vw,40px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <p class="font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
          Sponsors are donors, not commitment for work.
        </p>
        <Button as-child variant="outline" size="sheet" class="mt-4">
          <a href="https://github.com/sponsors/galvena" rel="noopener">Sponsor Galvena</a>
        </Button>
      </div>
      <ul class="grid list-none gap-2.5 p-0">
        <li
          v-for="tier in tiers"
          :key="tier.mark"
          class="flex items-baseline gap-2.5 text-[14px] leading-[1.55] text-ink-2"
        >
          <span class="h-px w-3.5 flex-none translate-y-[-3px] bg-ink-3" aria-hidden="true"></span>
          <span>
            <b class="font-mono text-[11px] font-normal uppercase tracking-[0.12em] text-oxide-hi">{{ tier.mark }}</b>
            · {{ tier.text }}
          </span>
        </li>
        <li class="flex items-baseline gap-2.5 text-[14px] leading-[1.55] text-ink-2">
          <span class="h-px w-3.5 flex-none translate-y-[-3px] bg-ink-3" aria-hidden="true"></span>
          <span>
            <b class="font-mono text-[11px] font-normal uppercase tracking-[0.12em] text-foreground">Contributors</b>
            · code, docs, or skills puts you among the contributors, forever.
            <a
              href="https://github.com/galvena/framework/graphs/contributors"
              rel="noopener"
              class="border-b border-border pb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-oxide-hi no-underline hover:border-[var(--oxide-hi)]"
              >See the contributors</a
            >
          </span>
        </li>
      </ul>
    </div>
  </SectionShell>
</template>
