import type { MoodsIndexValueItem } from "@/data/moods-index";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.15,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconNatural() {
  return (
    <svg {...iconProps}>
      <path d="M14 6.5c-1.2 2.8-3.8 5.2-6.5 6.2 2.4 1.8 5.6 2 8 0.5" />
      <path d="M14 6.5c1.2 2.8 3.8 5.2 6.5 6.2-2.4 1.8-5.6 2-8 0.5" />
      <path d="M14 6.5v15" />
      <path d="M10.5 18.5c1.2 1.6 2.4 2.2 3.5 2.2s2.3-.6 3.5-2.2" />
    </svg>
  );
}

function IconHandcrafted() {
  return (
    <svg {...iconProps}>
      <path d="M11.5 12.5c-1.2-2.2-.4-5 1.8-6.2 1.6-.9 3.5-.5 4.7 1" />
      <path d="M16.5 7.3c2.4 1.4 3.4 4.6 2.2 7.1l-2.4 5.2c-.8 1.7-2.6 2.6-4.4 2.2l-1.8-.5" />
      <circle cx="14.5" cy="14" r="2.2" />
    </svg>
  );
}

function IconSustainable() {
  return (
    <svg {...iconProps}>
      <path d="M14 6.5c-4.5 5.5-5.5 11.5-3.5 15.5 4-1.5 7-5.5 7.5-10.5" />
      <path d="M14 6.5c4.5 5.5 5.5 11.5 3.5 15.5-4-1.5-7-5.5-7.5-10.5" />
      <path d="M14 6.5v15" />
    </svg>
  );
}

function IconShipping() {
  return (
    <svg {...iconProps}>
      <path d="M5.5 12.5h11.5l2.5 3.5H22v5.5H5.5z" />
      <path d="M17 12.5V9.5h4.5l2 3v3.5H17" />
      <circle cx="9" cy="21" r="1.6" />
      <circle cx="19" cy="21" r="1.6" />
      <path d="M14.5 14.5h2.2v2.2H14.5z" />
    </svg>
  );
}

const ICONS = {
  natural: IconNatural,
  handcrafted: IconHandcrafted,
  sustainable: IconSustainable,
  shipping: IconShipping,
} as const;

type Props = {
  items: readonly MoodsIndexValueItem[];
};

export function MoodsIndexValueBar({ items }: Props) {
  return (
    <footer className="mood-value-bar-section" aria-label="Site footer">
      <div className="container">
        <ul className="mood-value-bar-list">
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.id} className="mood-value-bar-item">
                <span className="mood-value-bar-icon">
                  <Icon />
                </span>
                <span className="mood-value-bar-copy">
                  <span className="mood-value-bar-title">{item.title}</span>
                  <span className="mood-value-bar-desc">{item.description}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
