# Facet app

Starter structure. Every folder has one job, so the project stays easy to read as it grows.

    src/
      main.tsx            entry point: mounts <AppProviders><App/></AppProviders>
      App.tsx             root component (pick the page to show here)
      index.css           design tokens (light / dark) and the page texture
      config/             constants and copy: site.ts
      lib/                pure helpers with no React: cn.ts
      hooks/              reusable hooks: useTheme, useMediaQuery
      providers/          React context providers: ThemeProvider, AppProviders
      components/
        ui/               small building blocks with variants: Button, Card, Heading, Text
        layout/           page structure: Page
        Logo.tsx          the Facet logo
        ErrorBoundary.tsx keeps a crash from blanking the whole page
      features/<name>/    one folder per product area, with its own components
      types/              shared TypeScript types

Rules

- Colors, borders and surfaces come from the design tokens (bg-surface, text-fg, border-line, bg-action...). Never
  write a color by hand: that is what makes dark mode work everywhere.
- A component used in more than one place goes to components/ui. A component used by one feature stays inside it.
- Features import from components, hooks, lib and config. Components never import from features.
- Text that may change (names, slogans, links) lives in config, not inside components.
- Use cn() from lib/cn.ts to join class names.


## Panel de administración (Supabase)

1. En Supabase → SQL Editor pega y ejecuta `supabase/schema.sql` (antes cambia `TU_CORREO@EJEMPLO.COM` por tu correo y crea ese usuario en Authentication → Users).
2. Copia `.env.example` a `.env` y completa `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
3. `npm install && npm run dev` y abre `/#/admin`.
