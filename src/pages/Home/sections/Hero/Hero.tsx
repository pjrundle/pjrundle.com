import { TextModule } from "@theme-os/react";

export const Hero = () => {
  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg pb:16x@<sm pt:20x pb:21x pt:22x@2xl pb:26x@2xl">
          <div className="grid gap:6x grid-cols:2@lg gap:0@lg">
            <div className="pr:7x@lg pr:14x@xl">
              <TextModule
                variant="block.hero"
                heading={
                  <>
                    I’m <span className="tracking:-0.02em">Pe</span>te Rundle.
                    <br />A Design Engineer
                    <br />
                    based in Brighton, UK.
                  </>
                }
              />
            </div>

            <div className="flex align-items:end">
              <div className="pr:2x pr:14x@sm pl:6x@lg rel">
                <span className="hidden block@lg abs top:4px bottom:2px left:-2px w:3px bg:color-gray-700"></span>
                <TextModule
                  variant="block.hero"
                  classNameCopy="max-w:65ch@lg text-wrap:pretty@lg"
                  copy={
                    <>
                      <p>
                        Specializing in design systems, component architecture,
                        and scalable front-end platforms — working at the
                        intersection of design and engineering with a focus on
                        consistency and repeatable, high-quality execution.
                      </p>
                    </>
                  }
                />
                <p className="typestyle-meta bt:border-b pt:4x leading:1.4 f:10 mt:4x flex gap-x:1.5x align-items:center">
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
