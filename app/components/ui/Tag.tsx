import { cn } from '@/app/lib/utils/cn';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink)]',
        className
      )}
    >
      {children}
    </span>
  );
}
