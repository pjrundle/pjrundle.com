import { cn } from "@theme-os/utils";

import { EnclosedSection } from "../../../../components/EnclosedSection.tsx";
import { projectsManifest } from "../../../Projects/content/manifest.tsx";
import { ProjectCard } from "../../components/ProjectCard.tsx";

export const Projects = () => {
  return (
    <EnclosedSection title="Products / Systems">
      {projectsManifest
        .filter(
          (project) => project.type === "product" || project.type === "system",
        )
        .map((project, i) => (
          <div key={project.slug} className={cn(i === 0 && "mt4x")}>
            {i > 0 && (
              // Decorative separator
              <div className="h:1px bg:color-gray-100 bg:color-gray-150@md my:6x my:12x@md" />
            )}
            <ProjectCard
              size="product"
              project={project}
              imageLoading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
    </EnclosedSection>
  );
};
