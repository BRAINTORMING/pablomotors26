import { useEffect, useState } from 'react';
import { cn } from '../../../lib/cn';
import slideEv from '@/assets/hero-bg.jpg';
import slideTesla from '@/assets/hero-tesla.jpg';
import slideKia from '@/assets/hero-kia.jpg';
import slideH2 from '@/assets/hero-h2.jpg';

/** Fotos del fondo del hero, en este orden. Para agregar o quitar una, edita solo esta lista. */
const SLIDES = [slideEv, slideTesla, slideKia, slideH2];
/** Tiempo que cada foto permanece en pantalla (ms). */
const HOLD_MS = 6000;

/**
 * Fondo del hero con varias fotos que se cambian solas con un fundido suave.
 * Cada foto conserva los bordes difuminados de `.hero-photo`. Con "reducir movimiento" activado se queda fija en la primera.
 */
export function HeroBackground() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    if (SLIDES.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => {
        setPrev(current);
        return (current + 1) % SLIDES.length;
      });
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          decoding="async"
          // La foto que entra va encima y aparece con fundido; la anterior se queda debajo hasta que termina.
          className={cn(
            'hero-photo absolute inset-y-0 right-0 h-full w-full object-cover object-[65%_center] opacity-0 transition-opacity duration-[1600ms] ease-in-out motion-reduce:transition-none lg:w-[72%]',
            i === index && 'z-20 opacity-40 lg:opacity-100',
            i === prev && i !== index && 'z-10 opacity-40 lg:opacity-100',
          )}
        />
      ))}
      {/* Sombra a la izquierda para que el texto se lea sobre cualquier foto, clara u oscura. */}
      <div className="absolute inset-0 z-30 bg-gradient-to-r from-brand via-brand/40 to-transparent lg:from-brand/90 lg:via-brand/45" />
    </div>
  );
}
