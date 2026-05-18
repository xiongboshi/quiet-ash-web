/** Quiet Ash — fixed prompt layers for all image generation. */

export const QA_BRAND_BASE = `Quiet Ash visual system:
Editorial lifestyle photography.
Quiet lived-in interiors.
Natural daylight.
Warm beige, walnut brown, linen ivory, smoke black.
Authentic material textures.
Soft atmospheric realism.
Real-life proportions.
Objects feel naturally used, never staged.
A calm European-Japanese slow living atmosphere.
Not cinematic, not overly artistic, not luxury showroom.`;

export const QA_PHOTO_RULES = `Shot like real editorial photography.
Natural window lighting only.
50mm lens.
Subtle depth of field.
Soft shadow transitions.
No artificial symmetry.
No CGI look.
No hyper-detail.
Realistic scale and object proportions.`;

export const QA_NEGATIVE = `No excessive minimalism.
No zen showroom.
No dramatic cinematic lighting.
No perfect symmetry.
No fantasy atmosphere.
No overly clean luxury interiors.
No obvious AI aesthetics.
No calligraphy or floating text.
No luxury hotel or mansion interiors.
No product showroom staging.
No pure white or pure black backgrounds.
No saturated accent colors.
No blue or green color casts.`;

export type TimeMode =
  | "morning"
  | "afternoon"
  | "evening"
  | "rain";

const TIME_MODIFIERS: Record<TimeMode, string> = {
  morning:
    "Morning Quiet: cool-soft window light, linen translucency, low contrast, clear calm air.",
  afternoon:
    "Afternoon Stillness: warm walnut tones, lengthening shadows, soft golden side light.",
  evening:
    "Evening Ritual: warm dim interior, charcoal corners, single window afterglow, thin incense smoke.",
  rain:
    "Rain Window: grey-blue humid air, soft moisture on glass, muted reflections, very quiet room.",
};

export function buildImagePrompt(
  scene: string,
  time: TimeMode = "afternoon",
): string {
  return [QA_BRAND_BASE, TIME_MODIFIERS[time], scene, QA_PHOTO_RULES, QA_NEGATIVE].join(
    "\n\n",
  );
}
