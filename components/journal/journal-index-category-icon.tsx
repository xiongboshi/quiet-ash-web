import type { JournalCategoryId } from "@/data/journal-index";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function TopicIcon({ children }: { children: React.ReactNode }) {
  return <svg {...iconProps}>{children}</svg>;
}

export function JournalIndexCategoryIcon({
  categoryId,
}: {
  categoryId: JournalCategoryId;
}) {
  switch (categoryId) {
    case "all":
      return (
        <TopicIcon>
          <path d="M5.5 3.5h7v11h-7z" />
          <path d="M7 6.5h4M7 9h4M7 11.5h2.5" />
        </TopicIcon>
      );
    case "better-sleep":
      return (
        <TopicIcon>
          <path d="M4 10.5 9 6.5l5 4" />
          <path d="M6.5 13.5h5" />
        </TopicIcon>
      );
    case "small-space-living":
      return (
        <TopicIcon>
          <path d="M3.5 8.5 9 4l5.5 4.5V15h-11V8.5Z" />
          <path d="M7 15v-2.5h4V15" />
        </TopicIcon>
      );
    case "calm-evenings":
      return (
        <TopicIcon>
          <path d="M9 14.5c3.5-2.5 5-5 5-7.5a3 3 0 1 0-6 0c0 1.2.6 2.2 1.5 3" />
          <path d="M9 14.5C5.5 12 4 9.5 4 7a3 3 0 1 1 6 0c0 1.2-.6 2.2-1.5 3" />
        </TopicIcon>
      );
    case "quiet-routines":
      return (
        <TopicIcon>
          <circle cx="9" cy="6" r="2" />
          <path d="M4.5 14.5c1.4-2 3-3 4.5-3s3.1 1 4.5 3" />
        </TopicIcon>
      );
    case "guides-care":
      return (
        <TopicIcon>
          <path d="M9 4.5a4 4 0 1 0 0 7.2V14" />
          <circle cx="9" cy="8.5" r="0.75" fill="currentColor" stroke="none" />
        </TopicIcon>
      );
    case "popular-questions":
      return (
        <TopicIcon>
          <circle cx="9" cy="9" r="5.5" />
          <path d="M7.2 7a1.8 1.8 0 1 1 2.9 1.4c-.8.6-1.1 1-1.1 1.6" />
          <circle cx="9" cy="12.75" r="0.5" fill="currentColor" stroke="none" />
        </TopicIcon>
      );
    default:
      return null;
  }
}
