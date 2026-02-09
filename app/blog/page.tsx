import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function BlogPage() {
  const t = await getTranslations();

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>{t('blog.hero.eyebrow')}</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('blog.hero.title')}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
            {t('blog.hero.subtitle')}
          </p>
        </div>

        <SectionHeader
          eyebrow={t('blog.empty.eyebrow')}
          title={t('blog.empty.title')}
          subtitle={t('blog.empty.subtitle')}
        />
        <div className="rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-8 text-sm text-[color:var(--color-ink-muted)]">
          {t('blog.empty.body')}
        </div>
      </Container>
    </section>
  );
}
