const STAR_PATH =
  "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z";

function StarSvg({
  size,
  fill,
  stroke,
  strokeWidth,
  className,
}: {
  size: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

const HOME_STAR_GOLD = "#e8b84a";
const HOME_STAR_INK = "#1a1a1a";

function StarIcon({
  size,
  filled = true,
  tone = "gold",
}: {
  size: number;
  filled?: boolean;
  tone?: "gold" | "ink";
}) {
  const color = tone === "ink" ? HOME_STAR_INK : HOME_STAR_GOLD;

  if (filled) {
    return (
      <StarSvg size={size} fill={color} stroke={color} strokeWidth={0} />
    );
  }

  return (
    <StarSvg
      size={size}
      fill="transparent"
      stroke={color}
      strokeWidth={1.15}
      className="home-stars__empty"
    />
  );
}

function StarPartial({
  size,
  percent,
  tone = "gold",
}: {
  size: number;
  percent: number;
  tone?: "gold" | "ink";
}) {
  const width = `${Math.min(100, Math.max(0, percent))}%`;

  return (
    <span
      className="home-stars__partial"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <StarIcon size={size} filled={false} tone={tone} />
      <span className="home-stars__partial-fill" style={{ width }}>
        <span className="home-stars__partial-inner" style={{ width: size }}>
          <StarIcon size={size} filled tone={tone} />
        </span>
      </span>
    </span>
  );
}

/** Inline SVG stars �?shared by shop PLP, PDP, and homepage (no lucide Star). */
export function HomeStarRating({
  variant = "full",
  value,
  tone = "gold",
}: {
  variant?: "full" | "hero" | "testimonials";
  value?: number;
  tone?: "gold" | "ink";
}) {
  const size =
    variant === "hero" ? 16 : variant === "testimonials" ? 15 : 14;
  const className = [
    "home-stars",
    variant === "hero" ? "home-stars--hero" : "",
    tone === "ink" ? "home-stars--ink" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "hero" && value !== undefined) {
    const clamped = Math.min(5, Math.max(0, value));
    const fullCount = Math.floor(clamped);
    const fraction = clamped - fullCount;
    const hasPartial = fraction > 0.001 && fullCount < 5;
    const emptyCount = 5 - fullCount - (hasPartial ? 1 : 0);

    return (
      <span className={className} aria-hidden>
        {Array.from({ length: fullCount }, (_, i) => (
          <StarIcon key={`full-${i}`} size={size} filled tone={tone} />
        ))}
        {hasPartial ? (
          <StarPartial
            key="partial"
            size={size}
            percent={fraction * 100}
            tone={tone}
          />
        ) : null}
        {Array.from({ length: emptyCount }, (_, i) => (
          <StarIcon key={`empty-${i}`} size={size} filled={false} tone={tone} />
        ))}
      </span>
    );
  }

  return (
    <span className={className} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={size} filled tone={tone} />
      ))}
    </span>
  );
}
