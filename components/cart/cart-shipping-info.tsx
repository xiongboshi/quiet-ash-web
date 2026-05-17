const NOTES = [
  { icon: "clock" as const, text: "Ships within 2–4 business days" },
  {
    icon: "gift" as const,
    text: "Wrapped carefully in recycled paper and linen cord",
  },
  { icon: "globe" as const, text: "Worldwide shipping available" },
] as const;

function NoteIcon({ kind }: { kind: (typeof NOTES)[number]["icon"] }) {
  const cn = "h-[17px] w-[17px] shrink-0 text-[#6F6A63]";
  if (kind === "clock") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M12 7.5V12l3.5 2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "gift") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <rect
          x="5.5"
          y="10"
          width="13"
          height="11"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M12 5v16M7.5 10h9"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3.5 12h17M12 3.5c2.8 4 2.8 14 0 18M12 3.5c-2.8 4-2.8 14 0 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CartShippingInfo({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`mt-[28px] mb-0 flex min-w-0 list-none flex-col gap-5 p-0 sm:gap-6 lg:gap-[22px] ${className}`.trim()}
    >
      {NOTES.map(({ icon, text }) => (
        <li
          key={text}
          className="flex items-center gap-3 font-[family-name:var(--font-sans)] text-[13px] font-normal leading-none text-[color-mix(in_srgb,#1A1A1A_82%,#6F6A63)] sm:text-[14px] lg:text-[15px] lg:leading-[1.55]"
        >
          <NoteIcon kind={icon} />
          <span className="whitespace-nowrap">{text}</span>
        </li>
      ))}
    </ul>
  );
}
