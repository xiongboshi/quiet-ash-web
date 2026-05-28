import type { TimeMode } from "@/data/visual-prompts";
import { buildImagePrompt } from "@/data/visual-prompts";

/** Shared Morning Quiet surface — all product heroes use the same family */
export const QA_PRODUCT_SURFACE = `Unified Quiet Ash product surface (same for every hero):
Cool grey-beige fine linen-paper texture, matte, seamless; soft cool white diffused light from above-left; generous negative space; low contrast; airy — one collection shoot, not six different sets.`;

/** Mandatory product-page light — see docs/QUIET-ASH-VISUAL-BIBLE.md §商品 */
export const QA_PRODUCT_MORNING_QUIET = `Product / object photography — Morning Quiet 晨光 (required on every product image):
• 冷白柔光 — cool soft white light only; no warm golden afternoon, no peach terracotta, no evening amber.
• 亚麻透光 — linen curtain, linen cloth, or sheer panel with soft translucency (hero: implied in surface texture).
• 空气感 — breathable negative space, calm open frame.
• 低对比 — gentle shadows, soft highlight roll-off; no harsh blacks or blown whites.`;

/** Hero / catalog / objects grid — simple & direct */
export const QA_PRODUCT_HERO_SIMPLE = `Hero image — 简单直接 (catalog + /objects grid):
• ONE object only — no hands, no busy desk, no fruit or flower props, no secondary products.
• Reads in one glance: slight 3/4 or gentle top-down; object occupies ~40–55% of frame; rest is empty surface.
• Same Morning Quiet surface + light as every other product hero (unified line look).`;

export type ProductImageSet = {
  slug: string;
  hero: { scene: string };
  gallery: { scene: string }[];
  narrative: { scene: string };
  atmosphere: { scene: string };
};

export const productImagePrompts: ProductImageSet[] = [
  {
    slug: "brass-incense-stand",
    hero: {
      scene:
        "SIMPLE HERO: single small bronze incense stand with one short thin stick incense, delicate wisp of smoke. Alone on unified linen-paper surface, slight 3/4 angle, large empty space.",
    },
    gallery: [
      {
        scene:
          "Close three-quarter bronze stand, ash in dish, cool morning linen light, low contrast.",
      },
      {
        scene:
          "Stand beside squared paper on walnut desk, thin smoke, cool white through linen curtain.",
      },
      {
        scene:
          "Stand on oak grain desk, hands just left frame, airy morning room.",
      },
      {
        scene:
          "Macro patina and coal, cool soft highlights, not shiny CGI metal.",
      },
    ],
    narrative: {
      scene:
        "Thin smoke from bronze stand, wide negative space, linen window glow, morning quiet.",
    },
    atmosphere: {
      scene:
        "Desk edge with stand and paper, cool soft morning light, breathable air.",
    },
  },
  {
    slug: "small-agarwood-box",
    hero: {
      scene:
        "SIMPLE HERO: single closed small walnut agarwood keeper box, tight grain, alone on unified cool linen-paper surface, slight angle, generous negative space.",
    },
    gallery: [
      {
        scene: "Lid slightly open, dark resin inside, finger scale, linen translucency, low contrast.",
      },
      {
        scene: "Resin pieces on linen beside closed box, cool morning air.",
      },
      {
        scene: "Box on shelf, sheer linen curtain glowing cool-white at window.",
      },
      {
        scene: "Top-down box and linen corner, airy morning editorial.",
      },
    ],
    narrative: {
      scene: "Hands opening walnut keeper, resin inside, cool morning linen light.",
    },
    atmosphere: {
      scene: "Closed box on desk, cool white window, open airy room, low contrast.",
    },
  },
  {
    slug: "wood-tray",
    hero: {
      scene:
        "SIMPLE HERO: single empty charcoal oak desk tray, oiled grain visible, alone on unified cool linen-paper surface, gentle top-down or slight angle, large empty space.",
    },
    gallery: [
      {
        scene: "Tray showing oak grain, linen curtain cool-white glow, low contrast.",
      },
      {
        scene: "Tray with pencil and incense papers and brass stand, morning airy.",
      },
      {
        scene: "Tray with cooled ash and cup, still cool morning not warm evening.",
      },
      {
        scene: "Angled tray edge, shallow depth, real apartment morning.",
      },
    ],
    narrative: {
      scene: "Tray edge, hand near stand, grain in cool linen morning light.",
    },
    atmosphere: {
      scene: "Tray with writing tools, translucent linen at window, morning quiet.",
    },
  },
  {
    slug: "paper-incense-sleeve",
    hero: {
      scene:
        "SIMPLE HERO: single tall narrow matte charcoal stoneware vase, empty, alone on unified cool linen-paper surface, slight 3/4 angle, NOT a tea bowl, generous negative space.",
    },
    gallery: [
      {
        scene: "Three-quarter vase, matte glaze, cool morning side light through linen.",
      },
      {
        scene: "Vase in morning corner, soft wall, negative space, low contrast.",
      },
      {
        scene: "Vase beside brass stand on tray, airy morning composition.",
      },
      {
        scene: "Close glaze and foot, cool soft highlights.",
      },
    ],
    narrative: {
      scene: "Single dry stem in vase, morning silhouette, cool white air.",
    },
    atmosphere: {
      scene: "Vase on shelf, plaster wall, linen window glow.",
    },
  },
  {
    slug: "ceramic-tea-cup",
    hero: {
      scene:
        "SIMPLE HERO: single stone-glaze tea bowl, handmade rim variation, alone on unified cool linen-paper surface, no steam required, slight angle, large empty space.",
    },
    gallery: [
      {
        scene: "Palms warming bowl, cool morning linen light, low contrast.",
      },
      {
        scene: "Bowl by window, sheer linen glowing, soft steam.",
      },
      {
        scene: "Pouring tea into bowl, cool white morning light.",
      },
      {
        scene: "Bowl with linen crease on tray, used not new.",
      },
    ],
    narrative: {
      scene: "Hands holding bowl, faint steam, kiln variation, cool linen light.",
    },
    atmosphere: {
      scene: "Bowl on tray, morning stillness, breathable negative space.",
    },
  },
  {
    slug: "linen-cloth",
    hero: {
      scene:
        "SIMPLE HERO: single folded natural linen tea cloth, honest creases, alone on unified cool linen-paper surface, gentle top-down, large empty space.",
    },
    gallery: [
      {
        scene: "Linen fiber close-up, backlit translucency, low contrast morning.",
      },
      {
        scene: "Cloth under bowl on tray, cool morning through linen panel.",
      },
      {
        scene: "Cloth on tray edge with thin incense smoke above.",
      },
      {
        scene: "Top-down folded linen on oak, soft shadow, airy.",
      },
    ],
    narrative: {
      scene: "Light through linen weave on tray, cool soft morning tones.",
    },
    atmosphere: {
      scene: "Tray with linen, blurred incense thread, window linen glow.",
    },
  },
];

export function productImagePath(
  slug: string,
  file: "hero" | "g1" | "g2" | "g3" | "g4" | "narrative" | "atmosphere",
): string {
  const map: Record<typeof file, string> = {
    hero: "hero.webp",
    g1: "gallery-01.webp",
    g2: "gallery-02.webp",
    g3: "gallery-03.webp",
    g4: "gallery-04.webp",
    narrative: "narrative.webp",
    atmosphere: "atmosphere.webp",
  };
  return `/images/generated/products/${slug}/${map[file]}`;
}

export function productGalleryPaths(slug: string): string[] {
  return [
    productImagePath(slug, "hero"),
    productImagePath(slug, "g1"),
    productImagePath(slug, "g2"),
    productImagePath(slug, "g3"),
    productImagePath(slug, "g4"),
  ];
}

export function fullProductPrompt(entry: { scene: string; time?: TimeMode }): string {
  return [
    buildImagePrompt(entry.scene, "morning"),
    QA_PRODUCT_MORNING_QUIET,
  ].join("\n\n");
}

export function fullProductHeroPrompt(entry: { scene: string }): string {
  return [
    buildImagePrompt(entry.scene, "morning"),
    QA_PRODUCT_MORNING_QUIET,
    QA_PRODUCT_SURFACE,
    QA_PRODUCT_HERO_SIMPLE,
  ].join("\n\n");
}
