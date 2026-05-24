type IconProps = { size?: number; className?: string };

const stroke = {
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NavSearchIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" {...stroke} />
      <path d="M16 16l5 5" stroke="currentColor" {...stroke} />
    </svg>
  );
}

export function NavUserIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="8.25" r="3.25" stroke="currentColor" {...stroke} />
      <path
        d="M5.5 19.5c1.35-3.1 4.05-4.75 6.5-4.75s5.15 1.65 6.5 4.75"
        stroke="currentColor"
        {...stroke}
      />
    </svg>
  );
}

export function NavCartIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M4.5 5h1.35l1.65 9.25h11.5L20.5 8.5H7.25"
        stroke="currentColor"
        {...stroke}
      />
      <circle cx="10" cy="19" r="1.15" fill="currentColor" />
      <circle cx="17" cy="19" r="1.15" fill="currentColor" />
    </svg>
  );
}
