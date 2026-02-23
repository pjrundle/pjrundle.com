import { Button, Surface } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { useState } from "react";
import { Link } from "wouter";

import { DISABLE_IMAGES } from "../../../../../App.tsx";
import { getOptimizedImageUrl } from "../../../../../utils/optimizedImage.ts";
import type { TProjectManifestEntry } from "../../../../Projects/content/manifest.tsx";

export const ProjectCard = ({
  project,
  imageLoading = "lazy",
}: {
  project: TProjectManifestEntry;
  imageLoading?: "lazy" | "eager";
}) => {
  const {
    title,
    tagline,
    heroImgSrc,
    heroImgBgColor,
    heroImgBgColorMode,
    logo: LogoSvg,
    logoAdjust,
    slug,
  } = project;

  const [isHovered, setIsHovered] = useState(false);

  const optimizedImage = heroImgSrc
    ? getOptimizedImageUrl(heroImgSrc, { width: 1200 })
    : null;

  return (
    <Link
      href={`/projects/${slug}`}
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Surface.Card variant="neutral.soft" elevation="floating">
        <div className="bg:color-gray-0 rel group">
          <div
            className={cn(
              "rel overflow:hidden static@md",
              heroImgBgColorMode === "light" ? "light-mode" : "dark-mode",
              `bg:${heroImgBgColor || "color-gray-200"}`,
            )}
          >
            <div className="pt:65% pt:60%@sm pt:50%@md pt:40%@lg pt:35%@xl" />
            {!DISABLE_IMAGES && optimizedImage && (
              <img
                src={optimizedImage.src}
                srcSet={optimizedImage.srcSet || undefined}
                alt={title}
                loading={imageLoading}
                {...({
                  fetchpriority: imageLoading === "eager" ? "high" : "low",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                className="w:100% h:100% abs inset:0 transform:scale(1.05):of(.group:hover) transition:transform|0.2s|ease-in-out object:cover object-position:left"
              />
            )}
          </div>

          <div className="abs@md left:0 bottom:0 right:0">
            <div className="hidden block@md abs@md inset:0 bg:color-gray-50 opacity:0.9" />

            <div className="rel bt:border-a bt:border-b@md py:6x px:4x px:6x@md flex flex-col flex-row@md align-items:center@md justify-content:space-between gap:5x">
              <div className="flex flex-col flex-row@md gap:3.5x gap:8x@md align-items:center@md">
                <h2 className="flex gap:8x align-items:center rel top:-1px">
                  <span className="sr-only">{title}</span>
                  <span aria-hidden="true">
                    <LogoSvg
                      className={cn(
                        `w:${110 * logoAdjust}px`,
                        `w:${122 * logoAdjust}px@md`,
                        "color:color-gray-950",
                      )}
                    />
                  </span>
                </h2>

                <p className="typestyle-copy f:1.5xs f:1.5sm@md text-wrap:pretty">
                  {tagline}
                </p>
              </div>

              <Button
                label="View Project"
                variant={isHovered ? "solid" : "outline"}
                className="f:11"
                icon="arrowRight"
                tabIndex={-1}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Surface.Card>
    </Link>
  );
};
