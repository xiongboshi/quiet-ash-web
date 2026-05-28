import { JOURNAL_INDEX } from "@/lib/site-paths";

export type MoodRitualHeroTag = {
  label: string;
  href?: string;
};

export type MoodRitualHeroSpec = {
  breadcrumbParent: { label: string; href: string };
  breadcrumbCurrent: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: MoodRitualHeroTag[];
};

/** Split hero — mood ritual editorial pages (mockup-locked). */
export const MOOD_RITUAL_HEROES: Record<string, MoodRitualHeroSpec> = {
  "evening-room-ritual": {
    breadcrumbParent: { label: "JOURNAL", href: JOURNAL_INDEX },
    breadcrumbCurrent: "SLEEP",
    title: "Scents For Quieter Nights",
    description:
      "Calming incense for deeper rest, softer breathing and nights that feel like a reset.",
    imageSrc: "/images/generated/mood-hero-slide-03-sleep.webp",
    imageAlt: "Bedside with incense, linen, flowers, and soft morning light",
    tags: [
      { label: "SLEEP" },
      { label: "NIGHT RITUAL" },
      { label: "CALM" },
      { label: "RELAXATION" },
    ],
  },
};

export function getMoodRitualHero(slug: string): MoodRitualHeroSpec | undefined {
  return MOOD_RITUAL_HEROES[slug];
}

/** Mood ritual editorial mockup shell (split hero, no global SiteHeader). */
export function isMoodRitualEditorialPath(pathname: string | null): boolean {
  const path = (pathname ?? "").split("?")[0]?.split("#")[0] ?? "";
  const normalized =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  const match = normalized.match(/^\/moods\/([^/]+)$/);
  if (!match) return false;
  return match[1] in MOOD_RITUAL_HEROES;
}
