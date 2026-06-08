import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/what-causes-sleep-deprivation` (Sleep Problems) */
export const journalArticleWhatCausesSleepDeprivation: JournalArticleTemplate = {
  slug: "what-causes-sleep-deprivation",
  bodyFormat: "guide",
  documentTitle: "What Causes Sleep Deprivation? | Quiet Ash",
  seoTitle: "What Causes Sleep Deprivation?",
  seoDescription:
    "Common causes of sleep deprivation — stress, screens, irregular schedules, and poor habits — and practical steps toward better rest.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "What Causes Sleep Deprivation?",
        href: journalPath("what-causes-sleep-deprivation"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "What Causes Sleep Deprivation?",
    subtitle:
      "Stress, screens, irregular rhythms — understanding what drains sleep is the first step toward better nights.",
    readMinutes: 10,
    updatedLabel: "Updated June 8, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep deprivation occurs when a person does not get enough sleep to meet their physical and mental needs. While occasional sleep loss is common, ongoing sleep deprivation may affect energy levels, concentration, mood, and overall well-being.",
      "Understanding the causes of sleep deprivation is an important step toward improving sleep quality.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "Too few hours, frequent waking, and poor-quality sleep all count as deprivation",
    },
    {
      icon: "shield",
      text: "Stress, irregular schedules, and late screens are among the most common causes",
    },
    {
      icon: "leaf",
      text: "Work demands, noise, and poor sleep habits often overlap",
    },
    {
      icon: "scent",
      text: "An active mind at bedtime makes falling and staying asleep harder",
    },
    {
      icon: "brain",
      text: "A consistent sleep schedule helps regulate the body's internal clock",
    },
    {
      icon: "leaf",
      text: "Small daily habit changes can support better sleep over time",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Understanding Sleep Deprivation",
      paragraphs: [
        "Sleep deprivation can build quietly — a few late nights, early alarms, and restless hours that add up.",
        "Identifying what is pulling sleep short makes it easier to choose habits that support calmer, more restorative evenings.",
      ],
    },
    {
      id: "what-is",
      number: 1,
      heading: "What Is Sleep Deprivation?",
      paragraphs: [
        "Sleep deprivation refers to getting less sleep than the body requires.",
        "This may involve sleeping too few hours, frequently waking during the night, experiencing poor-quality sleep, or maintaining an irregular sleep schedule.",
        "Over time, insufficient sleep can affect many aspects of daily life.",
      ],
    },
    {
      id: "common-causes",
      number: 2,
      heading: "What Are the Most Common Causes of Sleep Deprivation?",
      paragraphs: [
        "Many factors can contribute to sleep deprivation.",
        "Common causes include stress and anxiety, irregular sleep schedules, excessive screen time before bed, work or study demands, environmental noise, and poor sleep habits.",
        "In many cases, several factors may contribute at the same time. Why bad sleep happens explores overlapping lifestyle and bedroom reasons.",
      ],
    },
    {
      id: "stress",
      number: 3,
      heading: "Can Stress Cause Sleep Deprivation?",
      paragraphs: [
        "Yes. Stress is one of the most common reasons people struggle to get enough sleep.",
        "When the mind remains active at bedtime, it may become more difficult to fall asleep, stay asleep, and achieve restorative sleep.",
        "Managing stress may help support healthier sleep patterns.",
      ],
    },
    {
      id: "screen-time",
      number: 4,
      heading: "Does Screen Time Contribute to Sleep Deprivation?",
      paragraphs: [
        "Electronic devices can affect sleep habits.",
        "Using phones, tablets, or computers late at night may delay bedtime, make it harder to fall asleep, and reduce overall sleep quality.",
        "Limiting screen use before bed may help support better sleep.",
      ],
    },
    {
      id: "irregular-schedule",
      number: 5,
      heading: "Can an Irregular Sleep Schedule Affect Sleep?",
      paragraphs: [
        "A consistent sleep schedule helps regulate the body's internal clock.",
        "Frequently changing bedtime or wake-up times may disrupt normal sleep patterns and increase the risk of sleep deprivation.",
        "Maintaining regular sleep hours can support more consistent rest.",
      ],
    },
    {
      id: "reduce",
      number: 6,
      heading: "How Can You Reduce Sleep Deprivation?",
      paragraphs: [
        "Helpful strategies may include following a consistent sleep schedule, creating a relaxing bedtime routine, reducing evening screen exposure, managing daily stress, and maintaining a comfortable sleep environment.",
        "Small improvements in daily habits can often lead to better sleep over time. Sleep hygiene tips and how to fix bad sleep offer practical next steps.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep deprivation can result from a variety of lifestyle and environmental factors.",
        "Understanding these causes can help you identify habits that may be affecting your sleep and make positive changes over time.",
        "Explore the Better Sleep hub for effects, solutions, and calm evening rituals when nights feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "main-cause",
        question: "What is the main cause of sleep deprivation?",
        answer: [
          {
            type: "paragraph",
            text: "Stress, irregular schedules, and poor sleep habits are among the most common causes.",
          },
        ],
      },
      {
        id: "how-much-sleep",
        question: "How much sleep do adults need?",
        answer: [
          {
            type: "paragraph",
            text: "Most adults generally require seven to nine hours of sleep per night.",
          },
        ],
      },
      {
        id: "concentration",
        question: "Can sleep deprivation affect concentration?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Insufficient sleep may reduce focus, alertness, and mental performance.",
          },
        ],
      },
      {
        id: "better-habits",
        question: "Can better sleep habits reduce sleep deprivation?",
        answer: [
          {
            type: "paragraph",
            text: "Healthy sleep routines may help many people improve sleep duration and quality.",
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
      { slug: "effects-of-sleep-deprivation" },
      { slug: "how-to-fix-bad-sleep" },
      { slug: "sleep-hygiene-tips" },
      { slug: "tips-for-better-sleep-quality" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
