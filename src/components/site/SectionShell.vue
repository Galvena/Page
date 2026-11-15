<script setup lang="ts">
/**
 * The one vertical rhythm for content sections: same padding, same wrap.
 * Extra classes fall through to the <section> (border tints, paper scope…).
 */
const props = defineProps<{ id?: string }>();
</script>

<template>
  <section
    :id="props.id"
    class="py-[clamp(56px,8vw,120px)] first:pt-[clamp(56px,8vw,110px)]"
  >
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)]">
      <slot />
    </div>
  </section>
</template>
