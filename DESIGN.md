# Quiet Ash — Design Laws

This project is past “token cleanup.” These laws define **what must unify**, **what may drift on purpose**, and **what must stay poetic**—so we avoid both chaos and over-systemization.

Narrative atmosphere (tone, anti-patterns, commerce-as-atmosphere): [`docs/ATMOSPHERE_AND_VISUAL_DNA.md`](docs/ATMOSPHERE_AND_VISUAL_DNA.md).

---

## Three layers of numbers

### Layer 1 — Structural rhythm (must be tokenized)

Structural rhythm is the skeleton: section spacing, vertical cadence, CTA voice, type scale, interactive timing.

**Keep using:**

- `--space-*` for layout cadence (sections, blocks, text rhythm)
- `--text-*` and shared classes (`.qa-eyebrow`, `.qa-body`, `.qa-title`, `.qa-label`, `.qa-wordmark`, etc.)
- `--motion-*` for **interactive** transitions (links, buttons, list row micro-motion)

If it answers “how does the whole site breathe in time and space?” it belongs here.

---

### Layer 2 — Optical correction (local constants allowed)

Not every `px` or `em` is a failure. Optical tweaks fix type and focus; they are **not** the spacing system.

**Examples that should stay as fine-tuning, not forced into `--space-*`:**

- Letter-spacing on a specific glyph block (e.g. `-0.03em` on a display line)
- `translateX(2px)` on a hover “nudge” (breath, not grid)
- `outline-offset` / hairline focus rings tuned for visibility

Rule of thumb: if removing it makes the UI **less legible** but does not change **global rhythm**, it is optical—not structural.

---

### Layer 3 — Atmosphere (intentionally wild)

Atmosphere is mood: hero treatment, mist, grain, long fades, glow, non-linear or long durations.

**Do not** flatten these into the same tokens as UI chrome. Cinematic and editorial motion **may** use irregular timing; that irregularity is the product.

**Examples:**

- Long hero fades, ambient drift, fog loops
- `blur` / soft-light stacks that exist for feeling, not layout

Aesop-like calm comes from **constraint elsewhere**, not from tokenizing every blur.

---

## Laws — Typography

- **CTA labels** (small caps trail, back links, hero “Enter”): always **`.qa-label`** (with **`.qa-cta`** when it is a link/button). No one-off `text-[11px]` + tracking strings.
- **Wordmark** (“Quiet Ash” as brand mark in header/footer): always **`.qa-wordmark`**. Do not mix `qa-title` + ad-hoc `rem` for the mark.
- **Prose (`.markdown`)**: do not introduce arbitrary **px** for type or vertical rhythm; prefer `calc(var(--space-*) …)` when changing prose. **Refactor one prose level at a time** (e.g. only `h2`, then later `blockquote`) so reading rhythm does not collapse.
- **Meta / date lines**: at most **two** tracking presets project-wide (pick defaults in CSS, avoid many `tracking-[…]` one-offs unless Layer 2).

---

## Laws — Motion

- **Interactive motion** (hover, focus, in-row transitions): use **`--motion-*`** (and shared easing where already established).
- **Atmospheric motion** (hero, smoke, long reveals): **independent** of `--motion-*`; document in code with a short comment if duration feels “magic.”
- **Hover drift**: horizontal nudge **≤ 2px** on intentional editorial elements; default language remains **opacity breath** sitewide.

---

## Laws — Rhythm

- **Section spacing**: driven by **`--space-section`**, **`--space-block`**, **`--space-text`** and derived multiples already in `:root` where we multiply cadence.
- **Text cadence** between stacked blocks: prefer **`var(--space-text)`** / **`var(--space-block)`** over magic Tailwind spacing—unless Layer 2 applies.
- **Prose changes**: one layer per change set (e.g. only `h2` margins), then ship; never rewrite all prose rules in one pass.

---

## Laws — Atmosphere

- **Hero** may own a **separate palette** (`#…`, gradients, grain). That is not “debt”; it is a scene.
- **Blur / glow / long duration**: not required to map to `--motion-*`; they serve **emotion**, not the component grid.
- **Irregular timing** in atmosphere is allowed; **irregular spacing** in layout is not (that stays Layer 1).

---

## What to do next (process)

1. **Do not** run endless grep → replace-digit loops. Tokenize only when a value is clearly **structural** or **repeated brand voice**.
2. When in doubt: ask which layer (1 / 2 / 3) the value belongs to.
3. Prefer **one law + one PR-sized change** over sweeping refactors—especially for prose.

---

## Where things live

- Tokens and global utilities: `app/globals.css`
- Layout primitives: `components/layout/` (`Container`, `Section`, `PageIntro`, `PageShell`, `ArticleShell`)

This file is the **aesthetic constitution**; tokens are the implementation when the law says they must be.
