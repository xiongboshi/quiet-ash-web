/** Split series titles for two-line editorial display (e.g. "Incense &" / "Stillness."). */
export function seriesTitleLines(title: string): readonly string[] {
  const trimmed = title.trim();
  const ampMatch = trimmed.match(/^(.+?\s&)\s+(.+)$/u);
  if (ampMatch) {
    const second = ampMatch[2].trim();
    const line2 = second.endsWith(".") ? second : `${second}.`;
    return [ampMatch[1].trim(), line2];
  }

  const words = trimmed.split(/\s+/u);
  if (words.length >= 2) {
    const mid = Math.ceil(words.length / 2);
    const line1 = words.slice(0, mid).join(" ");
    let line2 = words.slice(mid).join(" ");
    if (!line2.endsWith(".")) line2 = `${line2}.`;
    return [line1, line2];
  }

  return [trimmed];
}
