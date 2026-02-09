import { BlogListItem } from '@/app/blog/components/BlogListItem';
import { getAllNews } from '@/app/blog/lib/content';
import { formatDate } from '@/app/blog/lib/utils';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';
import Link from 'next/link';

export default async function NewsPage() {
  const [news, locale, t] = await Promise.all([
    getAllNews(),
    getLocale(),
    getTranslations(),
  ]);
  const localeTag = locale === 'es' ? 'es-ES' : 'en-US';

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>{t('blog.news.badge')}</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('blog.news.title')}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
            {t('blog.news.subtitle')}
          </p>
          <Link href="/blog" className="text-sm font-semibold text-[color:var(--color-brand-blue)]">
            {t('blog.links.back')}
          </Link>
        </div>

        <SectionHeader
          eyebrow={t('blog.latest.eyebrow')}
          title={t('blog.latest.title')}
          subtitle={t('blog.latest.subtitle')}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {news.map((post) => (
            <BlogListItem
              key={post.slug}
              href={`/blog/news/${post.slug}`}
              title={post.title}
              date={formatDate(post.date, localeTag)}
              description={post.description}
              badge={t('blog.news.badge')}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
