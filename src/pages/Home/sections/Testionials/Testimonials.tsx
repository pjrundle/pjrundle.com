import { IconButton, TextModule } from "@theme-os/react";
import { cn } from "@theme-os/utils";

import { PSliderTrack } from "../../../../temp/PSliderTrack.tsx";
import { useStepper } from "../../../../temp/useStepper.ts";
import { testimonialData } from "./testimonial-data.tsx";
import { TestimonialCard } from "./TestimonialCard.tsx";

const Btns = ({
  stepper,
  className,
}: {
  stepper: ReturnType<typeof useStepper>;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap:2x", className)}>
      <IconButton
        icon="arrowLeft"
        onClick={stepper.prev}
        disabled={stepper.atStart}
        aria-label="Previous testimonial"
        className="bg:color-gray-0!@<md"
      />
      <IconButton
        icon="arrowRight"
        onClick={stepper.next}
        disabled={stepper.atEnd}
        aria-label="Next testimonial"
        className="bg:color-gray-0!@<md"
      />
    </div>
  );
};

const testimonialHighlights = testimonialData.map((t) => t.highlight);
const longestHighlightIndex = testimonialHighlights.reduce(
  (maxIndex, item, index) => {
    return item.length > testimonialHighlights[maxIndex].length
      ? index
      : maxIndex;
  },
  0,
);

export const Testimonials = () => {
  const stepper = useStepper({
    count: testimonialData.length,
    loop: true,
    initialIndex: 0,
  });

  return (
    <section className=" mt:24x mt:40x@lg">
      <div className="page-gutter">
        <div className="page-container-lg">
          <div className="flex justify-content:space-between align-items:end bb:none mb:8x mb:12x@md">
            <div className="rel pr:8x@md">
              {testimonialHighlights.map((item, index) => {
                return (
                  <TextModule
                    variant="block.base"
                    className={cn(
                      index !== stepper.index && "opacity:0 visibility:hidden",
                      longestHighlightIndex !== index && "abs bottom:0 left:0",
                    )}
                    classNameHeading="text-wrap:balance"
                    heading={`“${item}”`}
                    key={`testimonial-highlight-${item}`}
                  />
                );
              })}
            </div>

            <Btns stepper={stepper} className="hidden@<md" />
          </div>

          <div className="bx:border-a@md overflow:hidden rel">
            <div className="page-container ml:0! pattern-diag@<md">
              <PSliderTrack
                index={stepper.index}
                gutter={0}
                className="align-items:start"
              >
                {testimonialData.map((t, i) => (
                  <TestimonialCard
                    key={`testimonial-${i}`}
                    name={t.name}
                    meta={t.meta}
                    profileImgSrc={t.profileImgSrc}
                    testimonial={t.text}
                    isActive={stepper.index === i}
                    className={cn(
                      "transition:transform|0.2s|ease-in-out",
                      stepper.index === i ? "" : "transform:scale(0.9)",
                    )}
                  />
                ))}
              </PSliderTrack>
            </div>

            <Btns stepper={stepper} className="hidden@md abs top:0 right:0" />
          </div>
        </div>
      </div>
    </section>
  );
};
