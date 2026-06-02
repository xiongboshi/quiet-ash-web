import type { JournalFaqBlock } from "@/types/journal-faq";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { guidePath, journalPath, moodPath } from "@/lib/site-paths";

export type TopicPageSearchPill = {
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
  /** Editorial intro (300–800 words) — signals topic authority above article list. */
  topicIntroduction?: {
    title?: string;
    paragraphs: readonly string[];
  };
  featuredArticles: readonly TopicPageFeaturedArticle[];
  peopleAlsoAsk: readonly TopicPageFaqItem[];
  saveShareSub?: string;
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
      text: "Many people burn incense for 15?30 minutes before bed, then let the room settle. You do not need a full stick every night in a small bedroom.",
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
      {
        label: "sleep hygiene guide",
        href: journalPath("sleep-hygiene-guide"),
      },
      {
        label: "improve sleep quality naturally",
        href: journalPath("how-to-improve-sleep-quality-naturally"),
      },
      {
        label: "why bad sleep happens",
        href: journalPath("why-bad-sleep-happens"),
      },
      {
        label: "green noise for sleep",
        href: journalPath("green-noise-for-sleep"),
      },
      {
        label: "how to fix bad sleep",
        href: journalPath("how-to-fix-bad-sleep"),
      },
      {
        label: "sleep meditation",
        href: journalPath("sleep-meditation"),
      },
      { label: "best incense for sleep", href: journalPath("best-incense-for-sleep") },
      {
        label: "bedroom scents for sleep",
        href: journalPath("bedroom-scents-for-better-sleep"),
      },
      {
        label: "evening wind-down rituals",
        href: journalPath("evening-wind-down-rituals-for-better-sleep"),
      },
      {
        label: "calming bedroom atmosphere",
        href: journalPath("calming-bedroom-atmosphere-for-better-sleep"),
      },
      {
        label: "soft scents before sleep",
        href: journalPath("why-soft-scents-feel-relaxing-before-sleep"),
      },
      {
        label: "burn incense before bed",
        href: journalPath("should-you-burn-incense-before-bed"),
      },
      {
        label: "best scent for sleep",
        href: journalPath("best-scent-for-sleep"),
      },
    ],
    featuredGuide: {
      href: guidePath("sleep-guide"),
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Candle and incense on a bedside table in soft evening light",
      title: "The Quiet Ash Sleep Guide",
      description:
        "Everything you need for deeper, calmer nights. Scents, atmosphere, and simple rituals that work.",
    },
    topicIntroduction: {
      title: "About Better Sleep",
      paragraphs: [
      "Better sleep is not just about spending more hours in bed. Sleep quality is influenced by daily habits, bedroom atmosphere, evening routines, light exposure, stress levels, and sensory experiences. When any of these feel out of balance, nights can feel restless even after a long day.",
      "This guide explores practical ways to improve sleep naturally through healthier habits, calming environments, and simple nighttime rituals. Whether you are struggling to fall asleep, waking during the night, or simply looking to create a more peaceful evening routine, these resources can help you build better sleep over time.",
      "At Quiet Ash, we focus on the connection between atmosphere and rest. Small changes in scent, lighting, sound, and routine can often make a meaningful difference in how you sleep and feel the next day. We write from a lifestyle perspective — bedroom calm, slower evenings, and lived-in rituals — not from a clinical one.",
      "Inside this topic you will find guides on sleep hygiene, natural sleep improvement, common reasons sleep feels difficult, and how background sound such as green noise can support a quieter room. You will also find articles on bedroom scent, evening wind-down rituals, and gentle incense choices for small spaces. Each piece is meant to stand alone, but together they form a practical map for Better Sleep.",
      "Many people begin with habits: a steadier bedtime, less screen light after dinner, caffeine earlier in the day, and a short transition before bed instead of going straight from work to sheets. Others start with the room itself — dimmer lamps, cooler air, less clutter on the nightstand, and sound that masks sudden street noise. Scent is often the last layer: sandalwood, soft woods, or light florals burned briefly, then allowed to fade so the room feels calm rather than perfumed.",
      "Poor sleep rarely has one cause. Stress, irregular schedules, and an environment that still feels like daytime can overlap. That is why this hub links habits, atmosphere, and ritual in one place. If you are new here, start with why sleep feels difficult, how to improve sleep quality naturally, or our Sleep Hygiene Guide — then explore scent and sound when you are ready to refine the room.",
      "The articles below are updated over time as we add new guides to the cluster. Use Popular searches for quick paths, read The Quiet Ash Sleep Guide for a longer overview, and bookmark what helps. Better sleep is usually built in small steps; this topic is here to support that pace.",
      ],
    },
    featuredArticles: [
      {
        slug: "sleep-hygiene-guide",
        title: "Sleep Hygiene Guide",
        description:
          "Learn the fundamentals of sleep hygiene and practical habits for better sleep quality, bedtime routines, and bedroom atmosphere.",
        readMinutes: 9,
      },
      {
        slug: "how-to-improve-sleep-quality-naturally",
        title: "How to Improve Sleep Quality Naturally",
        description:
          "Learn how to improve sleep quality naturally through better sleep habits, bedroom atmosphere, evening routines, and sleep hygiene.",
        readMinutes: 10,
      },
      {
        slug: "why-bad-sleep-happens",
        title: "Why Bad Sleep Happens",
        description:
          "Lifestyle habits, stress, screens, and bedroom atmosphere — a calm look at common reasons nights feel restless.",
        readMinutes: 11,
      },
      {
        slug: "green-noise-for-sleep",
        title: "Green Noise for Sleep",
        description:
          "What green noise is, how it compares to white and brown noise, and how sound fits into a softer evening routine.",
        readMinutes: 8,
      },
      {
        slug: "how-to-fix-bad-sleep",
        title: "How to Fix Bad Sleep",
        description:
          "Practical lifestyle steps to fix bad sleep through calmer evenings, bedroom atmosphere, and steady routines.",
        readMinutes: 9,
      },
      {
        slug: "sleep-meditation",
        title: "Sleep Meditation",
        description:
          "Quiet breath, gentle attention, and evening rituals that support relaxation before bed.",
        readMinutes: 8,
      },
      {
        slug: "best-incense-for-sleep",
        title: "Best Incense for Sleep and Relaxing Evenings",
        description:
          "Discover the best incense scents for sleep, calming evenings, and nighttime relaxation with softer fragrances and low-smoke incense.",
        readMinutes: 8,
      },
      {
        slug: "bedroom-scents-for-better-sleep",
        title: "Bedroom Scents for Better Sleep",
        description:
          "Softer bedroom scents for calmer evenings and a more relaxing nighttime atmosphere with low-smoke incense and subtle fragrance.",
        readMinutes: 8,
      },
      {
        slug: "evening-wind-down-rituals-for-better-sleep",
        title: "Evening Wind-Down Rituals for Better Sleep",
        description:
          "Simple evening rituals for calmer nights through softer lighting, quiet routines, and gentle fragrance.",
        readMinutes: 8,
      },
      {
        slug: "calming-bedroom-atmosphere-for-better-sleep",
        title: "How to Create a Calming Bedroom Atmosphere",
        description:
          "Lighting, scent, airflow, and simple evening habits for a calmer bedroom and more relaxing nights.",
        readMinutes: 8,
      },
      {
        slug: "why-soft-scents-feel-relaxing-before-sleep",
        title: "Why Soft Scents Feel More Relaxing Before Sleep",
        description:
          "Why subtle fragrance often works better at night and how softer scents support a calmer bedroom.",
        readMinutes: 8,
      },
      {
        slug: "should-you-burn-incense-before-bed",
        title: "Should You Burn Incense Before Bed?",
        description:
          "Softer scents, low-smoke incense, and shorter evening sessions for a calmer transition into sleep.",
        readMinutes: 8,
      },
      {
        slug: "best-scent-for-sleep",
        title: "What Is The Best Scent For Sleep?",
        description:
          "Popular bedroom fragrance choices including sandalwood, lavender, white tea, and gentle woods.",
        readMinutes: 8,
      },
    ],
    peopleAlsoAsk: [
      {
        id: "poor-sleep-causes",
        question: "What causes poor sleep quality?",
        answer: [
          {
            type: "paragraph",
            text: "Poor sleep can result from stress, inconsistent sleep schedules, excessive screen exposure, noise, light, or an uncomfortable sleep environment.",
          },
        ],
      },
      {
        id: "improve-sleep-naturally",
        question: "How can I improve sleep naturally?",
        answer: [
          {
            type: "paragraph",
            text: "Many people improve sleep through better sleep hygiene, consistent routines, reduced screen time, and a calming bedtime environment.",
          },
        ],
      },
      {
        id: "bedroom-atmosphere",
        question: "Does bedroom atmosphere affect sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Factors such as lighting, temperature, scent, and sound can influence how easily you fall asleep and how restful your sleep feels.",
          },
        ],
      },
      {
        id: "incense-bedtime-routine",
        question: "Can incense help create a relaxing bedtime routine?",
        answer: [
          {
            type: "paragraph",
            text: "Many people use calming scents such as sandalwood or lavender as part of a nighttime ritual designed to support relaxation.",
          },
        ],
      },
    ],
    saveShareSub: "Bookmark this topic to revisit sleep tips and evening rituals anytime.",
  },
  "small-apartment-living": {
    heroTagline: "Create a calmer home, no matter the size.",
    heroLede:
      "Practical ideas for fragrance, comfort, and everyday rituals that help apartments feel warmer, quieter, and more inviting.",
    popularSearches: [
      {
        label: "best incense for small apartments",
        href: journalPath("best-incense-for-small-apartments"),
      },
      {
        label: "apartment fragrance ideas",
        href: guidePath("small-apartment-fragrance-guide"),
      },
      {
        label: "how to make an apartment cozy",
        href: guidePath("small-apartment-fragrance-guide"),
      },
      {
        label: "studio apartment atmosphere",
        href: journalPath("best-incense-for-small-apartments"),
      },
      { label: "low smoke incense", href: guidePath("incense-care-guide") },
      {
        label: "small bedroom ideas",
        href: journalPath("bedroom-scents-for-better-sleep"),
      },
    ],
    featuredGuide: {
      href: guidePath("small-apartment-fragrance-guide"),
      imageSrc: "/images/generated/essay-night-incense-ritual.webp",
      imageAlt: "Subtle incense smoke in a small bedroom",
      title: "The Quiet Ash Small Apartment Guide",
      description:
        "Everything you need to create a calmer atmosphere in apartments and compact homes ? scent, lighting, layout, and simple daily rituals.",
    },
    featuredArticles: [
      {
        slug: "best-incense-for-small-apartments",
        title: "Best Incense for Small Apartments",
        description:
          "Find scents that feel comfortable without overwhelming smaller rooms.",
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
        id: "small-scents",
        question: "What scents work best in apartments?",
        answer: [
          {
            type: "paragraph",
            text: "White tea, soft woods, light citrus, and gentle florals often feel easier in apartments. They add atmosphere without filling the whole room.",
          },
        ],
      },
      {
        id: "small-studio-relax",
        question: "How can I make a studio apartment feel more relaxing?",
        answer: [
          {
            type: "paragraph",
            text: "Softer lighting, less visual clutter, short fragrance sessions, and a simple evening routine can help studio spaces feel calmer and more intentional.",
          },
        ],
      },
      {
        id: "small-overwhelming",
        question: "How do I keep fragrance from becoming overwhelming?",
        answer: [
          {
            type: "paragraph",
            text: "Use low-smoke incense, keep sessions brief, and open a window when possible. In smaller rooms, subtle scent often feels better than strong projection.",
          },
        ],
      },
    ],
    saveShareSub:
      "Bookmark this topic to revisit apartment scent ideas and compact-home rituals anytime.",
  },
  "calm-evenings": {
    heroTagline:
      "Slower rituals, softer lighting, and quieter atmosphere after long days.",
    heroLede:
      "This guide explores how lighting, fragrance, and simple routines can help evenings feel quieter and more balanced.",
    popularSearches: [
      {
        label: "incense after work",
        href: journalPath("incense-after-work"),
      },
      { label: "calming evening rituals", href: guidePath("evening-calm-guide") },
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
    featuredArticles: [
      {
        slug: "incense-after-work",
        title: "Incense After Work: Softer Scents for Slower Evenings",
        description:
          "Softer fragrance and quieter atmosphere for slower evenings at home.",
      },
    ],
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
            text: "Many people use incense as a signal to slow down after work ? short, well-ventilated sessions with softer scents often feel most comfortable indoors.",
          },
        ],
      },
      {
        id: "evening-room",
        question: "How do I make my room feel relaxing?",
        answer: [
          {
            type: "paragraph",
            text: "Softer light, restrained fragrance, and a few unhurried rituals ? tea, incense, or quiet music ? can help a room feel calmer without much effort.",
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
    saveShareSub: "Bookmark this topic to return to your evening wind-down rituals.",
  },
  "quiet-routines": {
    heroTagline:
      "Gentle rituals for reading, writing, tea, reflection, and slower daily living.",
    heroLede:
      "This guide explores simple daily rituals that help indoor spaces feel quieter, calmer, and more intentional.",
    popularSearches: [
      {
        label: "tea and incense ritual",
        href: journalPath("tea-and-incense-rituals"),
      },
      {
        label: "incense before writing",
        href: guidePath("slow-living-ritual-guide"),
      },
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
    featuredArticles: [
      {
        slug: "tea-and-incense-rituals",
        title: "Tea and Incense Rituals for Slower Evenings",
        description:
          "Quiet routines, softer atmosphere, and slower moments at home.",
      },
    ],
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
            text: "Subtle scent can signal a slower pace ? especially when paired with soft light, tea, or a few minutes of quiet before reading or writing.",
          },
        ],
      },
      {
        id: "routine-calming",
        question: "Why do quiet rituals feel calming?",
        answer: [
          {
            type: "paragraph",
            text: "Repeating small, unhurried actions ? lighting incense, steeping tea, opening a book ? gives the nervous system a predictable pause in an overstimulated day.",
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
            text: "Yes ? shorter sessions and lighter scents keep compact rooms comfortable without smoke buildup.",
          },
        ],
      },
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
            text: "Use a stable holder, ventilate the room, keep sessions short, and choose restrained scents ? especially in bedrooms, apartments, and homes with pets.",
          },
        ],
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
