import Image from "next/image";
import Link from "next/link";
import { defaultHero } from "@/data/home";
import { HeroNav } from "@/components/sections/hero-nav";

export type HeroProps = Partial<{
  imageSrc: string;
  imagePosition: string;
  /** Display lines for the serif H1; each entry becomes a line break. */
  titleLines: readonly string[] | string[];
  kicker: string;
  title: string;
  tagline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}>;

/**
 * Homepage hero — art-directed lockup. No shared prose stack, no fluid measure.
 * Visual spec lives in `app/globals.css` (`.qa-hero-lockup*`).
 */
export function Hero(props: HeroProps = {}) {
  const defaults = {
    ...defaultHero,
    titleLines: ["Stillness shaped", "by incense"] as const,
  };
  const p = { ...defaults, ...props };
  const titleLines =
    p.titleLines && p.titleLines.length > 0
      ? p.titleLines
      : (["Stillness shaped", "by incense"] as const);
  const imgPos = p.imagePosition ?? "63% 58%";

  return (
    <section className="relative isolate h-svh min-h-0 w-full min-w-0 overflow-hidden bg-[#0b0b0b] lg:min-h-[980px]">
      <HeroNav />

      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={p.imageSrc}
          alt="Short stick incense burning on a wooden desk beside window light, thin smoke rising"
          fill
          priority
          unoptimized
          className="qa-hero-field-img object-cover"
          style={{ objectPosition: imgPos }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: "url(/textures/grain.svg)",
            backgroundSize: "256px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#00000012]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/14 via-black/[0.04] to-transparent"
          aria-hidden
        />
      </div>

      <div className="qa-hero-lockup">
        <h1 className="qa-hero-lockup-h1">
          {titleLines.map((line, i) => (
            <span key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h1>
        {p.kicker ? <p className="qa-hero-lockup-kicker">{p.kicker}</p> : null}
        {p.primaryCta?.label ? (
          <Link href={p.primaryCta.href} className="qa-hero-lockup-cta">
            {p.primaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
