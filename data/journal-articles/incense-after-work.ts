import type { JournalArticleTemplate } from "@/types/journal-article";
import { guidePath, JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/calm-evenings`;

/** Guide — `/journal/incense-after-work` */
export const journalArticleIncenseAfterWork: JournalArticleTemplate = {
  slug: "incense-after-work",
  bodyFormat: "guide",
  seoTitle: "Best Incense After Work for Relaxing Evenings",
  seoDescription:
    "Discover softer incense scents and calming evening rituals that help create a quieter atmosphere after long workdays.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Calm Evenings", href: CATEGORY_HREF },
      {
        label: "Incense After Work",
        href: journalPath("incense-after-work"),
      },
    ],
    categoryLabel: "CALM EVENINGS",
    title: "Incense After Work",
    subtitle:
      "Softer fragrance and quieter atmosphere for slower evenings at home.",
    readMinutes: 8,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Soft incense smoke in a calm living room after work",
  },
  quickAnswer: {
    paragraphs: [
      "After work, many people prefer softer incense scents that help the room feel calmer without becoming overly heavy or smoky.",
      "Gentle woods, tea-inspired fragrances, and low-smoke incense are often better suited for evening relaxation than strong or overly sweet scents.",
      "A subtle atmosphere usually feels more comfortable after mentally overstimulating days.",
    ],
  },
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Softer scents often feel better after long workdays.",
    },
    {
      icon: "shield",
      text: "Low-smoke incense creates a cleaner indoor atmosphere.",
    },
    {
      icon: "scent",
      text: "Gentle woods and tea scents are popular evening choices.",
    },
    {
      icon: "brain",
      text: "Shorter burn sessions help transition from work to rest.",
    },
  ],
  sections: [
    {
      id: "why-after-work",
      number: 1,
      heading: "Why People Burn Incense After Work",
      paragraphs: [
        "For many people, fragrance becomes part of the transition from work mode to home mode.",
        "Lighting, scent, and quieter atmosphere can help evenings feel slower and less overstimulating.",
        "Rather than using strong fragrance, many modern homes now prefer softer indoor scent that feels calm and comfortable daily.",
      ],
    },
    {
      id: "best-scents",
      number: 2,
      heading: "Best Incense Scents After Work",
      subsections: [
        {
          heading: "Sandalwood",
          paragraphs: [
            "Soft sandalwood feels warm, grounding, and relaxing after busy days.",
            "It is one of the most commonly preferred evening incense scents.",
          ],
        },
        {
          heading: "White Tea",
          paragraphs: [
            "White tea scents feel clean, airy, and subtle indoors.",
            "Many people prefer tea-inspired fragrance because it creates atmosphere without overwhelming the room.",
          ],
        },
        {
          heading: "Cedarwood",
          paragraphs: [
            "Gentle cedarwood blends create warmth while still feeling calm and minimal.",
          ],
        },
        {
          heading: "Lavender",
          paragraphs: [
            "Lighter lavender blends often work well for evenings because they feel soft and soothing before bed.",
          ],
        },
      ],
    },
    {
      id: "too-strong",
      number: 3,
      heading: "Scents That May Feel Too Strong After Work",
      paragraphs: [
        "Some fragrances can feel overwhelming during nighttime relaxation.",
        "These may include:",
      ],
      bullets: [
        { text: "Very smoky incense" },
        { text: "Extremely sweet scents" },
        { text: "Heavy synthetic fragrance" },
        { text: "Dense spice-heavy blends" },
      ],
      subsections: [
        {
          paragraphs: [
            "A softer scent profile is usually easier to live with daily.",
          ],
        },
      ],
    },
    {
      id: "how-to-use",
      number: 4,
      heading: "How To Use Incense After Work",
      subsections: [
        {
          heading: "Keep The Atmosphere Light",
          paragraphs: [
            "The goal is not to completely fill the room with scent.",
            "Subtle fragrance usually feels cleaner and calmer indoors.",
          ],
        },
        {
          heading: "Burn For Shorter Periods",
          paragraphs: [
            "For many rooms, 15–20 minutes is enough.",
            "Shorter sessions often create a more balanced atmosphere.",
          ],
        },
        {
          heading: "Use Ventilation",
          paragraphs: [
            "Fresh airflow helps prevent smoke and fragrance buildup indoors.",
          ],
        },
        {
          heading: "Pair Fragrance With Quiet Rituals",
          paragraphs: ["Many people combine incense with:"],
          bullets: [
            { text: "Tea" },
            { text: "Reading" },
            { text: "Journaling" },
            { text: "Softer lighting" },
            { text: "Evening music" },
            { text: "Slower routines" },
          ],
        },
      ],
    },
    {
      id: "low-smoke",
      number: 5,
      heading: "Why Low-Smoke Incense Works Better At Night",
      paragraphs: [
        "In smaller homes and apartments, smoke becomes noticeable quickly.",
        "Low-smoke incense helps:",
      ],
      bullets: [
        { text: "Keep the room feeling fresher" },
        { text: "Reduce heaviness in the air" },
        { text: "Create softer atmosphere" },
        { text: "Improve indoor comfort" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason cleaner-burning incense has become increasingly popular in modern homes.",
          ],
        },
      ],
    },
    {
      id: "calmer-evening",
      number: 6,
      heading: "Creating A Calmer Evening Atmosphere",
      paragraphs: [
        "Fragrance is often most effective when combined with other environmental changes.",
        "Simple adjustments such as:",
      ],
      bullets: [
        { text: "Warm lighting" },
        { text: "Lower noise" },
        { text: "Reduced screen brightness" },
        { text: "Open airflow" },
        { text: "Slower routines" },
      ],
      subsections: [
        {
          paragraphs: [
            "can help evenings feel quieter and less overstimulating.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: ["The best incense after work is usually:"],
      bullets: [
        { text: "Soft in strength" },
        { text: "Low in smoke" },
        { text: "Calm and subtle" },
        { text: "Comfortable for everyday indoor use" },
      ],
      subsections: [
        {
          paragraphs: [
            "For many people, quieter fragrance helps create a slower transition into the evening.",
            "A softer atmosphere often feels more relaxing than intense fragrance.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "best-after-work",
        question: "What incense is best after work?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer softer scents such as sandalwood, white tea, cedarwood, and light lavender blends after work.",
          },
        ],
      },
      {
        id: "relaxing-night",
        question: "Why does incense feel relaxing at night?",
        answer: [
          {
            type: "paragraph",
            text: "Gentle fragrance can help create psychological separation between busy daytime activity and quieter evening routines.",
          },
        ],
      },
      {
        id: "low-smoke-indoors",
        question: "Is low-smoke incense better indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is often preferred because it creates a lighter and cleaner indoor atmosphere.",
          },
        ],
      },
      {
        id: "how-long-evening",
        question: "How long should incense burn in the evening?",
        answer: [
          {
            type: "paragraph",
            text: "For many indoor spaces, 15–20 minutes is usually enough.",
          },
        ],
      },
      {
        id: "too-strong-evening",
        question: "What scents are too strong for evenings?",
        answer: [
          {
            type: "paragraph",
            text: "Very smoky, overly sweet, or dense synthetic fragrances may feel overwhelming at night.",
          },
        ],
      },
    ],
  },
  products: {
    heading: "Recommended Incense",
    items: [
      {
        slug: "wood-tray",
        title: "Citrus Sleep",
        rating: 4.5,
        reviewCount: 276,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.webp",
        imageAlt: "Soft citrus incense for evening relaxation",
      },
      {
        slug: "brass-incense-stand",
        title: "Sandalwood Incense",
        rating: 4.5,
        reviewCount: 128,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/brass-incense-stand/hero.webp",
        imageAlt: "Sandalwood incense in a bronze holder",
      },
      {
        slug: "paper-incense-sleeve",
        title: "White Tea Incense",
        rating: 4,
        reviewCount: 96,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/paper-incense-sleeve/hero.webp",
        imageAlt: "White tea inspired incense",
      },
      {
        slug: "linen-cloth",
        title: "Lavender Blend",
        rating: 4,
        reviewCount: 74,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/linen-cloth/hero.webp",
        imageAlt: "Soft lavender evening incense",
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
        imageAlt: "Incense stick burning in soft evening light",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        readMinutes: 7,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense in a small apartment with calm light",
      },
      {
        slug: "evening-calm-guide",
        href: guidePath("evening-calm-guide"),
        title: "Evening Wind-Down Rituals",
        readMinutes: 9,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet evening ritual with incense and soft light",
      },
      {
        slug: "incense-care-guide",
        href: guidePath("incense-care-guide"),
        title: "Low-Smoke Incense Guide",
        readMinutes: 10,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Low-smoke incense in a well-ventilated room",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance, evening atmosphere, and modern home rituals.",
};
