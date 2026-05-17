import Image from "next/image";
import { defaultRitualBanner } from "@/data/home";
import { Container } from "@/components/ui/Container";

export type RitualBannerProps = Partial<typeof defaultRitualBanner>;

export function RitualBanner(props: RitualBannerProps = {}) {
  const p = { ...defaultRitualBanner, ...props };
  return (
    <section className="relative min-h-[min(52vh,420px)] overflow-hidden bg-[#161210] text-[#f2ebe6] lg:min-h-[min(56vh,520px)]">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={p.imageSrc}
          alt=""
          fill
          className="qa-presence-img object-cover object-[center_55%] !brightness-[1.12] !contrast-[1.04] saturate-[1.04]"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.38)]" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/75 via-[#0c0a09]/35 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
          style={{
            backgroundImage: "url(/textures/grain.svg)",
            backgroundSize: "256px",
          }}
          aria-hidden
        />
      </div>
      <Container
        variant="wide"
        className="relative flex min-h-[min(52vh,420px)] flex-col justify-center py-[var(--qa-space-dark-y)] lg:min-h-[min(56vh,520px)] lg:max-w-[min(100%,40rem)]"
      >
        <p className="qa-eyebrow-brand mb-4 text-[color-mix(in_srgb,#ece6dc_72%,#8a8178)]">
          {p.eyebrow}
        </p>
        <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,5vw,2.75rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[#faf6f1]">
          {p.title}
        </h2>
        <p className="mt-6 max-w-[26ch] font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2.8vw,1.25rem)] font-normal italic leading-[1.5] tracking-[-0.02em] text-[color-mix(in_srgb,#f5efe8_92%,#c9bfb4)] sm:max-w-[32ch]">
          {p.body}
        </p>
      </Container>
    </section>
  );
}
