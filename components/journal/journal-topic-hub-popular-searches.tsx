import Link from "next/link";
import type { TopicPageSearchPill } from "@/data/journal-topic-page-content";

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

type Props = {
  pills: readonly TopicPageSearchPill[];
};

export function JournalTopicHubPopularSearches({ pills }: Props) {
  if (pills.length === 0) return null;

  return (
    <section
      className="journal-topic-page__popular-searches"
      aria-labelledby="journal-topic-popular-searches-heading"
    >
      <header className="journal-topic-page__section-head">
        <h2
          id="journal-topic-popular-searches-heading"
          className="journal-topic-page__section-title"
        >
          Popular searches
        </h2>
      </header>
      <div className="journal-topic-page__popular-searches-track" role="list">
        {pills.map((pill) => (
          <Link
            key={pill.label}
            href={pill.href}
            className="journal-topic-page__search-pill"
            role="listitem"
          >
            <SearchIcon />
            <span>{pill.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
