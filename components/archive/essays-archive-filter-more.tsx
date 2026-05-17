"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  essaysCollectionHref,
  seriesTitleLabel,
} from "@/lib/essays-collection-nav";
import type { SeriesMeta } from "@/lib/series";

const filterBtnClass = (active: boolean) =>
  `shrink-0 border-b bg-transparent p-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity duration-[600ms] ease-out sm:text-[12px] sm:tracking-[0.2em] ${
    active
      ? "border-[var(--qa-text)] pb-[3px] text-[var(--qa-text)]"
      : "border-transparent pb-[3px] text-[var(--qa-text)] hover:opacity-70"
  }`;

type Props = {
  seriesList: SeriesMeta[];
  activeSlug: string;
  overflowSlugs: string[];
};

export function EssaysArchiveFilterMore({
  seriesList,
  activeSlug,
  overflowSlugs,
}: Props) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<{ top: number; right: number } | null>(
    null,
  );
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const moreActive = overflowSlugs.includes(activeSlug);
  const activeOverflowTitle = moreActive
    ? seriesTitleLabel(activeSlug, seriesList)
    : null;

  useLayoutEffect(() => {
    if (!moreOpen) {
      setMenuStyle(null);
      return;
    }
    const updatePosition = () => {
      const button = moreButtonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      setMenuStyle({
        top: rect.bottom + 8,
        right: Math.max(12, window.innerWidth - rect.right),
      });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!moreOpen) return;
    const close = (event: PointerEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [moreOpen]);

  if (!overflowSlugs.length) return null;

  return (
    <div ref={moreMenuRef} className="relative shrink-0">
      <button
        ref={moreButtonRef}
        type="button"
        aria-expanded={moreOpen}
        aria-haspopup="listbox"
        onClick={() => setMoreOpen((open) => !open)}
        className={`flex items-center gap-1 ${filterBtnClass(moreActive)}`}
      >
        {activeOverflowTitle ?? "More"}
        <span className="translate-y-px text-[10px] opacity-80" aria-hidden>
          ∨
        </span>
      </button>
      {moreOpen && menuStyle ? (
        <ul
          role="listbox"
          style={{ top: menuStyle.top, right: menuStyle.right }}
          className="fixed z-[100] w-max min-w-[9.5rem] border border-[color-mix(in_srgb,var(--wood)_18%,#DDD7CF)] bg-[var(--qa-bg)] py-2 shadow-[0_12px_40px_-20px_rgba(28,20,16,0.25)]"
        >
          {overflowSlugs.map((slug) => {
            const active = slug === activeSlug;
            return (
              <li key={slug} role="option" aria-selected={active}>
                <Link
                  href={essaysCollectionHref(slug)}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  className="block whitespace-nowrap px-4 py-2 text-left font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--qa-muted)_12%,var(--qa-text))] no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--qa-bg-soft)_80%,transparent)] aria-[current=page]:bg-[color-mix(in_srgb,var(--qa-bg-soft)_90%,transparent)]"
                  onClick={() => setMoreOpen(false)}
                >
                  {seriesTitleLabel(slug, seriesList)}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
