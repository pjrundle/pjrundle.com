import { PAccessibleLink } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { type ComponentType, lazy, Suspense, useMemo } from "react";
import { Link } from "wouter";

import { designOptions } from "../design-system/design-system.ts";
import { ArticleAssetContainer } from "../pages/Projects/components/ArticleAssetContainer.tsx";
import { ArticleImage } from "../pages/Projects/components/ArticleImage.tsx";
import { ArticleLoadingIndicator } from "../pages/Projects/components/ArticleLoadingIndicator.tsx";
import { Mdx } from "./Mdx.tsx";

type MdxModuleLoader = () => Promise<{ default: ComponentType }>;

type ArticleComponentsModuleLoader = () => Promise<{
  default: Record<string, ComponentType>;
}>;

export type TLazyMdxArticleProps = {
  slug: string;
  mdxModules: Record<string, MdxModuleLoader>;
  articleComponentModules: Record<string, ArticleComponentsModuleLoader>;
};

const contentPathForSlug = (
  slug: string,
  filename: "article.mdx" | "article-components.tsx",
) => `../content/${slug}/${filename}`;

/*
|--------------------------------------------------------------------------
| Lazy-loaded MDX article (shared by Projects and Writing)
|--------------------------------------------------------------------------
| Each caller defines `import.meta.glob` next to its content tree and passes
| the resulting maps — Vite resolves glob keys relative to that file.
*/

export const LazyMdxArticle = ({
  slug,
  mdxModules,
  articleComponentModules,
}: TLazyMdxArticleProps) => {
  const mdxPath = contentPathForSlug(slug, "article.mdx");
  const compPath = contentPathForSlug(slug, "article-components.tsx");

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
              <div className={cn(designOptions.centeredArticle && "px:8x@lg")}>
                <Mdx
                  content={MdxContent}
                  components={{
                    Link,
                    PAccessibleLink,
                    ArticleAssetContainer,
                    ArticleImage,
                    ...articleComponents,
                  }}
                  className={cn(
                    "{content:'–';mr:0.33em}_:is(h3):before",
                    "{mt:1.5em}_:is(h2+blockquote)",
                    "{border-color:color-gray-700}_:where(blockquote)",
                    `{max-w:620px;w:100%;mx:${designOptions.centeredArticle ? "auto" : "0"}}_:where(h1,h2,h3,h4,h5,h6,p,ul,hr,blockquote,pre,code,table,img,figure,.article-asset-container)`,
                    "bg:color-gray-50!_:where(pre)",
                    "{b:border-b}_:where(img)",
                    "pl:1.2em_:where(ul,ol)",
                  )}
                />
              </div>
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
