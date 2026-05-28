import { EssenceBand } from "@/components/sections/essence-band";

/**
 * Rituals index — paper field + still-life; same shell as {@link EssenceBand}.
 */
export function RitualsTheEssence() {
  return (
    <EssenceBand
      eyebrow="The essence"
      titleLines={["Ways of", "Returning"]}
      body="Each ritual is an invitation to slow down, reconnect, and create space for what truly matters."
      imageSrc="/images/generated/rituals-the-essence.webp"
    />
  );
}
