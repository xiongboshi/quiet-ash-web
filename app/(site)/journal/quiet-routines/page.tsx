import { createJournalTopicPageHandlers } from "@/lib/journal-topic-page-route";

const handlers = createJournalTopicPageHandlers("quiet-routines");

export const generateMetadata = handlers.generateMetadata;
export default handlers.Page;
