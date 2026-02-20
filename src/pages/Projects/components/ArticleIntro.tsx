import { Button } from "@theme-os/react";
import { PAccessibleLink } from "@theme-os/react-primitives";

import { TProjectManifestEntry } from "../content/manifest.tsx";

const MicrositeButton = ({
  projectEntry,
  className,
}: {
  projectEntry: TProjectManifestEntry;
  className?: string;
}) => {
  if (!projectEntry.button) return null;

  return (
    <Button
      label={projectEntry.button.label}
      variant="solid"
      icon="externalLink"
      className={className}
      renderAs={
        <PAccessibleLink href={projectEntry.button.href} newTab={true} />
      }
    />
  );
};

export const ArticleIntro = ({
  projectEntry,
  className,
}: {
  projectEntry: TProjectManifestEntry;
  className?: string;
}) => {
  return (
    <section className={className}>
      <div className="mb:4x flex align-items:end justify-content:space-between">
        <h2 className="typestyle-heading f:18">About</h2>
        <MicrositeButton
          projectEntry={projectEntry}
          className="hidden@lg f:11"
        />
      </div>

      <div className="flex@lg bt:border-a">
        <div className="typestyle-copy flex:1 f:12 bb:border-a {py:2x;bt:border-a}_p">
          <p className="bt:none!">
            <strong>Role:</strong> {projectEntry.role}
          </p>
          <p>
            <strong>Scope:</strong> {projectEntry.scope}
          </p>
        </div>

        {projectEntry.button && (
          <div className="f:11 hidden flex@lg align-items:center justify-content:center px:6x bb:border-a bl:border-a">
            <MicrositeButton projectEntry={projectEntry} />
          </div>
        )}
      </div>
    </section>
  );
};
