# Quiet Ash — Motion System (Governance)

> **Philosophy:** [QUIET-ASH-CONSTITUTION.md](./QUIET-ASH-CONSTITUTION.md) §XII Motion Doctrine. This file is **timing tokens and forbidden patterns** only.

**Status:** Established. **Principle:** Motion should feel like **breathing** — if it becomes noticeable, **reduce it**.

**Not:** animation design, marketing bounce, dashboard micro-interactions.

---

## 1. Allowed transitions

| Use case | Duration | Easing | Transform / property |
|----------|----------|--------|----------------------|
| Homepage hero lockup | **None** | — | **Static composition** — no entrance motion (see `Hero.tsx` + `.qa-hero-lockup*` in `globals.css`) |
| Image hover (homepage editorial) | **600ms** | `ease-out` | **`scale(1.01)`** preferred; never above **1.02** without review |
| Generic link opacity (site-wide) | `var(--motion-base)` (~420ms) | `ease` | Opacity only |

---

## 2. Forbidden animation patterns

- **Springs** / elastic easing on layout or images.  
- **Parallax** scroll effects on editorial pages.  
- **Rotating** cards, 3D flips, or “deck” metaphors.  
- **Large** translate distances on enter (keep ≤ **12px** for hero-level fades).  
- **Staggered** list animations that read as “app loading.”  
- **Infinite** loops (pulsing CTAs, shaking icons).

---

## 3. Opacity philosophy

- Default global `a:hover` reduces opacity — **editorial CTAs** use **`qa-cta`** / **`qa-cta--still`** so hover does not read as generic web dimming.  
- **`qa-cta--still`:** hover / focus-visible opacity **~0.93** — barely perceptible; **motion lives in the image** (scale), not the label.

**Rule:** If a hover state draws the eye **before** the photograph, it is **too strong**.

---

## 4. Image hover rules

- Homepage object study & dark rail: **scale only** (subtle); **no** opacity dip on the image that mimics “disabled button.”  
- **Do not** add hover shadows, border brightening, or second-stage zoom.

---

## 5. Scroll behavior

- `html { scroll-behavior: smooth; }` is acceptable for **in-page** civility — do not add scroll-jacking, momentum hijacking, or “reveal on scroll” armies.

---

## 6. Interaction restraint

- **No** blur / glass nav over hero (governance: solid surfaces only).  
- Mobile menus: **solid** background, no backdrop blur as a crutch.  
- Focus rings: keep **visible** for accessibility — style them **thin** and **quiet** (not neon halos).

---

## 7. Framer Motion (when used)

- Use for **small** entrance only where already established (e.g. hero copy).  
- Do not expand Framer into page-wide orchestration without explicit design approval.

---

## 8. Copy for engineers

> **If motion becomes noticeable, reduce it.**

Ship the calmer version by default.

---

## 9. Code map

| Concern | File(s) |
|---------|---------|
| Hero entrance | `components/sections/hero-intro-motion.tsx` |
| Still CTA hover | `app/globals.css` — `a.qa-cta.qa-cta--still:hover` |
| Image transitions | `ProductCard.tsx`, `ritual-carousel.tsx`, `EssayGrid.tsx`, `featured-ritual.tsx` |
| Global motion tokens | `app/globals.css` — `--motion-*` |

---

## 10. Change control

Adding **new** animation libraries, page transition packs, or Lottie marketing loops requires **explicit** art-direction sign-off — otherwise **out of scope**.
