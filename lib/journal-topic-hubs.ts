import {
  journalTopicHubById,
  journalTopicHubs,
  isJournalTopicHubId,
  type JournalTopicHub,
  type JournalTopicHubId,
} from "@/data/journal-topic-hubs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { filterAndSortJournalArticles } from "@/lib/journal-index-articles";

export {
  journalTopicHubs,
  journalTopicHubById,
  isJournalTopicHubId,
  type JournalTopicHub,
  type JournalTopicHubId,
};

export function getJournalTopicHub(slug: string): JournalTopicHub | undefined {
  if (!isJournalTopicHubId(slug)) return undefined;
  return journalTopicHubById[slug];
}

export function journalTopicHubSlugs(): JournalTopicHubId[] {
  return [...journalTopicHubs.map((h) => h.id)];
}

export function getArticlesForTopicHub(
  articles: readonly JournalIndexArticleResolved[],
  hubId: JournalTopicHubId,
  featuredSlugs?: readonly string[],
): JournalIndexArticleResolved[] {
  const byCategory = filterAndSortJournalArticles(
    [...articles],
    hubId,
    "newest",
    null,
  );

  if (!featuredSlugs?.length) return byCategory;

  const featured = new Set(featuredSlugs);
  const pinned = featuredSlugs
    .map((slug) => byCategory.find((a) => a.slug === slug))
    .filter((a): a is JournalIndexArticleResolved => Boolean(a));
  const rest = byCategory.filter((a) => !featured.has(a.slug));
  return [...pinned, ...rest];
}
