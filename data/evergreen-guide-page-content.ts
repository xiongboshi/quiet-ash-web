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
  quickAnswerTitle?: string;
  quickAnswer: readonly string[];
  quickAnswerImageSrc: string;
  quickAnswerImageAlt: string;
  tocHeading?: string;
  toc: readonly GuidePageTocItem[];
  closingThoughts?: readonly string[];
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
    heroTagline:
      "Softer scent, lower smoke, and calmer indoor living for compact spaces.",
    heroLede:
      "Small homes often feel fragrance more intensely than larger spaces. This guide explores how to use incense comfortably in apartments, bedrooms, and modern indoor environments.",
    quickAnswerTitle: "Introduction",
    quickAnswer: [
      "Not all incense works well in smaller homes.",
      "In apartments and bedrooms, heavy smoke or overly strong fragrances can quickly feel overwhelming. Many people now prefer cleaner-burning incense with softer scent profiles that create atmosphere without filling the room too aggressively.",
      "A lighter approach usually feels more comfortable for daily indoor living.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-night-incense-ritual.webp",
    quickAnswerImageAlt: "Incense with light smoke in a bedroom",
    tocHeading: "Quick Navigation",
    toc: [
      { id: "best-types", label: "Best incense for apartments", icon: "scents" },
      { id: "best-types", label: "Low-smoke incense", icon: "incense" },
      { id: "bedroom-atmosphere", label: "Bedroom fragrance tips", icon: "atmosphere" },
      { id: "common-problems", label: "Ventilation and airflow", icon: "rituals" },
      { id: "best-scents", label: "Softer scent profiles", icon: "scents" },
      { id: "common-problems", label: "Common mistakes in small spaces", icon: "faq" },
    ],
    scents: {
      title: "Recommended Scents For Smaller Homes",
      subtitle:
        "White tea · Sandalwood · Cedarwood · Linen-inspired blends · Light citrus · Gentle florals",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "White Tea",
          description: "Airy and clean — often feels balanced in compact rooms.",
          href: SHOP_INDEX,
          ctaLabel: "Explore White Tea →",
          imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
          imageAlt: "Tea cup and soft light",
          icon: "sprout",
        },
        {
          title: "Sandalwood",
          description: "Soft woods that stay present without filling the room.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Sandalwood →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Wood incense materials",
          icon: "tree",
        },
        {
          title: "Light Citrus",
          description: "Bright but restrained — good for everyday apartments.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Light Citrus →",
          imageSrc: "/images/generated/mood-poster-energy-citrus.webp",
          imageAlt: "Light citrus mood still life",
          icon: "moon",
        },
      ],
    },
    features: [
      {
        id: "best-types",
        title: "Best Types Of Incense For Apartments",
        description: "Cleaner-burning, softer profiles usually feel more comfortable indoors.",
        imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
        imageAlt: "Quiet room with incense",
        listType: "numbered",
        items: [
          "Low-Smoke Incense — Cleaner-burning incense is usually easier to enjoy in enclosed indoor spaces.",
          "Softer Fragrance Profiles — Tea scents, soft woods, and light florals often feel more balanced in compact rooms.",
          "Shorter Burn Sessions — Smaller spaces usually need less fragrance than larger open homes.",
        ],
      },
      {
        id: "common-problems",
        title: "Common Problems In Small Spaces",
        description: "Heavy smoke and poor airflow are the most common comfort issues indoors.",
        imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.webp",
        imageAlt: "Incense box on a shelf",
        listType: "checklist",
        items: [
          "Too Much Smoke — Heavy smoke builds up quickly indoors with limited ventilation.",
          "Fragrance Fatigue — Overly strong scent can make a room feel crowded over time.",
          "Poor Airflow — Without ventilation, incense becomes much more noticeable.",
        ],
      },
    ],
    faq: [
      {
        id: "apt-good",
        question: "Is incense good for apartments?",
        answer: [
          {
            type: "paragraph",
            text: "Many people enjoy incense in apartments when using softer scents and lower smoke levels.",
          },
        ],
      },
      {
        id: "apt-lighter",
        question: "What incense smells feel lighter indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Tea scents, soft woods, and clean linen-inspired fragrances often feel more balanced indoors.",
          },
        ],
      },
      {
        id: "apt-strong",
        question: "Why does incense feel too strong in small rooms?",
        answer: [
          {
            type: "paragraph",
            text: "Limited airflow and enclosed spaces cause smoke and fragrance to build up more quickly.",
          },
        ],
      },
    ],
    closingThoughts: [
      "In smaller homes, subtle fragrance often feels better than intense fragrance.",
      "Cleaner-burning incense and softer scent profiles usually create a calmer and more comfortable indoor atmosphere.",
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
    heroTagline:
      "Softer evenings, slower rituals, and calmer atmosphere after overstimulating days.",
    heroLede:
      "This guide explores how lighting, fragrance, and simple routines can help evenings feel quieter and more balanced.",
    quickAnswerTitle: "Introduction",
    quickAnswer: [
      "Many people today feel overstimulated by fast-paced daily routines and constant digital noise.",
      "Small evening rituals can help create a softer transition into rest.",
      "Fragrance, lighting, silence, and slower atmosphere often work together to make evenings feel calmer.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    quickAnswerImageAlt: "Incense in warm evening light",
    tocHeading: "Quick Navigation",
    toc: [
      { id: "evening-rituals", label: "Evening rituals", icon: "rituals" },
      { id: "best-scents", label: "Relaxing fragrance", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Bedroom atmosphere", icon: "atmosphere" },
      { id: "evening-rituals", label: "Wind-down routines", icon: "rituals" },
      { id: "bedroom-atmosphere", label: "Softer lighting", icon: "atmosphere" },
      { id: "bedroom-atmosphere", label: "Calm indoor spaces", icon: "incense" },
    ],
    scents: {
      title: "Recommended Evening Scents",
      subtitle:
        "Sandalwood · White tea · Cedarwood · Lavender · Soft amber blends",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Sandalwood",
          description: "Warm and grounding after overstimulating days.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Sandalwood →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Sandalwood incense materials",
          icon: "moon",
        },
        {
          title: "White Tea",
          description: "Clean and subtle — often feels relaxing at night.",
          href: SHOP_INDEX,
          ctaLabel: "Explore White Tea →",
          imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
          imageAlt: "Tea cup in soft evening light",
          icon: "sprout",
        },
        {
          title: "Lavender",
          description: "Gentle florals that support slower evening transitions.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Lavender →",
          imageSrc: "/images/generated/mood-poster-calm-jasmine.webp",
          imageAlt: "Calm floral mood",
          icon: "tree",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Creating A Calmer Evening Atmosphere",
        description: "Lighting, scent, and quiet often work together at night.",
        imageSrc: "/images/generated/mood-hero-still-life.webp",
        imageAlt: "Soft evening still life",
        listType: "checklist",
        items: [
          "Softer Lighting — Warm lighting helps reduce harsh stimulation at night.",
          "Gentle Fragrance — Subtle scent often feels more relaxing than strong fragrance indoors.",
          "Quiet Space — Removing noise and visual clutter changes the feeling of a room significantly.",
        ],
      },
      {
        id: "evening-rituals",
        title: "Wind-Down Routines",
        description: "Small repeated habits help evenings feel slower and more intentional.",
        imageSrc: "/images/generated/essay-night-incense-ritual.webp",
        imageAlt: "Evening incense ritual",
        listType: "numbered",
        items: [
          "Dim the lights and close busy tabs",
          "Light incense for a short session",
          "Make tea or stretch briefly",
          "Let the room settle before sleep",
        ],
      },
    ],
    faq: [
      {
        id: "calm-scents-night",
        question: "What scents feel calming at night?",
        answer: [
          {
            type: "paragraph",
            text: "Soft woods, tea scents, and gentle florals are commonly preferred.",
          },
        ],
      },
      {
        id: "calm-routine",
        question: "Is incense good for evening routines?",
        answer: [
          {
            type: "paragraph",
            text: "Many people use fragrance as part of slower nighttime rituals.",
          },
        ],
      },
      {
        id: "calm-soft",
        question: "Why do softer scents feel more relaxing?",
        answer: [
          {
            type: "paragraph",
            text: "Subtle fragrance often feels less overstimulating indoors.",
          },
        ],
      },
    ],
    closingThoughts: [
      "A calmer evening atmosphere often comes from simplicity: softer lighting, lower stimulation, gentle fragrance, and slower routines.",
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
    heroTagline:
      "Gentle routines for reading, tea, writing, reflection, and slower living.",
    heroLede:
      "This guide explores simple daily rituals that help indoor spaces feel quieter, calmer, and more intentional.",
    quickAnswerTitle: "Introduction",
    quickAnswer: [
      "Quiet rituals are often less about productivity and more about atmosphere.",
      "A slower morning, tea preparation, reading, or writing with soft fragrance can help a home feel calmer and less overstimulating.",
      "Many people today are seeking softer daily experiences instead of constant intensity.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-incense-patience.webp",
    quickAnswerImageAlt: "Desk with tea and incense",
    tocHeading: "Quick Navigation",
    toc: [
      { id: "evening-rituals", label: "Morning rituals", icon: "rituals" },
      { id: "best-scents", label: "Tea and incense", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Writing atmosphere", icon: "atmosphere" },
      { id: "best-scents", label: "Focus and calm", icon: "incense" },
      { id: "evening-rituals", label: "Slow living", icon: "rituals" },
      { id: "bedroom-atmosphere", label: "Quiet home habits", icon: "faq" },
    ],
    scents: {
      title: "Recommended Fragrance Styles",
      subtitle:
        "Soft woods · Tea-inspired scents · Linen blends · Gentle incense smoke · Earthy minimalist fragrances",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Soft Woods",
          description: "Grounding scent that stays in the background while you read or write.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Soft Woods →",
          imageSrc: "/images/generated/essay-incense-ink-silence.webp",
          imageAlt: "Ink and incense still life",
          icon: "tree",
        },
        {
          title: "Tea-Inspired Scents",
          description: "Clean and steady — good for morning pages and quiet tea rituals.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Tea Scents →",
          imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
          imageAlt: "Tea and desk light",
          icon: "sprout",
        },
        {
          title: "Linen Blends",
          description: "Airy, minimalist fragrance for calm corners at home.",
          href: SHOP_INDEX,
          ctaLabel: "Explore Linen Blends →",
          imageSrc: "/images/generated/products/linen-cloth/atmosphere.webp",
          imageAlt: "Linen and soft daylight",
          icon: "moon",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Small Rituals That Change Atmosphere",
        description: "Simple habits can make a room feel quieter without much effort.",
        imageSrc: "/images/generated/essay-incense-patience.webp",
        imageAlt: "Writing desk with incense",
        listType: "checklist",
        items: [
          "Tea Rituals — Simple tea routines create natural pauses during the day.",
          "Reading Corners — Lighting, scent, and silence can completely change a reading space.",
          "Writing Atmosphere — Many people prefer subtle fragrance while journaling or focusing quietly.",
        ],
      },
      {
        id: "evening-rituals",
        title: "Quiet Home Habits",
        description: "Repeatable cues help slower routines feel natural over time.",
        imageSrc: "/images/generated/products/wood-tray/atmosphere.webp",
        imageAlt: "Wood tray with incense tools",
        listType: "numbered",
        items: [
          "Choose one soft scent for the room",
          "Light incense for a short session",
          "Read, write, or make tea without multitasking",
          "Close with a few minutes of silence",
        ],
      },
    ],
    faq: [
      {
        id: "slow-focus",
        question: "What incense is good for focus?",
        answer: [
          {
            type: "paragraph",
            text: "Many people prefer subtle wood or tea-inspired fragrances.",
          },
        ],
      },
      {
        id: "slow-calming",
        question: "Why do rituals feel calming?",
        answer: [
          {
            type: "paragraph",
            text: "Rituals create slower transitions and reduce overstimulation.",
          },
        ],
      },
      {
        id: "slow-quieter",
        question: "How do I make my home feel quieter?",
        answer: [
          {
            type: "paragraph",
            text: "Lighting, scent, and removing visual clutter often help significantly.",
          },
        ],
      },
    ],
    closingThoughts: [
      "Quiet routines are usually built from small repeated moments: soft lighting, gentle fragrance, silence, tea, reading, and reflection.",
      "These small habits can gradually shape a calmer indoor atmosphere.",
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
    heroTagline:
      "Practical guidance for safer, softer, and more comfortable incense use indoors.",
    heroLede:
      "This guide covers the most common questions about indoor fragrance, low-smoke incense, ventilation, pets, and everyday comfort.",
    quickAnswerTitle: "Introduction",
    quickAnswer: [
      "Modern incense use is changing.",
      "Many people today prefer lighter fragrance, lower smoke, and cleaner indoor atmosphere compared to traditional heavy incense styles.",
      "This guide explains practical ways to use incense more comfortably at home.",
    ],
    quickAnswerImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    quickAnswerImageAlt: "Gentle incense smoke in a ventilated room",
    tocHeading: "Quick Navigation",
    toc: [
      { id: "best-scents", label: "Indoor incense tips", icon: "incense" },
      { id: "bedroom-atmosphere", label: "Pets and incense", icon: "atmosphere" },
      { id: "best-scents", label: "Low-smoke incense", icon: "scents" },
      { id: "bedroom-atmosphere", label: "Bedroom use", icon: "atmosphere" },
      { id: "evening-rituals", label: "Ventilation", icon: "rituals" },
      { id: "evening-rituals", label: "Burn duration", icon: "rituals" },
    ],
    scents: {
      title: "Indoor Incense Basics",
      subtitle:
        "Ventilation, lower smoke, and shorter sessions are the foundation of comfortable everyday use.",
      viewAllHref: SHOP_INDEX,
      viewAllLabel: "View all scents →",
      cards: [
        {
          title: "Ventilation Matters",
          description: "Fresh airflow helps prevent smoke buildup indoors.",
          href: SHOP_INDEX,
          ctaLabel: "Shop low-smoke incense →",
          imageSrc: "/images/generated/products/paper-incense-sleeve/hero.webp",
          imageAlt: "Incense sticks in paper sleeve",
          icon: "moon",
        },
        {
          title: "Less Smoke Often Feels Better",
          description: "Cleaner-burning incense usually creates a softer atmosphere.",
          href: SHOP_INDEX,
          ctaLabel: "Explore low-smoke →",
          imageSrc: "/images/generated/essay-what-is-agarwood.webp",
          imageAlt: "Wood incense materials",
          icon: "tree",
        },
        {
          title: "Short Sessions Work Well",
          description: "You do not always need long burn sessions for fragrance to feel noticeable.",
          href: SHOP_INDEX,
          ctaLabel: "View care essentials →",
          imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.webp",
          imageAlt: "Incense holder on a stable surface",
          icon: "sprout",
        },
      ],
    },
    features: [
      {
        id: "bedroom-atmosphere",
        title: "Using Incense Around Pets",
        description:
          "Cats and dogs often have stronger scent sensitivity than humans. Good airflow, moderation, and lower smoke levels are especially important in homes with pets.",
        imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.webp",
        imageAlt: "Incense holder on a stable surface",
        listType: "checklist",
        items: [
          "Ventilate the room before and after burning",
          "Choose low-smoke incense for shared spaces",
          "Keep sessions short and watch for irritation",
          "Let pets leave the room freely if they prefer",
        ],
      },
      {
        id: "evening-rituals",
        title: "Bedroom Incense Tips",
        description:
          "Bedrooms are smaller and more enclosed than larger living spaces. Softer fragrance and shorter sessions often feel more comfortable before sleep.",
        imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.webp",
        imageAlt: "Incense storage and care",
        listType: "numbered",
        items: [
          "Burn for 15–30 minutes, not all night",
          "Use a stable holder away from bedding",
          "Open a window or door slightly when possible",
          "Extinguish early if the room feels heavy",
        ],
      },
    ],
    faq: [
      {
        id: "care-indoors",
        question: "Is incense bad indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Ventilation and moderation are important for indoor comfort.",
          },
        ],
      },
      {
        id: "care-low-smoke-def",
        question: "What is low-smoke incense?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is designed to produce a softer and cleaner indoor fragrance experience.",
          },
        ],
      },
      {
        id: "care-pets-safe",
        question: "Is incense safe around pets?",
        answer: [
          {
            type: "paragraph",
            text: "Many pet owners prefer lower smoke levels and softer fragrances with good airflow.",
          },
        ],
      },
    ],
    closingThoughts: [
      "The most comfortable indoor incense experience usually comes from softer scent profiles, lower smoke levels, better airflow, and shorter burn sessions.",
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