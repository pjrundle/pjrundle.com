export type TWritingManifestEntry = {
  slug: string;
  title: string;
};

export const writingManifest: TWritingManifestEntry[] = [
  {
    slug: "design-systems-in-code",
    title: "Is Figma the right place for design systems?",
  },
];

export const writingManifestBySlug = new Map<
  TWritingManifestEntry["slug"],
  TWritingManifestEntry
>(writingManifest.map((entry) => [entry.slug, entry]));
