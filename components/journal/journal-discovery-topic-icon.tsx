import type { JournalTopicHubId } from "@/data/journal-topic-hubs";

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 17 17",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.05,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function JournalDiscoveryTopicIcon({ topicId }: { topicId: JournalTopicHubId }) {
  switch (topicId) {
    case "better-sleep":
      return (
        <svg {...iconProps}>
          <path d="M11.2 10.8a3.2 3.2 0 1 0-5.4 0" />
          <path d="M8.5 3.2v.9M5.8 4.5l.6.6M11.2 4.5l-.6.6" />
          <circle cx="12.8" cy="4.2" r="0.45" fill="currentColor" stroke="none" />
          <circle cx="13.9" cy="5.8" r="0.35" fill="currentColor" stroke="none" />
        </svg>
      );
    case "small-space-living":
      return (
        <svg {...iconProps}>
          <path d="M2.8 7.2 8.5 3.2l5.7 4v7.1H2.8V7.2Z" />
          <path d="M6.8 14.3v-2.8h3.4V14.3" />
        </svg>
      );
    case "calm-evenings":
      return (
        <svg {...iconProps}>
          <path d="M2.5 12.2h12" />
          <path d="M8.5 4.2V8M6 9.2 8.5 6.8 11 9.2" />
          <circle cx="12.6" cy="4.8" r="1.1" />
        </svg>
      );
    case "quiet-routines":
      return (
        <svg {...iconProps}>
          <path d="M5.2 11.2h6.6" />
          <path d="M6 8.8h5" />
          <path d="M8.5 3.8v2.2" />
          <path d="M7.2 5.2c.4-.9 1-.9 1.3 0 .5 1.2-.2 2.1-1.3 2.1s-1.8-.9-1.3-2.1Z" />
        </svg>
      );
    case "guides-care":
      return (
        <svg {...iconProps}>
          <path d="M8.5 14s-3.8-2.4-3.8-5.4a2.4 2.4 0 0 1 3.8-1.2 2.4 2.4 0 0 1 3.8 1.2C12.3 11.6 8.5 14 8.5 14Z" />
        </svg>
      );
    default:
      return null;
  }
}
