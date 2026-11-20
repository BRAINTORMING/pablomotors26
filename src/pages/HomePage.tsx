import { Page } from '../components/layout';
import { Hero } from '../features/home';
import { useDocumentTitle } from '../hooks';

export function HomePage() {
  useDocumentTitle();
  return (
    <Page>
      <Hero />
    </Page>
  );
}
