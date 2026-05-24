import Link from "next/link";
import { journalIndexPopularQuestions } from "@/data/journal-index";

type Props = {
  showHeader?: boolean;
};

function ArrowIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4 9h9M10 6l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JournalIndexQuestions({ showHeader = true }: Props) {
  return (
    <section className="journal-index-questions" aria-labelledby="journal-questions-heading">
      {showHeader ? (
        <h2 id="journal-questions-heading" className="journal-index-questions__title">
          Popular Questions
        </h2>
      ) : null}

      <ul className="journal-index-questions__grid">
        {journalIndexPopularQuestions.map((item, index) => (
          <li key={item.slug}>
            <Link href={item.href} className="journal-index-questions__card">
              <span className="journal-index-questions__index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="journal-index-questions__card-copy">
                <p className="journal-index-questions__question">{item.question}</p>
                <p className="journal-index-questions__meta">
                  {item.readMinutes} min read
                </p>
              </div>
              <span className="journal-index-questions__arrow">
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
