import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { InstagramEmbed } from './InstagramEmbed';

const INSTAGRAM_URL = 'https://www.instagram.com/lets_wingle';

// Add or swap post URLs here to update the feed preview.
// Each URL should be a full Instagram post permalink.
const FEATURED_POSTS = [
  'https://www.instagram.com/p/DNAVh9xIbVV/',
  'https://www.instagram.com/reel/C-sT5dLJRBA/',
  'https://www.instagram.com/reel/DQ_kt22iH0V/',
];

interface InstagramPreviewProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
}

export function InstagramPreview({
  eyebrow,
  title,
  subtitle,
  cta,
}: InstagramPreviewProps) {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <InstagramEmbed posts={FEATURED_POSTS} />

        <div className="flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] px-8 py-4 transition-colors hover:border-[color:var(--color-brand-blue)]"
          >
            <svg
              className="h-5 w-5 text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-brand-blue)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-sm font-semibold text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-brand-blue)]">
              {cta}
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
