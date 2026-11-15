<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rows: { k: string; v: string; sub?: string }[];
    kWidth?: string;
    compact?: boolean;
  }>(),
  { kWidth: "38%", compact: false },
);
</script>

<template>
  <table class="kv w-full border-collapse">
    <tbody>
      <tr v-for="row in props.rows" :key="row.k">
        <td
          class="k px-3.5 pt-3 pb-2.5 text-[10.5px]"
          :class="props.compact ? 'pt-2.5 pb-2 text-[9.5px]' : ''"
          :style="{ width: props.kWidth }"
        >
          {{ row.k }}
        </td>
        <td class="v px-3.5 py-2.5" :class="props.compact ? 'text-[11.5px]' : 'text-[12.5px]'">
          {{ row.v }}<small v-if="row.sub">{{ row.sub }}</small>
        </td>
      </tr>
    </tbody>
  </table>
</template>
