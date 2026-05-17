import Image from "next/image";

type Props = {
  className?: string;
};

/** Homepage spec quote — seal chop asset (`public/images/generated/quote-seal-stamp.png`). */
export function QuoteSeal({ className = "" }: Props) {
  return (
    <span
      className={`relative inline-flex shrink-0 ${className}`.trim()}
      aria-hidden
    >
      <Image
        src="/images/generated/quote-seal-stamp.png"
        alt=""
        width={96}
        height={96}
        className="h-[60px] w-[60px] object-contain md:h-[80px] md:w-[80px] lg:h-[60px] lg:w-[60px]"
        unoptimized
      />
    </span>
  );
}
