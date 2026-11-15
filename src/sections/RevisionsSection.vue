<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const epochs = [
  { rev: "1.0", epoch: "v1.0", builds: "the MVP release gate: acceptance and hardening" },
  { rev: "1.x", epoch: "v1.1–1.24", builds: "the local harness epoch" },
  { rev: "2.x", epoch: "v2.x", builds: "the connected harness epoch" },
  { rev: "3.x", epoch: "v3.x", builds: "the platform epoch" },
];
</script>

<template>
  <section id="revisions">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)] py-[clamp(64px,8vw,120px)]">
      <div class="mb-7">
        <p class="eyebrow"><b>Revisions</b> · the plan of record</p>
        <h2
          class="mt-4 max-w-[24ch] font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
        >
          The roadmap, drawn in epochs.
        </h2>
      </div>
      <div class="overflow-hidden rounded-sm border border-border">
        <Table class="font-mono text-[13px]">
          <TableHeader>
            <TableRow class="hover:bg-transparent">
              <TableHead class="px-[18px] py-3">Rev</TableHead>
              <TableHead class="px-[18px] py-3">Epoch</TableHead>
              <TableHead class="px-[18px] py-3">What it builds</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="e in epochs" :key="e.epoch" class="border-[rgba(233,241,250,0.11)]">
              <TableCell class="px-[18px] py-3 whitespace-nowrap text-oxide-hi">{{ e.rev }}</TableCell>
              <TableCell class="px-[18px] py-3 whitespace-nowrap text-foreground">{{ e.epoch }}</TableCell>
              <TableCell class="px-[18px] py-3">{{ e.builds }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p class="mt-4 font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
        The live table rides in
        <b class="font-normal text-oxide-hi">ROADMAP.md</b>
        at
        <a
          href="https://github.com/galvena/framework"
          rel="noopener"
          class="text-ink-2"
          >github.com/galvena/framework</a
        >.
      </p>
    </div>
  </section>
</template>
