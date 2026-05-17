import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  /** Hero / dark bands vs light surfaces */
  tone?: "onDark" | "onPaper";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  tone = "onDark",
  className = "",
}: Props) {
  const base =
    "qa-cta inline-flex w-full items-center justify-center px-8 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] no-underline transition-opacity duration-[var(--motion-base)] ease-out hover:opacity-90 sm:w-auto";

  const darkPrimary =
    "border border-[color-mix(in_srgb,#f5f1ea_55%,transparent)] bg-[color-mix(in_srgb,#f5f1ea_14%,transparent)] text-[#f5f1ea] backdrop-blur-[2px]";
  const darkGhost =
    "border border-[color-mix(in_srgb,#ece6dc_40%,transparent)] bg-transparent text-[#ece6dc]";
  const paperPrimary =
    "border border-[color-mix(in_srgb,var(--charcoal)_18%,transparent)] bg-[color-mix(in_srgb,var(--charcoal)_06%,transparent)] text-[var(--charcoal)]";
  const paperGhost =
    "border border-[color-mix(in_srgb,var(--wood)_35%,transparent)] bg-transparent text-[var(--wood)]";

  let skin = darkPrimary;
  if (tone === "onDark" && variant === "ghost") skin = darkGhost;
  if (tone === "onPaper" && variant === "primary") skin = paperPrimary;
  if (tone === "onPaper" && variant === "ghost") skin = paperGhost;

  const cls = `${base} ${skin} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button type="button" className={cls}>{children}</button>;
}
