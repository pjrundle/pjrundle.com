import { Button, TextModule } from "@theme-os/react";
import { PAccessibleLink } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";

import { PJRGlyph } from "../assets/PJRGlyph.tsx";

const FooterLink = ({
  href,
  label,
  disabled,
}: {
  href: string;
  label: string;
  disabled?: boolean;
}) => {
  return (
    <div className={cn(disabled && "cursor:not-allowed opacity:0.5")}>
      <PAccessibleLink
        href={href}
        newTab={true}
        aria-disabled={disabled}
        className={cn(
          "cursor:pointer",
          "flex gap:1x align-items:center",
          "typestyle-copy text-decoration:underline",
          disabled && "pointer-events:none",
        )}
      >
        {label}
      </PAccessibleLink>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="rel mt:24x mt:40x@xl mt:45x@2xl overflow:hidden">
      <div className="page-gutter">
        <div className="page-container-lg px:5x px:10x@md pt:6.5x pb:7.5x pt:8x@sm pb:9.5x@sm pt:12x@md pb:14x@md b:border-b bb:none flex justify-content:start">
          <TextModule
            variant="block.base"
            heading={
              <span className="f:display-lg@xl">hello@pjrundle.com</span>
            }
          />
        </div>
        <div className="page-container-lg bg:color-gray-50 z:100 b:border-b bb:none">
          <div className="px:5x px:10x@md py:6x py:8x@md flex flex-col flex-row@md gap:4x gap:10x@md align-items:center@md justify-content:space-between">
            <div className="w:full flex align-items:center gap:5x gap:8x@md justify-content:space-between@<md">
              <PJRGlyph className="ml:1x ml:0@md hidden@<md w:21px w:25px@md color:color-gray-950" />
              <Button
                label="Download CV"
                variant="outline"
                icon="download"
                className="f:11"
                renderAs={
                  <PAccessibleLink
                    href="/cv/cv-pete-rundle-design-engineer.pdf"
                    newTab={true}
                  >
                    Download CV
                  </PAccessibleLink>
                }
              />
            </div>

            <nav className="flex gap:6x gap:8x@sm f:12">
              <FooterLink href="https://theme-os.vercel.app/" label="ThemeOS" />
              <FooterLink
                href="https://wombat.vercel.app/"
                label="Wombat"
                disabled
              />
              <FooterLink
                href="https://milemap.vercel.app/"
                label="Milemap"
                disabled
              />
            </nav>
          </div>

          <div className="bt:border-a px:5x py:3x py:4x@md f:10 f:11@md">
            <p className="typestyle-copy">
              &copy; {new Date().getFullYear()} Pete Rundle. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
