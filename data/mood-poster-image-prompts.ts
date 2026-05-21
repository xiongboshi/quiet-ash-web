/**
 * Choose your mood — poster backgrounds (4:5).
 * Reference: INS mood poster grid (generate fresh; no checked-in reference sheet).
 *
 * Series lock: identical camera, crystal scale, stick spec, smoke, lighting.
 * Only background hue + crystal color change per mood.
 */

export const MOOD_POSTER_ASPECT = { width: 4, height: 5 } as const;

export const MOOD_POSTER_SIZE = { width: 1024, height: 1280 } as const;

/** Shared shot bible — append mood-specific color line only. */
export const MOOD_POSTER_SERIES_LOCK = `Mood Incense poster series SHOT-LOCK v2 — must match identical framing across a 5-image set.

CAMERA (identical every frame): 85mm lens, tripod locked, subject distance 72cm, zero zoom variation, NOT macro, NOT wide. Portrait 4:5. Eye-level. Crystal+stick occupy exactly 36% of frame height, anchored bottom-right: crystal base sits 11% above bottom edge, 16% inset from right edge. Same scale in every image.

CRYSTAL HOLDER (identical geometry): one raw translucent crystal chunk, rounded tower shape ~8.5cm tall × 6.5cm wide, medium-regular facets (even, not chaotic shards), single centered hole on top, same 12° tilt toward camera. Same shadow length on surface (soft edge, falls right-down).

INCENSE STICK (identical spec): ONE stick only — thin Japanese mood incense short stick, 2mm diameter, uniform cinnamon-brown, exactly 8.5cm visible length above crystal, perfectly vertical, tip ember same size, same distance from crystal top. Do NOT make stick thicker, longer, shorter, or doubled.

SMOKE (identical): one delicate white wisp, same opacity, same gentle curve up-right, same height (~6cm trail).

LIGHTING (identical): soft studio key upper-left 40°, fill from front, same contrast, same highlight on crystal facets.

BACKGROUND: seamless flat matte pastel, no texture, no props, no horizon. Left 52% empty for typography.

FORBIDDEN: text, logos, UI, hands, boxes, trays, multiple sticks, uneven giant/small crystals, different camera distances, wide-angle distortion.

Photorealistic premium fragrance campaign. Modern INS mood incense — NOT zen temple, NOT scholar desk.`;

export type MoodPosterSlug =
  | "calm"
  | "energy"
  | "sleep"
  | "focus"
  | "rainy-day";

const MOOD_COLOR: Record<MoodPosterSlug, string> = {
  calm: "Background solid pale sage green #c5d6c3. Crystal: translucent green fluorite, even mint-green tone.",
  energy:
    "Background solid pale buttery yellow #f2e8a8. Crystal: translucent yellow citrine, even golden-yellow tone.",
  sleep:
    "Background solid pale lavender #d8cfe8. Crystal: translucent purple amethyst, even soft violet tone.",
  focus:
    "Background solid pale peach blush #e8cfc6. Crystal: translucent pink rose quartz, even warm blush tone.",
  "rainy-day":
    "Background solid pale blue-grey #c5d5e3. Crystal: translucent blue-grey celestite, even cool grey-blue tone.",
};

export function buildMoodPosterPrompt(slug: MoodPosterSlug): string {
  return `${MOOD_POSTER_SERIES_LOCK}\n\nMOOD VARIANT: ${MOOD_COLOR[slug]}`;
}

export const moodPosterPrompts = {
  calm: buildMoodPosterPrompt("calm"),
  energy: buildMoodPosterPrompt("energy"),
  sleep: buildMoodPosterPrompt("sleep"),
  focus: buildMoodPosterPrompt("focus"),
  "rainy-day": buildMoodPosterPrompt("rainy-day"),
} as const;

export const moodPosterPublicPaths = {
  calm: "/images/generated/mood-poster-calm-jasmine.png",
  energy: "/images/generated/mood-poster-energy-citrus.png",
  sleep: "/images/generated/mood-poster-sleep.png",
  focus: "/images/generated/mood-poster-focus.png",
  "rainy-day": "/images/generated/mood-poster-rainy-day.png",
} as const;
