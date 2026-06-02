import type { JournalArticleRelatedRef } from "@/types/journal-article";
import { journalPath } from "@/lib/site-paths";

/** Primary Sleep Hub cluster — hub order and default related-reading pool. */
export const BETTER_SLEEP_CORE_SLUGS = [
  "sleep-hygiene-guide",
  "how-to-improve-sleep-quality-naturally",
  "why-bad-sleep-happens",
  "green-noise-for-sleep",
  "how-to-fix-bad-sleep",
  "sleep-meditation",
  "best-incense-for-sleep",
] as const;

export type BetterSleepCoreSlug = (typeof BETTER_SLEEP_CORE_SLUGS)[number];

/** All journal articles in the Better Sleep category. */
export const BETTER_SLEEP_ARTICLE_SLUGS = [
  ...BETTER_SLEEP_CORE_SLUGS,
  "bedroom-scents-for-better-sleep",
  "evening-wind-down-rituals-for-better-sleep",
  "calming-bedroom-atmosphere-for-better-sleep",
  "why-soft-scents-feel-relaxing-before-sleep",
  "should-you-burn-incense-before-bed",
  "best-scent-for-sleep",
] as const;

export type BetterSleepArticleSlug = (typeof BETTER_SLEEP_ARTICLE_SLUGS)[number];

const betterSleepSlugSet = new Set<string>(BETTER_SLEEP_ARTICLE_SLUGS);

export const BETTER_SLEEP_HUB_PATH = journalPath("better-sleep");

export const BETTER_SLEEP_HUB_BACK = {
  label: "Back to Better Sleep Hub",
  href: BETTER_SLEEP_HUB_PATH,
} as const;

export function isBetterSleepArticleSlug(
  slug: string,
): slug is BetterSleepArticleSlug {
  return betterSleepSlugSet.has(slug);
}

/** Up to four related refs from the core cluster, excluding the current article. */
export function betterSleepRelatedRefs(
  excludeSlug: string,
  limit = 4,
): JournalArticleRelatedRef[] {
  return BETTER_SLEEP_CORE_SLUGS.filter((slug) => slug !== excludeSlug)
    .slice(0, limit)
    .map((slug) => ({ slug }));
}

export function betterSleepRelatedBlock(excludeSlug: string) {
  return {
    heading: "Related Reading" as const,
    items: betterSleepRelatedRefs(excludeSlug),
  };
}
