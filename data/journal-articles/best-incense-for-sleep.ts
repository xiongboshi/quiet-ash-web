import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

/** Editorial template reference article (design mock) — `/journal/best-incense-for-sleep` */
export const journalArticleBestIncenseForSleep: JournalArticleTemplate = {
  slug: "best-incense-for-sleep",
  bodyFormat: "guide",
  seoTitle: "Best Incense for Sleep: Calming Scents for Better Rest",
  seoDescription:
    "Soft, calming scents that help you relax and sleep better — sandalwood, lavender, white tea, and how to use incense before bed.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: `${JOURNAL_INDEX}/better-sleep` },
      {
        label: "Let the Room Grow Quiet Before Sleep",
        href: journalPath("best-incense-for-sleep"),
      },
    ],
    categoryLabel: "GUIDES",
    title: "Let the Room Grow Quiet Before Sleep",
    subtitle: "Soft, calming scents that help you relax and sleep better.",
    readMinutes: 5,
    updatedLabel: "Updated May 12, 2024",
    imageSrc: "/images/generated/essay-incense-patience.png",
    imageAlt: "Incense stick burning in a black bowl with soft smoke",
  },
  quickAnswer: {
    text: "The best incense for sleep includes sandalwood, lavender, and white tea. These scents help calm the mind, reduce stress, and create a peaceful atmosphere for better rest.",
  },
  // No `faq` — section hidden on article page
  keyTakeaways: [
    {
      icon: "leaf",
      text: "Calming scents like sandalwood\nand lavender promote relaxation.",
    },
    {
      icon: "brain",
      text: "Lower stimulation scents help\nquiet the mind before bed.",
    },
    {
      icon: "scent",
      text: "Use in a well-ventilated room\n30–60 minutes before sleep.",
    },
    {
      icon: "shield",
      text: "Choose natural ingredients\nfor a cleaner, safer experience.",
    },
  ],
  sections: [
    {
      id: "why-scents",
      number: 1,
      heading: "Why Scents Affect Sleep",
      paragraphs: [
        "Scents can influence the nervous system. Certain calming aromas help reduce stress hormones and slow the mind down, making it easier to fall and stay asleep.",
      ],
    },
    {
      id: "best-scents",
      number: 2,
      heading: "Best Incense Scents for Sleep",
      paragraphs: ["These scents are known for their relaxing and sedative effects."],
      bullets: [
        { lead: "Sandalwood", text: "Warm, woody, and deeply calming." },
        { lead: "Lavender", text: "Helps reduce anxiety and promotes relaxation." },
        { lead: "White Tea", text: "Light, soft, and perfect for nighttime." },
        { lead: "Chamomile", text: "Gentle and soothing for a restless mind." },
      ],
    },
    {
      id: "what-to-avoid",
      number: 3,
      heading: "What to Avoid",
      paragraphs: ["Some scents can be too stimulating and make it harder to wind down."],
      bullets: [
        { text: "Strong citrus (e.g., lemon, orange)" },
        { text: "Mint or eucalyptus" },
        { text: "Artificial sweet scents" },
      ],
    },
    {
      id: "how-to-use",
      number: 4,
      heading: "How to Use Incense for Better Sleep",
      paragraphs: [
        "Light your incense 30–60 minutes before bed. Use in a well-ventilated room and let the scent fill the space gently. Extinguish before sleeping.",
      ],
    },
  ],
  products: {
    heading: "Recommended Incense",
    items: [
      {
        slug: "brass-incense-stand",
        title: "Sandalwood Incense",
        rating: 4.5,
        reviewCount: 128,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/brass-incense-stand/hero.png",
        imageAlt: "Sandalwood incense",
      },
      {
        slug: "paper-incense-sleeve",
        title: "Lavender Incense",
        rating: 4.5,
        reviewCount: 96,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/products/paper-incense-sleeve/hero.png",
        imageAlt: "Lavender incense",
      },
      {
        slug: "wood-tray",
        title: "White Tea Incense",
        rating: 4,
        reviewCount: 74,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/best-sellers/quiet-cloud-v3.png",
        imageAlt: "White tea incense",
      },
      {
        slug: "small-agarwood-box",
        title: "Chamomile Incense",
        rating: 4,
        reviewCount: 56,
        priceDisplay: "$18.00",
        imageSrc: "/images/generated/best-sellers/lavender-field-v3.png",
        imageAlt: "Chamomile incense",
      },
    ],
  },
  related: {
    heading: "Related Articles",
    items: [
      {
        slug: "night-incense-ritual",
        title: "5 Scents to Help You Sleep Better Naturally",
        readMinutes: 5,
        imageSrc: "/images/generated/essay-night-incense-ritual.png",
        imageAlt: "Incense burning in a bowl on a wooden bedside table",
      },
      {
        slug: "incense-patience",
        title: "How to Build a Daily Incense Ritual",
        readMinutes: 6,
        imageSrc: "/images/generated/essay-incense-patience.png",
        imageAlt: "Meditation space with incense smoke and soft daylight",
      },
      {
        slug: "good-incense-not-loud",
        title: "The Benefits of Citrus Aromatherapy",
        readMinutes: 4,
        imageSrc: "/images/generated/best-sellers/citrus-grove-v5.png",
        imageAlt: "Citrus fruits and incense on a bright surface",
      },
      {
        slug: "forgotten-incense-culture",
        title: "Slow Living: Finding Peace in Small Moments",
        readMinutes: 4,
        imageSrc: "/images/generated/essay-forgotten-incense-culture.png",
        imageAlt: "Soft light in a calm living room with neutral tones",
      },
    ],
  },
};
