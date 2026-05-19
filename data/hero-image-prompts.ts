/**
 * Mood homepage hero — slide 01 (Citrus Reset campaign).
 * Compositing spec + full generator prompt. See VISUAL-ART-DIRECTION-LOCK §2.
 */

import { buildImagePrompt } from "@/data/visual-prompts";

/** Canvas reference (desktop artboard). */
export const HERO_SLIDE_01_CANVAS = {
  width: 1920,
  height: 1080,
} as const;

/** Layer stack (bottom → top). */
export const HERO_SLIDE_01_LAYERS = [
  "background gradient",
  "light bloom / halo",
  "marble + warm ivory fabric (hero bottom)",
  "floating whole lemons with dew (3–5, mixed scale)",
  "main product box (horizontal yellow mood incense pack)",
  "green raw crystal incense holder",
  "lit incense stick",
  "S-curve smoke drifting up-right",
  "floating dust particles",
  "overall soft film grain",
] as const;

export const HERO_SLIDE_01_SCENE = `Mood Incense homepage hero still life — luxury fragrance / Corey Ashford–style campaign photography.
Canvas: wide landscape 1920×1080, left ~55% clean negative space for typography overlay (no text in image).

TIME: 4pm natural window light from upper left — warm golden side light, NOT studio white, NOT morning cool white. Long soft shadows to the right.

SURFACE (bottom third): warm ivory linen cloth on pale cream marble slab; marble fills hero bottom area; tactile stone pores; fabric folds soft and organic.

BACKGROUND: soft warm cream wall with subtle warm gradient; blurred botanical leaf shadows on wall (upper left); gentle light bloom near light source.

MAIN PRODUCT (center-right, must read clearly):
Horizontal matte yellow mood incense carton ~460×120px proportion, rotated about -8 degrees (not axis-aligned).
Pack reads as premium minimal: "CITRUS RESET" mood incense, short sticks — typography on box only, crisp print.
Strong top-left sun; long cast shadow; shadow quality like box-shadow 0 55px 90px rgba(0,0,0,0.16) — soft elongated grounding shadow.

GREEN CRYSTAL HOLDER (second focal, right of box):
Translucent raw green crystal / mineral chunk ~180×220px proportion, natural irregular facets.
Single brown incense stick inserted; tip gently glowing; delicate incense smoke.

SMOKE (critical):
Visible wisp with opacity ~0.72, slight blur ~0.3px feel; S-curved path drifting toward upper right — NOT straight up.

FLOATING LEMONS (dopamine accents):
3–5 whole fresh yellow lemons with dew drops — NOT sliced; mixed sizes (small/medium/large feel: ~90px, ~120px, ~160px equivalent in frame).
Placed upper right, lower right, and mid-left near still life; slight levitation / editorial float acceptable; natural not cartoon.

ATMOSPHERE:
Floating dust motes in sun beam; soft film grain; subtle light bloom; high-end perfume ad finish.
Asymmetrical editorial balance; shallow depth of field; 50mm lifestyle lens.

FORBIDDEN in frame: UI, nav, logos, buttons, watermark, pure white/black BG, cut lemon halves, vertical product box, blue/green color cast on skin tones, CGI showroom, zen temple props.`;

export const heroSlide01Prompt = buildImagePrompt(
  HERO_SLIDE_01_SCENE,
  "afternoon",
);

export const HERO_SLIDE_01_OUTPUT = {
  /** Install path after generation */
  publicPath: "/images/generated/mood-hero-slide-01-citrus.png",
  /** Source drop (Cursor assets) */
  assetBasename: "mood-hero-slide-01-citrus.png",
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
