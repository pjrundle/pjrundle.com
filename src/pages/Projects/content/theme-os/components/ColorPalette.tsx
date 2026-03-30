import { cn } from "@theme-os/utils";

const shades = [
  "0",
  "25",
  "50",
  "100",
  "150",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

export const ColorPalette = ({
  colorName = "gray",
  classNameYPadding = "py:2x py:4x@sm",
}: {
  colorName?: string;
  classNameYPadding?: string;
}) => {
  return (
    <div className="grid grid-cols:14 gap:1x">
      {shades.map((shade) => (
        <div
          key={shade}
          className={cn(`bg:color-${colorName}-${shade}`, classNameYPadding)}
        ></div>
      ))}
    </div>
  );
};
