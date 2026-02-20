import { cn } from "@theme-os/utils";

const Box = ({
  children,
  title,
  caption,
}: {
  children?: React.ReactNode;
  title: string;
  caption?: string;
}) => {
  return (
    <div className="bg:color-gray-50 b:1px|dashed|color-gray-200 py:1.5em px:0.75em p:1.5em@sm rel">
      <div className={cn(!!children && "mb:4x", "t:center")}>
        <div className="typestyle-code f:1em mb:0.5em white-space:nowrap">
          {title}
        </div>
        {caption && (
          <div className="typestyle-code f:0.7em opacity:0.75">{caption}</div>
        )}
      </div>

      {children}
    </div>
  );
};

const RuntimeBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box title="ThemeOS Runtime">
      <div className="abs-center-x top:-1em h:1em br:1px|dashed|color-gray-200" />
      <div className="f:0.8em">{children}</div>
    </Box>
  );
};

export const ArchitectureDiagram = () => {
  return (
    <div className="flex flex-col gap:1em f:8 f:12@sm">
      <Box
        title="Design System"
        caption="ThemeOS Schema Validated Token Model (SSOT)"
      />
      <div className="grid grid-cols:3 gap:1em">
        <RuntimeBox>
          <Box title="Marketing Site" />
        </RuntimeBox>
        <RuntimeBox>
          <Box title="Web App" />
        </RuntimeBox>
        <RuntimeBox>
          <Box title="Internal Dashboard" />
        </RuntimeBox>
      </div>

      <div className="typestyle-copy my:0.5em f:0.8em opacity:0.8 t:center">
        ThemeOS acts as a resolution layer between structured design state and
        running applications.
      </div>
    </div>
  );
};
