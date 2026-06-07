import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/what-is-rem-sleep` (Sleep Basics / Deep Sleep) */
export const journalArticleWhatIsRemSleep: JournalArticleTemplate = {
  slug: "what-is-rem-sleep",
  bodyFormat: "guide",
  documentTitle: "What Is REM Sleep? | Quiet Ash",
  seoTitle: "What Is REM Sleep?",
  seoDescription:
    "What REM sleep is, why it matters for memory and dreams, and how it fits into healthy sleep cycles alongside deep sleep.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      { label: "What Is REM Sleep?", href: journalPath("what-is-rem-sleep") },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "What Is REM Sleep?",
    subtitle:
      "Dreams, memory, and emotional processing — the active brain stage that closes each sleep cycle.",
    readMinutes: 10,
    updatedLabel: "Updated June 7, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "REM stands for Rapid Eye Movement — a sleep stage marked by quick eye movements, vivid dreams, and high brain activity while most muscles stay relaxed.",
      "Most adults enter REM sleep several times each night as part of a normal sleep cycle. It supports memory, learning, and emotional regulation alongside deep sleep.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "REM usually begins about 90 minutes after falling asleep and repeats through the night",
    },
    {
      icon: "shield",
      text: "Memory consolidation, learning, and emotional processing are linked to REM sleep",
    },
    {
      icon: "leaf",
      text: "REM periods often grow longer toward morning",
    },
    {
      icon: "scent",
      text: "Most adults spend roughly 20% to 25% of total sleep in REM",
    },
    {
      icon: "brain",
      text: "REM and deep sleep are different stages with different roles",
    },
    {
      icon: "leaf",
      text: "Healthy sleep habits support both REM and physical recovery stages",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "REM in the Sleep Cycle",
      paragraphs: [
        "REM sleep is one of the most important stages of sleep and a normal part of every full sleep cycle.",
        "It is closely associated with dreaming, memory processing, learning, and emotional regulation — often after lighter and deeper stages have already begun the night's work.",
      ],
    },
    {
      id: "what-is-rem",
      number: 1,
      heading: "What Is REM Sleep?",
      paragraphs: [
        "REM sleep is a stage of sleep characterized by increased brain activity and rapid eye movements.",
        "Although the brain becomes highly active during REM sleep, most muscles remain relaxed.",
        "REM sleep typically begins about 90 minutes after falling asleep and occurs several times throughout the night. Sleep cycle explained shows how REM fits into the repeating pattern.",
      ],
    },
    {
      id: "why-important",
      number: 2,
      heading: "Why Is REM Sleep Important?",
      paragraphs: [
        "REM sleep plays an important role in brain function.",
        "Research suggests that REM sleep may help support memory consolidation, learning and information processing, emotional regulation, and cognitive performance.",
        "A healthy sleep pattern includes both REM sleep and deep sleep — not one without the other.",
      ],
    },
    {
      id: "what-happens",
      number: 3,
      heading: "What Happens During REM Sleep?",
      paragraphs: [
        "Several unique processes occur during REM sleep.",
        "These may include rapid eye movements, increased brain activity, vivid dreams, temporary muscle relaxation, and memory processing.",
        "Because the brain remains active during REM sleep, many of the most memorable dreams occur during this stage.",
      ],
    },
    {
      id: "how-much",
      number: 4,
      heading: "How Much REM Sleep Do You Need?",
      paragraphs: [
        "Most adults spend approximately 20% to 25% of total sleep time in REM sleep.",
        "The exact amount varies depending on age, lifestyle, and individual sleep patterns.",
        "REM periods usually become longer later in the night.",
      ],
    },
    {
      id: "too-little",
      number: 5,
      heading: "Can You Get Too Little REM Sleep?",
      paragraphs: [
        "Poor sleep habits, sleep interruptions, and insufficient sleep may reduce REM sleep.",
        "Potential effects of inadequate REM sleep may include daytime fatigue, difficulty concentrating, memory challenges, and reduced mental performance.",
        "Maintaining healthy sleep habits may help support normal REM sleep patterns.",
      ],
    },
    {
      id: "improve-rem",
      number: 6,
      heading: "How Can You Improve REM Sleep?",
      paragraphs: [
        "Helpful habits may include following a consistent sleep schedule, getting enough total sleep, managing stress levels, limiting alcohol before bed, and creating a comfortable sleep environment.",
        "Improving overall sleep quality often supports healthier REM sleep. Deep sleep vs REM sleep explains how both stages work together.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "REM sleep is an essential part of healthy sleep.",
        "It supports memory, learning, emotional processing, and overall cognitive function. Understanding REM sleep can help you better appreciate the role that quality sleep plays in overall well-being.",
        "Explore the Better Sleep hub for stages, cycles, deeper rest, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "what-stands-for",
        question: "What does REM stand for?",
        answer: [
          {
            type: "paragraph",
            text: "REM stands for Rapid Eye Movement.",
          },
        ],
      },
      {
        id: "same-as-deep",
        question: "Is REM sleep the same as deep sleep?",
        answer: [
          {
            type: "paragraph",
            text: "No. REM sleep and deep sleep are different stages of sleep with different functions.",
          },
        ],
      },
      {
        id: "when-occurs",
        question: "When does REM sleep occur?",
        answer: [
          {
            type: "paragraph",
            text: "REM sleep usually begins about 90 minutes after falling asleep and repeats throughout the night.",
          },
        ],
      },
      {
        id: "why-dream",
        question: "Why do people dream during REM sleep?",
        answer: [
          {
            type: "paragraph",
            text: "The brain becomes highly active during REM sleep, which is why vivid dreaming often occurs during this stage.",
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
      { slug: "sleep-cycle-explained" },
      { slug: "sleep-stages-explained" },
      { slug: "deep-sleep-vs-rem-sleep" },
      { slug: "how-to-get-more-deep-sleep" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
