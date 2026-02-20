# pjrundle.com

Source code for my personal portfolio site.

Built with React, TypeScript, and [ThemeOS](https://theme-os.vercel.app/) for styling.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** [ThemeOS](https://theme-os.vercel.app/) – a design system runtime with token-driven theming
- **Routing:** wouter
- **Content:** MDX with syntax highlighting (rehype-prism-plus)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── assets/           # SVG logos and brand assets
├── components/       # Shared components (Header, Footer, MDX renderer)
├── design-system/    # ThemeOS configuration and tokens
├── pages/
│   ├── Home/         # Landing page with hero, projects, testimonials
│   ├── Projects/     # Project case study pages (MDX content)
│   └── 404/          # Not found page
└── utils/            # Utility functions
```

## Scripts

| Command                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `pnpm dev`                     | Start development server            |
| `pnpm dev:host`                | Start dev server exposed on network |
| `pnpm build`                   | Build for production                |
| `pnpm preview`                 | Preview production build            |
| `pnpm typecheck`               | Run TypeScript type checking        |
| `pnpm resize-images`           | Optimize images for production      |
| `pnpm generate-image-manifest` | Generate image dimension manifest   |

## License

All rights reserved.
