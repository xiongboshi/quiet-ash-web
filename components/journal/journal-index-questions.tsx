"use client";

import { useId, useState } from "react";
import {
  journalPopularQuestions,
  type JournalFaqBlock,
} from "@/data/journal-popular-questions";

type Props = {
  showHeader?: boolean;
};

function FaqArrowIcon() {
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

function FaqAnswer({ blocks }: { blocks: readonly JournalFaqBlock[] }) {
  return (
    <div className="journal-index-faq__answer">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={`p-${index}`} className="journal-index-faq__paragraph">
              {block.text}
            </p>
          );
        }
        if (block.type === "subheading") {
          return (
            <p key={`h-${index}`} className="journal-index-faq__subheading">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={`l-${index}`} className="journal-index-faq__bullets">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function JournalIndexQuestions({ showHeader = true }: Props) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="journal-index-faq" aria-labelledby="journal-questions-heading">
      {showHeader ? (
        <h2 id="journal-questions-heading" className="journal-index-faq__title">
          Popular Questions
        </h2>
      ) : null}

      <ul className="journal-index-faq__grid">
        {journalPopularQuestions.map((item) => {
          const isOpen = openIds.has(item.id);
          const panelId = `${baseId}-${item.id}`;

          return (
            <li
              key={item.id}
              className={`journal-index-faq__card${isOpen ? " journal-index-faq__card--open" : ""}`}
            >
              <div className="journal-index-faq__card-inner">
                <h3 className="journal-index-faq__question-wrap">
                  <button
                    type="button"
                    className="journal-index-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="journal-index-faq__question">{item.question}</span>
                    <span className="journal-index-faq__arrow" aria-hidden>
                      <FaqArrowIcon />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className="journal-index-faq__panel"
                  aria-hidden={!isOpen}
                  {...(!isOpen ? { inert: true } : {})}
                >
                  <div className="journal-index-faq__panel-inner">
                    <FaqAnswer blocks={item.answer} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
