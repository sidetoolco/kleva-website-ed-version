# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a React + TypeScript landing page for Kleva, a compliance-first AI collections platform. The project was generated from a Figma design and uses Vite as the build tool with Tailwind CSS v4 for styling.

Original Figma design: https://www.figma.com/design/spgmXxpeOvmRl5btHQAw3F/Website-Review-Request

## Commands

### Development
```bash
npm i              # Install dependencies
npm run dev        # Start dev server on port 3000 (auto-opens browser)
npm run build      # Build for production (outputs to ./build/)
```

### Notes
- Dev server runs on port 3000 and opens automatically
- No testing, linting, or formatting commands are configured
- Build output goes to `build/` directory (not standard `dist/`)

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.3.5 with SWC for fast compilation
- **Styling**: Tailwind CSS v4 (imports from index.css, not config file)
- **UI Components**: shadcn/ui components (Radix UI primitives)
- **Icons**: lucide-react
- **Charts**: recharts
- **Additional libraries**: date-fns, react-hook-form, embla-carousel, next-themes

### Project Structure
```
src/
├── App.tsx              # Main app component, renders all sections
├── main.tsx             # Entry point
├── index.css            # Tailwind CSS v4 imports and utilities
├── styles/
│   └── globals.css      # Theme variables and custom styles
├── components/          # Page sections (Hero, Features, etc.)
│   ├── ui/              # shadcn/ui reusable components
│   │   └── utils.ts     # cn() utility for classNames
│   └── figma/           # Figma-specific utilities
│       └── ImageWithFallback.tsx
└── Attributions.md      # License info for shadcn/ui and Unsplash
```

### Component Patterns
- Page sections are organized as standalone components (Hero, Features, CTASection, etc.)
- Components export named functions, not default exports (except App.tsx)
- All components follow functional component patterns with TypeScript
- Internal sub-components are defined within the same file when used only by parent
- UI components from shadcn/ui use Radix UI primitives with consistent styling patterns

### Styling System
- **Tailwind v4**: Configuration lives in index.css via `@theme` and `@layer` directives
- **Custom theme variables**: Defined in globals.css using CSS custom properties
- **Color system**: Uses oklch color space for consistent color perception
- **Typography**: h1/h2 use serif fonts (Georgia, Cambria) for brand differentiation
- **Responsive design**: Mobile-first approach with sm:/md:/lg: breakpoints
- **Custom animations**: `animate-float` keyframe animation for decorative elements

### Path Aliases
The vite.config.ts includes extensive package version aliases (e.g., `vaul@1.1.2` → `vaul`) and an `@` alias pointing to `./src`.

Import components using:
- `@/components/ui/button` for UI components
- `@/components/Hero` for page sections
- `./components/relative/path` for relative imports

### Design System Notes
- Primary CTA buttons use white background with black text
- Secondary buttons use white/10 with backdrop blur
- Gradient overlays are common (from-black/40 via-black/30 to-black/50)
- Sections alternate between white, gray-50, and gradient backgrounds
- Brand colors: orange-600/700 accent colors, slate-700/800 for dark sections

## Key Files

### vite.config.ts
- Configures React with SWC plugin for fast refresh
- Sets up extensive module resolution aliases
- Maps Figma asset URLs to local paths
- Server configured to auto-open on port 3000

### src/App.tsx
Main component that composes all page sections in order:
1. Navigation (sticky header)
2. Hero (full-screen with background image)
3. ProblemSection
4. KeyBenefits
5. Features
6. HowItWorks
7. StatsSection
8. WorkforceManagement
9. ReliabilitySection
10. BeyondSavings
11. Testimonials
12. CTASection
13. Footer

### src/index.css
Contains all Tailwind CSS v4 configuration including:
- Custom color palette using oklch()
- Spacing, typography, and layout utilities
- Custom CSS properties for theme system
- Base styles and resets

### src/styles/globals.css
Defines design system variables:
- Light/dark theme colors
- Custom radius values
- Chart colors
- Sidebar theming
- Custom typography rules
- Float animation keyframes

## Making Changes

### Adding New Components
- Place page-level components in `src/components/`
- Place reusable UI components in `src/components/ui/`
- Follow naming convention: PascalCase for files and exports
- Use TypeScript interfaces for props

### Modifying Styles
- Prefer Tailwind utility classes over custom CSS
- For theme changes, edit variables in `src/styles/globals.css`
- Custom utilities can be added to `src/index.css` under `@layer utilities`

### Working with Images
- External images use ImageWithFallback component from `components/figma/`
- Local assets should go in `src/assets/` and be imported via the Figma alias system
- Unsplash images are already integrated, see Attributions.md for licensing

## Important Constraints
- This is a static landing page, no backend or API integration
- No routing configured (single-page application)
- No environment variables setup
- Uses Unsplash images, must comply with Unsplash license terms
- shadcn/ui components used under MIT license
