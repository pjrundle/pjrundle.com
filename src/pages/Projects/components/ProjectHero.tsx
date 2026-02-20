import { TextModule } from "@theme-os/react";
import { cn } from "@theme-os/utils";

import { DISABLE_IMAGES } from "../../../App.tsx";
import { getOptimizedImageUrl } from "../../../utils/optimizedImage.ts";
import type { TProjectManifestEntry } from "../content/manifest.tsx";

export const ProjectHero = ({
  projectEntry,
}: {
  projectEntry: TProjectManifestEntry;
}) => {
  const optimizedProjectImage = projectEntry.heroImgSrc
    ? getOptimizedImageUrl(projectEntry.heroImgSrc, { width: 2400 })
    : null;

  return (
    <div className="page-gutter">
      <div className="page-container-lg">
        <div className="mt:16x mb:8x mb:12x@md mb:16x@2xl max-w:80%@md">
          <TextModule
            variant="block.feature"
            overline={`Projects • ${projectEntry.title}`}
            heading={projectEntry.tagline}
            classNameHeading="text-wrap:balance@md pr:0x@lg"
          />
        </div>

        <div
          className={cn(
            "b:border-b p:2x@md p:4x@lg p:6x@xl",
            `bg:${projectEntry.heroImgBgColorSecondary || "color-gray-50"}`,
          )}
        >
          <div
            className={cn(
              "r:radius-default@md shadow:shadow-xl@md",
              "pt:65% pt:55%@sm pt:35%@md rel b:border-b@md overflow:hidden",
              `bg:${projectEntry.heroImgBgColor || "color-gray-200"}`,
            )}
          >
            {!DISABLE_IMAGES && optimizedProjectImage && (
              <img
                src={optimizedProjectImage.src}
                srcSet={optimizedProjectImage.srcSet || undefined}
                alt={projectEntry.title}
                className="abs inset:0 object:cover object-position:left h:100% w:100%"
                loading="eager"
                {...({
                  fetchpriority: "high",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
