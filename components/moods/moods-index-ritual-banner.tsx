import Image from "next/image";
import Link from "next/link";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  steps: readonly string[];
};

export function MoodsIndexRitualBanner({
  imageSrc,
  imageAlt,
  title,
  description,
  cta,
  steps,
}: Props) {
  return (
    <section className="mood-ritual-banner-section">
      <div className="container">
        <div className="mood-ritual-banner">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="mood-ritual-banner-photo"
          />
          <div className="mood-ritual-banner-scrim" aria-hidden />
          <div className="mood-ritual-banner-grid">
            <div className="mood-ritual-banner-copy">
              <h2 className="mood-ritual-banner-title">{title}</h2>
              <p className="mood-ritual-banner-desc">{description}</p>
              <Link href={cta.href} className="mood-ritual-banner-cta">
                {cta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
            <ul className="mood-ritual-steps">
              {steps.map((step, i) => (
                <li key={step}>
                  <span>{step}</span>
                  {i < steps.length - 1 ? (
                    <span className="mood-ritual-step-line" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
