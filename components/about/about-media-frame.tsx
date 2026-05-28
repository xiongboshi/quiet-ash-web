import { QaImage as Image } from "@/components/ui/qa-image";

type AboutMediaFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  aspectRatio?: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
};

/**
 * Contained Next/Image — always `fill` inside an explicit `position: relative` frame
 * (avoids layout blow-out from the Image wrapper span).
 */
export function AboutMediaFrame({
  src,
  alt,
  sizes,
  aspectRatio,
  priority = false,
  quality = priority ? 75 : 68,
  className = "",
  imgClassName = "",
  objectPosition = "50% 50%",
}: AboutMediaFrameProps) {
  return (
    <div
      className={`about-media-frame ${className}`.trim()}
      style={{
        position: "relative",
        aspectRatio: aspectRatio ?? undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={["about-media-frame__img", imgClassName].filter(Boolean).join(" ")}
        style={{ objectPosition }}
      />
    </div>
  );
}
