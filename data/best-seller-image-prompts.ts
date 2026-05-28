/**
 * BEST SELLERS pack-shot prompts — locked frame to match lavender-field (cards 3–6).
 * Print: npx tsx scripts/print-best-seller-image-prompts.ts
 */

export const BEST_SELLER_FRAME_LOCK = `
LOCKED PRODUCT FRAME (all six scents must match):
Vertical 2:3 (681×1024). Same camera distance and angle.
Tall slim incense carton left of center; top edge of box at 18% from top of frame.
Box height occupies 52% of frame height. Same box width across all scents.
Single incense stick in small clear glass holder to the right of box; stick height matches reference set.
Thin white smoke curl from lit tip. Light stone surface; warm beige wall with soft leaf dapple shadows.
50mm lens, natural window light. No text changes to layout — only box color and props change per scent.
`.trim();

export const bestSellerImagePrompts = [
  {
    id: "citrus-grove",
    outfile: "public/images/generated/best-sellers/citrus-grove-v4.webp",
    prompt: `${BEST_SELLER_FRAME_LOCK}
Pale yellow matte carton. Props: yellow lemons (whole and half), white citrus blossoms, dark driftwood.
Scent: Citrus Grove — Lemon, Bergamot, Mandarin.`,
  },
  {
    id: "white-jasmine",
    outfile: "public/images/generated/best-sellers/white-jasmine-v2.webp",
    prompt: `${BEST_SELLER_FRAME_LOCK}
Pale sage green matte carton. Props: white jasmine sprays with green leaves, dark driftwood.
Scent: White Jasmine — Jasmine, White Floral, Green Leaves.`,
  },
] as const;
