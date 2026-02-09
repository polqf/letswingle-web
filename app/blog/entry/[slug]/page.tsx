import { markdownToHtml, formatDate, getReadingTime } from '@/app/blog/lib/utils';
import { getAllPosts, getPostBySlug } from '@/app/blog/lib/content';
import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogEntryPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
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
          <Tag>{t('blog.diaries.badge')}</Tag>
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
          <Link href="/blog/entry" className="text-[color:var(--color-brand-blue)]">
            {t('blog.links.diaries')}
          </Link>
        </div>
      </Container>
    </section>
  );
}
