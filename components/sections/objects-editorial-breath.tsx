import Image from "next/image";

const BREATH_QUOTES = [
  "An object should not ask for attention. Only for return.",
  "What remains in the hand teaches more than what is spoken.",
  "Quiet tools for rooms that breathe slowly.",
] as const;

type Props = {
  index: number;
};

/** Full-width editorial pause every 6 products on `/objects`. */
export function ObjectsEditorialBreath({ index }: Props) {
  const quote = BREATH_QUOTES[(index - 1) % BREATH_QUOTES.length];

  return (
    <li className="col-span-full list-none">
      <div className="grid min-h-[min(280px,52vw)] grid-cols-1 md:min-h-[320px] md:grid-cols-2">
        <figure className="relative min-h-[220px] overflow-hidden bg-[#ece7e1] md:min-h-0 md:h-full">
          <Image
            src="/images/generated/objects-essence-hero.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            className="object-cover object-center brightness-[1.08]"
          />
        </figure>
        <div className="flex flex-col justify-center bg-[#f5f2ed] px-8 py-12 md:px-14 md:py-16 lg:px-20">
          <blockquote className="m-0 max-w-[22ch] border-0 p-0">
            <p className="font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.4vw,1.75rem)] font-light leading-[1.35] tracking-[-0.02em] text-[#171412]">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </li>
  );
}
