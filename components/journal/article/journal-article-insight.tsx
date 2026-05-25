import { Sparkles } from "lucide-react";
import { JournalArticleTakeawayIcon } from "@/components/journal/article/journal-article-takeaway-icon";
import type {
  JournalArticleQuickAnswer,
  JournalArticleTakeaway,
} from "@/types/journal-article";

type Props = {
  quickAnswer: JournalArticleQuickAnswer;
  keyTakeaways: readonly JournalArticleTakeaway[];
};

export function JournalArticleInsight({
  quickAnswer,
  keyTakeaways,
}: Props) {
  return (
    <section className="journal-article-insight" aria-label="Article summary">
      <div className="journal-article-insight__band">
        <div className="journal-article-insight__shell">
          <div className="journal-article-insight__quick-inner">
            <span className="journal-article-insight__quick-icon" aria-hidden>
              <Sparkles size={20} strokeWidth={1.25} />
            </span>
            <div className="journal-article-insight__quick-copy">
              <h2 className="journal-article-insight__label">Quick answer</h2>
              <p className="journal-article-insight__quick-text">{quickAnswer.text}</p>
            </div>
          </div>

          <div className="journal-article-insight__takeaways-wrap">
            <h2 className="journal-article-insight__label journal-article-insight__label--spaced">
              Key takeaways
            </h2>
            <ul className="journal-article-insight__takeaways">
              {keyTakeaways.map((item, index) => (
                <li
                  key={`${item.icon}-${index}`}
                  className="journal-article-insight__takeaway"
                >
                  <span className="journal-article-insight__takeaway-icon" aria-hidden>
                    <JournalArticleTakeawayIcon id={item.icon} />
                  </span>
                  <p className="journal-article-insight__takeaway-text">
                    {item.text.split("\n").map((line, lineIndex) => (
                      <span
                        key={`${item.icon}-line-${lineIndex}`}
                        className="journal-article-insight__takeaway-line"
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
