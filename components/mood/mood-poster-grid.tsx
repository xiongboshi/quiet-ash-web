import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandHome } from "@/data/brand-home";
import { brandMoods, type BrandMood } from "@/data/brand-moods";
import { MoodPosterIcon } from "@/components/mood/mood-poster-icon";

function MoodPosterCard({ mood }: { mood: BrandMood }) {
  return (
    <Link
      href={mood.href}
      className="qa-mood-poster group relative flex w-full min-h-[308px] flex-col overflow-hidden rounded-[4px] no-underline sm:min-h-[340px] md:w-[calc(100%-10px)] md:justify-self-center lg:min-h-[380px]"
      style={
        {
          "--mood-poster-bg": mood.posterBg,
          "--mood-poster-ink": "#1c1c1c",
        } as CSSProperties
      }
    >
      <div
        className="qa-mood-poster-visual pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          key={mood.imageSrc}
          src={mood.imageSrc}
          alt={mood.imageAlt}
          fill
          className="qa-mood-poster-photo object-cover"
          style={
            mood.imageObjectPosition
              ? { objectPosition: mood.imageObjectPosition }
              : undefined
          }
          sizes="(max-width: 1023px) 100vw, 320px"
          unoptimized
        />
      </div>

      <div className="qa-mood-poster-head relative z-[2] w-1/2 max-w-[50%] px-5 pt-5 sm:px-6 sm:pt-6">
        <MoodPosterIcon id={mood.icon} />
        <p className="qa-mood-poster-label mt-4">
          {mood.label}
        </p>
        <p className="qa-mood-poster-tagline mt-2">
          {mood.tagline}
        </p>
        <span
          className="qa-mood-poster-arrow mt-4 inline-block text-[15px] font-light leading-none text-[color-mix(in_srgb,var(--mood-poster-ink)_55%,transparent)] transition-transform duration-500 group-hover:translate-x-0.5 sm:mt-5"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}

export function MoodPosterGrid() {
  const { moods } = brandHome;

  return (
    <section
      id="moods"
      className="scroll-mt-28 bg-white px-[var(--mood-px)] py-[28px]"
    >
      <div className="mx-auto max-w-[min(100%,1680px)]">
        <h2 className="qa-mood-section-heading">{moods.eyebrow}</h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {brandMoods.map((mood) => (
            <MoodPosterCard key={mood.slug} mood={mood} />
          ))}
        </div>
      </div>
    </section>
  );
}
