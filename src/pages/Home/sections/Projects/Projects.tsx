import { projectsManifest } from "../../../Projects/content/manifest.tsx";
import { ProjectCard } from "./components/ProjectCard.tsx";

export const Projects = () => {
  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg bg:color-gray-25 b:border-b bb:none p:4x px:3.5x@<sm">
          <h2 className="typestyle-meta f:10">Projects</h2>
        </div>
      </div>

      <div className="px:8x@sm px:16x@lg bt:border-a@<sm">
        <div className="page-container-lg bx:border-b@sm bb:border-b bb:border-a@<sm background-color:color-gray-50">
          <div className="page-gutter px:0@sm">
            <div className="px:6x@sm pt:6x pb:8x py10x@md flex flex-col">
              {projectsManifest.map((project, i) => (
                <div key={project.slug}>
                  {i > 0 && (
                    // Decorative separator
                    <div className="h:1px bg:color-gray-100 bg:color-gray-150@md my:6x my:12x@md" />
                  )}
                  <ProjectCard
                    project={project}
                    imageLoading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
