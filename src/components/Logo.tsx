// Abstract logo: the PNG as it is, no styles or effects (the file lives in public/abstract.png).
export function Logo({ className = 'h-6 w-6' }: { className?: string }) {
  return <img src="/abstract.svg" alt="Abstract" className={className + ' object-contain'} draggable={false} />;
}
