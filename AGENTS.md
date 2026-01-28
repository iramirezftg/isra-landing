# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page application using:
- **Next.js 16.1.6** with App Router architecture
- **React 19.2.3**
- **TypeScript 5** in strict mode
- **Tailwind CSS v4** with PostCSS (note: v4 has different syntax than v3)
- **ESLint 9** with Next.js config

## Development Commands

```bash
npm run dev     # Start development server at http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Code Architecture

### Next.js App Router Structure
This project uses the Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.tsx` - Root layout with font configuration (Geist Sans and Geist Mono)
- `app/page.tsx` - Homepage component
- `app/globals.css` - Global styles with Tailwind v4 imports

### Key Patterns

**Path Aliases**: TypeScript is configured with `@/*` alias mapping to the root directory.

**Font Loading**: Uses `next/font/google` with Geist fonts loaded as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

**Styling Approach**: Tailwind CSS v4 via PostCSS with inline theme configuration in `globals.css`. Dark mode is handled via `prefers-color-scheme` media query.

### Tailwind CSS v4 Notes

This project uses Tailwind CSS v4, which has breaking changes from v3:
- Imports use `@import "tailwindcss"` instead of base/components/utilities directives
- Theme configuration is defined inline in CSS using `@theme` directive
- When adding new Tailwind config, use the CSS-based approach in `globals.css`

## TypeScript Configuration

- **Strict mode** enabled
- **Target**: ES2017
- **Module resolution**: bundler
- **JSX**: react-jsx (React 19's automatic JSX transform)
- Path alias `@/*` resolves to project root

## File Organization

Since this is currently a minimal landing page, there are no established component or utility patterns yet. When adding new features:
- Create `components/` for reusable React components
- Create `lib/` or `utils/` for shared utilities
- Keep page-specific components colocated with routes in `app/`
- Use TypeScript for all new files

## Testing

No test framework is currently configured. If adding tests, check `package.json` for any test scripts before assuming a framework.

## Important Notes

- **No test suite**: There are no tests configured in this project yet
- **Environment variables**: Should be prefixed with `NEXT_PUBLIC_` for client-side access
- **Image optimization**: Use Next.js `<Image>` component from `next/image` for all images
- **ESLint config**: Uses modern flat config format (`eslint.config.mjs`) with Next.js presets
