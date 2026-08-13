"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisScroll() {
  useEffect(() => {
    // Disable Lenis on mobile devices for better performance
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
