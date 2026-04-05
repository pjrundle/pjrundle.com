import { useParams } from "wouter";

import { HeroText } from "../../components/HeroText.tsx";
import { Page404 } from "../404/404.tsx";
import { WritingArticle } from "./components/WritingArticle.tsx";
import { writingManifestBySlug } from "./content/manifest.tsx";

/*
|--------------------------------------------------------------------------
| Writing article
|--------------------------------------------------------------------------
*/

export const WritingPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const entry = writingManifestBySlug.get(slug);

  if (!slug || !entry) return <Page404 />;

  return (
    <article>
      <div className="page-gutter">
        <div className="page-container-lg pt:14x pb:8x">
          <div className="mb:10x max-w:620px mx:auto">
            <HeroText heading={entry.title} size="project" />
          </div>
          <WritingArticle slug={slug} />
        </div>
      </div>
    </article>
  );
};
