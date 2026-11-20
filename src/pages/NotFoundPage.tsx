import { Page } from '../components/layout';
import { Heading, Text, buttonStyles } from '../components/ui';
import { useDocumentTitle } from '../hooks';
import { Link } from '../router';

export function NotFoundPage() {
  useDocumentTitle('Page not found');
  return (
    <Page>
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-muted">404</p>
        <Heading as="h1" className="mt-2">
          Page not found
        </Heading>
        <Text className="mt-2">The page you are looking for does not exist or was moved.</Text>
        <Link to="/" className={buttonStyles({ className: 'mt-6' })}>
          Back to home
        </Link>
      </div>
    </Page>
  );
}
