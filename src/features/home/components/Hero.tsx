import { Button } from '../../../components/ui';
import { heroFilters } from '../../../data/dealership';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/g9-auto-traders.jpg';

export function Hero() {
  const goToCatalog = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand text-on-brand">
      {/* Foto con bordes difuminados: se funde con el fondo del hero, sin cortes visibles. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          className="hero-photo absolute inset-y-0 right-0 h-full w-full object-cover object-[65%_center] opacity-40 lg:w-[72%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/40 to-transparent lg:via-transparent" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-14 pb-14 sm:px-6 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-on-brand/15 bg-on-brand/5 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-on-brand/20" />
              <span className="text-sm font-bold tracking-wide">G9 AUTO TRADERS</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-4 leading-[1.05] text-balance">
              Encuentra tu<br />próximo <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">auto</span>
            </h1>
            <p className="text-lg font-medium text-on-brand/85 leading-snug sm:text-xl">
              Compra y vende vehículos de forma<br />fácil, rápida y segura.
            </p>
          </div>

          <div className="hidden lg:block" />
        </div>

        <form role="search" onSubmit={goToCatalog} className="mt-10 relative z-20 mx-auto max-w-3xl lg:mt-14">
          <label className="relative block">
            <span className="sr-only">Buscar vehículo</span>
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              placeholder="Buscar vehículos por marca, modelo, año..."
              className="h-12 w-full rounded-xl border border-line bg-surface pl-11 pr-4 text-sm text-fg shadow-lg shadow-black/20 placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
            />
          </label>
          <div className="mt-3 rounded-2xl border border-on-brand/15 bg-on-brand/10 p-2 shadow-lg shadow-black/20 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] items-center">
              {heroFilters.map((filter) => (
                <select
                  key={filter.label}
                  aria-label={filter.label}
                  defaultValue={filter.options[0]}
                  className="h-10 w-full min-w-0 rounded-lg border border-line bg-surface px-3 text-xs text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
                >
                  {filter.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ))}
              <Button type="submit" size="sm" aria-label="Buscar" className="col-span-2 h-10 w-full md:col-span-1 md:w-10 p-0 shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </Button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
}
