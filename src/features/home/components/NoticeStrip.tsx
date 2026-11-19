export function NoticeStrip() {
  return (
    <div className="border-b border-on-brand/10 bg-brand text-on-brand">
      <p className="mx-auto w-full max-w-7xl px-4 py-3 text-center text-sm sm:px-6 lg:px-8">
        <span className="font-semibold">Reserva tu vehículo con $30.000 pesos.</span>{' '}
        <span className="text-on-brand/70">Reembolsable si el auto no te convence.</span>
      </p>
    </div>
  );
}