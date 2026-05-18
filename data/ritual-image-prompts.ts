import type { TimeMode } from "@/data/visual-prompts";
import { buildImagePrompt } from "@/data/visual-prompts";

export type RitualImageSet = {
  slug: string;
  cover: { scene: string; time: TimeMode };
  steps: { scene: string; time: TimeMode }[];
};

/** One unique prompt per ritual cover + four step images. */
export const ritualImagePrompts: RitualImageSet[] = [
  {
    slug: "incense-before-writing",
    cover: {
      time: "afternoon",
      scene:
        "A worn wooden desk beside a sunlit window. An open notebook with a real pencil, margins squared by hand. A small brass incense stand with one thin vertical smoke thread. Folded linen off to the side. The room feels quiet and recently used.",
    },
    steps: [
      {
        time: "afternoon",
        scene:
          "Close editorial view of paper edge and pencil aligned to a truthful margin on a wooden desk. Soft window light, shallow depth of field.",
      },
      {
        time: "afternoon",
        scene:
          "Small brass incense stand with one glowing coal, realistic scale on desk grain. Hands just left frame. Warm beige walls.",
      },
      {
        time: "evening",
        scene:
          "Thin incense smoke rising in a straight delicate line above desk, not thick. Charcoal room edge, window still bright.",
      },
      {
        time: "afternoon",
        scene:
          "Oak desk tray corner with paper weight and closed ink bottle. Someone paused mid-sentence. Lived-in scratches on wood.",
      },
    ],
  },
  {
    slug: "quiet-desk-ritual",
    cover: {
      time: "morning",
      scene:
        "Morning scholar desk: oak tray, folded paper sleeve for incense, ceramic tea bowl pushed slightly aside. Cool soft daylight, creased linen, books with worn spines. Off-center composition.",
    },
    steps: [
      {
        time: "morning",
        scene:
          "Hands clearing a wooden desk surface, only essential objects remain. Oak tray entering frame. Authentic morning light.",
      },
      {
        time: "morning",
        scene:
          "Paper aligned to wood grain on desk, tactile fibers visible. Pencil resting, not posed symmetrically.",
      },
      {
        time: "afternoon",
        scene:
          "Single ribbon of incense smoke above desk margin, metronome-thin. Book half open in background blur.",
      },
      {
        time: "morning",
        scene:
          "Stone-glaze tea bowl holding space between paragraphs, steam faint. Desk still marked by use.",
      },
    ],
  },
  {
    slug: "tea-after-rain",
    cover: {
      time: "rain",
      scene:
        "Rain-softened window beside a wooden table. Ceramic tea bowl, folded linen, steam barely visible. Grey-blue air, wet quiet, no drama.",
    },
    steps: [
      {
        time: "rain",
        scene:
          "Interior listening moment: rain on glass bokeh, muted street, cup and hands still. Low contrast, real apartment.",
      },
      {
        time: "rain",
        scene:
          "Two palms warming a stone-glaze tea bowl, glaze variation visible. Table texture, rain light from left.",
      },
      {
        time: "rain",
        scene:
          "Pouring tea in a steady thin line into bowl on wood tray. Water color honest, not stylized.",
      },
      {
        time: "rain",
        scene:
          "First sip pause: bowl lowered slightly, linen napkin creased, book edge in frame. Someone stayed.",
      },
    ],
  },
  {
    slug: "smoke-and-silence",
    cover: {
      time: "evening",
      scene:
        "Dim lived-in room, light lowered. Small agarwood box closed on table, brass stand with faint smoke. Listening atmosphere, not theatrical.",
    },
    steps: [
      {
        time: "evening",
        scene:
          "Room corner with lamp off, window afterglow only. Eye adjusts to dimness, real shadows.",
      },
      {
        time: "afternoon",
        scene:
          "Hands opening a small wooden agarwood box like a ledger, resin pieces inside, worn brass clasp.",
      },
      {
        time: "evening",
        scene:
          "One incense thread, wide negative space, smoke teaching distance. Charcoal and warm beige.",
      },
      {
        time: "evening",
        scene:
          "Brass incense stand close-up, patina and age, ash collecting naturally. Editorial product-in-life, not packshot.",
      },
    ],
  },
  {
    slug: "evening-room-ritual",
    cover: {
      time: "evening",
      scene:
        "Evening room after rain: window cracked open a finger, linen curtain moved, wood table with tray and cup. Day leaving without speech.",
    },
    steps: [
      {
        time: "rain",
        scene:
          "Window latch slightly open, wet air hint, curtain fiber detail. Real home, not hotel.",
      },
      {
        time: "evening",
        scene:
          "Kettle steam and sound implied: spout tilted, bowl waiting on tray. Warm wood deepening.",
      },
      {
        time: "evening",
        scene:
          "Incense lit after room settled, smoke marking evening on table beside cooled tea.",
      },
      {
        time: "evening",
        scene:
          "Empty chair at table, tea bowl, incense still burning. Doing nothing is enough. Lived-in quiet.",
      },
    ],
  },
  {
    slug: "why-agarwood-matters",
    cover: {
      time: "afternoon",
      scene:
        "Editorial still life: small agarwood pieces and closed wooden keeper box on walnut table. Resin texture honest, time and restraint.",
    },
    steps: [
      {
        time: "afternoon",
        scene:
          "Macro-but-real agarwood resin on linen, fibers and oil sheen, not CGI. Finger scale reference.",
      },
      {
        time: "afternoon",
        scene:
          "Closed agarwood box on shelf, respectfully stored until use. Dust motes in window light.",
      },
      {
        time: "evening",
        scene:
          "Single small piece burning sparingly, thin smoke, room earning the transition.",
      },
      {
        time: "evening",
        scene:
          "Ash in brass stand holding evidence of time, soft focus room behind.",
      },
    ],
  },
];

export function ritualImagePath(
  slug: string,
  file: "cover" | 1 | 2 | 3 | 4,
): string {
  const name = file === "cover" ? "cover.png" : `step-0${file}.png`;
  return `/images/generated/rituals/${slug}/${name}`;
}

export function getRitualImagePrompts(slug: string): RitualImageSet | undefined {
  return ritualImagePrompts.find((r) => r.slug === slug);
}

export function fullPromptFor(
  entry: { scene: string; time: TimeMode },
): string {
  return buildImagePrompt(entry.scene, entry.time);
}
