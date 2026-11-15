<script setup lang="ts">
import type { TabsContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { TabsContent } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes["class"] }
>();
const delegatedProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <TabsContent
    data-slot="tabs-content"
    v-bind="delegatedProps"
    :class="cn('flex-1 outline-none', props.class)"
  >
    <slot />
  </TabsContent>
</template>
