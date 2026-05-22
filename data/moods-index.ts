import {
  JOURNAL_INDEX,
  MOODS_INDEX,
  SHOP_INDEX,
  journalPath,
  moodPath,
} from "@/lib/site-paths";

export const moodsIndexHero = {
  eyebrow: "Find Your Moment",
  title: "Shop by Mood",
  description:
    "Scents for every state of mind. From slow mornings to late nights, find the mood that matches your moment.",
  cta: {
    label: "How scents support your mood",
    href: "#shop-by-mood",
  },
  imageSrc: "/images/generated/mood-hero-still-life.png",
  imageAlt: "Quiet Ash mood hero — incense still life in soft natural light",
} as const;

export type MoodsIndexCardIconId =
  | "sleep"
  | "calm"
  | "focus"
  | "energy"
  | "rain"
  | "ritual";

export type MoodsIndexCard = {
  icon: MoodsIndexCardIconId;
  title: string;
  description: string;
  tags: readonly string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
};

/** INS shop-by-mood row — 6 equal cards (Sleep → Ritual). */
export const moodsIndexCards: MoodsIndexCard[] = [
  {
    icon: "sleep",
    title: "Sleep",
    description: "Calming scents for deeper nights",
    tags: ["Bedroom", "Night Routine", "Deep Sleep"],
    imageSrc: "/images/generated/mood-poster-sleep-white-blossom.png",
    imageAlt: "Sleep mood — soft linen and white blossom",
    href: moodPath("evening-room-ritual"),
  },
  {
    icon: "calm",
    title: "Calm",
    description: "Relaxing scents for slow evenings",
    tags: ["Relaxation", "Stress Relief", "Slow Living"],
    imageSrc: "/images/generated/mood-poster-calm-jasmine.png",
    imageAlt: "Calm mood — jasmine branches in soft light",
    href: moodPath("tea-after-rain"),
  },
  {
    icon: "focus",
    title: "Focus",
    description: "Scents for study & deep work",
    tags: ["Study", "Productivity", "Focus"],
    imageSrc: "/images/generated/mood-poster-focus-lavender.png",
    imageAlt: "Focus mood — desk and lavender still life",
    href: moodPath("quiet-desk-ritual"),
  },
  {
    icon: "energy",
    title: "Energy",
    description: "Fresh scents to start your day",
    tags: ["Morning", "Citrus", "Motivation"],
    imageSrc: "/images/generated/mood-poster-energy-citrus.png",
    imageAlt: "Energy mood — citrus in bright morning light",
    href: moodPath("incense-before-writing"),
  },
  {
    icon: "rain",
    title: "Rain",
    description: "Cozy scents for rainy days",
    tags: ["Rainy Day", "Cozy", "Comfort"],
    imageSrc: "/images/generated/mood-poster-rainy-day.png",
    imageAlt: "Rain mood — rainy window and cozy interior",
    href: moodPath("tea-after-rain"),
  },
  {
    icon: "ritual",
    title: "Ritual",
    description: "Scents for mindful rituals & self-care",
    tags: ["Ritual", "Grounding", "Sacred"],
    imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.png",
    imageAlt: "Ritual mood — hands with incense in warm light",
    href: moodPath("evening-room-ritual"),
  },
];

export const moodsIndexMoodSection = {
  eyebrow: "Shop By Mood",
  title: "Emotional Atmospheres",
  description:
    "Discover scents for sleep, rain, focus, slow mornings and calming evening rituals through atmospheric incense and apartment-inspired living.",
} as const;

export type MoodsIndexDayScentCard = {
  time: string;
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const moodsIndexDayInScent = {
  title: "A Day in Scent",
  subtitle: "Every moment has its scent.",
  cards: [
    {
      time: "07:30",
      title: "Morning Light",
      tagline: "Refresh. Awaken.",
      imageSrc: "/images/generated/products/linen-cloth/hero.png",
      imageAlt: "Morning light through curtains with tea and branches",
      href: moodPath("incense-before-writing"),
    },
    {
      time: "10:30",
      title: "Focus Time",
      tagline: "Concentrate. Create.",
      imageSrc: "/images/generated/products/paper-incense-sleeve/hero.png",
      imageAlt: "Desk with books and incense for focus",
      href: moodPath("quiet-desk-ritual"),
    },
    {
      time: "15:30",
      title: "Rainy Afternoon",
      tagline: "Slow down. Breathe.",
      imageSrc: "/images/generated/mood-poster-rainy-day.png",
      imageAlt: "Rainy window with lemon water and quiet light",
      href: moodPath("tea-after-rain"),
    },
    {
      time: "19:00",
      title: "Evening Ritual",
      tagline: "Unwind. Reset.",
      imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.png",
      imageAlt: "Evening ritual with incense and warm ceramics",
      href: moodPath("evening-room-ritual"),
    },
    {
      time: "22:30",
      title: "Night Quiet",
      tagline: "Let go. Rest.",
      imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.png",
      imageAlt: "Night bedroom lamp and quiet incense moment",
      href: moodPath("evening-room-ritual"),
    },
  ] satisfies MoodsIndexDayScentCard[],
} as const;

export const moodsIndexPopularSearches = {
  label: "Popular Mood Searches",
  pills: [
    { label: "Best incense for sleep", href: SHOP_INDEX },
    { label: "Calming scents for anxiety", href: SHOP_INDEX },
    { label: "Meditation incense", href: SHOP_INDEX },
    { label: "Evening ritual scents", href: moodPath("evening-room-ritual") },
    { label: "Focus incense for study", href: moodPath("quiet-desk-ritual") },
    { label: "Cozy room fragrance", href: SHOP_INDEX },
  ],
} as const;

export const moodsIndexRitualBanner = {
  imageSrc: "/images/generated/mood-index-hero-shop-by-mood.png",
  imageAlt: "Evening ritual — incense on a wooden table in warm sunlight",
  title: "Create your evening ritual",
  description:
    "Slow moments. Quiet scents. A ritual that brings you back to yourself.",
  cta: { label: "Explore Rituals", href: MOODS_INDEX },
  steps: ["Shower", "Warm Tea", "Incense", "Reading", "Deep Rest"] as const,
} as const;

export type MoodsIndexJournalArticle = {
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const moodsIndexJournal = {
  title: "From the Journal",
  viewAllLabel: "View All Articles",
  articles: [
    {
      title: "Best Incense For Sleep: A Complete Guide",
      description:
        "Discover scents that help you unwind, sleep deeper and wake up refreshed.",
      category: "GUIDES",
      readMinutes: 6,
      imageSrc: "/images/generated/essay-night-incense-ritual.png",
      imageAlt: "Bedroom calm with soft linens and incense",
      href: journalPath("night-incense-ritual"),
    },
    {
      title: "How To Create A Calming Evening Ritual",
      description:
        "Simple steps to slow down, relax and reset your mind before bed.",
      category: "RITUALS",
      readMinutes: 5,
      imageSrc: "/images/generated/essay-why-scholars-burned-incense.png",
      imageAlt: "Tea and branches by a sunlit window",
      href: journalPath("why-scholars-burned-incense"),
    },
    {
      title: "The Power Of Scent On Your Mood",
      description:
        "How fragrance affects your nervous system and emotional well-being.",
      category: "WELLNESS",
      readMinutes: 7,
      imageSrc: "/images/generated/essay-good-incense-not-loud.png",
      imageAlt: "Incense burning in a bowl on a wooden surface",
      href: journalPath("good-incense-not-loud"),
    },
    {
      title: "Rainy Day Home Atmosphere: Scents That Comfort",
      description:
        "Warm, cozy aromas that turn rainy days into your favorite days.",
      category: "LIFESTYLE",
      readMinutes: 6,
      imageSrc: "/images/generated/essay-forgotten-incense-culture.png",
      imageAlt: "Cozy corner with soft light and calm atmosphere",
      href: journalPath("forgotten-incense-culture"),
    },
  ] satisfies MoodsIndexJournalArticle[],
} as const;

export type MoodsIndexValueIconId =
  | "natural"
  | "handcrafted"
  | "sustainable"
  | "shipping";

export type MoodsIndexValueItem = {
  id: string;
  icon: MoodsIndexValueIconId;
  title: string;
  description: string;
};

export const moodsIndexValueBar = [
  {
    id: "natural",
    icon: "natural",
    title: "Natural Ingredients",
    description: "Clean. Safe. Non-toxic.",
  },
  {
    id: "handcrafted",
    icon: "handcrafted",
    title: "Handcrafted",
    description: "In small batches.",
  },
  {
    id: "sustainable",
    icon: "sustainable",
    title: "Sustainable",
    description: "Thoughtful materials.",
  },
  {
    id: "shipping",
    icon: "shipping",
    title: "Worldwide Shipping",
    description: "Free shipping over $80",
  },
] satisfies MoodsIndexValueItem[];

export const moodsIndexNav = [
  { label: "Shop", href: SHOP_INDEX },
  { label: "Moods", href: MOODS_INDEX },
  { label: "Journal", href: JOURNAL_INDEX },
  { label: "About", href: "/about" },
] as const;
