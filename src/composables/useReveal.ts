import { onBeforeUnmount, onMounted, type Ref } from "vue";

/**
 * Adds `cls` to the element the first time it scrolls into view, unless the
 * visitor asked for reduced motion. One observer per call, cleaned up on
 * unmount.
 */
export function useReveal(
  el: Ref<HTMLElement | SVGElement | null>,
  cls: string,
  threshold = 0.25,
) {
  let io: IntersectionObserver | undefined;

  onMounted(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window) || !el.value) return;
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.value?.classList.add(cls);
          io?.unobserve(entry.target);
        }
      },
      { threshold },
    );
    io.observe(el.value);
  });

  onBeforeUnmount(() => io?.disconnect());
}
