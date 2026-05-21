/**
 * Homepage hero prompts — Constitution v5.0 (docs/QUIET-ASH-CONSTITUTION.md).
 * Print: npm run images:hero-prompts
 */

import { buildConstitutionImagePrompt } from "@/data/constitution-prompts";
import { buildImagePrompt } from "@/data/visual-prompts";

/** Canvas reference (desktop artboard). */
export const HERO_SLIDE_01_CANVAS = {
  width: 1920,
  height: 1080,
} as const;

/**
 * Mood incense carton — same SKU as homepage hero (10.5cm sticks / 15cm pack).
 * Use in every multi-box still life so proportions stay consistent.
 */
export const QA_MOOD_INCENSE_CARTON = `IDENTICAL pack geometry to Quiet Ash homepage hero carton:
real-world 15cm tall × 4.6cm wide × 4.6cm deep matte paperboard; front-face aspect ratio width:height = 1:3.3 (very slim vertical rectangle, NOT squat, NOT wide gift box, NOT cube).
Holds 30 short sticks; label layout: "QUIET ASH" bold top, "INCENSE" small, scent name center, three note lines; footer two lines — "30 STICKS" then "Burn Time 15 min" (exact wording on every box).
PRINT REALISM (critical): typography is physically printed on matte coated paperboard via offset litho — ink slightly absorbed into fiber, warm dark gray (not pure digital black), follows each face perspective plane, subtle paper grain and micro-indent visible through letters; condensation droplets sit ON TOP of print with their own highlights/shadows; NEVER floating overlay, NEVER Photoshop text layer look.`;

/** Layer stack (bottom → top) — Fruity Collection banner. */
export const HERO_SLIDE_01_LAYERS = [
  "warm pink tabletop + soft pink bokeh left third",
  "dense ice bed under product row",
  "five parallel 15cm cartons (same hero proportions)",
  "condensation on every face",
  "whole peach behind row left",
  "horizontal lime slice left of pink box",
  "blueberries in gap green↔purple",
  "orange segments near yellow/coral",
  "pink grapefruit wedge bottom-right",
  "real afternoon sun upper-right + ice caustics",
  "printed labels (ink on paperboard, not overlay)",
] as const;

export const HERO_SLIDE_01_SCENE = `Quiet Ash FRUITY COLLECTION banner — match INS reference photography EXACTLY: neat parallel box row, real sunlight, printed packaging labels. Premium chilled summer campaign, photoreal editorial.

CANVAS: 1920×1080. LEFT 36–40% empty warm pink surface only — soft bubble/frost texture, out-of-focus, NO text, NO button (site overlays copy).

CAMERA (match reference viewport exactly):
35mm lens, elevated ~42–48° from table, positioned slightly right of center, framing matches INS fruity collection reference — product cluster fills right 58% of frame, left 38% soft pink blur for site copy overlay.
Shows all five front faces with readable top branding; gentle perspective: near box slightly larger, far box slightly smaller; shallow DOF on far ice only; NOT straight-on catalog, NOT 90° top-down.

${QA_MOOD_INCENSE_CARTON}

BOX ROW (match reference — natural fanned still life, NOT rigid grid):
Exactly FIVE cartons, same slim 15cm pack size, arranged in ONE casual diagonal group lower-left → upper-right like reference photo.
Slight fan: each box ~3–5° different yaw, gentle overlap at edges, small uneven ice gaps — organic INS styling, NOT perfectly parallel rulers, NOT military alignment.
CRITICAL — brand header must survive web crop:
Every box front face to camera; "QUIET ASH" bold + "INCENSE" small printed at TOP of every pack — fully inside frame with 10–12% empty margin above tallest box (never clip brand off top edge).
Camera sees complete label: QUIET ASH → INCENSE → scent name → notes → 30 STICKS → Burn Time 15 min on all five.
Product cluster placed slightly LOWER in frame (vertical center ~58%) so site hero crop still shows all five brand headers.

FRAME PLACEMENT: product cluster center ~68% from left edge, vertical center ~54%; row spans ~38%–92% of frame width; do not shrink boxes — each carton height ≈ 42–48% of frame height in the cluster.

BOX ORDER left→right:
1 blush pink — PEACH ORCHARD — Peach · Apricot · Vanilla
2 mint — CITRUS GROVE — Lemon · Bergamot · Green Tea
3 lavender — BERRY BLISS — Berry · Blackcurrant · Blueberry
4 mango yellow — MANGO BALANCE — Mango · Lychee · Vanilla
5 coral — PINK GRAPEFRUIT — Grapefruit · Orange · Lychee
All: QUIET ASH (never ASS) + INCENSE + 30 STICKS + Burn Time 15 min — same label grid on every carton; printed sans-serif aligned to each box face perspective, equal margins, centered blocks.

ICE: dense irregular clear cubes forming bed under entire row; extra cubes scattered lower-right; wet pink surface, specular highlights, puddle reflections.

FRUIT (exact positions):
- Whole fuzzy peach with leaf, behind and slightly above box 1–2 junction (upper-left of cluster).
- One horizontal lime cross-section disc, left of box 1 on ice (not vertical wedge).
- 4–6 blueberries in the narrow gap between box 2 and 3.
- Small orange citrus segments / sea-buckthorn cluster between box 4 and 5 lower area.
- Large pink grapefruit wedge, cut face toward camera, bottom-right corner overlapping ice.

LIGHT (real sun — match reference):
Strong natural afternoon sunlight from UPPER RIGHT (~2 o'clock), warm 5200–5600K; visible directional shadows falling to lower-left; bright specular highlights on ice facets and water droplets; subtle caustic light patterns through ice; NOT flat studio softbox, NOT overcast diffuse, NOT CGI HDR glow.

FORBIDDEN: left headline/UI, floating digital text overlay, misaligned crooked box row, uneven box spacing, wide short boxes, fan spread, flat lighting, wrong brand spelling, 20 sticks, extra sixth box, zen props.`;

export const heroSlide01Prompt = buildImagePrompt(
  HERO_SLIDE_01_SCENE,
  "afternoon",
);

/** Fruity Collection banner — shot-lock (approved 2026-05). Do not replace without explicit approval. */
export const HERO_SLIDE_01_OUTPUT = {
  publicPath: "/images/generated/mood-hero-fruity-collection-lock-v6.png",
  assetBasename: "mood-hero-fruity-collection-lock-v6.png",
  width: 1920,
  height: 1080,
} as const;

/** Slide 03 — Sleep / dusk calm (INS mood hero series; replaces legacy cinematic). */
export const HERO_SLIDE_03_SCENE = `Mood Incense homepage hero still life — same campaign series as Citrus Reset slide.
Canvas: wide landscape 1920×1080, left ~55% clean negative space for typography overlay (no text in image).

TIME: 4pm warm window light from upper left — golden soft side light, same exposure and shadow length as citrus hero, NOT cool morning, NOT dark cinematic, NOT scholar desk.

SURFACE: warm ivory linen on pale cream marble, bottom third; soft organic folds; tactile stone.

BACKGROUND: soft warm cream wall, subtle gradient, blurred botanical leaf shadows upper left, gentle light bloom.

MAIN PRODUCT (center-right):
Horizontal matte lilac-lavender mood incense carton, same pack proportion as citrus slide (~460×120), rotated about -6 degrees.
Pack reads minimal premium: "MOON SLEEP" mood incense, short sticks — crisp print on box only.

PURPLE CRYSTAL HOLDER (right of box):
Translucent raw amethyst crystal chunk, same scale family as green crystal on slide 01.
One thin brown incense stick, glowing tip, delicate S-curve smoke up-right.

ATMOSPHERE: floating dust motes, soft film grain, shallow depth of field, 50mm editorial lifestyle.
INS soft-living emotional incense — young minimal, NOT zen temple, NOT dark luxury, NOT calligraphy desk.

FORBIDDEN: UI, nav, watermark, pure black BG, vertical box, lemons (reserved for slide 01), brown scholar props, blue cold cast.`;

export const heroSlide03Prompt = buildImagePrompt(
  HERO_SLIDE_03_SCENE,
  "afternoon",
);

export const HERO_SLIDE_03_OUTPUT = {
  publicPath: "/images/generated/mood-hero-slide-03-sleep.png",
  assetBasename: "mood-hero-slide-03-sleep.png",
} as const;

/** Primary homepage hero — INS mockup shot-lock (match reference frame exactly). */
export const HERO_V5_HOME_SCENE = `Homepage hero photography ONLY — replicate Quiet Ash INS mockup reference frame. NO website text, NO nav, NO logos in pixels, NO UI badges.

CANVAS: 1920×1080 wide banner. LEFT 38–42% soft negative space (cream wall + blurred bed linen) for site typography overlay.

CAMERA: 50mm, eye-level, medium-wide lifestyle shot, slight downward angle toward tabletop; shallow depth of field — razor sharp foreground still life, woman and room softly blurred. Warm golden-hour window light from RIGHT, long soft shadows leftward, film grain.

WOMAN (match reference position): seated on BED mid-left frame, FULL back to camera (not ¾ face), slim delicate build, dark hair loose bun, thin-strapped cream/beige camisole; shows back + right shoulder line; face completely hidden; she sits BEHIND table, medium distance — not tiny, not dominating frame.

FOREGROUND TABLE (lower half, right of center): warm light WHITE MARBLE tabletop — subtle cream/grey veining, matte stone surface (NOT wood). LEFT of box: single thin incense stick in TINY thin flat translucent crystal chip holder — very small, low profile, thinner than mockup-lock v1. Stick shows SOFT gradual transition from charred tip to natural wood body (no harsh cut line, realistic slow burn). CENTER-RIGHT: tall slim cream/white upright carton 15cm scale, ~10° yaw, NOT leaning; print "QUIET ASH" + "INCENSE", "SANDALWOOD MINT", "30 STICKS | BURN TIME: 50 MINS" (must say 30 not 20). RIGHT: glass vase messy dried white baby's breath. BOTTOM-LEFT: blurred baby's breath foreground frame.

MOOD: tender loneliness, quiet luxury, documentary apartment, v6/v10 warmth.

FORBIDDEN: face visible, giant crystal slab, tilted falling box, centered catalog symmetry, pure white void, website chrome, marble tulip table unless matching reference.`;

export const heroV5HomePrompt = buildConstitutionImagePrompt({
  scene: HERO_V5_HOME_SCENE,
  time: "afternoon",
  season: "summer",
  lens: "hero",
});

export const HERO_V5_HOME_OUTPUT = {
  publicPath: "/images/generated/mood-hero-ins-mockup-lock-v2.png",
  assetBasename: "mood-hero-ins-mockup-lock-v2.png",
  width: 1920,
  height: 1080,
} as const;
