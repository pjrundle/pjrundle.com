import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { Image } from "../../../components/Image.tsx";

export const ImageCycle = ({
  images,
  caption,
}: {
  images: {
    src: string;
    alt?: string;
  }[];
  caption?: ReactNode;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // 1 second per frame

    return () => clearInterval(id);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <figure>
      <div className="rel">
        <div className="aspect:16/10" />

        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={i === index ? (img.alt ?? "") : ""}
            width={620}
            className="abs inset:0"
            style={{ display: i === index ? "block" : "none" }}
          />
        ))}
      </div>

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
