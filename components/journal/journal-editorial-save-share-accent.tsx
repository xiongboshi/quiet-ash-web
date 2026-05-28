/** Decorative accent for save/share cards — soft smoke arcs, bottom-right. */
export function JournalEditorialSaveShareAccent({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="158"
          cy="178"
          r="52"
          stroke="currentColor"
          strokeOpacity={0.06}
          strokeWidth={0.65}
        />
        <circle
          cx="158"
          cy="178"
          r="72"
          stroke="currentColor"
          strokeOpacity={0.035}
          strokeWidth={0.5}
        />
        <path
          d="M172 228C172 188 148 162 152 124C156 88 170 68 164 42"
          stroke="currentColor"
          strokeOpacity={0.14}
          strokeWidth={0.85}
          strokeLinecap="round"
        />
        <path
          d="M186 232C182 192 158 168 162 130C166 94 178 74 172 48"
          stroke="currentColor"
          strokeOpacity={0.09}
          strokeWidth={0.7}
          strokeLinecap="round"
        />
        <path
          d="M158 226C160 186 136 160 140 122C144 86 156 66 150 38"
          stroke="currentColor"
          strokeOpacity={0.06}
          strokeWidth={0.6}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
