# Quiet Ash — Art Direction (Photography & Imagery)

**Status:** Established. **Purpose:** All imagery must feel like **still frames from quiet cinema** — not e-commerce, not stock lifestyle, not “premium SaaS.”

**Companion:** [`ATMOSPHERE_AND_VISUAL_DNA.md`](./ATMOSPHERE_AND_VISUAL_DNA.md) — full-site emotional tone, typography, layout, motion, commerce, and interaction philosophy (this file remains **photography- and crop-first**).

---

## 1. Emotional target

Imagery should feel:

- **Low light** — natural falloff, readable shadow detail  
- **Warm darkness** — charcoal, smoked brown, muted bronze  
- **Tactile** — linen, ceramic, wood, ash, paper  
- **Incense-forward** when the subject allows — smoke as **atmosphere**, not an effect layer  
- **Museum still life** — composed, slow, object-respecting  

---

## 2. Lighting rules

**Do**

- Use **side light**, window light, or single practical sources.  
- Let **deep blacks** hold in corners and negative space.  
- Keep highlights **soft** — no blown whites on “hero” frames.  

**Do not**

- High-key studio fills that flatten depth.  
- Even, shadowless “Amazon” product lighting.  
- Ring-light / influencer facial lighting patterns on objects.

---

## 3. Darkness balance & tonal compression

- **Compress** tonal range toward the **shadow side** — retain detail in midtones and **warm** highlights.  
- Dark bands (`#0b0b0b`) should feel **infinite** — frames can sit close; vignettes are **discouraged** unless they serve a specific print-like crop (homepage dark rail avoids heavy scrims on stills).  
- Hero field treatment (CSS `img.qa-hero-field-img`): **desaturated**, slightly **lower brightness**, mild **contrast** — plus **micro blur** (sub-pixel) only to reduce **digital sharpness**, never to look like a filter pack.

---

## 4. Grain philosophy

- **Grain is optional and minimal** — when used (e.g. hero image stack), it is **low opacity**, **overlay blend**, confined to the **photography stack**, not the global site chrome.  
- Grain must read as **film grain in shadow**, not noise on UI text.

---

## 5. Shadow philosophy

- Shadows describe **space and material**, not “elevation” for cards.  
- **No** drop shadows on homepage editorial “cards” — the object study grid is **not** a card system.  
- Prefer **ambient occlusion** in the photograph itself, not CSS shadows.

---

## 6. Framing & crop rules

- **Hero:** composition leaves **sacred negative space on the left** for typography; focal weight may sit slightly **right of center** (`object-position` tuned in `Hero.tsx`).  
- **Featured ritual:** **520px** tall frame — horizontal crop favors **still life** and table plane.  
- **Object grid:** **320px** height — editorial crop; objects may be partial; **mood over catalog completeness**.  
- **Dark rail:** **240px** — “contact sheet” fragments; **cinematic**, not uniform packshots.  
- **Journal:** **110 × 140** — quiet thumbnail, **not** a square tile grid.

---

## 7. Object styling & isolation

- Objects should feel **lived with** — cloth, tray, book, ember, steam — not floating on pure white.  
- **Isolation** through **darkness and focus**, not through cut-out white backgrounds.

---

## 8. Incense & smoke

- Smoke must be **wispy, legible, and delicate** — never a heavy smoke brush overlay.  
- Prefer **real** smoke in camera; post should **preserve** translucency, not thicken into white fog.

---

## 9. Texture direction

- Favor **real materials** in frame: grain of wood, paper fiber, ceramic glaze.  
- Digital texture overlays on UI are **discouraged** except the controlled hero grain noted above.

---

## 10. Explicit DO NOT USE

- Bright e-commerce lighting and **white seamless** backgrounds.  
- Glossy, hyper-reflective product photography.  
- **Oversharpening** and clarity sliders pushed for “pop.”  
- **High saturation** / teal-orange travel-grade grading.  
- **Stock-photo** compositions (yoga mat clichés, generic “wellness” hands, etc.).  
- Modern lifestyle branding clichés: lens flares, neon gradients, “founder story” stock smiles.  
- **Unsplash aesthetic** — random bright outdoor scenes unrelated to ritual atmosphere.

---

## 11. Correct vs incorrect (quick test)

| Incorrect | Correct |
|-----------|---------|
| Object centered on #fff with soft shadow card | Object in **context** — table, dusk, material field |
| 10/10 sharpness on every texture | **Slight** softness; smoke and shadow remain believable |
| Saturated wood and orange tea | **Muted** warmth; bronze/ivory/charcoal harmony |
| Same lighting formula for hero and footer | **Band-appropriate** darkness (hero vs rail vs journal) |

---

## 12. Implementation hooks

- Hero image class: **`qa-hero-field-img`** (`app/globals.css`).  
- Homepage object tiles: **`ProductCard` `homeGrid`** — no `qa-media-frame` chrome; subtle brightness/saturation on image only.  
- Dark rail: **`RitualCarousel` `visualMode="cinema"`** — darker frame background `#0a0a0a`, quieter image treatment in component.

---

## 13. Governance

New photography, 3D renders, or AI-generated assets **must pass** this checklist before merge:

1. Would this frame sit in a **quiet film** without apology?  
2. Is **darkness** doing as much work as light?  
3. Would a **museum curator** accept this print?

If any answer is “no,” **reject or regrade** — do not ship and “fix in CSS later.”
