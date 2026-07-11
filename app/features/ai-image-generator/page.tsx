import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getFeature, SHOTS } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { Screenshot } from "../../components/Screenshot";
import { CheckList } from "../../components/CheckList";
import { StyleGrid } from "../../components/StyleGrid";
import { Button } from "../../components/Button";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const feature = getFeature("ai-image-generator")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Image Generator — Text to Image on iPhone",
  description:
    "Photix's AI image generator turns a text prompt into original, high-resolution art in seconds. Pick from ten styles, enhance your prompt automatically, and add reference photos — no prompt skills needed.",
  path: feature.href,
  keywords: feature.keywords,
});

const STEPS = [
  {
    n: "1",
    title: "Describe your idea",
    body: "Type anything into the prompt box — “a cozy cabin in a snowy forest at night”, “a robotic dragon over golden clouds”. There's no blank-page anxiety; a style or reference photo can carry the idea too.",
  },
  {
    n: "2",
    title: "Pick a style (optional)",
    body: "Tap one of ten curated styles to instantly reshape the look — Cinematic for drama, Anime for character art, Realism for lifelike detail.",
  },
  {
    n: "3",
    title: "Add references & enhance",
    body: "Attach up to two reference photos to combine or transform them, and toggle Enhance Prompt to let Photix expand a short idea into a detailed prompt.",
  },
  {
    n: "4",
    title: "Generate & refine",
    body: "Tap Generate, watch the friendly countdown, then regenerate for variations, zoom in, download, or share your favorite.",
  },
];

const PROMPT_IDEAS = [
  "Castle floating above the clouds during sunset",
  "A robotic dragon soaring over a neon city",
  "Elven princess in an enchanted forest",
  "Magical forest with glowing trees and golden light rays",
  "Vintage film portrait of an astronaut, grainy and warm",
  "Cyberpunk street market in the rain, reflections everywhere",
];

const TIPS = [
  "Name the subject, the setting, and the mood — “a fox, in a misty pine forest, at dawn” beats “a fox”.",
  "Let a style do the heavy lifting instead of describing lighting and texture by hand.",
  "Turn on Enhance Prompt when you only have a few words; turn it off when you want precise control.",
  "Use reference photos to keep a specific face, object, or composition consistent.",
  "Regenerate a few times — small wording changes and fresh seeds produce very different results.",
];

const relatedFaqs = [
  {
    q: "How does the Photix AI image generator work?",
    a: "Open the AI Generate tab, type a description, optionally tap a style and attach up to two reference photos, then tap Generate. Photix enhances your prompt, runs the AI model, and returns a high-resolution image you can regenerate, download, or share.",
  },
  {
    q: "Do I need to know how to write prompts?",
    a: "No. The ten one-tap styles and the Enhance Prompt toggle handle the hard parts. You can get striking results from just a few plain words.",
  },
  {
    q: "Can I use my own photos as references?",
    a: "Yes. You can attach up to two reference photos to guide a generation — for example, to combine two pictures or transform an existing one.",
  },
  {
    q: "How many variations can I make?",
    a: "From a single result you can regenerate up to 10 variations. Photix PRO removes usage limits and adds priority processing for faster results.",
  },
];

export default function AiImageGeneratorPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Image Generator",
          description:
            "Turn a text prompt into original, high-resolution AI art on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="AI Generate"
        title="AI Image Generator — text to image in seconds"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Image Generator", path: feature.href },
        ]}
        intro="Describe anything you can imagine and Photix generates a brand-new, high-resolution image — no design software, no prompt engineering, no accounts. Just words, a style, and a tap."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              A blank page, solved
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Traditional AI art tools ask you to master prompts, models, and
              settings before you see a single result. Photix flips that around.
              You bring the intent — a sentence, a style, or a reference photo —
              and it handles enhancing the prompt, applying the artistic recipe,
              running the model, and delivering a result you can refine in
              seconds.
            </p>
            <CheckList
              items={[
                "High-resolution, share-ready output every time",
                "Ten one-tap styles from Realism to Pixel Art",
                "Enhance Prompt fills in the descriptive detail",
                "Up to two reference photos per generation",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <Screenshot shot={SHOTS.generateUi} priority width={300} className="w-[240px] sm:w-[300px]" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="From words to artwork in four steps"
        />
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
          eyebrow="Prompt ideas"
          title="Not sure what to type? Start here."
          description="Copy one of these into the prompt box, pick a style, and tap Generate."
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {PROMPT_IDEAS.map((idea) => (
            <li
              key={idea}
              className="chip"
            >
              {idea}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Best practices"
              title="Tips for better AI images"
              align="left"
            />
            <CheckList items={TIPS} className="mt-8" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold tracking-tight">Every idea, ten ways</h2>
            <p className="text-muted leading-relaxed">
              Styles are the fastest way to change a result without rewriting your
              prompt. Here are the ten that ship with Photix.
            </p>
            <div className="rounded-2xl">
              <StyleGrid />
            </div>
            <Button href="/features/art-styles" variant="secondary" className="w-fit">
              Learn about art styles
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="AI image generator questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <CTA
        title="Generate your first image free"
        description="Download Photix and turn a sentence into stunning art in seconds."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
