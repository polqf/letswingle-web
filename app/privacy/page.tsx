import type { Metadata } from 'next';

import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';

import { PrivacyPolicyDocument } from './PrivacyPolicyDocument';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy notice for LETS WINGLE S.L. (Wingle): how we collect, use, and share personal information.',
};

export default function PrivacyPage() {
  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>Legal</Tag>
        </div>
        <div className="space-y-8 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 text-sm md:p-8">
          <PrivacyPolicyDocument />
        </div>
      </Container>
    </section>
  );
}
