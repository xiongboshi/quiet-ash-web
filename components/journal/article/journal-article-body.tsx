import type { JournalArticleSection } from "@/types/journal-article";

type Props = {
  sections: readonly JournalArticleSection[];
};

export function JournalArticleBody({ sections }: Props) {
  return (
    <div className="journal-article-body">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="journal-article-body__section"
        >
          <h2 className="journal-article-body__heading">
            {section.number !== undefined ? (
              <>
                <span className="journal-article-body__heading-num">
                  {section.number}.
                </span>{" "}
              </>
            ) : null}
            {section.heading}
          </h2>

          {section.paragraphs?.map((paragraph, index) => (
            <p key={`${section.id}-p-${index}`} className="journal-article-body__paragraph">
              {paragraph}
            </p>
          ))}

          {section.bullets && section.bullets.length > 0 ? (
            <ul className="journal-article-body__list">
              {section.bullets.map((bullet) => (
                <li key={`${bullet.lead ?? ""}-${bullet.text}`}>
                  {bullet.lead ? (
                    <>
                      <strong>{bullet.lead}</strong>
                      {" – "}
                      {bullet.text}
                    </>
                  ) : (
                    bullet.text
                  )}
                </li>
              ))}
            </ul>
          ) : null}

          {section.subsections?.map((sub, subIndex) => (
            <div
              key={`${section.id}-sub-${subIndex}`}
              className="journal-article-body__subsection"
            >
              {sub.heading ? (
                <h3 className="journal-article-body__subheading">{sub.heading}</h3>
              ) : null}
              {sub.paragraphs?.map((paragraph, index) => (
                <p
                  key={`${section.id}-sub-${subIndex}-p-${index}`}
                  className="journal-article-body__paragraph"
                >
                  {paragraph}
                </p>
              ))}
              {sub.bullets && sub.bullets.length > 0 ? (
                <ul className="journal-article-body__list">
                  {sub.bullets.map((bullet) => (
                    <li key={`${bullet.lead ?? ""}-${bullet.text}`}>
                      {bullet.lead ? (
                        <>
                          <strong>{bullet.lead}</strong>
                          {" – "}
                          {bullet.text}
                        </>
                      ) : (
                        bullet.text
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
