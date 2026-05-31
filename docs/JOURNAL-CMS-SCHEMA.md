# Journal CMS schema (MDX-first)

Quiet Ash journal data is **MDX-first**: one file per essay drives the index card and (most of) the detail template. Hand-authored guide templates remain TS overrides when needed.

## Files

| Path | Purpose |
|------|---------|
| `content/essays/{series}/*.mdx` | Essay body + **journal frontmatter** (PLP + PDP hooks) |
| `content/series/{series}.mdx` | Registers which essay folders are scanned |
| `data/journal-index-config.ts` | Which series appear on `/journal` (`journalIndexSeriesSlugs`) |
| `data/journal-index.ts` | Hero, filter definitions, tags, sort labels |
| `data/journal-index-articles.ts` | Hand guide index cards (`journalGuidesTipsHandCards`) |
| `data/journal-articles/<slug>.ts` | Full guide PDP for hand cards (pets, apartments, sleep, …) |
| `data/journal-articles/<slug>.ts` | Optional full PDP override (guide mock) |
| `data/journal-popular-questions.ts` | FAQ when `?category=popular-questions` |

## Essay MDX — journal frontmatter

Add to any essay under an indexed series:

```yaml
---
title: Working label (optional if headline set)
slug: my-essay
date: "2026-05-01"
excerpt: Card + SEO description fallback
cover: /images/generated/essay-example.webp
series: incense-culture
reading_time: 11

# Journal index + detail (canonical for PLP/PDP titles)
categoryId: better-sleep   # better-sleep | small-space-living | calm-evenings | quiet-routines | guides-care
tags:
  - relaxation
  - focus
headline: Human H1 for cards and article hero
seoTitle: Keyword-rich title for <title> / OG

# Optional PDP behaviour
bodyFormat: editorial          # editorial | guide (guide = numbered sections)
relatedSlugs: [incense-patience, night-incense-ritual]
productSlugs: [wood-tray, brass-incense-stand]
---
```

Snake_case aliases supported: `seo_title`, `category_id`, `body_format`, `related_slugs`, `product_slugs`.

### Field precedence

| Field | Index card | Detail page |
|-------|------------|-------------|
| `headline` | H1 on card | Hero title |
| `seoTitle` | — | `<title>`, meta |
| `excerpt` | Description | Quick answer, SEO description |
| `cover` | Card image | Hero image (via card) |
| `categoryId` / `tags` | Sidebar filters | Breadcrumb category, takeaways |
| `body` | — | Editorial paragraphs (text parse, not MDX components) |
| `relatedSlugs` | — | Related module (else first peers on index) |
| `productSlugs` | — | Product strip (else homepage best sellers) |
| `bodyFormat: guide` | — | Numbered guide sections (or hand TS template) |

`title` in frontmatter is a working label; **`headline`** is what readers see when set.

## Index series

```ts
// data/journal-index-config.ts
export const journalIndexSeriesSlugs = ["incense-culture"] as const;
```

Add a slug here after `content/series/{slug}.mdx` exists. Cards are built per series, de-duplicated by essay `slug`.

## Filter behaviour

- Categories/tags definitions: `data/journal-index.ts`
- **Counts** are computed at runtime: `resolveJournalIndexCategories(articles)` in `lib/journal-index-categories.ts`
- Filter/sort: `lib/journal-index-articles.ts` — same AND/OR model as shop (category + tag + sort)

## Detail assembly

```
getJournalIndexArticleCards()
  → buildJournalIndexCardsFromEssays(series)  // MDX journal fields
  → journalDesignShowcaseCard               // hand card

journalArticleRegistry
  → buildJournalArticleFromIndexCard(card)  // MDX body + journal fields
  → optional data/journal-articles/<slug>.ts override
```

Public API: `resolveJournalArticle(slug)` in `lib/journal-articles.ts` (alias of `getJournalArticle`).

## Not MDX-rendered (yet)

Article bodies are still **plain text** parsed into paragraphs (`lib/journal-article-from-index.ts`). Custom MDX components would require `@next/mdx` or Contentlayer — out of scope for this schema pass.

## Topic hubs (`/journal/{topic}`)

Discovery-first clusters — not chronological blog aisles. Data: `data/journal-topic-hubs.ts`.

| Hub slug | Purpose |
|----------|---------|
| `better-sleep` | Sleep, rest, nighttime rituals |
| `small-space-living` | Apartments, low-smoke, ventilation |
| `calm-evenings` | Decompression, softer evenings |
| `quiet-routines` | Writing, tea, reading, focus |
| `guides-care` | Pet safety, care, how-to guides |

Legacy MDX `categoryId` values (`guides-tips`, `mind-wellness`, …) are mapped automatically.

## Hand templates (Guides & Care)

1. Add index card to `journalGuidesTipsHandCards` in `data/journal-index-articles.ts` (topic `categoryId`).
2. Add full template `data/journal-articles/<slug>.ts` and register in `data/journal-articles/index.ts` → `journalHandArticleOverrides`.
3. Add slug to `journalGuideArticleSlugs` in `data/journal-guide-slugs.ts`.

Current hand guides: `best-incense-for-sleep`, `is-incense-safe-for-pets`, `best-incense-for-small-apartments`.

### Guide article options

| Field | Purpose |
|-------|---------|
| `quickAnswer.paragraphs` | Multi-paragraph quick answer |
| `keyTakeaways` | Icon grid (preferred for Q&A guides) |
| `keyTakeawayBullets` | Simple bullet list (no icons) — omit when `keyTakeaways` is set |
| `intro.paragraphs` | Intro block after insight band |
| `sections[].subsections` | H3 blocks (e.g. Tea Scents under a numbered section) |
| `faq` | Collapsible FAQ (journal index style); omit to hide |
| `sections` id `final-thoughts` | Rendered after FAQ, before products |

Product strip uses **shop mobile PLP cards** — 2 columns, `ShopProductCard`.

### Guide prose — no duplicate sentences

Each block has a distinct job. **Do not repeat the same sentence** (or near-identical wording) across:

| Block | Role |
|-------|------|
| Quick answer | One direct answer only — Sparkles icon + `QUICK ANSWER` label + divider (see `journal-article-insight`) |
| Key takeaways | **2×2 icon grid** (leaf / shield / scent / brain), centered captions — never a bullet list; four scannable facts — not copied from body |
| Intro | Why read on — **do not restate** the quick answer |
| Sections | Depth, examples, lists |
| FAQ | Short, **new** angles — not copy-paste from sections |
| Final thoughts | Brief close — no recap of quick answer |

Before committing a hand guide, run:

```bash
npm run journal:check-duplicates
```

This fails if the same normalized sentence (≥30 characters) appears in two or more zones within one article.

## Legacy archive

`/archive`, `/library`, `/series` still use the series-shelf UI. `/journal` is the magazine index driven by this schema.
