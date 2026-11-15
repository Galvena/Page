<script setup lang="ts">
import type { TabsTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { TabsTrigger } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes["class"] }
>();
const delegatedProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground',
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
