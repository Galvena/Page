<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";

const crates = [
  {
    name: "Kernel",
    desc: "the bus: commands, events, listeners, veto",
    icon: '<circle cx="6" cy="6" r="2.2"/><path d="M6 1v2M6 9v2M1 6h2M9 6h2"/>',
  },
  {
    name: "Engine",
    desc: "sessions, turns, agents, compaction, control surfaces",
    icon: '<rect x="2.5" y="2.5" width="7" height="7" rx="1"/><rect x="5" y="5" width="2" height="2"/><path d="M1 4h1.5M1 8h1.5M9.5 4H11M9.5 8H11M4 1v1.5M8 1v1.5M4 10v1.5M8 10v1.5"/>',
  },
  {
    name: "Bridge",
    desc: "client.mjs and the Rust client",
    icon: '<path d="M1.5 6h3M7.5 6H10.5M4 3.5v5M8 3.5v5"/>',
  },
  {
    name: "Compat",
    desc: "AGENTS.md, skills and MCP, compiled per project",
    icon: '<path d="M10.5 3.5h-8M4.5 1.5l-2 2 2 2M1.5 8.5h8M7.5 6.5l2 2-2 2"/>',
  },
  {
    name: "Providers",
    desc: "every model behind the one trait",
    icon: '<path d="M4 1.5v2.5M8 1.5v2.5M3 4h6v2.5a3 3 0 0 1-6 0zM6 9.5V11"/>',
  },
  {
    name: "Skills",
    desc: "project skills ride into every session",
    icon: '<path d="M4 1.5h4V10L6 8.5 4 10z"/>',
  },
  {
    name: "Store",
    desc: "event-sourced sessions on libSQL planes",
    icon: '<path d="M1.5 3c0-.8 2-1.5 4.5-1.5s4.5.7 4.5 1.5-2 1.5-4.5 1.5S1.5 3.8 1.5 3zM1.5 3v5c0 .8 2 1.5 4.5 1.5s4.5-.7 4.5-1.5V3"/>',
  },
  {
    name: "Vault",
    desc: "keys in the OS keychain, never printed",
    icon: '<path d="M4 5V3.5a2 2 0 0 1 4 0V5M2.5 5h7v5h-7zM6 7v1.5"/>',
  },
  {
    name: "Stalker",
    desc: "artifact versioning for everything the harness touches",
    icon: '<circle cx="3" cy="3" r="1.4"/><circle cx="9" cy="9" r="1.4"/><path d="M3 4.4v3.1a1.5 1.5 0 0 0 1.5 1.5h3.1"/>',
  },
  {
    name: "CLI",
    desc: "init, serve, chat, agents: one binary",
    icon: '<rect x="1.5" y="1.5" width="9" height="9" rx="1"/><path d="M3.5 4l2 1.75-2 1.75M6.25 7.75h2.75"/>',
  },
];
</script>

<template>
  <SectionShell id="crates">
    <SectionHead
      mark="Sheet GA-3"
      label="detail · the ten crates"
      title="The parts you don't write."
      lede="Ten crates ship with the frame. Each one is work you would otherwise write by hand. You glue them together. You do not rebuild them."
    />
    <div class="grid grid-cols-1 gap-x-[26px] gap-y-4 sm:grid-cols-2">
      <div
        v-for="crate in crates"
        :key="crate.name"
        class="flex items-start gap-3 rounded-sm border border-line p-3"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 size-[18px] flex-none text-oxide-hi"
          aria-hidden="true"
        >
          <g v-html="crate.icon" />
        </svg>
        <div>
          <b class="font-mono text-[12px] font-normal uppercase tracking-[0.12em] text-foreground">{{ crate.name }}</b>
          <p class="text-[13.5px] leading-[1.5] text-ink-2">{{ crate.desc }}</p>
        </div>
      </div>
    </div>
    <p class="mt-5 font-mono text-[11.5px] tracking-[0.08em] text-ink-3">
      DRAWN FROM crates/ IN galvena/framework. EACH CRATE IS ITS OWN DOOR.
    </p>
  </SectionShell>
</template>
