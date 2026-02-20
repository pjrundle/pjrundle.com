#!/usr/bin/env node
/**
 * Resize images in given folder(s) so none exceed maxWidth (default 1440px).
 * Keeps aspect ratio. Overwrites files in place.
 *
 * Usage:
 *   node scripts/resize-images.mjs                    # uses default: public/projects
 *   node scripts/resize-images.mjs public/projects/wmbt/gallery
 *   node scripts/resize-images.mjs folder1 folder2
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const MAX_WIDTH = 1440;
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const isImage = (filename) =>
  IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());

async function* walkImages(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn("Folder not found:", dir);
      return;
    }
    throw err;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkImages(fullPath);
    } else if (entry.isFile() && isImage(entry.name)) {
      yield fullPath;
    }
  }
}

async function resizeIfNeeded(filePath) {
  const meta = await sharp(filePath).metadata();
  const { width } = meta;
  if (width == null || width <= MAX_WIDTH) return null;

  const newWidth = MAX_WIDTH;
  const newHeight = Math.round((meta.height * MAX_WIDTH) / width);
  const tmpPath = path.join(
    path.dirname(filePath),
    `.resize-tmp-${path.basename(filePath)}`,
  );

  await sharp(filePath)
    .resize(newWidth, newHeight, { fit: "inside" })
    .toFile(tmpPath);
  await fs.rename(tmpPath, filePath);

  return { width, height: meta.height, newWidth, newHeight };
}

async function main() {
  const folders =
    process.argv.length > 2
      ? process.argv.slice(2).map((p) => path.resolve(projectRoot, p))
      : [path.join(projectRoot, "public/projects")];

  console.log("Max width:", MAX_WIDTH, "px");
  console.log("Folders:", folders.join(", "));
  console.log("");

  let resized = 0;
  let skipped = 0;

  for (const folder of folders) {
    for await (const filePath of walkImages(folder)) {
      try {
        const result = await resizeIfNeeded(filePath);
        if (result) {
          console.log(
            path.relative(projectRoot, filePath),
            `→ ${result.width}x${result.height} → ${result.newWidth}x${result.newHeight}`,
          );
          resized++;
        } else {
          skipped++;
        }
      } catch (err) {
        console.error("Error:", filePath, err.message);
      }
    }
  }

  console.log("");
  console.log(
    "Done. Resized:",
    resized,
    "Skipped (already ≤ max width):",
    skipped,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
