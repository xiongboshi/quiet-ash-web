import Link from "next/link";
import { FooterNewsletter } from "@/components/sections/footer-newsletter";
import { FooterSocialIcons } from "@/components/sections/footer-social-icons";
import { siteFooter } from "@/data/site-footer";

function FooterNavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const className = "site-footer__nav-link";

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

type FooterProps = {
  className?: string;
};

/**
 * Site-wide footer — four-column reference layout (black field).
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={["site-footer", className].filter(Boolean).join(" ")}
      aria-label="Site footer"
    >
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <p className="site-footer__logo site-footer__cell--logo">
            {siteFooter.brand}
          </p>

          <nav
            className="site-footer__cell--nav"
            aria-label="Footer"
          >
            <ul className="site-footer__nav-list">
              {siteFooter.nav.map((item) => (
                <li key={item.href + item.label}>
                  <FooterNavLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          <p className="site-footer__tagline site-footer__cell--tagline">
            {siteFooter.tagline}
          </p>

          <div className="site-footer__cell--newsletter-top">
            <p className="site-footer__newsletter-lead">
              {siteFooter.newsletterLead}
            </p>
            <FooterNewsletter />
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copyright site-footer__cell--copyright">
              {siteFooter.copyright}
            </p>

            <div className="site-footer__social-wrap site-footer__cell--social">
              <FooterSocialIcons />
            </div>

            <div className="site-footer__legal-row site-footer__cell--legal">
              {siteFooter.legal.map((item, index) => (
                <span key={item.href + item.label} className="site-footer__legal-item">
                  {index > 0 ? (
                    <span className="site-footer__legal-sep" aria-hidden>
                      {" "}
                    </span>
                  ) : null}
                  <Link href={item.href} className="site-footer__legal-link">
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
