"use client";

import Link from "next/link";
import { useRef } from "react";

type Pill = { label: string; href: string };

type Props = {
  label: string;
  pills: readonly Pill[];
};

function SearchIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r={6} stroke="currentColor" strokeWidth={1.25} />
      <path
        d="M16 16l4.5 4.5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MoodsIndexPopularSearches({ label, pills }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section className="mood-popular-searches">
      <div className="container mood-popular-searches-inner">
        <p className="mood-popular-label">{label}</p>
        <div className="mood-popular-track-wrap">
          <div ref={trackRef} className="mood-popular-track">
            {pills.map((pill) => (
              <Link key={pill.label} href={pill.href} className="mood-popular-pill">
                <SearchIcon />
                <span>{pill.label}</span>
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="mood-popular-scroll-btn"
            aria-label="Scroll searches"
            onClick={scrollNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
