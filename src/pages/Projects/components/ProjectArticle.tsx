import { cn } from "@theme-os/utils";

import { LazyMdxArticle } from "../../../components/LazyMdxArticle.tsx";
import { designOptions } from "../../../design-system/design-system.ts";
import { ArticleErrorBoundary } from "./ArticleErrorBoundary.tsx";
import { ProjectMiniHeading } from "./ProjectMiniHeading.tsx";

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

export const ProjectArticle = ({ slug }: { slug: string }) => {
  return (
    <div
      className={cn(
        "w:full w:66.66%@lg f:13",
        "bx:border-b@lg bb:border-b@lg pb:10x pb:30x@lg",
      )}
    >
      <ProjectMiniHeading
        className={cn(
          "hidden block@lg",
          "sticky@lg top:69px@lg z:2@lg",
          "mb:10x mb:16x@lg",
          "bx:border-b bx:none@lg",
          designOptions.centeredArticle &&
            designOptions.withFullWidthSynopsis &&
            "max-w:620px mx:auto",
        )}
      >
        Synopsis
      </ProjectMiniHeading>

      <ArticleErrorBoundary key={slug}>
        <LazyMdxArticle
          slug={slug}
          mdxModules={mdxModules}
          articleComponentModules={articleComponentModules}
        />
      </ArticleErrorBoundary>
    </div>
  );
};
