import { QaImage as Image } from "@/components/ui/qa-image";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import Link from "next/link";

export function CartEmpty() {
  return (
    <div className="m-0 flex flex-col gap-0 border-t border-[#DDD7CF] pt-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:pt-20">
      <div className="min-w-0 lg:max-w-[min(100%,20rem)] lg:pt-2">
        <p className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,4.5vw,2rem)] font-light leading-[1.3] tracking-[-0.035em] text-[var(--qa-text)]">
          No objects have been gathered yet.
        </p>
        <Link
          href={SHOP_INDEX}
          className="qa-cta qa-cta--still mt-0 inline-block font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.18em] text-[#6F6A63] underline decoration-[color-mix(in_srgb,#6F6A63_40%,transparent)] underline-offset-[6px]"
        >
          Return to the objects
        </Link>
      </div>
      <figure className="relative aspect-[4/3] w-full overflow-hidden bg-[#161210] lg:aspect-[16/10] lg:max-w-[min(100%,52%)] lg:flex-1">
        <Image
          src="/images/generated/ritual-smoke-void.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover object-center"
          unoptimized
        />
      </figure>
    </div>
  );
}
