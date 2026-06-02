import type { JournalArticleTemplate } from "@/types/journal-article";
import { betterSleepRelatedBlock } from "@/data/journal-sleep-hub";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/should-you-burn-incense-before-bed` */
export const journalArticleShouldYouBurnIncenseBeforeBed: JournalArticleTemplate = {
  slug: "should-you-burn-incense-before-bed",
  bodyFormat: "guide",
  seoTitle: "Should You Burn Incense Before Bed? What To Know Before Sleeping",
  seoDescription:
    "Wondering if you should burn incense before bed? Learn how softer scents, low-smoke incense, and short evening sessions can create a calmer nighttime atmosphere.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Should You Burn Incense Before Bed?",
        href: journalPath("should-you-burn-incense-before-bed"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Should You Burn Incense Before Bed?",
    subtitle:
      "Softer fragrance, shorter sessions, and a calmer transition into sleep.",
    readMinutes: 8,
    updatedLabel: "Updated May 22, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Many people enjoy burning incense before bed because it helps create a quieter and more relaxing atmosphere.",
      "However, bedrooms are smaller enclosed spaces, so low-smoke incense, shorter burn sessions, and proper ventilation usually work best.",
      "For most people, the goal is creating atmosphere before sleep rather than keeping incense burning throughout the night.",
    ],
  },
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Many people use incense as part of a bedtime routine",
    },
    {
      icon: "shield",
      text: "Low-smoke incense usually feels more comfortable in bedrooms",
    },
    {
      icon: "shield",
      text: "Shorter burn sessions often work best before sleep",
    },
    {
      icon: "scent",
      text: "Softer scents are generally easier to enjoy at night",
    },
    { icon: "leaf", text: "Ventilation helps reduce smoke buildup" },
    {
      icon: "brain",
      text: "Bedrooms usually need less fragrance than larger rooms",
    },
  ],
  sections: [
    {
      id: "why-before-bed",
      number: 1,
      heading: "Why People Burn Incense Before Bed",
      paragraphs: [
        "Many evening routines are built around creating a psychological transition away from daytime activity.",
        "People often combine incense with reading, tea, journaling, softer lighting, and quiet music.",
        "The scent itself becomes part of the signal that the day is ending.",
      ],
    },
    {
      id: "best-scents-before-sleep",
      number: 2,
      heading: "Best Incense Scents Before Sleep",
      subsections: [
        {
          heading: "Sandalwood",
          paragraphs: [
            "One of the most searched sleep-related incense scents.",
            "Soft sandalwood feels warm, grounding, and calm.",
          ],
        },
        {
          heading: "Lavender",
          paragraphs: [
            "Lavender is strongly associated with relaxation and bedtime routines.",
            "Many people prefer lighter lavender blends indoors.",
          ],
        },
        {
          heading: "White Tea",
          paragraphs: [
            "White tea scents feel airy and subtle.",
            "They work especially well for people who dislike strong fragrance.",
          ],
        },
        {
          heading: "Gentle Woods",
          paragraphs: [
            "Soft cedarwood and warm wood blends create a quieter atmosphere without overwhelming the room.",
          ],
        },
      ],
    },
    {
      id: "low-smoke-before-bed",
      number: 3,
      heading: "Why Low-Smoke Incense Is Better Before Bed",
      paragraphs: [
        "Bedrooms concentrate smoke faster than larger spaces.",
        "Low-smoke incense helps:",
      ],
      bullets: [
        { text: "Keep rooms feeling fresher" },
        { text: "Reduce heaviness in the air" },
        { text: "Create softer atmosphere" },
        { text: "Improve nighttime comfort" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason many modern incense users prefer cleaner-burning formulas.",
          ],
        },
      ],
    },
    {
      id: "how-long-before-sleep",
      number: 4,
      heading: "How Long Should You Burn Incense Before Sleep?",
      paragraphs: [
        "For many bedrooms, 15–20 minutes is enough.",
        "Long burns can make fragrance feel too strong in smaller rooms.",
        "Shorter sessions often create a cleaner and more balanced experience.",
      ],
    },
    {
      id: "final-thoughts",
      number: 5,
      heading: "Final Thoughts",
      paragraphs: [
        "For many people, incense works best before sleep when it remains subtle and balanced.",
        "A softer scent, shorter burn session, and calmer environment often feel more comfortable than heavy fragrance.",
        "The goal is usually atmosphere, not intensity.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "good-before-bed",
        question: "Is it good to burn incense before bed?",
        answer: [
          {
            type: "paragraph",
            text: "Many people enjoy incense before bed because it helps create a calmer nighttime atmosphere.",
          },
        ],
      },
      {
        id: "best-scent-sleep",
        question: "What incense scent is best for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Sandalwood, lavender, white tea, and gentle woods are among the most commonly preferred sleep scents.",
          },
        ],
      },
      {
        id: "burn-all-night",
        question: "Should incense burn all night?",
        answer: [
          {
            type: "paragraph",
            text: "Most people prefer shorter sessions before sleep rather than continuous burning overnight.",
          },
        ],
      },
      {
        id: "stronger-at-night",
        question: "Why does incense smell stronger at night?",
        answer: [
          {
            type: "paragraph",
            text: "Bedrooms are smaller and quieter spaces where scent becomes more noticeable.",
          },
        ],
      },
      {
        id: "low-smoke-bedrooms",
        question: "Is low-smoke incense better for bedrooms?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer low-smoke incense because it creates a lighter indoor atmosphere.",
          },
        ],
      },
    ],
  },
  products: {
    heading: "Recommended Incense",
    items: [
      { slug: "brass-incense-stand" },
      { slug: "paper-incense-sleeve" },
      { slug: "wood-tray" },
      { slug: "small-agarwood-box" },
    ],
  },
  related: betterSleepRelatedBlock("should-you-burn-incense-before-bed"),
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance, nighttime atmosphere, and modern living spaces.",
};
