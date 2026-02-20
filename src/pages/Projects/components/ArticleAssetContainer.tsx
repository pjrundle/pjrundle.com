import { cn } from "@theme-os/utils";

const sizeMap = {
  default: {
    width: "100%",
    left: "0%",
  },
  lg: {
    width: "130%",
    left: "-15%",
  },
};

export const ArticleAssetContainer = ({
  children,
  size = "default",
}: {
  children: React.ReactNode;
  size?: "default" | "lg";
}) => {
  return (
    <div className="my:2em">
      <div
        className={cn(
          "rel bg:color-gray-0 b:border-b px:1em py:1em page-container-lg",
          `left:${sizeMap[size].left}`,
          `w:${sizeMap[size].width}`,
        )}
      >
        {children}
      </div>
    </div>
  );
};
