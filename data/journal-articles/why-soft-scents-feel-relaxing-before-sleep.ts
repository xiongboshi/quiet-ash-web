import type { JournalArticleTemplate } from "@/types/journal-article";
import { betterSleepRelatedBlock } from "@/data/journal-sleep-hub";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/why-soft-scents-feel-relaxing-before-sleep` */
export const journalArticleWhySoftScentsFeelRelaxingBeforeSleep: JournalArticleTemplate =
  {
    slug: "why-soft-scents-feel-relaxing-before-sleep",
    bodyFormat: "guide",
    seoTitle: "Why Soft Scents Feel More Relaxing Before Sleep",
    seoDescription:
      "Discover why many people prefer softer scents before bed and how subtle fragrance can create a calmer nighttime atmosphere.",
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Journal", href: JOURNAL_INDEX },
        { label: "Better Sleep", href: CATEGORY_HREF },
        {
          label: "Why Soft Scents Feel Relaxing",
          href: journalPath("why-soft-scents-feel-relaxing-before-sleep"),
        },
      ],
      categoryLabel: "BETTER SLEEP",
      title: "Why Soft Scents Feel More Relaxing Before Sleep",
      subtitle:
        "Understanding why subtle fragrance often works better at night.",
      readMinutes: 8,
      updatedLabel: "Updated May 21, 2026",
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
    },
    quickAnswer: {
      paragraphs: [
        "Many people prefer softer scents before sleep because they create atmosphere without overwhelming the room.",
        "Heavy fragrance can feel stimulating in enclosed spaces, while subtle scents often feel calmer and easier to enjoy during evening routines.",
        "Low-smoke incense and lighter scent profiles are especially popular in bedrooms.",
      ],
    },
    keyTakeaways: [
      {
        icon: "scent",
        text: "Subtle fragrance often feels more comfortable at night",
      },
      {
        icon: "brain",
        text: "Heavy scents can become overwhelming indoors",
      },
      {
        icon: "leaf",
        text: "Bedrooms usually benefit from softer scent profiles",
      },
      {
        icon: "shield",
        text: "Low-smoke incense creates a lighter atmosphere",
      },
      {
        icon: "scent",
        text: "Fragrance works best when it complements the room",
      },
      {
        icon: "leaf",
        text: "Small scent changes often have the biggest impact",
      },
    ],
    sections: [
      {
        id: "different-at-night",
        number: 1,
        heading: "Why Fragrance Feels Different At Night",
        paragraphs: [
          "During the evening, people often seek comfort and quiet rather than stimulation.",
          "A scent that feels pleasant during the day may feel too strong in a smaller bedroom at night.",
          "This is why many people naturally gravitate toward softer fragrances before bed.",
        ],
      },
      {
        id: "what-makes-soft",
        number: 2,
        heading: "What Makes A Scent Feel Soft?",
        paragraphs: ["Soft scents are usually:"],
        bullets: [
          { text: "Light in strength" },
          { text: "Balanced in projection" },
          { text: "Comfortable in smaller spaces" },
          { text: "Easy to enjoy for longer periods" },
        ],
        subsections: [
          {
            paragraphs: [
              "The goal is atmosphere rather than intensity.",
            ],
          },
        ],
      },
      {
        id: "popular-soft-scents",
        number: 3,
        heading: "Popular Soft Scents For Bedrooms",
        subsections: [
          {
            heading: "White Tea",
            paragraphs: ["Clean, airy, and subtle."],
          },
          {
            heading: "Sandalwood",
            paragraphs: ["Warm, smooth, and grounding."],
          },
          {
            heading: "Gentle Woods",
            paragraphs: [
              "Soft cedarwood and light wood blends create quiet atmosphere.",
            ],
          },
          {
            heading: "Light Lavender",
            paragraphs: ["A softer floral option for evening spaces."],
          },
        ],
      },
      {
        id: "strong-overwhelming",
        number: 4,
        heading: "Why Strong Fragrance Can Feel Overwhelming",
        paragraphs: [
          "Heavy fragrance may become more noticeable when rooms are small, airflow is limited, incense burns too long, or multiple scents are layered together.",
          "Subtle scent usually feels more balanced indoors.",
        ],
      },
      {
        id: "low-smoke-benefits",
        number: 5,
        heading: "The Benefits Of Low-Smoke Incense",
        paragraphs: ["Low-smoke incense helps:"],
        bullets: [
          { text: "Keep rooms feeling fresher" },
          { text: "Reduce heaviness" },
          { text: "Create softer atmosphere" },
          { text: "Improve everyday comfort" },
        ],
        subsections: [
          {
            paragraphs: [
              "Many people now prefer cleaner-burning incense for bedrooms and apartments.",
            ],
          },
        ],
      },
      {
        id: "nighttime-atmosphere",
        number: 6,
        heading: "Creating A Better Nighttime Atmosphere",
        paragraphs: [
          "Fragrance works best alongside warm lighting, quiet routines, comfortable bedding, reduced screen time, and fresh airflow.",
          "Together, these elements help create a calmer environment before sleep.",
        ],
      },
      {
        id: "final-thoughts",
        number: 7,
        heading: "Final Thoughts",
        paragraphs: [
          "The most relaxing scents are often not the strongest.",
          "Soft fragrance creates atmosphere without dominating the room.",
          "For many bedrooms, subtle scent, lower smoke, and a calmer environment work better than intense fragrance.",
        ],
      },
    ],
    faq: {
      heading: "FAQ",
      items: [
        {
          id: "best-before-bed",
          question: "What scents are best before bed?",
          answer: [
            {
              type: "paragraph",
              text: "Many people prefer sandalwood, white tea, soft woods, and light lavender.",
            },
          ],
        },
        {
          id: "why-overwhelming",
          question: "Why do strong scents feel overwhelming at night?",
          answer: [
            {
              type: "paragraph",
              text: "Bedrooms are smaller and quieter environments where fragrance becomes more noticeable.",
            },
          ],
        },
        {
          id: "what-is-soft",
          question: "What is a soft scent?",
          answer: [
            {
              type: "paragraph",
              text: "A soft scent is usually subtle, balanced, and comfortable for everyday indoor use.",
            },
          ],
        },
        {
          id: "low-smoke-sleep",
          question: "Is low-smoke incense better for sleep?",
          answer: [
            {
              type: "paragraph",
              text: "Many people prefer low-smoke incense because it creates a lighter atmosphere indoors.",
            },
          ],
        },
        {
          id: "how-much-fragrance",
          question: "How much fragrance should a bedroom have?",
          answer: [
            {
              type: "paragraph",
              text: "For many people, a subtle background scent feels more comfortable than a strong fragrance.",
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
    related: betterSleepRelatedBlock("why-soft-scents-feel-relaxing-before-sleep"),
    articleNote:
      "This article is intended for general informational purposes about fragrance, atmosphere, and modern indoor living.",
  };
