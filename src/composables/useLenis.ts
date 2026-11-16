import Lenis from "lenis";
import { onBeforeUnmount, onMounted } from "vue";

/**
 * Smooth scrolling that respects the sticky header: in-page anchors are
 * intercepted and scrolled with Lenis, offset by the header's live height,
 * so a jumped title never hides beneath it. Skipped entirely for visitors
 * who asked for reduced motion; they keep native instant jumps, guided by
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
      const header =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const gap = 24;
      const goTo = (el: HTMLElement | number) => {
        if (lenis) lenis.scrollTo(el, { offset: el === 0 ? 0 : -(header + gap) });
        else if (typeof el === "number") window.scrollTo({ top: el });
        else {
          const y = el.getBoundingClientRect().top + window.scrollY - header - gap;
          window.scrollTo({ top: Math.max(0, y) });
        }
        history.replaceState(null, "", hash);
      };
      if (hash === "#top") {
        e.preventDefault();
        goTo(0);
        return;
      }
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      // the consistent start: each sheet's eyebrow lands 24px under the
      // header, whatever its own top padding happens to be
      const sheet =
        (target.querySelector(".eyebrow") as HTMLElement | null) ?? target;
      goTo(sheet);
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
