<script setup lang="ts">
import Eyebrow from "./Eyebrow.vue";

const props = withDefaults(
  defineProps<{
    mark?: string;
    label: string;
    title: string;
    lede?: string;
    /** "md" for detail sheets, "sm" for compact strips */
    size?: "md" | "sm";
  }>(),
  { size: "md" },
);
</script>

<template>
  <div :class="props.size === 'sm' ? 'mb-7' : 'mb-[clamp(36px,5vw,60px)]'">
    <Eyebrow :mark="props.mark" :label="props.label" />
    <h2
      :class="[
        'mt-4 max-w-[24ch] font-display leading-[1.02] font-semibold tracking-[-0.01em]',
        props.size === 'sm'
          ? 'text-[clamp(28px,3vw,38px)]'
          : 'text-[clamp(34px,4.2vw,52px)]',
      ]"
    >
      {{ props.title }}
    </h2>
    <p
      v-if="props.lede"
      class="mt-4 max-w-[62ch] text-[17px] text-ink-2"
      :class="props.size === 'sm' ? 'text-[15.5px]' : ''"
    >
      {{ props.lede }}
    </p>
  </div>
</template>
