import { objectsArchiveShellClass } from "@/components/sections/objects-archive-shell";

const ITEMS = [
  {
    id: "mindful",
    title: "Mindfully chosen",
    description: "Each object is selected for its purpose and presence.",
    Icon: IconMindful,
  },
  {
    id: "materials",
    title: "Natural materials",
    description: "We use materials that age with beauty and honesty.",
    Icon: IconMaterials,
  },
  {
    id: "lasting",
    title: "Made to last",
    description: "Slow design for everyday use and quiet longevity.",
    Icon: IconLasting,
  },
  {
    id: "shipping",
    title: "Worldwide shipping",
    description: "Thoughtful packaging, carefully delivered.",
    Icon: IconShipping,
  },
] as const;

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

function IconMindful() {
  return (
    <svg {...iconProps}>
      <path d="M8.5 17.5c-2.2-3.8-1.2-8.8 2.2-11.2 3.4-2.4 8.2-1.4 10.3 2.1 2.1 3.5 1.1 8.3-2.3 10.5-2.2 1.4-4.8 1.2-6.7-.2" />
      <path d="M11 12.5c1.8-1.2 4.2-.9 5.6.8" />
    </svg>
  );
}

function IconMaterials() {
  return (
    <svg {...iconProps}>
      <ellipse cx="11" cy="15" rx="5.5" ry="7" transform="rotate(-18 11 15)" />
      <ellipse cx="17.5" cy="13" rx="5.5" ry="7" transform="rotate(14 17.5 13)" />
    </svg>
  );
}

function IconLasting() {
  return (
    <svg {...iconProps}>
      <rect x="5.5" y="5.5" width="17" height="17" rx="2.5" />
      <path d="M9.5 14.2 12.2 17 18.5 10.8" />
    </svg>
  );
}

function IconShipping() {
  return (
    <svg {...iconProps}>
      <path d="M6 10.5h16v11H6z" />
      <path d="M6 10.5 14 6.5l8 4" />
      <path d="M14 10.5v11" />
      <path d="M10.5 14h7" />
    </svg>
  );
}

/** `/objects` value bar below the product grid. */
export function ObjectsValueBar() {
  return (
    <section
      className="border-t border-black/[0.06] bg-[#ebe8e4]"
      aria-label="Our approach"
    >
      <div className={`${objectsArchiveShellClass} py-10 sm:py-11 lg:py-12`}>
        <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {ITEMS.map(({ id, title, description, Icon }) => (
            <li key={id} className="min-w-0">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="shrink-0 text-[color-mix(in_srgb,var(--qa-text)_88%,#6F6A63)]">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block font-[family-name:var(--font-sans)] text-[13px] font-medium leading-[1.35] tracking-[0.01em] text-[var(--qa-text)]">
                    {title}
                  </span>
                  <span className="mt-1 block font-[family-name:var(--font-sans)] text-[12px] font-normal leading-[1.5] tracking-[0.01em] text-[color-mix(in_srgb,var(--qa-muted)_18%,var(--qa-text))]">
                    {description}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
