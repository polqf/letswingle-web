import Link from 'next/link';

import { cn } from '@/app/lib/utils/cn';

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[color:var(--color-brand-blue)] !text-white hover:opacity-90 active:opacity-80',
  accent:
    'bg-[color:var(--color-brand-yellow)] text-[color:var(--color-ink)] hover:opacity-90 active:opacity-80',
  outline:
    'border border-[color:var(--color-ink)]/20 text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface)]',
  ghost:
    'text-[color:var(--color-ink)] hover:bg-[color:var(--color-brand-offwhite)]',
};

export function Button({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition',
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'pointer-events-none opacity-60',
    className
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        className={classes}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
