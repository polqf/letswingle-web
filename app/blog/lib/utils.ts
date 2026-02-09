import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
}
