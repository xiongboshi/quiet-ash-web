import type { ReactNode } from "react";

type Props = { children?: ReactNode };

/** Opening thesis line — sits closer to the title than body rhythm. */
export function EssayLead({ children }: Props) {
  return (
    <p className="qa-mdx-lead mb-[var(--rhythm-md)] max-w-[min(100%,42ch)] font-[family-name:var(--font-serif)] text-[clamp(1.06rem,2.4vw,1.22rem)] font-medium leading-[1.58] tracking-[-0.02em] text-[color-mix(in_srgb,var(--charcoal)_90%,var(--wood))]">
      {children}
    </p>
  );
}
