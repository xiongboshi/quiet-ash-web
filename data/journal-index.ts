import { JOURNAL_INDEX } from "@/lib/site-paths";
import { journalPopularQuestions } from "@/data/journal-popular-questions";

export type JournalCategoryId =
  | "all"
  | "mind-wellness"
  | "scents-ingredients"
  | "rituals-practices"
  | "living-lifestyle"
  | "guides-tips"
  | "popular-questions";

export type JournalSortId = "newest" | "oldest";

export type JournalTagId =
  | "sleep"
  | "stress-relief"
  | "focus"
  | "meditation"
  | "morning-routine"
  | "relaxation";

export const journalIndexCategories = [
  { id: "all", label: "All Articles", count: 11 },
  { id: "mind-wellness", label: "Mind & Wellness", count: 1 },
  { id: "scents-ingredients", label: "Scents & Ingredients", count: 4 },
  { id: "rituals-practices", label: "Rituals & Practices", count: 4 },
  { id: "living-lifestyle", label: "Living & Lifestyle", count: 1 },
  { id: "guides-tips", label: "Guides & Tips", count: 1 },
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
  descriptionLines: [
    "Stories, tips, and inspiration for mindful living",
    "and everyday rituals.",
  ] as const,
  imageSrc: "/images/generated/essay-good-incense-not-loud.png",
  imageAlt:
    "Incense with smoke, ceramic mug, greenery and book on a cream surface in soft light",
} as const;

export const journalIndexBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Journal", href: JOURNAL_INDEX },
] as const;
