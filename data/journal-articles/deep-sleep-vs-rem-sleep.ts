import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/deep-sleep-vs-rem-sleep` (Sleep Basics / Deep Sleep) */
export const journalArticleDeepSleepVsRemSleep: JournalArticleTemplate = {
  slug: "deep-sleep-vs-rem-sleep",
  bodyFormat: "guide",
  documentTitle: "Deep Sleep vs REM Sleep | Quiet Ash",
  seoTitle: "Deep Sleep vs REM Sleep",
  seoDescription:
    "How deep sleep and REM sleep differ — physical recovery vs memory and dreams — and why both matter in a healthy sleep cycle.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Deep Sleep vs REM Sleep",
        href: journalPath("deep-sleep-vs-rem-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Deep Sleep vs REM Sleep",
    subtitle:
      "Physical recovery and cognitive restoration — two stages, different jobs, one balanced night.",
    readMinutes: 11,
    updatedLabel: "Updated June 7, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Deep sleep and REM sleep are two of the most important stages of sleep. While both contribute to overall health and recovery, they serve different purposes.",
      "Deep sleep supports physical restoration; REM sleep supports memory, learning, and emotional processing. Quality sleep depends on both — not just hours in bed.",
    ],
  },
  keyTakeaways: [
    {
      icon: "shield",
      text: "Deep sleep repairs tissues and restores energy — often more prominent early in the night",
    },
    {
      icon: "brain",
      text: "REM sleep supports memory, learning, dreams, and emotional regulation",
    },
    {
      icon: "leaf",
      text: "Neither stage is more important — healthy sleep needs a balance of all stages",
    },
    {
      icon: "scent",
      text: "Adults typically spend 13–23% of sleep in deep sleep and 20–25% in REM",
    },
    {
      icon: "brain",
      text: "Stress, irregular schedules, and poor habits can reduce both stages",
    },
    {
      icon: "leaf",
      text: "Consistent routines and enough total sleep support healthier cycles",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Two Stages, One Cycle",
      paragraphs: [
        "Understanding the differences between deep sleep and REM sleep can help explain why quality sleep depends on more than just the number of hours spent in bed.",
        "The body naturally cycles between these stages throughout the night — each pass building on the last.",
      ],
    },
    {
      id: "what-is-deep",
      number: 1,
      heading: "What Is Deep Sleep?",
      paragraphs: [
        "Deep sleep is the most physically restorative stage of sleep.",
        "During deep sleep, muscles recover, tissues repair, energy is restored, and the immune system performs maintenance functions.",
        "Deep sleep typically occurs during the earlier part of the night. How to get more deep sleep explores habits that may support this stage.",
      ],
    },
    {
      id: "what-is-rem",
      number: 2,
      heading: "What Is REM Sleep?",
      paragraphs: [
        "REM sleep stands for Rapid Eye Movement sleep.",
        "This stage is associated with dreaming, memory consolidation, learning, and emotional processing.",
        "REM sleep periods become longer as the night progresses. What is REM sleep walks through this stage in more detail.",
      ],
    },
    {
      id: "difference",
      number: 3,
      heading: "What Is the Difference Between Deep Sleep and REM Sleep?",
      paragraphs: [
        "The primary difference is their role in recovery.",
        "Deep sleep mainly supports physical restoration, muscle recovery, and tissue repair.",
        "REM sleep mainly supports brain function, learning, memory processing, and emotional regulation.",
        "Both stages are important for overall health.",
      ],
    },
    {
      id: "which-more-important",
      number: 4,
      heading: "Which Is More Important: Deep Sleep or REM Sleep?",
      paragraphs: [
        "Neither stage is more important than the other.",
        "Healthy sleep requires a balance of all sleep stages.",
        "Deep sleep supports physical recovery, while REM sleep supports cognitive and emotional health. The body naturally cycles between these stages throughout the night.",
      ],
    },
    {
      id: "how-much",
      number: 5,
      heading: "How Much Deep Sleep and REM Sleep Should You Get?",
      paragraphs: [
        "Sleep needs vary between individuals.",
        "Most adults typically spend around 13% to 23% of sleep in deep sleep and around 20% to 25% of sleep in REM sleep.",
        "The exact percentages may vary depending on age and lifestyle.",
      ],
    },
    {
      id: "poor-sleep",
      number: 6,
      heading: "Can Poor Sleep Reduce Both Deep Sleep and REM Sleep?",
      paragraphs: [
        "Yes. Common factors that may affect sleep quality include stress, irregular sleep schedules, sleep deprivation, excessive alcohol consumption, and environmental disruptions.",
        "Improving overall sleep habits may help support healthier sleep stages. Sleep stages explained maps all four main phases in order.",
      ],
    },
    {
      id: "improve-both",
      number: 7,
      heading: "How Can You Improve Both Deep Sleep and REM Sleep?",
      paragraphs: [
        "Helpful strategies include maintaining a consistent sleep schedule, getting enough sleep each night, limiting caffeine late in the day, managing stress, and creating a relaxing bedtime routine.",
        "These habits may support healthier sleep cycles over time.",
      ],
    },
    {
      id: "final-thoughts",
      number: 8,
      heading: "Final Thoughts",
      paragraphs: [
        "Deep sleep and REM sleep work together to support both physical and mental health.",
        "Rather than focusing on one stage alone, maintaining healthy sleep habits can help support a balanced and restorative sleep cycle.",
        "Explore the Better Sleep hub for foundations, cycles, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "better-than",
        question: "Is deep sleep better than REM sleep?",
        answer: [
          {
            type: "paragraph",
            text: "No. Both sleep stages provide unique benefits and are important for overall health.",
          },
        ],
      },
      {
        id: "memory-stage",
        question: "Which sleep stage helps memory?",
        answer: [
          {
            type: "paragraph",
            text: "REM sleep is strongly associated with memory processing and learning.",
          },
        ],
      },
      {
        id: "recovery-stage",
        question: "Which sleep stage helps physical recovery?",
        answer: [
          {
            type: "paragraph",
            text: "Deep sleep is primarily responsible for physical restoration and recovery.",
          },
        ],
      },
      {
        id: "without-rem",
        question: "Can you function well without enough REM sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Insufficient REM sleep may affect concentration, memory, and emotional well-being.",
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
      { slug: "what-is-rem-sleep" },
      { slug: "how-to-get-more-deep-sleep" },
      { slug: "sleep-stages-explained" },
      { slug: "sleep-cycle-explained" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
