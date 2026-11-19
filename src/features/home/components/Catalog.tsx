import { useMemo, useState } from 'react';
import { useInventory } from '../../../lib/inventory';
import { cn } from '../../../lib/cn';
import { Pagination } from './Pagination';
import { VehicleCard } from './VehicleCard';

const PAGE_SIZE = 12;
const perks = ['Financiamiento directo', 'Entrega inmediata', 'Puerta a puerta', 'Stock verificado'];

export function Catalog() {
  const { vehicles, loading } = useInventory();
  const ALL = 'Ver todos';
  const [body, setBody] = useState(ALL);
  const [page, setPage] = useState(1);

  const vehicleBodies = useMemo(() => [ALL, ...Array.from(new Set(vehicles.map((v) => v.tipo).filter(Boolean)))], [vehicles]);
  const list = useMemo(() => (body === ALL ? vehicles : vehicles.filter((v) => v.tipo === body)), [body, vehicles]);
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const shown = list.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const chooseBody = (next: string) => {
    setBody(next);
    setPage(1);
  };

  return (
    <section id="catalogo" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Catálogo</h2>
      <p className="mt-1 text-sm text-muted">Vehículos importados y accesorios originales</p>

      <ul aria-label="Ventajas" className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {perks.map((perk) => (
          <li key={perk} className="rounded-lg border border-line bg-surface px-3 py-3 text-center text-sm font-medium">
            {perk}
          </li>
        ))}
      </ul>

      <div role="group" aria-label="Filtrar por carrocería" className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {vehicleBodies.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={name === body}
            onClick={() => chooseBody(name)}
            className={cn(
              'h-9 shrink-0 rounded-lg border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info',
              name === body ? 'border-action bg-action text-on-action' : 'border-line bg-surface text-fg hover:bg-sunken',
            )}
          >
            {name}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="mt-6 rounded-2xl border border-line bg-surface p-8 text-center text-sm text-muted">Cargando vehículos…</p>
      ) : shown.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-2xl border border-line bg-surface p-8 text-center text-sm text-muted">
          No hay vehículos en esta categoría por ahora. Escríbenos y te avisamos cuando llegue uno.
        </p>
      )}

      {totalPages > 1 && <Pagination page={current} totalPages={totalPages} onPageChange={setPage} />}
    </section>
  );
}