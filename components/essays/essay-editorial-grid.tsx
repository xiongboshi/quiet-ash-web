import type { EssayMeta } from "@/lib/essays";
import { EssayCard } from "@/components/ui/EssayCard";

type Props = {
  essays: EssayMeta[];
};

export function EssayEditorialGrid({ essays }: Props) {
  if (!essays.length) {
    return (
      <p className="qa-body py-8 text-[color-mix(in_srgb,var(--wood)_78%,var(--ash))]">
        This shelf is still gathering notes.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
      {essays.map((e) => (
        <EssayCard key={e.slug} essay={e} />
      ))}
    </div>
  );
}
