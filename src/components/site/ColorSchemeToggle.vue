<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

type Choice = "light" | "dark" | "system";

// shared across both instances (dropdown + inline) so their markers agree
const active = ref<Choice>(
  ((localStorage.getItem("theme") as Choice | null) ?? "system"),
);

const props = withDefaults(
  defineProps<{ variant?: "dropdown" | "inline" }>(),
  { variant: "dropdown" },
);
const emit = defineEmits<{ chose: [choice: Choice] }>();

const open = ref(false);
const root = ref<HTMLElement | null>(null);
const media = window.matchMedia("(prefers-color-scheme: light)");

const options: { value: Choice; label: string; icon: string }[] = [
  {
    value: "light",
    label: "Light",
    icon: "M6 3.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zM6 1v1.6M6 9.4V11M1 6h1.6M9.4 6H11M2.5 2.5l1.1 1.1M8.4 8.4l1.1 1.1M9.5 2.5L8.4 3.6M3.6 8.4L2.5 9.5",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "M10.2 7.3A4.4 4.4 0 1 1 4.7 1.8a3.5 3.5 0 0 0 5.5 5.5z",
  },
  {
    value: "system",
    label: "System",
    icon: "M1.75 2.5h8.5v6h-8.5zM4.5 10.5h3M6 8.5v2",
  },
];
const current = computed(() => options.find((o) => o.value === active.value)!);

function apply() {
  const light = active.value === "light" || (active.value === "system" && media.matches);
  document.documentElement.classList.toggle("light", light);
  document.documentElement.style.colorScheme = light ? "light" : "dark";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", light ? "#F1EDE2" : "#0E2340");
}

function set(choice: Choice) {
  active.value = choice;
  open.value = false;
  try {
    localStorage.setItem("theme", choice);
  } catch {}
  apply();
  emit("chose", choice);
}

const onSystemChange = () => {
  if (active.value === "system") apply();
};
const onOutside = (e: MouseEvent) => {
  if (open.value && root.value && !root.value.contains(e.target as Node)) {
    open.value = false;
  }
};
const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") open.value = false;
};

onMounted(() => {
  apply();
  media.addEventListener("change", onSystemChange);
  document.addEventListener("click", onOutside);
  document.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  media.removeEventListener("change", onSystemChange);
  document.removeEventListener("click", onOutside);
  document.removeEventListener("keydown", onKey);
});
</script>

<template>
  <!-- desktop: a compact dropdown -->
  <div v-if="props.variant === 'dropdown'" ref="root" class="relative">
    <button
      type="button"
      class="thm-btn"
      aria-haspopup="menu"
      :aria-expanded="open"
      @click="open = !open"
    >
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path :d="current.icon" />
      </svg>
      <span class="max-lg:hidden">{{ current.label }}</span>
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        class="transition-transform"
        :class="open ? 'rotate-180' : ''"
        aria-hidden="true"
      >
        <path d="M2.5 4.25L6 7.75l3.5-3.5" />
      </svg>
    </button>
    <div
      v-show="open"
      role="menu"
      class="absolute right-0 top-full z-50 mt-1.5 min-w-[150px] rounded-sm border border-border bg-[var(--bg-1)] p-1 shadow-[0_10px_28px_-14px_rgba(4,10,20,0.6)]"
    >
      <button
        v-for="o in options"
        :key="o.value"
        type="button"
        role="menuitemradio"
        :aria-checked="active === o.value"
        class="flex w-full items-center gap-2 rounded-sm px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] transition-colors"
        :class="
          active === o.value
            ? 'bg-[var(--ink-a07)] text-foreground'
            : 'text-ink-3 hover:bg-[var(--ink-a05)] hover:text-ink-2'
        "
        @click="set(o.value)"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          class="size-3"
          aria-hidden="true"
        >
          <path :d="o.icon" />
        </svg>
        {{ o.label }}
      </button>
    </div>
  </div>

  <!-- mobile collapsed menu: the three options inline, no dropdown -->
  <div v-else role="group" aria-label="Color theme" class="inline-flex items-center gap-0.5">
    <button
      v-for="o in options"
      :key="o.value"
      type="button"
      class="thm-btn"
      :aria-pressed="active === o.value"
      :aria-label="`${o.label} theme`"
      @click="set(o.value)"
    >
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path :d="o.icon" />
      </svg>
      <span>{{ o.label }}</span>
    </button>
  </div>
</template>
