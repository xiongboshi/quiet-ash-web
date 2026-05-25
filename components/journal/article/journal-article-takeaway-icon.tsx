import { Brain, Leaf, ShieldCheck, Waves } from "lucide-react";
import type { JournalTakeawayIconId } from "@/types/journal-article";

const iconProps = {
  size: 22,
  strokeWidth: 1.25,
  "aria-hidden": true as const,
};

export function JournalArticleTakeawayIcon({ id }: { id: JournalTakeawayIconId }) {
  switch (id) {
    case "leaf":
      return <Leaf {...iconProps} />;
    case "brain":
      return <Brain {...iconProps} />;
    case "scent":
      return <Waves {...iconProps} />;
    case "shield":
      return <ShieldCheck {...iconProps} />;
  }
}
