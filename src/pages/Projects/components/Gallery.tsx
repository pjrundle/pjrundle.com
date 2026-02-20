import { useState } from "react";

import { getOptimizedImageUrl } from "../../../utils/optimizedImage.ts";
import { GalleryModal } from "./GalleryModal.tsx";

export type TGalleryItemImage = {
  src: string;
  alt: string;
};

export const Gallery = ({
  items,
  className,
}: {
  items: TGalleryItemImage[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeFn = () => setIsOpen(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className={className}>
        <div className="grid grid-cols:3 grid-cols:4@sm grid-cols:3@lg gap:2x {b:border-b}_img">
          {items.map((item, i) => (
            <button
              key={`${i}-${item.src}`}
              type="button"
              className="block w:100% bg:transparent cursor:pointer text-align:left"
              aria-label={`View full size: ${item.alt}`}
              onClick={() => {
                setIsOpen(true);
                setSelectedIndex(i);
              }}
            >
              {(() => {
                const { src, srcSet } = getOptimizedImageUrl(item.src, {
                  width: 400,
                });
                return (
                  <img
                    src={src}
                    srcSet={srcSet || undefined}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect:16/9 object:cover w:100% block"
                  />
                );
              })()}
            </button>
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={isOpen}
        closeFn={closeFn}
        initialIndex={selectedIndex}
        items={items}
      />
    </>
  );
};
