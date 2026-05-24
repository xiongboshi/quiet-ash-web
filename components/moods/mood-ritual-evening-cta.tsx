import Image from "next/image";
import Link from "next/link";
import type { MoodRitualEveningCtaSpec } from "@/data/mood-ritual-sections";

type Props = MoodRitualEveningCtaSpec;

export function MoodRitualEveningCta({
  title,
  description,
  cta,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section className="mood-ritual-cta" aria-labelledby="mood-ritual-cta-title">
      <div className="mood-ritual-cta__backdrop" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="mood-ritual-cta__bg-img"
          unoptimized
        />
        <div className="mood-ritual-cta__scrim" />
      </div>

      <div className="mood-ritual-rail mood-ritual-cta__inner">
        <div className="mood-ritual-cta__copy">
          <h2 id="mood-ritual-cta-title" className="mood-ritual-cta__title">
            {title}
          </h2>
          <p className="mood-ritual-cta__desc">{description}</p>
        </div>
        <Link href={cta.href} className="mood-ritual-cta__btn">
          {cta.label}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
