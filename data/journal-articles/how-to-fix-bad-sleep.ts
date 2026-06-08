import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/how-to-fix-bad-sleep` */
export const journalArticleHowToFixBadSleep: JournalArticleTemplate = {
  slug: "how-to-fix-bad-sleep",
  bodyFormat: "guide",
  documentTitle: "How to Fix Bad Sleep | Quiet Ash",
  seoTitle: "How to Fix Bad Sleep",
  seoDescription:
    "Practical lifestyle steps to fix bad sleep — calmer evenings, bedroom atmosphere, consistent routines, and gentle habits that support rest over time.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "How to Fix Bad Sleep",
        href: journalPath("how-to-fix-bad-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "How to Fix Bad Sleep",
    subtitle:
      "Small, steady changes to evenings, environment, and rhythm — built for real apartments and busy days.",
    readMinutes: 9,
    updatedLabel: "Updated June 3, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Fixing bad sleep usually starts with habits and atmosphere, not a single quick fix.",
      "Many people see gradual improvement when they keep a steadier schedule, soften evening light, reduce late stimulation, and make the bedroom feel calmer before bed.",
    ],
  },
  keyTakeaways: [
    { icon: "leaf", text: "Consistency often matters more than one perfect night" },
    { icon: "brain", text: "Evenings need a transition, not an abrupt stop" },
    { icon: "shield", text: "Light, noise, and temperature shape how sleep feels" },
    { icon: "scent", text: "Gentle scent can mark the end of the day" },
    { icon: "leaf", text: "Screens and caffeine are common evening obstacles" },
    { icon: "brain", text: "Progress is usually gradual — small steps add up" },
  ],
  sections: [
    {
      id: "start-with-habits",
      heading: "Start With Evening Habits",
      paragraphs: [
        "Bad sleep often improves when the last hour of the day feels different from the rest.",
        "Try a fixed wind-down window: dim lights, put devices away, and repeat the same few actions most nights. The body learns the pattern faster than it learns occasional fixes.",
      ],
    },
    {
      id: "fix-the-room",
      number: 1,
      heading: "Fix the Sleep Environment",
      paragraphs: [
        "A bedroom that still feels like daytime can work against rest.",
        "Use softer lamps, cooler air when possible, and less visual clutter. If street noise is an issue, steady background sound — such as green noise — may help mask sudden interruptions.",
      ],
    },
    {
      id: "schedule",
      number: 2,
      heading: "Protect Your Sleep Schedule",
      paragraphs: [
        "Going to bed and waking at similar times supports a steadier internal clock.",
        "Weekends included, staying within about an hour of your usual times often helps more than sleeping in to compensate.",
      ],
    },
    {
      id: "stimulation",
      number: 3,
      heading: "Reduce Late Stimulation",
      paragraphs: [
        "Caffeine, heavy meals, intense exercise, and bright screens close to bed can keep nights alert.",
        "Move stimulating choices earlier; keep the last part of the evening quiet and predictable.",
      ],
    },
    {
      id: "ritual",
      number: 4,
      heading: "Add a Simple Night Ritual",
      paragraphs: [
        "Reading, stretching, journaling, or a short incense session can signal that the day is ending.",
        "Choose something you can repeat without effort — consistency beats complexity.",
      ],
    },
    {
      id: "when-to-adjust",
      number: 5,
      heading: "When to Keep Adjusting",
      paragraphs: [
        "If sleep still feels difficult after several weeks of steady habits, consider what changed in stress, travel, or environment.",
        "This guide is about lifestyle and atmosphere, not medical treatment. Persistent sleep problems deserve professional support.",
      ],
    },
    {
      id: "final-thoughts",
      number: 6,
      heading: "Final Thoughts",
      paragraphs: [
        "Fixing bad sleep is usually a process of stacking small wins: calmer room, calmer mind, calmer routine.",
        "Explore the related guides below for sleep hygiene, natural improvement tips, and gentle scent choices that fit your space.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "how-fast",
        question: "How long does it take to fix bad sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Some people notice calmer evenings within a few days; steadier sleep often builds over several weeks of consistent habits.",
          },
        ],
      },
      {
        id: "one-change",
        question: "What is the best first change to try?",
        answer: [
          {
            type: "paragraph",
            text: "A consistent bedtime and softer light in the last hour of the day are common starting points that work well with other adjustments.",
          },
        ],
      },
    ],
  },
  products: {
    heading: "Recommended for Calmer Evenings",
    items: [
      { slug: "brass-incense-stand" },
      { slug: "paper-incense-sleeve" },
      { slug: "wood-tray" },
      { slug: "small-agarwood-box" },
    ],
  },
  related: {
    heading: "Related Reading",
    items: [
      { slug: "what-causes-sleep-deprivation" },
      { slug: "effects-of-sleep-deprivation" },
      { slug: "why-bad-sleep-happens" },
      { slug: "sleep-hygiene-tips" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and bedroom atmosphere information — not medical advice.",
};
