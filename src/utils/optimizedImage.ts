/**
 * Allowed widths for Vercel Image Optimization (must match vercel.json images.sizes).
 */
const ALLOWED_SIZES = [200, 400, 800, 1200, 1600, 2400] as const;

const nearestAllowedSize = (width: number): number => {
  return ALLOWED_SIZES.reduce((prev, curr) =>
    Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev,
  );
};

export type OptimizedImageResult = {
  src: string;
  srcSet: string;
};

/**
 * Returns src and srcSet for Vercel Image Optimization when deployed on Vercel.
 * In development (Vite dev server), returns the original path for src and empty srcSet.
 *
 * Only local paths (inside public dir, i.e. starting with /) are optimized;
 * other paths are returned unchanged.
 */
export const getOptimizedImageUrl = (
  src: string,
  options: {
    width?: number;
    quality?: number;
  } = {},
): OptimizedImageResult => {
  const { width = 1200, quality = 75 } = options;

  const isLocalPublicPath =
    typeof src === "string" && src.startsWith("/") && !src.startsWith("//");

  if (!isLocalPublicPath || import.meta.env.DEV) {
    return { src, srcSet: "" };
  }

  const q = Math.min(100, Math.max(1, quality));
  const w = nearestAllowedSize(width);

  const buildUrl = (widthPx: number) =>
    `/_vercel/image?url=${encodeURIComponent(src)}&w=${widthPx}&q=${q}`;

  const srcSet = ALLOWED_SIZES.map((s) => `${buildUrl(s)} ${s}w`).join(", ");

  return {
    src: buildUrl(w),
    srcSet,
  };
};
