import {
  journalGuidesTipsHandCards,
  type JournalIndexArticleCard,
} from "@/data/journal-index-articles";
import type {
  TopicPageFeaturedArticle,
  TopicPageSearchPill,
} from "@/data/journal-topic-page-content";
import type { JournalArticleRelatedRef } from "@/types/journal-article";
import { journalPath } from "@/lib/site-paths";

/**
 * Adding a Better Sleep guide — update in one pass:
 * 1. `BETTER_SLEEP_CORE_SLUGS` and/or `BETTER_SLEEP_ARTICLE_SLUGS` (below)
 * 2. `data/journal-index-articles.ts` (index card, `categoryId: "better-sleep"`)
 * 3. `data/journal-articles/{slug}.ts` + `data/journal-articles/index.ts`
 * Topic hub pills, featured grid, and QA slug list derive from this file.
 */

/** Primary Sleep Hub cluster — hub order and default related-reading pool. */
export const BETTER_SLEEP_CORE_SLUGS = [
  "sleep-stages-explained",
  "why-is-sleep-important",
  "sleep-cycle-explained",
  "how-to-get-more-deep-sleep",
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

function betterSleepIndexCardsBySlug(): Map<string, JournalIndexArticleCard> {
  const map = new Map<string, JournalIndexArticleCard>();
  for (const card of journalGuidesTipsHandCards) {
    if (card.categoryId === "better-sleep") {
      map.set(card.slug, card);
    }
  }
  return map;
}

/** Optional shorter copy for the topic hub card grid (falls back to index card). */
const BETTER_SLEEP_TOPIC_CARD_OVERRIDES: Partial<
  Record<
    BetterSleepArticleSlug,
    Pick<TopicPageFeaturedArticle, "title" | "description" | "readMinutes">
  >
> = {
  "sleep-cycle-explained": {
    title: "Sleep Cycle Explained",
    description:
      "How light sleep, deep sleep, and REM fit together — and why some mornings feel clearer than others.",
    readMinutes: 12,
  },
  "how-to-get-more-deep-sleep": {
    title: "How to Get More Deep Sleep",
    description:
      "What deep sleep does for recovery and practical habits that may support deeper rest at night.",
    readMinutes: 11,
  },
  "why-bad-sleep-happens": {
    title: "Why Bad Sleep Happens",
    description:
      "Lifestyle habits, stress, screens, and bedroom atmosphere — a calm look at common reasons nights feel restless.",
    readMinutes: 11,
  },
  "green-noise-for-sleep": {
    title: "Green Noise for Sleep",
    description:
      "What green noise is, how it compares to white and brown noise, and how sound fits into a softer evening routine.",
    readMinutes: 8,
  },
  "how-to-fix-bad-sleep": {
    title: "How to Fix Bad Sleep",
    description:
      "Practical lifestyle steps to fix bad sleep through calmer evenings, bedroom atmosphere, and steady routines.",
    readMinutes: 9,
  },
  "sleep-meditation": {
    title: "Sleep Meditation",
    description:
      "Quiet breath, gentle attention, and evening rituals that support relaxation before bed.",
    readMinutes: 8,
  },
};

const BETTER_SLEEP_POPULAR_SEARCH_LABELS: Partial<
  Record<BetterSleepArticleSlug, string>
> = {
  "sleep-stages-explained": "sleep stages explained",
  "why-is-sleep-important": "why is sleep important",
  "sleep-cycle-explained": "sleep cycle explained",
  "how-to-get-more-deep-sleep": "how to get more deep sleep",
  "sleep-hygiene-guide": "sleep hygiene guide",
  "how-to-improve-sleep-quality-naturally": "improve sleep quality naturally",
  "why-bad-sleep-happens": "why bad sleep happens",
  "green-noise-for-sleep": "green noise for sleep",
  "how-to-fix-bad-sleep": "how to fix bad sleep",
  "sleep-meditation": "sleep meditation",
  "best-incense-for-sleep": "best incense for sleep",
  "bedroom-scents-for-better-sleep": "bedroom scents for sleep",
  "evening-wind-down-rituals-for-better-sleep": "evening wind-down rituals",
  "calming-bedroom-atmosphere-for-better-sleep": "calming bedroom atmosphere",
  "why-soft-scents-feel-relaxing-before-sleep": "soft scents before sleep",
  "should-you-burn-incense-before-bed": "burn incense before bed",
  "best-scent-for-sleep": "best scent for sleep",
};

/** Featured article cards for `/journal/better-sleep` — order follows `BETTER_SLEEP_ARTICLE_SLUGS`. */
export function betterSleepTopicFeaturedArticles(): TopicPageFeaturedArticle[] {
  const bySlug = betterSleepIndexCardsBySlug();
  return BETTER_SLEEP_ARTICLE_SLUGS.flatMap((slug) => {
    const card = bySlug.get(slug);
    if (!card) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[journal-sleep-hub] Missing index card for Better Sleep slug "${slug}" in journalGuidesTipsHandCards`,
        );
      }
      return [];
    }
    const override = BETTER_SLEEP_TOPIC_CARD_OVERRIDES[slug];
    return [
      {
        slug,
        title: override?.title ?? card.headline,
        description: override?.description ?? card.description,
        readMinutes: override?.readMinutes ?? card.readMinutes,
      },
    ];
  });
}

/** Popular search pills for the Better Sleep topic hub. */
export function betterSleepPopularSearches(): TopicPageSearchPill[] {
  return BETTER_SLEEP_ARTICLE_SLUGS.map((slug) => ({
    label:
      BETTER_SLEEP_POPULAR_SEARCH_LABELS[slug] ??
      slug.replace(/-/g, " "),
    href: journalPath(slug),
  }));
}

/** Slugs registered in the hub but missing from the journal index. */
export function getMissingBetterSleepIndexSlugs(): string[] {
  const indexed = betterSleepIndexCardsBySlug();
  return BETTER_SLEEP_ARTICLE_SLUGS.filter((slug) => !indexed.has(slug));
}
