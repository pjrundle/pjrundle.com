import { Button, Text } from "@theme-os/react";
import { cn } from "@theme-os/utils";

import { TProjectManifestEntry } from "../../Projects/content/manifest.tsx";

export const ProjectCardTextModule = ({
  projectEntry,
}: {
  projectEntry: TProjectManifestEntry;
}) => {
  const {
    name,
    projectCardHeading,
    projectCardDescription,
    categoryLabel,
    techStack,
  } = projectEntry;

  const hasTechStack = techStack && techStack.length > 0;

  return (
    <>
      <Text typestyle="meta" className="f:9 f:10@sm">
        {categoryLabel}
      </Text>

      {projectCardHeading && (
        <h3
          className={cn(
            "typestyle-display leading:1.3 pr:6x text-wrap:pretty",
            "f:18 f:20@xl mt:2.5x",
          )}
        >
          {projectCardHeading}
        </h3>
      )}

      {hasTechStack && (
        <div className="overflow:hidden rel">
          <p className="typestyle-copy f:1.5xs text-wrap:pretty mt:2x white-space:nowrap text-overflow:ellipsis">
            {techStack?.join(" · ")}
          </p>
          <span className="abs top:0 right:0 bottom:0 w:60px background-image:linear-gradient(to|right,transparent,color-gray-50)" />
        </div>
      )}

      <Button
        label={`View ${name}`}
        variant="solid"
        className="f:11 f:12@md mt:5x mt:6x@xl w:full"
        icon="arrowRight"
        tabIndex={-1}
        aria-hidden
      />
    </>
  );
};
