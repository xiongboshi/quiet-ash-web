import Link from "next/link";
import { CustomerCareFaq } from "@/components/info/customer-care-faq";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import type { HelpCenterHubContent } from "@/types/customer-care";

type Props = {
  content: HelpCenterHubContent;
};

export function HelpCenterHub({ content }: Props) {
  return (
    <PageShell className="customer-care-page">
      <Container className="customer-care customer-care--hub">
        <header className="customer-care__header">
          <p className="qa-eyebrow">Customer care</p>
          <h1 className="customer-care__title">{content.title}</h1>
          <div className="customer-care__intro">
            {content.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </header>

        <ul className="customer-care-hub__cards" aria-label="Help topics">
          {content.cards.map((card) => (
            <li key={card.href}>
              <Link href={card.href} className="customer-care-hub__card">
                <span className="customer-care-hub__card-title">{card.title}</span>
                <span className="customer-care-hub__card-desc">{card.description}</span>
                <span className="customer-care-hub__card-arrow" aria-hidden>
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="customer-care-hub__quick" aria-label="Quick links">
          <li>
            <Link href="/track-order">Track my order</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
          <li>
            <Link href="/care">Product care</Link>
          </li>
        </ul>

        <CustomerCareFaq
          items={content.featuredFaqs}
          title="Frequently asked questions"
          titleId="help-center-faq-heading"
        />

        <p className="customer-care__back">
          <Link href="/about" className="customer-care__back-link">
            ← About
          </Link>
        </p>
      </Container>
    </PageShell>
  );
}
