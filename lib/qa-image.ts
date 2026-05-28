/** Raster extensions we ship as WebP under `public/`. */
const RASTER_EXT = /\.(png|jpe?g)$/i;

export function isRasterImageSrc(src: string): boolean {
  return RASTER_EXT.test(src);
}

export function isSvgImageSrc(src: string): boolean {
  return /\.svg$/i.test(src);
}

/** Map legacy PNG/JPEG paths to on-disk WebP assets. */
export function toWebpSrc(src: string): string {
  if (RASTER_EXT.test(src)) return src.replace(RASTER_EXT, ".webp");
  return src;
}
