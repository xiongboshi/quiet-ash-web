import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/why-bad-sleep-happens` */
export const journalArticleWhyBadSleepHappens: JournalArticleTemplate = {
  slug: "why-bad-sleep-happens",
  bodyFormat: "guide",
  documentTitle: "Why Bad Sleep Happens | Quiet Ash",
  seoTitle: "Why Bad Sleep Happens",
  seoDescription:
    "Explore common lifestyle and bedroom atmosphere reasons for poor sleep — stress, screens, routines, and environment — and gentle habits that support calmer nights.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Why Bad Sleep Happens",
        href: journalPath("why-bad-sleep-happens"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Why Bad Sleep Happens",
    subtitle:
      "Lifestyle habits, evening atmosphere, and daily rhythm — not a diagnosis, just a calmer look at restless nights.",
    readMinutes: 11,
    updatedLabel: "Updated June 2, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Poor sleep often comes from a mix of stress, screen habits, irregular bedtimes, and a bedroom that still feels like daytime.",
      "When evenings stay bright, loud, or mentally busy, the body has a harder time settling. Small atmosphere and routine changes can gradually support calmer nights.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "Mental overload after a full day is one of the most common reasons nights feel restless",
    },
    {
      icon: "shield",
      text: "Late screens and bright light can keep evenings feeling alert instead of soft",
    },
    {
      icon: "leaf",
      text: "A consistent sleep schedule helps the body expect rest at the same hour",
    },
    {
      icon: "scent",
      text: "Bedroom atmosphere — light, noise, temperature, scent — shapes how sleep feels",
    },
    {
      icon: "brain",
      text: "Caffeine, late meals, and skipped movement can make winding down harder",
    },
    {
      icon: "leaf",
      text: "A simple nighttime ritual signals that the day is ending",
    },
  ],
  sections: [
    {
      id: "understanding-poor-sleep",
      heading: "Understanding Poor Sleep",
      paragraphs: [
        "Many people struggle with poor sleep at some point. You may go to bed feeling tired, only to lie awake for hours. Or you fall asleep quickly but wake up feeling drained.",
        "Bad sleep is often caused by a combination of lifestyle habits, environmental factors, and daily stress. Understanding what may be affecting your evenings can help you build healthier routines and a more restful bedroom atmosphere — naturally, and at your own pace.",
      ],
    },
    {
      id: "stress-mental-overload",
      number: 1,
      heading: "Stress and Mental Overload",
      paragraphs: [
        "Stress is one of the most common causes of poor sleep. When the mind stays active long after the day has ended, the body has a harder time relaxing.",
        "Work pressure, personal responsibilities, financial concerns, and constant digital stimulation can all contribute to nighttime restlessness. A softer evening transition — dim light, quieter sound, a few minutes without screens — often helps the room feel less like an extension of the workday.",
      ],
    },
    {
      id: "screen-time",
      number: 2,
      heading: "Excessive Screen Time Before Bed",
      paragraphs: [
        "Phones, tablets, and computers emit blue light that may interfere with the body's natural sleep-wake cycle.",
        "Late-night scrolling, checking emails, or watching videos can keep the brain alert when it should be preparing for rest. Many people find that putting devices away thirty to sixty minutes before bed makes evenings feel noticeably calmer.",
      ],
    },
    {
      id: "inconsistent-schedule",
      number: 3,
      heading: "An Inconsistent Sleep Schedule",
      paragraphs: [
        "Going to bed and waking up at different times each day can confuse your body's internal clock.",
        "A consistent sleep schedule helps regulate circadian rhythms and makes it easier to fall asleep naturally — even on weekends, staying within an hour of your usual times often helps.",
      ],
    },
    {
      id: "poor-environment",
      number: 4,
      heading: "A Poor Sleep Environment",
      paragraphs: [
        "Your bedroom environment has a significant impact on how sleep feels.",
        "Common disturbances include:",
      ],
      bullets: [
        { text: "Excessive noise" },
        { text: "Bright lighting" },
        { text: "Uncomfortable temperatures" },
        { text: "Cluttered surroundings" },
      ],
      subsections: [
        {
          paragraphs: [
            "A calm, comfortable space — softer light, gentler sound, less visual noise — often makes falling asleep easier. This is atmosphere work, not perfection.",
          ],
        },
      ],
    },
    {
      id: "caffeine",
      number: 5,
      heading: "Too Much Caffeine",
      paragraphs: [
        "Caffeine can remain in the body for several hours after consumption.",
        "Coffee, energy drinks, and certain teas consumed late in the day may reduce sleep quality and delay sleep onset. If evenings feel wired, try moving caffeine earlier or switching to herbal tea after mid-afternoon.",
      ],
    },
    {
      id: "physical-activity",
      number: 6,
      heading: "Lack of Physical Activity",
      paragraphs: [
        "Regular movement supports healthy sleep patterns.",
        "People who spend most of the day sitting may find it harder to feel physically ready for rest at night. A short walk, light stretching, or gentle household tasks in the evening can help the body feel more naturally tired.",
      ],
    },
    {
      id: "late-meals",
      number: 7,
      heading: "Eating Too Close to Bedtime",
      paragraphs: [
        "Large meals before bed can cause discomfort, indigestion, and disrupted sleep.",
        "Many people prefer finishing dinner several hours before bedtime whenever possible — and keeping late snacks light if hunger strikes.",
      ],
    },
    {
      id: "noise-light",
      number: 8,
      heading: "Noise and Light Disturbances",
      paragraphs: [
        "Even small interruptions can affect sleep quality.",
        "Street traffic, household noise, bright screens, and artificial lighting may prevent deeper stages of rest. Soft background sound, blackout curtains, or a sleep mask can help — paired with a bedroom that feels intentionally quiet rather than accidentally loud.",
      ],
    },
    {
      id: "overstimulation",
      number: 9,
      heading: "Overstimulation Before Sleep",
      paragraphs: [
        "Many people move directly from busy activities into bed without time to unwind.",
        "Creating a gentle transition between daytime activity and nighttime rest — reading, stretching, tidying one surface, lowering the lights — helps the body relax instead of crashing.",
      ],
    },
    {
      id: "nighttime-ritual",
      number: 10,
      heading: "Lack of a Nighttime Ritual",
      paragraphs: [
        "Simple evening rituals signal to the mind that the day is ending.",
        "Reading, journaling, meditation, soft lighting, calming scents, or quiet reflection can help establish a healthier relationship with sleep. Consistency matters more than complexity.",
      ],
    },
    {
      id: "improve-naturally",
      number: 11,
      heading: "How to Improve Sleep Naturally",
      paragraphs: [
        "Improving sleep often starts with small, sustainable changes:",
      ],
      bullets: [
        { text: "Maintain a consistent bedtime" },
        { text: "Reduce evening screen exposure" },
        { text: "Create a calming bedroom environment" },
        { text: "Limit caffeine later in the day" },
        { text: "Develop a relaxing nighttime routine" },
      ],
      subsections: [
        {
          paragraphs: [
            "These habits may not produce instant results, but they can gradually support better sleep quality over time. For deeper habit and atmosphere guidance, see our Sleep Hygiene Guide and tips on improving sleep quality naturally.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 12,
      heading: "Final Thoughts",
      paragraphs: [
        "Bad sleep rarely has a single cause. More often, it develops through a combination of stress, habits, and environmental factors.",
        "By understanding what may be affecting your sleep and making gradual adjustments — softer evenings, calmer rooms, gentler routines — you can build a more restful relationship with night.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "single-cause",
        question: "Does bad sleep usually have one cause?",
        answer: [
          {
            type: "paragraph",
            text: "Usually not. Stress, screens, irregular schedules, and bedroom atmosphere often overlap. Small changes in several areas tend to work better than chasing one fix.",
          },
        ],
      },
      {
        id: "environment",
        question: "Can bedroom atmosphere really affect sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Many people find that softer light, less noise, comfortable temperature, and subtle scent make bedrooms feel more restful before bed.",
          },
        ],
      },
      {
        id: "how-fast",
        question: "How quickly can habits help?",
        answer: [
          {
            type: "paragraph",
            text: "Some people notice calmer evenings within a few days; steadier sleep patterns often build over several weeks of consistent routine.",
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
      { slug: "how-to-fix-bad-sleep" },
      { slug: "how-screen-time-affects-sleep" },
      { slug: "can-screens-affect-sleep-quality" },
      { slug: "what-causes-sleep-deprivation" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and bedroom atmosphere information — not medical advice. Talk with a qualified professional if sleep problems persist.",
};
