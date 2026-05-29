import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/evening-wind-down-rituals-for-better-sleep` */
export const journalArticleEveningWindDownRitualsForBetterSleep: JournalArticleTemplate =
  {
    slug: "evening-wind-down-rituals-for-better-sleep",
    bodyFormat: "guide",
    seoTitle: "Evening Wind-Down Rituals for Better Sleep",
    seoDescription:
      "Simple evening rituals for better sleep, calmer nights, and less overstimulation through softer lighting, quiet routines, and gentle fragrance.",
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Journal", href: JOURNAL_INDEX },
        { label: "Better Sleep", href: CATEGORY_HREF },
        {
          label: "Evening Wind-Down Rituals",
          href: journalPath("evening-wind-down-rituals-for-better-sleep"),
        },
      ],
      categoryLabel: "BETTER SLEEP",
      title: "Evening Wind-Down Rituals for Better Sleep",
      subtitle:
        "Slower routines, softer atmosphere, and quieter transitions into the night.",
      readMinutes: 8,
      updatedLabel: "Updated May 19, 2026",
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
    },
    quickAnswer: {
      paragraphs: [
        "Evening wind-down rituals help create separation between busy daytime activity and nighttime rest.",
        "Many people use softer lighting, gentle fragrance, tea, reading, and quieter routines to reduce overstimulation before sleep.",
        "Simple and repeatable rituals usually feel more sustainable than strict nighttime routines.",
      ],
    },
    keyTakeaways: [
      {
        icon: "brain",
        text: "Evening rituals help create calmer transitions into sleep",
      },
      {
        icon: "leaf",
        text: "Softer lighting reduces nighttime overstimulation",
      },
      {
        icon: "scent",
        text: "Gentle fragrance can help create quieter atmosphere",
      },
      {
        icon: "shield",
        text: "Shorter and simpler routines are easier to maintain",
      },
      {
        icon: "shield",
        text: "Low-smoke incense works better indoors at night",
      },
      {
        icon: "scent",
        text: "Bedrooms often feel more comfortable with subtle scent",
      },
    ],
    sections: [
      {
        id: "why-evening-rituals",
        number: 1,
        heading: "Why Evening Rituals Matter",
        paragraphs: [
          "Modern evenings are often filled with screens, notifications, bright lighting, and constant stimulation.",
          "For many people, nighttime routines help create psychological distance from work, stress, and daytime activity.",
          "The goal is usually not perfection. It is creating a calmer environment before sleep.",
        ],
      },
      {
        id: "simple-rituals",
        number: 2,
        heading: "Simple Evening Rituals That Feel Relaxing",
        subsections: [
          {
            heading: "Lower The Lighting",
            paragraphs: [
              "Warm and softer lighting helps rooms feel calmer at night.",
            ],
          },
          {
            heading: "Use Gentle Fragrance",
            paragraphs: [
              "Low-smoke incense with subtle scent profiles often works better than strong fragrance indoors.",
            ],
          },
          {
            heading: "Make Tea Slowly",
            paragraphs: [
              "Tea rituals naturally encourage slower movement and quieter attention.",
            ],
          },
          {
            heading: "Reduce Screen Brightness",
            paragraphs: [
              "Bright screens can make evenings feel more stimulating and mentally active.",
            ],
          },
          {
            heading: "Create Quiet Time Before Bed",
            paragraphs: [
              "Reading, journaling, stretching, or simply sitting quietly can help evenings feel slower and less rushed.",
            ],
          },
        ],
      },
      {
        id: "best-scents-evening",
        number: 3,
        heading: "Best Incense Scents For Evening Wind-Down",
        subsections: [
          {
            heading: "Sandalwood",
            paragraphs: [
              "Warm and grounding without feeling too strong.",
            ],
          },
          {
            heading: "White Tea",
            paragraphs: ["Clean, airy, and subtle indoors."],
          },
          {
            heading: "Lavender",
            paragraphs: [
              "Commonly preferred for calm nighttime atmosphere.",
            ],
          },
          {
            heading: "Soft Woods",
            paragraphs: [
              "Gentle cedarwood blends create warmth without overwhelming the room.",
            ],
          },
        ],
      },
      {
        id: "low-smoke-evening",
        number: 4,
        heading: "Why Low-Smoke Incense Works Better At Night",
        paragraphs: [
          "Bedrooms and apartments are smaller and more enclosed than open living spaces.",
          "Because of this, smoke and fragrance become noticeable quickly.",
          "Low-smoke incense helps:",
        ],
        bullets: [
          { text: "Keep the room feeling fresher" },
          { text: "Reduce heaviness indoors" },
          { text: "Create softer atmosphere" },
          { text: "Improve comfort before sleep" },
        ],
      },
      {
        id: "how-long-rituals",
        number: 5,
        heading: "How Long Should Evening Rituals Last?",
        paragraphs: [
          "Evening rituals do not need to be long.",
          "For many people, even 15–30 minutes of slower and quieter activity can help create a calmer transition into sleep.",
          "Consistency usually matters more than complexity.",
        ],
      },
      {
        id: "final-thoughts",
        number: 6,
        heading: "Final Thoughts",
        paragraphs: [
          "The most effective evening rituals are usually simple, repeatable, and calming.",
          "Small changes such as softer lighting, gentle fragrance, quiet routines, and reduced screen time can help evenings feel slower and more comfortable.",
          "A calmer atmosphere often creates a better transition into sleep.",
        ],
      },
    ],
    faq: {
      heading: "FAQ",
      items: [
        {
          id: "what-wind-down",
          question: "What is a wind-down routine?",
          answer: [
            {
              type: "paragraph",
              text: "A wind-down routine is a set of calming evening habits that help the mind and body transition toward rest.",
            },
          ],
        },
        {
          id: "incense-relaxing",
          question: "Does incense help create relaxing atmosphere?",
          answer: [
            {
              type: "paragraph",
              text: "Many people use softer fragrance to make evenings feel quieter and more comfortable.",
            },
          ],
        },
        {
          id: "scents-at-night",
          question: "What scents work best at night?",
          answer: [
            {
              type: "paragraph",
              text: "Sandalwood, lavender, white tea, and gentle woods are commonly preferred for nighttime use.",
            },
          ],
        },
        {
          id: "low-smoke-bedrooms",
          question: "Is low-smoke incense better for bedrooms?",
          answer: [
            {
              type: "paragraph",
              text: "Low-smoke incense is often preferred because it creates a lighter and cleaner indoor atmosphere.",
            },
          ],
        },
        {
          id: "routine-length",
          question: "How long should a nighttime routine last?",
          answer: [
            {
              type: "paragraph",
              text: "For many people, 15–30 minutes is enough to help evenings feel calmer and less overstimulating.",
            },
          ],
        },
      ],
    },
    products: {
      heading: "Recommended Incense",
      items: [
        {
          slug: "brass-incense-stand",
          title: "Sandalwood Incense",
          rating: 4.5,
          reviewCount: 128,
          priceDisplay: "$18.00",
          imageSrc: "/images/generated/products/brass-incense-stand/hero.webp",
          imageAlt: "Sandalwood incense",
        },
        {
          slug: "paper-incense-sleeve",
          title: "Lavender Incense",
          rating: 4.5,
          reviewCount: 96,
          priceDisplay: "$18.00",
          imageSrc: "/images/generated/products/paper-incense-sleeve/hero.webp",
          imageAlt: "Lavender incense",
        },
        {
          slug: "wood-tray",
          title: "White Tea Incense",
          rating: 4,
          reviewCount: 74,
          priceDisplay: "$18.00",
          imageSrc: "/images/generated/best-sellers/quiet-cloud-v3.webp",
          imageAlt: "White tea incense",
        },
        {
          slug: "small-agarwood-box",
          title: "Gentle Woods",
          rating: 4,
          reviewCount: 56,
          priceDisplay: "$18.00",
          imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.webp",
          imageAlt: "Gentle wood incense blend",
        },
      ],
    },
    related: {
      heading: "Related Reading",
      items: [
        {
          slug: "best-incense-for-sleep",
          title: "Best Incense for Sleep",
          readMinutes: 8,
          imageSrc: "/images/generated/essay-night-incense-ritual.webp",
          imageAlt: "Incense stick burning in a ceramic bowl with soft evening light",
        },
        {
          slug: "bedroom-scents-for-better-sleep",
          title: "Bedroom Scents for Better Sleep",
          readMinutes: 8,
          imageSrc: "/images/generated/essay-night-incense-ritual.webp",
          imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
        },
        {
          slug: "incense-after-work",
          title: "Incense After Work",
          readMinutes: 8,
          imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
          imageAlt: "Soft incense smoke in a calm living room after work",
        },
        {
          slug: "tea-and-incense-rituals",
          title: "Tea and Incense Rituals",
          readMinutes: 8,
          imageSrc: "/images/generated/essay-incense-patience.webp",
          imageAlt: "Tea and incense on a quiet desk in soft evening light",
        },
      ],
    },
    articleNote:
      "This article is intended for general informational purposes about indoor atmosphere, evening routines, and modern living habits.",
  };
