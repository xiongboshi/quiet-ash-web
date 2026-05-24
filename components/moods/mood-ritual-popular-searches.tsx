import Link from "next/link";
import type { MoodRitualPopularSearchesSpec } from "@/data/mood-ritual-sections";

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

type Props = MoodRitualPopularSearchesSpec;

export function MoodRitualPopularSearches({ label, pills }: Props) {
  return (
    <section className="mood-ritual-popular" aria-labelledby="mood-ritual-popular-label">
      <div className="mood-ritual-rail mood-ritual-panel__inner mood-ritual-popular__inner">
        <h2 id="mood-ritual-popular-label" className="mood-ritual-popular__label">
          {label}
        </h2>
        <div className="mood-ritual-popular__track" role="list">
          {pills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="mood-ritual-popular__pill"
              role="listitem"
            >
              <SearchIcon />
              <span>{pill.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
