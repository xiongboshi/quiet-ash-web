import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import {
  JOURNAL_QA_GUIDE_ARTICLE_SLUGS,
  journalGuideArticleSlugs,
  type JournalQaGuideArticleSlug,
} from "@/data/journal-qa-guide-article-slugs";
import { getEssayBySlug } from "@/lib/essays";

export {
  JOURNAL_QA_GUIDE_ARTICLE_SLUGS,
  journalGuideArticleSlugs,
  type JournalQaGuideArticleSlug,
};

/** Primary Q&A article per topic hub (only hubs with a matching guide). */
export const journalQaGuideSlugByTopicHub: Partial<
  Record<JournalTopicHubId, JournalQaGuideArticleSlug>
> = {
  "better-sleep": "best-incense-for-sleep",
  "small-space-living": "best-incense-for-small-apartments",
  "calm-evenings": "incense-after-work",
  "quiet-routines": "tea-and-incense-rituals",
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
