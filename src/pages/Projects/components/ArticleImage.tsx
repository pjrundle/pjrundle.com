import type { ReactNode } from "react";

import { Image } from "../../../components/Image.tsx";

export const ArticleImage = ({
  src,
  caption,
  alt,
  quality,
}: {
  src: string;
  caption: ReactNode;
  /** Used for img alt. When caption is a string, defaults to caption. For rich captions (e.g. with Link), pass for accessibility. */
  alt?: string;
  quality?: number;
}) => (
  <figure>
    <Image
      src={src}
      alt={alt ?? (typeof caption === "string" ? caption : "")}
      width={620}
      quality={quality}
    />
    <figcaption>{caption}</figcaption>
  </figure>
);
