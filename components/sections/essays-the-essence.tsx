import { EssenceBand } from "@/components/sections/essence-band";
import { seriesTitleLines } from "@/lib/series-title-lines";
import type { SeriesMeta } from "@/lib/series";

const ESSAYS_ESSENCE_FALLBACK_IMG =
  "/images/generated/series-incense-culture.png";

/**
 * Essays index — same {@link EssenceBand} shell as `/rituals` and `/objects`.
 */
export function EssaysTheEssence({ series }: { series: SeriesMeta }) {
  const body =
    series.description.trim() ||
    series.tagline?.trim() ||
    "Essays on ritual, restraint, and quiet rooms.";

  return (
    <EssenceBand
      eyebrow="ESSAYS"
      titleLines={seriesTitleLines(series.title)}
      body={body}
      imageSrc={series.cover ?? ESSAYS_ESSENCE_FALLBACK_IMG}
    />
  );
}
