import type { ComponentType } from "react";

import { BrandwatchLogo } from "../../../assets/BrandwatchLogo.tsx";
import { CIQLogo } from "../../../assets/CIQLogo.tsx";
import { ThemeOSGlyphWordmark } from "../../../assets/ThemeOSGlyphWordmark.tsx";
import { WombatLogo } from "../../../assets/WmbtLogo.tsx";

export type TProjectManifestEntry = {
  accentColor?: string;
  button?: {
    href: string;
    label: string;
  };
  categoryLabel?: string;
  detailPageDescription?: string;
  detailPageHeading?: string;
  detailPageHeroImgSrc?: string;
  detailPageTitle: string;
  heroAssetComponent?: string;
  heroImgBgColor?: string;
  heroImgBgColorMode?: "light" | "dark";
  heroImgBgColorSecondary?: string;
  heroImgBorderColor?: string;
  logo: ComponentType<{ className?: string }>;
  logoAdjust: number;
  name: string;
  ownerLabel?: string;
  projectCardDescription?: string;
  projectCardHeading?: string;
  projectCardImgSrc?: string;
  role?: string;
  scope?: string;
  slug: string;
  stats?: {
    label: string;
    stat: string;
  }[];
  status?: string;
  techStack?: string[];
  type?: "product" | "system";
};

export const projectsManifest: TProjectManifestEntry[] = [
  {
    button: {
      href: "https://www.theme-os.com/",
      label: "theme-os.com",
    },
    categoryLabel: "Platform / Library",
    detailPageDescription:
      "Design systems as data/live state — powering consistent UI across applications.",
    detailPageHeading: "Design system infrastructure",
    detailPageHeroImgSrc: "/projects/theme-os/hero/hero-rich-env-dark.png",
    detailPageTitle: "ThemeOS (Creator)",
    // heroAssetComponent: "hero-asset-a.tsx",
    heroImgBgColor: "color-gray-50",
    logo: ThemeOSGlyphWordmark,
    logoAdjust: 1,
    name: "ThemeOS",
    ownerLabel: "Creator",
    projectCardDescription: "Define and apply design systems as shared data.",
    projectCardHeading: "Design system infrastructure",
    projectCardImgSrc: "/projects/theme-os/hero/hero-rich-env-dark.png",
    role: "Creator ・ Design Engineer",
    scope: "Token architecture, theming, and cross-product UI systems",
    slug: "theme-os",
    stats: [
      { label: "Packages", stat: "5.0" },
      { label: "Components", stat: "100+" },
      { label: "Hours Build Time", stat: "200+" },
    ],
    status: "Active / Under Development",
    techStack: [
      "React",
      "TypeScript",
      "Valtio",
      "Arktype",
      "Master CSS",
      "Framer Motion",
    ],
    type: "system",
  },
  {
    categoryLabel: "Startup / SaaS",
    detailPageDescription:
      "Structured content creation — powered by a design system.",
    detailPageHeading: "Design system driven CMS platform",
    detailPageHeroImgSrc: "/projects/wmbt/hero/hero-cms-dark.png",
    detailPageTitle: "Wombat (Co-Founder)",
    heroImgBgColor: "color-gray-100",
    logo: WombatLogo,
    logoAdjust: 0.9,
    name: "Wombat",
    ownerLabel: "Co-Founder",
    projectCardHeading: "Design system driven CMS",
    projectCardImgSrc: "/projects/wmbt/hero/hero-cms-dark.png",
    role: "Co-Founder ・ Design ・ Front-End",
    scope: "Product design, editor architecture, block system, theming",
    slug: "wombat",
    stats: [
      { label: "Packages", stat: "10+" },
      { label: "Components", stat: "170+" },
      { label: "Hours Build Time", stat: "600+" },
    ],
    status: "Under Development",
    techStack: [
      "React",
      "TypeScript",
      "Arktype",
      "Valtio",
      "DnDKit",
      "Tanstack Query",
      "ThemeOS",
      "Framer Motion",
      "Drizzle ORM",
      "Immer",
    ],
    type: "product",
  },
  {
    button: {
      href: "https://ciq-ui.vercel.app/",
      label: "View Early Prototype",
    },
    categoryLabel: "Startup / SaaS",
    detailPageDescription:
      "Rapid prototyping, product development, brand rollout and more for an AI-powered ecommerce platform.",
    detailPageHeading: "AI-powered ecommerce platform",
    detailPageHeroImgSrc: "/projects/ciq/hero/hero.png",
    detailPageTitle: "Cloud.IQ",
    heroImgBgColor: "oklch(0.3|0.12|290.6)",
    logo: CIQLogo,
    logoAdjust: 0.91,
    name: "Cloud.IQ",
    projectCardHeading: "Embedded design engineering",
    projectCardImgSrc: "/projects/ciq/hero/hero.png",
    role: "Design Engineer • Consultant",
    scope: "Product discovery, front-end architecture, and delivery",
    slug: "cloud-iq",
    techStack: [
      "React",
      "Next.js",
      "Zustand",
      "Tanstack Query",
      "Tailwind CSS",
      "Firestore",
      "Framer Motion",
    ],
  },
  {
    button: {
      href: "https://www.brandwatch.com/products/consumer-research/",
      label: "brandwatch.com",
    },
    categoryLabel: "Enterprise / SaaS",
    detailPageDescription:
      "Design and content systems powering Brandwatch’s global marketing engine.",
    detailPageHeading: "Design system + marketing engine",
    detailPageHeroImgSrc: "/projects/brandwatch/hero/hero-2.png",
    detailPageTitle: "Brandwatch",
    heroImgBgColor: "color-gray-dark-900",
    logo: BrandwatchLogo,
    logoAdjust: 1.1,
    name: "Brandwatch",
    projectCardHeading: "Design system + marketing engine",
    projectCardImgSrc: "/projects/brandwatch/hero/hero-2.png",
    role: "Web Team Lead | Senior Front-End Designer/Developer",
    scope: "Design system, content builders, shared architectural foundations",
    slug: "brandwatch",
    stats: [
      { label: "Views per month", stat: "2.1M+" },
      { label: "Pages published", stat: "5k+" },
      { label: "Active sites", stat: "8+" },
    ],
    techStack: [
      "JS ES6",
      "Tachyons CSS",
      "PHP",
      "MySQL",
      "Node.js",
      "Redux",
      "React",
    ],
  },
];

export const projectManifestBySlug = new Map<
  TProjectManifestEntry["slug"],
  TProjectManifestEntry
>(projectsManifest.map((p) => [p.slug, p]));
