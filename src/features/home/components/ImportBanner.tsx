import { Button } from '../../../components/ui';

export function ImportBanner() {
  return (
    <section id="servicios" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-brand p-6 text-on-brand sm:p-8 lg:p-12">
        <p className="text-sm text-on-brand/70">Servicio personalizado</p>
        <h2 className="mt-2 max-w-xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Importación directa desde Corea (+200.000 autos)
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-base text-on-brand/80">
          Nos encargamos de la búsqueda, la compra, el envío y la nacionalización del vehículo, con coordinación en
          Chile y revisión técnica antes de entregarlo.
        </p>
        <Button variant="secondary" className="mt-6">
          Más información
        </Button>
      </div>
    </section>
  );
}