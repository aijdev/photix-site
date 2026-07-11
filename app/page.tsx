import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { RATING, SITE_NAME, USERS } from "./lib/site";
import {
  BENEFITS,
  FAQS,
  FEATURES,
  PROBLEMS_SOLVED,
  SHOTS,
  USE_CASES,
} from "./lib/content";
import { softwareAppSchema, faqSchema } from "./lib/schema";

import { Container } from "./components/Container";
import { Section, SectionHeading } from "./components/Section";
import { Button } from "./components/Button";
import { AppStoreButton } from "./components/AppStoreButton";
import { Screenshot } from "./components/Screenshot";
import { StatStrip } from "./components/StatStrip";
import { FeatureCard } from "./components/FeatureCard";
import { AlternatingFeature } from "./components/AlternatingFeature";
import { StyleGrid } from "./components/StyleGrid";
import { HowItWorks } from "./components/HowItWorks";
import { UseCaseCard } from "./components/UseCaseCard";
import { Testimonials } from "./components/Testimonials";
import { CompanionApps } from "./components/CompanionApps";
import { FaqList } from "./components/Faq";
import { CTA } from "./components/CTA";
import { JsonLd } from "./components/JsonLd";
import { StarIcon } from "./components/Icons";

export const metadata: Metadata = buildMetadata({
  title:
    "Photix — AI Image Generator, Photo Editor & Avatar Maker for iPhone",
  description:
    "Create original AI art from a text prompt, edit photos by describing changes, and turn selfies into themed avatars — all in one iOS app. Download Photix free for iPhone and iPad.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "AI image generator app",
    "AI photo editor iPhone",
    "AI avatar maker",
    "text to image app",
    "AI art generator",
  ],
});

const homeFaqs = FAQS[0].items;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />
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
                {USERS} happy users
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Create anything <br className="hidden sm:block" />
                you can <span className="text-gradient">imagine</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Photix is the all-in-one AI image app for iPhone and iPad. Turn a
                few words into original art, edit any photo just by describing the
                change, and transform selfies into themed avatars — no design
                skills, accounts, or prompt expertise required.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton />
                <Button href="/features" variant="secondary" size="lg">
                  Explore features
                </Button>
              </div>

              <p className="text-sm text-muted">
                Free to download · No account or login required · iPhone &amp; iPad
              </p>
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
        <StatStrip />
      </Container>

      {/* Features overview */}
      <Section id="features">
        <SectionHeading
          eyebrow="One app, four creative modes"
          title="Everything you need to create with AI"
          description="Most apps do one thing. Photix brings image generation, photo editing, and avatar creation together in a single, coherent interface built for people who just want great results."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.slug} feature={feature} />
          ))}
        </div>
      </Section>

      {/* Deep feature highlights */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          <AlternatingFeature
            eyebrow="AI Generate"
            title="Turn a sentence into stunning art"
            description="Describe a scene, a character, or a mood and Photix generates a brand-new, high-resolution image in seconds. Tap a style, attach up to two reference photos, and let the built-in Enhance Prompt option fill in the details for you."
            bullets={[
              "Ten one-tap art styles, from Realism to Anime and Cyberpunk",
              "Enhance Prompt automatically enriches your description",
              "Attach up to two reference photos to guide the result",
              "Regenerate for fresh variations and compare them instantly",
            ]}
            shot={SHOTS.generateUi}
            cta={{ label: "About the AI image generator", href: "/features/ai-image-generator" }}
          />
          <AlternatingFeature
            reversed
            eyebrow="AI Edit"
            title="Edit any photo just by describing it"
            description="Upload a photo and type what you want changed — an outfit, a background, the lighting, the season. Every edit stacks on the last, so you can sculpt an image conversationally without ever touching a layer or a slider."
            bullets={[
              "Plain-language edits: “add a red beret”, “make it autumn”",
              "Iterative, multi-step editing that builds on each result",
              "Blend two reference photos into one perfect image",
              "Navigate variants and save the one you love",
            ]}
            shot={SHOTS.editStyle}
            cta={{ label: "About the AI photo editor", href: "/features/ai-photo-editor" }}
          />
          <AlternatingFeature
            eyebrow="AI Avatar"
            title="Turn a selfie into a themed portrait"
            description="Pick a template — Superhero, Renaissance Noble, Anime Hero, High Fashion — add a selfie, and Photix returns a polished, share-ready portrait. Face detection checks your photo up front so you never waste a generation."
            bullets={[
              "Dozens of templates across Fashion, Historical, and more",
              "Face-aware: confirms a usable selfie before generating",
              "Editable prompts let you fine-tune each look",
              "One tap to save to Photos or share anywhere",
            ]}
            shot={SHOTS.avatar}
            cta={{ label: "About the AI avatar maker", href: "/features/ai-avatar" }}
          />
        </div>
      </Section>

      {/* Art styles */}
      <Section>
        <SectionHeading
          eyebrow="Art styles"
          title="Ten looks that do the prompt engineering for you"
          description="Every style is a curated recipe. Tap one and the same idea takes on a completely different feel — no prompt-writing skill needed."
        />
        <div className="mt-12">
          <StyleGrid />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/features/art-styles" variant="secondary">
            Explore all art styles
          </Button>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="From idea to share-ready image in four taps"
          description="The same simple rhythm powers every creative mode in Photix."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      {/* Use cases */}
      <Section>
        <SectionHeading
          eyebrow="Use cases"
          title="What people create with Photix"
          description="Whether you're posting content, refreshing a profile picture, or editing a photo, Photix meets you where your imagination is."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/use-cases" variant="secondary">
            See all use cases
          </Button>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Why Photix"
          title="Built to remove every barrier to creating"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="card card-hover flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="card mx-auto mt-12 max-w-3xl p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold">Photix is for you if you&apos;ve ever thought…</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {PROBLEMS_SOLVED.map((problem) => (
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
          eyebrow="Loved by creators"
          title={`Join ${USERS} people already creating`}
          description={`Photix holds a ${RATING}-star rating in the App Store. Here's what a few of them say.`}
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The AI Journey family"
          title="More AI creativity beyond Photix"
          description="Photix is part of a broader suite of AI creativity apps. Explore the companions built by the same team."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      {/* Free-to-start reassurance */}
      <Section>
        <SectionHeading
          eyebrow="Free to start"
          title="Download free and start creating"
          description="Photix is free to download and free to use. Make original art, avatars, and edits from your very first minute — no account, no credit card, and no design skills required."
        />
        <div className="mt-10 flex justify-center">
          <Button href="/features" variant="secondary" size="lg">
            See everything you can make
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description={
            <>
              Everything you need to know to get started.{" "}
              <Link href="/faq" className="font-medium text-brand">
                See the full FAQ
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
        title="Create your first image today"
        description={`Download ${SITE_NAME} free and turn your imagination into share-ready art in seconds.`}
        secondary={{ label: "Browse features", href: "/features" }}
      />
    </>
  );
}
