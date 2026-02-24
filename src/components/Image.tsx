import { imageDimensions } from "../generated/image-dimensions.ts";
import { getOptimizedImageUrl } from "../utils/optimizedImage.ts";

export const Image = ({
  src,
  alt,
  width,
  quality,
  ...rest
}: {
  src: string;
  alt: string;
  width?: number;
  quality?: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">) => {
  const { src: optimizedSrc, srcSet } = getOptimizedImageUrl(src, {
    width: width ?? 1200,
    quality,
  });

  const dimensions = imageDimensions[src];

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet || undefined}
      alt={alt}
      {...(!!dimensions && {
        width: dimensions.w,
        height: dimensions.h,
      })}
      {...rest}
    />
  );
};
