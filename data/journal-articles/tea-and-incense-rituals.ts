import type { JournalArticleTemplate } from "@/types/journal-article";
import { guidePath, JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/quiet-routines`;

/** Guide — `/journal/tea-and-incense-rituals` */
export const journalArticleTeaAndIncenseRituals: JournalArticleTemplate = {
  slug: "tea-and-incense-rituals",
  bodyFormat: "guide",
  seoTitle: "Tea and Incense Rituals for Calm Evenings",
  seoDescription:
    "Discover simple tea and incense rituals that create softer evenings, calmer atmosphere, and slower daily routines at home.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Quiet Routines", href: CATEGORY_HREF },
      {
        label: "Tea and Incense Rituals",
        href: journalPath("tea-and-incense-rituals"),
      },
    ],
    categoryLabel: "QUIET ROUTINES",
    title: "Tea and Incense Rituals",
    subtitle:
      "Quiet routines, softer atmosphere, and slower moments at home.",
    readMinutes: 8,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-incense-patience.webp",
    imageAlt: "Tea and incense on a quiet desk in soft evening light",
  },
  quickAnswer: {
    paragraphs: [
      "Tea and incense rituals are simple ways to create a calmer atmosphere after busy or overstimulating days.",
      "Many people combine soft fragrance, warm tea, and quieter lighting to help slow down mentally and create more intentional evening routines.",
      "Gentler scents and low-smoke incense usually work best for this type of daily ritual.",
    ],
  },
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Tea and incense rituals help create slower transitions into the evening.",
    },
    {
      icon: "scent",
      text: "Softer scents usually feel more comfortable indoors.",
    },
    {
      icon: "shield",
      text: "Low-smoke incense works better for daily rituals.",
    },
    {
      icon: "brain",
      text: "Small rituals often feel more sustainable than complex routines.",
    },
  ],
  sections: [
    {
      id: "why-together",
      number: 1,
      heading: "Why Tea And Incense Work Well Together",
      paragraphs: [
        "Tea and incense both encourage slower attention.",
        "The process of preparing tea, lighting incense, and sitting quietly for a few minutes creates a natural pause from screens, work, and constant stimulation.",
        "For many people, the goal is not productivity. It is simply creating a softer atmosphere at home.",
      ],
    },
    {
      id: "best-scents-tea",
      number: 2,
      heading: "Best Incense Scents For Tea Rituals",
      subsections: [
        {
          heading: "White Tea",
          paragraphs: [
            "White tea-inspired incense feels clean, airy, and subtle.",
            "It works especially well for minimal and quiet spaces.",
          ],
        },
        {
          heading: "Sandalwood",
          paragraphs: [
            "Soft sandalwood creates warmth without feeling overpowering.",
            "Many people prefer sandalwood during reading, journaling, or evening tea.",
          ],
        },
        {
          heading: "Gentle Woods",
          paragraphs: [
            "Light cedarwood or soft wood blends help rooms feel grounded and calm.",
          ],
        },
        {
          heading: "Linen And Soft Floral Blends",
          paragraphs: [
            "Simple floral or linen-inspired fragrances often pair well with lighter teas and relaxed evenings.",
          ],
        },
      ],
    },
    {
      id: "tea-pairs",
      number: 3,
      heading: "What Tea Pairs Well With Incense?",
      paragraphs: [
        "Many people prefer softer teas that feel calming and balanced indoors.",
        "Popular options include:",
      ],
      bullets: [
        { text: "Green tea" },
        { text: "White tea" },
        { text: "Jasmine tea" },
        { text: "Oolong tea" },
        { text: "Light herbal tea" },
      ],
      subsections: [
        {
          paragraphs: [
            "Heavy fragrance and strong tea together can sometimes feel overwhelming in smaller rooms.",
          ],
        },
      ],
    },
    {
      id: "simple-ritual",
      number: 4,
      heading: "How To Create A Simple Tea And Incense Ritual",
      subsections: [
        {
          heading: "Lower The Lighting",
          paragraphs: [
            "Warm lighting helps create a quieter atmosphere.",
          ],
        },
        {
          heading: "Keep Fragrance Subtle",
          paragraphs: [
            "The room should feel comfortable, not smoky or heavily scented.",
            "Low-smoke incense is often better for daily rituals.",
          ],
        },
        {
          heading: "Slow Down The Process",
          paragraphs: [
            "Small actions such as preparing tea slowly or sitting quietly for a few minutes can help evenings feel less rushed.",
          ],
        },
        {
          heading: "Reduce Noise And Screens",
          paragraphs: [
            "Many people enjoy tea and incense rituals away from notifications and bright screens.",
          ],
        },
      ],
    },
    {
      id: "low-smoke",
      number: 5,
      heading: "Why Low-Smoke Incense Matters Indoors",
      paragraphs: [
        "In apartments and smaller homes, smoke becomes noticeable quickly.",
        "Low-smoke incense helps:",
      ],
      bullets: [
        { text: "Keep the air feeling lighter" },
        { text: "Create softer atmosphere" },
        { text: "Reduce heaviness indoors" },
        { text: "Make fragrance feel more balanced" },
      ],
      subsections: [
        {
          paragraphs: [
            "This is one reason cleaner-burning incense has become popular for modern home rituals.",
          ],
        },
      ],
    },
    {
      id: "evening-wind-down",
      number: 6,
      heading: "Tea And Incense For Evening Wind-Down",
      paragraphs: [
        "Tea and incense rituals are often most effective in the evening because they create psychological separation between daytime activity and nighttime rest.",
        "Many people combine these rituals with:",
      ],
      bullets: [
        { text: "Reading" },
        { text: "Journaling" },
        { text: "Quiet music" },
        { text: "Meditation" },
        { text: "Gentle stretching" },
        { text: "Reflection" },
      ],
      subsections: [
        {
          paragraphs: [
            "The goal is usually calm atmosphere rather than strict routine.",
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Tea and incense rituals do not need to be complicated.",
        "For many people, simple routines built around:",
      ],
      bullets: [
        { text: "Softer fragrance" },
        { text: "Warm tea" },
        { text: "Quiet lighting" },
        { text: "Slower atmosphere" },
      ],
      subsections: [
        {
          paragraphs: [
            "can help evenings feel calmer and less overstimulating.",
            "A lighter and quieter environment often creates the most comfortable daily ritual.",
          ],
        },
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "why-combine",
        question: "Why do people combine tea and incense?",
        answer: [
          {
            type: "paragraph",
            text: "Many people enjoy tea and incense together because both help create slower and quieter moments at home.",
          },
        ],
      },
      {
        id: "best-with-tea",
        question: "What incense works best with tea?",
        answer: [
          {
            type: "paragraph",
            text: "Soft scents such as sandalwood, white tea, cedarwood, and light florals are commonly preferred.",
          },
        ],
      },
      {
        id: "low-smoke-indoors",
        question: "Is low-smoke incense better indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is often more comfortable in bedrooms, apartments, and smaller indoor spaces.",
          },
        ],
      },
      {
        id: "how-long-ritual",
        question: "How long should incense burn during a tea ritual?",
        answer: [
          {
            type: "paragraph",
            text: "For many spaces, 15–20 minutes is usually enough to create a balanced atmosphere.",
          },
        ],
      },
      {
        id: "calming-tea",
        question: "What tea feels most calming at night?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer green tea, white tea, jasmine tea, or herbal tea during evening routines.",
          },
        ],
      },
    ],
  },
  products: {
    heading: "Recommended for Tea Rituals",
    items: [
      {
        slug: "ceramic-tea-cup",
        title: "Stone Glaze Tea Bowl",
        rating: 4.5,
        reviewCount: 142,
        priceDisplay: "$42.00",
        imageSrc: "/images/generated/products/ceramic-tea-cup/hero.webp",
        imageAlt: "Stone glaze tea bowl for evening tea",
      },
      {
        slug: "wood-tray",
        title: "Walnut Tea Tray",
        rating: 4.5,
        reviewCount: 116,
        priceDisplay: "$78.00",
        imageSrc: "/images/generated/products/wood-tray/hero.webp",
        imageAlt: "Walnut tray for tea and incense",
      },
      {
        slug: "linen-cloth",
        title: "Linen Tea Cloth",
        rating: 4,
        reviewCount: 88,
        priceDisplay: "$28.00",
        imageSrc: "/images/generated/products/linen-cloth/hero.webp",
        imageAlt: "Linen cloth beside a quiet tea setting",
      },
      {
        slug: "brass-incense-stand",
        title: "Bronze Incense Holder",
        rating: 4.5,
        reviewCount: 128,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/brass-incense-stand/hero.webp",
        imageAlt: "Bronze incense holder for a tea ritual",
      },
    ],
  },
  related: {
    heading: "Related Reading",
    items: [
      {
        slug: "incense-after-work",
        title: "Incense After Work",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Soft incense in a calm room after work",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Best Incense for Sleep",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Incense in soft evening bedroom light",
      },
      {
        slug: "evening-calm-guide",
        href: guidePath("evening-calm-guide"),
        title: "Evening Wind-Down Rituals",
        readMinutes: 9,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Evening wind-down with tea and incense",
      },
      {
        slug: "incense-care-guide",
        href: guidePath("incense-care-guide"),
        title: "Low-Smoke Incense Guide",
        readMinutes: 10,
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Low-smoke incense in a ventilated room",
      },
    ],
  },
  articleNote:
    "This article is intended for general informational purposes about indoor fragrance, tea rituals, and modern home atmosphere.",
};
