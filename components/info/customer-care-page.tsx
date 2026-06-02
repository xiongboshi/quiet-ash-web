import type { ReactNode } from "react";
import Link from "next/link";
import { CustomerCareFaq } from "@/components/info/customer-care-faq";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import type { CustomerCareBlock, CustomerCarePageContent } from "@/types/customer-care";

function CustomerCareBlockSection({ block }: { block: CustomerCareBlock }) {
  if (block.type === "prose") {
    return (
      <section>
        {block.heading ? (
          <h2 className="customer-care__heading">{block.heading}</h2>
        ) : null}
        <div className="customer-care__prose">
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "list") {
    return (
      <section>
        {block.heading ? (
          <h2 className="customer-care__heading">{block.heading}</h2>
        ) : null}
        <ul className="customer-care__list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <CustomerCareFaq
      items={block.items}
      title={block.heading ?? "Frequently asked questions"}
      titleId={block.heading ? undefined : "customer-care-faq-heading"}
    />
  );
}

type Props = {
  content: CustomerCarePageContent;
  /** Rendered directly under the page intro (e.g. track-order lookup). */
  afterIntro?: ReactNode;
  children?: ReactNode;
};

export function CustomerCarePage({ content, afterIntro, children }: Props) {
  const eyebrow = content.eyebrow ?? "Customer care";

  return (
    <PageShell className="customer-care-page">
      <Container className="customer-care">
        <header className="customer-care__header">
          <p className="qa-eyebrow">{eyebrow}</p>
          <h1 className="customer-care__title">{content.title}</h1>
          {content.intro?.length ? (
            <div className="customer-care__intro">
              {content.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ) : null}
        </header>

        {afterIntro}

        <div className="customer-care__body">
          {content.blocks.map((block, index) => (
            <CustomerCareBlockSection
              key={block.heading ?? `${block.type}-${index}`}
              block={block}
            />
          ))}
          {children}
        </div>

        {content.relatedLinks?.length ? (
          <nav className="customer-care__related" aria-label="Related customer care pages">
            <p className="customer-care__related-label">Related</p>
            <ul className="customer-care__related-list">
              {content.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="customer-care__related-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <p className="customer-care__back">
          <Link href="/help" className="customer-care__back-link">
            ← Help Centre
          </Link>
        </p>
      </Container>
    </PageShell>
  );
}
