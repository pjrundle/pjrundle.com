export type TWritingManifestEntry = {
  slug: string;
  title: string;
};

export const writingManifest: TWritingManifestEntry[] = [
  {
    slug: "design-systems-in-code",
    title: "Design systems in code",
  },
];

export const writingManifestBySlug = new Map<
  TWritingManifestEntry["slug"],
  TWritingManifestEntry
>(writingManifest.map((entry) => [entry.slug, entry]));
