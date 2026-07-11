import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { PROBLEMS_SOLVED, USE_CASES } from "../lib/content";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { UseCaseCard } from "../components/UseCaseCard";
import { AppStoreButton } from "../components/AppStoreButton";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Use Cases — What You Can Create With Photix",
  description:
    "Real-world ways people use Photix: social media content, profile pictures, quick photo edits, concept art, themed avatars for friend groups, and an easy on-ramp to AI art.",
  path: "/use-cases",
  keywords: [
    "AI art use cases",
    "AI profile picture app",
    "AI content creation",
    "AI photo editing ideas",
  ],
});

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use cases"
        title="What you can create with Photix"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Use Cases", path: "/use-cases" },
        ]}
        intro="Photix is built for everyday people with an idea and a phone. Here are the real scenarios where it shines — and the exact problem it solves in each."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Problems solved"
            title="If you've ever thought one of these, Photix is for you"
            align="center"
          />
          <ul className="mt-10 flex flex-col gap-3">
            {PROBLEMS_SOLVED.map((problem) => (
              <li
                key={problem}
                className="rounded-2xl border border-border bg-card px-6 py-4 text-lg text-muted-strong shadow-soft"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        title="Bring your idea to life"
        description="Whatever you're trying to make, Photix turns it into a share-ready image in seconds. Download free."
        secondary={{ label: "Explore features", href: "/features" }}
      />
    </>
  );
}
