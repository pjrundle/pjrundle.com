import { Text, TextModule } from "@theme-os/react";

import { EnclosedSection } from "../../../../components/EnclosedSection.tsx";
import { designOptions } from "../../../../design-system/design-system.ts";

export const ExperienceWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      {designOptions.withExperienceTextModule && (
        <div className="page-gutter mb:10x mb:12x@lg">
          <div className="page-container-lg t:center">
            <Text typestyle="display" className="f:16 mb:2x opacity:0.6">
              Experience
            </Text>
            <TextModule
              variant="block.base"
              classNameHeading="text-wrap:balance"
              heading="10+ years shipping front-end & design systems"
            />
          </div>
        </div>
      )}

      <EnclosedSection
        title="Case Studies"
        as="div"
        classNameChildrenContainer="bb:none@<sm"
      >
        {children}
      </EnclosedSection>
    </section>
  );
};
