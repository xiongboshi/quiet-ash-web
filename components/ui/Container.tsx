import type { ReactNode } from "react";

/** Horizontal inset — `72px` under `.qa-inner-rail-scope`; legacy on heroes via `.qa-rail-exempt` */
export const CONTAINER_PAD = "px-[var(--qa-container-px)]";

type Props = {
  children: ReactNode;
  className?: string;
  /** `wide` = brand rail (1280); `reading` = narrow editorial column. */
  variant?: "reading" | "wide";
};

export function Container({
  children,
  className = "",
  variant = "reading",
}: Props) {
  const base =
    variant === "wide"
      ? `qa-container ${CONTAINER_PAD}`
      : `quiet-container ${CONTAINER_PAD}`;
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}
