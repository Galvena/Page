<script setup lang="ts">
const props = defineProps<{ tier: "platinum" | "gold" }>();
</script>

<template>
  <div class="slot" :class="props.tier === 'platinum' ? 'slot-platinum' : 'slot-gold'">
    <i>reserved</i>
  </div>
</template>
