import { MDXProvider } from "@mdx-js/react";
import { injectThemeOsPrismCss } from "@theme-os/core";
import { cn } from "@theme-os/utils";
import { type ComponentType, useEffect } from "react";

export const Mdx = ({
  content: Content,
  components,
  className,
}: {
  content: ComponentType<{
    components?: React.ComponentProps<typeof MDXProvider>["components"];
  }>;
  components?: React.ComponentProps<typeof MDXProvider>["components"];
  className?: string;
}) => {
  useEffect(() => injectThemeOsPrismCss(), [components]);

  return (
    <MDXProvider components={components}>
      <div className={cn("prose", className)}>
        <Content components={components} />
      </div>
    </MDXProvider>
  );
};
