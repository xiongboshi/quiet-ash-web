"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MoodHeroNav } from "@/components/mood/mood-hero-nav";
import { brandHome } from "@/data/brand-home";

type Hero = (typeof brandHome)["hero"];

type Props = {
  hero: Hero;
  promo: string;
};

export function MoodHeroCarousel({ hero, promo }: Props) {
  const slideCount = hero.slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  useEffect(() => {
    if (paused || slideCount <= 1) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, hero.autoplayIntervalMs);
    return () => window.clearInterval(id);
  }, [paused, slideCount, hero.autoplayIntervalMs]);

  return (
    <section
      className="qa-mood-hero-canvas relative isolate w-full min-h-[min(92svh,920px)] overflow-hidden lg:min-h-[min(88vh,900px)] xl:min-h-[960px]"
      aria-label="Hero"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="qa-mood-hero-bg-layers absolute inset-0"
          aria-hidden="true"
        />
        {hero.slides.map((slide, i) => (
          <div
            key={slide.backgroundSrc}
            className={`qa-mood-hero-slide absolute inset-0 transition-opacity duration-[900ms] ease-out ${
              i === activeIndex ? "z-[2] opacity-100" : "z-[1] opacity-0"
            }`}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={slide.backgroundSrc}
              alt={slide.backgroundAlt}
              fill
              priority={i === 0}
              className="qa-mood-hero-bg object-cover"
              sizes="100vw"
              unoptimized
            />
          </div>
        ))}
        <div
          className="qa-mood-hero-bg-scrim absolute inset-0 z-[3]"
          aria-hidden="true"
        />
        <div
          className="qa-mood-hero-grain absolute inset-0 z-[4]"
          aria-hidden="true"
        />
      </div>

      <MoodHeroNav promo={promo} />

      <div className="qa-mood-hero-content relative z-20 mx-auto grid min-h-[min(92svh,920px)] max-w-[1520px] grid-cols-1 items-center px-6 pb-16 pt-4 md:px-12 md:pb-20 lg:min-h-[min(88vh,900px)] lg:grid-cols-[minmax(0,5.2fr)_minmax(0,6.8fr)] lg:px-16 lg:pb-24 xl:min-h-[960px] xl:px-20 xl:pt-[140px] xl:pb-20">
        <div className="qa-mood-hero-copy max-w-[520px] py-8 lg:py-0 lg:pl-2 xl:max-w-[560px]">
          <h1 className="qa-mood-hero-title font-[family-name:var(--font-serif)] text-[var(--mood-hero-title-color)]">
            {hero.title}
          </h1>
          <div className="qa-mood-hero-sub mt-7 space-y-1">
            {hero.subtitleLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Link href={hero.cta.href} className="qa-mood-hero-cta mt-10">
            {hero.cta.label}
          </Link>
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      <div
        className="absolute inset-x-0 bottom-8 z-30 flex justify-center gap-2.5 md:bottom-10"
        role="tablist"
        aria-label="Hero slides"
      >
        {hero.slides.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={slide.backgroundSrc}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Slide ${i + 1} of ${slideCount}`}
              className={`h-1.5 w-1.5 rounded-full p-0 transition-colors duration-300 ${
                isActive
                  ? "bg-[var(--mood-ink)]"
                  : "bg-[var(--mood-ink)]/25 hover:bg-[var(--mood-ink)]/45"
              }`}
              onClick={() => goTo(i)}
            />
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute bottom-8 right-6 z-20 md:right-12 lg:right-16 xl:right-20"
        aria-hidden="true"
      >
        <span className="qa-mood-hero-badge">{hero.badge}</span>
      </div>
    </section>
  );
}
