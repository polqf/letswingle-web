import Link from 'next/link';

interface BlogListItemProps {
  href: string;
  title: string;
  date: string;
  description: string;
  badge: string;
}

export function BlogListItem({ href, title, date, description, badge }: BlogListItemProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
        {badge}
      </span>
      <h3 className="text-lg font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand-blue)]">
        {title}
      </h3>
      <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
        {date}
      </p>
      <p className="text-sm text-[color:var(--color-ink-muted)] line-clamp-3">
        {description}
      </p>
    </Link>
  );
}
