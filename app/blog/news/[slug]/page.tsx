import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { markdownToHtml, formatDate, getReadingTime } from '@/app/blog/lib/utils';
import { getAllNews, getNewsBySlug } from '@/app/blog/lib/content';
import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllNews();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://letswingle.com/blog/news/${slug}`,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    alternates: { canonical: `https://letswingle.com/blog/news/${slug}` },
  };
}

export default async function BlogNewsPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);
  if (!post) {
    notFound();
  }

  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const localeTag = locale === 'es' ? 'es-ES' : 'en-US';
  const html = await markdownToHtml(post.content);
  const readingTime = getReadingTime(post.content);

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-10">
        <div className="space-y-4">
          <Tag>{t('blog.news.badge')}</Tag>
          <h1 className="font-display text-3xl leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {formatDate(post.date, localeTag)} · {readingTime} {t('blog.readingTime')}
          </p>
          {post.description ? (
            <p className="max-w-3xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
              {post.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {(post.categories ?? []).map((category) => (
            <span
              key={category}
              className="rounded-full border border-[color:var(--color-stroke)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)]"
            >
              {category}
            </span>
          ))}
          {(post.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--color-stroke)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="blog-content rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
          <Link href="/blog" className="text-[color:var(--color-brand-blue)]">
            {t('blog.links.back')}
          </Link>
          <Link href="/blog/news" className="text-[color:var(--color-brand-blue)]">
            {t('blog.links.news')}
          </Link>
        </div>
      </Container>
    </section>
  );
}
