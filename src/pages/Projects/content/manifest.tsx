import type { ComponentType } from "react";

import { BrandwatchLogo } from "../../../assets/BrandwatchLogo.tsx";
import { CIQLogo } from "../../../assets/CIQLogo.tsx";
import { ThemeOSGlyphWordmark } from "../../../assets/ThemeOSGlyphWordmark.tsx";
import { WombatLogo } from "../../../assets/WmbtLogo.tsx";

export type TProjectManifestEntry = {
  slug: string;
  title: string;
  role?: string;
  scope?: string;
  tagline?: string;
  stats?: {
    stat: string;
    label: string;
  }[];
  heroImgSrc?: string;
  heroImgBgColor?: string;
  heroImgBgColorSecondary?: string;
  heroImgBgColorMode?: "light" | "dark";
  heroImgBorderColor?: string;
  logo: ComponentType<{ className?: string }>;
  logoAdjust: number;
  button?: {
    label: string;
    href: string;
  };
};

export const projectsManifest: TProjectManifestEntry[] = [
  {
    slug: "theme-os",
    title: "Theme.OS",
    tagline:
      "Design system runtime + component libraries – for apps, websites and more.",
    role: "Design Engineer • Creator",
    scope:
      "Token architecture, theming runtime, component library, cross‑product system design",
    heroImgSrc: "/projects/theme-os/hero/hero.png",
    heroImgBgColor: "color-gray-100",
    logoAdjust: 1,
    logo: ThemeOSGlyphWordmark,
    button: {
      label: "Go to Microsite",
      href: "https://theme-os.vercel.app/",
    },
  },
  {
    slug: "wombat",
    title: "Wombat",
    tagline:
      "Create websites, decks and more with a design system powered CMS platform.",
    role: "Design | Front-End Architect + Engineer • Co-Founder",
    heroImgSrc: "/projects/wmbt/hero/hero.png",
    scope: "Conception, design, research, development",
    heroImgBgColor: "color-gray-100",
    logoAdjust: 0.9,
    logo: WombatLogo,
  },
  {
    slug: "cloud-iq",
    title: "Cloud.IQ",
    tagline:
      "Rapid prototyping, product development, brand rollout and more for an AI-powered ecommerce platform.",
    heroImgSrc: "/projects/ciq/hero/hero.png",
    role: "Design Engineer • Consultant",
    scope: "Product discovery, front-end architecture, and delivery",
    logoAdjust: 0.91,
    logo: CIQLogo,
    heroImgBgColor: "oklch(0.3|0.12|290.6)",
    heroImgBgColorSecondary: "oklch(0.3|0.12|290.6)",
    heroImgBorderColor: "oklch(0.4|0.12|290.6)",
    button: {
      label: "View Early Prototype",
      href: "https://ciq-ui.vercel.app/",
    },
  },
  {
    slug: "brandwatch",
    title: "Brandwatch",
    tagline:
      "Design and content systems powering Brandwatch’s global marketing engine.",
    heroImgSrc: "/projects/brandwatch/hero/hero-2.png",
    role: "Web Team Lead | Senior Front-End Designer/Developer",
    scope: "Design system, content builders, shared architectural foundations",
    logoAdjust: 1.1,
    logo: BrandwatchLogo,
    heroImgBgColorMode: "light",
    heroImgBorderColor: "color-gray-dark-200",
    heroImgBgColor: "color-gray-dark-900",
    heroImgBgColorSecondary: "color-gray-dark-150",
    button: {
      label: "Visit Brandwatch",
      href: "https://www.brandwatch.com/products/consumer-research/",
    },
  },
];

export const projectManifestBySlug = new Map<
  TProjectManifestEntry["slug"],
  TProjectManifestEntry
>(projectsManifest.map((p) => [p.slug, p]));
