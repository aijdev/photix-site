import Link from "next/link";
import { getContent } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedPath, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { ArrowRightIcon } from "../components/Icons";
import { SHOTS } from "../lib/content";

export function AvatarIdeasView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const p = d.avatarIdeasPage;
  const categories = getContent(locale).avatarCategories;
  const totalTemplates = categories.reduce((sum, c) => sum + c.templates.length, 0);

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Avatar Maker",
          description: "Turn a selfie into themed AI avatar portraits on iPhone and iPad.",
          url: localizedUrl("/avatar-ideas", locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(p.faqs)} />

      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: d.common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/avatar-ideas" },
        ]}
        intro={p.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* How to choose */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{p.howToChoose.title}</h2>
            <p className="text-lg leading-relaxed text-muted">{p.howToChoose.body}</p>
            <CheckList
              items={p.howToChoose.checklist.map((item) =>
                item.replace("{count}", String(totalTemplates)),
              )}
            />
            <Button href="/features/ai-avatar" variant="secondary" className="w-fit" locale={locale}>
              {p.howToChoose.cta}
            </Button>
          </div>
          <div className="flex justify-center">
            <Screenshot shot={SHOTS.avatar} priority width={300} className="w-[240px] sm:w-[300px]" />
          </div>
        </div>
      </Section>

      {/* Popular ideas */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.popularSection.eyebrow}
          title={p.popularSection.title}
          description={p.popularSection.description}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.ideas.map((idea) => (
            <div key={idea.name} className="card card-hover flex flex-col gap-3 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{idea.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{idea.vibe}</p>
              <p className="mt-auto text-sm text-muted-strong">
                <span className="font-medium text-foreground">{p.popularSection.greatForLabel}</span>
                {idea.greatFor}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* By occasion */}
      <Section>
        <SectionHeading
          eyebrow={p.occasionSection.eyebrow}
          title={p.occasionSection.title}
          description={p.occasionSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {p.occasions.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-auto text-sm font-medium text-brand">{item.styles}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Browse all categories */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.categoriesSection.eyebrow}
          title={p.categoriesSection.title}
          description={p.categoriesSection.description}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="card flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
                <span className="ml-auto text-sm text-muted">
                  {category.templates.length} {p.categoriesSection.looksSuffix}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{category.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href={localizedPath("/features/ai-avatar", locale)}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
          >
            {p.categoriesSection.seeFullLink}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Selfie tips */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={p.tipsSection.eyebrow}
              title={p.tipsSection.title}
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">{p.tipsSection.body}</p>
          </div>
          <CheckList items={p.tips} className="lg:mt-4" />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow={d.home.faqSection.eyebrow} title={p.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={p.faqs} />
        </div>
      </Section>

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        secondary={{ label: p.ctaSecondary, href: "/features/ai-avatar" }}
        locale={locale}
      />
    </>
  );
}
