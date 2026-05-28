"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { JOURNAL_EDITORIAL_FAQ_CHEVRON } from "@/components/journal/journal-editorial-icons";
import type { TopicPageFaqItem } from "@/data/journal-topic-page-content";
import type { JournalFaqBlock } from "@/types/journal-faq";

function FaqAnswer({ blocks }: { blocks: readonly JournalFaqBlock[] }) {
  return (
    <div className="journal-topic-page__paa-answer">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={`p-${index}`}>{block.text}</p>;
        }
        if (block.type === "subheading") {
          return (
            <p key={`h-${index}`} className="journal-topic-page__paa-subheading">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={`l-${index}`}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

function PaaItem({
  item,
  baseId,
  open,
  onToggle,
}: {
  item: TopicPageFaqItem;
  baseId: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `${baseId}-${item.id}`;
  return (
    <div className="journal-topic-page__paa-item">
      <button
        type="button"
        className="journal-topic-page__paa-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="journal-topic-page__paa-question">{item.question}</span>
        <ChevronDown
          {...JOURNAL_EDITORIAL_FAQ_CHEVRON}
          className={`journal-topic-page__paa-chevron${open ? " journal-topic-page__paa-chevron--open" : ""}`}
        />
      </button>
      {open ? (
        <div id={panelId} className="journal-topic-page__paa-panel">
          <FaqAnswer blocks={item.answer} />
        </div>
      ) : null}
    </div>
  );
}

type Props = {
  items: readonly TopicPageFaqItem[];
};

export function JournalTopicHubPeopleAlsoAsk({ items }: Props) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const leftColumn = items.filter((_, index) => index % 2 === 0);
  const rightColumn = items.filter((_, index) => index % 2 === 1);

  return (
    <section className="journal-topic-page__paa" aria-labelledby="journal-topic-paa-heading">
      <h2 id="journal-topic-paa-heading" className="journal-topic-page__paa-title">
        People Also Ask
      </h2>
      <div className="journal-topic-page__paa-columns">
        <div className="journal-topic-page__paa-col">
          {leftColumn.map((item) => (
            <PaaItem
              key={item.id}
              item={item}
              baseId={baseId}
              open={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
        <div className="journal-topic-page__paa-col">
          {rightColumn.map((item) => (
            <PaaItem
              key={item.id}
              item={item}
              baseId={baseId}
              open={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
