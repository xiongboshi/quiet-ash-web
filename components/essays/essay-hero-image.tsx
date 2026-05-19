import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

export function EssayHeroImage({ src, title }: Props) {
  return (
    <figure className="relative aspect-[16/11] w-full overflow-hidden bg-[#0c0a09] sm:aspect-[2/1]">
      <Image
        src={src}
        alt={`Editorial photograph for the essay: ${title}`}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, min(1200px, 92vw)"
        unoptimized
        className="object-cover object-center opacity-[0.9]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,#0c0a09_38%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage: "url(/textures/grain.svg)",
          backgroundSize: "256px",
        }}
        aria-hidden
      />
    </figure>
  );
}
