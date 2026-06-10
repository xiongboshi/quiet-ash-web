import type { JournalArticleTemplate } from "@/types/journal-article";
import { buildJournalArticleFromIndexCard } from "@/lib/journal-article-from-index";
import { getJournalIndexArticleCards } from "@/lib/get-journal-index-articles";
import { journalArticleBestIncenseForSleep } from "@/data/journal-articles/best-incense-for-sleep";
import { journalArticleBestIncenseForSmallApartments } from "@/data/journal-articles/best-incense-for-small-apartments";
import { journalArticleIncenseAfterWork } from "@/data/journal-articles/incense-after-work";
import { journalArticleIsIncenseSafeForPets } from "@/data/journal-articles/is-incense-safe-for-pets";
import { journalArticleTeaAndIncenseRituals } from "@/data/journal-articles/tea-and-incense-rituals";
import { journalArticleBedroomScentsForBetterSleep } from "@/data/journal-articles/bedroom-scents-for-better-sleep";
import { journalArticleEveningWindDownRitualsForBetterSleep } from "@/data/journal-articles/evening-wind-down-rituals-for-better-sleep";
import { journalArticleCalmingBedroomAtmosphereForBetterSleep } from "@/data/journal-articles/calming-bedroom-atmosphere-for-better-sleep";
import { journalArticleWhySoftScentsFeelRelaxingBeforeSleep } from "@/data/journal-articles/why-soft-scents-feel-relaxing-before-sleep";
import { journalArticleShouldYouBurnIncenseBeforeBed } from "@/data/journal-articles/should-you-burn-incense-before-bed";
import { journalArticleBestScentForSleep } from "@/data/journal-articles/best-scent-for-sleep";
import { journalArticleSleepHygieneGuide } from "@/data/journal-articles/sleep-hygiene-guide";
import { journalArticleHowToImproveSleepQualityNaturally } from "@/data/journal-articles/how-to-improve-sleep-quality-naturally";
import { journalArticleWhyBadSleepHappens } from "@/data/journal-articles/why-bad-sleep-happens";
import { journalArticleGreenNoiseForSleep } from "@/data/journal-articles/green-noise-for-sleep";
import { journalArticleHowToFixBadSleep } from "@/data/journal-articles/how-to-fix-bad-sleep";
import { journalArticleSleepMeditation } from "@/data/journal-articles/sleep-meditation";
import { journalArticleTipsForBetterSleepQuality } from "@/data/journal-articles/tips-for-better-sleep-quality";
import { journalArticleSleepHygieneTips } from "@/data/journal-articles/sleep-hygiene-tips";
import { journalArticleWhatIsSleep } from "@/data/journal-articles/what-is-sleep";
import { journalArticleHowToSleepWellNaturally } from "@/data/journal-articles/how-to-sleep-well-naturally";
import { journalArticleSleepStagesExplained } from "@/data/journal-articles/sleep-stages-explained";
import { journalArticleWhyIsSleepImportant } from "@/data/journal-articles/why-is-sleep-important";
import { journalArticleSleepCycleExplained } from "@/data/journal-articles/sleep-cycle-explained";
import { journalArticleHowToGetMoreDeepSleep } from "@/data/journal-articles/how-to-get-more-deep-sleep";
import { journalArticleWhatIsRemSleep } from "@/data/journal-articles/what-is-rem-sleep";
import { journalArticleDeepSleepVsRemSleep } from "@/data/journal-articles/deep-sleep-vs-rem-sleep";
import { journalArticleWhatCausesSleepDeprivation } from "@/data/journal-articles/what-causes-sleep-deprivation";
import { journalArticleEffectsOfSleepDeprivation } from "@/data/journal-articles/effects-of-sleep-deprivation";
import { journalArticleUnderstandingSleepPatterns } from "@/data/journal-articles/understanding-sleep-patterns";
import { journalArticleWhySleepPatternsChange } from "@/data/journal-articles/why-sleep-patterns-change";
import { journalArticleWhyDoWeNeedDeepSleep } from "@/data/journal-articles/why-do-we-need-deep-sleep";
import { journalArticleSignsYouAreNotGettingEnoughDeepSleep } from "@/data/journal-articles/signs-you-are-not-getting-enough-deep-sleep";

/** Full PDP overrides for hand-authored guide templates. */
const journalHandArticleOverrides: Record<string, JournalArticleTemplate> = {
  [journalArticleBestIncenseForSleep.slug]: journalArticleBestIncenseForSleep,
  [journalArticleIsIncenseSafeForPets.slug]: journalArticleIsIncenseSafeForPets,
  [journalArticleBestIncenseForSmallApartments.slug]:
    journalArticleBestIncenseForSmallApartments,
  [journalArticleIncenseAfterWork.slug]: journalArticleIncenseAfterWork,
  [journalArticleTeaAndIncenseRituals.slug]: journalArticleTeaAndIncenseRituals,
  [journalArticleBedroomScentsForBetterSleep.slug]:
    journalArticleBedroomScentsForBetterSleep,
  [journalArticleEveningWindDownRitualsForBetterSleep.slug]:
    journalArticleEveningWindDownRitualsForBetterSleep,
  [journalArticleCalmingBedroomAtmosphereForBetterSleep.slug]:
    journalArticleCalmingBedroomAtmosphereForBetterSleep,
  [journalArticleWhySoftScentsFeelRelaxingBeforeSleep.slug]:
    journalArticleWhySoftScentsFeelRelaxingBeforeSleep,
  [journalArticleShouldYouBurnIncenseBeforeBed.slug]:
    journalArticleShouldYouBurnIncenseBeforeBed,
  [journalArticleBestScentForSleep.slug]: journalArticleBestScentForSleep,
  [journalArticleSleepHygieneGuide.slug]: journalArticleSleepHygieneGuide,
  [journalArticleHowToImproveSleepQualityNaturally.slug]:
    journalArticleHowToImproveSleepQualityNaturally,
  [journalArticleWhyBadSleepHappens.slug]: journalArticleWhyBadSleepHappens,
  [journalArticleGreenNoiseForSleep.slug]: journalArticleGreenNoiseForSleep,
  [journalArticleHowToFixBadSleep.slug]: journalArticleHowToFixBadSleep,
  [journalArticleSleepMeditation.slug]: journalArticleSleepMeditation,
  [journalArticleTipsForBetterSleepQuality.slug]:
    journalArticleTipsForBetterSleepQuality,
  [journalArticleSleepHygieneTips.slug]: journalArticleSleepHygieneTips,
  [journalArticleWhatIsSleep.slug]: journalArticleWhatIsSleep,
  [journalArticleHowToSleepWellNaturally.slug]: journalArticleHowToSleepWellNaturally,
  [journalArticleSleepStagesExplained.slug]: journalArticleSleepStagesExplained,
  [journalArticleWhyIsSleepImportant.slug]: journalArticleWhyIsSleepImportant,
  [journalArticleSleepCycleExplained.slug]: journalArticleSleepCycleExplained,
  [journalArticleHowToGetMoreDeepSleep.slug]: journalArticleHowToGetMoreDeepSleep,
  [journalArticleWhatIsRemSleep.slug]: journalArticleWhatIsRemSleep,
  [journalArticleDeepSleepVsRemSleep.slug]: journalArticleDeepSleepVsRemSleep,
  [journalArticleWhatCausesSleepDeprivation.slug]:
    journalArticleWhatCausesSleepDeprivation,
  [journalArticleEffectsOfSleepDeprivation.slug]:
    journalArticleEffectsOfSleepDeprivation,
  [journalArticleUnderstandingSleepPatterns.slug]:
    journalArticleUnderstandingSleepPatterns,
  [journalArticleWhySleepPatternsChange.slug]:
    journalArticleWhySleepPatternsChange,
  [journalArticleWhyDoWeNeedDeepSleep.slug]: journalArticleWhyDoWeNeedDeepSleep,
  [journalArticleSignsYouAreNotGettingEnoughDeepSleep.slug]:
    journalArticleSignsYouAreNotGettingEnoughDeepSleep,
};

/** Index-listed articles — auto-filled from card + `content/essays` MDX when available. */
const articlesFromIndex = Object.fromEntries(
  getJournalIndexArticleCards().map((card) => [
    card.slug,
    buildJournalArticleFromIndexCard(card),
  ]),
) satisfies Record<string, JournalArticleTemplate>;

export const journalArticleRegistry: Record<string, JournalArticleTemplate> = {
  ...articlesFromIndex,
  ...journalHandArticleOverrides,
};

export const journalArticleSlugs = Object.keys(journalArticleRegistry);
