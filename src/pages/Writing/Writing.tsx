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
        <div className="page-container-lg px:7.5x pattern-diag bx:border-b">
          <div className="bg:color-gray-0 bx:border-b pb:8x">
            <div className="bb:border-b bg:color-gray-0 pt:14x pb:16x mb:14x">
              <div className="max-w:620px mx:auto">
                <HeroText
                  overline="Article"
                  heading={entry.title}
                  // size="project"
                />
              </div>
            </div>
            <WritingArticle slug={slug} />
          </div>
        </div>
      </div>
    </article>
  );
};
