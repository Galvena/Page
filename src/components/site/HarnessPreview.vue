<script setup lang="ts">
// A hypothetical harness chat box: the smallest honest picture of what a
// developer assembles on the frame. Purely illustrative; marked role="img".
</script>

<template>
  <div
    role="img"
    aria-label="Preview of a harness built on Galvena: a small macOS chat window titled first light, with a sessions sidebar, one question and one answer."
    class="overflow-hidden rounded-[10px] border border-border bg-card shadow-[0_28px_60px_-28px_rgba(4,10,20,0.65)]"
  >
    <!-- macOS titlebar -->
    <div class="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
      <span class="size-[10px] rounded-full bg-[#FF5F57]" />
      <span class="size-[10px] rounded-full bg-[#FEBC2E]" />
      <span class="size-[10px] rounded-full bg-[#28C840]" />
      <span
        class="ml-2 flex-1 truncate text-center font-mono text-[10.5px] tracking-[0.06em] text-ink-3"
        >Galvena — first light</span
      >
      <span class="w-[34px]" />
    </div>

    <div class="grid grid-cols-[124px_minmax(0,1fr)] max-sm:grid-cols-[minmax(0,1fr)]">
      <!-- sessions sidebar -->
      <div
        class="flex flex-col gap-1 border-r border-line bg-[var(--ink-a05)] p-2.5 max-sm:hidden"
      >
        <b
          class="px-1 pb-1 font-mono text-[8.5px] font-normal uppercase tracking-[0.16em] text-ink-3"
          >Sessions</b
        >
        <span
          class="rounded-[4px] px-1.5 py-1 text-[11px] text-foreground"
          style="background: var(--ink-a07); box-shadow: inset 2px 0 0 var(--oxide)"
          >first light</span
        >
        <span class="rounded-[4px] px-1.5 py-1 text-[11px] text-ink-3">roadmap sweep</span>
        <span class="rounded-[4px] px-1.5 py-1 text-[11px] text-ink-3">flaky test hunt</span>
        <span
          class="mt-auto pt-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink-3"
          >ws · 127.0.0.1:8317</span
        >
      </div>

      <!-- the chat -->
      <div class="flex min-h-[268px] flex-col gap-2.5 p-3.5">
        <div class="max-w-[85%] self-end rounded-lg border border-border bg-[var(--bg-2)] px-3 py-2 text-[12.5px] leading-[1.5]">
          sketch the bridge in one line
        </div>
        <div class="max-w-[90%] self-start rounded-lg border border-line bg-[var(--ink-a05)] px-3 py-2 text-[12.5px] leading-[1.55]">
          <b
            class="mb-1 block font-mono text-[8.5px] font-normal uppercase tracking-[0.16em] text-oxide-hi"
            >galvena</b
          >
          One page, one import:
          <code class="font-mono text-[11px] text-foreground">createClient("http://127.0.0.1:8317")</code>
          — the bus is yours.
        </div>
        <div class="self-start pl-3 font-mono text-[11px] text-ink-3">
          wiring the desktop shell<span class="cursor" aria-hidden="true"></span>
        </div>
        <div class="mt-auto flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] px-3 py-2">
          <span class="flex-1 font-mono text-[11px] text-ink-3">message the harness</span>
          <span
            class="flex size-[22px] items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" class="size-3" aria-hidden="true">
              <path d="M1.5 6h9M7 2.5L10.5 6 7 9.5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
