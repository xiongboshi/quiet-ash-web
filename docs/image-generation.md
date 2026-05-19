# Quiet Ash — Image generation workflow

Read [QUIET-ASH-VISUAL-BIBLE.md](./QUIET-ASH-VISUAL-BIBLE.md) for brand rules.

## Prompt assembly

```
[BRAND BASE]

[SCENE — specific to this file]

[PHOTOGRAPHY RULES]

[NEGATIVE CONSTRAINTS]
```

Constants live in `data/visual-prompts.ts`. Per-ritual scenes in `data/ritual-image-prompts.ts`. Essay covers in `data/essay-image-prompts.ts`. Product sets in `data/product-image-prompts.ts`.

## Tools

Use the same four layers in Midjourney, Flux, Ideogram, Reve, GPT image, 即梦, 可灵, etc.  
Adjust syntax per tool; **do not** omit negatives or photo rules.

## Ritual images

1. Edit prompts in `data/ritual-image-prompts.ts` if needed.  
2. Generate PNG (landscape 3:2 or 4:3 editorial).  
3. Save to `public/images/generated/rituals/{slug}/` as `cover.png`, `step-01.png` … `step-04.png`.  
4. Ritual MDX already points at these paths — no path edit unless you add a fifth step.

## Product images

**All product / object images use Morning Quiet 晨光 only** (on top of brand base + photo rules + negatives):

| 晨光 | Prompt intent |
|------|----------------|
| 冷白柔光 | Cool soft white window light — not golden afternoon, not evening amber |
| 亚麻透光 | Linen curtain or cloth backlit with soft translucency |
| 空气感 | Breathable airy negative space |
| 低对比 | Gentle shadows, soft highlight roll-off |

Layers in `data/product-image-prompts.ts`:

- `QA_PRODUCT_MORNING_QUIET` — 晨光四要素（all product images）  
- `QA_PRODUCT_SURFACE` + `QA_PRODUCT_HERO_SIMPLE` — 统一台面 + 头图简单直接（hero only）  
- `fullProductHeroPrompt()` / `fullProductPrompt()` — both force `time: "morning"`

See also [QUIET-ASH-VISUAL-BIBLE.md](./QUIET-ASH-VISUAL-BIBLE.md) §商品.

1. Edit scenes in `data/product-image-prompts.ts` if needed.  
2. `npm run images:product-prompts` — print full prompts (optional slug).  
3. Generate PNG (portrait 4:5 editorial, 1600×2000 after install).  
4. Save sources as `~/.cursor/projects/d-quietash/assets/product-{slug}-{hero|gallery-01|…|narrative|atmosphere}.png`.  
5. `npm run images:products-install` — writes `public/images/generated/products/{slug}/`.  
6. Product JSON under `data/products/**` already references these paths.

## Checklist before shipping an image

- [ ] Brand base included  
- [ ] Time-of-day matches surface (see bible)  
- [ ] No black letterboxing / fake studio  
- [ ] Objects look used, not new  
- [ ] Proportions realistic at thumbnail size  
