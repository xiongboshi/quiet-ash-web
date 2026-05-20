"use client";

import { useEffect } from "react";

/** Scroll reveal — matches reference HTML IntersectionObserver animation */
export function QaHomeReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".qa-page .mood-card, .qa-page .product-card, .qa-page .life-card",
    );
    if (!cards.length) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      cards.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(40px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 1000,
              easing: "cubic-bezier(.22,.61,.36,1)",
              fill: "forwards",
            },
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return null;
}
