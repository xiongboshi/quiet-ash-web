import type { ReactNode } from "react";

type Props = { children?: ReactNode };

/** Standalone aphorism — not default blockquote chrome. */
export function IncenseQuote({ children }: Props) {
  return (
    <blockquote className="qa-mdx-incensequote my-[var(--rhythm-lg)] max-w-[min(100%,48ch)] border-l border-[color-mix(in_srgb,var(--wood)_22%,transparent)] py-1 pl-[var(--rhythm-sm)] font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2.2vw,1.18rem)] font-medium italic leading-[1.62] tracking-[-0.015em] text-[color-mix(in_srgb,var(--charcoal)_82%,var(--wood))] opacity-[0.92]">
      {children}
    </blockquote>
  );
}
