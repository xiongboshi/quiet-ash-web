import type { JournalFaqBlock } from "@/types/journal-faq";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { guidePath, journalPath, moodPath } from "@/lib/site-paths";

export type TopicPageSearchPill = {
  label: string;
  href: string;
};

export type TopicPageRelatedMood = {
  label: string;
  href: string;
};

export type TopicPageFeaturedArticle = {
  slug: string;
  title: string;
  description: string;
  readMinutes?: number;
};

export type TopicPageFaqItem = {
  id: string;
  question: string;
  answer: readonly JournalFaqBlock[];
};

export type TopicPageFeaturedGuide = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export type TopicPageContent = {
  heroTagline: string;
  heroLede: string;
  popularSearches: readonly TopicPageSearchPill[];
  featuredGuide: TopicPageFeaturedGuide;
  featuredArticles: readonly TopicPageFeaturedArticle[];
  peopleAlsoAsk: readonly TopicPageFaqItem[];
  relatedMoods: readonly TopicPageRelatedMood[];
  saveShareSub: string;
};

const sleepFaqAnswers = {
  safeWhileSleeping: [
    {
      type: "paragraph" as const,
      text: "Short, well-ventilated incense sessions before sleep are usually more comfortable than burning incense all night. Choose low-smoke options and keep the stick away from bedding.",
    },
  ],
  deepSleepScents: [
    {
      type: "paragraph" as const,
      text: "Sandalwood, lavender, and soft woods are popular for rest. Lighter tea and floral scents can feel airy without overwhelming a bedroom.",
    },
  ],
  howLongBeforeBed: [
    {
      type: "paragraph" as const,
      text: "Many people burn incense for 15–30 minutes before bed, then let the room settle. You do not need a full stick every night in a small bedroom.",
    },
  ],
  anxiety: [
    {
      type: "paragraph" as const,
      text: "Gentle, familiar scents can support a slower evening routine. If a fragrance feels sharp or distracting, switch to something softer or reduce burn time.",
    },
  ],
};

export const journalTopicPageContent: Record<JournalTopicHubId, TopicPageContent> = {
  "better-sleep": {
    heroTagline: "Explore scents, rituals, and atmosphere tips",
    heroLede: "to help you fall asleep faster and wake up refreshed.",
    popularSearches: [
      { label: "best incense for sleep", href: journalPath("best-incense-for-sleep") },
      { label: "bedroom fragrance ideas", href: journalPath("best-incense-for-sleep") },
      { label: "calming evening rituals", href: guidePath("sleep-guide") },
    ],
    featuredGuide: {
      href: guidePath("sleep-guide"),
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Candle and incense on a bedside table in soft evening light",
      title: "The Quiet Ash Sleep Guide",
      description:
        "Everything you need for deeper, calmer nights. Scents, atmosphere, and simple rituals that work.",
    },
    featuredArticles: [
      {
        slug: "best-incense-for-sleep",
        title: "Best Incense for Sleep and Relaxing Evenings",
        description:
          "Discover the best incense scents for sleep, calming evenings, and nighttime relaxation with softer fragrances and low-smoke incense.",
        readMinutes: 8,
      },
    ],
    peopleAlsoAsk: [
      {
        id: "sleep-safe",
        question: "Is incense safe to use while sleeping?",
        answer: sleepFaqAnswers.safeWhileSleeping,
      },
      {
        id: "sleep-scents",
        question: "What scents are best for deep sleep?",
        answer: sleepFaqAnswers.deepSleepScents,
      },
      {
        id: "sleep-timing",
        question: "How long before bed should I use incense?",
        answer: sleepFaqAnswers.howLongBeforeBed,
      },
      {
        id: "sleep-anxiety",
        question: "Can incense help with anxiety or overthinking?",
        answer: sleepFaqAnswers.anxiety,
      },
    ],
    relatedMoods: [
      { label: "Deep Rest", href: moodPath("evening-room-ritual") },
      { label: "Calm Evenings", href: journalPath("calm-evenings") },
      { label: "Cozy Home", href: journalPath("cozy-home") },
    ],
    saveShareSub: "Bookmark this topic to revisit sleep tips and evening rituals anytime.",
  },
  "small-space-living": {
    heroTagline:
      "Low-smoke fragrance and softer atmosphere for apartments, studios, and quieter indoor spaces.",
    heroLede:
      "Small homes often feel fragrance more intensely than larger spaces. This guide explores how to use incense comfortably in apartments, bedrooms, and modern indoor environments.",
    popularSearches: [
      {
        label: "best incense for apartments",
        href: journalPath("best-incense-for-small-apartments"),
      },
      { label: "low smoke incense", href: guidePath("incense-care-guide") },
      { label: "bedroom fragrance ideas", href: journalPath("best-incense-for-sleep") },
    ],
    featuredGuide: {
      href: guidePath("small-apartment-fragrance-guide"),
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Subtle incense smoke in a small bedroom",
      title: "The Small Apartment Fragrance Guide",
      description:
        "Simple ways to use scent comfortably in compact indoor spaces.",
    },
    featuredArticles: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments and Bedrooms",
        description:
          "Low-smoke incense and softer scent profiles for apartments, bedrooms, and smaller indoor spaces.",
        readMinutes: 7,
      },
    ],
    peopleAlsoAsk: [
      {
        id: "small-safe",
        question: "Is incense safe in small apartments?",
        answer: [
          {
            type: "paragraph",
            text: "Yes, when you choose low-smoke incense, ventilate the room, and keep burn sessions short. Lighter scents usually feel more comfortable in compact spaces than heavy smoke buildup.",
          },
        ],
      },
      {
        id: "small-lighter",
        question: "What incense smells feel lighter indoors?",
        answer: [
          {
            type: "paragraph",
            text: "White tea, light citrus, soft woods, and gentle florals often feel easier in apartments. They stay present without filling the whole room.",
          },
        ],
      },
      {
        id: "small-strong",
        question: "Why does incense feel too strong in bedrooms?",
        answer: [
          {
            type: "paragraph",
            text: "Smaller rooms trap scent and smoke more quickly. Shorter burns, fresh airflow, and softer fragrance profiles usually feel more comfortable overnight.",
          },
        ],
      },
      {
        id: "small-low-smoke",
        question: "Is low-smoke incense better for indoor use?",
        answer: [
          {
            type: "paragraph",
            text: "Low-smoke incense is often a better fit for daily indoor use because it produces less visible smoke and feels lighter in enclosed rooms.",
          },
        ],
      },
    ],
    relatedMoods: [
      { label: "Cozy Home", href: journalPath("cozy-home") },
      { label: "Quiet Mornings", href: journalPath("quiet-routines") },
      { label: "Slow Living", href: guidePath("slow-living-ritual-guide") },
      { label: "Calm Evenings", href: journalPath("calm-evenings") },
      { label: "Soft Focus", href: moodPath("quiet-desk-ritual") },
    ],
    saveShareSub: "Bookmark this topic for apartment fragrance and ventilation tips anytime.",
  },
  "calm-evenings": {
    heroTagline:
      "Slower rituals, softer lighting, and quieter atmosphere after long days.",
    heroLede:
      "This guide explores how lighting, fragrance, and simple routines can help evenings feel quieter and more balanced.",
    popularSearches: [
      { label: "calming evening rituals", href: guidePath("evening-calm-guide") },
      {
        label: "incense for relaxing evenings",
        href: journalPath("best-incense-for-sleep"),
      },
      { label: "unwind after work", href: moodPath("evening-room-ritual") },
    ],
    featuredGuide: {
      href: guidePath("evening-calm-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Quiet incense still life in warm evening light",
      title: "The Evening Wind-Down Guide",
      description:
        "Simple nighttime rituals for calmer evenings and softer transitions.",
    },
    featuredArticles: [],
    peopleAlsoAsk: [
      {
        id: "evening-scents",
        question: "What scents feel calming at night?",
        answer: sleepFaqAnswers.deepSleepScents,
      },
      {
        id: "evening-routine",
        question: "Is incense good for evening routines?",
        answer: [
          {
            type: "paragraph",
            text: "Many people use incense as a signal to slow down after work — short, well-ventilated sessions with softer scents often feel most comfortable indoors.",
          },
        ],
      },
      {
        id: "evening-room",
        question: "How do I make my room feel relaxing?",
        answer: [
          {
            type: "paragraph",
            text: "Softer light, restrained fragrance, and a few unhurried rituals — tea, incense, or quiet music — can help a room feel calmer without much effort.",
          },
        ],
      },
      {
        id: "evening-after-work",
        question: "What fragrance feels best after work?",
        answer: [
          {
            type: "paragraph",
            text: "Sandalwood, lavender, soft woods, and gentle tea scents are popular after long days because they feel familiar without shouting.",
          },
        ],
      },
    ],
    relatedMoods: [
      { label: "Deep Rest", href: moodPath("evening-room-ritual") },
      { label: "Cozy Home", href: journalPath("cozy-home") },
      { label: "Quiet Routines", href: journalPath("quiet-routines") },
      { label: "Slow Living", href: guidePath("slow-living-ritual-guide") },
      { label: "Soft Lighting", href: journalPath("cozy-home") },
    ],
    saveShareSub: "Bookmark this topic to return to your evening wind-down rituals.",
  },
  "quiet-routines": {
    heroTagline:
      "Gentle rituals for reading, writing, tea, reflection, and slower daily living.",
    heroLede:
      "This guide explores simple daily rituals that help indoor spaces feel quieter, calmer, and more intentional.",
    popularSearches: [
      {
        label: "incense before writing",
        href: guidePath("slow-living-ritual-guide"),
      },
      { label: "tea and incense ritual", href: moodPath("tea-after-rain") },
      { label: "quiet morning routines", href: journalPath("quiet-routines") },
    ],
    featuredGuide: {
      href: guidePath("slow-living-ritual-guide"),
      imageSrc: "/images/generated/essay-incense-patience.webp",
      imageAlt: "Writing desk with tea and incense in soft daylight",
      title: "The Quiet Ritual Handbook",
      description:
        "Simple routines that create calmer moments throughout the day.",
    },
    featuredArticles: [],
    peopleAlsoAsk: [
      {
        id: "routine-focus-incense",
        question: "What incense is good for focus?",
        answer: [
          {
            type: "paragraph",
            text: "Light woods, tea, and soft citrus scents often support focus without pulling attention. Keep burn times short and ventilation gentle.",
          },
        ],
      },
      {
        id: "routine-atmosphere",
        question: "Can fragrance improve atmosphere?",
        answer: [
          {
            type: "paragraph",
            text: "Subtle scent can signal a slower pace — especially when paired with soft light, tea, or a few minutes of quiet before reading or writing.",
          },
        ],
      },
      {
        id: "routine-calming",
        question: "Why do quiet rituals feel calming?",
        answer: [
          {
            type: "paragraph",
            text: "Repeating small, unhurried actions — lighting incense, steeping tea, opening a book — gives the nervous system a predictable pause in an overstimulated day.",
          },
        ],
      },
      {
        id: "routine-reading",
        question: "What scents work well while reading?",
        answer: [
          {
            type: "paragraph",
            text: "White tea, soft woods, and gentle florals usually stay in the background. Avoid heavy smoke or sharp fragrances during long reading sessions.",
          },
        ],
      },
    ],
    relatedMoods: [
      { label: "Gentle Focus", href: moodPath("quiet-desk-ritual") },
      { label: "Slow Living", href: guidePath("slow-living-ritual-guide") },
      { label: "Cozy Home", href: journalPath("cozy-home") },
      { label: "Quiet Mornings", href: journalPath("quiet-routines") },
      { label: "Calm Evenings", href: journalPath("calm-evenings") },
    ],
    saveShareSub: "Bookmark this topic for desk rituals and quiet focus anytime.",
  },
  "cozy-home": {
    heroTagline: "Warm rooms, soft light, and lived-in calm",
    heroLede: "for quieter interiors and slower domestic rituals.",
    popularSearches: [
      { label: "cozy home fragrance", href: journalPath("cozy-home") },
      { label: "soft evening rituals", href: journalPath("calm-evenings") },
      { label: "warm interior atmosphere", href: guidePath("evening-calm-guide") },
    ],
    featuredGuide: {
      href: guidePath("evening-calm-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Cozy interior with soft light and incense",
      title: "Evening Ritual Handbook",
      description:
        "Seasonal comfort, softer light, and rituals that make home feel calmer.",
    },
    featuredArticles: [],
    peopleAlsoAsk: [
      {
        id: "cozy-scent",
        question: "How do I make my home smell cozy without heavy fragrance?",
        answer: [
          {
            type: "paragraph",
            text: "Choose low-smoke incense, ventilate regularly, and favor soft woods or tea scents that stay in the background.",
          },
        ],
      },
      {
        id: "cozy-season",
        question: "What incense fits a cozy winter evening?",
        answer: sleepFaqAnswers.deepSleepScents,
      },
      {
        id: "cozy-living",
        question: "Can incense be part of a slow living routine?",
        answer: sleepFaqAnswers.anxiety,
      },
      {
        id: "cozy-small",
        question: "Does cozy home fragrance work in small spaces?",
        answer: [
          {
            type: "paragraph",
            text: "Yes — shorter sessions and lighter scents keep compact rooms comfortable without smoke buildup.",
          },
        ],
      },
    ],
    relatedMoods: [
      { label: "Cozy Home", href: journalPath("cozy-home") },
      { label: "Calm Evenings", href: journalPath("calm-evenings") },
      { label: "Slow Living", href: guidePath("slow-living-ritual-guide") },
    ],
    saveShareSub: "Bookmark this topic for cozy home rituals and softer interiors anytime.",
  },
  "guides-care": {
    heroTagline:
      "Practical answers and everyday guidance for cleaner, calmer incense use at home.",
    heroLede:
      "This guide covers the most common questions about indoor fragrance, low-smoke incense, ventilation, pets, and everyday comfort.",
    popularSearches: [
      { label: "is incense safe for pets", href: journalPath("is-incense-safe-for-pets") },
      { label: "how long should incense burn", href: guidePath("incense-care-guide") },
      { label: "low smoke incense guide", href: guidePath("incense-care-guide") },
    ],
    featuredGuide: {
      href: guidePath("incense-care-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Gentle incense smoke in a well-ventilated home",
      title: "The Quiet Ash Care Guide",
      description:
        "Everything you should know about using incense more comfortably indoors.",
    },
    featuredArticles: [
      {
        slug: "is-incense-safe-for-pets",
        title: "Is Incense Safe for Pets?",
        description:
          "What cat and dog owners should know before burning incense at home.",
        readMinutes: 7,
      },
    ],
    peopleAlsoAsk: [
      {
        id: "care-air",
        question: "Is incense bad for indoor air?",
        answer: [
          {
            type: "paragraph",
            text: "Heavy smoke in closed rooms can feel uncomfortable. Low-smoke incense, shorter sessions, and gentle ventilation usually make everyday indoor use feel cleaner.",
          },
        ],
      },
      {
        id: "care-cats",
        question: "Can cats smell incense strongly?",
        answer: [
          {
            type: "paragraph",
            text: "Cats and dogs often smell incense more intensely than people. Lighter scents, ventilation, and shorter burns are usually easier in shared spaces.",
          },
        ],
      },
      {
        id: "care-less-smoke",
        question: "What incense produces less smoke?",
        answer: [
          {
            type: "paragraph",
            text: "Look for sticks labeled low smoke, shorter burn profiles, and softer woods or tea scents that do not build up quickly in enclosed rooms.",
          },
        ],
      },
      {
        id: "care-safe-indoors",
        question: "How do you use incense safely indoors?",
        answer: [
          {
            type: "paragraph",
            text: "Use a stable holder, ventilate the room, keep sessions short, and choose restrained scents — especially in bedrooms, apartments, and homes with pets.",
          },
        ],
      },
    ],
    relatedMoods: [
      { label: "Quiet Home", href: journalPath("cozy-home") },
      { label: "Calm Evenings", href: journalPath("calm-evenings") },
      { label: "Slow Living", href: guidePath("slow-living-ritual-guide") },
      { label: "Deep Rest", href: journalPath("better-sleep") },
      { label: "Gentle Focus", href: moodPath("quiet-desk-ritual") },
    ],
    saveShareSub: "Bookmark this topic for incense care and safety tips anytime.",
  },
};

export function getJournalTopicPageContent(
  hubId: JournalTopicHubId,
): TopicPageContent {
  return journalTopicPageContent[hubId];
}
