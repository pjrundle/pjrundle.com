import { initThemeOs } from "@theme-os/react";

import { tokenSet } from "./tokens.ts";

export const tokenStore = initThemeOs({
  initialTokens: tokenSet,
  extendMasterCssConfig: {
    utilities: {
      "pattern-diag": {
        "background-image":
          "repeating-linear-gradient(-25deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 0px, transparent 11px)",
      },
      "pattern-grid": {
        "background-image":
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 0px, transparent 11px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 0px, transparent 11px)",
      },
    },
    animations: {
      "skeleton-loading": {
        from: {
          opacity: "0.5",
        },
        to: {
          opacity: "1",
        },
      },
    },
  },
});
