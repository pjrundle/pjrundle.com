import { Button } from "@theme-os/react";
import { PAccessibleLink } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";

import { TProjectManifestEntry } from "../content/manifest.tsx";
import { AsideSection } from "./AsideSection.tsx";
import { Gallery } from "./Gallery.tsx";
import { GalleryLoadingIndicator } from "./GalleryLoadingIndicator.tsx";

// Module
// ---------------------------------------------------------------

const galleryModules = import.meta.glob<{
  default: { src: string; alt: string }[];
}>("../content/*/gallery.ts");

// Gallery
// ---------------------------------------------------------------

const GallerySection = ({
  loader,
  className,
}: {
  loader: () => Promise<{ default: { src: string; alt: string }[] }>;
  className?: string;
}) => {
  if (!loader) return null;

  const GalleryLazy = useMemo(
    () =>
      lazy(() =>
        loader().then((mod) => ({
          default: () => (
            <Gallery items={mod.default ?? []} className={className} />
          ),
        })),
      ),
    [loader],
  );

  return (
    <Suspense fallback={<GalleryLoadingIndicator />}>
      <GalleryLazy />
    </Suspense>
  );
};

// Microsite Button
// ---------------------------------------------------------------

const MicrositeButton = ({
  projectEntry,
  className,
}: {
  projectEntry: TProjectManifestEntry;
  className?: string;
}) => {
  if (!projectEntry.button) return null;

  return (
    <Button
      label={projectEntry.button.label}
      icon="arrowRight"
      className={className}
      renderAs={
        <PAccessibleLink href={projectEntry.button.href} newTab={true} />
      }
    />
  );
};

// Overview Item
// ---------------------------------------------------------------

const OverviewItem = ({
  title,
  value,
  isFirst,
}: {
  title: string;
  value?: string;
  isFirst?: boolean;
}) => {
  if (!value) return null;

  return (
    <p className={cn("typestyle-copy", !isFirst && "bt:border-b", "py:0.8em")}>
      <strong>{title}:</strong> {value}
    </p>
  );
};

// Project Aside
// ---------------------------------------------------------------

export const ProjectAside = ({
  projectEntry,
  slug,
}: {
  projectEntry: TProjectManifestEntry;
  slug: string;
}) => {
  const galleryLoader = galleryModules[`../content/${slug}/gallery.ts`];
  const hasGallery = !!galleryLoader;
  const hasTechStack =
    projectEntry.techStack && projectEntry.techStack.length > 0;
  const LogoComponent = projectEntry.logo;

  return (
    <aside
      className={cn(
        "sticky@lg top:74px",
        "flex flex-col flex:1 gap-y:6x",
        "bx:border-b bl:none@lg bb:border-b pb:4x pb:5x@lg",
      )}
    >
      <header className="flex hidden@lg pt:5x mb:-1x px:4x align-items:center justify-content:space-between">
        {!!LogoComponent && (
          <LogoComponent
            className={cn(
              `w:${100 * projectEntry.logoAdjust}px`,
              "color:color-gray-950",
            )}
          />
        )}

        <MicrositeButton
          projectEntry={projectEntry}
          className="hidden@lg f:11"
        />
      </header>

      <AsideSection label="Overview">
        <div className="flex:1 flex flex-col f:12">
          <OverviewItem
            title="Status"
            value={projectEntry.status}
            isFirst={true}
          />
          <OverviewItem
            title="Role"
            value={projectEntry.role}
            isFirst={!projectEntry.status}
          />
          <OverviewItem title="Scope" value={projectEntry.scope} />
        </div>

        {projectEntry.button && (
          <div className="f:12 hidden flex@lg mt:5x">
            <MicrositeButton projectEntry={projectEntry} className="w:full" />
          </div>
        )}

        {projectEntry.stats && projectEntry.stats.length > 0 && (
          <div className="mt:4x grid grid-cols:3 gap:2x gap:4x@md pb:1.5x">
            {projectEntry.stats.map((stat) => (
              <div key={stat.label}>
                <div className="typestyle-display f:22 f:24@md f:26@xl">
                  {stat.stat}
                </div>
                <div className="typestyle-meta f:8 mt:0.5x">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </AsideSection>

      {hasTechStack && (
        <AsideSection label="Stack" className="f:1.5xs f:xs@md f1.5sm@lg">
          <p className="typestyle-copy text-wrap:pretty">
            {projectEntry.techStack?.join(" · ")}
          </p>
        </AsideSection>
      )}

      {hasGallery && (
        <AsideSection label="Gallery">
          <GallerySection loader={galleryLoader} />
        </AsideSection>
      )}
    </aside>
  );
};
