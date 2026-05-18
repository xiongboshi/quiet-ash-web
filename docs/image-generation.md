# Quiet Ash — Image generation workflow

Read [QUIET-ASH-VISUAL-BIBLE.md](./QUIET-ASH-VISUAL-BIBLE.md) for brand rules.

## Prompt assembly

```
[BRAND BASE]

[SCENE — specific to this file]

[PHOTOGRAPHY RULES]

[NEGATIVE CONSTRAINTS]
```

Constants live in `data/visual-prompts.ts`. Per-ritual scenes in `data/ritual-image-prompts.ts`.

## Tools

Use the same four layers in Midjourney, Flux, Ideogram, Reve, GPT image, 即梦, 可灵, etc.  
Adjust syntax per tool; **do not** omit negatives or photo rules.

## Ritual images

1. Edit prompts in `data/ritual-image-prompts.ts` if needed.  
2. Generate PNG (landscape 3:2 or 4:3 editorial).  
3. Save to `public/images/generated/rituals/{slug}/` as `cover.png`, `step-01.png` … `step-04.png`.  
4. Ritual MDX already points at these paths — no path edit unless you add a fifth step.

## Checklist before shipping an image

- [ ] Brand base included  
- [ ] Time-of-day matches surface (see bible)  
- [ ] No black letterboxing / fake studio  
- [ ] Objects look used, not new  
- [ ] Proportions realistic at thumbnail size  
