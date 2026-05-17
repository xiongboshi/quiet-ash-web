import type { ReactNode } from "react";

/** Soft caesura — not a ruled hr. Optional children = one muted ritual line. */
export function QuietBreak({ children }: { children?: ReactNode }) {
  return (
    <div className="my-[var(--rhythm-lg)] text-center">
      <p
        className="qa-mdx-break font-[family-name:var(--font-serif)] text-[0.95rem] tracking-[0.55em] text-[color-mix(in_srgb,var(--wood)_55%,transparent)]"
        aria-hidden
      >
        ···
      </p>
      {children ? (
        <p className="qa-meta mt-[var(--rhythm-xs)] text-[color-mix(in_srgb,var(--wood)_72%,var(--ash))] tracking-[0.12em]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
