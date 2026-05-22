import type { MoodsIndexCardIconId } from "@/data/moods-index";

const svgProps = {
  viewBox: "0 0 32 32",
  width: 28,
  height: 28,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MoodsIndexCardIcon({ id }: { id: MoodsIndexCardIconId }) {
  switch (id) {
    case "sleep":
      return (
        <svg {...svgProps}>
          <path d="M20 11a5.5 5.5 0 1 0-7 7.2A6.2 6.2 0 1 1 20 11z" />
          <path d="M23 8l.8 1.6L25.5 10l-1.7 1 .3 1.9-1.6-.9-1.6.9.3-1.9-1.7-1 1.7-.4z" />
        </svg>
      );
    case "calm":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="10" />
          <path d="M10 16h12" />
        </svg>
      );
    case "focus":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="3" />
          <circle cx="16" cy="16" r="7" />
          <circle cx="16" cy="16" r="10.5" />
        </svg>
      );
    case "energy":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="4" />
          <path d="M16 6v2.5M16 23.5V26M6 16h2.5M23.5 16H26M9.2 9.2l1.8 1.8M21 21l1.8 1.8M22.8 9.2 21 11M11 21l-1.8 1.8" />
        </svg>
      );
    case "rain":
      return (
        <svg {...svgProps}>
          <path d="M9 15.5a5 5 0 0 1 9.8-1.2A4.2 4.2 0 0 1 23 17.5H10.5a2.5 2.5 0 0 1-1.5-2z" />
          <path d="M12 21v2M16 20v3M20 21v2" />
        </svg>
      );
    case "ritual":
      return (
        <svg {...svgProps}>
          <ellipse cx="16" cy="23" rx="5" ry="1.2" />
          <path d="M13.5 20.5c2-2 5-2 5 0s3 2 5 0" />
          <path d="M14.5 17.5c1.5-1.8 3.5-1.8 3.5 0s2 1.8 3.5 0" />
        </svg>
      );
  }
}
