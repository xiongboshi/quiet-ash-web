import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}?category=guides-tips`;

/** Guide — `/journal/best-incense-for-small-apartments` */
export const journalArticleBestIncenseForSmallApartments: JournalArticleTemplate =
  {
    slug: "best-incense-for-small-apartments",
    bodyFormat: "guide",
    seoTitle: "Best Incense for Small Apartments and Bedrooms",
    seoDescription:
      "Low-smoke incense, soft scent profiles, and shorter burn times for apartments and bedrooms — tea, citrus, woods, and florals that stay comfortable in compact spaces.",
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Journal", href: JOURNAL_INDEX },
        { label: "Guides & Tips", href: CATEGORY_HREF },
        {
          label: "Best Incense for Small Apartments",
          href: journalPath("best-incense-for-small-apartments"),
        },
      ],
      categoryLabel: "GUIDES & TIPS",
      title: "Best Incense for Small Apartments and Bedrooms",
      subtitle:
        "Low-smoke scents and lighter burn habits for compact rooms that should feel calm — not overwhelming.",
      readMinutes: 8,
      updatedLabel: "Updated May 19, 2026",
      imageSrc: "/images/generated/essay-night-incense-ritual.png",
      imageAlt:
        "Incense with soft smoke in a small bedroom — calm light and restrained fragrance",
    },
    quickAnswer: {
      paragraphs: [
        "In apartments and bedrooms, low-smoke incense with softer profiles usually reads as cleaner — not louder. Light woods, tea, citrus, and gentle florals are common starting points.",
      ],
    },
    keyTakeaways: [
      {
        icon: "leaf",
        text: "Low-smoke incense is often better for apartments and bedrooms.",
      },
      {
        icon: "scent",
        text: "Softer scents usually feel cleaner in smaller rooms.",
      },
      {
        icon: "shield",
        text: "Ventilation helps prevent fragrance from feeling too dense.",
      },
      {
        icon: "brain",
        text: "Subtle fragrance often works better than intense fragrance.",
      },
    ],
    intro: {
      paragraphs: [
        "Studio flats and bedrooms punish heavy smoke faster than open-plan living rooms.",
        "This guide compares scent families, burn length, and habits that keep fragrance present without taking over the space.",
      ],
    },
    sections: [
      {
        id: "what-works-best",
        number: 1,
        heading: "What Type of Incense Works Best in Small Spaces?",
        paragraphs: [
          "Compact rooms amplify both smoke and scent throw.",
          "Many readers choose formulas labeled low-smoke so the air stays readable, not hazy, during everyday burns.",
          "The goal is atmosphere — a room that still feels like yours after the stick goes out.",
        ],
      },
      {
        id: "what-is-low-smoke",
        number: 2,
        heading: "What Is Low-Smoke Incense?",
        paragraphs: [
          "Low-smoke incense is designed to create less visible smoke while maintaining a softer scent experience indoors.",
          "In smaller rooms, this can help reduce air heaviness, smoke buildup, lingering intensity, and overwhelming fragrance.",
          "This is one reason many modern incense brands now focus on cleaner-burning formulas.",
        ],
      },
      {
        id: "best-scents-apartments",
        number: 3,
        heading: "Best Incense Scents for Apartments",
        subsections: [
          {
            heading: "Tea Scents",
            paragraphs: [
              "White tea and green tea blends often feel clean, airy, and easy to enjoy daily.",
              "They work especially well in bedrooms and minimalist interiors.",
            ],
          },
          {
            heading: "Light Citrus",
            paragraphs: [
              "Soft citrus fragrances can help compact spaces feel fresher and brighter without becoming overpowering.",
            ],
          },
          {
            heading: "Gentle Woods",
            paragraphs: [
              "Subtle sandalwood or cedarwood blends create warmth while still feeling calm and balanced indoors.",
            ],
          },
          {
            heading: "Light Florals",
            paragraphs: [
              "Simple floral scents like jasmine or linen-inspired blends usually work best when kept soft and understated.",
            ],
          },
        ],
      },
      {
        id: "too-heavy",
        number: 4,
        heading: "Scents That May Feel Too Heavy in Small Rooms",
        paragraphs: [
          "Some fragrances can become overwhelming in enclosed spaces, especially with limited ventilation.",
          "These may include:",
        ],
        bullets: [
          { text: "Very smoky incense" },
          { text: "Extremely sweet scents" },
          { text: "Heavy synthetic fragrance" },
          { text: "Dense resin-heavy blends" },
        ],
      },
      {
        id: "how-long",
        number: 5,
        heading: "How Long Should You Burn Incense in a Bedroom?",
        paragraphs: [
          "For most bedrooms, 15–20 minutes is usually enough.",
          "You do not need to burn a full stick every time.",
          "Crack a door or run a fan briefly afterward if scent lingers on textiles.",
        ],
      },
      {
        id: "without-overwhelming",
        number: 6,
        heading: "How to Use Incense Without Overwhelming the Room",
        subsections: [
          {
            heading: "Keep airflow moving",
            paragraphs: [
              "Open a window slightly or allow fresh air into the room.",
              "A little airflow often makes fragrance feel softer and more comfortable.",
            ],
          },
          {
            heading: "Start with shorter sessions",
            paragraphs: [
              "A small amount of fragrance usually goes a long way in compact spaces.",
            ],
          },
          {
            heading: "Choose lower-smoke incense",
            paragraphs: [
              "Cleaner-burning incense is generally easier to enjoy indoors every day.",
            ],
          },
          {
            heading: "Avoid layering too many scents",
            paragraphs: [
              "Using multiple fragrances at once can make smaller rooms feel heavy.",
              "In a studio, one scent source at a time is usually enough.",
            ],
          },
        ],
      },
      {
        id: "bedrooms",
        number: 7,
        heading: "Best Incense for Bedrooms",
        paragraphs: [
          "Bedrooms often work best with calming and softer scents such as:",
        ],
        bullets: [
          { text: "Lavender" },
          { text: "White tea" },
          { text: "Sandalwood" },
          { text: "Cedarwood" },
          { text: "Linen-inspired blends" },
        ],
      },
      {
        id: "low-smoke-why",
        number: 8,
        heading: "Why Low-Smoke Incense Matters in Apartments",
        paragraphs: [
          "When square footage is limited, smoke density matters as much as fragrance strength.",
          "Low-smoke sticks can keep evening rituals without leaving a film on curtains or bedding.",
          "That is why many apartment dwellers keep one mild profile for daily use and save stronger blends for rare occasions.",
        ],
      },
      {
        id: "final-thoughts",
        number: 9,
        heading: "Final Thoughts",
        paragraphs: [
          "Match incense to room size: shorter burns, breathable air, and profiles that stay soft at arm's length.",
          "When a bedroom still smells like yesterday's stick, lighter formulas and fresher airflow are usually the fix.",
        ],
      },
    ],
    faq: {
      heading: "FAQ",
      items: [
        {
          id: "too-strong-apartments",
          question: "Is incense too strong for apartments?",
          answer: [
            {
              type: "paragraph",
              text: "It can be — mainly when smoke has nowhere to go. Softer sticks plus airflow usually fix that without giving up incense entirely.",
            },
          ],
        },
        {
          id: "bedroom-scents",
          question: "What incense scents work best in bedrooms?",
          answer: [
            {
              type: "paragraph",
              text: "Calming does not have to mean sweet; linen, tea, and pale woods often sit quietly in the background.",
            },
          ],
        },
        {
          id: "how-long-small",
          question: "How long should incense burn in a small room?",
          answer: [
            {
              type: "paragraph",
              text: "Fifteen minutes is a useful default — you can always stop early, but you cannot un-smoke a room.",
            },
          ],
        },
        {
          id: "why-heavy",
          question: "Why does incense feel too heavy indoors?",
          answer: [
            {
              type: "paragraph",
              text: "Layering products (incense plus candles plus spray) is a frequent cause in studios.",
            },
          ],
        },
        {
          id: "low-smoke-small",
          question: "Is low-smoke incense better for small spaces?",
          answer: [
            {
              type: "paragraph",
              text: "Yes for daily use; reserve dense resin or spicy profiles for occasional open-window sessions.",
            },
          ],
        },
      ],
    },
    products: {
      heading: "Recommended Incense",
      items: [
        {
          slug: "paper-incense-sleeve",
          title: "Lavender & Linen",
          rating: 4.5,
          reviewCount: 294,
          priceDisplay: "$72",
          imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
          imageAlt: "Lavender and linen incense",
        },
        {
          slug: "wood-tray",
          title: "Citrus Grove",
          rating: 4.5,
          reviewCount: 276,
          priceDisplay: "$18",
          imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
          imageAlt: "Citrus Grove incense",
        },
        {
          slug: "brass-incense-stand",
          title: "White Jasmine",
          rating: 4.5,
          reviewCount: 312,
          priceDisplay: "$68",
          imageSrc: "/images/generated/best-sellers/white-jasmine-v3.png",
          imageAlt: "White Jasmine incense",
        },
        {
          slug: "ceramic-tea-cup",
          title: "Rose Garden",
          rating: 4.5,
          reviewCount: 246,
          priceDisplay: "$85",
          imageSrc: "/images/generated/best-sellers/rose-garden-v3.png",
          imageAlt: "Rose Garden incense",
        },
      ],
    },
    related: {
      heading: "Related Articles",
      items: [
        {
          slug: "is-incense-safe-for-pets",
          title: "Is Incense Safe for Pets?",
          readMinutes: 8,
          imageSrc: "/images/generated/essay-good-incense-not-loud.png",
          imageAlt: "Gentle incense smoke in a calm home",
        },
        {
          slug: "best-incense-for-sleep",
          title: "Let the Room Grow Quiet Before Sleep",
          readMinutes: 5,
          imageSrc: "/images/generated/essay-night-incense-ritual.png",
          imageAlt: "Incense for evening rest",
        },
        {
          slug: "good-incense-not-loud",
          title: "Good Incense Is Not Loud",
          readMinutes: 5,
          imageSrc: "/images/generated/essay-good-incense-not-loud.png",
          imageAlt: "Quiet incense still life",
        },
        {
          slug: "incense-patience",
          title: "Incense Patience",
          readMinutes: 6,
          imageSrc: "/images/generated/essay-incense-patience.png",
          imageAlt: "Slow ritual with incense",
        },
      ],
    },
  };
