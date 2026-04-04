import { cn } from "@theme-os/utils";

export const ProjectMiniHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "typestyle-meta f:10 bg:color-gray-25 bg:color-gray-50@lg",
        "mb:5x by:border-b py:3x px:3.5x",
        className,
      )}
    >
      {children}
    </h3>
  );
};
