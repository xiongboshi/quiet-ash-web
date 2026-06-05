import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/what-is-sleep` (Sleep Basics) */
export const journalArticleWhatIsSleep: JournalArticleTemplate = {
  slug: "what-is-sleep",
  bodyFormat: "guide",
  documentTitle: "What Is Sleep? | Quiet Ash",
  seoTitle: "What Is Sleep?",
  seoDescription:
    "What sleep is in simple terms — how the body and brain recover at night, what happens during sleep stages, and why rest matters for health.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      { label: "What Is Sleep?", href: journalPath("what-is-sleep") },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "What Is Sleep?",
    subtitle:
      "Recovery, repair, and memory — what actually happens during a third of your life.",
    readMinutes: 9,
    updatedLabel: "Updated June 5, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep is a natural biological process that allows the body and mind to recover, repair, and prepare for the next day.",
      "While you rest, the body remains active — repairing tissues, supporting immunity, processing memories, and regulating hormones. Healthy sleep underpins physical health, brain function, mood, and overall well-being.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "Sleep is active maintenance — not simply switching off",
    },
    {
      icon: "shield",
      text: "The body repairs tissues, conserves energy, and supports immune function overnight",
    },
    {
      icon: "leaf",
      text: "Light sleep, deep sleep, and REM repeat in cycles through the night",
    },
    {
      icon: "scent",
      text: "Most adults need roughly seven to nine hours — quality matters as much as duration",
    },
    {
      icon: "brain",
      text: "Poor sleep may affect focus, mood, energy, and daily performance",
    },
    {
      icon: "leaf",
      text: "Steady routines and a calm bedroom support more restorative rest",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Sleep in Simple Terms",
      paragraphs: [
        "Although people spend roughly one-third of their lives sleeping, many do not fully understand why sleep is so important.",
        "Healthy sleep supports physical health, brain function, memory, mood, and overall well-being — starting with what happens once you close your eyes.",
      ],
    },
    {
      id: "what-is-sleep",
      number: 1,
      heading: "What Is Sleep?",
      paragraphs: [
        "Sleep is a state of reduced awareness during which the body and brain perform essential maintenance functions.",
        "While sleeping, the body remains active in many ways, including repairing tissues, conserving energy, supporting immune function, processing memories, and regulating hormones.",
        "Sleep is not simply a period of inactivity. It is a critical part of human health.",
      ],
    },
    {
      id: "why-we-need-sleep",
      number: 2,
      heading: "Why Do We Need Sleep?",
      paragraphs: [
        "The body relies on sleep to recover from daily activities. Without enough sleep, many important processes become less effective.",
        "Sleep helps support physical recovery, mental performance, learning and memory, emotional well-being, and overall health.",
        "For a deeper look at why rest matters day to day, see why is sleep important.",
      ],
    },
    {
      id: "what-happens-during-sleep",
      number: 3,
      heading: "What Happens During Sleep?",
      paragraphs: [
        "Throughout the night, the body moves through different sleep stages — light sleep, deep sleep, and REM sleep.",
        "Each stage contributes to recovery and healthy brain function. Most adults cycle through these stages multiple times every night.",
        "Sleep stages explained walks through each phase; sleep cycle explained shows how they repeat across the night.",
      ],
    },
    {
      id: "how-much-sleep",
      number: 4,
      heading: "How Much Sleep Do Adults Need?",
      paragraphs: [
        "Most adults generally need between seven and nine hours of sleep per night.",
        "However, individual needs can vary depending on age, lifestyle, and personal circumstances.",
        "Quality sleep is often just as important as sleep duration.",
      ],
    },
    {
      id: "not-enough-sleep",
      number: 5,
      heading: "What Happens If You Do Not Get Enough Sleep?",
      paragraphs: [
        "Insufficient sleep may affect both physical and mental performance.",
        "Common effects include fatigue, difficulty concentrating, reduced alertness, mood changes, and lower productivity.",
        "Consistent sleep habits are important for maintaining long-term well-being.",
      ],
    },
    {
      id: "improve-quality",
      number: 6,
      heading: "How Can You Improve Sleep Quality?",
      paragraphs: [
        "Many healthy habits can support better sleep.",
        "Examples include maintaining a regular bedtime, limiting caffeine late in the day, creating a comfortable sleep environment, reducing screen time before bed, and following a calming evening routine.",
        "How to sleep well naturally and our sleep hygiene guide gather practical habits in one place.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep is one of the foundations of good health.",
        "Understanding what sleep is and why it matters can help you develop habits that support better rest and improved quality of life.",
        "Explore the Better Sleep hub for stages, cycles, deeper rest, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "simple-terms",
        question: "What is sleep in simple terms?",
        answer: [
          {
            type: "paragraph",
            text: "Sleep is a natural state that allows the body and brain to rest, recover, and perform essential maintenance functions.",
          },
        ],
      },
      {
        id: "why-important",
        question: "Why is sleep important?",
        answer: [
          {
            type: "paragraph",
            text: "Sleep supports physical recovery, memory, learning, mood, and overall health.",
          },
        ],
      },
      {
        id: "how-many-stages",
        question: "How many sleep stages are there?",
        answer: [
          {
            type: "paragraph",
            text: "Modern sleep research generally identifies four sleep stages, including REM sleep.",
          },
        ],
      },
      {
        id: "poor-sleep-health",
        question: "Can poor sleep affect health?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Poor sleep may affect energy levels, concentration, mood, and overall well-being.",
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
      { slug: "why-is-sleep-important" },
      { slug: "sleep-stages-explained" },
      { slug: "sleep-cycle-explained" },
      { slug: "how-to-get-more-deep-sleep" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
