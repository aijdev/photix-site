import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { FEATURES, SHOTS } from "../lib/content";
import { softwareAppSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { FeatureCard } from "../components/FeatureCard";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { HowItWorks } from "../components/HowItWorks";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { CompanionApps } from "../components/CompanionApps";
import { JsonLd } from "../components/JsonLd";
import {
  ShareIcon,
  ShieldIcon,
  BoltIcon,
  LayersIcon,
} from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Features — AI Generate, Edit, Avatars & Art Styles",
  description:
    "Explore every Photix feature: the AI image generator, describe-to-edit photo editor, selfie-to-avatar maker, ten art styles, prompt enhancement, reference photos, and instant sharing.",
  path: "/features",
  keywords: [
    "AI image app features",
    "AI photo editor features",
    "AI avatar generator",
    "AI art styles",
  ],
});

const RESULT_FEATURES = [
  {
    icon: <ShareIcon className="h-6 w-6" />,
    title: "Save & share instantly",
    body: "Every result is one tap from your photo library or the native iOS share sheet — post to Instagram, send in Messages, or save for later.",
  },
  {
    icon: <LayersIcon className="h-6 w-6" />,
    title: "Variant history",
    body: "Regenerate for fresh takes and flip between variants in a history strip, so you can compare options and keep the best one.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" />,
    title: "Reassuring, fast results",
    body: "A friendly progress countdown keeps you comfortable while the AI works, and PRO adds priority processing for faster generations.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Private & safe by design",
    body: "No accounts or logins, explicit tracking-consent prompts, and a content-safety filter that blocks unsafe prompts before they're sent.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />

      <PageHeader
        eyebrow="Features"
        title="Everything Photix can create"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ]}
        intro="Photix is a pocket-sized creative studio. Four creative modes, ten art styles, prompt enhancement, reference photos, and instant sharing — all wrapped in a friendly, tap-and-type interface that needs no design skill."
        actions={<AppStoreButton size="md" />}
      />

      {/* Mode cards */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.slug} feature={feature} />
          ))}
        </div>
      </Section>

      {/* Detailed modes */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          <AlternatingFeature
            eyebrow="AI Generate · Text-to-image"
            title="An AI image generator that meets you halfway"
            description="Type an idea into the “Describe your idea…” box, pick from ten curated styles, and generate a brand-new image. Attach up to two reference photos to combine or transform existing pictures, and toggle Enhance Prompt to let Photix enrich short descriptions into detailed prompts."
            bullets={[
              "Free-form prompt plus one-tap style recipes",
              "Enhance Prompt turns a few words into a rich description",
              "Up to two reference photos per generation",
              "Regenerate up to 10 variations from one result",
            ]}
            shot={SHOTS.generateUi}
            cta={{ label: "Explore the AI image generator", href: "/features/ai-image-generator" }}
            priority
          />
          <AlternatingFeature
            reversed
            eyebrow="AI Edit · Photo modification"
            title="Conversational photo editing, no layers required"
            description="Set a photo, describe the change, and tap Modify. Each edit accumulates on the previous result, so “add a red hat” followed by “make it look like autumn” stacks naturally. Add a second reference photo to guide the edit, and navigate between variants before you save."
            bullets={[
              "Describe changes in plain English",
              "Iterative, multi-step edits that build on each other",
              "Combine two photos into one composed image",
              "Save the variant you love to the result screen",
            ]}
            shot={SHOTS.editCombine}
            cta={{ label: "Explore the AI photo editor", href: "/features/ai-photo-editor" }}
          />
          <AlternatingFeature
            eyebrow="AI Avatar · Selfie-to-portrait"
            title="Themed avatars from a single selfie"
            description="Browse template galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — pick a look, and add a selfie. Photix detects a face to make sure your photo will work, pre-fills a descriptive prompt you can tweak, and generates a polished portrait."
            bullets={[
              "Dozens of templates across five themed categories",
              "Face detection prevents wasted generations",
              "Editable, pre-filled prompts for each template",
              "One-tap themed portraits ready to share",
            ]}
            shot={SHOTS.avatar}
            cta={{ label: "Explore the AI avatar maker", href: "/features/ai-avatar" }}
          />
        </div>
      </Section>

      {/* Result, save & share */}
      <Section>
        <SectionHeading
          eyebrow="Result, save & share"
          title="Polished output, exactly where you want it"
          description="No matter which mode you use, every creation flows into the same delightful result experience."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 card p-6"
            >
              <span className="icon-badge h-11 w-11">
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="The universal creative loop"
          description="Describe or choose, add a photo if you like, generate, then refine — the rhythm is the same everywhere in Photix."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      {/* Art styles + PRO callout */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">Ten built-in art styles</h2>
            <p className="text-muted leading-relaxed">
              Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage,
              Paint, Illustration, and Pixel Art. Each one reshapes the same idea
              into a completely different look with a single tap.
            </p>
            <Button href="/features/art-styles" variant="secondary" className="w-fit">
              Browse the styles
            </Button>
          </div>
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">Free to create</h2>
            <p className="text-muted leading-relaxed">
              Every creative mode is free to use — no account, no credit card, no
              design skills. An optional PRO upgrade inside the app unlocks
              unlimited, ad-free, watermark-free creation whenever you want it.
            </p>
            <Button href="/avatar-ideas" variant="secondary" className="w-fit">
              Explore avatar ideas
            </Button>
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="AI Journey family"
          title="Discover companion apps"
          description="Photix also introduces you to sibling apps for video, enhancement, live portraits, and face swap."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>
    </>
  );
}
