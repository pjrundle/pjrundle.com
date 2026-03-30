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
      "Concept, research, design, development and delivery of a set of token-driven design systems and libraries.",
    detailPageHeading: "Design system runtime + component libraries",
    detailPageHeroImgSrc: "/projects/theme-os/hero/hero-rich-env-dark.png",
    detailPageTitle: "ThemeOS (Creator)",
    // heroAssetComponent: "hero-asset-a.tsx",
    heroImgBgColor: "color-gray-50",
    logo: ThemeOSGlyphWordmark,
    logoAdjust: 1,
    name: "ThemeOS",
    ownerLabel: "Creator",
    projectCardHeading: "Design system runtime",
    projectCardImgSrc: "/projects/theme-os/hero/hero-rich-env-dark.png",
    role: "Creator ・ Design Engineer",
    scope:
      "Token architecture, theming runtime, component library, cross‑product system design",
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
      "Arktype",
      "Master CSS",
      "Valtio",
      "Framer Motion",
    ],
    type: "system",
  },
  {
    categoryLabel: "Startup / SaaS",
    detailPageDescription:
      "Co-Founder, Design and Front-end development for a design system powered content creation tool.",
    detailPageHeading: "Design system powered CMS platform",
    detailPageHeroImgSrc: "/projects/wmbt/hero/hero-cms-dark.png",
    detailPageTitle: "Wombat (Co-Founder)",
    heroImgBgColor: "color-gray-100",
    logo: WombatLogo,
    logoAdjust: 0.9,
    name: "Wombat",
    ownerLabel: "Co-Founder",
    projectCardHeading: "Design system powered CMS",
    projectCardImgSrc: "/projects/wmbt/hero/hero-cms-dark.png",
    role: "Co-Founder ・ Design ・ Front-End",
    scope: "Conception, design, research, development",
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
      "JS ES6+",
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
