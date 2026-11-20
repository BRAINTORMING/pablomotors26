import type { SVGProps } from 'react';

// Abstract logo, drawn in code: there is no image file to load. One rounded half-circle piece, repeated three times
// and rotated 120 degrees. It paints with currentColor, so it follows the text color and works in light and dark:
//   <Logo className="h-8 w-8" />            uses the color of the parent text
//   <Logo className="h-8 w-8 text-muted" /> any text color token
const PIECE =
  'M -84.852814 0 L 84.852814 0 A 14 14 0 0 1 98.666062 16.27907 A 100 100 0 0 1 -98.666062 16.27907 A 14 14 0 0 1 -84.852814 0 Z';
const SHIFT = 'translate(-52.173316 28.867513)';
const TRANSFORMS = [SHIFT, 'rotate(-120) ' + SHIFT, 'rotate(120) ' + SHIFT];

export function Logo({ className = 'h-6 w-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-179.970 -195.375 360 360"
      fill="currentColor"
      role="img"
      aria-label="Abstract"
      shapeRendering="geometricPrecision"
      className={className}
      {...props}
    >
      {TRANSFORMS.map((transform) => (
        <path key={transform} d={PIECE} transform={transform} />
      ))}
    </svg>
  );
}
