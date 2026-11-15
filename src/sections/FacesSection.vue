<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <section id="faces">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)]">
      <div class="mb-[clamp(36px,5vw,60px)]">
        <p class="eyebrow"><b>Sheet GA-2</b> · detail · the detachment</p>
        <h2
          class="mt-4 max-w-[24ch] font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
        >
          One session. Three faces.
        </h2>
        <p class="mt-4 max-w-[62ch] text-[17px] text-ink-2">
          The same session surface answers a page in a browser, a TUI in a
          terminal, and the CLI at a prompt. All three ship with the starter,
          so build the one you need and keep the rest. Vibe-code it instead and
          every socket, reconnect, and replay is yours to own.
        </p>
      </div>

      <Tabs default-value="web">
        <div
          class="flex flex-wrap items-end justify-between gap-3.5 rounded-t-sm border border-b-0 border-border bg-[var(--bg-1)] px-3 pt-2.5"
        >
          <TabsList class="h-auto flex-wrap justify-start gap-1 rounded-none bg-transparent p-0">
            <TabsTrigger
              value="web"
              class="tabbtn rounded-b-none border border-transparent border-b-0 flex-none px-4 data-[state=active]:rounded-t-sm data-[state=active]:border-border"
              >The page</TabsTrigger
            >
            <TabsTrigger
              value="tui"
              class="tabbtn rounded-b-none border border-transparent border-b-0 flex-none px-4 data-[state=active]:rounded-t-sm data-[state=active]:border-border"
              >The TUI</TabsTrigger
            >
            <TabsTrigger
              value="cli"
              class="tabbtn rounded-b-none border border-transparent border-b-0 flex-none px-4 data-[state=active]:rounded-t-sm data-[state=active]:border-border"
              >The CLI</TabsTrigger
            >
          </TabsList>
          <span
            class="pb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3"
            >same engine · same session · 127.0.0.1:8317</span
          >
        </div>

        <div class="rounded-b-sm rounded-t-none border border-border bg-well">
          <TabsContent value="web" class="m-0">
            <div class="mx-auto max-w-[820px] p-[clamp(16px,3vw,28px)]">
              <div class="flex items-center gap-2 rounded-sm border border-border bg-[var(--bg-2)] px-3 py-2">
                <i v-for="n in 3" :key="n" class="mchrome-i size-2.5"></i>
                <span class="ml-2 font-mono text-[11px] tracking-[0.05em] text-ink-3">127.0.0.1:8317</span>
              </div>
              <div
                class="grid min-h-[232px] grid-cols-[170px_minmax(0,1fr)] overflow-hidden rounded-b-sm border border-t-0 border-border max-md:grid-cols-[minmax(0,1fr)] max-md:min-h-[200px]"
              >
                <aside aria-hidden="true" class="grid content-start gap-1 border-r border-[rgba(233,241,250,0.11)] bg-[var(--ink-a05)] p-2.5 max-md:hidden">
                  <b class="px-0 py-1 font-mono text-[9px] font-normal uppercase tracking-[0.14em] text-ink-3">Sessions</b>
                  <span class="msess on rounded-sm px-2 py-1.5 text-xs text-ink-3">first light</span>
                  <span class="msess rounded-sm px-2 py-1.5 text-xs text-ink-3">roadmap sweep</span>
                  <span class="msess rounded-sm px-2 py-1.5 text-xs text-ink-3">flaky test hunt</span>
                </aside>
                <div class="flex flex-col gap-2.5 p-3.5">
                  <div class="mturn you max-w-[56ch] self-end rounded-sm border border-border bg-[var(--bg-2)] px-3 py-2.5 text-[13px] leading-[1.55]">
                    <b>you</b>sketch the bridge in one line
                  </div>
                  <div class="mturn bot max-w-[56ch] self-start rounded-sm border border-[rgba(233,241,250,0.11)] bg-background px-3 py-2.5 text-[13px] leading-[1.55]">
                    <b>galvena</b>One page, one import:
                    <code class="font-mono text-[0.92em] text-foreground">createClient("http://127.0.0.1:8317")</code>
                    and the bus is yours.
                  </div>
                  <div class="minput" aria-hidden="true">message the harness</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tui" class="m-0">
            <div class="facepad grid justify-items-center p-[clamp(14px,2.5vw,22px)]">
<pre class="w-fit overflow-x-auto font-mono text-xs leading-[1.6] text-ink-2">+---- SESSIONS -----------+ +---- FIRST LIGHT -----------------------------+
| &gt; first light           | | you     sketch the bridge in one line       |
|   roadmap sweep         | | galvena  one page, one import:              |
|   flaky test hunt       | |          createClient("127.0.0.1:8317")     |
|                         | |          and the bus is yours.              |
+-------------------------+ +---------------------------------------------+
 ws: connected · 127.0.0.1:8317 · ? for help          galvena tui --serve</pre>
            </div>
          </TabsContent>

          <TabsContent value="cli" class="m-0">
            <div class="facepad grid justify-items-center p-[clamp(14px,2.5vw,22px)]">
<pre class="w-fit overflow-x-auto font-mono text-xs leading-[1.6] text-ink-2"><span class="text-oxide-hi">$</span> galvena chat first-light "sketch the bridge in one line"
galvena&gt; one page, one import: createClient("http://127.0.0.1:8317")
         and the bus is yours.
<span class="text-oxide-hi">$</span> <span class="cursor" aria-hidden="true"></span></pre>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      <p class="facenote mt-3.5 flex flex-wrap gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
        <b class="font-normal text-oxide-hi">one engine · one session tree</b>
        <span>· the page imports client.mjs · the TUI rides the Rust client · the CLI is the binary itself</span>
      </p>
    </div>
  </section>
</template>
