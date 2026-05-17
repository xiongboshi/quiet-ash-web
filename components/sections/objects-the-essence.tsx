import { EssenceBand } from "@/components/sections/essence-band";

const OBJECTS_ESSENCE_IMG = "/images/generated/objects-essence-hero.png";

/**
 * Objects index — same {@link EssenceBand} shell as `/rituals`.
 */
export function ObjectsTheEssence() {
  return (
    <EssenceBand
      eyebrow="OBJECTS"
      titleLines={["Objects for", "slower living."]}
      body="Tea, incense, wood, and tools chosen for quiet rooms and daily rituals."
      imageSrc={OBJECTS_ESSENCE_IMG}
    />
  );
}
