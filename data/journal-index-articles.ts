import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";

export type JournalIndexArticleCard = {
  slug: string;
  categoryId: Exclude<JournalCategoryId, "all" | "popular-questions">;
  categoryLabel: string;
  title: string;
  description: string;
  readMinutes: number;
  date: string;
  imageSrc: string;
  imageAlt: string;
  tags: readonly JournalTagId[];
};

/** Journal index grid — copy matches editorial mock */
export const journalIndexArticleCards: JournalIndexArticleCard[] = [
  {
    slug: "night-incense-ritual",
    categoryId: "mind-wellness",
    categoryLabel: "MIND & WELLNESS",
    title: "5 Scents to Help You Sleep Better Naturally",
    description:
      "Discover the best calming scents to unwind your mind and support deeper, more restful sleep.",
    readMinutes: 5,
    date: "2024-05-12",
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
    imageAlt: "Incense burning in a bowl on a wooden bedside table",
    tags: ["sleep", "relaxation"],
  },
  {
    slug: "good-incense-not-loud",
    categoryId: "scents-ingredients",
    categoryLabel: "SCENTS & INGREDIENTS",
    title: "The Benefits of Citrus Aromatherapy",
    description:
      "From boosting mood to improving focus, citrus scents can transform your day in simple and powerful ways.",
    readMinutes: 4,
    date: "2024-05-08",
    imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
    imageAlt: "Citrus fruits and incense on a bright surface",
    tags: ["focus", "morning-routine"],
  },
  {
    slug: "incense-patience",
    categoryId: "rituals-practices",
    categoryLabel: "RITUALS & PRACTICES",
    title: "How to Build a Daily Incense Ritual",
    description:
      "Simple steps to create a mindful incense ritual that fits seamlessly into your everyday life.",
    readMinutes: 6,
    date: "2024-05-05",
    imageSrc: "/images/generated/essay-incense-patience.png",
    imageAlt: "Meditation space with incense smoke and soft daylight",
    tags: ["meditation", "morning-routine"],
  },
  {
    slug: "forgotten-incense-culture",
    categoryId: "living-lifestyle",
    categoryLabel: "LIVING & LIFESTYLE",
    title: "Slow Living: Finding Peace in Small Moments",
    description:
      "Embracing a slower pace and finding beauty in the little things around you.",
    readMinutes: 4,
    date: "2024-04-30",
    imageSrc: "/images/generated/essay-forgotten-incense-culture.png",
    imageAlt: "Soft light in a calm living room with neutral tones",
    tags: ["relaxation", "stress-relief"],
  },
  {
    slug: "why-scholars-burned-incense",
    categoryId: "scents-ingredients",
    categoryLabel: "SCENTS & INGREDIENTS",
    title: "Lavender: A Timeless Calming Scent",
    description:
      "Exploring the relaxing benefits of lavender and why it's a staple in mindful living.",
    readMinutes: 5,
    date: "2024-04-25",
    imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
    imageAlt: "Lavender sprigs beside incense on linen",
    tags: ["sleep", "relaxation", "stress-relief"],
  },
  {
    slug: "what-is-agarwood",
    categoryId: "guides-tips",
    categoryLabel: "GUIDES & TIPS",
    title: "How to Choose the Right Incense for You",
    description:
      "A beginner's guide to understanding scent families and finding your perfect match.",
    readMinutes: 6,
    date: "2024-04-20",
    imageSrc: "/images/generated/essay-what-is-agarwood.png",
    imageAlt: "Open book and incense on a wooden desk by the window",
    tags: ["focus", "meditation"],
  },
];
