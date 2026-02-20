import { cn } from '@/app/lib/utils/cn';

const logos = [
  'El Mundo',
  'El Confidencial',
  'Traveler',
  'La Vanguardia',
  'El Correo',
  'Cuatro',
  'laSexta',
  'Telecinco',
  'The Straits Times',
] as const;

interface PressLogoGridProps {
  className?: string;
}

export function PressLogoGrid({ className }: PressLogoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5',
        className
      )}
    >
      {logos.map((name) => (
        <div
          key={name}
          className="flex items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] px-4 py-3"
        >
          <span className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
