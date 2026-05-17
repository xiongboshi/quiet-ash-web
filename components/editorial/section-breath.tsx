type Props = {
  /** Larger pause between major narrative beats */
  size?: "full" | "tight";
  /** Surface under the breath (helps dark→light handoff) */
  tone?: "paper" | "soft";
};

/**
 * Vertical pause only — no copy. Use between editorial / commerce blocks
 * so the page reads like a magazine, not a stacked template.
 */
export function SectionBreath({ size = "full", tone = "paper" }: Props) {
  const pad = size === "full" ? "qa-breath-full" : "qa-breath-tight";
  const surface =
    tone === "soft" ? "qa-breath-surface-soft" : "qa-breath-surface-paper";
  return (
    <div
      className={`${pad} ${surface}`.trim()}
      aria-hidden
    />
  );
}
