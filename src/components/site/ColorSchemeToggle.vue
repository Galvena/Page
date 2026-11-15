<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

type Choice = "light" | "dark" | "system";

const active = ref<Choice>("system");
const media = window.matchMedia("(prefers-color-scheme: light)");

const options: { value: Choice; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function apply() {
  const light = active.value === "light" || (active.value === "system" && media.matches);
  document.documentElement.classList.toggle("light", light);
  document.documentElement.style.colorScheme = light ? "light" : "dark";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", light ? "#F1EDE2" : "#0E2340");
}

function set(choice: Choice) {
  active.value = choice;
  try {
    localStorage.setItem("theme", choice);
  } catch {}
  apply();
}

const onSystemChange = () => {
  if (active.value === "system") apply();
};

onMounted(() => {
  try {
    const stored = localStorage.getItem("theme") as Choice | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      active.value = stored;
    }
  } catch {}
  apply();
  media.addEventListener("change", onSystemChange);
});

onBeforeUnmount(() => media.removeEventListener("change", onSystemChange));
</script>

<template>
  <div
    role="group"
    aria-label="Color theme"
    class="inline-flex items-center gap-0.5 rounded-sm border border-border p-0.5"
  >
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
        <template v-if="o.value === 'light'">
          <circle cx="6" cy="6" r="2.4" />
          <path
            d="M6 1v1.6M6 9.4V11M1 6h1.6M9.4 6H11M2.5 2.5l1.1 1.1M8.4 8.4l1.1 1.1M9.5 2.5L8.4 3.6M3.6 8.4L2.5 9.5"
          />
        </template>
        <template v-else-if="o.value === 'dark'">
          <path d="M10.2 7.3A4.4 4.4 0 1 1 4.7 1.8a3.5 3.5 0 0 0 5.5 5.5z" />
        </template>
        <template v-else>
          <rect x="1.75" y="2.5" width="8.5" height="6" rx="0.75" />
          <path d="M4.5 10.5h3M6 8.5v2" />
        </template>
      </svg>
      <span>{{ o.label }}</span>
    </button>
  </div>
</template>
