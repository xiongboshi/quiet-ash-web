import { FREE_SHIPPING_THRESHOLD_CENTS } from "@/lib/shipping-policy";

export { FREE_SHIPPING_THRESHOLD_CENTS } from "@/lib/shipping-policy";

export const SHIPPING_COST_CENTS = 1000;

/** Estimated tax rate shown in order summary (mockup). */
export const ESTIMATED_TAX_RATE = 0.08;

export function parsePriceDisplay(display?: string): number {
  if (!display || display.trim() === "—") return 0;
  const cleaned = display.replace(/[^0-9.]/g, "");
  const value = Number.parseFloat(cleaned);
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100);
}

/** Site-wide price display — whole dollars omit cents (e.g. `$18.00` → `$18`, keeps `$18.50`). */
export function formatPriceDisplay(display?: string): string {
  if (!display?.trim()) return display ?? "";
  return display.trim().replace(/\.00$/, "");
}

/** @alias formatPriceDisplay */
export const formatPriceDisplayCard = formatPriceDisplay;

export function formatMoney(cents: number): string {
  const wholeDollars = cents % 100 === 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: wholeDollars ? 0 : 2,
    maximumFractionDigits: wholeDollars ? 0 : 2,
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

export function freeShippingGapFormatted(subtotalCents: number): string | null {
  if (subtotalCents <= 0) return null;
  const gap = getFreeShippingGapCents(subtotalCents);
  if (gap <= 0) return null;
  return formatMoney(gap);
}

export function freeShippingMessage(subtotalCents: number): string {
  if (subtotalCents <= 0) return "";
  const gap = getFreeShippingGapCents(subtotalCents);
  if (gap <= 0) return "You've unlocked free shipping.";
  return `You're ${formatMoney(gap)} away from free shipping.`;
}

export function shippingProgressPercent(subtotalCents: number): number {
  if (subtotalCents <= 0) return 0;
  return Math.min(100, (subtotalCents / FREE_SHIPPING_THRESHOLD_CENTS) * 100);
}

export function getEstimatedTaxCents(subtotalCents: number): number {
  if (subtotalCents <= 0) return 0;
  return Math.round(subtotalCents * ESTIMATED_TAX_RATE);
}

export function getCartTotalCents(subtotalCents: number): number {
  return subtotalCents + getEstimatedTaxCents(subtotalCents);
}

export function shippingSummaryLabel(): string {
  return "Calculated at checkout";
}
