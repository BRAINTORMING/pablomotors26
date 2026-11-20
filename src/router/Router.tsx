import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

export interface RouteDefinition {
  path: string;
  element: ReactNode;
}

export interface NavigateOptions {
  replace?: boolean;
}

interface RouterContextValue {
  pathname: string;
  navigate: (to: string, options?: NavigateOptions) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

const normalize = (path: string) => (path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path);
const rawPathname = () => (typeof window === 'undefined' ? '/' : normalize(window.location.pathname));
const hasRoute = (routes: RouteDefinition[], path: string) => routes.some((route) => normalize(route.path) === path);

/** The browser path without the base prefix: ('/preview/abc/about', '/preview/abc') gives '/about'. */
function toAppPath(raw: string, base: string): string {
  const rest = base && raw.startsWith(base) ? raw.slice(base.length) : raw;
  return normalize(rest.startsWith('/') ? rest : '/' + rest);
}

function inFrame(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

/** Previews run the app inside an iframe, often under a prefix (or a path like "srcdoc"). Find that prefix once. */
function detectBase(routes: RouteDefinition[]): string {
  if (typeof window === 'undefined' || !inFrame()) return '';
  const raw = rawPathname();
  if (hasRoute(routes, raw)) return '';
  const parts = raw.split('/');
  for (let i = 2; i <= parts.length; i++) {
    const base = parts.slice(0, i).join('/');
    if (hasRoute(routes, toAppPath(raw, base))) return base;
  }
  return raw;
}

interface RouterProps {
  routes: RouteDefinition[];
  /** Shown when no route matches the current path. */
  notFound: ReactNode;
}

/** Small router on top of the History API: exact paths, no dependencies. */
export function Router({ routes, notFound }: RouterProps) {
  const [base] = useState(() => detectBase(routes));
  const [pathname, setPathname] = useState(() => toAppPath(rawPathname(), base));

  useEffect(() => {
    const onPopState = () => setPathname(toAppPath(rawPathname(), base));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [base]);

  const navigate = useCallback(
    (to: string, options: NavigateOptions = {}) => {
      const url = new URL(to, 'http://app.local');
      if (to.includes('://') && url.origin !== window.location.origin) {
        window.location.assign(to);
        return;
      }
      const next = (base + url.pathname || '/') + url.search + url.hash;
      try {
        if (options.replace) window.history.replaceState(null, '', next);
        else window.history.pushState(null, '', next);
      } catch {
        // Some sandboxes block the History API: the page still changes, the address bar just stays as it was.
      }
      setPathname(normalize(url.pathname));
      if (!url.hash) window.scrollTo(0, 0);
    },
    [base],
  );

  const value = useMemo(() => ({ pathname, navigate }), [pathname, navigate]);
  const match = routes.find((route) => normalize(route.path) === pathname);

  return <RouterContext.Provider value={value}>{match ? match.element : notFound}</RouterContext.Provider>;
}

/** Current path and navigate(): const { pathname, navigate } = useRouter(). */
export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used inside <Router>');
  return context;
}

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  replace?: boolean;
}

/** Internal navigation without reloading the page. Use it instead of <a> for links inside the app. */
export function Link({ to, replace, onClick, target, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || event.button !== 0 || modified || target === '_blank') return;
    event.preventDefault();
    navigate(to, { replace });
  };

  return <a href={to} target={target} onClick={handleClick} {...props} />;
}
