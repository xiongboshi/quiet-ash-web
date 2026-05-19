import type { MoodIconId } from "@/data/brand-moods";

const iconClass =
  "h-9 w-9 stroke-[var(--mood-poster-ink)] fill-none stroke-[1.15]";

type Props = { id: MoodIconId };

export function MoodPosterIcon({ id }: Props) {
  return (
    <span
      className="qa-mood-poster-icon inline-flex shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--mood-poster-ink)_22%,transparent)]"
      aria-hidden
    >
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden>
        <circle cx="18" cy="18" r="14.5" />
        {id === "calm" && (
          <path d="M18 24c-3.5-2.5-5-5-5-8a5 5 0 0 1 10 0c0 3-1.5 5.5-5 8z" />
        )}
        {id === "energy" && (
          <>
            <circle cx="18" cy="18" r="3.2" />
            <path d="M18 7v3M18 26v3M7 18h3M26 18h3M10.5 10.5l2.1 2.1M23.4 23.4l2.1 2.1M25.5 10.5l-2.1 2.1M12.6 23.4l-2.1 2.1" />
          </>
        )}
        {id === "sleep" && (
          <path d="M22 14a6.5 6.5 0 1 0-8.5 8.2A7.5 7.5 0 1 1 22 14z" />
        )}
        {id === "focus" && (
          <>
            <circle cx="18" cy="18" r="6.5" />
            <circle cx="18" cy="18" r="3.2" />
            <circle cx="18" cy="18" r="1.1" fill="currentColor" stroke="none" />
          </>
        )}
        {id === "rainy-day" && (
          <>
            <path d="M11 17.5a5.5 5.5 0 0 1 10.8-1.2A4.8 4.8 0 0 1 24 20.5H12.5a3 3 0 0 1-.5-3z" />
            <path d="M14 24v2M18 23v3M22 24v2" />
          </>
        )}
      </svg>
    </span>
  );
}
