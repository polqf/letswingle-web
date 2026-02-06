import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

export async function SocialProof() {
  const t = await getTranslations();

  return (
    <Section>
      <Container className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {t('home.socialProof.title')}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-sm text-[color:var(--color-text-muted)]">
            {t('home.socialProof.items.appRatings')}
          </Card>
          <Card className="text-sm text-[color:var(--color-text-muted)]">
            {t('home.socialProof.items.pressMentions')}
          </Card>
          <Card className="text-sm text-[color:var(--color-text-muted)]">
            {t('home.socialProof.items.productBreadth')}
          </Card>
        </div>
      </Container>
    </Section>
  );
}
