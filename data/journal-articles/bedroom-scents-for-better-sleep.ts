import type { JournalArticleTemplate } from "@/types/journal-article";
import { guidePath, JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/bedroom-scents-for-better-sleep` */
export const journalArticleBedroomScentsForBetterSleep: JournalArticleTemplate = {
  slug: "bedroom-scents-for-better-sleep",
  bodyFormat: "guide",
  seoTitle: "Bedroom Scents for Better Sleep and Relaxing Nights",
  seoDescription:
    "Discover softer bedroom scents for better sleep, calmer evenings, and a more relaxing nighttime atmosphere with low-smoke incense and subtle fragrance.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Bedroom Scents for Better Sleep",
        href: journalPath("bedroom-scents-for-better-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Bedroom Scents for Better Sleep",
    subtitle:
      "Softer fragrance and calmer atmosphere for quieter nights at home.",
    readMinutes: 8,
    updatedLabel: "Updated May 20, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "For better sleep, many people prefer softer bedroom scents such as sandalwood, lavender, white tea, and gentle woods.",
      "Heavy fragrance and dense smoke can feel overstimulating at night, especially in smaller bedrooms.",
      "Low-smoke incense and lighter scent profiles usually create a calmer and more comfortable nighttime atmosphere.",
    ],
  },
  keyTakeaways: [
    { icon: "scent", text: "Softer scents often work better before sleep" },
    { icon: "shield", text: "Low-smoke incense helps bedrooms feel lighter" },
    {
      icon: "leaf",
      text: "Sandalwood and lavender are popular nighttime scents",
    },
    {
      icon: "brain",
      text: "Heavy fragrance may feel overwhelming indoors",
    },
    {
      icon: "shield",
      text: "Shorter burn sessions usually create a cleaner atmosphere",
    },
    { icon: "leaf", text: "Ventilation helps reduce smoke buildup" },
  ],
  sections: [
    {
      id: "why-different-at-night",
      number: 1,
      heading: "Why Bedroom Fragrance Feels Different At Night",
      paragraphs: [
        "Bedrooms are smaller and quieter than most living spaces.",
        "Because of this, scent becomes more noticeable at night, especially in enclosed rooms with limited airflow.",
        "Many people now prefer softer fragrance that feels subtle instead of strong perfume-like projection.",
      ],
    },
    {
      id: "best-bedroom-scents",
      number: 2,
      heading: "Best Bedroom Scents For Sleep",
      subsections: [
        {
          heading: "Sandalwood",
          paragraphs: [
            "Soft sandalwood creates a warm and grounding atmosphere that many people enjoy before bed.",
          ],
        },
        {
          heading: "Lavender",
          paragraphs: [
            "Lavender is commonly associated with relaxation and quieter evenings.",
            "Lighter lavender blends often feel more comfortable indoors.",
          ],
        },
        {
          heading: "White Tea",
          paragraphs: [
            "White tea scents feel airy, clean, and minimal.",
            "They work especially well for people who dislike heavy nighttime fragrance.",
          ],
        },
        {
          heading: "Gentle Woods",
          paragraphs: [
            "Soft cedarwood and warm wood blends create calm atmosphere without overwhelming the room.",
          ],
        },
      ],
    },
    {
      id: "too-heavy",
      number: 3,
      heading: "Scents That May Feel Too Heavy In Bedrooms",
      paragraphs: [
        "Some fragrances can feel overwhelming in smaller nighttime spaces. These may include:",
      ],
      bullets: [
        { text: "Very smoky incense" },
        { text: "Extremely sweet scents" },
        { text: "Heavy synthetic fragrances" },
        { text: "Dense spice-heavy blends" },
      ],
      subsections: [
        {
          paragraphs: [
            "A softer scent profile is usually easier to enjoy before sleep.",
          ],
        },
      ],
    },
    {
      id: "how-to-use-bedroom",
      number: 4,
      heading: "How To Use Incense In A Bedroom",
      subsections: [
        {
          heading: "Burn For Shorter Periods",
          paragraphs: [
            "For many bedrooms, 15–20 minutes is enough.",
            "You do not always need to burn a full stick.",
          ],
        },
        {
          heading: "Keep Airflow Moving",
          paragraphs: [
            "Fresh airflow helps prevent smoke and fragrance buildup.",
          ],
        },
        {
          heading: "Choose Low-Smoke Incense",
          paragraphs: [
            "Cleaner-burning incense usually feels lighter and more balanced indoors.",
          ],
        },
        {
          heading: "Keep Fragrance Subtle",
          paragraphs: [
            "The goal is not to completely fill the room with scent.",
            "Subtle atmosphere often feels more relaxing at night.",
          ],
        },
      ],
    },
    {
      id: "low-smoke-sleep",
      number: 5,
      heading: "Why Low-Smoke Incense Works Better For Sleep",
      paragraphs: [
        "Heavy smoke becomes noticeable quickly in enclosed bedrooms.",
        "Low-smoke incense helps:",
      ],
      bullets: [
        { text: "Reduce heaviness in the air" },
        { text: "Keep rooms feeling fresher" },
        { text: "Create softer atmosphere" },
        { text: "Improve indoor comfort" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason many modern incense brands now focus on cleaner-burning formulas.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 6,
      heading: "Final Thoughts",
      paragraphs: ["The best bedroom scents are usually:"],
      bullets: [
        { text: "Soft in strength" },
        { text: "Low in smoke" },
        { text: "Calm and subtle" },
        { text: "Comfortable for nightly use" },
      ],
      subsections: [
        {
          paragraphs: [
            "In smaller nighttime spaces, lighter fragrance often feels more relaxing than strong fragrance.",
            "A softer atmosphere can help evenings feel slower and more restful.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "best-scents-sleep",
        question: "What scents are best for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer sandalwood, lavender, white tea, and gentle wood scents before bed.",
          },
        ],
      },
      {
        id: "incense-bedrooms",
        question: "Is incense good for bedrooms?",
        answer: [
          {
            type: "paragraph",
            text: "Many people enjoy incense in bedrooms because softer fragrance can help create a calmer nighttime atmosphere.",
          },
        ],
      },
      {
        id: "how-long-before-sleep",
        question: "How long should incense burn before sleep?",
        answer: [
          {
            type: "paragraph",
            text: "A short session of about 15–20 minutes is often enough for most bedrooms before you wind down for rest.",
          },
        ],
      },
      {
        id: "too-strong-sleep",
        question: "What scents are too strong for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Very smoky, overly sweet, or heavy synthetic fragrances may feel overwhelming indoors.",
          },
        ],
      },
      {
        id: "low-smoke-bedrooms",
        question: "Is low-smoke incense better for bedrooms?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is often preferred because it creates a lighter and cleaner atmosphere.",
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
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        readMinutes: 7,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense with soft smoke in a small bedroom",
      },
      {
        slug: "evening-wind-down-rituals-for-better-sleep",
        title: "Evening Wind-Down Rituals",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet evening incense still life",
      },
      {
        slug: "incense-care-guide",
        href: guidePath("incense-care-guide"),
        title: "Low-Smoke Incense Guide",
        readMinutes: 10,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Gentle incense smoke in a well-ventilated home",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance, sleep atmosphere, and modern living spaces.",
};
