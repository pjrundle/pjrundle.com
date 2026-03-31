import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";

import { DISABLE_IMAGES } from "../../../App.tsx";
import { HeroText } from "../../../components/HeroText.tsx";
import { designOptions } from "../../../design-system/design-system.ts";
import { getOptimizedImageUrl } from "../../../utils/optimizedImage.ts";
import type { TProjectManifestEntry } from "../content/manifest.tsx";

const heroAssetComponentModules = import.meta.glob<{
  default: React.ComponentType;
}>("../content/*/*.tsx");

export const ProjectHero = ({
  projectEntry,
}: {
  projectEntry: TProjectManifestEntry;
}) => {
  const optimizedProjectImage = projectEntry.detailPageHeroImgSrc
    ? getOptimizedImageUrl(projectEntry.detailPageHeroImgSrc, { width: 2400 })
    : null;

  const heroAssetComponentPath = projectEntry.heroAssetComponent
    ? `../content/${projectEntry.slug}/${projectEntry.heroAssetComponent}`
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

  const LogoComponent = projectEntry.logo;

  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg">
          <div className="flex flex-direction:column flex-direction:row@lg">
            <div className="w:100% w:66.66%@lg pr:10x@xl pt:14x pb:10x pb:15x@lg br:border-b@lg">
              <HeroText
                size="project"
                overline={projectEntry.detailPageTitle}
                heading={projectEntry.detailPageHeading}
              />
              <p className="typestyle-copy f:12 f:14@xl mt:2.5x">
                {projectEntry.detailPageDescription}
              </p>
            </div>
            <div className="w:100% hidden flex@lg w:33.33%@lg rel py:14x py:14x@2xl br:border-b bt:border-b bt:none@lg flex flex-col justify-content:center">
              <div className="rel flex:1 w:full">
                {!!LogoComponent && (
                  <LogoComponent
                    className={cn(
                      "abs-center",
                      `w:${140 * projectEntry.logoAdjust}px`,
                      `w:${170 * projectEntry.logoAdjust}px@xl`,
                      "color:color-gray-950",
                    )}
                  />
                )}
              </div>
            </div>
          </div>

          {designOptions.withProjectHeroImages && (
            <div
              className={cn(
                "r:radius-default@md rtr0! shadow:shadow-xl@md",
                "pt:55% pt:55%@sm pt:46%@xl rel overflow:hidden",
                `b:1px|solid|${projectEntry.heroImgBorderColor || "color-gray-dark-150"}`,
                `bg:${projectEntry.heroImgBgColor && !DISABLE_IMAGES ? projectEntry.heroImgBgColor : "color-gray-50"}`,
              )}
            >
              <div className="abs inset:0">
                {!!HeroAssetLazy && (
                  <Suspense fallback={null}>
                    <HeroAssetLazy />
                  </Suspense>
                )}
                {!HeroAssetLazy && !DISABLE_IMAGES && optimizedProjectImage && (
                  <img
                    src={optimizedProjectImage.src}
                    srcSet={optimizedProjectImage.srcSet || undefined}
                    alt={`${projectEntry.name}`}
                    className="abs inset:0 left:auto object:cover object-position:top|center h:100% w:100%"
                    loading="eager"
                    {...({
                      fetchpriority: "high",
                    } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
