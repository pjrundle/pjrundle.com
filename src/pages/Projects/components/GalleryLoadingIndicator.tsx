import { cn } from "@theme-os/utils";

import { galleryGridClasses } from "./Gallery.tsx";

export const GalleryLoadingIndicator = () => {
  return (
    <div
      className={cn(
        galleryGridClasses,
        "@skeleton-loading|ease-in|900ms|infinite|alternate",
        "{bg:color-gray-150;aspect:16/9}_:where(span)",
      )}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};
