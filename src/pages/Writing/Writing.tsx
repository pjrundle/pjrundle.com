import { useParams } from "wouter";

import { HeroText } from "../../components/HeroText.tsx";
import { PageHatched } from "../../components/PageHatched.tsx";
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
    <PageHatched>
      <div className="bb:border-b bg:color-gray-0 pt:14x pb:16x mb:14x">
        <div className="max-w:620px mx:auto">
          <HeroText
            overline="Article"
            heading={entry.title}
            // size="project"
          />
          <div className="typestyle-copy f:12 mt:4x opacity:0.66">
            Published: 05/04/2026
          </div>
        </div>
      </div>
      <WritingArticle slug={slug} />
    </PageHatched>
  );
};
