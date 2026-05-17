import {
  PRIMARY_ARCHIVE_SERIES_SLUG,
  essaysCollectionHref,
} from "./essays-collection";
import { getSeriesBySlug } from "./series";

export { PRIMARY_ARCHIVE_SERIES_SLUG, essaysCollectionHref };

export function resolveActiveCollectionSlug(
  collectionParam: string | string[] | undefined,
): string {
  const raw = Array.isArray(collectionParam)
    ? collectionParam[0]
    : collectionParam;
  const q = typeof raw === "string" ? raw.trim() : "";
  if (!q) return PRIMARY_ARCHIVE_SERIES_SLUG;
  const s = getSeriesBySlug(q);
  return s ? q : PRIMARY_ARCHIVE_SERIES_SLUG;
}
