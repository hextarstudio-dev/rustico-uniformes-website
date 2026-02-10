import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Prevent the browser from restoring scroll position on navigation.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    // Ensure we start at the top on initial mount.
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = null;

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change (but not for hash navigation)
  useLayoutEffect(() => {
    if (location.hash) return;

    const reset = () => {
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    // 1) immediate
    reset();

    // 2) after the new route's layout settles
    const t1 = window.setTimeout(reset, 50);

    // 3) after heavier assets (images) start affecting layout
    const t2 = window.setTimeout(reset, 250);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [location.pathname]);

  return null;
};

export default SmoothScroll;
