import { cn } from "@theme-os/utils";

export const EnclosedSection = ({
  children,
  title,
  classNameChildrenContainer,
  as = "section",
}: {
  children: React.ReactNode;
  title: string;
  as?: "section" | "div";
  classNameChildrenContainer?: string;
}) => {
  const Tag = as;

  return (
    <Tag>
      <div className="page-gutter">
        <div className="page-container-lg bg:color-gray-25 bg:transparent@sm b:border-b bb:none bb:border-b@sm p:4x py:3.5x p:3.5x@<sm">
          <h2 className="typestyle-meta f:9 f:10@md">{title}</h2>
        </div>
      </div>

      <div className="px:8x@sm px:16x@lg bt:border-b@<sm">
        <div
          className={cn(
            "page-container-lg bx:border-b@sm bb:border-b",
            classNameChildrenContainer,
          )}
        >
          {/* <div className="px:7.5x pattern-diag"> */}
          <div className="page-gutter px:0@sm bgcolor-gray-0 bxborder-b patter-diag">
            <div className="px:6x@sm py:8x py:6x@sm flex flex-col">
              {children}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Tag>
  );
};
