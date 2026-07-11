import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getFeature } from "../../lib/content";
import { softwareAppSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { StyleGrid } from "../../components/StyleGrid";
import { CheckList } from "../../components/CheckList";
import { Button } from "../../components/Button";
import { AppStoreButton } from "../../components/AppStoreButton";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const feature = getFeature("art-styles")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Art Styles — Realism, Anime, Cyberpunk & More",
  description:
    "Explore the ten one-tap art styles in Photix: Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art. Reshape any idea with a single tap — no prompts.",
  path: feature.href,
  keywords: feature.keywords,
});

export default function ArtStylesPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Art Styles",
          description:
            "Ten one-tap AI art styles that reshape any prompt on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />

      <PageHeader
        eyebrow="Art styles"
        title="AI art styles that do the prompt engineering for you"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "Art Styles", path: feature.href },
        ]}
        intro="A style is a curated recipe — the lighting, texture, palette, and mood that make a look feel like itself. Tap one and the same idea is transformed, no prompt-writing skill required."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Why styles beat writing prompts
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Getting a specific look out of an AI model usually means describing
              lighting, film stock, brushwork, and colour grading in careful
              detail. Styles collapse all of that into a single tap. Type a plain
              idea — “a fox in a forest” — then compare it in Realism, Anime, and
              Cinematic to see three completely different, polished results from
              the same words.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Because styles are consistent recipes, they’re also the easiest way
              to keep a series of images looking like they belong together — ideal
              for a themed feed, a moodboard, or a set of matching avatars.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Pair styles with</h3>
            <CheckList
              className="mt-4"
              items={[
                "The AI image generator for original art",
                "Reference photos to keep a subject consistent",
                "Enhance Prompt for extra descriptive detail",
                "Regeneration to explore variations of a look",
              ]}
            />
            <Button
              href="/features/ai-image-generator"
              variant="secondary"
              className="mt-6 w-full justify-center"
            >
              Open the image generator
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The collection"
          title="Ten styles, ten distinct moods"
          description="Each one reshapes your result — here's how they feel and when to reach for them."
        />
        <div className="mt-12">
          <StyleGrid detailed />
        </div>
      </Section>

      <CTA
        title="Try every style free"
        description="Download Photix and see your ideas in ten different looks with a single tap."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
