<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    id="sponsors"
    class="border-y border-border bg-[var(--ink-a16)] px-0 py-[clamp(44px,6vw,72px)]"
  >
    <div
      class="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[clamp(24px,4vw,56px)] px-[clamp(20px,4vw,44px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <div>
        <p class="eyebrow"><b>The backing</b> · sponsors, noted first</p>
        <h2 class="mt-3.5 font-display text-[clamp(28px,3vw,38px)] font-semibold tracking-[-0.01em]">
          Sponsors.
        </h2>
        <p class="mt-3 max-w-[62ch] text-[15.5px] text-ink-2">
          Galvena is MIT-licensed and free; sponsorship keeps it maintained and
          moving forward. Marks land on the repositories and the releases.
        </p>
        <p class="mt-4 font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
          Sponsors are donors, not commitment for work.
        </p>
        <Button as-child variant="outline" size="sheet" class="mt-4">
          <a href="https://github.com/sponsors/galvena" rel="noopener">Sponsor Galvena</a>
        </Button>
      </div>

      <div class="grid gap-4">
        <div class="grid gap-2">
          <p class="tierlab font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
            <b class="font-normal text-oxide-hi">Platinum</b> · one mark, the top of the README
          </p>
          <div class="flex flex-wrap gap-3">
            <div class="slot slot-platinum"><i>reserved</i></div>
          </div>
        </div>
        <div class="grid gap-2">
          <p class="tierlab font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
            <b class="font-normal text-oxide-hi">Gold</b> · the sponsors list, every release
          </p>
          <div class="flex flex-wrap gap-3">
            <div class="slot slot-gold"><i>reserved</i></div>
            <div class="slot slot-gold"><i>reserved</i></div>
            <div class="slot slot-gold"><i>reserved</i></div>
          </div>
        </div>
        <div
          class="flex flex-wrap items-baseline justify-between gap-3 border-t border-[rgba(233,241,250,0.11)] pt-3"
        >
          <p class="max-w-[56ch] text-[13px] text-ink-3">
            Contributors need no tier: code, docs, or skills puts you among the
            contributors, forever.
          </p>
          <a
            href="https://github.com/galvena/framework/graphs/contributors"
            rel="noopener"
            class="border-b border-border pb-0.5 font-mono text-[11.5px] uppercase tracking-[0.1em] whitespace-nowrap text-oxide-hi no-underline hover:border-[var(--oxide-hi)]"
            >See the contributors</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
