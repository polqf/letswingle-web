'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

interface InstagramEmbedProps {
  posts: string[];
}

function processEmbeds() {
  window.instgrm?.Embeds.process();
}

export function InstagramEmbed({ posts }: InstagramEmbedProps) {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (window.instgrm) {
      processEmbeds();
      return;
    }

    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, [posts]);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((url) => (
        <div
          key={url}
          className="flex justify-center overflow-hidden rounded-[var(--radius-lg)]"
        >
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: 'var(--color-surface)',
              border: 0,
              borderRadius: 'var(--radius-lg)',
              margin: 0,
              maxWidth: '100%',
              minWidth: '280px',
              width: '100%',
            }}
          />
        </div>
      ))}
    </div>
  );
}
