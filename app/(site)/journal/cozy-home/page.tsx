import { createJournalTopicPageHandlers } from "@/lib/journal-topic-page-route";

const handlers = createJournalTopicPageHandlers("cozy-home");

export const generateMetadata = handlers.generateMetadata;
export default handlers.Page;
