import Image from "next/image";
import Link from "next/link";
import type { MoodRitualSleepRitualSpec } from "@/data/mood-ritual-sections";

type Props = MoodRitualSleepRitualSpec;

export function MoodRitualSleepRitual({
  eyebrow,
  title,
  description,
  cta,
  steps,
}: Props) {
  return (
    <section
      className="mood-ritual-sleep"
      aria-labelledby="mood-ritual-sleep-title"
    >
      <div className="mood-ritual-rail mood-ritual-panel__inner mood-ritual-sleep__inner">
        <div className="mood-ritual-sleep__grid">
          <header className="mood-ritual-sleep__intro">
            <p className="mood-ritual-sleep__eyebrow">{eyebrow}</p>
            <h2 id="mood-ritual-sleep-title" className="mood-ritual-sleep__title">
              {title}
            </h2>
            <p className="mood-ritual-sleep__desc">{description}</p>
            <Link href={cta.href} className="mood-ritual-sleep__cta">
              {cta.label}
              <span aria-hidden>→</span>
            </Link>
          </header>

          {steps.map((step) => (
            <article key={step.number} className="mood-ritual-sleep__step">
              <figure className="mood-ritual-sleep__figure">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 88vw, 22vw"
                  className="mood-ritual-sleep__img"
                  unoptimized
                />
              </figure>
              <div className="mood-ritual-sleep__step-copy">
                <h3 className="mood-ritual-sleep__step-title">
                  <span className="mood-ritual-sleep__step-num">{step.number}</span>
                  {step.title}
                </h3>
                <p className="mood-ritual-sleep__step-desc">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
