import { Surface } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";
import { Link } from "wouter";

import { DISABLE_IMAGES } from "../../../App.tsx";
import { getOptimizedImageUrl } from "../../../utils/optimizedImage.ts";
import type { TProjectManifestEntry } from "../../Projects/content/manifest.tsx";
import { ProjectCardTextModule } from "./ProjectCardTextModule.tsx";

const heroAssetComponentModules = import.meta.glob<{
  default: React.ComponentType;
}>("../../Projects/content/*/*.tsx");

export const ProjectCardMini = ({
  project,
  imageLoading = "lazy",
}: {
  project: TProjectManifestEntry;
  imageLoading?: "lazy" | "eager";
}) => {
  const {
    name,
    heroAssetComponent,
    heroImgBgColor,
    projectCardImgSrc,
    heroImgBgColorMode,
    logo: LogoSvg,
    logoAdjust,
    slug,
  } = project;

  const optimizedImage = projectCardImgSrc
    ? getOptimizedImageUrl(projectCardImgSrc, { width: 1200 })
    : null;

  const heroAssetComponentPath = heroAssetComponent
    ? `../../Projects/content/${slug}/${heroAssetComponent}`
    : null;

  const heroAssetComponentLoader = heroAssetComponentPath
    ? heroAssetComponentModules[heroAssetComponentPath]
    : null;

  const HeroAssetLazy = useMemo(() => {
    if (!heroAssetComponentLoader) return null;
    return lazy(() =>
      heroAssetComponentLoader().then((mod) => ({
        default: mod.default,
      })),
    );
  }, [heroAssetComponentLoader]);

  return (
    <Link href={`/projects/${slug}`} className="flex flex-col">
      <Surface.Card
        variant="neutral.soft"
        elevation="floating"
        className="rel group overflow:hidden flex flex-col"
      >
        <aside
          className={cn(
            "rel overflow:hidden",
            heroImgBgColorMode === "light" && !DISABLE_IMAGES
              ? "light-mode"
              : "dark-mode",
            `bg:${heroImgBgColor && !DISABLE_IMAGES ? heroImgBgColor : "color-gray-100"}`,
          )}
        >
          {/* Reserve Space */}
          <div className="aspect:16/10 aspect:16/8@md" />
          {/* Reserve Space */}

          {!!HeroAssetLazy && (
            <Suspense fallback={null}>
              <div className="abs inset:0">
                <HeroAssetLazy />
              </div>
            </Suspense>
          )}

          {!HeroAssetLazy && !DISABLE_IMAGES && optimizedImage && (
            <div className="abs inset:0 opacity:1 {opacity:1;transform:scale(1.05)}:of(.group:hover) transition:transform|0.2s|ease-in-out">
              <img
                src={optimizedImage.src}
                srcSet={optimizedImage.srcSet || undefined}
                alt={name}
                loading={imageLoading}
                {...({
                  fetchpriority: imageLoading === "eager" ? "high" : "low",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                className="abs inset:0 object:cover object-position:center h:100% w:100%"
              />
            </div>
          )}

          <div className="abs inset:0">
            <div className="abs inset:0 background-image:linear-gradient(to|bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.9)" />

            <h2 className="abs-center">
              <span className="sr-only">{name}</span>
              <span aria-hidden="true">
                <LogoSvg
                  className={cn(
                    `w:${140 * logoAdjust}px`,
                    `w:${160 * logoAdjust}px@sm`,
                    `w:${170 * logoAdjust}px@lg`,
                    "color:color-gray-950",
                  )}
                />
              </span>
            </h2>
          </div>
        </aside>

        <div
          className={cn(
            "rel px:6x@lg pb:6x@lg",
            "bg:color-gray-50",
            "bt:border-a br:border-b@md btnone@md",
            "flex:1 flex flex-col",
          )}
        >
          <div className="px:4x pb:5.5x pt:7x px:0@lg pb:0@lg flex:1">
            <ProjectCardTextModule projectEntry={project} />
          </div>
        </div>
      </Surface.Card>
    </Link>
  );
};
