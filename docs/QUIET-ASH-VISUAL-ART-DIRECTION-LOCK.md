# QUIET ASH — Visual Art Direction Lock v1

> **Canonical** for homepage visual recreation. Structure follows [QUIET-ASH-BRAND-DIRECTION.md](./QUIET-ASH-BRAND-DIRECTION.md); **this document wins** on composition, atmosphere, photography hierarchy, and spacing.

**Goal:** Premium emotional ecommerce art direction — visual-first, cinematic, airy, Pinterest-worthy. **Do not** reinterpret as generic SaaS / Shopify grid.

**Reference:** Mood Incense homepage mockup (`assets/…/0618ad8554cb52cb…png`).

---

## 1. Global visual language

Feel: soft daylight in a calm room · quiet Sunday morning · emotionally healing · modern incense for young people.

Avoid: generic ecommerce · SaaS spacing · hard shadows · dark luxury · dense UI · sterile minimalism.

Feel: tactile · soft · organic · emotionally warm · slightly dreamy.

---

## 2. Hero (most important)

**Composition (desktop):**

| Left ~55–60% | Right ~40–45% |
|--------------|----------------|
| Large emotional typography · oversized whitespace · minimal copy · premium CTA spacing | Single **still life** — product + smoke + props · warm daylight shadows · **not** catalog packshot |

Still life rules: asymmetrical balance · cinematic negative space · depth · ~40% visual width on desktop · editorial / lifestyle-premium.

---

## 3. Product photography (marketing)

- **Light:** warm daylight · soft shadows · soft contrast  
- **Lens feel:** 50mm editorial · shallow depth · tactile surfaces  
- **BG:** cream · soft beige · pastel gradients · subtle texture  
- **Props:** fruit · stone · linen · ceramic · crystal · blurred plant shadows  

Avoid: black BG · hard luxury · glossy CGI · Taobao renders.

---

## 4. Mood cards

Mini **emotional posters** — not feature cards. Collectible · shareable · visual-first. Oversized breathing room · soft gradients · object dominates · type secondary. Like modern fragrance campaigns.

---

## 5. Best sellers

Not standard Shopify grid. Editorial · premium · image-led. Image **~75%** card height. Hierarchy: image → name → mood → scent notes → price. Hover zoom · soft movement · luxury spacing. No heavy borders.

---

## 6. Colors

| Token | Hex |
|-------|-----|
| Background | `#FAF8F4` |
| Cream | `#F5F1EA` |
| Ink | `#1C1C1C` |
| Moods | Sage · Citrus · Lavender · Rain Blue · Blush — **soft saturation only** |

---

## 7. Typography

Editorial · premium · soft · understated. Hero: elegant · airy · light–medium weight · generous line-height · slight negative tracking on large type. Avoid aggressive uppercase blocks.

---

## 8. Spacing

Luxury = **space**. Increase whitespace aggressively. Slow, calm scroll — never dense ecommerce pacing.

---

## 9. Mobile

Premium Pinterest editorial — **do not** compress spacing. Large imagery · generous whitespace · immersive pacing.

---

## 10. Rule

**Visual recreation** — preserve composition, atmosphere, photography hierarchy, whitespace rhythm, cinematic softness. Emotionally addictive scroll.

**Implementation:** `styles/mood-home.css` · `components/mood/mood-home.tsx` · `data/brand-moods.ts`
