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
    <div className={className}>
      {label && <ProjectMiniHeading>{label}</ProjectMiniHeading>}
      <div className="px:4x px:5.5x@lg">{children}</div>
    </div>
  );
};
