import Link from "next/link";
import { siteContact } from "@/data/site";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconInstagram() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5c-2.2 0-3.5 1.5-3.5 3.2 0 1.2.6 2 1 2.3.1.1.15.05.2-.1l.35-1.35c.05-.15.03-.2-.1-.15-.35.15-.6.55-.6 1 0 1.15.95 2.1 2.3 2.1 1.9 0 3.15-1.75 3.15-4.05C14.8 8.35 13.1 7.5 12 7.5Z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function FooterSocialIcons() {
  return (
    <div className="site-footer__social">
      <Link
        href={siteContact.instagram}
        className="site-footer__social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <IconInstagram />
      </Link>
      <Link
        href={siteContact.pinterest}
        className="site-footer__social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <IconPinterest />
      </Link>
      <Link
        href={`mailto:${siteContact.email}`}
        className="site-footer__social-link"
        aria-label="Email"
      >
        <IconEmail />
      </Link>
    </div>
  );
}
