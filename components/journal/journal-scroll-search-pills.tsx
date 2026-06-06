"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type JournalScrollSearchPill = {
  label: string;
  href: string;
};

type Props = {
  pills: readonly JournalScrollSearchPill[];
  bleed?: boolean;
  scrollLeftLabel?: string;
  scrollRightLabel?: string;
};

const PILLS_PER_COLUMN = 3;

function pillColumns(pills: readonly JournalScrollSearchPill[]) {
  const columns: JournalScrollSearchPill[][] = [];
  for (let i = 0; i < pills.length; i += PILLS_PER_COLUMN) {
    columns.push(pills.slice(i, i + PILLS_PER_COLUMN));
  }
  return columns;
}

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

function ScrollChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M14 6L8 12l6 6" : "M10 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JournalScrollSearchPills({
  pills,
  bleed = false,
  scrollLeftLabel = "Scroll search pills left",
  scrollRightLabel = "Scroll search pills right",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const overflow = track.scrollWidth - track.clientWidth > 2;
    setShowNav(overflow);
    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [pills.length, updateScrollState]);

  const scrollByDirection = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.max(track.clientWidth * 0.72, 160);
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (pills.length === 0) return null;

  const columns = pillColumns(pills);

  return (
    <div
      className={`journal-scroll-pills${bleed ? " journal-scroll-pills--bleed" : ""}`}
    >
      <div className="journal-scroll-pills__wrap">
        <button
          type="button"
          className="journal-scroll-pills__nav journal-scroll-pills__nav--prev"
          aria-label={scrollLeftLabel}
          aria-hidden={!showNav || !canScrollLeft}
          tabIndex={showNav && canScrollLeft ? 0 : -1}
          disabled={!showNav || !canScrollLeft}
          onClick={() => scrollByDirection("left")}
        >
          <ScrollChevron direction="left" />
        </button>
        <div ref={trackRef} className="journal-scroll-pills__track" role="list">
          {columns.map((column, columnIndex) => (
            <div
              key={`scroll-pill-col-${columnIndex}`}
              className="journal-scroll-pills__col"
              role="presentation"
            >
              {column.map((pill) => (
                <Link
                  key={pill.label}
                  href={pill.href}
                  className="journal-scroll-pills__pill"
                  role="listitem"
                >
                  <SearchIcon />
                  <span>{pill.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="journal-scroll-pills__nav journal-scroll-pills__nav--next"
          aria-label={scrollRightLabel}
          aria-hidden={!showNav || !canScrollRight}
          tabIndex={showNav && canScrollRight ? 0 : -1}
          disabled={!showNav || !canScrollRight}
          onClick={() => scrollByDirection("right")}
        >
          <ScrollChevron direction="right" />
        </button>
      </div>
    </div>
  );
}
