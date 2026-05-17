import Link from "next/link";
import { defaultFooter } from "@/data/home";
import { siteContact } from "@/data/site";

export type FooterProps = Partial<typeof defaultFooter>;

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterLink({
  item,
  className,
}: {
  item: FooterLinkItem;
  className: string;
}) {
  const cls = `qa-cta qa-cta--still ${className}`;
  const external =
    item.external ??
    (/^https?:\/\//i.test(item.href) && !item.href.startsWith("mailto:"));

  if (item.href.startsWith("mailto:")) {
    return (
      <a
        href={item.href}
        className={`${cls} normal-case tracking-[0.04em]`}
      >
        {item.label}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={item.href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={cls}>
      {item.label}
    </Link>
  );
}

/**
 * Homepage footer — five-column reference rail; mobile stacks the same order.
 */
export function Footer(props: FooterProps = {}) {
  const p = {
    ...defaultFooter,
    ...props,
    columns: props.columns ?? defaultFooter.columns,
  };
  const year = new Date().getFullYear();
  const { columns } = p;

  const linkClass =
    "block font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.18em] text-[rgba(255,255,255,0.72)] no-underline transition-none";

  const colHeadingClass =
    "mb-6 font-[family-name:var(--font-sans)] text-[10px] font-normal uppercase tracking-[0.24em] text-[rgba(255,255,255,0.34)]";

  return (
    <footer className="border-t border-black bg-[#030303] text-[#8a8580]">
      <div className="mx-auto w-full max-w-[1680px] px-6 pb-[48px] pt-[72px] lg:px-12 lg:pb-14 lg:pt-24">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-x-14 lg:gap-y-0">
          <div className="max-w-[300px]">
            <p className="mb-8 font-[family-name:var(--font-serif)] text-[26px] font-light uppercase tracking-[0.32em] text-[rgba(255,255,255,0.55)] lg:mb-0">
              {p.title}
            </p>
            <p className="mb-0 font-[family-name:var(--font-sans)] text-[16px] font-normal leading-[1.75] text-[rgba(255,255,255,0.58)] lg:mt-8">
              {p.body}
            </p>
            <a
              href={`mailto:${siteContact.email}`}
              className="qa-cta qa-cta--still mt-6 inline-block font-[family-name:var(--font-sans)] text-[13px] font-normal tracking-[0.04em] text-[rgba(255,255,255,0.72)] no-underline normal-case transition-none hover:text-white"
            >
              {siteContact.email}
            </a>
            <p className="mt-10 font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase leading-[2] tracking-[0.16em] text-[rgba(255,255,255,0.32)] lg:mt-12">
              © {year} {p.title}. {p.legal}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 lg:contents">
            <div className="lg:mt-0">
              <p className={colHeadingClass}>{columns.shopTitle}</p>
              <ul className="m-0 flex list-none flex-col gap-0 p-0">
              {columns.shop.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className={`qa-cta qa-cta--still ${linkClass}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:mt-0">
            <p className={colHeadingClass}>{columns.infoTitle}</p>
            <ul className="m-0 flex list-none flex-col gap-0 p-0">
              {columns.info.map((item) => (
                <li key={item.href + item.label}>
                  <FooterLink item={item} className={linkClass} />
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="max-w-xs lg:mt-0">
            <p className={colHeadingClass}>{columns.newsletterTitle}</p>
            <p className="m-0 font-[family-name:var(--font-sans)] text-[13px] font-normal leading-[1.65] text-[rgba(255,255,255,0.32)]">
              {columns.newsletterBlurb}
            </p>
            <div className="mt-8 flex h-[42px] items-end border-b border-white/10">
              <input
                type="email"
                name="newsletter-email"
                autoComplete="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent pb-1 font-[family-name:var(--font-sans)] text-[15px] text-[rgba(255,255,255,0.64)] outline-none placeholder:text-[rgba(255,255,255,0.22)]"
                aria-label="Your email for the newsletter"
              />
              <span
                className="shrink-0 pb-1 font-[family-name:var(--font-sans)] text-[11px] tracking-[0.14em] text-[rgba(255,255,255,0.34)]"
                aria-hidden
              >
                →
              </span>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <p className={colHeadingClass}>{columns.followTitle}</p>
            <ul className="m-0 flex list-none flex-col gap-0 p-0">
              {columns.follow.map((item) => (
                <li key={item.href + item.label}>
                  <FooterLink item={item} className={linkClass} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
