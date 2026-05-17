import Link from "next/link";
import type { ReactNode } from "react";

export type SectionHeaderAction = { href: string; label: string };

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: SectionHeaderAction;
  /** Extra control (e.g. custom link cluster) */
  actionSlot?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  actionSlot,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 flex max-w-xl flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between lg:mb-14 ${className}`.trim()}
    >
      <div className="max-w-2xl space-y-3">
        {eyebrow ? <p className="qa-eyebrow-brand">{eyebrow}</p> : null}
        <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.55rem,3.8vw,2.15rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--qa-text)]">
          {title}
        </h2>
        {description ? (
          <p className="qa-body-brand max-w-[40ch]">{description}</p>
        ) : null}
      </div>
      {actionSlot ? (
        <div className="shrink-0 self-start sm:self-auto">{actionSlot}</div>
      ) : action ? (
        <Link
          href={action.href}
          className="qa-meta shrink-0 self-start text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_28%,transparent)] underline-offset-[0.38em] transition-opacity duration-[var(--motion-base)] hover:opacity-70 sm:self-auto"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
