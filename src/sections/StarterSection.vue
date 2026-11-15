<script setup lang="ts">
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
</script>

<template>
  <section id="starter">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)] py-[clamp(64px,8vw,120px)]">
      <div class="mb-[clamp(36px,5vw,60px)]">
        <p class="eyebrow"><b>Sheet GA-4</b> · detail · the entry point</p>
        <h2
          class="mt-4 max-w-[24ch] font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
        >
          Start from a harness that already answers.
        </h2>
        <p class="mt-4 max-w-[62ch] text-[17px] text-ink-2">
          The starter, galvena/galvena, rides the framework as versioned
          dependencies. Clone it and build it: a functioning harness answers.
          No account, no cloud, no telemetry; nothing is required, everything
          is yours.
        </p>
      </div>

      <div
        class="grid grid-cols-1 items-start gap-[clamp(28px,4vw,52px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
      >
        <div>
          <div class="grid grid-cols-1 overflow-hidden rounded-sm border border-border bg-well">
            <header class="blocklabel">
              <span>Terminal · first run</span><span>POSIX shell</span>
            </header>
            <pre class="p-[18px] pb-5 text-[13px] leading-[1.95] text-ink-2"><span class="text-oxide-hi">$</span> git clone https://github.com/galvena/galvena
<span class="text-oxide-hi">$</span> cd galvena
<span class="text-oxide-hi">$</span> ./galvena link         <span class="text-ink-3"># once, ever</span>
<span class="text-oxide-hi">$</span> galvena init           <span class="text-ink-3"># store, tree, vault, skills</span>
<span class="text-oxide-hi">$</span> galvena ui setup &amp;&amp; galvena ui build  <span class="text-ink-3"># the frontend, once</span>
<span class="text-oxide-hi">$</span> galvena serve          <span class="text-ink-3"># the engine on localhost:8317</span></pre>
          </div>
          <div class="mt-[18px] flex flex-wrap gap-2.5">
            <span
              v-for="face in [
                ['/', 'the harness frontend'],
                ['/app', 'the sample client'],
                ['galvena tui', 'the same session surface'],
              ]"
              :key="face[0]"
              class="rounded-sm border border-border px-3 py-1.5 font-mono text-[11.5px] tracking-[0.06em] text-ink-2"
            >
              <b class="font-normal text-oxide-hi">{{ face[0] }}</b> · {{ face[1] }}
            </span>
          </div>
        </div>

        <div class="grid gap-[22px]">
          <div class="rounded-sm border border-border">
            <header class="blocklabel text-foreground">
              <span>Yours, from the first commit</span>
            </header>
            <ul class="px-4 py-3">
              <li
                v-for="item in yours"
                :key="item.what"
                class="flex items-baseline gap-2.5 border-b border-[rgba(233,241,250,0.11)] py-[7px] text-[14.5px] text-ink-2 last:border-b-0"
              >
                <b class="font-semibold text-foreground">{{ item.what }}</b>{{ item.rest }}
              </li>
            </ul>
          </div>
          <div class="rounded-sm border border-border">
            <header class="blocklabel">
              <span>Rides in, versioned</span>
            </header>
            <ul class="px-4 py-3">
              <li
                v-for="item in ridesIn"
                :key="item"
                class="flex items-baseline gap-2.5 border-b border-[rgba(233,241,250,0.11)] py-[7px] text-[14.5px] text-ink-2 last:border-b-0"
              >
                <b class="font-semibold text-foreground">{{ item }}</b>
              </li>
            </ul>
          </div>
          <p class="font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
            Fixes land upstream.
            <b class="font-normal text-oxide-hi">You never fork the frame.</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
