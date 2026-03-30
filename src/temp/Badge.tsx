import { cn } from "@theme-os/utils";

export const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "typestyle-meta bg:color-gray-200 r:4px px:1em pb:0.5em pt:0.55em leading:1",
        "color:color-gray-700",
        className,
      )}
    >
      {children}
    </span>
  );
};
