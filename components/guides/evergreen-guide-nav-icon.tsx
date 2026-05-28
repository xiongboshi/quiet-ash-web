import { candlestickBigLit } from "@lucide/lab";
import {
  Bed,
  BookOpen,
  CircleHelp,
  Flower2,
  Icon,
  Moon,
  Sprout,
  TreePine,
} from "lucide-react";
import type { GuidePageScentIcon, GuidePageTocIcon } from "@/data/evergreen-guide-page-content";
import {
  JOURNAL_EDITORIAL_SCENT_ICON,
  JOURNAL_EDITORIAL_TOC_ICON,
} from "@/components/journal/journal-editorial-icons";

export function EvergreenGuideTocIcon({ icon }: { icon: GuidePageTocIcon }) {
  switch (icon) {
    case "scents":
      return <Sprout {...JOURNAL_EDITORIAL_TOC_ICON} />;
    case "atmosphere":
      return <Bed {...JOURNAL_EDITORIAL_TOC_ICON} />;
    case "rituals":
      return <Moon {...JOURNAL_EDITORIAL_TOC_ICON} />;
    case "incense":
      return <Icon iconNode={candlestickBigLit} {...JOURNAL_EDITORIAL_TOC_ICON} />;
    case "faq":
      return <CircleHelp {...JOURNAL_EDITORIAL_TOC_ICON} />;
    case "articles":
      return <BookOpen {...JOURNAL_EDITORIAL_TOC_ICON} />;
    default:
      return null;
  }
}

export function EvergreenGuideScentIcon({ icon }: { icon: GuidePageScentIcon }) {
  switch (icon) {
    case "moon":
      return <Moon {...JOURNAL_EDITORIAL_SCENT_ICON} />;
    case "sprout":
      return <Flower2 {...JOURNAL_EDITORIAL_SCENT_ICON} />;
    case "tree":
      return <TreePine {...JOURNAL_EDITORIAL_SCENT_ICON} />;
    default:
      return null;
  }
}
