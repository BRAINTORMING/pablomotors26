import { navLinks } from '../../../data/dealership';
import g9Logo from '@/assets/g9-auto-traders.jpg';

const LANGUAGES = [
  { code: 'ES', label: '🇪🇸' },
  { code: 'EN', label: '🇺🇸' },
  { code: 'PT', label: '🇵🇹' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-on-brand/10 bg-brand/90 text-on-brand backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex items-center gap-1 shrink-0">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                aria-label={`Cambiar idioma a ${lang.code}`}
                className="flex items-center justify-center h-9 w-9 rounded-md text-lg leading-none opacity-80 transition hover:bg-on-brand/10 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
              >
                {lang.label}
              </button>
            ))}
          </div>
          <nav aria-label="Principal" className="flex min-w-0 items-center gap-6 overflow-x-auto whitespace-nowrap text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-1 py-1 text-on-brand/75 transition-colors hover:text-on-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <a href="#inicio" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info">
          <img src={g9Logo} alt="G9 Auto Traders" className="h-10 w-auto block" />
        </a>
      </div>
    </header>
  );
}
