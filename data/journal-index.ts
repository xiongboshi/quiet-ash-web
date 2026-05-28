import { JOURNAL_INDEX } from "@/lib/site-paths";
import { journalPopularQuestions } from "@/data/journal-popular-questions";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";

export type { JournalTopicHubId };

/** Topic-first semantic categories (hub pages at `/journal/{id}`). */
export type JournalEssayCategoryId = JournalTopicHubId;

export type JournalCategoryId =
  | "all"
  | JournalTopicHubId
  | "popular-questions";

export type JournalSortId = "newest" | "oldest";

export type JournalTagId =
  | "sleep"
  | "stress-relief"
  | "focus"
  | "meditation"
  | "morning-routine"
  | "relaxation";

/** Sidebar + filters — topic clusters, not generic blog aisles. */
export const journalIndexCategoryDefinitions = [
  { id: "better-sleep", label: "Better Sleep" },
  { id: "small-space-living", label: "Small Space Living" },
  { id: "calm-evenings", label: "Calm Evenings" },
  { id: "quiet-routines", label: "Quiet Routines" },
  { id: "cozy-home", label: "Cozy Home" },
  { id: "guides-care", label: "Guides & Care" },
] as const satisfies readonly { id: JournalTopicHubId; label: string }[];

/** @deprecated Use `resolveJournalIndexCategories(articles)` on the journal index page. */
export const journalIndexCategories = [
  { id: "all", label: "All Articles", count: 0 },
  ...journalIndexCategoryDefinitions.map((c) => ({ ...c, count: 0 })),
  {
    id: "popular-questions",
    label: "Popular Questions",
    count: journalPopularQuestions.length,
  },
] as const satisfies readonly {
  id: JournalCategoryId;
  label: string;
  count: number;
}[];

export { journalPopularQuestions };

export const journalIndexTags = [
  { id: "sleep", label: "Sleep" },
  { id: "stress-relief", label: "Stress Relief" },
  { id: "focus", label: "Focus" },
  { id: "meditation", label: "Meditation" },
  { id: "morning-routine", label: "Morning Routine" },
  { id: "relaxation", label: "Relaxation" },
] as const satisfies readonly { id: JournalTagId; label: string }[];

export const journalIndexSortOptions = [
  { id: "newest", label: "Newest" },
  { id: "oldest", label: "Oldest" },
] as const satisfies readonly { id: JournalSortId; label: string }[];

export const journalIndexHero = {
  title: "Journal",
  tagline: "Scents, rituals, and slower ways of living.",
  lede: "Thoughtful guides and quiet inspiration for calmer days and softer homes.",
  imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
  imageAlt:
    "Incense with smoke, ceramic mug, greenery and book on a cream surface in soft light",
} as const;

export const journalIndexBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Journal", href: JOURNAL_INDEX },
] as const;
