"use client";

import { useId, useState } from "react";
import { journalDiscoveryFaqItems } from "@/data/journal-index-discovery";
import type { JournalFaqBlock } from "@/types/journal-faq";

function FaqAnswer({ blocks }: { blocks: readonly JournalFaqBlock[] }) {
  return (
    <div className="journal-discovery-faq__answer">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={`p-${index}`}>{block.text}</p>;
        }
        if (block.type === "subheading") {
          return <p key={`h-${index}`} className="journal-discovery-faq__subheading">{block.text}</p>;
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

export function JournalDiscoveryFaqColumn() {
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

  return (
    <div className="journal-discovery-faq">
      {journalDiscoveryFaqItems.map((item) => {
        const open = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id} className="journal-discovery-faq__item">
            <button
              type="button"
              className="journal-discovery-faq__trigger"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <span className="journal-discovery-faq__question">{item.question}</span>
              <span className="journal-discovery-faq__icon" aria-hidden>
                {open ? "−" : "+"}
              </span>
            </button>
            {open ? (
              <div id={panelId} className="journal-discovery-faq__panel">
                <FaqAnswer blocks={item.answer} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
