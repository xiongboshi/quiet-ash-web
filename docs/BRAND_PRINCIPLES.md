# Quiet Ash — Brand Principles (Governance)

**Status:** Established. **Purpose:** State what Quiet Ash **is** and what it must **never** become — so product, design, engineering, photography, and marketing stay aligned for years.

---

## 1. What Quiet Ash is

- **Image-first storytelling** — atmosphere, darkness, and material truth lead; type supports.  
- **Commerce through atmosphere** — objects and rituals are **desired** because the world feels believable, not because funnels nag.  
- **Luxury through restraint** — fewer elements, quieter type, more silence; “expensive” reads as **discipline**, not decoration.  
- **Editorial pacing** — sections breathe; asymmetry and optical tuning are **features**, not bugs.  
- **Eastern ritual identity** — incense, tea, linen, dusk rooms, scholar rhythm — **specific**, not generic “wellness.”  
- **Slow living** as **cultural** position — time, craft, room, smoke, and stillness — not as a productivity metaphor.

---

## 2. What Quiet Ash must never become

- A **SaaS marketing** site (gradient heroes, social proof carousels, chat bubbles, feature grids).  
- A **template** “luxury e-commerce” skin (card shadows everywhere, rounded everything, loud sale language).  
- A **traditional blog** optimized for scroll velocity and ad slots.  
- A **stock-photo** lifestyle brand (smiling models, bright kitchens, neon “mindfulness”).  
- A **performance theater** of motion — if animation is noticed, it is **too much** (see `docs/MOTION_SYSTEM.md`).  
- A **SKU-first** catalog where narrative exists only as accessory copy around buy buttons.

---

## 3. Core beliefs

### 3.1 Image-first storytelling

Photography and darkness do the persuasion. Copy **narrows** meaning; it does not **scream** value propositions.

**Governance:** `docs/ART_DIRECTION.md`

### 3.2 Commerce through atmosphere

We sell objects **inside** rooms that already feel inhabited. The buyer should feel they are **entering a practice**, not completing a checkout exercise.

**Governance:** `docs/CONTENT_ARCHITECTURE.md` — rituals + `relatedProducts`, featured objects, no card chrome on homepage study.

### 3.3 Luxury through restraint

Luxury here is **spatial and tonal** — margins, ivory paper, near-black bands, whispering links — not gold foil CSS.

**Governance:** `docs/DESIGN_SYSTEM.md` — forbidden UI patterns.

### 3.4 Editorial pacing

The homepage is a **sequence** (hero → ritual → objects → dark rail → quote → journal → footer), not a pile of interchangeable widgets.

**Governance:** `app/page.tsx` + `DESIGN_SYSTEM.md` section pacing.

### 3.5 Anti-SaaS principles

No: feature matrices, “integrations,” chat-driven onboarding, glassmorphism dashboards, or “scale your ritual stack” language.

### 3.6 Anti-template philosophy

If a section could be swapped onto another brand without changing copy, **it is wrong for Quiet Ash**.

---

## 4. Voice (high level)

- **Declarative, not hype.**  
- **Concrete nouns** — bowl, linen, ember, window, tray — over abstract virtues.  
- **Lower temperature** — fewer exclamation marks; fewer superlatives.

---

## 5. Relationship between documents

| Document | Role |
|----------|------|
| `DESIGN_SYSTEM.md` | Tokens, type, spacing, layout law |
| `ART_DIRECTION.md` | Photography and imagery law |
| `MOTION_SYSTEM.md` | Motion and interaction law |
| `CONTENT_ARCHITECTURE.md` | MDX / JSON / homepage data flow |
| `BRAND_PRINCIPLES.md` | **Why** — this file |

---

## 6. Decision test (use in PR review)

Ask:

1. Does this change make the site feel **quieter** and more **cinematic**?  
2. Would this survive on a **printed** luxury editorial spread?  
3. If we removed the logo, would it still feel **East-Asian ritual atmosphere**, not generic premium?

If **no** to any: **revise or reject**.

---

## 7. Change control

Brand-level shifts (new pillar, new tone, new color story) require **explicit** stakeholder approval and coordinated updates to **all five** governance docs + tokens.

Incremental improvements must **cite** which principle they serve — otherwise treat as **out of scope**.

---

## 8. Final line

Quiet Ash is a **still room** you can return to.

Build **silence** first.
