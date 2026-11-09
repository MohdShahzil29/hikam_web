"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

// Eased, inertial scrolling for the whole page. In-page links (#download, #features…) glide too,
// stopping below the sticky header. Visitors who prefer less motion keep the browser's own scrolling.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -72 },
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
