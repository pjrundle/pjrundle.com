import { TextModule } from "@theme-os/react";

import { HeroText } from "../../../../components/HeroText.tsx";

// Copy Options
// ---------------------------------------------------------------

const titles = [
  <>
    Senior React<span className="hidden inline@sm">/</span>
    <br className="hidden@sm" />
    TypeScript Engineer
  </>,
  <>
    Senior Design{` `}
    <br className="hidden@sm" />
    Engineer/Developer
  </>,
  <>Senior Design Engineer</>,
];

const subTitles = [
  <>
    Design Systems <span className="inline@sm">·</span> UI&nbsp;Architecture
  </>,
  <>
    React <span className="inline@sm">·</span> TypeScript{" "}
    <span className="inline@sm">·</span> Design&nbsp;Systems
  </>,
  <span key="react-ts-ui-architecture" className="letter-spacing:-0.01em@<sm">
    React <span className="inline@sm">·</span> TypeScript{" "}
    <span className="inline@sm">·</span> UI&nbsp;Architecture
  </span>,
  <span
    key="react-ts-ui-architecture-design-systems"
    className="f:16 f:19@sm block mt:1em mt:0.6em@sm letter-spacing:-0.02em letter-spacing:-0.01em@sm"
  >
    React <span className="inline@sm">·</span> TypeScript{" "}
    <span className="inline@sm">·</span> UI&nbsp;Architecture{" "}
    <span className="inline@sm">·</span> Design&nbsp;Systems
  </span>,
];

// Selection
// ---------------------------------------------------------------

const selection = [2, 2];

// Hero
// ---------------------------------------------------------------

export const Hero = () => {
  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg pt:20x pb:21x">
          <div className="grid gap:10x gap:8x@sm grid-cols:2@xl gap:0@xl">
            <HeroText
              overline="Pete Rundle"
              heading={
                <>
                  {titles[selection[0]]}
                  <br />
                  <span className="color:color-gray-500 f:16 mt:0.7em block inline@sm f:1em@sm">
                    {subTitles[selection[1]]}
                  </span>
                </>
              }
            />

            <div className="flex align-items:end justify-content:end@xl">
              <div className="pl:6x@md pl:6.5x@xl rel">
                <span className="hidden block@md abs top:4px bottom:2px left:0 w:3px bg:color-gray-700"></span>
                <TextModule
                  variant="block.hero"
                  classNameCopy="max-w:68ch max-w:65ch@lg text-wrap:pretty"
                  copy={
                    <p>
                      I design and build UI systems end-to-end — from design
                      systems and component architecture through to production
                      applications.
                    </p>
                  }
                />
                <p className="typestyle-meta bt:border-b@sm mt:4x@sm pt:4x leading:1.4 f:10 flex gap-x:1.5x align-items:center opacity:0.66@<sm">
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
