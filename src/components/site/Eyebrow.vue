<script setup lang="ts">
const props = defineProps<{ mark?: string; label: string }>();
</script>

<template>
  <p class="eyebrow">
    <b v-if="props.mark">{{ props.mark }}</b>
    <span>{{ props.label }}</span>
  </p>
</template>
