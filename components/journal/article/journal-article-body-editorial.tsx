type Props = {
  paragraphs: readonly string[];
  epigraph?: string;
};

export function JournalArticleBodyEditorial({ paragraphs, epigraph }: Props) {
  return (
    <div className="journal-article-body journal-article-body--editorial">
      {epigraph ? (
        <p className="journal-article-body__epigraph">{epigraph}</p>
      ) : null}
      {paragraphs.map((paragraph, index) => (
        <p
          key={`editorial-p-${index}`}
          className={`journal-article-body__paragraph${
            index === 0 ? " journal-article-body__paragraph--lead" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
