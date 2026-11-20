import { Router } from './router';
import { routes } from './config/routes';
import { NotFoundPage } from './pages/NotFoundPage';

/** Root component. Pages are listed in src/config/routes.tsx. */
export default function App() {
  return <Router routes={routes} notFound={<NotFoundPage />} />;
}
