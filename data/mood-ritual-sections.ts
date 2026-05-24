import { JOURNAL_INDEX, SHOP_INDEX, journalPath, moodPath, shopPath } from "@/lib/site-paths";

export type MoodRitualPopularSearchPill = {
  label: string;
  href: string;
};

export type MoodRitualPopularSearchesSpec = {
  label: string;
  pills: readonly MoodRitualPopularSearchPill[];
};

/** Post-hero modules — mood ritual editorial (mockup-locked). */
export const MOOD_RITUAL_POPULAR_SEARCHES: Record<string, MoodRitualPopularSearchesSpec> =
  {
    "evening-room-ritual": {
      label: "POPULAR SEARCHES",
      pills: [
        { label: "best incense for sleep", href: SHOP_INDEX },
        { label: "calming incense for anxiety", href: SHOP_INDEX },
        { label: "nighttime ritual scents", href: moodPath("evening-room-ritual") },
        { label: "relaxing bedroom fragrance", href: SHOP_INDEX },
        { label: "sandalwood for sleep", href: SHOP_INDEX },
        { label: "insomnia relief incense", href: SHOP_INDEX },
      ],
    },
  };

export function getMoodRitualPopularSearches(
  slug: string,
): MoodRitualPopularSearchesSpec | undefined {
  return MOOD_RITUAL_POPULAR_SEARCHES[slug];
}

export type MoodRitualSleepRitualStep = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type MoodRitualSleepRitualSpec = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  steps: readonly MoodRitualSleepRitualStep[];
};

const EVENING_RITUAL_IMAGES = {
  step01: "/images/generated/rituals/evening-room-ritual/step-01.png",
  step03: "/images/generated/rituals/evening-room-ritual/step-03.png",
  step04: "/images/generated/rituals/evening-room-ritual/step-04.png",
} as const;

export const MOOD_RITUAL_SLEEP_RITUAL: Record<string, MoodRitualSleepRitualSpec> = {
  "evening-room-ritual": {
    eyebrow: "THE SLEEP RITUAL",
    title: "A Slower End To The Day",
    description:
      "When the room gets quieter, we light incense. It signals the end of the day and the beginning of rest.",
    cta: { label: "Discover The Ritual", href: "#the-ritual" },
    steps: [
      {
        number: "01",
        title: "Dim The Lights",
        description: "Soft light helps your mind slow down naturally.",
        imageSrc: EVENING_RITUAL_IMAGES.step01,
        imageAlt: "Soft evening light on a wooden table by the window",
      },
      {
        number: "02",
        title: "Light Incense",
        description: "Calming notes of sandalwood and lavender ease the body.",
        imageSrc: EVENING_RITUAL_IMAGES.step03,
        imageAlt: "Incense smoke rising in warm evening light",
      },
      {
        number: "03",
        title: "Let Go",
        description: "Breathe deeper, slower, and let the night take over.",
        imageSrc: EVENING_RITUAL_IMAGES.step04,
        imageAlt: "Calm bedroom with candlelight and soft linen",
      },
    ],
  },
};

export function getMoodRitualSleepRitual(
  slug: string,
): MoodRitualSleepRitualSpec | undefined {
  return MOOD_RITUAL_SLEEP_RITUAL[slug];
}

export type MoodRitualSleepIncenseItem = {
  slug: string;
  title: string;
  tags: string;
  description: string;
  priceDisplay: string;
  imageSrc: string;
  imageAlt: string;
  /** `true` = image left; `false` = text left (image right). */
  imageFirst: boolean;
};

export type MoodRitualSleepIncenseSpec = {
  label: string;
  items: readonly MoodRitualSleepIncenseItem[];
};

const SLEEP_INCENSE_IMAGES = {
  sandalwood: "/images/generated/best-sellers/sandalwood-night-v2.png",
  lavender: "/images/generated/best-sellers/lavender-field-v3.png",
  jasmine: "/images/generated/best-sellers/white-jasmine-v3.png",
  citrus: "/images/generated/best-sellers/citrus-grove-v5.png",
} as const;

export const MOOD_RITUAL_SLEEP_INCENSE: Record<string, MoodRitualSleepIncenseSpec> =
  {
    "evening-room-ritual": {
      label: "SLEEP MOOD INCENSE",
      items: [
        {
          slug: "small-agarwood-box",
          title: "SANDALWOOD NIGHT",
          tags: "Deep · Warm · Grounding",
          description:
            "A deep and woody blend that relaxes the body and quiets the mind.",
          priceDisplay: "$18.00",
          imageSrc: SLEEP_INCENSE_IMAGES.sandalwood,
          imageAlt: "Sandalwood Night incense with stone holder and packaging",
          imageFirst: true,
        },
        {
          slug: "paper-incense-sleeve",
          title: "LAVENDER FIELD",
          tags: "Calm · Floral · Soft",
          description: "Soft lavender with chamomile for peaceful and gentle nights.",
          priceDisplay: "$18.00",
          imageSrc: SLEEP_INCENSE_IMAGES.lavender,
          imageAlt: "Lavender sprigs on soft linen in natural light",
          imageFirst: true,
        },
        {
          slug: "brass-incense-stand",
          title: "WHITE JASMINE",
          tags: "Clean · Floral · Soothing",
          description: "A light and clean floral scent that clears worry and tension.",
          priceDisplay: "$18.00",
          imageSrc: SLEEP_INCENSE_IMAGES.jasmine,
          imageAlt: "White Jasmine incense with holder and soft blossoms",
          imageFirst: false,
        },
        {
          slug: "wood-tray",
          title: "CITRUS GROVE",
          tags: "Fresh · Bright · Uplifting",
          description: "Fresh citrus notes for a lighter and brighter state of mind.",
          priceDisplay: "$18.00",
          imageSrc: SLEEP_INCENSE_IMAGES.citrus,
          imageAlt: "Citrus Grove incense with greenery and glass of water",
          imageFirst: true,
        },
      ],
    },
  };

export function getMoodRitualSleepIncense(
  slug: string,
): MoodRitualSleepIncenseSpec | undefined {
  return MOOD_RITUAL_SLEEP_INCENSE[slug];
}

/** Resolve shop href for sleep incense editorial cards. */
export function moodRitualSleepIncenseShopHref(itemSlug: string): string {
  return shopPath(itemSlug);
}

export type MoodRitualSleepJournalArticle = {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type MoodRitualSleepJournalSpec = {
  label: string;
  viewAllLabel: string;
  viewAllHref: string;
  articles: readonly MoodRitualSleepJournalArticle[];
};

const SLEEP_JOURNAL_IMAGES = {
  sleepGuide: "/images/generated/essay-night-incense-ritual.png",
  sandalwood: "/images/generated/essay-what-is-agarwood.png",
  eveningRitual: "/images/generated/essay-why-scholars-burned-incense.png",
  scentSleep: "/images/generated/essay-good-incense-not-loud.png",
} as const;

export const MOOD_RITUAL_SLEEP_JOURNAL: Record<string, MoodRitualSleepJournalSpec> = {
  "evening-room-ritual": {
    label: "JOURNAL STORIES FOR SLEEP",
    viewAllLabel: "View All Articles",
    viewAllHref: JOURNAL_INDEX,
    articles: [
      {
        category: "SLEEP · RITUAL",
        title: "Best Incense For Sleep",
        description: "Scents that help you fall asleep faster and stay deeper.",
        imageSrc: SLEEP_JOURNAL_IMAGES.sleepGuide,
        imageAlt: "Bedroom calm with soft linens and incense",
        href: journalPath("night-incense-ritual"),
      },
      {
        category: "INGREDIENTS",
        title: "Why Sandalwood Feels So Calming",
        description: "The science behind the world's most grounding scent.",
        imageSrc: SLEEP_JOURNAL_IMAGES.sandalwood,
        imageAlt: "Agarwood and resin in warm natural light",
        href: journalPath("what-is-agarwood"),
      },
      {
        category: "RITUALS",
        title: "A Simple Evening Ritual For Better Rest",
        description: "Small nightly habits for a calmer mind and body.",
        imageSrc: SLEEP_JOURNAL_IMAGES.eveningRitual,
        imageAlt: "Tea and branches by a sunlit window",
        href: journalPath("why-scholars-burned-incense"),
      },
      {
        category: "ATMOSPHERE",
        title: "How Scent Affects Your Sleep",
        description: "The emotional and physical impact of home fragrance.",
        imageSrc: SLEEP_JOURNAL_IMAGES.scentSleep,
        imageAlt: "Incense burning in a bowl on a wooden surface",
        href: journalPath("good-incense-not-loud"),
      },
    ],
  },
};

export function getMoodRitualSleepJournal(
  slug: string,
): MoodRitualSleepJournalSpec | undefined {
  return MOOD_RITUAL_SLEEP_JOURNAL[slug];
}

export type MoodRitualEveningCtaSpec = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

export const MOOD_RITUAL_EVENING_CTA: Record<string, MoodRitualEveningCtaSpec> = {
  "evening-room-ritual": {
    title: "Continue Your Evening Ritual",
    description:
      "Discover more scents, journal stories and quiet apartment moments.",
    cta: { label: "Explore All Scents", href: SHOP_INDEX },
    imageSrc: "/images/generated/mood-index-hero-shop-by-mood.png",
    imageAlt: "Evening incense still life in warm soft light",
  },
};

export function getMoodRitualEveningCta(
  slug: string,
): MoodRitualEveningCtaSpec | undefined {
  return MOOD_RITUAL_EVENING_CTA[slug];
}
