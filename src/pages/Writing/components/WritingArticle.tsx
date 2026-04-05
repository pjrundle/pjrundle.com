import { cn } from "@theme-os/utils";

import { LazyMdxArticle } from "../../../components/LazyMdxArticle.tsx";
import { ArticleErrorBoundary } from "../../Projects/components/ArticleErrorBoundary.tsx";

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

export const WritingArticle = ({ slug }: { slug: string }) => {
  return (
    <div className={cn("w:full f:13", "pb:10x pb:30x@lg", "mt:6x")}>
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
