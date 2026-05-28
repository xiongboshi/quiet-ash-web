import type { JournalFaqBlock } from "@/types/journal-faq";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { guidePath } from "@/lib/site-paths";

export type TopicPageFeaturedArticle = {
  slug: string;
  title: string;
  description: string;
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
  featuredGuide: TopicPageFeaturedGuide;
  featuredArticles: readonly TopicPageFeaturedArticle[];
  peopleAlsoAsk: readonly TopicPageFaqItem[];
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
        title: "Best Incense for Better Sleep",
        description: "Our expert picks for scents that help you relax and rest.",
      },
      {
        slug: "night-incense-ritual",
        title: "Lavender vs Sandalwood: Which is Better for Sleep?",
        description: "A simple comparison to help you choose the right scent.",
      },
      {
        slug: "what-is-agarwood",
        title: "Evening Wind-Down Rituals That Actually Work",
        description: "Step-by-step rituals to calm your mind and body.",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "How to Use Incense Safely in Your Bedroom",
        description: "Practical tips for a safe and soothing experience.",
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
    saveShareSub: "Bookmark this topic to revisit sleep tips and evening rituals anytime.",
  },
  "small-space-living": {
    heroTagline: "Low-smoke fragrance and softer indoor air",
    heroLede: "for apartments, bedrooms, and compact homes.",
    featuredGuide: {
      href: guidePath("small-apartment-fragrance-guide"),
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Subtle incense smoke in a small bedroom",
      title: "Small Apartment Fragrance Guide",
      description:
        "Make small spaces feel softer without heavy smoke or overwhelming scent.",
    },
    featuredArticles: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments and Bedrooms",
        description: "Low-smoke picks that stay comfortable indoors.",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense Shouldn't Feel Loud",
        description: "Why restraint matters in compact rooms.",
      },
      {
        slug: "is-incense-safe-for-pets",
        title: "Is Incense Safe in Small Rooms with Pets?",
        description: "Ventilation and lighter scents at home.",
      },
      {
        slug: "what-is-agarwood",
        title: "What Is Agarwood — and When Less Is More",
        description: "Depth without filling the whole apartment.",
      },
    ],
    peopleAlsoAsk: [
      {
        id: "small-ventilation",
        question: "How do I ventilate a small room when burning incense?",
        answer: [
          {
            type: "paragraph",
            text: "Crack a window or door slightly and keep sessions short. Low-smoke incense and smaller rooms pair best with lighter burn times.",
          },
        ],
      },
      {
        id: "small-smoke",
        question: "What is the best low-smoke incense for apartments?",
        answer: [
          {
            type: "paragraph",
            text: "Look for sticks labeled low smoke, shorter burn times, and softer woods or tea scents that do not build up quickly.",
          },
        ],
      },
      {
        id: "small-bedroom",
        question: "Can I burn incense in a bedroom every day?",
        answer: sleepFaqAnswers.howLongBeforeBed,
      },
      {
        id: "small-neighbors",
        question: "Will incense smoke bother neighbors in an apartment?",
        answer: [
          {
            type: "paragraph",
            text: "Shorter sessions, ventilation, and restrained scents reduce drift. Avoid heavy smoke buildup near shared walls or vents.",
          },
        ],
      },
    ],
    saveShareSub: "Bookmark this topic for apartment fragrance and ventilation tips anytime.",
  },
  "calm-evenings": {
    heroTagline: "Slower rituals for overstimulated days",
    heroLede: "and softer evening atmosphere at home.",
    featuredGuide: {
      href: guidePath("evening-calm-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Quiet incense still life in warm evening light",
      title: "Evening Ritual Handbook",
      description:
        "Simple rituals for calmer evenings — light, scent, and quieter rooms.",
    },
    featuredArticles: [
      {
        slug: "good-incense-not-loud",
        title: "Good Incense Shouldn't Feel Loud",
        description: "Restraint and softer atmosphere after long days.",
      },
      {
        slug: "incense-patience",
        title: "What Burning Incense Teaches About Patience",
        description: "Slower evenings begin with small rituals.",
      },
      {
        slug: "night-incense-ritual",
        title: "A Night Incense Ritual That Actually Calms",
        description: "Step-by-step wind-down without overwhelm.",
      },
      {
        slug: "forgotten-incense-culture",
        title: "The Atmosphere We Forgot to Protect",
        description: "Quiet rooms and gentler evenings at home.",
      },
    ],
    peopleAlsoAsk: [
      {
        id: "evening-when",
        question: "When should I start an evening incense ritual?",
        answer: [
          {
            type: "paragraph",
            text: "Many people light incense 30–60 minutes before bed or right after work as a signal to slow down — not at the moment they want to sleep.",
          },
        ],
      },
      {
        id: "evening-scents",
        question: "What scents feel most calming in the evening?",
        answer: sleepFaqAnswers.deepSleepScents,
      },
      {
        id: "evening-length",
        question: "How long should an evening ritual last?",
        answer: sleepFaqAnswers.howLongBeforeBed,
      },
      {
        id: "evening-anxiety",
        question: "Can scent help after a stressful day?",
        answer: sleepFaqAnswers.anxiety,
      },
    ],
    saveShareSub: "Bookmark this topic to return to your evening wind-down rituals.",
  },
  "quiet-routines": {
    heroTagline: "Writing, tea, reading, and quiet focus",
    heroLede: "with atmosphere that stays in the background.",
    featuredGuide: {
      href: guidePath("slow-living-ritual-guide"),
      imageSrc: "/images/generated/essay-incense-patience.webp",
      imageAlt: "Writing desk with tea and incense in soft daylight",
      title: "Slow Living Ritual Guide",
      description:
        "Desk rituals, tea, and creative solitude — building focus without noise.",
    },
    featuredArticles: [
      {
        slug: "why-scholars-burned-incense",
        title: "Why Scholars Burned Incense Before Writing",
        description: "Stillness before the first line.",
      },
      {
        slug: "incense-ink-silence",
        title: "Incense, Ink, and Silence",
        description: "A quieter desk and slower mornings.",
      },
      {
        slug: "incense-patience",
        title: "What Burning Incense Teaches About Patience",
        description: "Ritual rhythm for creative work.",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense Shouldn't Feel Loud",
        description: "Background scent for reading and writing.",
      },
    ],
    peopleAlsoAsk: [
      {
        id: "routine-writing",
        question: "Is incense good for writing or study?",
        answer: [
          {
            type: "paragraph",
            text: "Light woods, tea, and citrus scents often feel clean without pulling attention. Avoid heavy smoke during focused work.",
          },
        ],
      },
      {
        id: "routine-desk",
        question: "How do I use incense at a small desk?",
        answer: [
          {
            type: "paragraph",
            text: "Use a stable holder, short burn times, and a ventilated room. Keep the stick away from paper and fabrics.",
          },
        ],
      },
      {
        id: "routine-tea",
        question: "Can I pair incense with tea rituals?",
        answer: [
          {
            type: "paragraph",
            text: "Yes — many people light incense while water heats, then let scent settle as tea steeps. Keep both rituals unhurried.",
          },
        ],
      },
      {
        id: "routine-focus",
        question: "What scents support focus without distraction?",
        answer: sleepFaqAnswers.deepSleepScents,
      },
    ],
    saveShareSub: "Bookmark this topic for desk rituals and quiet focus anytime.",
  },
  "cozy-home": {
    heroTagline: "Warm rooms, soft light, and lived-in calm",
    heroLede: "for quieter interiors and slower domestic rituals.",
    featuredGuide: {
      href: guidePath("evening-calm-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Cozy interior with soft light and incense",
      title: "Evening Ritual Handbook",
      description:
        "Seasonal comfort, softer light, and rituals that make home feel calmer.",
    },
    featuredArticles: [
      {
        slug: "forgotten-incense-culture",
        title: "The Atmosphere We Forgot to Protect",
        description: "Quiet interiors and gentler living at home.",
      },
      {
        slug: "good-incense-not-loud",
        title: "Good Incense Shouldn't Feel Loud",
        description: "Warm rooms without overwhelming scent.",
      },
      {
        slug: "incense-patience",
        title: "What Burning Incense Teaches About Patience",
        description: "Slower rituals in everyday rooms.",
      },
      {
        slug: "night-incense-ritual",
        title: "A Night Incense Ritual That Actually Calms",
        description: "Soft light and quieter evenings indoors.",
      },
    ],
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
    saveShareSub: "Bookmark this topic for cozy home rituals and softer interiors anytime.",
  },
  "guides-care": {
    heroTagline: "Practical answers for safer, cleaner fragrance",
    heroLede: "pet safety, ventilation, and everyday incense care.",
    featuredGuide: {
      href: guidePath("incense-care-guide"),
      imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
      imageAlt: "Gentle incense smoke in a well-ventilated home",
      title: "Guide to Low-Smoke Incense",
      description:
        "What low smoke means, why it matters, and how to use incense with intention.",
    },
    featuredArticles: [
      {
        slug: "is-incense-safe-for-pets",
        title: "Is Incense Safe for Pets?",
        description: "What cat and dog owners should know.",
      },
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        description: "Ventilation and low-smoke options indoors.",
      },
      {
        slug: "what-is-agarwood",
        title: "What Is Agarwood?",
        description: "Ingredients, depth, and everyday use.",
      },
      {
        slug: "best-incense-for-sleep",
        title: "Best Incense for Sleep",
        description: "Calming scents and safer bedroom habits.",
      },
    ],
    peopleAlsoAsk: [
      {
        id: "care-pets",
        question: "Is incense safe for pets?",
        answer: [
          {
            type: "paragraph",
            text: "Use ventilation, shorter burn times, and lighter scents. Watch for irritation and keep smoke away from enclosed sleeping areas.",
          },
        ],
      },
      {
        id: "care-low-smoke",
        question: "What does low-smoke incense mean?",
        answer: [
          {
            type: "paragraph",
            text: "It produces less visible smoke and usually feels lighter indoors — helpful for apartments and daily use.",
          },
        ],
      },
      {
        id: "care-ventilation",
        question: "How much ventilation do I need?",
        answer: [
          {
            type: "paragraph",
            text: "A slightly open window or door is often enough for short sessions. Avoid letting smoke accumulate in closed rooms.",
          },
        ],
      },
      {
        id: "care-daily",
        question: "Can I burn incense every day?",
        answer: sleepFaqAnswers.safeWhileSleeping,
      },
    ],
    saveShareSub: "Bookmark this topic for incense care and safety tips anytime.",
  },
};

export function getJournalTopicPageContent(
  hubId: JournalTopicHubId,
): TopicPageContent {
  return journalTopicPageContent[hubId];
}
