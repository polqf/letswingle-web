import { cn } from '@/app/lib/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  style?: 'light' | 'dark';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  style = 'dark',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        isCenter && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <span className={cn(
          'text-xs font-semibold uppercase tracking-[0.2em]',
          style === 'light' ? 'text-[color:var(--color-brand-offwhite)]' : 'text-[color:var(--color-ink-muted)]'
        )}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className={cn(
          'text-base',
          style === 'light' ? 'text-[color:var(--color-brand-offwhite)]/85' : 'text-[color:var(--color-ink-muted)]'
        )}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
