import { Icon, PlayIcon } from '../../../components/icons';
import { testimonials } from '../../../data/dealership';

export function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Testimonios reales en G9 Auto Traders</h2>
      <p className="mt-2 max-w-2xl text-pretty text-muted">
        Historias de clientes que compraron con nosotros en Iquique y en las regiones.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <li key={t.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex aspect-video items-center justify-center bg-sunken">
              <button
                type="button"
                aria-label={`Reproducir testimonio de ${t.name}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-action text-on-action transition-colors hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
              >
                <Icon icon={PlayIcon} size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-semibold">{t.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-amber-intense" aria-label="Calificación de 5 estrellas">
                  {[1, 2, 3, 4, 5].map(() => (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              <p className="mt-2 line-clamp-4 text-sm text-muted">{t.quote}</p>
              <p className="mt-auto pt-4 text-sm font-medium">{t.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}