import type { JournalArticleTemplate } from "@/types/journal-article";
import { guidePath, JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/best-incense-for-sleep` */
export const journalArticleBestIncenseForSleep: JournalArticleTemplate = {
  slug: "best-incense-for-sleep",
  bodyFormat: "guide",
  seoTitle: "Best Incense for Sleep and Relaxing Evenings",
  seoDescription:
    "Discover the best incense scents for sleep, calming evenings, and nighttime relaxation with softer fragrances, low-smoke incense, and gentle bedroom atmosphere.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Best Incense for Sleep",
        href: journalPath("best-incense-for-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Best Incense for Sleep and Relaxing Evenings",
    subtitle:
      "Softer scents, calmer bedrooms, and quieter nighttime routines for better rest.",
    readMinutes: 8,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt:
      "Incense stick burning in a ceramic bowl with soft evening light",
  },
  quickAnswer: {
    paragraphs: [
      "For sleep and nighttime relaxation, many people prefer softer incense scents such as sandalwood, lavender, white tea, and gentle woods.",
      "Low-smoke incense is often more comfortable in bedrooms because heavy smoke or strong fragrances can feel overstimulating before sleep.",
      "A subtle atmosphere usually works better than intense fragrance in smaller nighttime spaces.",
    ],
  },
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Softer scents are usually better before sleep — sandalwood, lavender, and gentle woods.",
    },
    {
      icon: "shield",
      text: "Low-smoke incense helps bedrooms feel more comfortable without heavy smoke buildup.",
    },
    {
      icon: "scent",
      text: "White tea and light florals often create a subtler atmosphere for nighttime routines.",
    },
    {
      icon: "brain",
      text: "Shorter burn sessions and gentle airflow usually work best before bed.",
    },
  ],
  sections: [
    {
      id: "best-for-sleep",
      number: 1,
      heading: "What Type Of Incense Is Best For Sleep?",
      paragraphs: [
        "The best incense for sleep is usually soft, subtle, and calming rather than strong or overly smoky.",
        "Many people prefer fragrances that create a slower and quieter atmosphere in the evening instead of filling the room with dense scent.",
        "Low-smoke incense is especially popular for bedrooms and nighttime routines.",
      ],
    },
    {
      id: "best-scents",
      number: 2,
      heading: "Best Incense Scents For Sleep",
      subsections: [
        {
          heading: "Sandalwood",
          paragraphs: [
            "Sandalwood is one of the most popular evening incense scents because it feels warm, grounding, and soft indoors.",
            "Many people enjoy sandalwood during slower nighttime routines, reading, or quiet evenings.",
          ],
        },
        {
          heading: "Lavender",
          paragraphs: [
            "Lavender is commonly associated with calm and relaxation.",
            "Lighter lavender blends often work well in bedrooms because they feel softer and less overpowering before sleep.",
          ],
        },
        {
          heading: "White Tea",
          paragraphs: [
            "White tea scents feel clean, airy, and subtle.",
            "For people who dislike heavy fragrance at night, white tea often creates a lighter atmosphere.",
          ],
        },
        {
          heading: "Gentle Woods",
          paragraphs: [
            "Soft cedarwood or warm wood blends can help a bedroom feel calmer without becoming too smoky or intense.",
          ],
        },
      ],
    },
    {
      id: "too-strong",
      number: 3,
      heading: "Scents That May Feel Too Strong Before Sleep",
      paragraphs: [
        "Some fragrances may feel overstimulating in bedrooms, especially in smaller spaces.",
        "These may include:",
      ],
      bullets: [
        { text: "Very smoky incense" },
        { text: "Extremely sweet fragrances" },
        { text: "Heavy synthetic scents" },
        { text: "Strong spice-heavy blends" },
      ],
      subsections: [
        {
          paragraphs: [
            "A softer scent profile is usually easier to enjoy before bed.",
          ],
        },
      ],
    },
    {
      id: "how-long",
      number: 4,
      heading: "How Long Should You Burn Incense Before Sleep?",
      paragraphs: [
        "For many bedrooms, 15–20 minutes is enough.",
        "You do not always need to burn a full stick through the night. Shorter burn sessions often create a cleaner and more balanced nighttime atmosphere.",
        "Ventilation also helps prevent smoke buildup indoors.",
      ],
    },
    {
      id: "bedroom-use",
      number: 5,
      heading: "How To Use Incense In A Bedroom",
      subsections: [
        {
          heading: "Keep Airflow Moving",
          paragraphs: [
            "Open a window slightly or allow gentle airflow into the room while burning incense.",
          ],
        },
        {
          heading: "Use Shorter Burn Sessions",
          paragraphs: [
            "A small amount of fragrance is often enough for nighttime spaces.",
          ],
        },
        {
          heading: "Choose Low-Smoke Incense",
          paragraphs: [
            "Cleaner-burning incense usually feels softer and more comfortable before sleep.",
          ],
        },
        {
          heading: "Avoid Overly Strong Fragrance",
          paragraphs: [
            "Heavy fragrance can make smaller bedrooms feel stuffy or overstimulating.",
            "Subtle scent often works better at night.",
          ],
        },
      ],
    },
    {
      id: "low-smoke-why",
      number: 6,
      heading: "Why Low-Smoke Incense Works Better For Bedrooms",
      paragraphs: [
        "Bedrooms are smaller and more enclosed than larger living spaces.",
        "Because of this, smoke and fragrance become noticeable much faster.",
        "Low-smoke incense helps:",
      ],
      bullets: [
        { text: "Reduce heaviness in the air" },
        { text: "Create a softer atmosphere" },
        { text: "Keep bedrooms feeling cleaner" },
        { text: "Make fragrance feel more balanced indoors" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason many people now prefer cleaner-burning incense for evening routines.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: ["The best incense for sleep is usually:"],
      bullets: [
        { text: "Soft in strength" },
        { text: "Low in smoke" },
        { text: "Calm and subtle" },
        { text: "Comfortable for smaller nighttime spaces" },
      ],
      subsections: [
        {
          paragraphs: [
            "In bedrooms, lighter fragrance often feels more relaxing than intense fragrance.",
            "A softer atmosphere can help evenings feel quieter, slower, and more restful.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "best-for-sleep",
        question: "What incense is best for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer sandalwood, lavender, white tea, and gentle wood scents for sleep and nighttime relaxation.",
          },
        ],
      },
      {
        id: "good-before-bed",
        question: "Is incense good before bed?",
        answer: [
          {
            type: "paragraph",
            text: "Many people enjoy incense before bed because softer scents can help create a calmer nighttime atmosphere.",
          },
        ],
      },
      {
        id: "how-long-bedroom",
        question: "How long should incense burn in a bedroom?",
        answer: [
          {
            type: "paragraph",
            text: "For many bedrooms, 15–20 minutes is usually enough to create a balanced scent experience.",
          },
        ],
      },
      {
        id: "too-strong-sleep",
        question: "What scents are too strong for sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Very smoky, overly sweet, or heavy synthetic fragrances may feel overwhelming before sleep.",
          },
        ],
      },
      {
        id: "low-smoke-bedrooms",
        question: "Is low-smoke incense better for bedrooms?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer low-smoke incense because it creates a lighter and more comfortable indoor atmosphere.",
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
        slug: "sleep-guide",
        href: guidePath("sleep-guide"),
        title: "Bedroom Scents for Better Sleep",
        readMinutes: 12,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Soft evening light with incense and calm bedroom atmosphere",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance, sleep atmosphere, and modern living spaces.",
};
