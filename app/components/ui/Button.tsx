import Link from 'next/link';

import { cn } from '@/app/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[color:var(--color-primary)] text-[color:var(--color-on-primary)] hover:bg-[color:var(--color-primary-hover)]',
  secondary:
    'bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[color:var(--color-surface-hover)]',
  outline:
    'border border-[color:var(--color-border)] text-[color:var(--color-text)] hover:bg-[color:var(--color-surface)]',
};

export function Button({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md',
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors',
    sizeClasses[size],
    variantClasses[variant],
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

  return <button className={classes}>{children}</button>;
}
