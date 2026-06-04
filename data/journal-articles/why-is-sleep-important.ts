import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/why-is-sleep-important` (Sleep Basics) */
export const journalArticleWhyIsSleepImportant: JournalArticleTemplate = {
  slug: "why-is-sleep-important",
  bodyFormat: "guide",
  documentTitle: "Why Is Sleep Important? | Quiet Ash",
  seoTitle: "Why Is Sleep Important?",
  seoDescription:
    "Learn why sleep matters for physical recovery, brain function, immune health, and daily energy — and how healthy habits support better rest.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Why Is Sleep Important?",
        href: journalPath("why-is-sleep-important"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Why Is Sleep Important?",
    subtitle:
      "Recovery, focus, and long-term well-being — why rest belongs beside nutrition and movement.",
    readMinutes: 10,
    updatedLabel: "Updated June 4, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep is one of the most important biological processes for human health.",
      "Consistently getting enough quality sleep helps the body recover, supports brain function, and contributes to overall quality of life — alongside nutrition and exercise.",
    ],
  },
  keyTakeaways: [
    {
      icon: "shield",
      text: "Sleep supports tissue repair, immune function, and energy restoration",
    },
    {
      icon: "brain",
      text: "The brain processes memories and regulates emotions during sleep",
    },
    {
      icon: "leaf",
      text: "Most adults need roughly seven to nine hours — quality matters as much as duration",
    },
    {
      icon: "scent",
      text: "Poor sleep may reduce focus, mood stability, and daytime alertness",
    },
    {
      icon: "brain",
      text: "Consistent bedtimes and calmer evenings support more restorative nights",
    },
    {
      icon: "leaf",
      text: "Understanding sleep stages and cycles helps explain why some nights feel harder than others",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Why Sleep Matters",
      paragraphs: [
        "While many people focus on nutrition and exercise, sleep plays an equally important role in physical and mental well-being.",
        "Consistently getting enough quality sleep helps the body recover, supports brain function, and contributes to overall quality of life.",
      ],
    },
    {
      id: "why-humans-need-sleep",
      number: 1,
      heading: "Why Do Humans Need Sleep?",
      paragraphs: [
        "Sleep allows the body and brain to perform essential maintenance functions.",
        "During sleep, the body repairs tissues, supports immune function, restores energy, processes memories, and regulates important biological systems.",
        "Without sufficient sleep, these processes may become less effective — which is why sleep stages explained offers a useful look at what happens through the night.",
      ],
    },
    {
      id: "physical-benefits",
      number: 2,
      heading: "Physical Benefits of Sleep",
      paragraphs: [
        "Quality sleep supports many aspects of physical health.",
        "Potential benefits include improved energy levels, better recovery after physical activity, stronger immune function, and greater overall well-being.",
        "Sleep is often considered one of the foundations of a healthy lifestyle.",
      ],
    },
    {
      id: "mental-benefits",
      number: 3,
      heading: "Mental Benefits of Sleep",
      paragraphs: [
        "Sleep also plays an important role in brain health.",
        "During sleep, the brain processes information gathered throughout the day.",
        "Benefits may include improved concentration, better memory, enhanced learning, and emotional regulation.",
        "Many people notice reduced focus and mental clarity after a poor night's sleep.",
      ],
    },
    {
      id: "not-enough-sleep",
      number: 4,
      heading: "What Happens When You Do Not Get Enough Sleep?",
      paragraphs: [
        "Insufficient sleep may affect both physical and mental performance.",
        "Common effects include daytime fatigue, reduced alertness, difficulty concentrating, irritability, and lower productivity.",
        "Over time, consistently poor sleep may negatively affect overall well-being. Our guide on why bad sleep happens explores common lifestyle and bedroom causes in more detail.",
      ],
    },
    {
      id: "how-much-sleep",
      number: 5,
      heading: "How Much Sleep Do Adults Need?",
      paragraphs: [
        "Most adults generally require around seven to nine hours of sleep per night.",
        "However, individual needs may vary depending on age, lifestyle, and personal factors.",
        "Sleep quality is also important, not just total sleep duration — how you move through sleep cycles and stages matters too.",
      ],
    },
    {
      id: "improve-quality",
      number: 6,
      heading: "How Can You Improve Sleep Quality?",
      paragraphs: [
        "Healthy sleep habits may support more restorative sleep.",
        "Helpful strategies include keeping a consistent bedtime, limiting screen exposure before bed, creating a comfortable sleep environment, managing stress, and following a calming nighttime routine.",
        "The sleep hygiene guide and how to fix bad sleep offer practical next steps when nights feel restless. Small changes often produce meaningful improvements over time.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep is essential for physical recovery, mental performance, and overall health.",
        "Building healthy sleep habits can help improve sleep quality and support long-term well-being.",
        "Explore the Better Sleep hub for cycles, stages, deeper rest, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "why-health",
        question: "Why is sleep important for health?",
        answer: [
          {
            type: "paragraph",
            text: "Sleep supports physical recovery, brain function, immune health, and overall well-being.",
          },
        ],
      },
      {
        id: "mood",
        question: "Can lack of sleep affect mood?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Poor sleep may contribute to irritability, stress, and difficulty managing emotions.",
          },
        ],
      },
      {
        id: "vs-exercise",
        question: "Is sleep as important as exercise?",
        answer: [
          {
            type: "paragraph",
            text: "Both sleep and exercise play important roles in maintaining health and well-being.",
          },
        ],
      },
      {
        id: "longer-better",
        question: "Does sleeping longer always mean better sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Not necessarily. Sleep quality and consistency are also important factors.",
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
      { slug: "how-to-get-more-deep-sleep" },
      { slug: "sleep-hygiene-guide" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
