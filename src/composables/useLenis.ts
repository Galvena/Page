import Lenis from "lenis";
import { onBeforeUnmount, onMounted } from "vue";

/**
 * Smooth scrolling that respects the sticky header: in-page anchors are
 * intercepted and scrolled with Lenis, offset by the header's live height,
 * so a jumped title never hides beneath it. Skipped entirely for visitors
 * who asked for reduced motion — they keep native instant jumps, guided by
 * the `scroll-margin-top` set below.
 */
export function useLenis() {
  let lenis: Lenis | null = null;
  let rafId = 0;
  let cleanup: (() => void) | null = null;

  onMounted(() => {
    const setHeaderVar = () => {
      const header = document.querySelector("header");
      const h = header ? header.getBoundingClientRect().height : 72;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(h)}px`);
    };
    setHeaderVar();
    window.addEventListener("resize", setHeaderVar);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.(
        'a[href*="#"]',
      ) as HTMLAnchorElement | null;
      if (!link || link.classList.contains("skip")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      const hash = url.hash;
      if (!hash || hash === "#") return;
      const target =
        hash === "#top" ? 0 : document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      const header =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -(header + 8) });
      } else {
        // native path: scroll-margin-top (from --header-h) clears the header
        (target as HTMLElement).scrollIntoView();
      }
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    if (!reduced) {
      lenis = new Lenis({ lerp: 0.12 });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    cleanup = () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", setHeaderVar);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
    };
  });

  onBeforeUnmount(() => cleanup?.());
}
