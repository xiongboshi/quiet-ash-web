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
    readMinutes: 7,
    updatedLabel: "Updated May 19, 2026",
    imageSrc: "/images/generated/essay-good-incense-not-loud.png",
    imageAlt:
      "Soft incense smoke in a calm home with natural light — gentle everyday use",
  },
  quickAnswer: {
    text: "Incense can usually be enjoyed safely in moderation when the room is well ventilated. Pets are often more sensitive to smoke and strong fragrance than humans — choose low-smoke incense, softer scents, and shorter burn times.",
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
        "A scent that feels soft and subtle to people may feel much stronger to pets, especially in small apartments or closed rooms.",
        "Because of this, lighter fragrances are usually a better choice for homes with pets.",
      ],
    },
    {
      id: "smoke-bad-for-pets",
      number: 2,
      heading: "Is Incense Smoke Bad for Pets?",
      paragraphs: [
        "Too much smoke in an enclosed space can irritate both humans and animals.",
        "Heavy smoke exposure may cause discomfort for some pets, especially when:",
      ],
      bullets: [
        { text: "The room has poor ventilation" },
        { text: "The incense is very smoky" },
        { text: "The scent is overly strong" },
        { text: "Incense is burned for long periods" },
      ],
    },
    {
      id: "safer-habits",
      number: 3,
      heading: "How to Burn Incense More Safely Around Pets",
      paragraphs: [
        "If you have pets at home, these simple habits can help create a more comfortable environment:",
      ],
      bullets: [
        {
          lead: "Keep the room ventilated",
          text: "Open a window or allow airflow while burning incense.",
        },
        {
          lead: "Burn incense for shorter periods",
          text: "15–30 minutes is usually enough for most rooms.",
        },
        {
          lead: "Avoid very heavy fragrances",
          text: "Strong synthetic scents may feel overwhelming in smaller spaces.",
        },
        {
          lead: "Give pets space",
          text: "Pets should always be able to leave the room if they want to.",
        },
        {
          lead: "Choose low-smoke incense",
          text: "Cleaner-burning incense is usually better for everyday use indoors.",
        },
      ],
    },
    {
      id: "better-scents",
      number: 4,
      heading: "What Incense Scents Are Better for Homes With Pets?",
      paragraphs: [
        "Lighter and softer scents are generally easier to enjoy in shared spaces.",
        "Popular options include:",
      ],
      bullets: [
        { lead: "White tea", text: "Clean and unobtrusive." },
        { lead: "Light citrus", text: "Bright without heavy sweetness." },
        { lead: "Soft woods", text: "Warm and steady, not dense." },
        { lead: "Gentle florals", text: "Simple, not perfume-heavy." },
      ],
    },
    {
      id: "around-cats",
      number: 5,
      heading: "Should You Burn Incense Around Cats?",
      paragraphs: [
        "Cats are usually more sensitive to scent and airborne particles than dogs.",
        "For cat owners, it is especially important to use ventilation, avoid excessive smoke, burn incense in moderation, and watch for signs of discomfort.",
        "If your cat leaves the room or seems irritated, reduce usage or switch to lighter scents.",
      ],
    },
    {
      id: "around-dogs",
      number: 6,
      heading: "Should You Burn Incense Around Dogs?",
      paragraphs: [
        "Most dogs tolerate mild home fragrance well in ventilated spaces.",
        "However, strong smoke buildup or very concentrated scents may still feel uncomfortable for some dogs.",
        "As with humans, moderation and airflow are important.",
      ],
    },
    {
      id: "too-strong",
      number: 7,
      heading: "Signs Your Incense May Be Too Strong",
      paragraphs: ["Your incense may be too intense if:"],
      bullets: [
        { text: "The room feels smoky" },
        { text: "The scent lingers heavily for hours" },
        { text: "Your eyes feel irritated" },
        { text: "Your pet avoids the area" },
      ],
    },
    {
      id: "final-thoughts",
      number: 8,
      heading: "Final Thoughts",
      paragraphs: [
        "Incense can usually be enjoyed safely around pets when used carefully and in moderation.",
        "The most important things are good ventilation, lower smoke levels, softer scent profiles, and shorter burn sessions.",
        "For many homes, cleaner and lighter incense works better than strong, smoky fragrances.",
      ],
    },
  ],
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
        readMinutes: 7,
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
        slug: "incense-patience",
        title: "How to Build a Daily Incense Ritual",
        readMinutes: 6,
        imageSrc: "/images/generated/essay-incense-patience.png",
        imageAlt: "Calm space with incense smoke",
      },
    ],
  },
};
