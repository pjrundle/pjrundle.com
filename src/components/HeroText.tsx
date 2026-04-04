import { cn } from "@theme-os/utils";

export const HeroText = ({
  overline,
  heading,
  meta,
  size = "home",
  className,
  ...props
}: {
  overline: string;
  heading: React.ReactNode;
  meta?: React.ReactNode;
  size?: "home" | "project";
  className?: string;
}) => {
  return (
    <div {...props} className={className}>
      <h1
        className={cn(
          "typestyle-display color:color-gray-500 leading:1",
          size === "home" ? "mb:2.5x mb3x@sm f:16" : "mb:2.5x f:14",
        )}
      >
        {overline}
      </h1>
      <p
        className={cn(
          "typestyle-display letter-spacing:-0.025em",
          "text-wrap:balance leading1.35 leading:1.2@sm",
          size === "home"
            ? "f:28 f:32@sm f:34@md f:37@xl"
            : "f:26 f:29@lg f:33@xl",
        )}
      >
        {heading}
      </p>

      {meta && (
        <p className="typestyle-meta f:10 mt:5x flex gap-x:1.5x align-items:center">
          {meta}
        </p>
      )}
    </div>
  );
};
