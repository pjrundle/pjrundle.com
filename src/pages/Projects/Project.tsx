import { PAccessibleLink } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";
import { Link, useParams } from "wouter";

import { Mdx } from "../../components/Mdx.tsx";
import { Page404 } from "../404/404.tsx";
import { ArticleAssetContainer } from "./components/ArticleAssetContainer.tsx";
import { ArticleErrorBoundary } from "./components/ArticleErrorBoundary.tsx";
import { ArticleIntro } from "./components/ArticleIntro.tsx";
import { ArticleLoadingIndicator } from "./components/ArticleLoadingIndicator.tsx";
import { Gallery } from "./components/Gallery.tsx";
import { GalleryLoadingIndicator } from "./components/GalleryLoadingIndicator.tsx";
import { ProjectHero } from "./components/ProjectHero.tsx";
import { projectManifestBySlug } from "./content/manifest.tsx";

// Modules
// ---------------------------------------------------------------

const mdxModules = import.meta.glob<{
  default: React.ComponentType;
}>("./content/*/article.mdx");

const articleComponentModules = import.meta.glob<{
  default: Record<string, React.ComponentType>;
}>("./content/*/article-components.tsx");

const galleryModules = import.meta.glob<{
  default: { src: string; alt: string }[];
}>("./content/*/gallery.ts");

// Gallery
// ---------------------------------------------------------------

const GallerySection = ({
  loader,
}: {
  loader: () => Promise<{ default: { src: string; alt: string }[] }>;
}) => {
  if (!loader) return null;

  const GalleryLazy = useMemo(
    () =>
      lazy(() =>
        loader().then((mod) => ({
          default: () => <Gallery items={mod.default ?? []} />,
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

// Article
// ---------------------------------------------------------------

const ArticleSection = ({ slug }: { slug: string }) => {
  const mdxPath = `./content/${slug}/article.mdx`;
  const compPath = `./content/${slug}/article-components.tsx`;

  const mdxLoader = mdxModules[mdxPath];
  if (!mdxLoader) return null;

  const compLoader = articleComponentModules[compPath];

  const ArticleLazy = useMemo(
    () =>
      lazy(() =>
        Promise.all([
          mdxLoader(),
          compLoader?.() ?? Promise.resolve({ default: {} }),
        ]).then(([mdxMod, compMod]) => {
          const MdxContent = mdxMod.default;
          const articleComponents = compMod?.default ?? {};

          return {
            default: () => (
              <Mdx
                content={MdxContent}
                components={{
                  Link,
                  PAccessibleLink,
                  ArticleAssetContainer,
                  ...articleComponents,
                }}
                className={cn(
                  "{content:'▶︎';mr:0.33em}_:is(h3):before",
                  "{mt:1.5em}_:is(h2+blockquote)",
                  "{border-color:color-gray-700}_:where(blockquote)",
                  "{max-w:620px}_:where(h1,h2,h3,h4,h5,h6,p,ul,hr,blockquote,pre,code,table)",
                )}
              />
            ),
          };
        }),
      ),
    [mdxLoader, compLoader],
  );

  return (
    <Suspense fallback={<ArticleLoadingIndicator />}>
      <ArticleLazy />
    </Suspense>
  );
};

/*
|--------------------------------------------------------------------------
| Project Page
|--------------------------------------------------------------------------
*/

export const ProjectPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const projectEntry = projectManifestBySlug.get(slug);

  if (!slug || !projectEntry) return <Page404 />;

  const LogoSvg = projectEntry.logo;
  const galleryLoader = galleryModules[`./content/${slug}/gallery.ts`];
  const hasGallery = !!galleryLoader;

  // Render
  // -----------------------------------------------

  return (
    <article>
      <ProjectHero projectEntry={projectEntry} />

      <div className="page-gutter">
        <div className="page-container-lg">
          {/* align-items:start needed for sticky */}
          <div className="flex flex-col flex-row@lg flex-direction:column-reverse rel align-items:start">
            {/* Article content column */}
            <div className="w:full w:66%@lg pt:12x pt:16x@xl pt:24x@2xl br:border-a@lg">
              <ArticleIntro
                projectEntry={projectEntry}
                className="hidden block@lg mb:10x mb:20x@2xl"
              />

              <div className="pr:8x@lg f:14">
                <ArticleErrorBoundary key={slug}>
                  <ArticleSection slug={slug} />
                </ArticleErrorBoundary>
              </div>
            </div>

            {/* Aside column - Gallery etc */}
            <aside className="mt:12x mt:16x@xl mt:24x@2xl pl:8x@lg flex:1 sticky@lg top:28x">
              <ArticleIntro
                projectEntry={projectEntry}
                className="hidden@lg mb:8x"
              />

              {hasGallery && (
                <div className="mb:6x">
                  <h2 className="typestyle-heading f:18 mb:4x">Gallery</h2>
                  <GallerySection loader={galleryLoader} />
                </div>
              )}

              {!!LogoSvg && (
                <div className={cn(hasGallery && "bt:border-a pt:6x")}>
                  <div className="bg:color-gray-50 flex align-items:center justify-content:center flex:1 py:18x py:22x@xl b:border-a">
                    <LogoSvg
                      className={cn(
                        "rel left:-2x top:-1x",
                        `w:${140 * projectEntry.logoAdjust}px`,
                        `w:${155 * projectEntry.logoAdjust}px@xl`,
                        "color:color-gray-950",
                      )}
                    />
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
};
