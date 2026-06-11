import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/why-do-we-need-deep-sleep` (Deep Sleep) */
export const journalArticleWhyDoWeNeedDeepSleep: JournalArticleTemplate = {
  slug: "why-do-we-need-deep-sleep",
  bodyFormat: "guide",
  documentTitle: "Why Do We Need Deep Sleep? | Quiet Ash",
  seoTitle: "Why Do We Need Deep Sleep?",
  seoDescription:
    "Why deep sleep matters for physical recovery, energy restoration, and overall health — and how it fits alongside REM sleep.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Why Do We Need Deep Sleep?",
        href: journalPath("why-do-we-need-deep-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Why Do We Need Deep Sleep?",
    subtitle:
      "Physical recovery, energy restoration, and nightly maintenance — the restorative stage your body depends on.",
    readMinutes: 10,
    updatedLabel: "Updated June 11, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Deep sleep is one of the most important stages of sleep. During this stage, the body focuses on physical recovery, energy restoration, and essential maintenance processes that support overall health.",
      "While every stage of sleep serves a purpose, deep sleep is particularly important for helping the body recover from daily activities and preparing for the next day.",
    ],
  },
  keyTakeaways: [
    {
      icon: "shield",
      text: "Deep sleep is a non-REM stage focused on physical recovery — often strongest early in the night",
    },
    {
      icon: "brain",
      text: "Muscle recovery, tissue repair, and energy replenishment happen during deep sleep",
    },
    {
      icon: "leaf",
      text: "Without enough deep sleep, many people wake tired despite hours in bed",
    },
    {
      icon: "scent",
      text: "Deep sleep also supports alertness and mental recovery alongside REM sleep",
    },
    {
      icon: "brain",
      text: "Adults typically spend 13% to 23% of sleep in deep sleep",
    },
    {
      icon: "leaf",
      text: "Consistent schedules and enough total sleep support healthy deep sleep",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "The Restorative Stage",
      paragraphs: [
        "Not every hour of sleep carries the same weight — deep sleep is where much of the body's physical repair work happens.",
        "Understanding why it matters can help explain mornings that feel clear versus mornings that feel heavy, even after a full night in bed.",
      ],
    },
    {
      id: "what-is-deep",
      number: 1,
      heading: "What Is Deep Sleep?",
      paragraphs: [
        "Deep sleep is a stage of non-REM sleep that occurs primarily during the first half of the night.",
        "During deep sleep, brain activity slows down, heart rate decreases, breathing becomes more regular, muscles relax, and physical recovery takes place.",
        "Deep sleep is often considered the most restorative stage of sleep.",
      ],
    },
    {
      id: "why-need",
      number: 2,
      heading: "Why Do We Need Deep Sleep?",
      paragraphs: [
        "The body relies on deep sleep to perform important recovery functions.",
        "Deep sleep may help support physical restoration, muscle recovery, tissue repair, energy replenishment, and immune system function.",
        "Without enough deep sleep, many people may wake up feeling tired even after spending enough hours in bed.",
      ],
    },
    {
      id: "body-recover",
      number: 3,
      heading: "How Does Deep Sleep Help the Body Recover?",
      paragraphs: [
        "During deep sleep, the body performs many maintenance processes.",
        "These may include repairing cells and tissues, supporting muscle recovery, restoring energy stores, and regulating important biological functions.",
        "This is why deep sleep is often associated with physical recovery.",
      ],
    },
    {
      id: "mental-performance",
      number: 4,
      heading: "Does Deep Sleep Affect Mental Performance?",
      paragraphs: [
        "Although REM sleep is strongly linked to learning and memory, deep sleep also contributes to healthy brain function.",
        "Deep sleep may help support memory consolidation, improve alertness, promote mental recovery, and maintain cognitive performance.",
        "Healthy sleep requires both deep sleep and REM sleep. Deep sleep vs REM sleep explains how the two stages differ.",
      ],
    },
    {
      id: "how-much",
      number: 5,
      heading: "How Much Deep Sleep Do Adults Need?",
      paragraphs: [
        "Most adults spend approximately 13% to 23% of total sleep time in deep sleep.",
        "The exact amount varies depending on age, lifestyle, overall sleep quality, and individual sleep patterns.",
        "Deep sleep naturally decreases as people get older.",
      ],
    },
    {
      id: "increase",
      number: 6,
      heading: "How Can You Increase Deep Sleep?",
      paragraphs: [
        "Helpful habits may include maintaining a consistent sleep schedule, getting enough total sleep, exercising regularly, managing stress, and creating a comfortable sleep environment.",
        "Improving overall sleep quality often helps support healthy deep sleep. How to get more deep sleep walks through practical habits.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Deep sleep is an essential part of healthy sleep.",
        "It helps the body recover, restore energy, and perform important maintenance functions that support overall well-being.",
        "Explore the Better Sleep hub for stages, cycles, patterns, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "why-important",
        question: "Why is deep sleep important?",
        answer: [
          {
            type: "paragraph",
            text: "Deep sleep supports physical recovery, energy restoration, and overall health.",
          },
        ],
      },
      {
        id: "better-than-rem",
        question: "Is deep sleep better than REM sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Both sleep stages are important and serve different functions.",
          },
        ],
      },
      {
        id: "when-occurs",
        question: "When does deep sleep occur?",
        answer: [
          {
            type: "paragraph",
            text: "Deep sleep typically occurs during the first half of the night.",
          },
        ],
      },
      {
        id: "tired-without",
        question: "Can you feel tired without enough deep sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Many people feel less refreshed when they do not get enough deep sleep.",
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
      { slug: "how-to-get-more-deep-sleep" },
      { slug: "signs-you-are-not-getting-enough-deep-sleep" },
      { slug: "deep-sleep-vs-rem-sleep" },
      { slug: "what-is-rem-sleep" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
