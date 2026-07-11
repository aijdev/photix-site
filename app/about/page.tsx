import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { COMPANION_APPS } from "../lib/content";
import { RATING, USERS } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "About Photix — Effortless AI Image Creation",
  description:
    "Photix makes AI-powered image creation effortless for everyone. Learn about our mission, who Photix is for, and the AI Journey family of creativity apps behind it.",
  path: "/about",
  keywords: ["about Photix", "AI Journey apps", "AI creativity app maker"],
});

const AUDIENCE = [
  { who: "Social media users & creators", want: "Eye-catching, on-trend visuals and avatars to post", how: "One-tap styles, trending templates, and instant sharing" },
  { who: "Casual creatives & hobbyists", want: "To bring imaginative ideas to life", how: "Text-to-image with ten curated art styles" },
  { who: "Self-expression enthusiasts", want: "To reimagine themselves in fun themes", how: "Superhero, fantasy, historical, and fashion avatars" },
  { who: "Everyday photo editors", want: "Quick tweaks without pro tools", how: "Describe-the-change AI editing" },
  { who: "AI-curious newcomers", want: "To try AI art without a learning curve", how: "Templates, prompt enhancement, and guided flows" },
];

const STRENGTHS = [
  { title: "Breadth in one app", body: "Generation, editing, and avatars under a single coherent interface — most competitors do just one." },
  { title: "Zero learning curve", body: "Curated styles, avatar templates, and prompt enhancement mean great results without prompt-writing skill." },
  { title: "Conversational editing", body: "Edits build on each other, letting you sculpt an image through natural language, step by step." },
  { title: "Delightful, reassuring UX", body: "A polished dark theme, progress countdowns, zoomable results, and variant history remove the “is it working?” anxiety." },
  { title: "Frictionless output", body: "One-tap save and native share put finished images exactly where you want them." },
  { title: "Privacy-conscious", body: "Explicit tracking and consent flows, plus a client-side content-safety filter, with no accounts to manage." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Make AI image creation effortless for everyone"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        intro="Most people have ideas and photos they'd love to see reimagined, but lack the tools or the talent to make it happen. Photix exists to remove every barrier between imagination and a finished, shareable image."
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-foreground">Our mission is simple:</span>{" "}
            make AI-powered image creation delightful and accessible to anyone
            with a phone. Traditional photo editors are complex, and professional
            AI tools are intimidating. Photix collapses all of that into a
            friendly, tap-and-type experience where the AI does the heavy lifting
            and you simply describe what you want.
          </p>
          <p>
            The idea at the core of the product is a single creative loop: you
            provide intent — a text prompt, a chosen style, or a template — and
            optionally an input photo. Photix handles everything else: enhancing
            the prompt, applying the artistic recipe, running the model, and
            delivering a high-quality result you can refine, save, and share.
          </p>
          <p className="card p-6 text-xl font-medium text-foreground">
            “Photix turns anyone&apos;s words or selfies into share-ready AI imagery
            in seconds — a full creative studio that requires no skill, no
            accounts, and no learning curve.”
          </p>
          <p>
            That approach resonates: Photix holds a {RATING}-star rating and has
            welcomed {USERS} happy users who create original art, transform
            selfies, and edit photos every day.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Who it's for" title="Built for everyday creators" />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  Audience
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  What they want
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  How Photix helps
                </th>
              </tr>
            </thead>
            <tbody>
              {AUDIENCE.map((row) => (
                <tr key={row.who}>
                  <th
                    scope="row"
                    className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium"
                  >
                    {row.who}
                  </th>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.want}
                  </td>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why it works" title="What makes Photix different" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-2 card p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="AI Journey"
          title="Part of a family of AI creativity apps"
          description={`Photix is one of ${COMPANION_APPS.length + 1} apps in the AI Journey suite. Each explores a different corner of AI creativity, and Photix helps you discover them all.`}
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      <CTA />
    </>
  );
}
