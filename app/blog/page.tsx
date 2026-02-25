import type { Metadata } from 'next';
import Link from 'next/link';

import { BlogListItem } from '@/app/blog/components/BlogListItem';
import { getAllNews, getAllPosts } from '@/app/blog/lib/content';
import { formatDate } from '@/app/blog/lib/utils';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('meta.blog.title'),
    description: t('meta.blog.description'),
    openGraph: {
      title: t('meta.blog.title'),
      description: t('meta.blog.description'),
      url: 'https://letswingle.com/blog',
    },
    alternates: { canonical: 'https://letswingle.com/blog' },
  };
}

export default async function BlogPage() {
  const [posts, news, locale, t] = await Promise.all([
    getAllPosts(),
    getAllNews(),
    getLocale(),
    getTranslations(),
  ]);

  const localeTag = locale === 'es' ? 'es-ES' : 'en-US';
  const featuredPosts = posts.slice(0, 3);
  const featuredNews = news.slice(0, 3);
  const latest = [...posts, ...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

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
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/blog/entry" className="text-[color:var(--color-brand-blue)]">
              {t('blog.links.diaries')}
            </Link>
            <Link href="/blog/news" className="text-[color:var(--color-brand-blue)]">
              {t('blog.links.news')}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <SectionHeader
              eyebrow={t('blog.diaries.eyebrow')}
              title={t('blog.diaries.title')}
              subtitle={t('blog.diaries.subtitle')}
            />
            <div className="grid gap-4">
              {featuredPosts.map((post) => (
                <BlogListItem
                  key={post.slug}
                  href={`/blog/entry/${post.slug}`}
                  title={post.title}
                  date={formatDate(post.date, localeTag)}
                  description={post.description}
                  badge={t('blog.diaries.badge')}
                />
              ))}
            </div>
            <Link
              href="/blog/entry"
              className="text-sm font-semibold text-[color:var(--color-brand-blue)]"
            >
              {t('blog.diaries.cta')}
            </Link>
          </div>

          <div className="space-y-5">
            <SectionHeader
              eyebrow={t('blog.news.eyebrow')}
              title={t('blog.news.title')}
              subtitle={t('blog.news.subtitle')}
            />
            <div className="grid gap-4">
              {featuredNews.map((post) => (
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
            <Link
              href="/blog/news"
              className="text-sm font-semibold text-[color:var(--color-brand-blue)]"
            >
              {t('blog.news.cta')}
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeader
            eyebrow={t('blog.latest.eyebrow')}
            title={t('blog.latest.title')}
            subtitle={t('blog.latest.subtitle')}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {latest.map((item) => (
              <BlogListItem
                key={`${item.type}-${item.slug}`}
                href={`/blog/${item.type}/${item.slug}`}
                title={item.title}
                date={formatDate(item.date, localeTag)}
                description={item.description}
                badge={item.type === 'entry' ? t('blog.diaries.badge') : t('blog.news.badge')}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
