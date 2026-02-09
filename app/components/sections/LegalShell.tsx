import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';

interface LegalShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalShell({ title, subtitle, children }: LegalShellProps) {
  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>Legal</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)]">
            {subtitle}
          </p>
        </div>
        <div className="space-y-8 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 text-sm text-[color:var(--color-ink-muted)]">
          {children}
        </div>
      </Container>
    </section>
  );
}
