import { cn } from "@theme-os/utils";

export const TestimonialCard = ({
  name,
  testimonial,
  meta,
  profileImgSrc,
  isActive,
  className,
}: {
  name: string;
  testimonial: React.ReactNode;
  meta: string;
  profileImgSrc: string;
  isActive: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(className, "bg:color-gray-0 pb:6x")}
      aria-hidden={!isActive}
      aria-disabled={!isActive}
    >
      <div
        className={cn(
          "px:6x px:0@md",
          "flex flex-col flex-row@md gap-y:4x",
          "bl:3px|solid|color-gray-100",
          isActive && "border-color:color-gray-700!",
          !isActive && "opacity:0.3",
          "transition:opacity|0.4s|linear,border-color|0.4s|linear",
        )}
      >
        <div className="w:70px min-w:70px w:120px@md min-w:120px@md flex align-items:center pl:6.5x@md pr:6x@md">
          <div className="aspect:1/1 w:full r:full bg:color-gray-100 b:1px|solid|color-gray-300 overflow:hidden">
            <img
              src={profileImgSrc}
              alt={name}
              className="w:full h:full object-fit:cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <p
            className={cn(
              "pr:14x@md",
              "typestyle-copy leading:1.5 f:12 f:14@md",
              "mt:4x_:where(p:not(:first-child))",
              "{content:'“'}_:where(p:first-child):before",
              "{content:'”'}_:where(p:last-child):after",
            )}
          >
            {testimonial}
          </p>
          <p className="typestyle-meta leading:1.6 f:9 f:10@md mt:6x">
            <span className="color:color-gray-950">{name}</span>
            <span> – {meta}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
