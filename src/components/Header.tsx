import { Icon } from "@theme-os/react";
import { useOnClickOutside } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { HiPencil } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "wouter";

import { PJRGlyph } from "../assets/PJRGlyph.tsx";
import { useAppUi, useCloseMenu } from "../context/AppUiContext.tsx";

const LOGO_WIDTH_MOBILE = 60;
const LOGO_WIDTH_LG = 70;

const MenuIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      aria-label="Menu"
      className={cn(
        `w:${LOGO_WIDTH_MOBILE}px w:${LOGO_WIDTH_LG - 7}px@lg`,
        "inline-block rel",
        "bg:color-gray50 color:color-gray-900",
        "bg:color-gray-25:hover",
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

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const closeMenu = useCloseMenu();
  return (
    <Link href={href} className="typestyle-copy pb:1x" onClick={closeMenu}>
      {label}
    </Link>
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
        "bg:color-gray-25 color:color-gray-900",
        "bg:color-gray-50:hover",
        "br:border-b bt:border-b",
      )}
    >
      <span className="aspect:1/1 block" />
      <span className="abs-center-y left:38% w:31% w:31%@xl svg-asset">
        <span className="rel">
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
  newTab = true,
}: {
  icon: React.ElementType;
  href: string;
  className?: string;
  label?: string;
  newTab?: boolean;
}) => {
  return (
    <li className="d:contents">
      <a
        href={href}
        rel={newTab ? "noopener noreferrer" : undefined}
        target={newTab ? "_blank" : undefined}
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

const MENU_BACKDROP_ENTER_S = 0.1;
const MENU_PANEL_ENTER_DELAY_S = MENU_BACKDROP_ENTER_S;
const MENU_PANEL_ENTER_S = 0.125;
const MENU_PANEL_EXIT_S = 0.1;

/** Start nav sections after backdrop + panel slide (unchanged open sequence). */
const MENU_NAV_SECTION_ENTER_AFTER_S =
  MENU_PANEL_ENTER_DELAY_S + MENU_PANEL_ENTER_S;
const MENU_NAV_SECTION_STAGGER_S = 0.0325;
const MENU_NAV_SECTION_MOTION_Y = -12;
const MENU_NAV_SECTION_MOTION_DUR_S = 0.16;
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
    y: "-150%",
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
  label?: string;
  links: { href: string; label: string }[];
}) => {
  return (
    <div className="">
      <div
        // className={cn(
        //   "typestyle-heading f:14 mb:3x bbborder-b pb2x",
        //   !label && "opacity:0",
        // )}
        className={cn(
          "typestyle-meta opacity:0.66 f:10 mb:3x",
          !label && "opacity:0!",
        )}
      >
        {label || "Section"}
      </div>
      <div className="flex flex-direction:column f:12">
        {links.map((link) => (
          <NavLink
            key={`${link.href}-${link.label}`}
            href={link.href}
            label={link.label}
          />
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
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { isMenuOpen, setIsMenuOpen } = useAppUi();
  useOnClickOutside({
    ref: menuPanelRef,
    triggerRef,
    handler: () => setIsMenuOpen(false),
  });

  return (
    <>
      <header className="sticky top:0 z:100">
        <div className="page-gutter rel z:20">
          <div className="page-container-lg bg:color-gray-0 z:100 bb:border-b bx:border-b flex justify-content:space-between">
            <div className="flex align-items:center">
              <Logo />
              {/* <div className="ml:6x">
                <div className="typestyle-display opacity:0.66 f:14">
                  Pete Rundle
                </div>
              </div> */}
            </div>

            <nav className="color:color-gray-500 f:17 f:18@lg flex">
              <ul
                className={cn(
                  "hidden!",
                  "flex bl:border-b bt:border-b bg:color-gray-0 mr1.5x",
                  `w${LOGO_WIDTH_MOBILE + 10}px w${LOGO_WIDTH_LG + 10}px@lg`,
                )}
              >
                <SocialLink
                  icon={HiPencil}
                  href="/writing/design-systems-in-code"
                  label="View Linkedin profile"
                  newTab={false}
                />
                <SocialLink
                  icon={RiLinkedinFill}
                  href="https://www.linkedin.com/in/pete-rundle/"
                  label="View Linkedin profile"
                  className="bl:border-b"
                />
                <SocialLink
                  icon={IoLogoGithub}
                  className="bl:border-b"
                  href="https://github.com/pjrundle"
                  label="View GitHub profile"
                />
              </ul>

              <div className="flex hiddn!" ref={triggerRef}>
                {/* <div className="flex align-items:center pr:6x">
                    <Button
                      label="Menu"
                      className="f:11"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                  </div> */}
                <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
              </div>
            </nav>
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
                    "background-image:linear-gradient(to|bottom,color-gray-0,rgba(0,0,0,0.2))",
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
                      <div
                        ref={menuPanelRef}
                        className="flex bx:border-b bb:border-b bb6px|solid|color-gray-100! pt:12x pb:14x bg:color-gray-0 shadowshadow-md px:11x"
                      >
                        <div className="grid grid-cols:2 gap-x:11x w:50% pr:16x dbug brborder-b">
                          <div className="flex flex-col gap-y:7x">
                            <MenuNavSectionReveal
                              staggerIndex={0}
                              // className="br:border-b"
                            >
                              <NavSection
                                // label="Work"
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
                            <MenuNavSectionReveal
                              staggerIndex={1}
                              // className="br:border-b"
                            >
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
                          </div>
                          <MenuNavSectionReveal
                            staggerIndex={2}
                            // className="br:border-b"
                          >
                            <NavSection
                              label="Writing"
                              links={[
                                {
                                  href: "/writing/design-systems-in-code",
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
                          className="bl3px|solid|color-gray-700 pl:13x w:50%"
                        >
                          {/* <div className="typestyle-display f:12 color:color-gray-500 mb:0.5x">
                            Pete Rundle
                          </div>
                          <div className="typestyle-display f:20">
                            Senior Design Engineer
                          </div>
                          <div className="typestyle-copy f:10 color:color-gray-400 mt:1x">
                            React · TypeScript · UI Architecture · Design
                            Systems
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
