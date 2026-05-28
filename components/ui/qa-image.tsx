import NextImage, { type ImageProps } from "next/image";
import { isSvgImageSrc, toWebpSrc } from "@/lib/qa-image";

type QaImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * Site-wide image: WebP raster paths, lazy below the fold, Next optimizer for photos.
 * SVG assets stay unoptimized (required by the image pipeline).
 */
export function QaImage({
  src,
  priority,
  loading,
  fetchPriority,
  unoptimized: _legacyUnoptimized,
  alt = "",
  ...rest
}: QaImageProps) {
  const resolvedSrc = toWebpSrc(src);
  const svg = isSvgImageSrc(src);

  return (
    <NextImage
      src={resolvedSrc}
      alt={alt}
      priority={priority}
      fetchPriority={priority ? "high" : fetchPriority}
      loading={priority ? undefined : (loading ?? "lazy")}
      unoptimized={svg}
      {...rest}
    />
  );
}
