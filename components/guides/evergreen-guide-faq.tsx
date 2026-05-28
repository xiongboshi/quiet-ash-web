"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { EVERGREEN_GUIDE_FAQ_CHEVRON } from "@/components/guides/evergreen-guide-icons";
import type { TopicPageFaqItem } from "@/data/journal-topic-page-content";
import type { JournalFaqBlock } from "@/types/journal-faq";

function FaqAnswer({ blocks }: { blocks: readonly JournalFaqBlock[] }) {
  return (
    <div className="evergreen-guide__faq-answer">
      {blocks.map((block, index) =>
        block.type === "paragraph" ? <p key={index}>{block.text}</p> : null,
      )}
    </div>
  );
}

function FaqItem({
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
    <div className="evergreen-guide__faq-item">
      <button
        type="button"
        className="evergreen-guide__faq-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="evergreen-guide__faq-question">{item.question}</span>
        <ChevronDown
          {...EVERGREEN_GUIDE_FAQ_CHEVRON}
          className={`evergreen-guide__faq-chevron${open ? " evergreen-guide__faq-chevron--open" : ""}`}
        />
      </button>
      {open ? (
        <div id={panelId} className="evergreen-guide__faq-panel">
          <FaqAnswer blocks={item.answer} />
        </div>
      ) : null}
    </div>
  );
}

type Props = {
  items: readonly TopicPageFaqItem[];
};

export function EvergreenGuideFaq({ items }: Props) {
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
    <section
      id="faq"
      className="evergreen-guide__faq"
      aria-labelledby="evergreen-guide-faq-heading"
    >
      <h2 id="evergreen-guide-faq-heading" className="evergreen-guide__faq-title">
        Frequently Asked Questions
      </h2>
      <div className="evergreen-guide__faq-columns">
        <div className="evergreen-guide__faq-col">
          {leftColumn.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              baseId={baseId}
              open={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
        <div className="evergreen-guide__faq-col">
          {rightColumn.map((item) => (
            <FaqItem
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
