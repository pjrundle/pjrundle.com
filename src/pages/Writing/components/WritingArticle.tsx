import { PAccessibleLink } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { lazy, Suspense, useMemo } from "react";
import { Link } from "wouter";

import { Mdx } from "../../../components/Mdx.tsx";
import { designOptions } from "../../../design-system/design-system.ts";
import { ArticleAssetContainer } from "../../Projects/components/ArticleAssetContainer.tsx";
import { ArticleErrorBoundary } from "../../Projects/components/ArticleErrorBoundary.tsx";
import { ArticleImage } from "../../Projects/components/ArticleImage.tsx";
import { ArticleLoadingIndicator } from "../../Projects/components/ArticleLoadingIndicator.tsx";

// Modules
// ---------------------------------------------------------------

const mdxModules = import.meta.glob<{
  default: React.ComponentType;
}>("../content/*/article.mdx");

const articleComponentModules = import.meta.glob<{
  default: Record<string, React.ComponentType>;
}>("../content/*/article-components.tsx");

// Article
// ---------------------------------------------------------------

const WritingArticleSection = ({ slug }: { slug: string }) => {
  const mdxPath = `../content/${slug}/article.mdx`;
  const compPath = `../content/${slug}/article-components.tsx`;

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

export const WritingArticle = ({ slug }: { slug: string }) => {
  return (
    <div className={cn("w:full f:12", "pb:10x pb:30x@lg", "mt:6x")}>
      <ArticleErrorBoundary key={slug}>
        <WritingArticleSection slug={slug} />
      </ArticleErrorBoundary>
    </div>
  );
};
