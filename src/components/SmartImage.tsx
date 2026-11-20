import { useEffect, useState } from 'react';
import { firstSrc, placeholder, search } from '@/lib/images';

type Props = {
  query: string; category?: string; seed?: number; w: number; h: number;
  alt?: string; eager?: boolean; fill?: boolean; className?: string;
};

// fill: the image covers its parent (use inside a relative overflow-hidden wrapper, for hero backgrounds).
export function SmartImage({ query, category = 'none', seed = 0, w, h, alt = '', eager = false, fill = false, className = '' }: Props) {
  const [src, setSrc] = useState(() => firstSrc(category, seed, w, h, query));
  useEffect(() => {
    let alive = true;
    setSrc(firstSrc(category, seed, w, h, query));
    search(query, seed, w, h).then((u) => { if (alive && u) setSrc(u); });
    return () => { alive = false; };
  }, [query, category, seed, w, h]);
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setSrc(placeholder(query, w, h))}
      style={fill ? undefined : { aspectRatio: w + ' / ' + h }}
      className={(fill ? 'absolute inset-0 h-full w-full object-cover ' : 'block h-auto w-full max-w-full object-cover bg-sunken ') + className}
    />
  );
}
