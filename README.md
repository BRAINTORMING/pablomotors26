# Abstract app

Starter structure. Every folder has one job, so the project stays easy to read as it grows.
AI agents: read AGENTS.md first.

    public/                 static files at the site root: favicon, robots.txt, manifest, logo copy
    index.html              page shell
    src/
      main.tsx              entry point: mounts <AppProviders><App/></AppProviders>
      App.tsx               mounts the router
      index.css             design tokens (light / dark) and base styles
      config/               site.ts (texts, constants) and routes.tsx (route table)
      router/               small history router: Router, Link, useRouter
      pages/                one thin file per route
      features/<name>/      one folder per product area, with its own components
      components/
        ui/                 building blocks with variants: Button, Card, Input, Badge, Heading, Text
        layout/             page structure: Page, Container
        Logo.tsx            the logo, drawn in code
        ErrorBoundary.tsx   keeps a crash from blanking the whole page
      hooks/                useTheme, useMediaQuery, useLocalStorage, useDocumentTitle
      providers/            ThemeProvider, AppProviders
      services/             http.ts, typed fetch wrapper
      lib/                  pure helpers with no React: cn.ts
      types/                shared TypeScript types

Rules

- Colors, borders and surfaces come from the design tokens (bg-surface, text-fg, border-line, bg-action...). Never
  write a color by hand: that is what makes dark mode work everywhere.
- The page background is a flat light gray (dark gray in dark mode), with no textures.
- A component used in more than one place goes to components/ui. A component used by one feature stays inside it.
- Pages compose features, features use components, hooks, services and lib. Components never import from features.
- Text that may change (names, slogans, links) lives in config, not inside components.
- Use cn() from lib/cn.ts to join class names.
