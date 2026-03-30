import { Button, Surface, Text } from "@theme-os/react";
import { cn } from "@theme-os/utils";

export const NotificationInline = ({
  intent,
  heading,
  copy,
  button,
}: {
  intent: "info" | "success" | "warning" | "danger";
  heading: string;
  copy: string;
  button: {
    label: string;
  };
}) => {
  return (
    <Surface.Card intent={intent} className="flex">
      <div className={cn(`bg:color-intent-${intent}-500`, "w:5px")} />

      <div className="w:full p:4x flex justify-content:space-between align-items:center">
        <div>
          <Text typestyle="heading" className="f:12 mb:0.5x">
            {heading}
          </Text>
          <Text typestyle="copy" className="f:10">
            {copy}
          </Text>
        </div>

        <Button label={button.label} intent={intent} className="f:8" />
      </div>
    </Surface.Card>
  );
};
