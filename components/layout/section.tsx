import type { ReactNode } from "react";

type Tone = "paper" | "paper-soft" | "paper-warm";

const tones: Record<Tone, string> = {
  paper: "bg-[var(--paper)]",
  "paper-soft": "bg-[var(--paper-soft)]",
  "paper-warm":
    "bg-[color-mix(in_srgb,var(--paper)_92%,var(--paper-soft))]",
};

type Props = {
  children: ReactNode;
  id?: string;
  variant?: "default" | "gate";
  tone?: Tone;
  borderTop?: boolean;
  className?: string;
};

export function Section({
  children,
  id,
  variant = "default",
  tone = "paper",
  borderTop = true,
  className = "",
}: Props) {
  const pad =
    variant === "gate" ? "qa-section qa-section--gate" : "qa-section";

  return (
    <section
      id={id}
      className={`${pad} ${tones[tone]} ${borderTop ? "border-t border-[var(--line)]" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
