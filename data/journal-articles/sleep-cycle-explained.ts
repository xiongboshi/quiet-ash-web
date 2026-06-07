import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/sleep-cycle-explained` (Sleep Basics) */
export const journalArticleSleepCycleExplained: JournalArticleTemplate = {
  slug: "sleep-cycle-explained",
  bodyFormat: "guide",
  documentTitle: "Sleep Cycle Explained | Quiet Ash",
  seoTitle: "Sleep Cycle Explained",
  seoDescription:
    "Learn how sleep cycles work — light sleep, deep sleep, and REM — and why some mornings feel refreshed while others do not.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Sleep Cycle Explained",
        href: journalPath("sleep-cycle-explained"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Sleep Cycle Explained",
    subtitle:
      "Light sleep, deep sleep, and REM — a calm look at the pattern behind a full night of rest.",
    readMinutes: 12,
    updatedLabel: "Updated June 3, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep is not a single state. Through the night, your body moves through repeating cycles of light sleep, deep sleep, and REM sleep.",
      "Most cycles last about 90 to 120 minutes. Understanding that rhythm can help explain why some mornings feel clear and others feel heavy, even after the same time in bed.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "A full sleep cycle usually lasts 90 to 120 minutes and repeats four to six times per night",
    },
    {
      icon: "shield",
      text: "Deep sleep supports physical recovery; REM sleep supports memory and emotional processing",
    },
    {
      icon: "leaf",
      text: "Most of the night is spent in lighter Stage 2 sleep between deeper phases",
    },
    {
      icon: "scent",
      text: "Stress, screens, noise, and irregular schedules can interrupt natural cycling",
    },
    {
      icon: "brain",
      text: "Waking during deep sleep often causes grogginess that fades slowly",
    },
    {
      icon: "leaf",
      text: "Consistent bedtimes and a calm room support steadier cycles over time",
    },
  ],
  sections: [
    {
      id: "why-cycles-matter",
      heading: "Why Sleep Cycles Matter",
      paragraphs: [
        "Throughout the night, your body does not simply switch off. It moves through a repeating pattern known as the sleep cycle.",
        "Understanding how those cycles work can help explain why some mornings you wake up refreshed while others leave you tired, even after spending the same number of hours in bed.",
      ],
    },
    {
      id: "what-is-sleep-cycle",
      number: 1,
      heading: "What Is a Sleep Cycle?",
      paragraphs: [
        "A sleep cycle is a series of sleep stages that your body moves through while sleeping.",
        "During a typical night, most people experience four to six complete cycles. Each cycle contains different stages that work together to support physical recovery, memory processing, and overall well-being.",
      ],
    },
    {
      id: "stages-of-sleep-cycle",
      number: 2,
      heading: "What Are the Stages of a Sleep Cycle?",
      paragraphs: [
        "A complete sleep cycle contains four main stages. Together they form the arc of a single pass through the night before the pattern begins again.",
      ],
      subsections: [
        {
          heading: "Stage 1: Light Sleep",
          paragraphs: [
            "This is the transition between wakefulness and sleep. Breathing begins to slow, muscles relax, and brain activity starts to change.",
            "Many people experience brief muscle twitches while falling asleep. This stage is short, but it opens the door into deeper rest.",
          ],
        },
        {
          heading: "Stage 2: Stable Sleep",
          paragraphs: [
            "Stage 2 is still considered light sleep, but it is deeper than Stage 1. Heart rate slows, body temperature drops, and brain activity becomes more organized.",
            "Most of the night is spent in this stage. It is the steady middle ground between surface rest and the most restorative phases.",
          ],
        },
        {
          heading: "Stage 3: Deep Sleep",
          paragraphs: [
            "Deep sleep is often considered the most physically restorative stage. The body repairs tissues, muscles recover, and energy stores are replenished.",
            "Waking up during deep sleep often causes grogginess and confusion. For a stage-by-stage overview, see sleep stages explained; for habits that may support more deep sleep, see how to get more deep sleep.",
          ],
        },
        {
          heading: "REM Sleep",
          paragraphs: [
            "REM stands for Rapid Eye Movement. Most dreaming occurs here, while the brain stays highly active for memory processing and emotional regulation.",
            "REM sleep typically becomes longer later in the night, which is one reason the final hours of rest can feel so different from the first.",
          ],
        },
      ],
    },
    {
      id: "how-many-cycles",
      number: 3,
      heading: "How Many Sleep Cycles Do You Need?",
      paragraphs: [
        "Most adults experience four to six complete sleep cycles each night. The exact number depends on total sleep duration, individual needs, and how often the night is interrupted.",
        "People who regularly sleep seven to nine hours generally complete enough cycles to support healthy recovery. Quality and continuity matter as much as the clock.",
      ],
    },
    {
      id: "what-disrupts",
      number: 4,
      heading: "What Can Disrupt Sleep Cycles?",
      paragraphs: [
        "Several factors can interrupt natural sleep patterns. When cycles are broken, it becomes harder to reach deep sleep and REM sleep consistently.",
        "Common causes include:",
      ],
      bullets: [
        { text: "Stress and anxiety" },
        { text: "Irregular sleep schedules" },
        { text: "Excessive caffeine" },
        { text: "Noise disturbances" },
        { text: "Bright light exposure before bed" },
        { text: "Frequent nighttime awakenings" },
      ],
      subsections: [
        {
          paragraphs: [
            "If poor sleep has become a pattern, our guide on why bad sleep happens explores lifestyle and bedroom atmosphere in more detail.",
          ],
        },
      ],
    },
    {
      id: "support-healthy-cycles",
      number: 5,
      heading: "How to Support Healthy Sleep Cycles",
      paragraphs: [
        "While no one can fully control sleep cycles, healthy habits may support more consistent sleep.",
        "Consider going to bed at the same time each night, maintaining a regular wake-up schedule, reducing screen exposure before bed, and creating a calm sleep environment.",
        "A relaxing nighttime routine — reading, gentle stretching, or quiet breath — can signal that the day is ending. Small changes often make a meaningful difference over time.",
      ],
    },
    {
      id: "final-thoughts",
      number: 6,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep cycles are a natural part of healthy sleep. Throughout the night, your body moves through light sleep, deep sleep, and REM sleep in a repeating pattern.",
        "Understanding these cycles can help you build better sleep habits and create a more supportive environment for rest and recovery.",
        "Explore the Better Sleep hub for hygiene, deeper rest, and gentle solutions when nights feel harder than usual.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "how-long-cycle",
        question: "How long is a sleep cycle?",
        answer: [
          {
            type: "paragraph",
            text: "Most sleep cycles last between 90 and 120 minutes.",
          },
        ],
      },
      {
        id: "how-many-per-night",
        question: "How many sleep cycles happen each night?",
        answer: [
          {
            type: "paragraph",
            text: "Most adults experience four to six sleep cycles during a typical night.",
          },
        ],
      },
      {
        id: "most-important-stage",
        question: "What is the most important stage of sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Each stage serves a different purpose. Deep sleep supports physical recovery, while REM sleep plays an important role in memory and learning.",
          },
        ],
      },
      {
        id: "poor-cycles-tired",
        question: "Can poor sleep cycles make you feel tired?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Interrupted sleep cycles may reduce the amount of deep sleep and REM sleep you receive, leading to fatigue and reduced alertness.",
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
      { slug: "sleep-stages-explained" },
      { slug: "what-is-rem-sleep" },
      { slug: "deep-sleep-vs-rem-sleep" },
      { slug: "how-to-get-more-deep-sleep" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
