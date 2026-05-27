import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}?category=guides-tips`;

/** Guide — `/journal/is-incense-safe-for-pets` */
export const journalArticleIsIncenseSafeForPets: JournalArticleTemplate = {
  slug: "is-incense-safe-for-pets",
  bodyFormat: "guide",
  seoTitle: "Is Incense Safe for Pets? What Cat and Dog Owners Should Know",
  seoDescription:
    "Can you burn incense around cats and dogs? Ventilation, low-smoke incense, lighter scents, and signs your fragrance may be too strong for pets.",
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
      "What cat and dog owners should know about smoke, scent strength, and everyday habits at home.",
    readMinutes: 8,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-good-incense-not-loud.png",
    imageAlt:
      "Soft incense smoke in a calm home with natural light — gentle everyday use",
  },
  quickAnswer: {
    paragraphs: [
      "Incense can usually be enjoyed safely in moderation when the room is well ventilated. Pets are often more sensitive to smoke and strong fragrance than humans — choose low-smoke incense, softer scents, and shorter burn times.",
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
  intro: {
    paragraphs: [
      "Many pet owners wonder whether incense belongs in a home shared with cats or dogs.",
      "The sections below cover smell sensitivity, smoke, practical burn habits, and scent choices that usually feel easier in shared rooms.",
    ],
  },
  sections: [
    {
      id: "can-pets-smell",
      number: 1,
      heading: "Can Cats and Dogs Smell Incense?",
      paragraphs: [
        "Yes. Cats and dogs have a much stronger sense of smell than humans.",
        "A scent that feels soft and balanced to people may feel far more intense to pets.",
        "This is especially noticeable in:",
      ],
      bullets: [
        { text: "Small apartments" },
        { text: "Bedrooms" },
        { text: "Rooms with limited airflow" },
        { text: "Spaces where incense burns for long periods" },
      ],
    },
    {
      id: "smoke-bad-for-pets",
      number: 2,
      heading: "Is Incense Smoke Bad for Pets?",
      paragraphs: [
        "Too much smoke in an enclosed space can feel uncomfortable for both humans and animals.",
        "Heavy smoke exposure may irritate some pets, especially when:",
      ],
      bullets: [
        { text: "The room has poor ventilation" },
        { text: "The incense produces dense smoke" },
        { text: "The fragrance is overly strong" },
        { text: "Incense burns continuously for long periods" },
      ],
    },
    {
      id: "what-is-low-smoke",
      number: 3,
      heading: "What Is Low-Smoke Incense?",
      paragraphs: [
        "Low-smoke incense is designed to produce less visible smoke while creating a softer indoor scent experience.",
        "Many people prefer it because it can help rooms feel cleaner, lighter, less overwhelming, and more comfortable for daily use.",
        "This is especially helpful in apartments, bedrooms, and shared living spaces.",
      ],
    },
    {
      id: "burn-comfortably",
      number: 4,
      heading: "How to Burn Incense More Comfortably Around Pets",
      subsections: [
        {
          heading: "Keep airflow moving",
          paragraphs: [
            "Open a window slightly or allow fresh air into the room while burning incense.",
            "A little ventilation often makes a space feel noticeably lighter.",
          ],
        },
        {
          heading: "Burn incense for shorter periods",
          paragraphs: [
            "You do not always need to burn a full stick.",
            "For many smaller homes, 15–30 minutes is often enough.",
          ],
        },
        {
          heading: "Avoid very heavy fragrances",
          paragraphs: [
            "Strong synthetic or overly sweet scents may feel overwhelming in enclosed rooms.",
            "Softer woods, tea scents, and lighter blends are usually easier to live with daily.",
          ],
        },
        {
          heading: "Give pets space",
          paragraphs: [
            "Pets should always be able to leave the room if they want to.",
            "If your cat or dog avoids the area, reduce usage or try a lighter scent profile.",
          ],
        },
      ],
    },
    {
      id: "better-scents",
      number: 5,
      heading: "What Incense Scents Are Better for Homes With Pets?",
      paragraphs: [
        "Lighter and softer scents are generally easier to enjoy in shared spaces.",
        "Popular options include:",
      ],
      bullets: [
        { text: "White tea" },
        { text: "Green tea" },
        { text: "Soft woods" },
        { text: "Light citrus" },
        { text: "Gentle florals" },
      ],
    },
    {
      id: "around-cats",
      number: 6,
      heading: "Should You Burn Incense Around Cats?",
      paragraphs: [
        "Cats often notice airborne particles sooner than dogs.",
        "They may react to dense smoke even when the scent seems mild to you.",
        "Watch for sneezing, hiding, or extra grooming after a burn — and ease off if those patterns show up.",
      ],
    },
    {
      id: "around-dogs",
      number: 7,
      heading: "Should You Burn Incense Around Dogs?",
      paragraphs: [
        "Most dogs tolerate mild home fragrance well in ventilated spaces.",
        "However, very dense smoke or concentrated scents may still feel uncomfortable for some dogs.",
        "As with people, moderation and airflow usually make the biggest difference.",
      ],
    },
    {
      id: "too-strong",
      number: 8,
      heading: "Signs Your Incense May Be Too Strong",
      paragraphs: ["Your incense may feel too intense if:"],
      bullets: [
        { text: "The room becomes visibly smoky" },
        { text: "The fragrance lingers heavily for hours" },
        { text: "The air feels heavy or overwhelming" },
        { text: "Your eyes feel irritated" },
        { text: "Your pet avoids the space" },
      ],
    },
    {
      id: "final-thoughts",
      number: 9,
      heading: "Final Thoughts",
      paragraphs: [
        "Ventilation, shorter burns, and softer scents are the practical baseline for pet-friendly incense.",
        "Let animals move freely, and treat avoidance as useful feedback rather than background noise.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "cats-uncomfortable",
        question: "Can incense make cats uncomfortable?",
        answer: [
          {
            type: "paragraph",
            text: "Yes — especially in closed rooms. Sneezing, leaving, or grooming more than usual are common signals to lighten up.",
          },
        ],
      },
      {
        id: "low-smoke-better",
        question: "Is low-smoke incense better for pets?",
        answer: [
          {
            type: "paragraph",
            text: "It is not mandatory, but less visible smoke often means less buildup for animals that stay in the same room.",
          },
        ],
      },
      {
        id: "open-windows",
        question: "Should I open windows while burning incense?",
        answer: [
          {
            type: "paragraph",
            text: "Even a cracked window helps fragrance circulate so it does not pool near the floor where pets spend time.",
          },
        ],
      },
      {
        id: "how-long-pets",
        question: "How long should incense burn around pets?",
        answer: [
          {
            type: "paragraph",
            text: "Try 15 minutes first, then air the room before deciding whether to relight.",
          },
        ],
      },
      {
        id: "softer-scents",
        question: "What scents are usually softer indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Unscented breaks between sessions matter too — pets recover faster when fragrance is not constant.",
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
        slug: "paper-incense-sleeve",
        title: "Lavender & Linen",
        rating: 4.5,
        reviewCount: 294,
        priceDisplay: "$72",
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
        imageAlt: "Lavender and linen incense",
      },
      {
        slug: "small-agarwood-box",
        title: "Sandalwood & Fig",
        rating: 4.5,
        reviewCount: 267,
        priceDisplay: "$210",
        imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.png",
        imageAlt: "Sandalwood and fig incense",
      },
    ],
  },
  related: {
    heading: "Related Articles",
    items: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments and Bedrooms",
        readMinutes: 8,
        imageSrc: "/images/generated/essay-night-incense-ritual.png",
        imageAlt: "Incense in a small bedroom with soft evening light",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Let the Room Grow Quiet Before Sleep",
        readMinutes: 5,
        imageSrc: "/images/generated/essay-night-incense-ritual.png",
        imageAlt: "Incense stick burning in a ceramic bowl with soft evening light",
      },
      {
        slug: "night-incense-ritual",
        title: "Night Incense Ritual",
        readMinutes: 6,
        imageSrc: "/images/generated/essay-night-incense-ritual.png",
        imageAlt: "Evening incense ritual",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense Is Not Loud",
        readMinutes: 5,
        imageSrc: "/images/generated/essay-good-incense-not-loud.png",
        imageAlt: "Quiet incense still life",
      },
    ],
  },
};
