import Link from "next/link";
import { getContent, getFeature } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedPath, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { FaqList } from "../components/Faq";
import { RelatedFeatures } from "../components/RelatedFeatures";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

const SWAPTO_HREF = "https://swapto.app/features/ai-avatar";

export function AiAvatarView({ locale }: { locale: Locale }) {
  const feature = getFeature("ai-avatar", locale)!;
  const categories = getContent(locale).avatarCategories;
  const d = getDictionary(locale);
  const p = d.toolPages.aiAvatar;
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
          eyebrow={d.avatarIdeasPage.header.eyebrow}
          title={p.galleriesTitle}
          description={
            <>
              {p.galleriesDescriptionPre}
              <Link href={localizedPath("/avatar-ideas", locale)} className="font-medium text-brand">
                {p.galleriesDescriptionLink}
              </Link>
              .
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-4 card p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
              </div>
              <p className="text-sm text-muted">{category.blurb}</p>
              <ul className="flex flex-wrap gap-2">
                {category.templates.map((template) => (
                  <li key={template} className="chip text-xs">
                    {template}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">{p.crossPromo.eyebrow}</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{p.crossPromo.title}</h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              {p.crossPromo.bodyPre}
              <a
                href={SWAPTO_HREF}
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {p.crossPromo.linkText}
              </a>
              {p.crossPromo.bodyPost}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={d.home.faqSection.eyebrow} title={p.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={p.faqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug="ai-avatar" locale={locale} />

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        secondary={{ label: p.ctaSecondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
