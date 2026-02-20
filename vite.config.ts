import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import rehypePrismPlus from "rehype-prism-plus";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
      }),
      enforce: "pre",
    },
    react({ include: [/\.(jsx|tsx|mdx)$/] }),
  ],
  optimizeDeps: {
    exclude: [
      "@theme-os/react",
      "@theme-os/core",
      "@theme-os/color",
      "@theme-os/react-primitives",
      "@theme-os/utils",
    ],
  },
});
