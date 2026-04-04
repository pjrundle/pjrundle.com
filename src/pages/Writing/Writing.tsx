import { useParams } from "wouter";

import { HeroText } from "../../components/HeroText.tsx";
import { Page404 } from "../404/404.tsx";
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
          <HeroText overline="Writing" heading={entry.title} size="project" />
          <p className="typestyle-copy f:12 f:14@xl mt:6x">
            This article route is wired up — replace this line with real content
            when you are ready.
          </p>
        </div>
      </div>
    </article>
  );
};
