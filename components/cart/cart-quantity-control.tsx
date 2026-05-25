"use client";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function CartQuantityControl({ quantity, onDecrease, onIncrease }: Props) {
  return (
    <div className="cart-qty" role="group" aria-label="Quantity">
      <button
        type="button"
        onClick={onDecrease}
        className="cart-qty__btn"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="cart-qty__value">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="cart-qty__btn"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
