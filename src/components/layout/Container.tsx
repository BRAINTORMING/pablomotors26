import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Size = 'sm' | 'md' | 'lg';

const sizes: Record<Size, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

/** Centers the content and limits its width, with side padding that grows on larger screens. */
export function Container({ size = 'md', className, ...props }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-4 sm:px-6', sizes[size], className)} {...props} />;
}
