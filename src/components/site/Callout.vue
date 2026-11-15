<script setup lang="ts">
const props = defineProps<{ mark: string; label: string }>();
</script>

<template>
  <p class="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
    <b class="font-normal text-oxide-hi">{{ props.mark }}</b>
    <span>· {{ props.label }}</span>
  </p>
</template>
