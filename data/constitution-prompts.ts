/**
 * Quiet Ash Constitution v5.0 — executable prompt layers.
 * Canon: docs/QUIET-ASH-CONSTITUTION.md
 */

/** Prepend to EVERY image generation prompt. */
export const QA_CONSTITUTION_MASTER_PROMPT = `Quiet Ash cinematic lifestyle photography, physically realistic lighting and photography behavior, warm afternoon sunlight, Tokyo apartment atmosphere, emotional luxury fragrance campaign, realistic skin texture, subtle imperfections, linen fabric, incense smoke, authentic shadow falloff, believable material response, shallow depth of field, 50mm lens, soft film grain, warm cream tones, editorial composition, realistic product styling, asymmetrical framing, candid human presence, crystal incense holder, premium beauty campaign feeling, cozy intimate atmosphere, Pinterest luxury aesthetic, realistic optical lens characteristics, non-CGI product rendering, visible air particles, subtle humidity, natural visual rhythm, imperfect cinematic realism, quiet loneliness, slow living atmosphere, lived-in environment, emotional silence, authentic apartment life documentary feeling, recurring apartment objects, seasonal atmosphere, emotional memory feeling, understated luxury, non-commercial realism`;

/** Anti-AI doctrine — append as negative / avoid block. */
export const QA_ANTI_AI_NEGATIVE = `Avoid: overly centered composition, ultra-sharp textures, hyper-clean surfaces, perfect symmetry, artificial skin, HDR contrast, over-designed styling, luxury commercial polish, catalog staging, showroom perfection, obvious AI aesthetics, CGI look, plastic materials, pure white or black backgrounds, saturated accent colors, text logos or UI in frame, god rays, lens flare abuse, zen temple clichés, scholar desk museum darkness as default, multiple inconsistent apartments, new window geometry per image`;

/** Single-apartment anchors — append for lifestyle, hero, ritual, essay. */
export const QA_APARTMENT_MEMORY = `Quiet Ash Apartment — one continuous home only. Recurring: same window edge and frame, same wooden table or desk plane, same bed linen, same kitchen corner, same bathroom mirror glimpse, same floor tone, same off-camera lamp direction. Crystal incense holder same geometry and small scale. Lived-in traces: books moved, glass half full, wrinkled linen, incense ash, seasonal light change on same walls`;

export type ConstitutionTime =
  | "morning"
  | "afternoon"
  | "sunset"
  | "midnight";

export type ConstitutionSeason = "spring" | "summer" | "autumn" | "winter";

const TIME_LAYERS: Record<ConstitutionTime, string> = {
  morning:
    "Morning: cool soft white window light, quiet breathable air, slight moisture, low contrast, calm morning stillness",
  afternoon:
    "Afternoon: 4pm warm window light 5200-5800K, golden side light, long soft shadows, citrus and work energy in air",
  sunset:
    "Sunset: gold air, long shadows, slow rhythm, warm cream walls",
  midnight:
    "Midnight: blue-grey dark room, single desk lamp practical, deep wood, solitary incense smoke, quiet loneliness",
};

const SEASON_LAYERS: Record<ConstitutionSeason, string> = {
  spring: "Spring: white flowers, damp air, soft cold morning light at same window",
  summer: "Summer: strong sun, condensation on glass, citrus air, AC breeze feeling",
  autumn: "Autumn: deep wood tones, long shadows, dry air",
  winter: "Winter: duvet warmth, steam, late warm lamp, cold blue outside window",
};

const LENS_BY_USE = {
  hero: "50mm lens, hero framing with left negative space for typography",
  lifestyle: "50mm lens, lifestyle documentary framing, lower emotional density",
  product: "85mm lens, product close-up, off-center lower-right, recently used styling",
  space: "35mm lens, room space showing apartment memory anchors",
} as const;

export type LensUse = keyof typeof LENS_BY_USE;

export function buildConstitutionImagePrompt(options: {
  scene: string;
  time?: ConstitutionTime;
  season?: ConstitutionSeason;
  lens?: LensUse;
}): string {
  const { scene, time = "afternoon", season, lens = "hero" } = options;
  return [
    QA_CONSTITUTION_MASTER_PROMPT,
    QA_APARTMENT_MEMORY,
    TIME_LAYERS[time],
    season ? SEASON_LAYERS[season] : "",
    LENS_BY_USE[lens],
    scene,
    QA_ANTI_AI_NEGATIVE,
  ]
    .filter(Boolean)
    .join("\n\n");
}
