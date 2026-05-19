import type { TimeMode } from "@/data/visual-prompts";
import { buildImagePrompt } from "@/data/visual-prompts";

export type EssayImageEntry = {
  slug: string;
  scene: string;
  time: TimeMode;
};

/** One cover per canonical essay slug — paths: `/images/generated/essay-{slug}.png` */
export const essayImagePrompts: EssayImageEntry[] = [
  {
    slug: "why-scholars-burned-incense",
    time: "afternoon",
    scene:
      "Scholar wooden desk before writing: squared paper margin, pencil, small brass holder with one short thin stick incense, delicate smoke thread. Window side light, worn oak, creased linen. Recently used, not staged.",
  },
  {
    slug: "night-incense-ritual",
    time: "evening",
    scene:
      "Dim lived-in room at night. Single short incense stick burning on low table, thin grey smoke in window afterglow. Tea cup pushed aside optional but subtle. Charcoal corners, warm beige, very quiet.",
  },
  {
    slug: "what-is-agarwood",
    time: "afternoon",
    scene:
      "Editorial still life: raw agarwood resin pieces on worn linen beside a closed wooden keeper box on walnut table. Honest texture, time and wound implied, not jewelry macro.",
  },
  {
    slug: "agarwood-time-rain-injury",
    time: "rain",
    scene:
      "Rain window light on a wooden table. Cross-section of dark agarwood resin beside a small knife and folded cloth — injury and time made tactile, not graphic. Grey-blue soft air.",
  },
  {
    slug: "forgotten-incense-culture",
    time: "afternoon",
    scene:
      "Open wooden drawer with aged incense tools: bronze holder, paper sleeves, unused but dust-softened. Afternoon window, quiet home, not museum display.",
  },
  {
    slug: "good-incense-not-loud",
    time: "afternoon",
    scene:
      "Almost invisible thin incense smoke above a simple desk — fragrance suggested not spectacle. Negative space, soft window light, one book half open.",
  },
  {
    slug: "incense-heaven-earth",
    time: "evening",
    scene:
      "Single vertical incense smoke rising toward a tall window in a modest room — contemplative, not temple. Plaster wall, wood table, human scale, no religious icons.",
  },
  {
    slug: "incense-ink-silence",
    time: "morning",
    scene:
      "Song-dynasty mood scholar desk: ink stone, brush rest, short stick incense smoking thinly. Morning cool light, paper fibers, oak grain, creased sleeve of linen.",
  },
  {
    slug: "incense-ink-silence23",
    time: "morning",
    scene:
      "Close editorial: ink brush resting beside smoking short incense on desk margin. Morning window, shallow depth of field, ash-and-time stillness.",
  },
  {
    slug: "incense-ink-silence24",
    time: "morning",
    scene:
      "Wide desk still life: tools for concentration — incense stand, folded paper, ink — morning quiet, off-center composition, lived-in scholar pace.",
  },
  {
    slug: "incense-patience",
    time: "afternoon",
    scene:
      "One short incense stick burning mid-frame, ash forming slowly. Empty chair implied at edge. Afternoon patience, no drama, real proportions.",
  },
  {
    slug: "king-of-incense",
    time: "afternoon",
    scene:
      "Opened wooden box revealing dark agarwood pieces on walnut table, hands just closed the lid. Respectful, not luxury ad. Dust in window light.",
  },
];

export function essayImagePath(slug: string): string {
  return `/images/generated/essay-${slug}.png`;
}

export function getEssayImagePrompt(slug: string): EssayImageEntry | undefined {
  return essayImagePrompts.find((e) => e.slug === slug);
}

export function fullEssayPrompt(entry: EssayImageEntry): string {
  return buildImagePrompt(entry.scene, entry.time);
}
