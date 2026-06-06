import { JournalScrollSearchPills } from "@/components/journal/journal-scroll-search-pills";
import type { TopicPageSearchPill } from "@/data/journal-topic-page-content";

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
      <JournalScrollSearchPills
        pills={pills}
        scrollLeftLabel="Scroll popular searches left"
        scrollRightLabel="Scroll popular searches right"
      />
    </section>
  );
}
