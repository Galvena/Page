<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
import SheetBlock from "@/components/site/SheetBlock.vue";

const yours = [
  { what: "the harness binary:", rest: " src/main.rs, wiring and all" },
  { what: "the frontend:", rest: " Nuxt on the bridge client" },
  { what: "the shells:", rest: " sample page, TUI, desktop host" },
  { what: "the skills:", rest: " .ai/skills, seeded and updated" },
  { what: "harness.toml:", rest: " flag over file over default" },
];
const ridesIn = [
  "the engine and the kernel",
  "the bridge and its two clients",
  "the compatibility trinity",
  "the store and the vault",
];
const faces = [
  ["/", "the harness frontend"],
  ["/app", "the sample client"],
  ["galvena tui", "the same session surface"],
];
</script>

<template>
  <SectionShell id="starter">
    <SectionHead
      mark="Sheet GA-4"
      label="detail · the entry point"
      title="Start from a harness that already answers."
      lede="The starter, galvena/galvena, rides the framework as versioned dependencies. Clone it and build it: a functioning harness answers. No account, no cloud, no telemetry; nothing is required, everything is yours."
    />

    <div
      class="grid grid-cols-1 items-start gap-[clamp(28px,4vw,52px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
    >
      <div>
        <SheetBlock
          class="overflow-hidden bg-well"
          header="Terminal · first run"
        >
          <template #right><span>POSIX shell</span></template>
<pre class="p-[18px] pb-5 text-[13px] leading-[1.95] text-ink-2"><span class="text-oxide-hi">$</span> git clone https://github.com/galvena/galvena
<span class="text-oxide-hi">$</span> cd galvena
<span class="text-oxide-hi">$</span> ./galvena link         <span class="text-ink-3"># once, ever</span>
<span class="text-oxide-hi">$</span> galvena init           <span class="text-ink-3"># store, tree, vault, skills</span>
<span class="text-oxide-hi">$</span> galvena ui setup &amp;&amp; galvena ui build  <span class="text-ink-3"># the frontend, once</span>
<span class="text-oxide-hi">$</span> galvena serve          <span class="text-ink-3"># the engine on localhost:8317</span></pre>
        </SheetBlock>
        <div class="mt-[18px] flex flex-wrap gap-2.5">
          <span
            v-for="face in faces"
            :key="face[0]"
            class="rounded-sm border border-border px-3 py-1.5 font-mono text-[11.5px] tracking-[0.06em] text-ink-2"
          >
            <b class="font-normal text-oxide-hi">{{ face[0] }}</b> · {{ face[1] }}
          </span>
        </div>
      </div>

      <div class="grid gap-[22px]">
        <SheetBlock header="Yours, from the first commit" ink>
          <ul class="px-4 py-3">
            <li
              v-for="item in yours"
              :key="item.what"
              class="flex items-baseline gap-2.5 border-b border-line py-[7px] text-[14.5px] text-ink-2 last:border-b-0"
            >
              <b class="font-semibold text-foreground">{{ item.what }}</b>{{ item.rest }}
            </li>
          </ul>
        </SheetBlock>
        <SheetBlock header="Rides in, versioned">
          <ul class="px-4 py-3">
            <li
              v-for="item in ridesIn"
              :key="item"
              class="flex items-baseline gap-2.5 border-b border-line py-[7px] text-[14.5px] text-ink-2 last:border-b-0"
            >
              <b class="font-semibold text-foreground">{{ item }}</b>
            </li>
          </ul>
        </SheetBlock>
        <p class="font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
          Fixes land upstream.
          <b class="font-normal text-oxide-hi">You never fork the frame.</b>
        </p>
      </div>
    </div>
  </SectionShell>
</template>
