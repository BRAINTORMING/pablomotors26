import { Logo } from '../../components/Logo';
import { Heading, Text } from '../../components/ui';
import { siteConfig } from '../../config/site';

export function Hero() {
  return (
    <div className="max-w-md text-center">
      <Logo className="mx-auto mb-5 h-16 w-16" />
      <Heading as="h1">{siteConfig.title}</Heading>
      <Text className="mt-2">{siteConfig.description}</Text>
    </div>
  );
}
