/**
 * Inner-page content rail — 1880px max width, 138px horizontal inset.
 * Active under `.qa-inner-rail-scope` in `app/(site)/layout.tsx` (not on `/`).
 */
export const siteRailShellClass =
  "mx-auto w-full max-w-[var(--qa-container-width)] px-[var(--qa-container-px)]";

/** Mark hero / nav regions that keep the legacy 1680 rail tokens. */
export const siteRailExemptClass = "qa-rail-exempt";
