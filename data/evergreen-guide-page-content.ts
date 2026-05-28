import type { EvergreenGuideSlug } from "@/data/evergreen-guides";
import type { TopicPageFaqItem, TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import { JOURNAL_INDEX, journalPath, SHOP_INDEX } from "@/lib/site-paths";

export type GuidePageTocIcon =
  | "scents"
  | "atmosphere"
  | "rituals"
  | "incense"
  | "faq"
  | "articles";

export type GuidePageTocItem = {
  id: string;
  label: string;
  icon: GuidePageTocIcon;
};

export type GuidePageScentIcon = "moon" | "sprout" | "tree";

export type GuidePageScentCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  icon: GuidePageScentIcon;
};

export type GuidePageFeatureCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  listType: "checklist" | "numbered";
  items: readonly string[];
};

export type EvergreenGuidePageContent = {
  heroTagline: string;
  heroLede: string;
  quickAnswer: readonly string[];
  quickAnswerImageSrc: string;
  quickAnswerImageAlt: string;
  toc: readonly GuidePageTocItem[];
  scents: {
    title: string;
    subtitle: string;
    viewAllHref: string;
    viewAllLabel: string;
    cards: readonly GuidePageScentCard[];
  };
  features: readonly [GuidePageFeatureCard, GuidePageFeatureCard];
  faq: readonly TopicPageFaqItem[];
  relatedArticles: readonly TopicPageFeaturedArticle[];
  relatedArticlesViewAllHref: string;
  saveShareSub: string;
};

const sleepFaq: readonly TopicPageFaqItem[] = [
  {
    id: "sleep-safe",
    question: "Is incense safe to use while sleeping?",
    answer: [
      {
        type: "paragraph",
        text: "Short, well-ventilated incense sessions before sleep are usually more comfortable than burning incense all night. Choose low-smoke options and keep the stick away from bedding.",
      },
    ],
  },
  {
    id: "sleep-scents",
    question: "What scents are best for deep sleep?",
    answer: [
      {
        type: "paragraph",
        text: "Sandalwood, lavender, and soft woods are popular for rest. Lighter tea and floral scents can feel airy without overwhelming a bedroom.",
      },
    ],
  },
  {
    id: "sleep-timing",
    question: "How long before bed should I use incense?",
    answer: [
      {
        type: "paragraph",
        text: "Many people burn incense for 15–30 minutes before bed, then let the room settle. You do not need a full stick every night in a small bedroom.",
      },
    ],
  },
  {
    id: "sleep-anxiety",
    question: "Can incense help with anxiety or overthinking?",
    answer: [
      {
        type: "paragraph",
        text: "Gentle, familiar scents can support a slower evening routine. If a fragrance feels sharp or distracting, switch to something softer or reduce burn time.",
      },
    ],
  },
];

export const evergreenGuidePageContent: Record<EvergreenGuideSlug, EvergreenGuidePageContent> = {
  "sleep-guide": {
    heroTagline: "Scents. Atmosphere. Rituals.",
    heroLede: "Everything you need for deeper, calmer nights.",
    quickAnswer: [
      "Sandalwood, lavender, and cedarwood are the most researched scents for better sleep.",
      "Use calming aromas, soft light, and simple evening rituals to help your body and mind rest deeply.",
    ],
    quickAnswerImageSrc: "/images/generated/mood-poster-focus-lavender.webp",
    quickAnswerImageAlt: "Dried lavender sprigs",
    toc: [
      { id: "best-scents", label: "Best Scents for Sleep", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Bedroom Atmosphere", icon: "atmosphere" },
      { id: "evening-rituals", label: "Evening Rituals", icon: "rituals" },
      { id: "how-to-use-incense", label: "How to Use Incense", icon: "incense" },
      { id: "faq", label: "FAQ", icon: "faq" },
      { id: "related-articles", label: "Related Articles", icon: "articles" },
    ],
    scents: {
      title: "Best Scents for Sleep",
      subtitle:
        "These natural scents are known to calm the nervous system and help your body shift into rest mode.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Sandalwood",
          description:
            "Deeply grounding and calming. Helps quiet the mind and promote deep rest.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Sandalwood →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Sandalwood in a ceramic bowl",
          icon: "moon",
        },
        {
          title: "Lavender",
          description:
            "Clinically shown to reduce anxiety and improve sleep quality.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Lavender →",
          imageSrc: "/images/generated/mood-poster-focus-lavender.webp",
          imageAlt: "Dried lavender bundle",
          icon: "sprout",
        },
        {
          title: "Cedarwood",
          description:
            "Soothing and stabilizing. Supports longer, more restorative sleep.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Cedarwood →",
          imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
          imageAlt: "Cedarwood and greenery",
          icon: "tree",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Bedroom Atmosphere",
        description:
          "Small changes in your space can make a big difference in sleep quality.",
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Minimal bedroom with soft light and incense",
        listType: "checklist",
        items: [
          "Dim the lights in the evening",
          "Keep the room cool and ventilated",
          "Use natural materials and soft textures",
          "Choose calming scents like lavender or sandalwood",
        ],
      },
      {
        id: "evening-rituals",
        title: "Evening Rituals",
        description: "Simple rituals help your body and mind transition into rest.",
        imageSrc: "/images/generated/mood-hero-slide-03-sleep.webp",
        imageAlt: "Candle and incense on a wooden tray",
        listType: "numbered",
        items: [
          "Put your phone away",
          "Light your incense",
          "Stretch or breathe deeply",
          "Read or reflect",
          "Lower the lights",
          "Sleep",
        ],
      },
    ],
    faq: sleepFaq,
    relatedArticles: [
      {
        slug: "best-incense-for-sleep",
        title: "Best Incense for Sleep and Relaxation",
        description: "",
      },
      {
        slug: "night-incense-ritual",
        title: "Creating a Calming Bedroom Atmosphere",
        description: "",
      },
      {
        slug: "what-is-agarwood",
        title: "Evening Wind-Down Rituals That Actually Work",
        description: "",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "Low Smoke Incense for Small Spaces",
        description: "",
      },
    ],
    relatedArticlesViewAllHref: JOURNAL_INDEX,
    saveShareSub: "Bookmark this guide to revisit your sleep rituals anytime.",
  },
  "small-apartment-fragrance-guide": {
    heroTagline: "Ventilation. Subtle scent. Compact homes.",
    heroLede: "How to fragrance small rooms without overwhelm.",
    quickAnswer: [
      "Low-smoke incense and lighter woods read cleaner in apartments than heavy smoke buildup.",
      "Short sessions, open windows when you can, and softer scents keep the air comfortable.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-night-incense-ritual.webp",
    quickAnswerImageAlt: "Incense with light smoke in a bedroom",
    toc: [
      { id: "best-scents", label: "Best Scents for Small Spaces", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Room Setup", icon: "atmosphere" },
      { id: "evening-rituals", label: "Daily Habits", icon: "rituals" },
      { id: "how-to-use-incense", label: "How to Use Incense", icon: "incense" },
      { id: "faq", label: "FAQ", icon: "faq" },
      { id: "related-articles", label: "Related Articles", icon: "articles" },
    ],
    scents: {
      title: "Best Scents for Small Spaces",
      subtitle:
        "Lighter profiles stay in the background — tea, soft woods, and gentle florals are common starting points.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "White Tea",
          description: "Airy and clean. Reads fresh without filling the room.",
          href: SHOP_INDEX,
          ctaLabel: "Explore White Tea →",
          imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
          imageAlt: "Tea cup and soft light",
          icon: "sprout",
        },
        {
          title: "Soft Woods",
          description: "Grounding but restrained — good for bedrooms and desks.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Soft Woods →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Wood incense materials",
          icon: "tree",
        },
        {
          title: "Light Florals",
          description: "Gentle florals add calm without sharp sweetness.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Light Florals →",
          imageSrc: "/images/generated/mood-poster-calm-jasmine.webp",
          imageAlt: "Soft floral mood still life",
          icon: "moon",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Room Setup",
        description: "A few spatial habits make incense feel lighter indoors.",
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet room with incense",
        listType: "checklist",
        items: [
          "Burn near an open window or vent when possible",
          "Keep sessions short in bedrooms",
          "Use a stable holder away from fabrics",
          "Choose low-smoke formulas for daily use",
        ],
      },
      {
        id: "evening-rituals",
        title: "Daily Habits",
        description: "Small routines keep fragrance subtle in compact homes.",
        imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.webp",
        imageAlt: "Incense box on a shelf",
        listType: "numbered",
        items: [
          "Air the room first",
          "Light one stick or cone",
          "Extinguish before smoke builds",
          "Note what feels too strong",
          "Adjust scent or burn time",
          "Store sticks sealed and dry",
        ],
      },
    ],
    faq: [
      {
        id: "apt-smoke",
        question: "Is low-smoke incense better for apartments?",
        answer: [
          {
            type: "paragraph",
            text: "Many readers choose low-smoke incense so the air stays readable, not hazy, during everyday burns in small rooms.",
          },
        ],
      },
      {
        id: "apt-bedroom",
        question: "Can I burn incense in a bedroom?",
        answer: [
          {
            type: "paragraph",
            text: "Yes — with ventilation, shorter sessions, and softer scents. Avoid burning while you sleep.",
          },
        ],
      },
      {
        id: "apt-vent",
        question: "How often should I ventilate?",
        answer: [
          {
            type: "paragraph",
            text: "Opening a window for a few minutes before and after burning helps clear residual smoke and keeps the room comfortable.",
          },
        ],
      },
      {
        id: "apt-scent",
        question: "What if the scent feels too strong?",
        answer: [
          {
            type: "paragraph",
            text: "Try a lighter profile, burn half a stick, or move the holder farther from where you sit or sleep.",
          },
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        description: "",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense That Is Not Too Loud",
        description: "",
      },
      {
        slug: "is-incense-safe-for-pets",
        title: "Is Incense Safe for Pets?",
        description: "",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Low Smoke Options for Bedrooms",
        description: "",
      },
    ],
    relatedArticlesViewAllHref: journalPath("small-space-living"),
    saveShareSub: "Bookmark this guide for apartment fragrance tips anytime.",
  },
  "evening-calm-guide": {
    heroTagline: "Decompression. Softer light. Slower evenings.",
    heroLede: "Rituals that help you transition out of the day.",
    quickAnswer: [
      "Gentle woods and familiar scents support emotional decompression after busy days.",
      "Pair incense with dim light, a short pause, and one quiet activity — not more stimulation.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    quickAnswerImageAlt: "Incense in warm evening light",
    toc: [
      { id: "best-scents", label: "Calming Scents", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Evening Atmosphere", icon: "atmosphere" },
      { id: "evening-rituals", label: "Wind-Down Rituals", icon: "rituals" },
      { id: "how-to-use-incense", label: "How to Use Incense", icon: "incense" },
      { id: "faq", label: "FAQ", icon: "faq" },
      { id: "related-articles", label: "Related Articles", icon: "articles" },
    ],
    scents: {
      title: "Calming Scents",
      subtitle:
        "Scents that feel familiar and soft — not sharp — help the nervous system settle.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Sandalwood",
          description: "Warm and grounding for overstimulated evenings.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Sandalwood →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Sandalwood incense materials",
          icon: "moon",
        },
        {
          title: "Soft Florals",
          description: "Light florals add calm without feeling sugary.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Soft Florals →",
          imageSrc: "/images/generated/mood-poster-calm-jasmine.webp",
          imageAlt: "Calm floral mood",
          icon: "sprout",
        },
        {
          title: "Agarwood",
          description: "Deep, resinous quiet for slow, reflective nights.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Agarwood →",
          imageSrc: "/images/generated/products/small-agarwood-box/hero.webp",
          imageAlt: "Agarwood box",
          icon: "tree",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Evening Atmosphere",
        description: "Lower stimulation in the room before you try to rest.",
        imageSrc: "/images/generated/mood-hero-still-life.webp",
        imageAlt: "Soft evening still life",
        listType: "checklist",
        items: [
          "Dim overhead lights",
          "Put screens out of reach",
          "Keep one soft texture nearby",
          "Choose a scent you already trust",
        ],
      },
      {
        id: "evening-rituals",
        title: "Wind-Down Rituals",
        description: "A short sequence signals the day is ending.",
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Evening incense ritual",
        listType: "numbered",
        items: [
          "Close the work tab",
          "Light incense",
          "Breathe slowly for one minute",
          "Stretch or make tea",
          "Lower the lights again",
          "Let the room settle",
        ],
      },
    ],
    faq: [
      {
        id: "calm-when",
        question: "When should I start an evening ritual?",
        answer: [
          {
            type: "paragraph",
            text: "Many people begin 30–60 minutes before bed — enough time to decompress without rushing.",
          },
        ],
      },
      {
        id: "calm-scent",
        question: "What if a scent feels distracting?",
        answer: [
          {
            type: "paragraph",
            text: "Switch to something softer or reduce burn time. Calm evenings favor familiarity over intensity.",
          },
        ],
      },
      {
        id: "calm-length",
        question: "How long should I burn incense?",
        answer: [
          {
            type: "paragraph",
            text: "Often 15–20 minutes is enough. You can extinguish early and let the aroma linger.",
          },
        ],
      },
      {
        id: "calm-mood",
        question: "Can incense replace other wind-down habits?",
        answer: [
          {
            type: "paragraph",
            text: "It works best as one cue alongside light, breath, or quiet activity — not as the only step.",
          },
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "good-incense-not-loud",
        title: "Good Incense That Stays in the Background",
        description: "",
      },
      {
        slug: "incense-patience",
        title: "Why Patience Matters in Evening Rituals",
        description: "",
      },
      {
        slug: "night-incense-ritual",
        title: "A Simple Night Incense Ritual",
        description: "",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Scents That Support Deeper Rest",
        description: "",
      },
    ],
    relatedArticlesViewAllHref: journalPath("calm-evenings"),
    saveShareSub: "Bookmark this guide to return to your evening wind-down rituals.",
  },
  "slow-living-ritual-guide": {
    heroTagline: "Writing. Tea. Reading. Quiet focus.",
    heroLede: "Desk rituals and creative solitude without noise.",
    quickAnswer: [
      "Light woods and tea notes support focus without pulling attention away from the page.",
      "A short incense session at your desk can mark the start of writing or reading time.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-incense-patience.webp",
    quickAnswerImageAlt: "Desk with tea and incense",
    toc: [
      { id: "best-scents", label: "Scents for Focus", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Desk Atmosphere", icon: "atmosphere" },
      { id: "evening-rituals", label: "Daily Rituals", icon: "rituals" },
      { id: "how-to-use-incense", label: "How to Use Incense", icon: "incense" },
      { id: "faq", label: "FAQ", icon: "faq" },
      { id: "related-articles", label: "Related Articles", icon: "articles" },
    ],
    scents: {
      title: "Scents for Focus",
      subtitle:
        "Subtle fragrance marks the start of quiet work — without competing with your thoughts.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Tea Notes",
          description: "Clean and steady — good for morning pages and study.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Tea Notes →",
          imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
          imageAlt: "Tea and desk light",
          icon: "sprout",
        },
        {
          title: "Light Woods",
          description: "Grounding scent that stays in the background.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Light Woods →",
          imageSrc: "/images/generated/essay-incense-ink-silence.webp",
          imageAlt: "Ink and incense still life",
          icon: "tree",
        },
        {
          title: "Soft Resins",
          description: "Warm depth for longer reading or reflection sessions.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Soft Resins →",
          imageSrc: "/images/generated/essay-why-scholars-burned-incense.webp",
          imageAlt: "Scholarly desk ritual",
          icon: "moon",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Desk Atmosphere",
        description: "A calm desk makes focus feel easier to enter.",
        imageSrc: "/images/generated/essay-incense-patience.webp",
        imageAlt: "Writing desk with incense",
        listType: "checklist",
        items: [
          "Clear one small area of clutter",
          "Keep the holder stable and away from paper",
          "Use natural light when you can",
          "Choose a scent you associate with work",
        ],
      },
      {
        id: "evening-rituals",
        title: "Daily Rituals",
        description: "Repeatable cues help quiet routines stick.",
        imageSrc: "/images/generated/products/wood-tray/atmosphere.webp",
        imageAlt: "Wood tray with incense tools",
        listType: "numbered",
        items: [
          "Boil water or open a book",
          "Light incense",
          "Set a gentle time limit",
          "Write or read without tabs",
          "Extinguish when the session ends",
          "Close with one line of reflection",
        ],
      },
    ],
    faq: [
      {
        id: "slow-when",
        question: "When is the best time for a desk ritual?",
        answer: [
          {
            type: "paragraph",
            text: "Morning or early evening works for many people — whenever you can protect 20–30 quiet minutes.",
          },
        ],
      },
      {
        id: "slow-writing",
        question: "Does incense help with writing?",
        answer: [
          {
            type: "paragraph",
            text: "It can mark the start of a session. Familiar, soft scents work better than strong novelty.",
          },
        ],
      },
      {
        id: "slow-length",
        question: "How long should I burn incense at a desk?",
        answer: [
          {
            type: "paragraph",
            text: "Often one short stick or the first third of a stick is enough for a focused block.",
          },
        ],
      },
      {
        id: "slow-scent",
        question: "What scents are too strong for focus?",
        answer: [
          {
            type: "paragraph",
            text: "Heavy smoke or sweet florals can pull attention. Tea, soft woods, and light resins are common choices.",
          },
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "why-scholars-burned-incense",
        title: "Why Scholars Burned Incense",
        description: "",
      },
      {
        slug: "incense-ink-silence",
        title: "Incense, Ink, and Silence",
        description: "",
      },
      {
        slug: "incense-patience",
        title: "Incense and Patience",
        description: "",
      },
      {
        slug: "good-incense-not-loud",
        title: "Quiet Scents for Everyday Rituals",
        description: "",
      },
    ],
    relatedArticlesViewAllHref: journalPath("quiet-routines"),
    saveShareSub: "Bookmark this guide for desk rituals and quiet focus anytime.",
  },
  "incense-care-guide": {
    heroTagline: "Safety. Ventilation. Everyday care.",
    heroLede: "Clear guidance for low-smoke incense at home.",
    quickAnswer: [
      "Low-smoke incense, shorter burn times, and good ventilation are the basics for indoor use.",
      "Pets and small rooms need softer scents, stable holders, and never leaving incense unattended.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    quickAnswerImageAlt: "Gentle incense smoke in a ventilated room",
    toc: [
      { id: "best-scents", label: "Low-Smoke Choices", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Safe Setup", icon: "atmosphere" },
      { id: "evening-rituals", label: "Care Steps", icon: "rituals" },
      { id: "how-to-use-incense", label: "How to Use Incense", icon: "incense" },
      { id: "faq", label: "FAQ", icon: "faq" },
      { id: "related-articles", label: "Related Articles", icon: "articles" },
    ],
    scents: {
      title: "Low-Smoke Choices",
      subtitle:
        "Formulas labeled low-smoke are designed to keep indoor air more comfortable during regular use.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Low-Smoke Sticks",
          description: "Less visible smoke — good for apartments and shared spaces.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Low-Smoke →",
          imageSrc: "/images/generated/products/paper-incense-sleeve/hero.webp",
          imageAlt: "Incense sticks in paper sleeve",
          icon: "moon",
        },
        {
          title: "Soft Woods",
          description: "Gentle profiles that do not dominate a room.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Soft Woods →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Wood incense materials",
          icon: "tree",
        },
        {
          title: "Light Florals",
          description: "Airy scents for shorter, ventilated sessions.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Light Florals →",
          imageSrc: "/images/generated/mood-poster-calm-jasmine.webp",
          imageAlt: "Soft floral incense mood",
          icon: "sprout",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Safe Setup",
        description: "A stable, ventilated setup matters more than scent alone.",
        imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.webp",
        imageAlt: "Incense holder on a stable surface",
        listType: "checklist",
        items: [
          "Use a heat-safe holder on a stable surface",
          "Keep away from curtains, paper, and pets",
          "Ventilate before and after burning",
          "Never leave incense unattended",
        ],
      },
      {
        id: "evening-rituals",
        title: "Care Steps",
        description: "Simple habits keep incense pleasant and safe indoors.",
        imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.webp",
        imageAlt: "Incense storage and care",
        listType: "numbered",
        items: [
          "Check the holder is cool before relighting",
          "Trim or tap ash into a safe dish",
          "Store sticks dry and sealed",
          "Start with shorter burn times",
          "Watch pets for sensitivity",
          "Extinguish fully when finished",
        ],
      },
    ],
    faq: [
      {
        id: "care-pets",
        question: "Is incense safe around pets?",
        answer: [
          {
            type: "paragraph",
            text: "Often yes in moderation with ventilation. Pets may be more sensitive — use low-smoke options and shorter sessions.",
          },
        ],
      },
      {
        id: "care-low-smoke",
        question: "What does low-smoke incense mean?",
        answer: [
          {
            type: "paragraph",
            text: "It usually produces less visible smoke while burning — helpful in bedrooms and small apartments.",
          },
        ],
      },
      {
        id: "care-vent",
        question: "Do I need to open a window?",
        answer: [
          {
            type: "paragraph",
            text: "Fresh air helps, especially in small rooms. Even a few minutes of ventilation before and after makes a difference.",
          },
        ],
      },
      {
        id: "care-time",
        question: "How long should I burn incense indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Many people use 15–30 minutes for everyday sessions. You can extinguish early if the room feels heavy.",
          },
        ],
      },
    ],
    relatedArticles: [
      {
        slug: "is-incense-safe-for-pets",
        title: "Is Incense Safe for Pets?",
        description: "",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        description: "",
      },
      {
        slug: "what-is-agarwood",
        title: "What Is Agarwood?",
        description: "",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense for Everyday Indoor Use",
        description: "",
      },
    ],
    relatedArticlesViewAllHref: journalPath("guides-care"),
    saveShareSub: "Bookmark this guide for incense care and safety tips anytime.",
  },
};

export function getEvergreenGuidePageContent(
  slug: EvergreenGuideSlug,
): EvergreenGuidePageContent {
  return evergreenGuidePageContent[slug];
}