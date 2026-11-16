<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";

const epochs = [
  {
    rev: "v1.0",
    name: "The MVP release gate",
    desc: "acceptance and hardening",
    features: [
      "The engine and the bus: commands, events, veto",
      "The event-sourced session tree on its storage planes",
      "The bridge: client.mjs and the Rust client",
      "Four providers behind the one trait, plus the vault",
    ],
  },
  {
    rev: "v1.x",
    name: "The local harness epoch",
    desc: "v1.1–v1.24, three lanes in parallel",
    features: [
      "Delegation: subagents, permission profiles, workflows",
      "The plugin platform: manifests, WASM, TS SDK (v1.15)",
      "The MCP server and proxy (v1.16)",
      "Reach: remote development and the headless serve (v1.18–v1.20)",
    ],
  },
  {
    rev: "v2.x",
    name: "The connected harness epoch",
    desc: "local-first is never revoked; the cloud adds, it never subtracts",
    features: [
      "Sync and live data: replicas, write leases, realtime (v2.0)",
      "Cloud identity and the full tree (v2.2)",
      "The policy engine: the chain goes live (v2.3)",
      "Sharing, live collaboration, companions and mobile (v2.6–v2.10)",
    ],
  },
  {
    rev: "v3.x",
    name: "The platform epoch",
    desc: "the harness becomes an ecosystem",
    features: [
      "The plugin registry: signed, policy-gated installs (v3.0)",
      "Claude plugin compatibility (v3.1)",
      "The fuzzy search engine (v3.2)",
      "Close-out: docs and LTS (v3.3)",
    ],
  },
];
</script>

<template>
  <SectionShell id="revisions">
    <SectionHead
      mark="Revisions"
      label="the plan of record"
      title="The roadmap, drawn in epochs."
      lede="One feature per minor; majors are epochs. Each row below carries the stellar features its epoch exists for; the live table rides in ROADMAP.md at github.com/galvena/framework."
    />
    <div class="rounded-sm border border-border">
      <div
        v-for="(e, i) in epochs"
        :key="e.rev"
        class="border-b border-line px-[clamp(18px,2.5vw,28px)] py-5 last:border-b-0"
        :class="i % 2 === 1 ? 'bg-[var(--ink-a05)]' : ''"
      >
        <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span class="font-mono text-[13px] text-oxide-hi">{{ e.rev }}</span>
          <h3
            class="font-display text-[clamp(20px,2.2vw,26px)] leading-none font-semibold tracking-[-0.005em] text-foreground"
          >
            {{ e.name }}
          </h3>
          <span class="font-mono text-[11.5px] tracking-[0.04em] text-ink-3">
            {{ e.desc }}
          </span>
        </div>
        <ul class="mt-3 grid list-none gap-1.5 p-0 sm:grid-cols-2">
          <li
            v-for="f in e.features"
            :key="f"
            class="flex items-baseline gap-2.5 text-[13.5px] text-ink-2"
          >
            <span class="h-px w-3.5 flex-none translate-y-[-3px] bg-ink-3" aria-hidden="true"></span>
            {{ f }}
          </li>
        </ul>
      </div>
    </div>
  </SectionShell>
</template>
