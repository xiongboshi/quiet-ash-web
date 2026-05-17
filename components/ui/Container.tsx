import type { ReactNode } from "react";

/** 16 / 24 / 48px — matches `--qa-container-px` in `styles/tokens.css` */
export const CONTAINER_PAD = "px-4 sm:px-6 lg:px-12";

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
