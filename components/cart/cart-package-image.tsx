import { QaImage as Image } from "@/components/ui/qa-image";

export function CartPackageImage({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`relative mx-auto aspect-[4/3] w-full max-w-[320px] shrink-0 overflow-hidden rounded-sm bg-[#C8C2B8] lg:aspect-auto lg:h-[300px] lg:w-[400px] lg:max-w-none lg:mx-0 ${className}`.trim()}
    >
      <Image
        src="/images/generated/cart-package-wrap.webp"
        alt="Parcel wrapped in recycled paper and linen cord"
        fill
        sizes="(max-width: 1023px) 320px, 400px"
        className="object-cover object-center"
        unoptimized
      />
    </figure>
  );
}
