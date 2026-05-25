/**
 * Site-wide free shipping policy — single source of truth ($75+).
 */

export const FREE_SHIPPING_THRESHOLD_CENTS = 7500;

/** Display label for marketing copy and progress bar (no cents). */
export const FREE_SHIPPING_THRESHOLD_LABEL = "$75" as const;

export function freeShippingThresholdLabel(): string {
  return FREE_SHIPPING_THRESHOLD_LABEL;
}

/** e.g. "On orders over $75" */
export function freeShippingOverOrdersCopy(): string {
  return `On orders over ${FREE_SHIPPING_THRESHOLD_LABEL}`;
}

/** e.g. "Free shipping on orders over $75" */
export function freeShippingOnOrdersOverCopy(): string {
  return `Free shipping on orders over ${FREE_SHIPPING_THRESHOLD_LABEL}`;
}

/** e.g. "Free shipping over $75" */
export function freeShippingOverCopy(): string {
  return `Free shipping over ${FREE_SHIPPING_THRESHOLD_LABEL}`;
}
