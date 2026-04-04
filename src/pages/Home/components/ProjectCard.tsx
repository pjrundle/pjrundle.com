import { Surface } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";
import { Link } from "wouter";

import { DISABLE_IMAGES } from "../../../App.tsx";
import { designOptions } from "../../../design-system/design-system.ts";
import { Badge } from "../../../temp/Badge.tsx";
import { getOptimizedImageUrl } from "../../../utils/optimizedImage.ts";
import type { TProjectManifestEntry } from "../../Projects/content/manifest.tsx";
import { ProjectCardTextModule } from "./ProjectCardTextModule.tsx";

const heroAssetComponentModules = import.meta.glob<{
  default: React.ComponentType;
}>("../../Projects/content/*/*.tsx");

export const ProjectCard = ({
  project,
  imageLoading = "lazy",
  size = "use-case",
}: {
  project: TProjectManifestEntry;
  imageLoading?: "lazy" | "eager";
  size?: "use-case" | "product";
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
    <Link href={`/projects/${slug}`} className="block">
      <Surface.Card
        variant="neutral.soft"
        elevation="floating"
        className={cn(
          "group rel overflow:hidden",
          "flex flex-col flex-direction:column-reverse flex-direction:row@lg",
        )}
      >
        <div
          className={cn(
            "w:100% w:33.33%@lg",
            "rel p:6x@lg",
            "bg:color-gray-50",
            "bt:border-b br:border-b@md bt:none@lg",
            "flex:1 flex flex-col",
            !designOptions.withProjectCardLogos && "justify-content:center",
          )}
        >
          {designOptions.withProjectCardLogos && (
            <header
              className={cn(
                "rel",
                "flex align-items:center flex:1",
                "justify-content:space-between justify-content:center@lg",
                "bb:border-b px:4x py:5x py:15x@lg py:20x@xl mb:6x@lg",
              )}
            >
              <h2>
                <span className="sr-only">{name}</span>
                <span aria-hidden="true">
                  <LogoSvg
                    className={cn(
                      `w:${100 * logoAdjust}px`,
                      `w:${135 * logoAdjust}px@lg`,
                      `w:${160 * logoAdjust}px@xl`,
                      "color:color-gray-950",
                      size === "product" && "rel@lg top-2x top:-5x",
                      size === "use-case" && "rel@lg top:-2x",
                    )}
                  />
                </span>
              </h2>

              {project.ownerLabel && (
                <Badge className="abs@lg bottom:6x top0 left:0 f:8 f:9@sm f:10@xl">
                  {project.ownerLabel}
                </Badge>
              )}
            </header>
          )}

          <div className="px:4x pb:4.5x pt:5.5x px:0@lg pb:0@lg pt:0.5x@lg">
            <ProjectCardTextModule projectEntry={project} />
          </div>
        </div>

        <aside
          className={cn(
            "w:100% w:66.66%@lg rel overflow:hidden",
            heroImgBgColorMode === "light" && !DISABLE_IMAGES
              ? "light-mode"
              : "dark-mode",
            `bg:${heroImgBgColor && !DISABLE_IMAGES ? heroImgBgColor : "color-gray-100"}`,
          )}
        >
          {/* Reserve Space */}
          <div
            className={cn(
              size === "product" && "aspect:16/9 aspect:16/8@sm",
              size === "use-case" && "aspect:16/10 aspect:16/7@md",
            )}
          />
          {/* !END Reserve Space */}

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
                alt={`${name}`}
                loading={imageLoading}
                {...({
                  fetchpriority: imageLoading === "eager" ? "high" : "low",
                } as React.ImgHTMLAttributes<HTMLImageElement>)}
                className="abs inset:0 object:cover object-position:center h:100% w:100%"
              />
            </div>
          )}

          <div className="abs inset:0 pointer-events:none">
            {/* <div className="abs inset:0 background-image:radial-gradient(circle,rgba(0,0,0,0),rgba(0,0,0,0),color-gray-0) opacity:0.95" /> */}
            {/* <div className="abs inset:0 background-image:linear-gradient(to|bottom,rgba(0,0,0,0.01),rgba(0,0,0,0.1))" /> */}

            {designOptions.withProjectCardAssetLogos && (
              <>
                <div className="abs inset:0 background-image:radial-gradient(circle,rgba(0,0,0,0.9),rgba(0,0,0,0.1),color-gray-0) opacity:0.6 pointer-events:none" />

                <h2 className="abs-center">
                  <span className="sr-only">{name}</span>
                  <span aria-hidden="true" className="rel top:-3x">
                    <LogoSvg
                      className={cn(
                        `w:${150 * logoAdjust}px`,
                        `w:${160 * logoAdjust}px@sm`,
                        `w:${250 * logoAdjust}px@lg`,
                        "color:color-gray-950",
                      )}
                    />
                  </span>
                </h2>
              </>
            )}
          </div>
        </aside>
      </Surface.Card>
    </Link>
  );
};
