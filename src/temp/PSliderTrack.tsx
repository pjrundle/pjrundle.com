import { cn } from "@theme-os/utils";
import React, { ReactNode } from "react";

export const PSliderTrack = ({
  index,
  items,
  children,
  gutter = 0,
  durationMs = 400,
  easing = "ease-in-out",
  className,
  classNameSlideWrappers,
  style,
}: {
  index: number;
  items?: ReactNode[];
  children?: ReactNode;
  gutter?: number; // percentage between slides
  durationMs?: number;
  easing?: string;
  className?: string;
  classNameSlideWrappers?: string;
  style?: React.CSSProperties;
}) => {
  const elements = children ? React.Children.toArray(children) : items;

  if (!elements || elements.length === 0) {
    console.warn("SliderTrack: No items provided.");
    return null;
  }

  const translatePercent = index * (100 + gutter);

  return (
    <div
      className={cn("flex", "flex-wrap:nowrap", className)}
      style={{
        transform: `translate3d(-${translatePercent}%, 0, 0)`,
        transitionProperty: "transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: easing,
        ...style,
      }}
    >
      {elements.map((Slide, i) => (
        <div
          key={i}
          className={cn("min-w:full", classNameSlideWrappers)}
          style={{
            marginRight: gutter ? `${gutter}%` : undefined,
          }}
        >
          {Slide}
        </div>
      ))}
    </div>
  );
};
