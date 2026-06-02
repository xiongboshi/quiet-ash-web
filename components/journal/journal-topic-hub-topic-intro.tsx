"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const MOBILE_LEAD_COUNT = 2;
const MOBILE_MEDIA = "(max-width: 767px)";

type Props = {
  title?: string;
  paragraphs: readonly string[];
};

export function JournalTopicHubTopicIntro({
  title = "About this topic",
  paragraphs,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MEDIA);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!paragraphs.length) return null;

  const showToggle = isMobile && paragraphs.length > MOBILE_LEAD_COUNT;
  const bodyClass = [
    "journal-topic-page__topic-intro-body",
    expanded ? "is-expanded" : "",
    showToggle && !expanded ? "is-collapsed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className="journal-topic-page__topic-intro"
      aria-labelledby="journal-topic-intro-heading"
    >
      <header className="journal-topic-page__section-head">
        <h2
          id="journal-topic-intro-heading"
          className="journal-topic-page__section-title"
        >
          {title}
        </h2>
      </header>

      <div className="journal-topic-page__topic-intro-card">
        <div className={bodyClass}>
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "journal-topic-page__topic-intro-p journal-topic-page__topic-intro-p--lead"
                  : "journal-topic-page__topic-intro-p"
              }
            >
              {text}
            </p>
          ))}
        </div>

        {showToggle ? (
          <button
            type="button"
            className="journal-topic-page__topic-intro-toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            <span>{expanded ? "Show less" : "Continue reading"}</span>
            <ChevronDown
              size={16}
              strokeWidth={1.25}
              className={
                expanded
                  ? "journal-topic-page__topic-intro-toggle-icon is-open"
                  : "journal-topic-page__topic-intro-toggle-icon"
              }
              aria-hidden
            />
          </button>
        ) : null}
      </div>
    </section>
  );
}
