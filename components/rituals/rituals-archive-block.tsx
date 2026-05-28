"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import {
  RITUAL_ARCHIVE_FILTER_IDS,
  type RitualArchiveFilterId,
  ritualMatchesArchiveFilter,
} from "@/data/rituals-archive";

export type RitualArchiveRow = {
  slug: string;
  title: string;
  excerpt: string;
  mood: string;
  coverImage: string;
};

type SortId = "default" | "title-asc" | "title-desc";

type Props = {
  rituals: RitualArchiveRow[];
};

const sortLabels: Record<SortId, string> = {
  default: "Default order",
  "title-asc": "Title A–Z",
  "title-desc": "Title Z–A",
};

/** Compact filter row — ALL + active + fill to this count; rest in “More”. */
const MOBILE_INLINE_FILTER_MAX = 3;

const filterBtnClass = (active: boolean) =>
  `shrink-0 border-b bg-transparent p-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--qa-text)] transition-opacity duration-[600ms] ease-out sm:text-[12px] sm:tracking-[0.2em] ${
    active
      ? "border-[var(--qa-text)] pb-[3px]"
      : "border-transparent pb-[3px] hover:opacity-70"
  }`;

function mobileFilterSplit(active: RitualArchiveFilterId) {
  const inline: RitualArchiveFilterId[] = [];
  const add = (id: RitualArchiveFilterId) => {
    if (!inline.includes(id)) inline.push(id);
  };
  add("ALL");
  add(active);
  for (const id of RITUAL_ARCHIVE_FILTER_IDS) {
    if (inline.length >= MOBILE_INLINE_FILTER_MAX) break;
    add(id);
  }
  const overflow = RITUAL_ARCHIVE_FILTER_IDS.filter((id) => !inline.includes(id));
  return { inline, overflow };
}

function coverSrc(r: RitualArchiveRow) {
  return r.coverImage || "/images/hero-objects.svg";
}

export function RitualsArchiveBlock({ rituals }: Props) {
  const [filter, setFilter] = useState<RitualArchiveFilterId>("ALL");
  const [sort, setSort] = useState<SortId>("default");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

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

  const filtered = useMemo(
    () => rituals.filter((r) => ritualMatchesArchiveFilter(r.slug, filter)),
    [rituals, filter],
  );

  const sorted = useMemo(() => {
    const rows = [...filtered];
    if (sort === "title-asc") {
      rows.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "title-desc") {
      rows.sort((a, b) => b.title.localeCompare(a.title));
    }
    return rows;
  }, [filtered, sort]);

  const count = sorted.length;
  const { inline: mobileInline, overflow: mobileOverflow } =
    mobileFilterSplit(filter);
  const moreFilterActive = mobileOverflow.includes(filter);

  return (
    <>
      <section
        className="border-t border-[#DDD7CF] bg-[var(--qa-bg-soft)]"
        aria-label="Ritual archive filters"
      >
        <Container variant="wide">
          <div className="flex flex-nowrap items-center justify-between gap-3 py-3 lg:flex-wrap lg:gap-y-2 lg:py-3">
            <nav
              className="flex min-w-0 flex-1 flex-nowrap items-center gap-x-4 lg:hidden"
              aria-label="Filter by mood"
            >
              {mobileInline.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setFilter(id);
                    setMoreOpen(false);
                  }}
                  className={filterBtnClass(filter === id)}
                >
                  {id}
                </button>
              ))}
              {mobileOverflow.length > 0 ? (
                <div ref={moreMenuRef} className="relative shrink-0">
                  <button
                    type="button"
                    aria-expanded={moreOpen}
                    aria-haspopup="listbox"
                    onClick={() => setMoreOpen((open) => !open)}
                    className={`flex items-center gap-1 ${filterBtnClass(moreFilterActive)}`}
                  >
                    {moreFilterActive ? filter : "More"}
                    <span
                      className="translate-y-px text-[10px] opacity-80"
                      aria-hidden
                    >
                      ∨
                    </span>
                  </button>
                  {moreOpen ? (
                    <ul
                      role="listbox"
                      className="absolute left-0 top-full z-40 mt-2 min-w-[9.5rem] border border-[color-mix(in_srgb,var(--wood)_18%,#DDD7CF)] bg-[var(--qa-bg)] py-2 shadow-[0_12px_40px_-20px_rgba(28,20,16,0.25)]"
                    >
                      {mobileOverflow.map((id) => (
                        <li key={id} role="option" aria-selected={filter === id}>
                          <button
                            type="button"
                            className="w-full px-4 py-2 text-left font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--qa-muted)_12%,var(--qa-text))] transition-colors hover:bg-[color-mix(in_srgb,var(--qa-bg-soft)_80%,transparent)] aria-[current=true]:bg-[color-mix(in_srgb,var(--qa-bg-soft)_90%,transparent)]"
                            aria-current={filter === id ? "true" : undefined}
                            onClick={() => {
                              setFilter(id);
                              setMoreOpen(false);
                            }}
                          >
                            {id}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </nav>

            <nav
              className="hidden min-w-0 flex-wrap items-center gap-x-5 gap-y-2 lg:flex lg:flex-1 lg:gap-x-8"
              aria-label="Filter by mood"
            >
              {RITUAL_ARCHIVE_FILTER_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={filterBtnClass(filter === id)}
                >
                  {id}
                </button>
              ))}
            </nav>

            <details className="group relative shrink-0 lg:ml-auto">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--qa-text)] lg:text-[12px] lg:tracking-[0.2em] [&::-webkit-details-marker]:hidden">
                Sort
                <span
                  className="translate-y-px text-[10px] opacity-80"
                  aria-hidden
                >
                  ∨
                </span>
              </summary>
              <ul className="absolute right-0 z-30 mt-2 min-w-[11rem] border border-[color-mix(in_srgb,var(--wood)_18%,#DDD7CF)] bg-[var(--qa-bg)] py-2 shadow-[0_12px_40px_-20px_rgba(28,20,16,0.25)]">
                {(Object.keys(sortLabels) as SortId[]).map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      aria-current={sort === id ? "true" : undefined}
                      className="w-full px-4 py-2 text-left font-[family-name:var(--font-sans)] text-[12px] font-normal tracking-[0.02em] text-[color-mix(in_srgb,var(--qa-muted)_12%,var(--qa-text))] transition-colors hover:bg-[color-mix(in_srgb,var(--qa-bg-soft)_80%,transparent)] aria-[current=true]:bg-[color-mix(in_srgb,var(--qa-bg-soft)_90%,transparent)]"
                      onClick={() => {
                        setSort(id);
                        const root = document.activeElement?.closest("details");
                        if (root instanceof HTMLDetailsElement) root.open = false;
                      }}
                    >
                      {sortLabels[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </Container>
      </section>

      <section
        className="bg-[var(--qa-bg)] pb-[clamp(4rem,10vw,7.5rem)] pt-0"
        aria-label="Ritual archive"
      >
        <Container variant="wide">
          {count === 0 ? (
            <p className="m-0 max-w-[42ch] font-[family-name:var(--font-sans)] text-[15px] font-normal leading-relaxed text-[color-mix(in_srgb,var(--qa-muted)_14%,var(--qa-text))]">
              No rituals match this filter.
            </p>
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-[#DDD7CF] py-4">
                <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-[color-mix(in_srgb,#6F6A63_92%,var(--wood))]">
                  {count === 1
                    ? "1 ritual found"
                    : `${count} rituals found`}
                </p>
                <div
                  className="flex items-center gap-1"
                  role="group"
                  aria-label="View mode"
                >
                  <button
                    type="button"
                    aria-pressed={view === "grid"}
                    onClick={() => setView("grid")}
                    className={`flex h-9 w-9 items-center justify-center border text-[12px] transition-colors ${
                      view === "grid"
                        ? "border-[var(--qa-text)] bg-[color-mix(in_srgb,var(--qa-bg-soft)_60%,transparent)]"
                        : "border-[color-mix(in_srgb,var(--wood)_22%,transparent)] bg-transparent hover:border-[color-mix(in_srgb,var(--wood)_40%,transparent)]"
                    }`}
                    aria-label="Grid view"
                  >
                    <span aria-hidden className="leading-none">
                      ▦
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={view === "list"}
                    onClick={() => setView("list")}
                    className={`flex h-9 w-9 items-center justify-center border text-[12px] transition-colors ${
                      view === "list"
                        ? "border-[var(--qa-text)] bg-[color-mix(in_srgb,var(--qa-bg-soft)_60%,transparent)]"
                        : "border-[color-mix(in_srgb,var(--wood)_22%,transparent)] bg-transparent hover:border-[color-mix(in_srgb,var(--wood)_40%,transparent)]"
                    }`}
                    aria-label="List view"
                  >
                    <span aria-hidden className="leading-none">
                      ☰
                    </span>
                  </button>
                </div>
              </div>

              <ul
                id="rituals-list"
                className={
                  view === "grid"
                    ? "m-0 grid list-none grid-cols-1 gap-x-4 gap-y-0 p-0 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-5"
                    : "m-0 list-none space-y-12 p-0 pt-10 sm:space-y-14 sm:pt-12"
                }
              >
                {sorted.map((r, i) => (
                  <li
                    key={r.slug}
                    className={
                      view === "grid" ? "min-w-0 my-[18px]" : "min-w-0 pb-12 pt-0 sm:pb-14"
                    }
                  >
                    {view === "grid" ? (
                      <Link
                        href={`/moods/${r.slug}`}
                        className="qa-ritual-cinema qa-cta qa-cta--still group relative block aspect-[3/5] overflow-hidden bg-[#0c0a09] no-underline outline-offset-4 ring-offset-[var(--qa-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color-mix(in_srgb,var(--wood)_45%,transparent)] sm:aspect-[3/4]"
                      >
                        <Image
                          src={coverSrc(r)}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          unoptimized
                          className="object-cover object-center brightness-[0.88] contrast-[0.96] saturate-[0.78] transition-[transform,opacity] duration-[650ms] ease-out group-hover:scale-[1.03] group-hover:opacity-[0.92]"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0908]/78 via-[#0a0908]/28 to-[#0a0908]/55"
                          aria-hidden
                        />
                        <div className="qa-ritual-cinema-grain" aria-hidden />

                        <div className="absolute inset-x-6 top-[18px] bottom-[18px] z-10 flex min-h-0 flex-col sm:inset-x-7 lg:inset-x-8">
                          <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium tabular-nums uppercase tracking-[0.26em] text-white/90">
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 max-w-[min(100%,18ch)] font-[family-name:var(--font-serif)] text-[clamp(1.15rem,2.4vw,1.42rem)] font-light leading-[1.2] tracking-[-0.02em] text-white">
                            {r.title}
                          </h3>
                          <p className="mt-3 max-w-[min(100%,28ch)] font-[family-name:var(--font-sans)] text-[13px] font-normal leading-[1.65] text-[color-mix(in_srgb,white_86%,transparent)] sm:text-[14px] sm:leading-[1.7]">
                            {r.excerpt}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <Link
                        href={`/moods/${r.slug}`}
                        className="qa-cta qa-cta--still group flex max-w-[min(100%,72rem)] flex-col gap-6 no-underline sm:gap-8"
                      >
                        <figure className="relative aspect-[16/9] w-full max-w-[min(100%,40rem)] shrink-0 overflow-hidden bg-[#0c0a09] sm:aspect-[2/1]">
                          <Image
                            src={coverSrc(r)}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, 640px"
                            unoptimized
                            className="object-cover object-center brightness-[0.9] contrast-[0.94] saturate-[0.74] transition-[opacity,transform] duration-[600ms] ease-out group-hover:scale-[1.01] group-hover:opacity-[0.88]"
                          />
                        </figure>
                        <div className="flex min-w-0 max-w-[min(42ch,100%)] flex-col justify-center">
                          <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium tabular-nums uppercase tracking-[0.24em] text-[color-mix(in_srgb,#6F6A63_88%,var(--wood))]">
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <p className="qa-meta mt-4 text-[var(--wood)]">
                            {r.mood}
                          </p>
                          <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[clamp(1.45rem,2.8vw,1.95rem)] font-light leading-snug tracking-[-0.03em] text-[var(--qa-text)] transition-opacity duration-[600ms] ease-out group-hover:opacity-[0.78]">
                            {r.title}
                          </h2>
                          <p className="mt-4 max-w-[42ch] font-[family-name:var(--font-sans)] text-[14px] font-normal leading-[1.65] text-[color-mix(in_srgb,var(--qa-muted)_18%,var(--qa-text))]">
                            {r.excerpt}
                          </p>
                          <p className="mt-9 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--wood)_72%,var(--ash))] underline decoration-[color-mix(in_srgb,var(--wood)_22%,transparent)] underline-offset-[6px]">
                            Read ritual
                          </p>
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
