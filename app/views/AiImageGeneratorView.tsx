import { getFeature } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { StyleGrid } from "../components/StyleGrid";
import { Button } from "../components/Button";
import { AppStoreButton } from "../components/AppStoreButton";
import { FaqList } from "../components/Faq";
import { RelatedFeatures } from "../components/RelatedFeatures";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function AiImageGeneratorView({ locale }: { locale: Locale }) {
  const feature = getFeature("ai-image-generator", locale)!;
  const d = getDictionary(locale);
  const p = d.toolPages.aiImageGenerator;
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
      <JsonLd data={faqSchema(p.faqs)} />

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{p.leadTitle}</h2>
            <p className="text-lg leading-relaxed text-muted">{p.leadBody}</p>
            <CheckList items={p.checklist} />
          </div>
          <div className="flex justify-center">
            <Screenshot shot={feature.shot} priority width={300} className="w-[240px] sm:w-[300px]" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow={d.home.howSection.eyebrow} title={p.howTitle} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 card p-6">
              <span className="text-4xl font-bold text-gradient">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={d.avatarIdeasPage.popularSection.eyebrow}
          title={p.promptIdeasTitle}
          description={p.promptIdeasDescription}
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {p.promptIdeas.map((idea) => (
            <li key={idea} className="chip">
              {idea}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={d.aboutPage.strengthsSection.eyebrow} title={p.tipsTitle} align="left" />
            <CheckList items={p.tips} className="mt-8" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold tracking-tight">{p.stylesAsideTitle}</h2>
            <p className="text-muted leading-relaxed">{p.stylesAsideBody}</p>
            <div className="rounded-2xl">
              <StyleGrid locale={locale} />
            </div>
            <Button href="/features/art-styles" variant="secondary" className="w-fit" locale={locale}>
              {p.stylesAsideCta}
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={d.home.faqSection.eyebrow} title={p.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={p.faqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug="ai-image-generator" locale={locale} />

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        secondary={{ label: p.ctaSecondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
