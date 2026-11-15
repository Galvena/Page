<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <td
    data-slot="table-cell"
    :class="cn('p-4 align-top text-ink-2', props.class)"
  >
    <slot />
  </td>
</template>
