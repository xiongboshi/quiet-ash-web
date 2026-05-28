import type { JournalTopicHubId } from "@/data/journal-topic-hubs";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function TopicGlyph({ children }: { children: React.ReactNode }) {
  return <svg {...iconProps}>{children}</svg>;
}

export function JournalDiscoveryTopicIcon({ topicId }: { topicId: JournalTopicHubId }) {
  switch (topicId) {
    case "better-sleep":
      return (
        <TopicGlyph>
          <path d="M16.2 15.8a6.2 6.2 0 1 0-8.5-8.5 4.8 4.8 0 1 1 8.5 8.5Z" />
          <path d="M18.2 7.2l.9.9M18.2 11.4l1.1.35M15.6 4.8l.35 1.05" />
          <circle cx="19.1" cy="5.6" r="0.55" fill="currentColor" stroke="none" />
        </TopicGlyph>
      );
    case "small-space-living":
      return (
        <TopicGlyph>
          <path d="M4.5 12 12 6.5 19.5 12V20H4.5V12Z" />
          <path d="M10 20v-3.8h4V20" />
          <path d="M12 6.5V4.8M9.8 5.6 12 4.2l2.2 1.4" opacity={0.55} />
        </TopicGlyph>
      );
    case "calm-evenings":
      return (
        <TopicGlyph>
          <path d="M5.5 19h13" />
          <path d="M12 6.2V11.5" />
          <path d="M10.2 11.8c.9 1.35 2.7 1.35 3.6 0" />
          <circle cx="16.8" cy="7.4" r="1.35" opacity={0.7} />
        </TopicGlyph>
      );
    case "quiet-routines":
      return (
        <TopicGlyph>
          <path d="M7.5 17.5h9" />
          <path d="M8.8 17.5V14.2h6.4v3.3" />
          <path d="M12 5.2v5.2" />
          <path d="M10.4 6.8c.55-1.1 1.5-1.1 2 0 .65 1.35-.35 2.35-2 2.35s-2.65-1-2-2.35Z" />
          <path d="M12 3.8c0-1 .65-1.65 1.35-1.2" opacity={0.5} />
        </TopicGlyph>
      );
    case "guides-care":
      return (
        <TopicGlyph>
          <path d="M12 20.2s-5.2-3.2-5.2-7.4a3.1 3.1 0 0 1 5.2-1.65 3.1 3.1 0 0 1 5.2 1.65c0 4.2-5.2 7.4-5.2 7.4Z" />
          <path d="M9.4 11.2h5.2M12 8.9v4.6" opacity={0.45} />
        </TopicGlyph>
      );
    default:
      return null;
  }
}
