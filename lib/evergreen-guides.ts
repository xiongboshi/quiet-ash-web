import {
  EVERGREEN_GUIDE_SLUGS,
  evergreenGuideBySlug,
  evergreenGuides,
  isEvergreenGuideSlug,
  type EvergreenGuide,
  type EvergreenGuideSlug,
} from "@/data/evergreen-guides";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { getArticlesForTopicHub } from "@/lib/journal-topic-hubs";

export {
  EVERGREEN_GUIDE_SLUGS,
  evergreenGuides,
  isEvergreenGuideSlug,
  type EvergreenGuide,
  type EvergreenGuideSlug,
};

export function getEvergreenGuide(slug: string): EvergreenGuide | undefined {
  if (!isEvergreenGuideSlug(slug)) return undefined;
  return evergreenGuideBySlug[slug];
}

export function evergreenGuideSlugs(): EvergreenGuideSlug[] {
  return [...EVERGREEN_GUIDE_SLUGS];
}

export function getArticlesForEvergreenGuide(
  articles: readonly JournalIndexArticleResolved[],
  guide: EvergreenGuide,
  extraSlugs: readonly string[] = [],
): JournalIndexArticleResolved[] {
  const slugs = [
    ...new Set([
      ...(guide.featuredSlugs ?? []),
      ...extraSlugs,
    ]),
  ];
  if (slugs.length > 0) {
    const bySlug = new Map(articles.map((a) => [a.slug, a]));
    const picked = slugs
      .map((slug) => bySlug.get(slug))
      .filter((a): a is JournalIndexArticleResolved => Boolean(a));
    if (picked.length > 0) return picked;
  }
  return getArticlesForTopicHub(articles, guide.topicHubId, guide.featuredSlugs);
}
