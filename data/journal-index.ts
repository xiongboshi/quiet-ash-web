import { JOURNAL_INDEX } from "@/lib/site-paths";

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
  { id: "all", label: "All Articles", count: 32 },
  { id: "mind-wellness", label: "Mind & Wellness", count: 8 },
  { id: "scents-ingredients", label: "Scents & Ingredients", count: 7 },
  { id: "rituals-practices", label: "Rituals & Practices", count: 6 },
  { id: "living-lifestyle", label: "Living & Lifestyle", count: 5 },
  { id: "guides-tips", label: "Guides & Tips", count: 6 },
  { id: "popular-questions", label: "Popular Questions", count: 9 },
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

export const journalIndexPopularQuestions = [
  {
    slug: "best-incense-for-sleep",
    question: "What is the best incense for sleep?",
    readMinutes: 6,
    href: "/journal/night-incense-ritual",
  },
  {
    slug: "how-long-burn-incense",
    question: "How long should I burn incense?",
    readMinutes: 4,
    href: "/journal/incense-patience",
  },
  {
    slug: "room-smell-naturally",
    question: "How do I make my room smell good naturally?",
    readMinutes: 5,
    href: "/journal/forgotten-incense-culture",
  },
  {
    slug: "burn-incense-daily",
    question: "Is it safe to burn incense every day?",
    readMinutes: 5,
    href: "/journal/good-incense-not-loud",
  },
  {
    slug: "scents-for-anxiety",
    question: "Which scents help with anxiety?",
    readMinutes: 6,
    href: "/journal/good-incense-not-loud",
  },
  {
    slug: "sandalwood-vs-lavender",
    question: "Sandalwood vs lavender: what's the difference?",
    readMinutes: 6,
    href: "/journal/what-is-agarwood",
  },
  {
    slug: "incense-vs-candles",
    question: "Incense vs. candles: which is better?",
    readMinutes: 7,
    href: "/journal/why-scholars-burned-incense",
  },
  {
    slug: "incense-for-studying",
    question: "What incense scent is best for studying?",
    readMinutes: 5,
    href: "/journal/what-is-agarwood",
  },
  {
    slug: "incense-meditation",
    question: "Can incense help with meditation?",
    readMinutes: 4,
    href: "/journal/incense-patience",
  },
] as const;

export const journalIndexBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Journal", href: JOURNAL_INDEX },
] as const;
