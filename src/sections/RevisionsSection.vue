<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";

const epochs = [
  { rev: "1.0", epoch: "v1.0", builds: "the MVP release gate: acceptance and hardening" },
  { rev: "1.x", epoch: "v1.1–1.24", builds: "the local harness epoch" },
  { rev: "2.x", epoch: "v2.x", builds: "the connected harness epoch" },
  { rev: "3.x", epoch: "v3.x", builds: "the platform epoch" },
];
</script>

<template>
  <SectionShell id="revisions">
    <SectionHead
      mark="Revisions"
      label="the plan of record"
      title="The roadmap, drawn in epochs."
    />
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
  </SectionShell>
</template>
