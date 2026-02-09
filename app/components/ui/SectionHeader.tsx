import { cn } from '@/app/lib/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
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
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-[color:var(--color-ink-muted)] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
