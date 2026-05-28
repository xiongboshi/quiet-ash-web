import Link from "next/link";
import type { TopicPageRelatedMood } from "@/data/journal-topic-page-content";

type Props = {
  moods: readonly TopicPageRelatedMood[];
};

export function JournalTopicHubRelatedMoods({ moods }: Props) {
  if (moods.length === 0) return null;

  return (
    <section
      className="journal-topic-page__related-moods"
      aria-labelledby="journal-topic-related-moods-heading"
    >
      <h2
        id="journal-topic-related-moods-heading"
        className="journal-topic-page__section-title"
      >
        Related moods
      </h2>
      <ul className="journal-topic-page__related-moods-list">
        {moods.map((mood) => (
          <li key={mood.label}>
            <Link href={mood.href} className="journal-topic-page__related-mood-pill">
              {mood.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
