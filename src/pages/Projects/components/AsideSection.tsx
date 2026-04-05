import { cn } from "@theme-os/utils";

import { ProjectMiniHeading } from "./ProjectMiniHeading.tsx";

export const AsideSection = ({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "f:12")}>
      {label && <ProjectMiniHeading>{label}</ProjectMiniHeading>}
      <div className="px:4x px:5.5x@lg">{children}</div>
    </div>
  );
};
