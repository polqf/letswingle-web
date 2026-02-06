import { cn } from '@/app/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
