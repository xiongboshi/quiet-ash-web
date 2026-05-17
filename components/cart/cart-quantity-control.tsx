"use client";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

/** Minimal quantity rail — matches cart mockup. */
export function CartQuantityControl({ quantity, onDecrease, onIncrease }: Props) {
  return (
    <div
      className="inline-flex h-9 min-w-[88px] items-stretch border border-[#D9D3CA] bg-[var(--qa-bg)]"
      role="group"
      aria-label="Quantity"
    >
      <button
        type="button"
        onClick={onDecrease}
        className="flex w-9 items-center justify-center font-[family-name:var(--font-sans)] text-[15px] font-light leading-none text-[#6F6A63] transition-opacity hover:opacity-70"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="flex min-w-[28px] flex-1 items-center justify-center border-x border-[#D9D3CA] font-[family-name:var(--font-sans)] text-[12px] tabular-nums text-[var(--qa-text)]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex w-9 items-center justify-center font-[family-name:var(--font-sans)] text-[15px] font-light leading-none text-[#6F6A63] transition-opacity hover:opacity-70"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
