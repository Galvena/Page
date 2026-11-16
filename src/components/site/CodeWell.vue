<script lang="ts">
export interface CodeSeg {
  t: string;
  c?: string;
}
</script>

<script setup lang="ts">
// lines of {segments}; every line renders as a block element, so the fence
// keeps its line breaks in every viewer — even ones that strip whitespace
defineProps<{ lines: CodeSeg[][]; label?: string }>();
</script>

<template>
  <pre
    class="well p-4 text-[13px] leading-[1.7]"
    :aria-label="label"
  ><span v-for="(line, i) in lines" :key="i" class="code-line"><span
      v-for="(seg, j) in line"
      :key="j"
      :class="seg.c"
    >{{ seg.t }}</span></span></pre>
</template>
