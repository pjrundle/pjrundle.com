import { projectsManifest } from "../../../Projects/content/manifest.tsx";
import { ProjectCardMini } from "../../components/ProjectCardMini.tsx";
import { ExperienceWrapper } from "./ExperienceWrapper.tsx";

export const Experience = () => {
  return (
    <ExperienceWrapper>
      <div className="grid grid-cols:1 grid-cols:2@lg gap:6x">
        {projectsManifest
          .filter(
            (project) =>
              project.type !== "product" && project.type !== "system",
          )
          .map((project, i) => (
            <ProjectCardMini
              key={project.slug}
              project={project}
              imageLoading={i === 0 ? "eager" : "lazy"}
            />
          ))}
      </div>
    </ExperienceWrapper>
  );
};
