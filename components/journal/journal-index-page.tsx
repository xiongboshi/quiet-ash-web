import { JournalIndexDiscovery } from "@/components/journal/journal-index-discovery";
import { JournalIndexHero } from "@/components/journal/journal-index-hero";
import { journalDiscoveryHubOrder } from "@/data/journal-index-discovery";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import { resolveJournalIndexCategories } from "@/lib/journal-index-categories";

export function JournalIndexPage() {
  const articles = getJournalIndexArticles();
  const categories = resolveJournalIndexCategories(articles);
  const hubCounts = Object.fromEntries(
    journalDiscoveryHubOrder.map((hubId) => {
      const row = categories.find((c) => c.id === hubId);
      return [hubId, row?.count ?? 0];
    }),
  ) as Record<JournalTopicHubId, number>;

  return (
    <div className="journal-index">
      <JournalIndexHero />
      <JournalIndexDiscovery hubCounts={hubCounts} />
    </div>
  );
}
