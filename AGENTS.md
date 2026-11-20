# AGENTS.md

Instructions for AI agents (and people) working on this project. Read this file before changing anything.

## Stack

- React 18 + TypeScript (strict) + Tailwind CSS with design tokens.
- Icons: @hugeicons/react with @hugeicons/core-free-icons.
- No router library: the app uses the small history router in src/router. Routes live in src/config/routes.tsx.

## Project layout

    public/                 static files served as they are at the site root
      favicon.svg           browser tab icon (follows the browser dark mode)
      abstract.svg          clean copy of the logo, for sharing or external use
      robots.txt            rules for search engines and crawlers
      site.webmanifest      installable-app metadata
    src/
      main.tsx              entry point: ErrorBoundary > AppProviders > App
      App.tsx               mounts the router
      index.css             design tokens (light / dark) and base styles
      config/               site.ts (texts and constants) and routes.tsx (route table)
      router/               Router, Link, useRouter
      pages/                one file per route; thin, they only compose features
      features/<name>/      one folder per product area (components, hooks, types, index.ts)
      components/
        ui/                 small reusable blocks: Button, Card, Input, Badge, Heading, Text
        layout/             page structure: Page, Container
        Logo.tsx            the logo, drawn in code (inline SVG)
        ErrorBoundary.tsx   keeps a crash from blanking the page
      hooks/                reusable hooks: useTheme, useMediaQuery, useLocalStorage, useDocumentTitle
      providers/            React context providers and AppProviders
      services/             calls to the outside world: http.ts (typed fetch wrapper)
      lib/                  pure helpers with no React: cn.ts
      types/                types shared by several features

## Rules

1. Colors, borders and surfaces come from the design tokens (bg-canvas, bg-surface, text-fg, text-muted, border-line,
   bg-action...). Never write a color by hand: that is what makes dark mode work everywhere.
2. The page background is a flat color (light gray in light mode). Do not add noise, grain, gradients or textures to
   it unless the user asks for it.
3. The logo is code, not an image. Use the Logo component. Do not load it with an img tag or from public/.
4. Dependency direction: pages > features > components, hooks, services, lib, config. Components never import from
   features or pages. Features never import from other features' internals (use their index.ts).
5. A component used in more than one place goes to components/ui. A component used by one feature stays inside it.
6. Text that may change (names, slogans, links) lives in config, not inside components.
7. Use cn() from src/lib/cn.ts to join class names.
8. One component per file, named exports, typed props. Keep files short: split them when they grow past ~150 lines.
9. Accessibility: real buttons and links (Link for navigation), labels on inputs, visible focus ring, alt text.
10. Static files that must exist at a fixed URL (favicon, robots.txt, manifest) go in public/. Everything else is
    imported from src/. Draw logos and icons as components instead of adding image files.
11. When the structure changes, update this file and README.md.

## Recipes

Add a page
1. Create src/pages/AboutPage.tsx. Call useDocumentTitle('About') and render <Page>...</Page>.
2. Add { path: '/about', element: <AboutPage /> } to src/config/routes.tsx.
3. Link to it with <Link to="/about">.

Add a feature
1. Create src/features/billing/ with its components, hooks and types.
2. Export only what other code needs from src/features/billing/index.ts.
3. Use it from a page.

Add a UI component
1. Create src/components/ui/Name.tsx using tokens and cn(). Accept className and spread the remaining props.
2. Export it from src/components/ui/index.ts.

Add a provider
1. Create src/providers/NameProvider.tsx and a hook in src/hooks.
2. Register it in src/providers/index.tsx.

Call an API
1. Set apiUrl in src/config/site.ts.
2. Write the typed function in src/services (for example services/users.ts) using http<T>().
3. Call it from a feature hook, never directly from a presentational component.
