<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <th
    data-slot="table-head"
    :class="
      cn(
        'text-ink-3 h-10 px-4 text-left align-middle font-normal whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.16em]',
        props.class,
      )
    "
  >
    <slot />
  </th>
</template>
