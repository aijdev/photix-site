import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { AVATAR_CATEGORIES, getFeature, SHOTS } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { Screenshot } from "../../components/Screenshot";
import { CheckList } from "../../components/CheckList";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const feature = getFeature("ai-avatar")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Avatar Maker — Turn Selfies Into Themed Portraits",
  description:
    "Photix's AI avatar maker turns any selfie into a polished, themed portrait — superhero, anime, high fashion, Renaissance noble, and dozens more. Face-aware, editable, and ready to share in one tap.",
  path: feature.href,
  keywords: feature.keywords,
});

const STEPS = [
  { n: "1", title: "Browse templates", body: "Explore themed galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — and pick a look that fits your vibe." },
  { n: "2", title: "Add a selfie", body: "Choose a portrait from your camera roll. Photix detects a face up front so you never waste a generation on an unusable photo." },
  { n: "3", title: "Tweak the prompt", body: "Each template pre-fills a descriptive prompt. Leave it as-is or personalize it before you generate." },
  { n: "4", title: "Generate & share", body: "Get a polished, themed portrait in seconds, then download to Photos or share it straight to your favorite app." },
];

const relatedFaqs = [
  {
    q: "How does the AI avatar maker work?",
    a: "Open the AI Avatar tab, browse the template galleries, pick a look, and add a selfie. Photix detects a face to confirm your photo will work, pre-fills a descriptive prompt you can edit, and generates a themed portrait ready to save or share.",
  },
  {
    q: "What avatar styles are available?",
    a: "Templates span five categories: Trending, AI Avatars (Superhero, Fantasy Princess, Anime Hero, Cyberpunk and more), Fashion (High Fashion, Street Style, Vintage Glamour…), Historical (Renaissance Noble, Ancient Egypt, Samurai…), and Lifestyle (Cozy Smile, City Greenery…).",
  },
  {
    q: "Why does Photix check for a face?",
    a: "Avatars work best from a clear portrait, so Photix confirms a face is present before generating. If none is detected it shows a “Face not detected” message so you can pick a better selfie — saving you a wasted creation.",
  },
  {
    q: "Can I use avatars as profile pictures?",
    a: "Absolutely. Themed portraits make great profile pictures for social media, gaming, and messaging apps. Save watermark-free exports with Photix PRO.",
  },
];

export default function AiAvatarPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Avatar Maker",
          description:
            "Turn a selfie into themed AI portraits on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="AI Avatar"
        title="AI Avatar Maker — turn selfies into themed portraits"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Avatar Maker", path: feature.href },
        ]}
        intro="Pick a template, add a selfie, and Photix transforms you into a superhero, an anime hero, a Renaissance noble, or a high-fashion model — a polished portrait that's far more than a filter."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              A profile picture that isn&apos;t just a filter
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Filters tweak a photo; Photix reimagines it. Choose a theme and your
              selfie becomes a fully-realized portrait — new setting, wardrobe, and
              lighting, with your likeness intact. It’s the fastest way to a
              standout avatar for social media, gaming, or messaging.
            </p>
            <CheckList
              items={[
                "Dozens of templates across five themed categories",
                "Face-aware: validates your selfie before generating",
                "Editable, pre-filled prompts for each template",
                "One-tap save and share, watermark-free on PRO",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <Screenshot shot={SHOTS.avatar} priority width={300} className="w-[240px] sm:w-[300px]" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How it works" title="From selfie to portrait in four steps" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="flex flex-col gap-3 card p-6"
            >
              <span className="text-4xl font-bold text-gradient">{step.n}</span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Template galleries"
          title="Dozens of looks, grouped by theme"
          description={
            <>
              Browse curated collections and find the perfect persona — or try a
              few and pick your favorite. Need a starting point?{" "}
              <Link href="/avatar-ideas" className="font-medium text-brand">
                See popular avatar ideas
              </Link>
              .
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AVATAR_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-4 card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {category.name}
                </h3>
              </div>
              <p className="text-sm text-muted">{category.blurb}</p>
              <ul className="flex flex-wrap gap-2">
                {category.templates.map((template) => (
                  <li
                    key={template}
                    className="chip text-xs"
                  >
                    {template}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="AI avatar questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <CTA
        title="Make your AI avatar free"
        description="Download Photix, add a selfie, and become anyone you can imagine."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
