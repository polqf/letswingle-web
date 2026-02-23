import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { cn } from '@/app/lib/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export const PRESS_LOGOS: Record<string, string> = {
  one: 'el-mundo.png',
  two: 'el-confidencial-1.jpg',
  three: 'conde-nast-traveler.png',
  four: 'la_Vanguardia-1.jpg',
  five: 'El_Correo.jpg',
  six: 'Cuatro.png',
  seven: 'la-sexta.png',
  eight: 'telecinco-vector-logo.png',
  nine: 'The_Straits_Times.png',
};

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
        <div key={item} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] px-4 py-3">
          <Link
          href={t(`press.items.${item}.url`)}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Image
              src={`/press/${PRESS_LOGOS[item]}`}
              alt={t(`press.items.${item}.source`)}
              width={160}
              height={64}
              className="h-8 w-auto max-w-full object-contain object-center"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
