/** Free shipping at $68+; otherwise $10 flat rate. */
export const FREE_SHIPPING_THRESHOLD_CENTS = 6800;
export const SHIPPING_COST_CENTS = 1000;

export function parsePriceDisplay(display?: string): number {
  if (!display || display.trim() === "—") return 0;
  const cleaned = display.replace(/[^0-9.]/g, "");
  const value = Number.parseFloat(cleaned);
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100);
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}

export function getCartSubtotalCents(
  items: { priceCents: number; quantity: number }[],
): number {
  return items.reduce((sum, row) => sum + row.priceCents * row.quantity, 0);
}

export function getShippingCents(subtotalCents: number): number {
  if (subtotalCents <= 0) return 0;
  return subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : SHIPPING_COST_CENTS;
}

export function getFreeShippingGapCents(subtotalCents: number): number {
  return Math.max(0, FREE_SHIPPING_THRESHOLD_CENTS - subtotalCents);
}

export function freeShippingMessage(subtotalCents: number): string {
  if (subtotalCents <= 0) return "";
  const gap = getFreeShippingGapCents(subtotalCents);
  if (gap <= 0) return "Free shipping unlocked.";
  return `You are ${formatMoney(gap)} away from free shipping.`;
}

export function shippingLabel(subtotalCents: number): string {
  return getShippingCents(subtotalCents) === 0 ? "Free" : formatMoney(SHIPPING_COST_CENTS);
}
