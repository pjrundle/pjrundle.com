import { Icon } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "wouter";

import { PJRGlyph } from "../assets/PJRGlyph.tsx";

const LOGO_WIDTH_MOBILE = 68;
const LOGO_WIDTH_MD = 80;

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={cn(
        `w:${LOGO_WIDTH_MOBILE}px w:${LOGO_WIDTH_MD}px@md`,
        "inline-block rel",
        "bg:color-gray-50 color:color-gray-900",
        "bg:color-gray-100:hover",
        "br:border-b bt:border-b",
      )}
    >
      <span className="aspect:1/1 block" />
      <span className="abs-center-y left:38% w:29% w:31%@xl svg-asset">
        <span className="rel top:1px">
          <PJRGlyph />
        </span>
      </span>
    </Link>
  );
};

const SocialLink = ({
  icon,
  href,
  className,
  label,
}: {
  icon: React.ElementType;
  href: string;
  className?: string;
  label?: string;
}) => {
  return (
    <li className="d:contents">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={label}
        className={cn(
          "w:50% p:2x p:2.5x@md",
          "z:1:focus-visible",
          "{bg:color-gray-100;color:color-gray-700}:hover",
          "flex align-items:center justify-content:center",
          className,
        )}
      >
        <Icon icon={icon} />
      </a>
    </li>
  );
};

export const Header = () => {
  return (
    <header className="sticky top:0 z:100">
      <div className="page-gutter">
        <div className="page-container-lg bg:color-gray-0 z:100 bb:border-b bx:border-b flex justify-content:space-between">
          <Logo />

          <div className="flex gap:6x">
            <nav className="color:color-gray-500 f:20 flex">
              <ul
                className={cn(
                  "flex bl:border-b bt:border-b bg:color-gray-0",
                  `w:${LOGO_WIDTH_MOBILE + 9}px w:${LOGO_WIDTH_MD + 9}px@md`,
                )}
              >
                <SocialLink
                  icon={RiLinkedinFill}
                  href="https://www.linkedin.com/in/pete-rundle/"
                  label="View Linkedin profile"
                />
                <SocialLink
                  icon={IoLogoGithub}
                  className="bl:border-b"
                  href="https://github.com/pjrundle"
                  label="View GitHub profile"
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
