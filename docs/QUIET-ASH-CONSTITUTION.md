# QUIET ASH — Constitution (Brand Universe · Living Memory Edition)

**Version:** 5.0  
**Status:** **SOLE CANON** — the only authoritative source for brand direction.  
**Audience:** Cursor agents, designers, photographers, copywriters, motion, AI image pipelines, commerce, and all future surfaces.

---

## Canon supremacy (read first)

### Quiet Ash Canon Rule

**v5.0 / this Constitution is the only canonical universe.**

All previous systems are **historical references only**. They **no longer define** brand direction or style priority:

| Historical (non-canonical) | Former role |
|--------------------------|-------------|
| `docs/IMAGE_PIPELINE.md` | Dark cinematic / museum still-life pipeline |
| `docs/QUIET-ASH-VISUAL-BIBLE.md` | Craft / scholar editorial photography |
| `docs/QUIET-ASH-VISUAL-ART-DIRECTION-LOCK.md` | Homepage mockup lock (layout reference only) |
| `docs/QUIET-ASH-BRAND-DIRECTION.md` | Gen-Z mood commerce UI brief |
| Pastel INS mood poster campaigns | SKU packshot series |
| “Not cinematic” / anti-Pinterest fragments in legacy docs | Superseded by unified realism below |

**Every** future decision — visual, prompt, motion, layout, copywriting, photography, product styling, Instagram, packaging, space design — **must inherit from this Living Memory System first.**

If a legacy doc conflicts with this Constitution, **this document wins.**

**Code hooks:** `data/constitution-prompts.ts` (prompt layers) · `AGENTS.md` (agent entry).

---

## I. Brand ontology (what Quiet Ash is)

Quiet Ash is **not** fundamentally an incense brand.

It is a **remembered emotional life**. Incense is only the **medium**.

The real product is:

- time  
- memory  
- light  
- silence  
- solitude  
- emotional atmosphere  

**Final truth:** We do not sell scent, product, or aesthetic. We sell **one person’s quiet living** as emotional memory — time, temperature, air, light, loneliness, and rhythm.

**User should feel:**

> “This world is real.”  
> “I want to live inside it.”

**Brand soul:** *温柔的孤独* — tender loneliness. Not loud, social, or performative happiness. One person, one space, one beam of light, a wisp of smoke, a span of quiet time.

**Persona:** A sensitive, quiet, aesthetic, slightly lonely young person who loves slow living and small details. All content reads like **their life documentary**.

---

## II. Anti-AI realism doctrine

Quiet Ash visuals **must never feel AI-perfect.**

AI defaults toward: perfect symmetry, ultra-sharp texture, hyper-clean surfaces, centered composition, wax skin, HDR contrast, catalog polish, “completed” frames.

Quiet Ash advances through **incompleteness**.

### Avoid

- Overly centered composition  
- Ultra-sharp textures / hyper-detail  
- Hyper-clean surfaces  
- Perfect symmetry  
- Artificial / wax skin  
- HDR contrast, god rays, floating highlights  
- Over-designed styling, luxury commercial polish  
- Catalog staging, showroom perfection  
- Obvious CGI, plastic materials  
- Text, logos, or UI baked into photographs  

### Prefer

- Breathing space, accidental framing  
- Soft focus, edge softness, slight defocus  
- Underexposure pockets, gentle exposure drift  
- Unfinished moments, emotional silence  
- Visible air, dust, humidity, smoke diffusion  
- Micro-imperfection: ash, water rings, wrinkles, fingerprints  
- Asymmetry, crop, occlusion, partial subjects  

**Camera imperfection (allowed):** light motion blur, lens flare, blocked foreground, half-focused edges, imperfect framing.

**Forbidden:** “perfect AI composition,” ultra-precise CGI layout.

Executable negatives: `data/constitution-prompts.ts` → `QA_ANTI_AI_NEGATIVE`.

---

## III. Apartment memory doctrine

Quiet Ash does **not** exist in multiple locations.

There is **only one apartment universe:** **Quiet Ash Apartment**.

The same recurring anchors must appear across months, seasons, and campaigns until users **subconsciously memorize the space**:

- One window (geometry and frame edge fixed)  
- One bed  
- One table / desk plane  
- One kitchen corner  
- One bathroom mirror  
- One lamp (single practical, consistent position)  
- One floor material / tone  
- **Crystal incense holder** (signature object — see §VII)  

Users should feel: *I have been here before.*

**Not:** a scene collection, stock locations, or new “sets” per shoot.

When replacing or generating any image in a series, **match** window position, wood tone, lamp direction, and floor texture of siblings.

---

## IV. Temporal reality system

Quiet Ash visuals must feel like moments **captured from a continuously lived life**.

Time must progress **naturally**:

| Axis | Modes |
|------|--------|
| **Day** | morning → afternoon → sunset → midnight |
| **Season** | spring → summer → autumn → winter |

### Day moods (light + air)

- **Morning:** cool white air, quiet, slight moisture, breathable negative space  
- **Afternoon:** warm sun, citrus/work energy, steam and water in air (default hero: **4pm**, 5200–5800K)  
- **Sunset:** gold air, long shadows, slow rhythm  
- **Midnight:** blue-grey dark, desk lamp, deep wood, solitary smoke  

### Season moods (same window, same room)

- **Spring:** white flowers, damp air, soft cold morning light  
- **Summer:** strong sun, condensation, citrus, AC breeze feeling  
- **Autumn:** deep wood, long shadows, dry air  
- **Winter:** duvet, steam, late warm lamp, breath-white cold outside  

### Apartment aging

The home **changes** with time: flowers dry, books move, glasses appear, beds wrinkle, light shifts seasonally. No frozen showroom.

**Code:** `TimeMode` + season tags in `data/constitution-prompts.ts` (extends legacy `visual-prompts.ts`).

---

## V. Physical realism & air

All light **must have a source**. Default campaign key: **afternoon window**, upper-left, **5200–5800K**.

- Shadow falloff, local overexposure, air particles, light cutting through room  
- **No** AI god-rays, floating highlights, flat global brightness  

**Skin (when present):** pores, micro-flaw, uneven tone — **no** beauty-filter wax.

**Air system (must be visible):** dust, humidity, smoke, steam, particles. Space must **breathe**.

---

## VI. Photography system

One photographer’s **long-term documentary** of the apartment.

| Type | Lens |
|------|------|
| Hero | 50mm |
| Lifestyle | 50mm |
| Product close-up | 85mm |
| Space / room | 35mm |

**Camera body reference:** Sony A7R V (or equivalent natural perspective).

**Texture:** soft film grain (shadow-weighted), not snow on midtones.

**Forbidden:** AI ultra-clarity, catalog packshot, HDR lifestyle stock.

---

## VII. Signature object system

**Crystal Incense Holder** — subconscious memory trigger.

Always fixed across all media:

- Same cut / facet language  
- Same transparency and refraction behavior  
- Same scale (**small** in frame — never dominates like a monument)  
- Same proportion relative to surface  

Mood color may change (fluorite, citrine, amethyst, etc.); **geometry does not**.

Packaging: **cream white box**; flavor differentiation only via **small color bar / label** — never full loud packaging redesign per SKU.

---

## VIII. Scent visualization (see through the image)

| Mood / scent | Visual air |
|--------------|------------|
| Citrus | moisture, sun, condensation |
| White tea | white mist, linen, morning air |
| Rose | skin warmth, night lamp, steam |
| Sandalwood | deep wood, deep shadow, midnight room |
| Rain / grey day | humid glass, muted reflection, quiet room |

---

## IX. Composition & visual density

Composition is **never perfect**. Prefer: off-center, empty, cropped, blocked, soft edge.

### Hero (homepage & campaigns)

- **Left:** typography / silence  
- **Right:** emotional world  
- **Ratio:** ~40% text zone / 60% atmosphere  

### Product in frame

- Not centered; prefer lower-right weight  
- Recently used: ash, tilt, open box, touch marks  

### People

- Incomplete in frame, cropped, **not** looking at camera  

### Density by surface (emotional concentration)

| Surface | Density |
|---------|---------|
| Hero | 100% |
| Mood | 70% |
| Product | 80% |
| Lifestyle | 40% |
| PDP / purchase zone | Commerce-priority (still in-world) |

---

## X. Emotional silence & viewer participation

Do **not** over-explain emotion in copy or staging.

**Avoid:** “She is lonely.”  
**Prefer:** empty room, half glass of water, lamp still on, smoke still drifting.

Viewer completes the story: *Who left? Why is the light on? Why half a cup?*

**Dirt & imperfection:** ash, stains, folds, scratches, half-dry water — world feels **lived-in**.

**Slow rhythm:** slow scroll feel, slow smoke, slow transitions — pull user into brand tempo.

**Habit system:** character has rituals (first incense at afternoon, Focus before work, Rose after bath, etc.).

**Object memory:** same cup, lamp, linen blanket, worn book — recurring cast of props.

---

## XI. Commerce restraint protocol

Commerce is **allowed** (cart, PDP, collections). Quiet Ash must **never** behave like aggressive ecommerce.

### Avoid

- Crowded product grids without editorial breath  
- Excessive primary CTAs, discount language, urgency timers  
- Performance-marketing aesthetics, “BUY NOW” energy  
- Bright white catalog fills, packshot isolation  

### Prefer

- Products appear **inside** the emotional world  
- Fewer, slower, more editorial placements  
- CTAs quiet, uppercase tracked, not shouting  
- Best sellers as **moments**, not warehouse tiles  

**Homepage today:** structure may stay; **imagery and copy** must obey density table and non-commercial realism.

---

## XII. Motion doctrine

Motion is **personality**. Static images are not the whole brand.

Motion must feel **slow, human, breathable**:

- soft, heavy, floating, slightly delayed  
- like air moving in a quiet room  

### Avoid

- Sharp UI snaps, spring bounce, parallax spectacle  
- Fast ecommerce transitions, staggered “app loading” lists  
- Infinite pulsing CTAs  

### Allow

- Subtle image scale on hover (≤1.02)  
- Opacity breath on links  
- Scroll reveal with long easing (see homepage `qa-home-reveal`)  
- Page transitions that feel like **exhale**, not swipe  

**Implementation tokens:** `docs/MOTION_SYSTEM.md` (timing only — philosophy governed here).

---

## XIII. Copywriting & layout (inherit ontology)

- Voice: quiet, sparse, documentary caption — not brand slogan spam  
- Layout: air between modules (homepage rhythm: **48px** between major sections unless Constitution amended)  
- Typography: editorial serif display + tracked sans; hero type **white on atmosphere**  
- Do not reintroduce scholar-incense dark editorial chrome on mood marketing routes  

---

## XIV. Master image prompt (prepend to every generation)

Do **not** paste this entire Constitution into generators. **Always prepend** the master block from `data/constitution-prompts.ts` → `QA_CONSTITUTION_MASTER_PROMPT`, then add scene-specific lines.

Scene prompts live in:

- `data/hero-image-prompts.ts`  
- `data/mood-poster-image-prompts.ts` (must migrate toward apartment + imperfection)  
- `data/product-image-prompts.ts`  
- `data/ritual-image-prompts.ts`  
- `data/essay-image-prompts.ts`  

Legacy `QA_BRAND_BASE` in `data/visual-prompts.ts` is **deprecated** — use constitution layers in `buildImagePrompt()`.

---

## XV. Final experience goal

User is not “browsing a website.”

They are **briefly living inside another person’s apartment**.

**Success criterion:**  
The world feels **physically real** and **emotionally habitable** — and they want to **stay**.

---

## Appendix A — Historical doc map (reference only)

| Need | Read for mechanics only | Canon for taste |
|------|-------------------------|-----------------|
| Next.js routes | `docs/CONTENT_ARCHITECTURE.md` | — |
| Homepage layout spacing | `QUIET-ASH-VISUAL-ART-DIRECTION-LOCK.md` | Constitution §IX–XI |
| Image file naming / ratios | `IMAGE_PIPELINE.md` §4–6 | Constitution §VI–IX |
| Ritual route cinema mode | `ART_DIRECTION.md` | Constitution §III–IV (migrate tone) |
| npm image scripts | `docs/image-generation.md` | Constitution §XIV |

---

## Appendix B — Agent execution checklist

Before shipping any visual or homepage change:

1. Does it inherit **Apartment Memory** (same window/table/lamp)?  
2. Does it pass **Anti-AI** (not too perfect / centered / sharp)?  
3. Is **time + season** intentional?  
4. Is **crystal holder** on-model if product appears?  
5. Is **commerce density** within restraint?  
6. Does **motion** feel slow and breathable?  
7. Was **`QA_CONSTITUTION_MASTER_PROMPT`** prepended for new images?  

If any answer is no, **revise before merge**.
