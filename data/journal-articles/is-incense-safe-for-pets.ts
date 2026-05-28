import type { JournalArticleTemplate } from "@/types/journal-article";
import { guidePath, JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/guides-care`;

/** Guide — `/journal/is-incense-safe-for-pets` */
export const journalArticleIsIncenseSafeForPets: JournalArticleTemplate = {
  slug: "is-incense-safe-for-pets",
  bodyFormat: "guide",
  seoTitle: "Is Incense Safe for Pets? What Cat and Dog Owners Should Know",
  seoDescription:
    "Learn how to use incense more safely around cats and dogs with ventilation, low-smoke incense, and softer scent choices for everyday indoor spaces.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Guides & Tips", href: CATEGORY_HREF },
      {
        label: "Is Incense Safe for Pets?",
        href: journalPath("is-incense-safe-for-pets"),
      },
    ],
    categoryLabel: "GUIDES & TIPS",
    title: "Is Incense Safe for Pets?",
    subtitle:
      "What cat and dog owners should know about incense, smoke, ventilation, and everyday indoor use.",
    readMinutes: 8,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt:
      "Soft incense smoke in a calm home with natural light — gentle everyday use",
  },
  quickAnswer: {
    paragraphs: [
      "Pets are generally more sensitive to smoke and fragrance than humans, especially in smaller or enclosed spaces.",
      "Many people can still enjoy incense at home by using low-smoke incense, keeping rooms ventilated, choosing softer scent profiles, and avoiding excessive smoke buildup.",
      "Shorter burn sessions and lighter fragrances are usually more comfortable for shared indoor environments.",
    ],
  },
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Cats and dogs smell incense more intensely than people — lighter fragrances suit shared spaces.",
    },
    {
      icon: "shield",
      text: "Poor ventilation, heavy smoke, and long burn sessions are the main risks for pets.",
    },
    {
      icon: "scent",
      text: "White tea, light citrus, soft woods, and gentle florals are easier to live with indoors.",
    },
    {
      icon: "brain",
      text: "Let pets leave the room freely; reduce use if they avoid the area or seem irritated.",
    },
  ],
  sections: [
    {
      id: "can-pets-smell",
      number: 1,
      heading: "Can Cats and Dogs Smell Incense?",
      paragraphs: [
        "Yes. Cats and dogs have a much stronger sense of smell than humans.",
        "A scent that feels soft and subtle to people may feel much stronger to pets, especially in apartments, bedrooms, or smaller rooms with limited airflow.",
        "Because of this, lighter fragrances are often a better choice for homes with pets.",
      ],
    },
    {
      id: "smoke-bad-for-pets",
      number: 2,
      heading: "Is Incense Smoke Bad for Pets?",
      paragraphs: [
        "Too much smoke in an enclosed space can feel uncomfortable for both humans and animals.",
        "Heavy smoke exposure may irritate indoor environments, especially when:",
      ],
      bullets: [
        { text: "The room has poor ventilation" },
        { text: "The incense produces dense smoke" },
        { text: "Fragrance levels feel very strong" },
        { text: "Incense burns continuously for long periods" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason many people now prefer cleaner-burning and lower-smoke incense for everyday indoor use.",
          ],
        },
      ],
    },
    {
      id: "burn-comfortably",
      number: 3,
      heading: "How To Burn Incense More Comfortably Around Pets",
      subsections: [
        {
          heading: "Keep The Room Ventilated",
          paragraphs: [
            "Open a window or allow fresh airflow while burning incense indoors.",
            "Ventilation helps prevent smoke and fragrance from building up too heavily in smaller spaces.",
          ],
        },
        {
          heading: "Burn Incense For Shorter Periods",
          paragraphs: [
            "You do not always need to burn a full stick.",
            "For many homes, 15–30 minutes is enough to create a softer atmosphere without overwhelming the room.",
          ],
        },
        {
          heading: "Avoid Very Heavy Fragrances",
          paragraphs: [
            "Extremely smoky or overly sweet fragrances may feel intense in compact indoor spaces.",
            "Lighter scent profiles are usually easier to live with daily.",
          ],
        },
        {
          heading: "Give Pets Space",
          paragraphs: [
            "Pets should always be able to leave the room if they want to.",
            "A comfortable environment allows airflow and freedom of movement.",
          ],
        },
        {
          heading: "Choose Low-Smoke Incense",
          paragraphs: [
            "Low-smoke incense is often preferred for apartments, bedrooms, and shared indoor spaces.",
            "Cleaner-burning incense may create a softer and more balanced experience for everyday use.",
          ],
        },
      ],
    },
    {
      id: "better-scents",
      number: 4,
      heading: "What Incense Scents Are Better For Homes With Pets?",
      paragraphs: [
        "Many people prefer lighter and cleaner scent profiles when living with pets indoors.",
        "Popular choices often include:",
      ],
      bullets: [
        { text: "White tea" },
        { text: "Soft citrus" },
        { text: "Gentle woods" },
        { text: "Light florals" },
        { text: "Linen-inspired scents" },
      ],
      subsections: [
        {
          paragraphs: [
            "Very dense smoke or intensely sweet fragrances may feel heavier in smaller spaces.",
          ],
        },
      ],
    },
    {
      id: "around-cats",
      number: 5,
      heading: "Should You Burn Incense Around Cats?",
      paragraphs: [
        "Cats are generally more sensitive to airborne particles and fragrance than humans.",
        "For cat owners, it is usually recommended to:",
      ],
      bullets: [
        { text: "Keep rooms ventilated" },
        { text: "Avoid excessive smoke" },
        { text: "Burn incense in moderation" },
        { text: "Observe your cat’s comfort and behavior" },
      ],
      subsections: [
        {
          paragraphs: [
            "If your cat consistently avoids the room or seems uncomfortable, consider reducing usage or switching to lighter scents.",
          ],
        },
      ],
    },
    {
      id: "around-dogs",
      number: 6,
      heading: "Should You Burn Incense Around Dogs?",
      paragraphs: [
        "Most dogs tolerate mild home fragrance well in ventilated indoor spaces.",
        "However, strong smoke buildup or highly concentrated fragrance may still feel overwhelming for some dogs.",
        "As with humans, moderation and airflow usually create a more comfortable environment.",
      ],
    },
    {
      id: "too-strong",
      number: 7,
      heading: "Signs Your Incense May Be Too Strong",
      paragraphs: ["Your incense may feel too intense if:"],
      bullets: [
        { text: "The room becomes visibly smoky" },
        { text: "Fragrance lingers heavily for hours" },
        { text: "The air feels stuffy" },
        { text: "Eyes feel irritated" },
        { text: "Pets repeatedly avoid the area" },
      ],
      subsections: [
        {
          paragraphs: [
            "In many homes, a lighter and lower-smoke approach creates a more balanced everyday experience.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 8,
      heading: "Final Thoughts",
      paragraphs: [
        "Incense can often be enjoyed comfortably around pets when used carefully and in moderation.",
        "The most important factors are:",
      ],
      bullets: [
        { text: "Good airflow" },
        { text: "Lower smoke levels" },
        { text: "Softer scent profiles" },
        { text: "Shorter burn sessions" },
      ],
      subsections: [
        {
          paragraphs: [
            "For many modern homes, subtle fragrance and cleaner-burning incense create a calmer and more comfortable indoor atmosphere.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "safe-for-cats",
        question: "Is incense safe for cats?",
        answer: [
          {
            type: "paragraph",
            text: "Cats are generally more sensitive to smoke and fragrance than humans. Many people prefer low-smoke incense, ventilation, and shorter burn sessions in shared indoor spaces.",
          },
        ],
      },
      {
        id: "safe-for-dogs",
        question: "Is incense safe for dogs?",
        answer: [
          {
            type: "paragraph",
            text: "Most dogs tolerate mild home fragrance well in ventilated environments, though very heavy smoke or strong fragrance may feel uncomfortable for some dogs.",
          },
        ],
      },
      {
        id: "apartments-pets",
        question: "What incense is better for apartments with pets?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense with lighter scent profiles is usually preferred for apartments and smaller indoor spaces.",
          },
        ],
      },
      {
        id: "how-long-indoors",
        question: "How long should incense burn indoors?",
        answer: [
          {
            type: "paragraph",
            text: "For many rooms, 15–30 minutes is often enough to create a softer atmosphere without excessive smoke buildup.",
          },
        ],
      },
      {
        id: "softer-scents-indoors",
        question: "What scents are usually softer indoors?",
        answer: [
          {
            type: "paragraph",
            text: "White tea, soft woods, light citrus, and gentle floral blends are commonly preferred for calmer indoor environments.",
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
        title: "Citrus Grove",
        rating: 4.5,
        reviewCount: 276,
        priceDisplay: "$18",
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.webp",
        imageAlt: "Citrus Grove incense",
      },
      {
        slug: "brass-incense-stand",
        title: "White Jasmine",
        rating: 4.5,
        reviewCount: 312,
        priceDisplay: "$68",
        imageSrc: "/images/generated/best-sellers/white-jasmine-v3.webp",
        imageAlt: "White Jasmine incense",
      },
      {
        slug: "paper-incense-sleeve",
        title: "Lavender & Linen",
        rating: 4.5,
        reviewCount: 294,
        priceDisplay: "$72",
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.webp",
        imageAlt: "Lavender and linen incense",
      },
      {
        slug: "small-agarwood-box",
        title: "Sandalwood & Fig",
        rating: 4.5,
        reviewCount: 267,
        priceDisplay: "$210",
        imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.webp",
        imageAlt: "Sandalwood and fig incense",
      },
    ],
  },
  related: {
    heading: "Related Reading",
    items: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments and Bedrooms",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense in a small bedroom with soft evening light",
      },
      {
        slug: "incense-care-guide",
        href: guidePath("incense-care-guide"),
        title: "Low-Smoke Incense Guide",
        readMinutes: 10,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Gentle incense smoke in a well-ventilated home",
      },
      {
        slug: "evening-calm-guide",
        href: guidePath("evening-calm-guide"),
        title: "How To Create A Calmer Evening Routine",
        readMinutes: 9,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet incense still life in warm evening light",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Bedroom Scents for Better Sleep",
        readMinutes: 5,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense stick burning in a ceramic bowl with soft evening light",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance and shared living environments.",
};
