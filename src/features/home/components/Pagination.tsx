import { Icon, ChevronLeftIcon, ChevronRightIcon } from '../../../components/icons';
import { Button } from '../../../components/ui';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Paginación" className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" disabled={page === 1} onClick={() => onPageChange(page - 1)}>
          <Icon icon={ChevronLeftIcon} size={16} strokeWidth={1.5} />
          Anterior
        </Button>
        {pages.map((n) => (
          <Button
            key={n}
            variant={n === page ? 'primary' : 'ghost'}
            size="sm"
            aria-current={n === page ? 'page' : undefined}
            aria-label={'Página ' + n}
            onClick={() => onPageChange(n)}
            className="w-8 px-0"
          >
            {n}
          </Button>
        ))}
        <Button variant="ghost" size="sm" disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
          Siguiente
          <Icon icon={ChevronRightIcon} size={16} strokeWidth={1.5} />
        </Button>
      </div>
      <p className="text-sm text-muted">
        Página {page} de {totalPages}
      </p>
    </nav>
  );
}