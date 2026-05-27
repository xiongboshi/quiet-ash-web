type Props = {
  paragraphs: readonly string[];
};

export function JournalArticleIntro({ paragraphs }: Props) {
  if (!paragraphs.length) return null;

  return (
    <section className="journal-article-intro" aria-labelledby="journal-article-intro-heading">
      <h2 id="journal-article-intro-heading" className="journal-article-intro__heading">
        Intro
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="journal-article-intro__paragraph">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
