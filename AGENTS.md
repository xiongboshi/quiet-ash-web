<!-- BEGIN:quietash-canon -->
## Quiet Ash — Constitution (SOLE CANON)

**Authority:** [docs/QUIET-ASH-CONSTITUTION.md](docs/QUIET-ASH-CONSTITUTION.md) (v5.0 Living Memory).

All legacy visual docs (`IMAGE_PIPELINE`, `QUIET-ASH-VISUAL-BIBLE`, dark museum language, pastel-only mood packshots, “not cinematic” fragments) are **historical reference only** — they do **not** set style priority.

Before any visual, motion, copy, layout, or image prompt work:

1. Read the Constitution.  
2. Prepend `QA_CONSTITUTION_MASTER_PROMPT` from `data/constitution-prompts.ts` for AI images.  
3. Use `buildImagePrompt()` / `buildConstitutionImagePrompt()` — not deprecated `QA_BRAND_BASE` strings.

**Anti-AI · Apartment Memory · Temporal Reality · Commerce Restraint · Motion Doctrine** are all defined in the Constitution.
<!-- END:quietash-canon -->

<!-- BEGIN:quietash-brand -->
## Brand direction (UI / marketing)

**Layout reference:** [docs/QUIET-ASH-BRAND-DIRECTION.md](docs/QUIET-ASH-BRAND-DIRECTION.md) · [docs/QUIET-ASH-VISUAL-ART-DIRECTION-LOCK.md](docs/QUIET-ASH-VISUAL-ART-DIRECTION-LOCK.md).  
**Taste / photography / copy ontology:** Constitution only.

Homepage implementation: `components/qa/*` · `styles/qa-home-1920.css` · `data/brand-home.ts`.
<!-- END:quietash-brand -->

<!-- BEGIN:quietash-visual -->
## Quiet Ash images

**Canon prompts:** `data/constitution-prompts.ts` · **builder:** `data/visual-prompts.ts` → `buildImagePrompt()`.

Scene tables (must align with Constitution — migrate away from pure pastel packshots):

- Hero: `data/hero-image-prompts.ts`
- Mood posters: `data/mood-poster-image-prompts.ts` · `npm run images:ritual-prompts` (ritual) · `data/ritual-image-prompts.ts`
- Essays: `data/essay-image-prompts.ts` · `npm run images:essay-prompts`
- Products: `data/product-image-prompts.ts` · `npm run images:product-prompts` · `npm run images:products-install`

Mechanics (ratios, filenames): [docs/image-generation.md](docs/image-generation.md) — taste from Constitution.
<!-- END:quietash-visual -->

<!-- BEGIN:quietash-icons -->
## UI icons

Use **[Lucide Icons](https://lucide.dev/icons)** via `lucide-react` for all interface icons (trust bars, cards, buttons, homepage modules). Do not hand-roll SVG paths unless Lucide has no match and the user approves an exception.

```tsx
import { Truck } from "lucide-react";
<Truck className="…" strokeWidth={1.2} aria-hidden />
```
<!-- END:quietash-icons -->

<!-- BEGIN:journal-index-discovery -->
## Journal index discovery (`/journal`)

**Explore by topic** — icon-above-label **tiles** in a grid (3+2 centered on narrow viewports, 5-across from 900px). Never revert to horizontal rounded chips (icon beside label in a flex row).

**Explore common searches** — always `grid-template-columns: repeat(2, 1fr)` at every breakpoint.

**Section headings** — `.journal-discovery__eyebrow` matches topic hub `.journal-topic-page__section-title` (serif).

Styles: `styles/journal-index.css` (`.journal-discovery__*`).
<!-- END:journal-index-discovery -->

<!-- BEGIN:journal-qa-guide-insight -->
## Journal Q&A guide — Insight band (do not drift)

Hand-authored guides (`data/journal-articles/*.ts`, `bodyFormat: "guide"`) use **`JournalArticleInsight`** — layout is locked to the product design.

**Quick answer:** Sparkles icon in a round `#e5ddd2` tile · `QUICK ANSWER` label (uppercase sans) · body copy · **divider** below.

**Key takeaways:** `KEY TAKEAWAYS` label · **2-column icon grid** (mobile and desktop) · each cell = round `#f2ede4` icon tile + **centered** sans caption (`leaf` / `shield` / `scent` / `brain`).

- Prefer `keyTakeaways` with explicit icons in article data.
- `keyTakeawayBullets` may only be used when icons are assigned automatically — never a plain bullet list.
- Do **not** switch takeaways to 4-column rows, vertical dividers, or left-aligned bullet lists.
- Styles: `styles/journal-article.css` (`.journal-article-insight__*`).
- Reference article: `/journal/is-incense-safe-for-pets`.
<!-- END:journal-qa-guide-insight -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
