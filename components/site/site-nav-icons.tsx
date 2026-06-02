type IconProps = { size?: number; className?: string };

/** Nav chrome — search */
export const NAV_ICON_SIZE = 23;
/** Nav chrome — menu (hamburger) */
export const NAV_MENU_ICON_WIDTH = 26;
export const NAV_MENU_ICON_HEIGHT = 28;
/** Nav chrome — cart */
export const NAV_CART_ICON_SIZE = 20;

const stroke = {
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NavSearchIcon({ size = NAV_ICON_SIZE, className }: IconProps) {
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

export function NavMenuIcon({
  size,
  className,
  open = false,
}: IconProps & { open?: boolean }) {
  const width = size ?? NAV_MENU_ICON_WIDTH;
  const height = size ?? NAV_MENU_ICON_HEIGHT;

  if (open) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={className}
      >
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" {...stroke} />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" {...stroke} />
    </svg>
  );
}

export function NavCartIcon({ size = NAV_CART_ICON_SIZE, className }: IconProps) {
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
        d="M16 10a4 4 0 0 1-8 0"
        stroke="currentColor"
        {...stroke}
      />
      <path
        d="M3.103 6.034h17.794"
        stroke="currentColor"
        {...stroke}
      />
      <path
        d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
        stroke="currentColor"
        {...stroke}
      />
    </svg>
  );
}
