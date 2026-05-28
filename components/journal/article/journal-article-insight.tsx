import { Sparkles } from "lucide-react";
import { JournalArticleTakeawayIcon } from "@/components/journal/article/journal-article-takeaway-icon";
import type {
  JournalArticleQuickAnswer,
  JournalArticleTakeaway,
  JournalTakeawayIconId,
} from "@/types/journal-article";

/** Q&A insight band — icon order matches design (leaf → shield → scent → brain). */
const TAKEAWAY_ICON_CYCLE: readonly JournalTakeawayIconId[] = [
  "leaf",
  "shield",
  "scent",
  "brain",
];

type Props = {
  quickAnswer: JournalArticleQuickAnswer;
  keyTakeaways?: readonly JournalArticleTakeaway[];
  keyTakeawayBullets?: readonly string[];
};

function quickAnswerParagraphs(quickAnswer: JournalArticleQuickAnswer): string[] {
  if (quickAnswer.paragraphs?.length) return [...quickAnswer.paragraphs];
  if (quickAnswer.text?.trim()) return [quickAnswer.text.trim()];
  return [];
}

export function JournalArticleInsight({
  quickAnswer,
  keyTakeaways = [],
  keyTakeawayBullets = [],
}: Props) {
  const quickParagraphs = quickAnswerParagraphs(quickAnswer);
  const takeawayItems: JournalArticleTakeaway[] =
    keyTakeaways.length > 0
      ? [...keyTakeaways]
      : keyTakeawayBullets.map((text, index) => ({
          icon: TAKEAWAY_ICON_CYCLE[index % TAKEAWAY_ICON_CYCLE.length]!,
          text,
        }));

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
              {quickParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`journal-article-insight__quick-text${index > 0 ? " journal-article-insight__quick-text--follow" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {takeawayItems.length > 0 ? (
            <div className="journal-article-insight__takeaways-wrap">
              <h2 className="journal-article-insight__label journal-article-insight__label--spaced">
                Key takeaways
              </h2>
              <ul className="journal-article-insight__takeaways">
                {takeawayItems.map((item, index) => (
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
          ) : null}
        </div>
      </div>
    </section>
  );
}
