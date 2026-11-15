<script setup lang="ts">
const props = defineProps<{
  header: string;
  headerRight?: string;
  ink?: boolean;
}>();
</script>

<template>
  <div class="rounded-sm border border-border">
    <header class="blocklabel" :class="props.ink ? 'text-foreground' : ''">
      <span>{{ props.header }}</span>
      <b v-if="props.headerRight">{{ props.headerRight }}</b>
      <span v-else-if="$slots.right"><slot name="right" /></span>
    </header>
    <slot />
  </div>
</template>
