import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/best-scent-for-sleep` */
export const journalArticleBestScentForSleep: JournalArticleTemplate = {
  slug: "best-scent-for-sleep",
  bodyFormat: "guide",
  seoTitle: "What Is The Best Scent For Sleep? Popular Bedroom Fragrance Choices",
  seoDescription:
    "Discover the best scents for sleep, including sandalwood, lavender, white tea, and gentle woods that create a calmer nighttime atmosphere.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "What Is The Best Scent For Sleep?",
        href: journalPath("best-scent-for-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "What Is The Best Scent For Sleep?",
    subtitle:
      "Understanding why some fragrances feel softer and more relaxing at night.",
    readMinutes: 8,
    updatedLabel: "Updated May 22, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "There is no single best scent for sleep, but many people prefer softer fragrances such as sandalwood, lavender, white tea, and gentle woods.",
      "The most comfortable bedroom scents are usually subtle, low in smoke, and balanced in smaller indoor spaces.",
      "Many people find that softer fragrance feels more relaxing than strong fragrance before bed.",
    ],
  },
  keyTakeaways: [
    {
      icon: "scent",
      text: "Sandalwood is one of the most popular sleep scents",
    },
    {
      icon: "leaf",
      text: "Lavender remains a common bedtime fragrance choice",
    },
    {
      icon: "scent",
      text: "White tea works well for people who dislike strong scent",
    },
    {
      icon: "leaf",
      text: "Soft woods create warm and calming atmosphere",
    },
    {
      icon: "brain",
      text: "Bedrooms often benefit from lighter fragrance",
    },
    {
      icon: "shield",
      text: "Low-smoke incense helps create a cleaner experience",
    },
  ],
  sections: [
    {
      id: "why-scent-matters",
      number: 1,
      heading: "Why Scent Matters Before Sleep",
      paragraphs: [
        "Evening environments often feel more comfortable when they are quieter and less stimulating.",
        "Many people use fragrance to help create separation between daytime activity and nighttime rest.",
        "The best scent is usually one that feels calm rather than attention-grabbing.",
      ],
    },
    {
      id: "best-scents-for-sleep",
      number: 2,
      heading: "Best Scents For Sleep",
      subsections: [
        {
          heading: "Sandalwood",
          paragraphs: [
            "One of the most searched sleep-related fragrance options.",
            "Sandalwood feels warm, smooth, and grounding indoors.",
          ],
        },
        {
          heading: "Lavender",
          paragraphs: [
            "Lavender is commonly associated with calm evenings and relaxation.",
            "Lighter lavender blends often work best in bedrooms.",
          ],
        },
        {
          heading: "White Tea",
          paragraphs: [
            "White tea scents feel airy, fresh, and minimal.",
            "They are especially popular in modern apartment spaces.",
          ],
        },
        {
          heading: "Cedarwood",
          paragraphs: [
            "Soft cedarwood creates warmth without becoming overpowering.",
          ],
        },
      ],
    },
    {
      id: "why-soft-scents",
      number: 3,
      heading: "Why Soft Scents Usually Work Better",
      paragraphs: [
        "Many people assume stronger fragrance creates a better atmosphere.",
        "In reality, bedrooms often feel more comfortable with subtle scent.",
        "Heavy fragrance can become overwhelming when rooms are small, airflow is limited, smoke builds up, or multiple scents are layered together.",
      ],
    },
    {
      id: "low-smoke-matters",
      number: 4,
      heading: "Why Low-Smoke Incense Matters",
      paragraphs: ["Low-smoke incense helps:"],
      bullets: [
        { text: "Reduce heaviness indoors" },
        { text: "Create softer atmosphere" },
        { text: "Keep rooms feeling fresher" },
        { text: "Improve comfort in bedrooms" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason cleaner-burning incense has become increasingly popular.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 5,
      heading: "Final Thoughts",
      paragraphs: ["The best scent for sleep is usually:"],
      bullets: [
        { text: "Soft" },
        { text: "Balanced" },
        { text: "Low in smoke" },
        { text: "Comfortable for smaller spaces" },
      ],
      subsections: [
        {
          paragraphs: [
            "For many people, subtle fragrance creates a calmer nighttime atmosphere than strong fragrance.",
            "A lighter approach often feels better before bed.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "relaxing-bedroom",
        question: "What scent helps create a relaxing bedroom?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer sandalwood, lavender, white tea, and gentle woods.",
          },
        ],
      },
      {
        id: "most-popular",
        question: "What scent is most popular for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Sandalwood and lavender are among the most commonly searched sleep-related fragrances.",
          },
        ],
      },
      {
        id: "strong-better",
        question: "Is strong fragrance better for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Many people find softer fragrance more comfortable in bedrooms.",
          },
        ],
      },
      {
        id: "why-soft-relaxing",
        question: "Why do soft scents feel relaxing?",
        answer: [
          {
            type: "paragraph",
            text: "Subtle fragrance creates atmosphere without overwhelming the room.",
          },
        ],
      },
      {
        id: "low-smoke-sleep",
        question: "Is low-smoke incense better for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is often preferred because it creates a lighter indoor experience.",
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
        slug: "why-soft-scents-feel-relaxing-before-sleep",
        title: "Why Soft Scents Feel More Relaxing",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet evening incense still life",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        readMinutes: 7,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense with soft smoke in a small bedroom",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about fragrance, sleep atmosphere, and modern indoor living.",
};
