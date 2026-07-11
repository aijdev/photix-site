import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SUPPORT_EMAIL } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";
import {
  ShieldIcon,
  FaceIcon,
  MailIcon,
  CheckIcon,
} from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Privacy — How Photix Handles Your Data",
  description:
    "An overview of privacy in Photix: no accounts or logins, explicit tracking and GDPR consent, a content-safety filter, and privacy-forward analytics. Learn how your data is handled.",
  path: "/privacy",
  keywords: ["Photix privacy", "AI app privacy", "app tracking transparency"],
});

const PRINCIPLES = [
  {
    icon: <FaceIcon className="h-6 w-6" />,
    title: "No accounts, no logins",
    body: "Photix has no user accounts, profiles, or passwords. You can start creating immediately, and there's no personal profile to manage or leak. Your Photix PRO status is stored on your device.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Consent before tracking",
    body: "Before any ad tracking, Photix presents Apple's App Tracking Transparency prompt and a GDPR/EU consent flow, so you decide what you're comfortable with up front.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "A content-safety filter",
    body: "Prompts containing explicit or banned terms are blocked with a guidelines message before they're sent, helping keep the experience appropriate for everyone.",
  },
  {
    icon: <MailIcon className="h-6 w-6" />,
    title: "Privacy-forward analytics",
    body: "Usage analytics are handled with privacy in mind, including an EU analytics endpoint. Analytics help improve the app; they aren't a profile of you sold on.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy at Photix"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
        intro="Photix is designed to be creative and low-friction without asking for more than it needs. Here's a plain-language overview of how the app approaches your privacy."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-3 card p-7"
            >
              <span className="icon-badge h-11 w-11">
                {p.icon}
              </span>
              <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Your photos and creations</h2>
            <p className="leading-relaxed text-muted">
              Photix generates images by calling hosted AI services, so the prompt
              and any photo you choose to use are processed to produce your result.
              Creations aren’t stored in a personal cloud gallery — once you save an
              image to your device’s photo library, it’s yours to keep and share.
              Free-tier exports carry a small Photix watermark; Photix PRO removes
              it from every image you save or share.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Subscriptions</h2>
            <p className="leading-relaxed text-muted">
              Photix PRO is purchased and managed through your Apple ID. Your
              subscription entitlement is stored per device rather than in a
              cross-device account, and Restore Purchases re-applies an active
              subscription on the same device. Payment is handled entirely by
              Apple — Photix never sees your card details.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Questions about your data</h2>
            <p className="leading-relaxed text-muted">
              This page is a plain-language summary, not the full legal policy. For
              the complete privacy policy, data-handling details, or any specific
              request, email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and the team will help.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Create with confidence"
        description="Download Photix and start creating — no account, no profile, no fuss."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
