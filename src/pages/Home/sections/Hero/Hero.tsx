import { TextModule } from "@theme-os/react";

import { HeroText } from "../../../../components/HeroText.tsx";

export const Hero = () => {
  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg pb:16x@<sm pt:20x pb:21x">
          <div className="grid gap:8x grid-cols:2@xl gap:0@xl">
            <HeroText
              overline="Pete Rundle"
              heading={
                <>
                  Senior React<span className="hidden inline@sm">/</span>
                  <br className="hidden@sm" />
                  TypeScript Engineer
                  <br />
                  <span className="color:color-gray-500 f:0.66em mt:0.66em block inline@sm f:1em@sm">
                    Design Systems <span className="inline@sm">·</span>{" "}
                    UI&nbsp;Architecture
                  </span>
                </>
              }
            />

            <div className="flex align-items:end justify-content:end@xl">
              <div className="pl:6x@md pl:6.5x@xl rel">
                <span className="hidden block@md abs top:4px bottom:2px left:0 w:3px bg:color-gray-700" />
                <TextModule
                  variant="block.hero"
                  classNameCopy="max-w:68ch max-w:65ch@lg text-wrap:pretty"
                  copy={
                    <>
                      <p>
                        Specializing in design systems, component architecture,
                        and scalable front-end platforms. I work at the
                        intersection of design and engineering with a focus on
                        consistency and repeatable, high-quality execution.
                      </p>
                    </>
                  }
                />
                <p className="typestyle-meta bt:border-b@sm mt:2x mt:4x@sm pt:4x leading:1.4 f:10 flex gap-x:1.5x align-items:center opacity:0.66@<sm">
                  <span className="color:color-gray-700">Available for:</span>{" "}
                  <span>senior roles, contract, advisory</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
