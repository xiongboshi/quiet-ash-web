# Quiet Ash — Design System (Governance)

**Status:** Established. **Purpose:** Prevent visual drift. The site is no longer “designed page by page”; it is **maintained** as a single cinematic, luxury-editorial language.

**Emotional target:** quiet · cinematic · editorial · museum-like · ritualistic · slow

---

## 1. Color system (canonical)

Source of truth: `styles/tokens.css` (`:root`) and `app/globals.css` (legacy aliases map to `--qa-*`).

| Token | Hex / value | Role |
|--------|----------------|------|
| `--qa-bg` | `#f3f0ea` | Page / light band ground |
| `--qa-bg-soft` | `#e8e4dc` | Soft paper shift, secondary surfaces |
| `--qa-void` | `#0b0b0b` | Dark cinematic bands (ritual rail) |
| `--qa-footer-void` | `#050505` | Footer (governance: may use `#030303` in footer component for deeper silence—keep within this range) |
| `--qa-text` | `#1a1a1a` | Primary ink |
| `--qa-muted` | `#6f6a63` | Secondary / captions |
| `--qa-border` | `#ddd7cf` | Rules, hairlines |
| `--qa-quote-ink` | `#342e29` | Quote band typography |

**Hero / inverse surfaces**

- On `#0b0b0b`, hero display title uses **`#f5f1ea`** (see `.qa-hero-copy .qa-spec-hero-title` in `app/globals.css`) so type reads as **warm ivory**, aligned with the wordmark, not default body ink.

**Forbidden**

- Introducing a second “brand blue” or SaaS accent stack.
- Neon, high-chroma CTAs, gradient buttons for primary navigation.
- Lightening dark bands toward charcoal-gray “UI panels” — dark sections stay **near black**.

---

## 2. Typography scale

**Fonts (Next.js `app/layout.tsx`):**

- **Headings / display:** Cormorant Garamond — weights **300** (default for display and section rhythm).
- **UI / body:** Inter.

**Canonical sizes (homepage + chrome):**

| Role | Spec | Notes |
|------|------|--------|
| Hero display | 72px / 78px line, -0.03em, weight 300 | `.qa-spec-hero-title` |
| Section title | 52px / 58px, weight 300 | `.qa-spec-section-title` |
| Card title (objects home grid) | 26px / 32px, weight 300 | Implemented in `ProductCard` `homeGrid` branch |
| Journal essay title | 34px / 42px, weight 300 | `EssayGrid` journal layout |
| Body | 17px / 32px | `--qa-body-size`, `--qa-body-leading` |
| Hero body lines | 18px / 34px, `rgba(255,255,255,0.82)` | Hero only |
| Eyebrow | 12px, uppercase, **0.22em** tracking | `--qa-eyebrow-size`, `--qa-eyebrow-tracking` |
| Links (UI) | 13px, uppercase, **0.18em** tracking, underline offset **6px** | `--qa-link-size`, `--qa-link-tracking` |

**Forbidden**

- Inter for display headlines “for readability.”
- Tightening letter-spacing on all-caps labels below **0.18em** (eyebrows) or link voice.
- Bumping hero display weight to 500+ for “impact.”

---

## 3. Spacing rhythm & section pacing

**Horizontal (container):**

- Max width: **1440px** (`--qa-container-width`).
- Padding: **16px** mobile → **24px** tablet (640+) → **48px** desktop (1024+) (`--qa-container-px`).

**Homepage bands (implemented asymmetry — do not “even out” without design review):**

| Band | Vertical rhythm (reference in code) |
|------|--------------------------------------|
| Hero | `100svh`, `min-height: 980px`; copy entry `pt-[max(4.5rem,37svh)]` — **optical**, not vertically centered |
| Featured ritual | `pt-[132px] pb-[108px]` — **more air above than below** |
| Objects | `pt-[124px] pb-[132px]` — **heavier below** |
| Dark ritual rail | `pt-[102px] pb-[128px]` |
| Quote (`spec-quote`) | `pt-[15px] pb-5` (15px / 20px) — desktop band |
| Journal | Section `padding-top` / `padding-bottom` from `.qa-home-journal` base (no `lg` override) |
| Footer | `pt-[96px]`, bottom `pb-12` (48px) |

**Token fallbacks** (for non-home or legacy): `--qa-section-pad-*`, `--qa-section-padding-y: 140px` — prefer **band-specific** values above for homepage parity.

**Forbidden**

- Replacing asymmetric `pt`/`pb` pairs with single `py-[120px]` “for consistency.”
- Collapsing journal list spacing to uniform blog gaps.

---

## 4. Editorial layout rules

**Grid philosophy**

- **Light bands:** Ivory ground; typography and images breathe. Grids are **editorial**, not dashboard columns.
- **Dark band:** “Contact sheet” — frames sit close horizontally so **black reads continuous**; type is **quieter** than light sections.
- **Journal:** **Not** masonry, **not** cards. Two columns: **360px intro** + **1fr list**; list rows **110 × 140** thumb + text; **soft** rules (`color-mix` on border).

**Asymmetry principles**

- Prefer **optical** balance: intro nudged up (`-mt-1`), image column dropped (`lg:mt-10`) where implemented.
- Quote block: slight **horizontal bias** on large screens; not mathematically centered in the viewport.
- Headings: sometimes **tighter** label→title (`mb-5`) and **longer** pause before secondary actions (`mb-14` journal intro).

**Whitespace philosophy**

- Whitespace is **material**, not leftover. When a section feels “empty,” add **meaning** (texture, longer pause, softer type) — do not fill with widgets.

**Forbidden UI patterns**

| Wrong | Right |
|--------|--------|
| Card chrome (shadows, borders, rounded “product cards”) on homepage object study | Bare grid: image block + type; **no** `qa-media-frame` on `homeGrid` |
| Perfect vertical centering of hero copy | Lower-left anchor; sacred **left** negative space |
| Mathematically centered quote in infinite white | Asymmetric padding + optical bias |
| “Blog tiles” for essays | Archival list: soft rules, slow vertical rhythm |
| Glass / blur nav over hero | Solid dark sheet if mobile menu; no backdrop blur on hero |

---

## 5. Visual hierarchy

1. **Atmosphere** (image / darkness / grain)  
2. **Display / section title** (serif, light weight)  
3. **Body / excerpt** (muted, slower line length)  
4. **Eyebrows & links** (small caps voice — never compete with display)

**Commerce:** Objects are **held inside** editorial atmosphere — price and title must never outrank the image’s silence.

---

## 6. Object / image proportions (homepage)

| Surface | Height / rule |
|---------|----------------|
| Featured ritual image | **520px** tall, full column width, `object-fit: cover`, **0** radius |
| Object grid (`homeGrid`) | **320px** image height |
| Dark rail stills | **240px** height |
| Journal thumb | **110 × 140** |

**Hover:** image scale **1.01** (quiet bands) unless a documented exception; duration **600ms**, `ease-out`.

---

## 7. Responsive behavior

- Container padding steps **16 → 24 → 48** — never zero-gutter on mobile.
- Stacks **collapse** to single column; **do not** invent new breakpoints that tighten typography below readable minima.
- Hero: maintain **min height** and **lower-left** intent; do not re-center on tablet “because it looks balanced.”

---

## 8. UI restraint & interaction

- Primary editorial links on homepage use **`qa-cta qa-cta--still`**: hover opacity **~0.93** (see `app/globals.css`) — **not** full marketing flash.
- Global `a:hover` opacity rules exist; **editorial links** must opt into `qa-cta` / `qa-cta--still` so motion stays in **imagery**, not chrome.

---

## 9. Change control

Any PR that:

- Adds a new accent color, card system, or centered hero layout, or  
- Removes asymmetric section padding “for consistency,”

**must** reference an explicit design review — otherwise treat as **out of scope** for this system.

---

## 10. Code map (where this system lives)

| Concern | Primary files |
|---------|----------------|
| Tokens | `styles/tokens.css` |
| Global type / overrides | `app/globals.css` |
| Homepage order | `app/page.tsx` |
| Hero | `components/sections/Hero.tsx`, `hero-nav.tsx`, `hero-intro-motion.tsx` |
| Bands | `featured-ritual.tsx`, `FeaturedObjects.tsx`, `ProductCard.tsx`, `ritual-carousel.tsx`, `editorial-finale.tsx`, `EssayGrid.tsx`, `Footer.tsx` |

This document is the **contract** for how Quiet Ash should look and feel. When in doubt: **subtract**.
