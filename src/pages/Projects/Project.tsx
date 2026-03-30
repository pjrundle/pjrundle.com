import { cn } from "@theme-os/utils";
import { useParams } from "wouter";

import { designOptions } from "../../design-system/design-system.ts";
import { Page404 } from "../404/404.tsx";
import { ProjectArticle } from "./components/ProjectArticle.tsx";
import { ProjectAside } from "./components/ProjectAside.tsx";
import { ProjectHero } from "./components/ProjectHero.tsx";
import { projectManifestBySlug } from "./content/manifest.tsx";

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

  // Render
  // -----------------------------------------------

  return (
    <article>
      <ProjectHero projectEntry={projectEntry} />

      <div className={cn("page-gutter")}>
        <div
          className={cn(
            "page-container-lg",
            designOptions.withProjectHeroImages && "pt:14x@lg pt:20x@xl",
          )}
        >
          {/* align-items:start needed for sticky */}
          <div className="flex flex-direction:column-reverse gap:10x gap:0x@lg flex-direction:row@lg rel align-items:start">
            <ProjectArticle slug={slug} />
            <ProjectAside projectEntry={projectEntry} slug={slug} />
          </div>
        </div>
      </div>
    </article>
  );
};
