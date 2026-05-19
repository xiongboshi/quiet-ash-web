# QUIET ASH — Brand Direction (定调)

> **Status:** Canonical for UI, marketing site, and Gen-Z mood-commerce experience.  
> **Supersedes** the editorial / scholar-incense homepage tone. Object ritual photography may still use [QUIET-ASH-VISUAL-BIBLE.md](./QUIET-ASH-VISUAL-BIBLE.md) for craft SKUs until mood SKU art is ready.  
> **Reference mockup:** `assets/…/0618ad8554cb52cb87c27739fe64ebab-….png` (Mood Incense homepage).

---

## 1. Brand essence

We are building a **modern emotional incense** brand for young people.

This is **NOT** a traditional oriental incense brand.

| Axis | Direction |
|------|-----------|
| Category | Modern emotional incense |
| Aesthetic | Soft living |
| Merchandising | Sold by **MOOD**, not by material |
| Feeling | Calming · addictive scroll · emotionally healing · Pinterest / screenshot friendly |

**One-line:** A soft emotional space for modern young people.

---

## 2. What we are / are not

### We are

- Colorful minimalism  
- Calming mood objects  
- Instagram / Pinterest editorial  
- Gen Z emotional lifestyle  
- Aesthetic, fast-moving lifestyle product  

### We are not

- Corporate  
- Tech startup UI  
- Overly minimal black-and-white  
- Traditional ecommerce density  
- Dark zen  
- Heavy oriental / Chinese incense shop  
- Old luxury  
- Brown / black heavy palette  

---

## 3. Feeling references (blend, do not copy)

- Glossier  
- Tamburins  
- Apple minimalism  
- Aesop (younger)  
- Pinterest aesthetic  
- Soft luxury  
- Emotional wellness  

**Site feeling:** airy · calming · visual-first · highly editorial · emotionally immersive · clean but artistic  

**Premium but approachable** — luxury as *emotional aesthetic*, not traditional heritage luxury.

---

## 4. Design priority (strict order)

1. Visual emotion  
2. Brand atmosphere  
3. Product desire  
4. Simplicity  
5. Conversion  

Homepage prioritizes:

- Emotional visuals over text  
- Product atmosphere over information  
- Modern editorial layout  

---

## 5. Core visual language

| Element | Rule |
|---------|------|
| Backgrounds | Creamy — warm white, cream, soft beige |
| Accents | Pastel emotional colors (see §6) |
| Space | Large whitespace, oversized section padding |
| Shadows | Soft only — no harsh contrast |
| Photography | Soft natural light, pastel props, emotional objects, minimal compositions, cinematic soft shadows |
| Type | Clean editorial sans — Inter primary |
| Motion | Fade-in, slow hover scale, smooth transitions, subtle parallax |

**Gradients:** subtle only — never loud or tech-gradient.

---

## 6. Brand colors

### Base

| Token | Role | Hex (start) |
|-------|------|-------------|
| `--mood-bg` | Page ground | `#FAF8F4` |
| `--mood-cream` | Section wash | `#F5F1EA` |
| `--mood-beige` | Card alt | `#EDE8DF` |
| `--mood-ink` | Body text | `#1C1C1C` |
| `--mood-ink-soft` | Secondary | `#5C5C5C` |

### Mood accents (emotional)

| Mood | Token | Hex (start) |
|------|-------|-------------|
| Calm | `--mood-calm` | `#C8D5C4` |
| Energy | `--mood-energy` | `#F4E4A6` |
| Sleep | `--mood-sleep` | `#D8D0E8` |
| Focus | `--mood-focus` | `#EAD4CE` |
| Rainy Day | `--mood-rain` | `#C5D4E3` |
| Sunday Reset | `--mood-reset` | `#E8E4DC` |

Code: `styles/mood-tokens.css` · `data/brand-moods.ts`

---

## 7. UI system rules

### Layout

- Oversized whitespace  
- Grid-based clean layout  
- Minimal borders  
- Soft shadows only  
- No harsh contrast  

### Buttons

- Rounded corners (`--mood-radius-btn`)  
- Soft hover transitions (`--mood-motion-hover`)  
- Premium padding  
- Minimal label text  

### Cards

- Floating feeling (soft shadow + lift on hover)  
- Large product / mood imagery  
- Clean typography  
- Soft pastel backgrounds per mood  

### Animations

- Fade in on enter  
- Slow hover scaling (~1.02–1.03)  
- Smooth transitions (400–600ms ease)  
- Subtle parallax on hero only — never gimmicky  

---

## 8. Typography

| Use | Font |
|-----|------|
| UI / body | **Inter** (`--font-sans`) |
| Display / hero (optional) | Light serif or Inter tight tracking — avoid heavy Cormorant ritual tone on mood pages |

Style: clean editorial sans-serif · generous letter-spacing on labels · short lines.

---

## 9. Website structure (homepage)

Execute in this order:

1. **Large emotional hero** — lifestyle product, one CTA  
2. **Mood-based category cards** — “Choose your mood”  
3. **Best sellers** — 3-up product row  
4. **Lifestyle emotional moments** — “Made for your moments”  
5. **Minimal brand philosophy** — short story + CTA  
6. **Instagram / Pinterest visual grid** — screenshot-friendly  

### Hero copy (default)

- Title: *Tiny rituals for soft living.*  
- CTA: *Shop the moods*  

### Mood taxonomy (merchandising)

| Slug | Label | Short line |
|------|-------|------------|
| `calm` | Calm | For when the room needs to slow down |
| `energy` | Energy | A bright start without noise |
| `sleep` | Sleep | Soft close to the day |
| `focus` | Focus | Clear desk, clear head |
| `rainy-day` | Rainy Day | Grey light, warm cup |
| `sunday-reset` | Sunday Reset | Unhurried reset |

Products map to moods in catalog — not to “agarwood” or “bronze stand” on the homepage.

---

## 10. Photography (mood commerce)

For **mood SKUs** and **homepage**:

- Soft natural lighting  
- Pastel props (citrus, crystals, linen, rain window — per mood)  
- Emotional objects, minimal composition  
- Cinematic **soft** shadows  
- Screenshot-friendly framing  

**Avoid** on mood marketing: walnut scholar desk, dark void hero, heavy smoke drama, heritage incense shop cues.

For **craft object pages** (`/objects/[slug]`): transitional — see Visual Bible until mood packshots exist.

---

## 11. Implementation map

| Area | Location |
|------|----------|
| Tokens | `styles/mood-tokens.css` |
| Mood data | `data/brand-moods.ts`, `data/brand-home.ts` |
| Homepage UI | `components/mood/*`, `app/page.tsx` |
| Agents | `AGENTS.md` → this doc for UI/marketing |

### Checklist before shipping UI

- [ ] Cream / pastel base — no brown-heavy editorial bands on homepage  
- [ ] Whitespace between sections ≥ mockup rhythm  
- [ ] Mood cards readable at mobile 2-col / desktop 5-col  
- [ ] Hover: soft scale + shadow only  
- [ ] No dense ecommerce grids on homepage  
- [ ] CTA rounded, minimal copy  
- [ ] Pinterest-width screenshots look intentional  

---

## 12. Changelog

- **2026-05** — Initial brand direction (mood incense, Gen Z soft living). Homepage v2 implementation started.
