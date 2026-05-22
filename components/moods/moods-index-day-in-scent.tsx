import Image from "next/image";
import Link from "next/link";
import type { MoodsIndexDayScentCard } from "@/data/moods-index";

type Props = {
  title: string;
  subtitle: string;
  cards: readonly MoodsIndexDayScentCard[];
};

function DayScentArrow() {
  return (
    <span className="day-scent-arrow" aria-hidden>
      <svg viewBox="0 0 40 40" width={40} height={40} fill="none">
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth={1} />
        <path
          d="M17 20h8M21 16l4 4-4 4"
          stroke="currentColor"
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function MoodsIndexDayInScent({ title, subtitle, cards }: Props) {
  return (
    <section className="day-in-scent-section">
      <div className="container">
        <div className="day-in-scent-head">
          <h2 className="day-in-scent-title">{title}</h2>
          <p className="day-in-scent-subtitle">{subtitle}</p>
        </div>
        <div className="day-in-scent-grid">
          {cards.map((card) => (
            <Link key={card.time} href={card.href} className="day-scent-card">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="day-scent-photo"
              />
              <div className="day-scent-scrim" aria-hidden />
              <div className="day-scent-top">
                <span className="day-scent-time">{card.time}</span>
                <h3 className="day-scent-name">{card.title}</h3>
              </div>
              <div className="day-scent-bottom">
                <p className="day-scent-tagline">{card.tagline}</p>
                <DayScentArrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
