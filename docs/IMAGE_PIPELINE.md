# Quiet Ash — Image Pipeline (Governance)

> **Superseded for taste and direction** by [QUIET-ASH-CONSTITUTION.md](./QUIET-ASH-CONSTITUTION.md) (v5.0). Use this file for **ratios, filenames, compression, and delivery** only — not brand soul or lighting canon.

**Status:** Established. **Purpose:** Permanent **production and delivery** rules for all imagery — AI, future photography, compression, crops, filenames, and the web stack — so the site stays **one continuous film**, not a mix of “marketing assets.”

**Companion docs:** `docs/ART_DIRECTION.md` (mood, lighting, DO NOT USE), `docs/DESIGN_SYSTEM.md` (surface heights, `object-position`, hover), `docs/MOTION_SYSTEM.md` (image motion only where allowed).

---

## Emotional goal (non-negotiable)

Images must feel:

**quiet · heavy · slow · textured · ritualistic · cinematic · timeless**

They must **not** feel:

**optimized · commercial · attention-seeking · social-media-first**

If an asset reads as “designed to win the feed,” **reject it** — even if metrics disagree.

---

## 1. Master visual language

Every asset — hero, ritual, object, essay, rail fragment — must align with this **single** language:

| Principle | Definition |
|-----------|------------|
| **Cinematic darkness** | Deep, warm blacks; corners hold ink; no gray “studio void.” |
| **Warm ivory highlights** | Highlights lean **cream / paper** (`#f5f1ea` family), not cold white paper blue. |
| **Low-key contrast** | Contrast lives in **material edges** and **light falloff**, not global S-curves or clarity sliders. |
| **Restrained saturation** | Color is **found** in wood, bronze, tea, ember — not pushed chroma for “pop.” |
| **Tactile materials** | Linen fiber, glaze, grain, ash — must survive at **web size** without looking plastic. |
| **Incense smoke** | Wispy, translucent, **in-camera** preferred; never thick white fog overlays. |
| **Museum still-life** | Composed, object-respecting, **slow** framing — not hero-packshot centering. |

**Editorial hierarchy (image vs type):** Atmosphere leads; type is placed in **reserved negative space** (e.g. hero: sacred left — see `Hero.tsx` `object-[58%_64%]` and art direction). Images do not compete with headlines for “center stage” in the same focal band.

---

## 2. Allowed image types

Use **only** these categories when commissioning or generating:

| Type | Role |
|------|------|
| **Hero cinematic** | Full-field still; room for type; darkest grade allowed. |
| **Ritual documentary** | A **moment** of practice — tray, window, dusk, hands implied not staged. |
| **Editorial still life** | Composed table / scholar plane; narrative props. |
| **Object study** | Object **inhabits** a surface and shadow — not a catalog packshot. |
| **Essay atmosphere** | Mood plate for long reads; may be abstract / shadow / texture-forward. |
| **Texture detail** | Macro honest to material — paper, ceramic, linen (supports essays/rituals). |
| **Shadow frame** | Darkness as subject; edge light only. |
| **Transitional atmosphere** | Between-section breath — no new “brand” per asset. |

---

## 3. Forbidden image types

**Do not ship:**

- Bright **e-commerce white** seamless or high-key catalog fills.  
- **Oversharpened** AI output (halos, crunchy edges, plastic skin on hands if present).  
- **Glossy luxury clichés** — mirror-black reflections staged for “premium.”  
- **Trendy Instagram** presets — crushed blacks + orange lift + lifted shadows.  
- **Vibrant lifestyle** — bright kitchens, saturated plants, “Sunday morning” stock.  
- **Modern wellness branding** — lens flares, neon gradients, generic mindfulness poses.  
- **Scandinavian over-bright minimalism** — bleach wood + white wall + sun blast (wrong cultural temperature).  
- **“Pinterest aesthetic”** — uniform bright presets, fake film borders for decoration, quote-card energy.

*(Overlaps with `ART_DIRECTION.md` §10 — both apply.)*

---

## 4. Image ratios & crop logic

### 4.1 Canonical ratios (master files)

Produce **masters** at sufficient resolution for **2×** retina and **~1440px** content max width (`--qa-container-width`). Prefer **one aspect per use-case** so crops are predictable.

| Use | Master aspect (guidance) | Crop / display (site) |
|-----|---------------------------|------------------------|
| **Hero cinematic** | **~21:9 or 16:9** landscape (composition assumes **left negative space** for type) | `fill` + `object-cover`; `object-position` tuned per asset (see `Hero.tsx`) |
| **Ritual** (featured / covers) | **~5:4 or 4:3** still-life friendly | Featured band: **520px** tall column; inner pages: hero image component — **cover**, not letterboxed marketing blocks |
| **Object** (study / catalog) | **~4:5 or 1:1** acceptable if shadow **grounds** object | Homepage grid: **320px** image height; **0** radius — editorial crop |
| **Editorial** (essay / longform) | **16:9 or 3:2** atmosphere plates | Route-level hero; avoid ultra-wide that wastes vertical rhythm |
| **Thumbnails** (journal list) | **~4:5** (tighter than square) | **110 × 140** — archival, not tile |
| **Cinematic wides** (dark rail, contact sheet) | **Ultra-wide fragments** or **16:9** extracts | **240px** height strip — **mood fragment**, not uniform packshots |
| **Mobile crops** | Same masters; **re-compose** in camera when possible | Do not rely on extreme vertical crops that **remove** negative space needed for type on hero |

**Rule:** If a crop **removes** the story (tray edge, ember, smoke line) to “fit the box,” **re-shoot or re-generate** — do not stretch.

### 4.2 Editorial hierarchy (within the frame)

1. **Atmosphere** (room darkness, smoke, falloff)  
2. **Primary subject** (object or gesture)  
3. **Secondary props** (book, cloth) — never clutter competing for sharpness  

### 4.3 Essay series archive covers — **one continuous room**

When producing **multiple** covers that appear together in navigation (e.g. `/Journal` series rail + archive context), every frame must read as **the same physical space** filmed across **one evening** — not unrelated stock plates.

**Spatial bible (repeat in briefs when commissioning or regenerating a set):**

- One **East Asian scholar studio** at **blue hour** — same **dark stained wooden desk plane** (warm umber grain, matte wear).  
- Same **vertical paper window** geometry at a **consistent frame edge** (e.g. right) with **cool twilight** outside.  
- Same **single warm practical** as if from **one large paper lantern** placed **off camera left** — soft spill only; do not invent a second lamp color or direction between siblings.  
- **No hands, no faces, no modern props, no packaging copy.**  
- **Incense anatomy:** sticks may rest **nearly horizontal** in ash or a shallow censer; avoid impossible upright “totem” sticks or toy-like smoke volumes.

**Reject** a frame if it introduces a **new wall finish**, **different window shape**, **conflicting outdoor season**, or **unrelated wood species** compared to the rest of the set.

When **replacing one** cover in an existing set, match **desk tone**, **window position**, and **light direction** of siblings before ship.

---

## 5. AI generation pipeline

AI is **allowed** as a production tool when outputs are **graded and de-digitalized** to match Quiet Ash. Raw model output is **not** final art.

### 5.1 Prompting style

- **Declarative, cinematographer voice** — not marketing adjectives.  
- Specify **materials** (linen, unglazed ceramic, oxidized brass), **time of day** (dusk, single window), **single light source**.  
- **Series / sibling covers:** follow **§4.3** spatial bible so frames read as **one continuous room**, not a new set per export.  
- Request **shallow depth** where it helps **isolation through darkness**, not blur gimmicks.

### 5.2 Camera language (include in prompts)

Examples of **approved** vocabulary:

- “35mm or 50mm equivalent, **natural perspective**”  
- “**Low key**, single side light, **deep shadow** in background”  
- “**Tripod still**, no motion blur unless intentional smoke”  
- “**Museum still life**, table height, **negative space** left of frame for typography”

### 5.3 Lighting language

- Side / window / practical — **one dominant direction**.  
- **Soft highlight rolloff** — no clipped speculars on metal unless narratively motivated.  
- **Warm shadow** — brown-black, not RGB gray.

### 5.4 Texture language

- “**Visible material grain**,” “**matte** surfaces,” “**dust-legal** micro-contrast in midtones only.”  
- Avoid “**pristine CGI**,” “**subsurface glow** on wood,” “**plastic specular**.”

### 5.5 Negative prompts (standing list)

Block consistently:

- white background, studio lighting, packshot, amazon product photo  
- oversharpened, HDR, hyperrealistic, 8k marketing render  
- teal and orange, neon, lens flare, bokeh balls, god rays  
- smiling model, yoga stock, bright kitchen, scandinavian white interior  
- text, watermark, logo, UI mockup in frame  

### 5.6 Consistency rules

- **One grade LUT / curve family** per release cycle (document the chosen curve in repo or design handoff).  
- **Smoke density cap** — if three rituals all look like the same smoke brush, **regenerate**.  
- **Skin / hands** — if included, must be **anonymous and calm** — not portrait-first.  
- File output → **post pipeline** (§6) before `public/`.

---

## 6. Post-processing rules

### 6.1 Grain philosophy

- Grain = **optional**, **low opacity**, **shadow-weighted** — film in the blacks, not snow on midtones.  
- Site use: hero stack may use **subtle** grain overlay (see `Hero.tsx` + `/textures/grain.svg`) — **do not** bake heavy grain into every export or text will suffer when images sit near copy.

### 6.2 Compression philosophy

- Compress for **silence**, not smallest byte at any cost: prefer **slightly larger** files that preserve **shadow detail** over blocky **macroblocking** in dark regions.  
- **Chroma subsampling** awareness: heavy 4:2:0 on deep reds/browns can **band** — test at **actual display size**.

### 6.3 Tonal compression

- **Compress range toward shadow** — retain **separation** in midtones (readability at small sizes).  
- No “**HDR reveal**” in shadows — lifted blacks that read **gray UI** are wrong for Quiet Ash.

### 6.4 Black floor

- **True near-black** in deepest areas — aligned with `--qa-void` / hero field (`#0b0b0b` context).  
- Avoid **floating gray** vignettes unless a **print-specific** editorial crop is approved.

### 6.5 Highlight softness

- Highlights **roll into ivory**, not clip to pure white (unless a **single** specular pin is intentional).

### 6.6 Export sharpness limits

- **No** clarity / structure / AI sharpen above **conservative** levels.  
- If edges **ring**, **pull back** — the web stack and CSS already manage a mild de-digital feel on hero (`qa-hero-field-img` in `globals.css` per art direction).

---

## 7. Web export rules

### 7.1 Formats

- **Primary:** **AVIF** and **WebP** as delivery derivatives when the build pipeline produces them; **PNG** acceptable for **master** archival and transparency needs.  
- **JPEG:** acceptable for photographic masters if **quality** preserves shadow detail (typically **high** quality, not “80 for PageSpeed”).  
- **SVG:** reserved for **simple** marks, diagrams, placeholders — not faux-photo gradients.

### 7.2 Retina & max widths

- Target **2×** for critical surfaces (hero, featured ritual, lead essay image).  
- Logical max reference: content **~1440px** wide — provide masters **≥ 2880px** wide for full-bleed hero where used.

### 7.3 `next/image` & optimization (current + intent)

- **Current:** Some hero paths use **`unoptimized`** where needed for pipeline control — see `Hero.tsx`.  
- **Intent:** When enabling default optimization, prefer **`sizes`** tuned per layout (featured **520px** tall columns, grid **320px**, rail **240px**, thumb **110px** width) to avoid over-fetching.  
- **Lazy loading:** **`priority`** only for **LCP** hero (and any above-the-fold critical image); all other images **lazy** by default.

### 7.4 `srcset` strategy

- Provide **width-based** descriptors for photographic sets when the asset pipeline generates multiple widths (e.g. 640 / 960 / 1440 / 2880).  
- **Do not** ship 6000px-wide originals to the browser without derivatives.

### 7.5 Cinematic consistency in delivery

- Same **gamma** assumptions across a batch — avoid mixing lifted-black JPEGs with crushed AVIFs on one page.

### 7.6 CDN strategy

- **Default:** Same-origin static assets via the **hosting platform** (e.g. Vercel Edge / CDN in front of Next). No third-party **random** image CDNs that rewrite URLs or apply **auto-optimization** (unknown sharpening/saturation).  
- **Caching:** Prefer **long cache** for immutable hashed assets if a future build step introduces **content hashes**; until then, treat filename **variants** (`-02`) as the cache-bust mechanism.  
- **Future:** If moving to dedicated media domain, **mirror** filenames and **disable** vendor “auto enhance.”

---

## 8. Image naming system

All new raster files under `public/images/` follow:

```text
{category}-{slug}-{variant}.{ext}
```

| Segment | Values |
|---------|--------|
| **category** | `hero` · `ritual` · `object` · `essay` · `editorial` · `texture` · `shadow` · `atmo` (transitional) |
| **slug** | kebab-case, stable (`tea-rain`, `bronze-holder`, `evening-linen`) |
| **variant** | two digits **`01`–`99`** for versions / crops |

**Examples (canonical):**

- `hero-01.png` → use full slug when multiple heroes exist: **`hero-cinematic-01`**  
- `ritual-tea-rain-01`  
- `object-bronze-holder-01`  
- `essay-shadow-study-01`  
- `texture-linen-macro-01`  
- `atmo-dusk-window-01`  

**Folder convention (governance):**

| Folder | Contents |
|--------|----------|
| `public/images/generated/` | AI-first outputs **after** post (aligned with existing `ritual-*.png`, `hero-cinematic.png`) |
| `public/images/photography/` | Future **real** captures (same naming) |
| `public/images/collections/` | Series / collection covers (may remain `.svg` or migrate to raster per series) |

**Do not** use random UUID filenames for production art — **discoverability and diffs** matter.

---

## 9. Future real photography

Real photography **must**:

- Match **AI cinematic language** — same black floor, same ivory highlight, same **single-source** discipline.  
- Follow **Quiet Ash darkness philosophy** — if the location is too bright, **wait**, **flag**, or **tent** the light — do not “fix in post” with gray lift.  
- Obey **editorial restraint** — fewer frames, **stronger** selects; contact sheet energy only where the **dark rail** calls for fragments.

**On-set checklist:** one key, warm practicals, **no** white seamless, **no** ring light, **no** three-point school photo for objects.

---

## 10. Emotional goal (summary)

All images should feel:

**quiet · heavy · slow · textured · ritualistic · cinematic · timeless**

They must **not** feel:

**optimized · commercial · attention-seeking · social-media-first**

This section **restates** the opening mandate for reviewers who jump to numbered headings only.

---

## 11. Change control

- New surface sizes → update **`DESIGN_SYSTEM.md`** §6 **and** this doc §4.  
- New AI model or grade → document **negative prompts** / **LUT** delta here or in a linked one-pager (dated).  
- Any PR adding images → verify **naming**, **ratio**, and **forbidden types** list.

---

## 12. Principle (one line)

**If motion becomes noticeable, reduce it** — applies to **imagery** too: if an image **shouts**, re-grade, re-crop, or **replace**.

When in doubt: **subtract**.
