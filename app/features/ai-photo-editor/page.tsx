import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getFeature, SHOTS } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { Screenshot } from "../../components/Screenshot";
import { CheckList } from "../../components/CheckList";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const feature = getFeature("ai-photo-editor")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Photo Editor — Edit Photos by Describing the Change",
  description:
    "Photix's AI photo editor lets you edit any picture in plain language. Add objects, change outfits, swap backgrounds, and restyle photos step by step — no layers, masks, or Photoshop required.",
  path: feature.href,
  keywords: feature.keywords,
});

const EXAMPLES = [
  { prompt: "Add a red beret and change the background to Paris", result: "A new outfit and setting, applied in one edit." },
  { prompt: "Make it look like autumn", result: "Warm tones and seasonal light layered on the previous result." },
  { prompt: "I want curly blond hair", result: "A natural hairstyle change that keeps the face intact." },
  { prompt: "Nighttime with neon", result: "A whole new mood and lighting for the same portrait." },
];

const STEPS = [
  { n: "1", title: "Set a photo", body: "Pick the image you want to edit. Add an optional second photo as extra reference to blend or guide the change." },
  { n: "2", title: "Describe the change", body: "Type what you want in plain language — an outfit, a background, the lighting, a new object, a different season." },
  { n: "3", title: "Tap Modify", body: "Photix applies your instruction and shows the result. Don't like it? Regenerate to get alternate variants." },
  { n: "4", title: "Stack & save", body: "Modify again to build on the last result, flip between variants, then save the one you love to Photos or share it." },
];

const relatedFaqs = [
  {
    q: "How do I edit a photo with Photix?",
    a: "Open the AI Edit tab, set a photo, and describe the change you want — for example “add a red hat” or “change the background to a beach”. Tap Modify and Photix returns the edited photo. Each edit builds on the previous result so you can refine step by step.",
  },
  {
    q: "Can I stack multiple edits?",
    a: "Yes. AI Edit is iterative: every Modify accumulates on the last result, so you can layer changes — a hairstyle, then an outfit, then a background — in a natural, conversational flow.",
  },
  {
    q: "Can I combine two photos?",
    a: "Yes. You can add a second reference photo so Photix blends or transforms them together from your description — for instance, placing a person into a completely new scene.",
  },
  {
    q: "Do I need photo-editing skills?",
    a: "No. There are no layers, masks, or sliders. If you can describe the change in words, Photix can apply it.",
  },
];

export default function AiPhotoEditorPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Photo Editor",
          description:
            "Edit any photo by describing the change in plain language on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="AI Edit"
        title="AI Photo Editor — edit photos by describing the change"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Photo Editor", path: feature.href },
        ]}
        intro="Forget layers, masks, and menus. Upload a photo, type what you want changed, and Photix does it. Then keep going — each edit stacks on the last, so you can sculpt an image one sentence at a time."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Editing that feels like a conversation
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Most photo editors make you find the right tool before you can make
              a change. Photix removes that step entirely. You describe the result
              you want and it figures out how to get there — then remembers what
              you asked for, so your next instruction builds on the last one.
            </p>
            <CheckList
              items={[
                "Change outfits, backgrounds, hair, lighting, and more",
                "Iterative edits that accumulate step by step",
                "Blend two reference photos into one composition",
                "Compare variants and save the best result",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <Screenshot shot={SHOTS.editLook} priority width={300} className="w-[240px] sm:w-[300px]" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How it works" title="Describe, modify, repeat" />
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
          eyebrow="Examples"
          title="Real edits, in plain language"
          description="Here's the kind of instruction Photix understands — and how the edits stack together."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {EXAMPLES.map((ex) => (
            <div
              key={ex.prompt}
              className="flex flex-col gap-2 card p-6"
            >
              <p className="font-semibold">
                <span className="text-brand">“</span>
                {ex.prompt}
                <span className="text-brand">”</span>
              </p>
              <p className="text-sm text-muted">{ex.result}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="AI photo editor questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <CTA
        title="Edit your first photo free"
        description="Download Photix and change any picture just by describing what you want."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
