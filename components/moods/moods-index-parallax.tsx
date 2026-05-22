"use client";

import { useEffect } from "react";

/** Subtle scroll parallax — matches INS mood index mockup script. */
export function MoodsIndexParallax() {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(
      ".moods-index .hero-image img, .moods-index .mood-image img",
    );

    const onScroll = () => {
      const scrollY = window.scrollY;
      images.forEach((img, index) => {
        const speed = 0.015 + index * 0.001;
        img.style.transform = `translateY(${scrollY * speed}px) scale(1.02)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
