import type { ReactNode } from "react";

type Props = { children?: ReactNode };

/** Marginalia / breathing marker — not shrunken body copy. */
export function MarginNote({ children }: Props) {
  return (
    <p className="qa-mdx-marginnote mb-[var(--rhythm-xs)] mt-[var(--rhythm-md)] max-w-[min(100%,36ch)] font-[family-name:var(--font-sans)] text-[var(--text-xs)] font-medium uppercase tracking-[0.26em] text-[color-mix(in_srgb,var(--wood)_88%,var(--ash))] opacity-[0.78]">
      {children}
    </p>
  );
}
