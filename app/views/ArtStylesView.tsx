import { getFeature } from "../lib/content";
import { softwareAppSchema } from "../lib/schema";
import { type Locale, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { StyleGrid } from "../components/StyleGrid";
import { CheckList } from "../components/CheckList";
import { Button } from "../components/Button";
import { AppStoreButton } from "../components/AppStoreButton";
import { RelatedFeatures } from "../components/RelatedFeatures";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function ArtStylesView({ locale }: { locale: Locale }) {
  const feature = getFeature("art-styles", locale)!;
  const d = getDictionary(locale);
  const p = d.toolPages.artStyles;
  const common = d.common;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: `${feature.name} — Photix`,
          description: feature.summary,
          url: localizedUrl(feature.href, locale),
          locale,
        })}
      />

      <PageHeader
        eyebrow={feature.eyebrow}
        title={p.headerTitle}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: d.featuresPage.header.eyebrow, path: "/features" },
          { name: feature.name, path: feature.href },
        ]}
        intro={p.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{p.leadTitle}</h2>
            <p className="text-lg leading-relaxed text-muted">{p.leadBody1}</p>
            <p className="text-lg leading-relaxed text-muted">{p.leadBody2}</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">{p.pairTitle}</h3>
            <CheckList className="mt-4" items={p.pairChecklist} />
            <Button
              href="/features/ai-image-generator"
              variant="secondary"
              className="mt-6 w-full justify-center"
              locale={locale}
            >
              {p.pairCta}
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={d.avatarIdeasPage.categoriesSection.eyebrow}
          title={p.collectionTitle}
          description={p.collectionDescription}
        />
        <div className="mt-12">
          <StyleGrid detailed locale={locale} />
        </div>
      </Section>

      <RelatedFeatures currentSlug="art-styles" locale={locale} />

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        secondary={{ label: p.ctaSecondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
