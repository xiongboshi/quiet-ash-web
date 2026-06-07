import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/sleep-stages-explained` (Sleep Basics) */
export const journalArticleSleepStagesExplained: JournalArticleTemplate = {
  slug: "sleep-stages-explained",
  bodyFormat: "guide",
  documentTitle: "Sleep Stages Explained | Quiet Ash",
  seoTitle: "Sleep Stages Explained",
  seoDescription:
    "Learn what sleep stages are — light sleep, deep sleep, and REM — and why each phase matters for recovery, memory, and how you feel in the morning.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Sleep Stages Explained",
        href: journalPath("sleep-stages-explained"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Sleep Stages Explained",
    subtitle:
      "Light sleep, deep sleep, and REM — how the body moves through the night and why timing matters.",
    readMinutes: 11,
    updatedLabel: "Updated June 4, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep is not a single state. Throughout the night, the body moves through different sleep stages, each serving a unique purpose.",
      "Most adults pass through four main stages several times per night. Understanding them can explain why quality sleep matters and why waking at certain times may leave you feeling more tired than expected.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "Most adults cycle through four sleep stages — including REM — four to six times each night",
    },
    {
      icon: "shield",
      text: "Deep sleep supports physical recovery; REM sleep supports memory and emotional processing",
    },
    {
      icon: "leaf",
      text: "Stage 2 is the longest phase and bridges lighter rest with deeper restoration",
    },
    {
      icon: "scent",
      text: "Waking during deep sleep often causes grogginess that fades slowly",
    },
    {
      icon: "brain",
      text: "REM periods generally grow longer toward morning",
    },
    {
      icon: "leaf",
      text: "Consistent schedules and a calm bedroom support natural stage progression",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Why Sleep Stages Matter",
      paragraphs: [
        "Sleep is not a single switch. It is a sequence of phases that repeat in cycles across the night.",
        "Understanding sleep stages can help explain why some mornings feel clear and others feel heavy — even after similar time in bed. For how those stages fit into repeating cycles, see our guide on the sleep cycle explained.",
      ],
    },
    {
      id: "what-are-sleep-stages",
      number: 1,
      heading: "What Are Sleep Stages?",
      paragraphs: [
        "Sleep stages are different phases of sleep that occur during a sleep cycle.",
        "Most adults move through four stages of sleep several times each night. Together, these stages support physical recovery, memory processing, learning, and overall well-being.",
        "The stages include:",
      ],
      bullets: [
        { text: "Stage 1 Sleep" },
        { text: "Stage 2 Sleep" },
        { text: "Deep Sleep (Stage 3)" },
        { text: "REM Sleep" },
      ],
      subsections: [
        {
          paragraphs: ["Each stage plays a different role in helping the body and mind recover."],
        },
      ],
    },
    {
      id: "stage-1",
      number: 2,
      heading: "Stage 1 Sleep",
      paragraphs: [
        "Stage 1 is the lightest stage of sleep.",
        "This stage occurs as you transition from being awake to asleep. Muscles begin to relax, breathing slows slightly, and brain activity starts to change.",
        "Most people spend only a few minutes in this stage before moving deeper.",
      ],
    },
    {
      id: "stage-2",
      number: 3,
      heading: "Stage 2 Sleep",
      paragraphs: [
        "Stage 2 is a deeper form of light sleep.",
        "During this stage, heart rate slows, body temperature drops, eye movements stop, and brain activity becomes more organized.",
        "Most of the night is spent in Stage 2 sleep. This stage helps prepare the body for deeper sleep later in the cycle.",
      ],
    },
    {
      id: "deep-sleep",
      number: 4,
      heading: "Deep Sleep (Stage 3)",
      paragraphs: [
        "Deep sleep is often considered the most physically restorative stage.",
        "During deep sleep, muscles recover, tissues repair, energy stores are replenished, and the immune system performs maintenance functions.",
        "It is often difficult to wake someone during deep sleep. People who wake up during this stage may feel groggy or disoriented.",
        "If you want habits that may support more time in this phase, our guide on how to get more deep sleep walks through practical evening routines.",
      ],
    },
    {
      id: "rem-sleep",
      number: 5,
      heading: "REM Sleep",
      paragraphs: [
        "REM stands for Rapid Eye Movement.",
        "This stage is associated with vivid dreams, memory processing, learning, and emotional regulation. Brain activity increases during REM sleep, even though the body remains relaxed.",
        "REM periods generally become longer as the night progresses — one reason the final hours of rest can feel different from the first.",
      ],
    },
    {
      id: "why-stages-matter",
      number: 6,
      heading: "Why Do Sleep Stages Matter?",
      paragraphs: [
        "Each sleep stage supports different functions.",
        "Without enough deep sleep, physical recovery may be affected. Without enough REM sleep, memory and learning processes may not function as effectively.",
        "Healthy sleep depends on moving naturally through all sleep stages throughout the night — not only on total hours in bed.",
      ],
    },
    {
      id: "support-healthy-stages",
      number: 7,
      heading: "How Can You Support Healthy Sleep Stages?",
      paragraphs: [
        "Good sleep habits may help support normal sleep patterns.",
        "Helpful practices include maintaining a consistent sleep schedule, reducing screen time before bed, limiting caffeine late in the day, creating a comfortable sleep environment, and following a relaxing evening routine.",
        "Our sleep hygiene guide gathers these habits in one calm checklist. Small changes often produce meaningful improvements over time.",
      ],
    },
    {
      id: "final-thoughts",
      number: 8,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep stages work together to support recovery, learning, and overall well-being.",
        "Understanding how these stages function can help you build healthier sleep habits and improve your overall sleep quality.",
        "Explore the Better Sleep hub for cycles, deeper rest, and gentle solutions when nights feel harder than usual.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "how-many-stages",
        question: "How many sleep stages are there?",
        answer: [
          {
            type: "paragraph",
            text: "Modern sleep science generally describes four main stages of sleep, including REM sleep.",
          },
        ],
      },
      {
        id: "most-important-stage",
        question: "Which sleep stage is the most important?",
        answer: [
          {
            type: "paragraph",
            text: "Each stage serves a different purpose. Deep sleep supports physical recovery, while REM sleep supports learning and memory.",
          },
        ],
      },
      {
        id: "how-many-repeats",
        question: "How many times do sleep stages repeat each night?",
        answer: [
          {
            type: "paragraph",
            text: "Most adults experience four to six sleep cycles each night, moving through the stages repeatedly.",
          },
        ],
      },
      {
        id: "poor-habits",
        question: "Can poor sleep habits affect sleep stages?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Stress, irregular schedules, caffeine, and environmental disturbances may affect normal sleep patterns.",
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
      { slug: "deep-sleep-vs-rem-sleep" },
      { slug: "sleep-cycle-explained" },
      { slug: "how-to-get-more-deep-sleep" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
