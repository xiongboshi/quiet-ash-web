import { JournalIndexDiscovery } from "@/components/journal/journal-index-discovery";
import { JournalIndexHero } from "@/components/journal/journal-index-hero";
import { journalDiscoveryHubOrder } from "@/data/journal-index-discovery";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { countJournalQaArticlesForTopicHub } from "@/data/journal-guide-slugs";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";

export function JournalIndexPage() {
  const articles = getJournalIndexArticles();
  const hubCounts = Object.fromEntries(
    journalDiscoveryHubOrder.map((hubId) => [
      hubId,
      countJournalQaArticlesForTopicHub(articles, hubId),
    ]),
  ) as Record<JournalTopicHubId, number>;

  return (
    <div className="journal-index">
      <JournalIndexHero />
      <JournalIndexDiscovery hubCounts={hubCounts} />
    </div>
  );
}
