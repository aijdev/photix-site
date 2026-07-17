import Link from "next/link";
import { RATING, USERS } from "../lib/site";
import { getContent, SHOTS } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { Container } from "../components/Container";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { AppStoreButton } from "../components/AppStoreButton";
import { Screenshot } from "../components/Screenshot";
import { StatStrip } from "../components/StatStrip";
import { FeatureCard } from "../components/FeatureCard";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { StyleGrid } from "../components/StyleGrid";
import { HowItWorks } from "../components/HowItWorks";
import { UseCaseCard } from "../components/UseCaseCard";
import { Testimonials } from "../components/Testimonials";
import { CompanionApps } from "../components/CompanionApps";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { StarIcon } from "../components/Icons";

export function HomeView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const d = getDictionary(locale);
  const h = d.home;
  const homeFaqs = content.faqs[0].items;

  return (
    <>
      <JsonLd data={softwareAppSchema({ locale })} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
            <div className="flex flex-col items-start gap-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-strong shadow-soft">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5 text-brand-pink" />
                  ))}
                </span>
                <span className="font-semibold text-foreground">{RATING}</span>
                <span className="text-border-strong">·</span>
                {USERS} {h.hero.ratingSuffix}
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {h.hero.titlePre} <br className="hidden sm:block" />
                <span className="text-gradient">{h.hero.titleAccent}</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {h.hero.description}
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton locale={locale} />
                <Button href="/features" variant="secondary" size="lg" locale={locale}>
                  {h.hero.exploreCta}
                </Button>
              </div>

              <p className="text-sm text-muted">{h.hero.freeNote}</p>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-[15%] top-[8%] bottom-[8%] rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <Screenshot
                shot={SHOTS.generateHero}
                priority
                width={360}
                sizes="(max-width: 1024px) 70vw, 360px"
                className="relative w-[260px] animate-float sm:w-[320px] lg:w-[360px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Social proof stats */}
      <Container>
        <StatStrip locale={locale} />
      </Container>

      {/* Features overview */}
      <Section id="features">
        <SectionHeading
          eyebrow={h.featuresSection.eyebrow}
          title={h.featuresSection.title}
          description={h.featuresSection.description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature) => (
            <FeatureCard key={feature.slug} feature={feature} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Deep feature highlights */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          {h.highlights.map((hl, i) => (
            <AlternatingFeature
              key={content.features[i].slug}
              reversed={i % 2 === 1}
              eyebrow={hl.eyebrow}
              title={hl.title}
              description={hl.description}
              bullets={hl.bullets}
              shot={content.features[i].shot}
              cta={{ label: hl.cta, href: content.features[i].href }}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      {/* Art styles */}
      <Section>
        <SectionHeading
          eyebrow={h.artStylesSection.eyebrow}
          title={h.artStylesSection.title}
          description={h.artStylesSection.description}
        />
        <div className="mt-12">
          <StyleGrid locale={locale} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/features/art-styles" variant="secondary" locale={locale}>
            {h.artStylesSection.exploreCta}
          </Button>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.howSection.eyebrow}
          title={h.howSection.title}
          description={h.howSection.description}
        />
        <div className="mt-12">
          <HowItWorks steps={content.howItWorks} />
        </div>
      </Section>

      {/* Use cases */}
      <Section>
        <SectionHeading
          eyebrow={h.useCasesSection.eyebrow}
          title={h.useCasesSection.title}
          description={h.useCasesSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} locale={locale} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/use-cases" variant="secondary" locale={locale}>
            {h.useCasesSection.seeAll}
          </Button>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.benefitsSection.eyebrow}
          title={h.benefitsSection.title}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map((benefit) => (
            <div key={benefit.title} className="card card-hover flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="card mx-auto mt-12 max-w-3xl p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold">{h.problemsCard.heading}</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {content.problemsSolved.map((problem) => (
              <li key={problem} className="text-lg text-muted-strong">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow={h.testimonialsSection.eyebrow}
          title={h.testimonialsSection.title.replace("{users}", USERS)}
          description={h.testimonialsSection.description.replace("{rating}", RATING)}
        />
        <div className="mt-12">
          <Testimonials items={content.testimonials} />
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.companionSection.eyebrow}
          title={h.companionSection.title}
          description={h.companionSection.description}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      {/* Free-to-start reassurance */}
      <Section>
        <SectionHeading
          eyebrow={h.freeToStart.eyebrow}
          title={h.freeToStart.title}
          description={h.freeToStart.description}
        />
        <div className="mt-10 flex justify-center">
          <Button href="/features" variant="secondary" size="lg" locale={locale}>
            {h.freeToStart.cta}
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.faqSection.eyebrow}
          title={h.faqSection.title}
          description={
            <>
              {h.faqSection.descriptionPre}
              <Link href={localizedPath("/faq", locale)} className="font-medium text-brand">
                {h.faqSection.seeFullFaq}
              </Link>
              .
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      <CTA
        title={h.cta.title}
        description={h.cta.description}
        secondary={{ label: h.cta.secondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
