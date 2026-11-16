<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
import SheetBlock from "@/components/site/SheetBlock.vue";
import CodeWell, { type CodeSeg } from "@/components/site/CodeWell.vue";

const yours = [
  {
    icon: "M1.5 1.5h9v9h-9zM3.5 4l2 1.75L3.5 7.5M6.25 7.75h2.75",
    label: "Harness binary",
    sub: "src/main.rs, wiring and all",
  },
  {
    icon: "M1.5 2h9v8h-9zM1.5 4.25h9M3.25 3.1h.02",
    label: "Frontend",
    sub: "Nuxt on the bridge client",
  },
  {
    icon: "M6 1.5l4.5 2.5L6 6.5 1.5 4zM1.5 8l4.5 2.5L10.5 8",
    label: "Shells",
    sub: "sample page, TUI, desktop host",
  },
  {
    icon: "M4 1.5h4V10L6 8.5 4 10zM2.5 3.5V10",
    label: "Skills",
    sub: ".ai/skills, seeded and updated",
  },
  {
    icon: "M1 3h10M1 9h10M3.5 3v.02M8.5 9v.02",
    label: "Harness.toml",
    sub: "flag over file over default",
  },
];
const rides = [
  {
    icon: "M3 2.5h6v7h-6zM6 4.5h3v5h-3zM1 6h2M9 6h2",
    label: "Engine and kernel",
  },
  {
    icon: "M2 6h3.5M6.5 6H10M4 4v4M8 4v4",
    label: "Bridge and two clients",
  },
  {
    icon: "M10.5 2.5h-8M4.5.5L2.5 2.5l2 2M1.5 9.5h8M7.5 7.5l2 2-2 2",
    label: "Compatibility trinity",
  },
  {
    icon: "M1.5 3.5c0-.8 2-1.5 4.5-1.5s4.5.7 4.5 1.5-2 1.5-4.5 1.5S1.5 4.3 1.5 3.5zM1.5 3.5v5c0 .8 2 1.5 4.5 1.5s4.5-.7 4.5-1.5v-5",
    label: "Store and vault",
  },
];
const faces = [
  ["/", "the harness frontend"],
  ["/app", "the sample client"],
  ["galvena tui", "the same session surface"],
];

const terminal: CodeSeg[][] = [
  [{ t: "$ ", c: "p" }, { t: "git clone https://github.com/galvena/galvena" }],
  [{ t: "$ ", c: "p" }, { t: "cd galvena" }],
  [
    { t: "$ ", c: "p" },
    { t: "./galvena link         " },
    { t: "# once, ever", c: "cm" },
  ],
  [
    { t: "$ ", c: "p" },
    { t: "galvena init           " },
    { t: "# store, tree, vault, skills", c: "cm" },
  ],
  [
    { t: "$ ", c: "p" },
    { t: "galvena ui setup && galvena ui build  " },
    { t: "# the frontend, once", c: "cm" },
  ],
  [
    { t: "$ ", c: "p" },
    { t: "galvena serve          " },
    { t: "# the engine on localhost:8317", c: "cm" },
  ],
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
          class="grid grid-cols-1 overflow-hidden rounded-sm border border-border bg-well"
          header="Terminal · first run"
        >
          <template #right><span>POSIX shell</span></template>
          <CodeWell
            class="rounded-none border-0 p-[18px] pb-5 text-[13px] leading-[1.95]"
            :lines="terminal"
            label="The starter's first-run commands"
          />
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
          <div class="px-4 py-3">
            <div
              v-for="item in yours"
              :key="item.label"
              class="flex items-center gap-2.5 border-b border-line py-[7px] text-[14px] text-ink-2 last:border-b-0"
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-[13px] flex-none text-oxide-hi"
                aria-hidden="true"
              >
                <path :d="item.icon" />
              </svg>
              <span><b class="font-semibold text-foreground">{{ item.label }}</b><span class="text-ink-3"> · {{ item.sub }}</span></span>
            </div>
          </div>
        </SheetBlock>
        <SheetBlock header="Rides in, versioned">
          <div class="px-4 py-3">
            <div
              v-for="item in rides"
              :key="item.label"
              class="flex items-center gap-2.5 border-b border-line py-[7px] text-[14px] text-ink-2 last:border-b-0"
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-[13px] flex-none text-oxide-hi"
                aria-hidden="true"
              >
                <path :d="item.icon" />
              </svg>
              <span><b class="font-semibold text-foreground">{{ item.label }}</b></span>
            </div>
          </div>
        </SheetBlock>
        <p class="font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
          Fixes land upstream.
          <b class="font-normal text-oxide-hi">You never fork the frame.</b>
        </p>
      </div>
    </div>
  </SectionShell>
</template>
