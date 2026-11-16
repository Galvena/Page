<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
import HarnessPreview from "@/components/site/HarnessPreview.vue";
import CodeWell, { type CodeSeg } from "@/components/site/CodeWell.vue";

const tui: CodeSeg[][] = [
  [{ t: "+---- SESSIONS -----------+ +---- FIRST LIGHT -----------------------------+" }],
  [{ t: "| > first light           | | you     sketch the bridge in one line       |" }],
  [{ t: "|   roadmap sweep         | | galvena  one page, one import:              |" }],
  [{ t: "|   flaky test hunt       | |          createClient(\"127.0.0.1:8317\")     |" }],
  [{ t: "|                         | |          and the bus is yours.              |" }],
  [{ t: "+-------------------------+ +---------------------------------------------+" }],
  [{ t: " ws: connected · 127.0.0.1:8317 · ? for help          galvena tui --serve" }],
];

const cli: CodeSeg[][] = [
  [
    { t: "$ ", c: "p" },
    { t: 'galvena chat first-light "sketch the bridge in one line"' },
  ],
  [
    { t: "galvena> one page, one import: " },
    { t: 'createClient("http://127.0.0.1:8317")' },
  ],
  [{ t: "         and the bus is yours." }],
  [{ t: "$ ", c: "p" }, { t: " ", c: "cursor" }],
];
</script>

<template>
  <SectionShell id="faces">
    <SectionHead
      mark="Sheet GA-2"
      label="detail · the detachment"
      title="One session. Three faces."
      lede="The same session surface answers an app in a browser, a TUI in a terminal, and the CLI at a prompt. All three ship with the starter, so build the one you need and keep the rest. Vibe-code it instead and every socket, reconnect, and replay is yours to own."
    />

    <Tabs default-value="app">
      <div
        class="flex flex-col-reverse items-start gap-2 rounded-t-sm border border-b-0 border-border bg-[var(--bg-1)] px-3 py-2.5 md:flex-row md:items-end md:justify-between md:gap-3.5 md:px-3 md:pb-0 md:pt-2.5"
      >
        <TabsList class="h-auto flex-wrap justify-start gap-1 rounded-none bg-transparent p-0">
          <TabsTrigger
            value="app"
            class="tabbtn rounded-b-none border border-transparent border-b-0 flex-none px-4 data-[state=active]:rounded-t-sm data-[state=active]:border-border"
            >The app</TabsTrigger
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
          class="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3 md:pb-2.5"
          >same engine · same session · 127.0.0.1:8317</span
        >
      </div>

      <div class="rounded-b-sm rounded-t-none border border-border bg-well">
        <TabsContent value="app" class="m-0">
          <div class="mx-auto max-w-[560px] p-[clamp(16px,3vw,28px)]">
            <HarnessPreview />
          </div>
        </TabsContent>

        <TabsContent value="tui" class="m-0">
          <div class="grid justify-items-center p-[clamp(14px,2.5vw,22px)]">
            <CodeWell
              class="w-fit rounded-none border-0 text-xs leading-[1.6]"
              :lines="tui"
              label="The harness TUI showing the first light session"
            />
          </div>
        </TabsContent>

        <TabsContent value="cli" class="m-0">
          <div class="grid justify-items-center p-[clamp(14px,2.5vw,22px)]">
            <CodeWell
              class="w-fit rounded-none border-0 text-xs leading-[1.6]"
              :lines="cli"
              label="The CLI answering the same session"
            />
          </div>
        </TabsContent>
      </div>
    </Tabs>

    <p class="mt-3.5 flex flex-wrap gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
      <b class="font-normal text-oxide-hi">one engine · one session tree</b>
      <span>· the app imports client.mjs · the TUI rides the Rust client · the CLI is the binary itself</span>
    </p>
  </SectionShell>
</template>
