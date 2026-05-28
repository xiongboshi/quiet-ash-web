import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { getEssayBySlug } from "@/lib/essays";

/** Hand-authored Q&A guide articles (`data/journal-articles/*.ts`). */
export const JOURNAL_QA_GUIDE_ARTICLE_SLUGS = [
  "best-incense-for-sleep",
  "is-incense-safe-for-pets",
  "best-incense-for-small-apartments",
] as const;

export type JournalQaGuideArticleSlug = (typeof JOURNAL_QA_GUIDE_ARTICLE_SLUGS)[number];

export const journalGuideArticleSlugs = new Set<string>(JOURNAL_QA_GUIDE_ARTICLE_SLUGS);

/** Primary Q&A article per topic hub (only hubs with a matching guide). */
export const journalQaGuideSlugByTopicHub: Partial<
  Record<JournalTopicHubId, JournalQaGuideArticleSlug>
> = {
  "better-sleep": "best-incense-for-sleep",
  "small-space-living": "best-incense-for-small-apartments",
  "guides-care": "is-incense-safe-for-pets",
};

export function isJournalGuideArticle(slug: string): boolean {
  const essay = getEssayBySlug(slug);
  if (essay?.journal?.bodyFormat === "guide") return true;
  if (essay?.journal?.bodyFormat === "editorial") return false;
  return journalGuideArticleSlugs.has(slug);
}

export function filterJournalQaGuideSlugs(
  slugs: readonly string[],
): JournalQaGuideArticleSlug[] {
  return slugs.filter((slug): slug is JournalQaGuideArticleSlug =>
    isJournalGuideArticle(slug),
  );
}

/** Q&A guide count per topic hub — for journal index hub cards and sidebar. */
export function countJournalQaArticlesForTopicHub(
  articles: readonly { slug: string; categoryId: string }[],
  hubId: JournalTopicHubId,
): number {
  return articles.filter(
    (article) =>
      article.categoryId === hubId && isJournalGuideArticle(article.slug),
  ).length;
}
