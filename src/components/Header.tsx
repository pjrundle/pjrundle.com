import { Button, Icon } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "wouter";

import { PJRGlyph } from "../assets/PJRGlyph.tsx";

const LOGO_WIDTH_MOBILE = 60;
const LOGO_WIDTH_LG = 74;

const MenuIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      aria-label="Menu"
      className={cn(
        `w:${LOGO_WIDTH_MOBILE}px w:${LOGO_WIDTH_LG - 10}px@lg`,
        "inline-block rel",
        "bg:color-gray-50 color:color-gray-900",
        "bg:color-gray-100:hover",
        "bl:border-b bt:border-b",
        "cursor:pointer",
      )}
      onClick={onClick}
    >
      <span className="aspect:1/1 block" />

      <div className="abs-center w:32.5% flex flex-col gap-y:5px">
        <span className="block w:100% h:1px bg:color-gray-700" />
        <span className="block w:100% h:1px bg:color-gray-700" />
        <span className="block w:100% h:1px bg:color-gray-700" />
      </div>
    </button>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={cn(
        `w:${LOGO_WIDTH_MOBILE}px w:${LOGO_WIDTH_LG}px@lg`,
        "inline-block rel",
        "bg:color-gray-50 color:color-gray-900",
        "bg:color-gray-100:hover",
        "br:border-b bt:border-b",
      )}
    >
      <span className="aspect:1/1 block" />
      <span className="abs-center-y left:38% w:31% w:31%@xl svg-asset">
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
          "w:50% p:2x p:3x@md",
          "z:1:focus-visible",
          "{bg:color-gray-100;color:color-gray-700}:hover",
          "flex align-items:center justify-content:center",
          "bg:color-gray-50 bg:transparent@sm",
          className,
        )}
      >
        <Icon icon={icon} />
      </a>
    </li>
  );
};

const MENU_BACKDROP_ENTER_S = 0.2;
const MENU_PANEL_ENTER_DELAY_S = MENU_BACKDROP_ENTER_S;
const MENU_PANEL_ENTER_S = 0.25;
const MENU_PANEL_EXIT_S = 0.2;

/** Start nav sections after backdrop + panel slide (unchanged open sequence). */
const MENU_NAV_SECTION_ENTER_AFTER_S =
  MENU_PANEL_ENTER_DELAY_S + MENU_PANEL_ENTER_S;
const MENU_NAV_SECTION_STAGGER_S = 0.065;
const MENU_NAV_SECTION_MOTION_Y = -12;
const MENU_NAV_SECTION_MOTION_DUR_S = 0.32;
const MENU_NAV_SECTION_MAX_INDEX = 3;
/** Time until the last column (index 0) finishes its hide motion. */
const MENU_NAV_SECTION_EXIT_COMPLETE_S =
  MENU_NAV_SECTION_MAX_INDEX * MENU_NAV_SECTION_STAGGER_S +
  MENU_NAV_SECTION_MOTION_DUR_S;

const MENU_BACKDROP_EXIT_DELAY_S =
  MENU_NAV_SECTION_EXIT_COMPLETE_S + MENU_PANEL_EXIT_S * 0.75;

const menuBackdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: MENU_BACKDROP_ENTER_S,
      delay: MENU_BACKDROP_EXIT_DELAY_S,
    },
  },
  visible: {
    opacity: 1,
    transition: { duration: MENU_BACKDROP_ENTER_S, ease: "easeOut" as const },
  },
};

const menuPanelVariants = {
  hidden: {
    y: "-100%",
    transition: {
      delay: MENU_NAV_SECTION_EXIT_COMPLETE_S,
      duration: MENU_PANEL_EXIT_S,
      ease: "easeIn" as const,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: MENU_PANEL_ENTER_S,
      delay: MENU_PANEL_ENTER_DELAY_S,
      ease: "easeOut" as const,
    },
  },
};

const NavSection = ({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) => {
  return (
    <div className="">
      <div className="typestylemeta typestyle-display f:16! opacity0.66 f:10 mb:3x">
        {label}
      </div>
      <div className="flex flex-direction:column f:12">
        {links.map((link) => (
          <Link
            key={link.href}
            className="typestyle-copy pb:1x"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const MenuNavSectionReveal = ({
  staggerIndex,
  className,
  children,
}: {
  staggerIndex: number;
  className?: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: MENU_NAV_SECTION_MOTION_Y }}
    animate={{ opacity: 1, y: 0 }}
    exit={{
      opacity: 0,
      y: MENU_NAV_SECTION_MOTION_Y,
      transition: {
        duration: MENU_NAV_SECTION_MOTION_DUR_S,
        delay:
          (MENU_NAV_SECTION_MAX_INDEX - staggerIndex) *
          MENU_NAV_SECTION_STAGGER_S,
        ease: "easeIn",
      },
    }}
    transition={{
      duration: MENU_NAV_SECTION_MOTION_DUR_S,
      delay:
        MENU_NAV_SECTION_ENTER_AFTER_S +
        staggerIndex * MENU_NAV_SECTION_STAGGER_S,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top:0 z:100">
        <div className="page-gutter rel z:20">
          <div className="page-container-lg bg:color-gray-0 z:100 bb:border-b bx:border-b flex justify-content:space-between">
            <Logo />

            <div className="flex gap-x:6x">
              <div className="flex f:11 align-items:center gap-x:3x">
                {/* <div className="flex r:20px b:border-b overflow:hidden">
                <Link
                  href="/approach"
                  className="typestyle-meta opacity:0.66 flex align-items:center px:4x py:2x bxborder-b"
                >
                  <span>/ Approach</span>
                </Link>
                <Link
                  href="/approach"
                  className="typestyle-meta opacity:0.66 flex align-items:center px:4x py:2x"
                >
                  <span>/ Process</span>
                </Link>
              </div> */}

                {/* <Badge>Approach</Badge>
              <Badge>Process</Badge> */}

                <Button
                  label="Menu"
                  // icon={HiMenu}
                  // icon={HiChevronDown}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>

              <nav className="color:color-gray-500 f:17 f:19@lg flex">
                <ul
                  className={cn(
                    "hidden!",
                    "flex blborder-b btborder-b bg:color-gray-0 mr:1.5x",
                    `w:${LOGO_WIDTH_MOBILE + 10}px w:${LOGO_WIDTH_LG + 10}px@lg`,
                  )}
                >
                  <SocialLink
                    icon={RiLinkedinFill}
                    href="https://www.linkedin.com/in/pete-rundle/"
                    label="View Linkedin profile"
                  />
                  <SocialLink
                    icon={IoLogoGithub}
                    className="blborder-b pr:6x!"
                    href="https://github.com/pjrundle"
                    label="View GitHub profile"
                  />
                </ul>

                {/* <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} /> */}
              </nav>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <>
              <motion.div
                key="menu-backdrop"
                role="presentation"
                variants={menuBackdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={cn("fixed inset:0 z:10 bdblur(20px)")}
              >
                <div
                  className={cn(
                    "abs-fill opacity0.4",
                    "bgblack",
                    "background-image:linear-gradient(to|bottom,rgba(0,0,0,1),rgba(0,0,0,0))",
                  )}
                />
              </motion.div>

              <motion.div
                key="menu-panel"
                variants={menuPanelVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={cn(
                  "abs bottom:-270px left:0 right:0 height:270px z:15",
                  "bbborder-b shadowshadow-xl",
                )}
              >
                {/* <div className="abs-fill bg:black opacity:0.75" /> */}

                <div className="rel">
                  <div className="page-gutter">
                    <div className="page-container-lg">
                      <div className="flex gap-x:24x bx:border-a bb:border-a bb:6px|solid|color-gray-100! px:13x pt:13x pb:20x bg:color-gray-0 shadow:shadow-xl">
                        <div className="grid grid-cols:3">
                          <MenuNavSectionReveal staggerIndex={0}>
                            <NavSection
                              label="Products / Systems"
                              links={[
                                {
                                  href: "/projects/theme-os",
                                  label: "ThemeOS",
                                },
                                { href: "/projects/wombat", label: "Wombat" },
                              ]}
                            />
                          </MenuNavSectionReveal>
                          <MenuNavSectionReveal staggerIndex={1}>
                            <NavSection
                              label="Case Studies"
                              links={[
                                {
                                  href: "/projects/cloud-iq",
                                  label: "Cloud.IQ",
                                },
                                {
                                  href: "/projects/brandwatch",
                                  label: "Brandwatch",
                                },
                              ]}
                            />
                          </MenuNavSectionReveal>
                          <MenuNavSectionReveal staggerIndex={2}>
                            <NavSection
                              label="Writing"
                              links={[
                                {
                                  href: "/labs/theme-os",
                                  label:
                                    "Figma: the right place for design systems?",
                                },
                                {
                                  href: "/labs/wombat",
                                  label: "Designing in code without friction",
                                },
                                {
                                  href: "/labs/brandwatch",
                                  label:
                                    "No-code - easier than learning tailwind?",
                                },
                                {
                                  href: "/labs/brandwatch",
                                  label: "What is a design engineer?",
                                },
                              ]}
                            />
                          </MenuNavSectionReveal>
                        </div>

                        <MenuNavSectionReveal
                          staggerIndex={3}
                          className="bl3px|solid|color-gray-700 pl:13x"
                        >
                          {/* <div className="typestyle-display f:16 mb:3x">
                            Get in touch
                          </div> */}
                          <NavSection
                            label="Contact"
                            links={[
                              {
                                href: "mailto:hello@pjrundle.com",
                                label: "hello@pjrundle.com",
                              },
                              {
                                href: "https://linkedin.com/in/pete-rundle/",
                                label: "LinkedIn",
                              },
                            ]}
                          />
                        </MenuNavSectionReveal>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
};
