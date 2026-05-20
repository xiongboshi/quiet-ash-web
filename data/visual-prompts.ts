/**
 * Quiet Ash — image prompt builder.
 * @deprecated layers QA_BRAND_BASE / QA_NEGATIVE — canon is docs/QUIET-ASH-CONSTITUTION.md
 * and data/constitution-prompts.ts
 */

import {
  buildConstitutionImagePrompt,
  type ConstitutionTime,
} from "@/data/constitution-prompts";

/** @deprecated Historical — do not extend. Use QA_CONSTITUTION_MASTER_PROMPT. */
export const QA_BRAND_BASE = `See docs/QUIET-ASH-CONSTITUTION.md — use buildImagePrompt() which prepends Constitution v5.0.`;

/** @deprecated */
export const QA_PHOTO_RULES = `See constitution-prompts.ts LENS_BY_USE.`;

/** @deprecated */
export const QA_NEGATIVE = `See QA_ANTI_AI_NEGATIVE in constitution-prompts.ts.`;

export type TimeMode =
  | "morning"
  | "afternoon"
  | "evening"
  | "rain";

const LEGACY_TIME_EXTRA: Partial<Record<TimeMode, string>> = {
  evening:
    "Evening Ritual: warm dim interior, charcoal corners, single window afterglow, thin incense smoke.",
  rain: "Rain Window: grey-blue humid air, soft moisture on glass, muted reflections, very quiet room.",
};

function mapTimeMode(time: TimeMode): ConstitutionTime {
  if (time === "evening") return "sunset";
  if (time === "rain" || time === "afternoon") return "afternoon";
  if (time === "morning") return "morning";
  return "afternoon";
}

export function buildImagePrompt(
  scene: string,
  time: TimeMode = "afternoon",
): string {
  const base = buildConstitutionImagePrompt({
    scene,
    time: mapTimeMode(time),
    lens: "lifestyle",
  });
  const extra = LEGACY_TIME_EXTRA[time];
  return extra ? `${base}\n\n${extra}` : base;
}
