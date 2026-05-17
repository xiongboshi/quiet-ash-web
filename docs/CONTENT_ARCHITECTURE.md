# Quiet Ash — Content Architecture (Governance)

**Status:** Established. **Purpose:** Define **where content lives**, **how it flows into the site**, and **what must remain fixed** so engineering does not accidentally turn Quiet Ash into a blog or a SKU-first store.

**Core idea:** Content exists to **deepen atmosphere** and **increase desire** for rituals and objects — **through** editorial pacing, not **despite** it.

This is **not** a traditional blog.

---

## 1. Content sources (three pillars)

| Pillar | Storage | Resolved by | Routes |
|--------|-----------|-------------|--------|
| **Rituals** | `content/rituals/*.mdx` | `lib/rituals.ts` | `/rituals`, `/rituals/[slug]` |
| **Essays** | `content/essays/{series-slug}/*.mdx` | `lib/essays.ts` | `/essays`, `/essays/[slug]` |
| **Objects** | `data/products/<category>/*.json` | `lib/catalog.ts` | `/objects`, `/objects/[slug]` |

**Series registration (essays):** Each essay folder under `content/essays/` must have a matching **`content/series/{slug}.mdx`** — see `lib/essays.ts` warnings in dev.

**Collections** exist under `content/collections/` for internal / editorial taxonomy — not a primary public pillar in the same way as the three pillars above (see existing product copy in repo).

---

## 2. Ritual MDX structure

**Location:** `content/rituals/<slug>.mdx`

**Frontmatter (required for parsing):**

- `title`, `excerpt`, `mood`, `body` (non-empty body in file)  
- `coverImage` (optional URL under `public/`)  
- `relatedProducts` — array of **object slugs** from catalog JSON  
- `slug` optional (defaults from filename)

**Purpose:** Rituals are **lived atmosphere** — long-form editorial + commerce hooks via `relatedProducts`, not “recipe cards.”

---

## 3. Essay MDX structure

**Location:** `content/essays/<series>/<slug>.mdx`

**Frontmatter (see `EssayMeta` in `lib/essays.ts`):**

- `title`, `date`, `excerpt`, `series`, `order`, `language`  
- `coverImage`, `threads`, `reading_time` / `readingMinutes`, `strandNote`, `epigraph` — as supported by parser

**Purpose:** Essays are **philosophy and cultural slow-read** — they support desire and understanding; they are **not** optimized as a chronological “posts” feed.

**Homepage journal list:** Slugs configured in **`data/essays.ts`** → `homeEditorialSlugs` (must exist in content).

---

## 4. Object (catalog) structure

**Location:** `data/products/<category-slug>/*.json`

**Fields (`CatalogProduct`):** `slug`, `title`, `line`, `priceDisplay?`, `image`, `universe`, `seriesSlugs`, `featured?`, `category`

**Purpose:** Commerce data is **lightweight JSON** — editorial voice lives in `line` and pairing with rituals/essays, not in long marketing pages per SKU.

**Homepage object grid:** `getFeaturedForHome()` — **`featured: true`** wins; see `lib/catalog.ts` for rules.

---

## 5. Reusable editorial blocks (components)

Editorial building blocks live under `components/editorial/` and `components/sections/` — e.g. `EditorialFinale`, `RitualCarousel`, `EssayGrid`, `FeaturedObjects`, `Hero`.

**Rule:** New “bands” on the homepage require **design system + art direction** sign-off — do not add marketing strips ad hoc.

---

## 6. Homepage: fixed vs dynamic

**Fixed (order & layout model):** `app/page.tsx`

1. `Hero`  
2. `FeaturedRitual`  
3. `FeaturedObjects`  
4. `RitualCarousel` (`visualMode="cinema"`)  
5. `EditorialFinale` (`tone="spec-quote"`)  
6. `EssayGrid` (`layout="journal"`)  
7. `Footer`

**Dynamic (content):**

- **Hero** — `data/home.ts` → `defaultHero` (image path, copy, CTAs; title may use `\n` for display line breaks).  
- **Featured ritual** — `homeFeaturedRitualSlug` in `data/home.ts` + ritual MDX.  
- **Rituals rail** — `homeRitualSlugs` in `data/rituals.ts` (excluding featured where filtered in page).  
- **Objects** — featured flags + catalog JSON.  
- **Quote** — `defaultPhilosophyQuote` + `EditorialFinale` props.  
- **Journal** — `homeEditorialSlugs` in `data/essays.ts`.

**Changing order** of homepage bands is a **product + design** decision, not a routine content edit.

---

## 7. Image ratio requirements (by surface)

Documented in **`docs/DESIGN_SYSTEM.md`** — summary:

- Featured ritual image: **520px** height, full width of column.  
- Object home grid: **320px** height.  
- Dark rail: **240px** height.  
- Journal list: **110 × 140** thumbnails.

New surfaces must **declare** their ratio in `DESIGN_SYSTEM.md` when added.

---

## 8. SEO strategy (governance)

- **Meaningful** `<title>` / `description` per route via App Router `metadata` where implemented.  
- Homepage: JSON-LD `WebSite` in `app/page.tsx` — extend carefully; avoid spam schema.  
- Essays and rituals: prefer **one canonical URL** per slug; no thin duplicate paths.

**Editorial commerce:** SEO supports **discovery** of rituals/objects; tone in meta descriptions should stay **quiet and specific**, not keyword-stuffed.

---

## 9. Editorial commerce philosophy

- **Rituals** justify **why** a room or hour matters.  
- **Objects** answer **what to hold** in that hour — without shouting price-first.  
- **Essays** carry **why** the culture matters — long arc, not “content marketing.”

Commerce metrics must not **invert** this order (e.g. no “Buy now” strip above the ritual narrative on ritual pages without review).

---

## 10. Change control

- New MDX fields: update **`lib/*.ts` parsers** + this doc + any TypeScript types.  
- New homepage dynamic regions: update **`app/page.tsx`** + **`DESIGN_SYSTEM.md`** + **`MOTION_SYSTEM.md`** if motion is involved.

---

## 11. Code map

| Concern | File(s) |
|---------|---------|
| Homepage composition | `app/page.tsx` |
| Home copy defaults | `data/home.ts` |
| Ritual order | `data/rituals.ts` |
| Essay home list | `data/essays.ts` |
| Ritual loader | `lib/rituals.ts` |
| Essay loader | `lib/essays.ts` |
| Catalog | `lib/catalog.ts` |
| MDX content | `content/**` |
