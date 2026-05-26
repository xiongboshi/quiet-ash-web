import { SHOP_INDEX } from "@/lib/site-paths";

/** Query param for pre-selecting a mood filter on the incense PLP. */
export const SHOP_MOOD_QUERY_KEY = "mood";

export function shopMoodFilterHref(
  moodOptionId: string,
  pathname: string = SHOP_INDEX,
): string {
  const params = new URLSearchParams();
  params.set(SHOP_MOOD_QUERY_KEY, moodOptionId);
  return `${pathname}?${params.toString()}`;
}

export function parseShopMoodFromSearchParams(
  searchParams: Pick<URLSearchParams, "get">,
  validMoodIds: readonly string[],
): string | null {
  const mood = searchParams.get(SHOP_MOOD_QUERY_KEY);
  if (!mood || !validMoodIds.includes(mood)) return null;
  return mood;
}
