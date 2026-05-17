import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  as = "h2",
  className = "",
}: Props) {
  const Heading = as;

  return (
    <header
      className={`space-y-[var(--space-text)] ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="qa-eyebrow text-[var(--wood)]">{eyebrow}</p>
      ) : null}
      <Heading className="qa-title max-w-[30ch]">{title}</Heading>
    </header>
  );
}
