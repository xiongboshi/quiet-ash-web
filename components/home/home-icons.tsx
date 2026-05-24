import type { HomeNeedIconId } from "@/data/home-redesign";
import type { HomeStoryFeature } from "@/data/home-redesign";
import {
  BookOpen,
  HandHeart,
  Home,
  Leaf,
  MoonStar,
  Plus,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Sunrise,
} from "lucide-react";

const needLucide = {
  size: 24,
  strokeWidth: 1.2,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const,
};

const storyLucide = {
  size: 28,
  strokeWidth: 1.15,
  "aria-hidden": true as const,
};

/** Unified homepage star fill — matches testimonials brightness */
const HOME_STAR_GOLD = "#e8b84a";
const HOME_STAR_INK = "#1a1a1a";

function HomeStarIcon({
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
      <Star
        size={size}
        fill={color}
        stroke={color}
        strokeWidth={0}
      />
    );
  }

  return (
    <Star
      size={size}
      fill="transparent"
      stroke={color}
      strokeWidth={1.15}
      className="home-stars__empty"
    />
  );
}

function HomeStarPartial({
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
      <HomeStarIcon size={size} filled={false} tone={tone} />
      <span className="home-stars__partial-fill" style={{ width }}>
        <span className="home-stars__partial-inner" style={{ width: size }}>
          <HomeStarIcon size={size} filled tone={tone} />
        </span>
      </span>
    </span>
  );
}

export function HomeNeedIcon({ id }: { id: HomeNeedIconId }) {
  switch (id) {
    case "sleep":
      return <MoonStar {...needLucide} />;
    case "leaf":
      return <Leaf {...needLucide} />;
    case "sun":
      return <Sun {...needLucide} />;
    case "home":
      return <Home {...needLucide} />;
    case "sunrise":
      return <Sunrise {...needLucide} />;
  }
}

export function HomeStoryIcon({ id }: { id: HomeStoryFeature["icon"] }) {
  switch (id) {
    case "craft":
      return <Sprout {...storyLucide} />;
    case "clean":
      return <HandHeart {...storyLucide} />;
    case "support":
      return <Sparkles {...storyLucide} />;
    case "packaging":
      return <BookOpen {...storyLucide} />;
  }
}

export function HomeStarRating({
  variant = "full",
  value,
  tone = "gold",
}: {
  variant?: "full" | "hero" | "testimonials";
  /** 0–5; used with `hero` to render fractional stars (e.g. 4.8) */
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
          <HomeStarIcon key={`full-${i}`} size={size} filled tone={tone} />
        ))}
        {hasPartial ? (
          <HomeStarPartial
            key="partial"
            size={size}
            percent={fraction * 100}
            tone={tone}
          />
        ) : null}
        {Array.from({ length: emptyCount }, (_, i) => (
          <HomeStarIcon key={`empty-${i}`} size={size} filled={false} tone={tone} />
        ))}
      </span>
    );
  }

  return (
    <span className={className} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <HomeStarIcon key={i} size={size} filled tone={tone} />
      ))}
    </span>
  );
}

export function HomePlusIcon() {
  return (
    <Plus
      size={14}
      strokeWidth={1.25}
      aria-hidden
    />
  );
}
