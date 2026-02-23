import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { cn } from '@/app/lib/utils/cn';
import Link from 'next/link';

interface PressLogoGridProps {
  className?: string;
}

export async function PressLogoGrid({ className }: PressLogoGridProps) {
  const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const;
  const t = await getTranslations();

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5',
        className
      )}
    >
      {items.map((item) => (
        <Link href={t(`home.press.items.${item}.url`)} target="_blank" rel="noopener noreferrer">
          <div
            key={item}
            className="flex items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] px-4 py-3"
          >
            <span className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
              {t(`home.press.items.${item}.source`)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
