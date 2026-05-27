import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/** `router.back()` when history exists; otherwise navigate to fallback. */
export function navigateHistoryBack(
  router: AppRouterInstance,
  fallbackHref: string,
): void {
  if (typeof window !== "undefined" && window.history.length > 1) {
    router.back();
    return;
  }
  router.push(fallbackHref);
}
