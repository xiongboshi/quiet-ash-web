import type { GuidePageTocItem } from "@/data/evergreen-guide-page-content";
import { EvergreenGuideTocIcon } from "@/components/guides/evergreen-guide-nav-icon";

type Props = {
  heading?: string;
  items: readonly GuidePageTocItem[];
};

export function EvergreenGuideToc({ heading = "In This Guide", items }: Props) {
  return (
    <nav className="evergreen-guide__toc" aria-label="In this guide">
      <h2 className="evergreen-guide__toc-heading">{heading}</h2>
      <ol className="evergreen-guide__toc-list">
        {items.map((item) => (
          <li key={`${item.id}-${item.label}`} className="evergreen-guide__toc-item">
            <a href={`#${item.id}`} className="evergreen-guide__toc-link">
              <span className="evergreen-guide__toc-icon-wrap">
                <EvergreenGuideTocIcon icon={item.icon} />
              </span>
              <span className="evergreen-guide__toc-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
