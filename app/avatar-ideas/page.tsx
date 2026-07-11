import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../lib/seo";
import { SITE_URL } from "../lib/site";
import { AVATAR_CATEGORIES, SHOTS } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { ArrowRightIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "AI Avatar Ideas — Styles & Inspiration for Your Profile Picture",
  description:
    "Not sure which AI avatar to make? Browse popular avatar ideas — superhero, anime, high fashion, Renaissance, cyberpunk and more — plus picks by occasion and tips for the best selfie. Create yours free in Photix.",
  path: "/avatar-ideas",
  keywords: [
    "AI avatar ideas",
    "AI profile picture ideas",
    "AI avatar styles",
    "profile picture inspiration",
    "cool avatar ideas",
  ],
});

const totalTemplates = AVATAR_CATEGORIES.reduce(
  (sum, category) => sum + category.templates.length,
  0,
);

/** Curated, described persona ideas — the substance a plain template list lacks. */
const IDEAS: { name: string; vibe: string; greatFor: string }[] = [
  {
    name: "Superhero",
    vibe: "Cape, dramatic lighting, and comic-book energy that turns a selfie into a cover shot.",
    greatFor: "Bold profile pictures and gaming handles",
  },
  {
    name: "Anime Hero",
    vibe: "Cel-shaded and expressive, like you stepped out of your favorite series.",
    greatFor: "Discord, TikTok, and fan communities",
  },
  {
    name: "High Fashion",
    vibe: "Editorial studio lighting and runway styling for a polished, elevated look.",
    greatFor: "LinkedIn, portfolios, and headshots",
  },
  {
    name: "Renaissance Noble",
    vibe: "Oil-painting grandeur with period wardrobe and soft, painterly light.",
    greatFor: "A witty, gallery-worthy PFP",
  },
  {
    name: "Cyberpunk",
    vibe: "Neon glow, rain-slick streets, and a high-tech, retro-futuristic edge.",
    greatFor: "Sci-fi fans and gaming avatars",
  },
  {
    name: "Fantasy Princess",
    vibe: "Ethereal magic, glowing detail, and a storybook atmosphere.",
    greatFor: "Fantasy lovers and cosplay-style portraits",
  },
  {
    name: "Samurai",
    vibe: "Feudal-Japan armor and cinematic mood for a striking, powerful portrait.",
    greatFor: "A dramatic, one-of-a-kind avatar",
  },
  {
    name: "Street Style",
    vibe: "Urban backdrop, candid confidence, and a modern everyday wardrobe.",
    greatFor: "Cool, approachable social profiles",
  },
  {
    name: "Galactic Warrior",
    vibe: "Armored and otherworldly, ready for battle among the stars.",
    greatFor: "Gaming clans and sci-fi communities",
  },
];

/** Occasion-driven picks capture long-tail “avatar for X” intent. */
const BY_OCCASION: { title: string; body: string; styles: string }[] = [
  {
    title: "Professional & LinkedIn",
    body: "Keep it clean and confident with a studio-lit, well-dressed portrait that still looks like you.",
    styles: "High Fashion · Chic Minimalist · Casual Confidence",
  },
  {
    title: "Gaming & Discord",
    body: "Go bold and characterful — a persona that pops in a tiny avatar circle and matches your handle.",
    styles: "Cyberpunk · Galactic Warrior · Anime Hero",
  },
  {
    title: "Dating profiles",
    body: "Warm, natural, and elevated — a version of you that feels genuine and approachable.",
    styles: "Cozy Smile · Street Style · Casual Confidence",
  },
  {
    title: "Group & team avatars",
    body: "Have everyone pick the same template and add their own selfie for a cohesive, on-brand set.",
    styles: "Chic Minimalist · Galactic Warrior · Superhero",
  },
  {
    title: "Seasonal & holidays",
    body: "Refresh your picture for the season with rich wardrobe, warm tones, and festive styling.",
    styles: "Autumn Charm · Vintage Glamour · Luxury Evening",
  },
  {
    title: "Just for fun",
    body: "See yourself across the ages and universes — history, myth, and sci-fi are all one tap away.",
    styles: "Renaissance Noble · Ancient Egypt · Mystic Sorcerer",
  },
];

const SELFIE_TIPS = [
  "Use a clear, front-facing photo where your face is well lit.",
  "Skip sunglasses, hats, or heavy shadows that hide your features.",
  "One face per photo gives the cleanest, most accurate result.",
  "Higher-resolution selfies give the AI more detail to work with.",
  "Try a few templates — the same selfie can shine across very different themes.",
  "A neutral expression and simple background transform most reliably.",
];

const faqs = [
  {
    q: "How do I choose an AI avatar style?",
    a: "Start from where you'll use it. Want a professional headshot? Try High Fashion or Chic Minimalist. Building a gaming identity? Go for Cyberpunk or Galactic Warrior. When in doubt, generate two or three styles from the same selfie and keep your favorite.",
  },
  {
    q: "What's a good AI avatar for a professional profile?",
    a: "Studio-lit, well-styled looks read best professionally. High Fashion, Chic Minimalist, and Casual Confidence keep your likeness clear while giving you a polished, put-together portrait for LinkedIn or a portfolio.",
  },
  {
    q: "Can everyone in a group use the same avatar style?",
    a: "Yes — that's one of the most popular ideas. Have each person pick the same template and add their own selfie, and you get a cohesive set of matching avatars for a group chat, gaming clan, or team page.",
  },
  {
    q: "Do I need to write a prompt to make an avatar?",
    a: "No. Every template comes with a descriptive prompt already written for you. Just pick a look and add a selfie — you can optionally tweak the prompt, but you never have to start from a blank page.",
  },
];

export default function AvatarIdeasPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "Photix AI Avatar Maker",
          description:
            "Turn a selfie into themed AI avatar portraits on iPhone and iPad.",
          url: `${SITE_URL}/avatar-ideas`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        eyebrow="Avatar Ideas"
        title="AI avatar ideas for a standout profile picture"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Avatar Ideas", path: "/avatar-ideas" },
        ]}
        intro="Not sure which avatar to make? Here's the inspiration — popular styles, picks for every occasion, and tips for the best selfie. Pick a look, add a photo, and Photix does the rest."
        actions={<AppStoreButton size="md" />}
      />

      {/* How to choose */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              A better profile picture in three taps
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Every idea below is a ready-made template. There&apos;s no prompt to
              write and no design skill required — choose a style, add a selfie,
              and you&apos;ll have a polished, themed portrait in seconds. Not sure
              where to start? Pick by the vibe you want or by where you&apos;ll use
              it.
            </p>
            <CheckList
              items={[
                `${totalTemplates}+ templates across themed categories`,
                "Face-aware — it checks your selfie before generating",
                "Editable prompts, though you never have to touch them",
                "One-tap save and share to any app",
              ]}
            />
            <Button href="/features/ai-avatar" variant="secondary" className="w-fit">
              How the avatar maker works
            </Button>
          </div>
          <div className="flex justify-center">
            <Screenshot
              shot={SHOTS.avatar}
              priority
              width={300}
              className="w-[240px] sm:w-[300px]"
            />
          </div>
        </div>
      </Section>

      {/* Popular ideas */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Popular ideas"
          title="Avatar styles people love"
          description="A quick tour of the most popular looks — what each one feels like, and where it shines."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IDEAS.map((idea) => (
            <div key={idea.name} className="card card-hover flex flex-col gap-3 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{idea.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{idea.vibe}</p>
              <p className="mt-auto text-sm text-muted-strong">
                <span className="font-medium text-foreground">Great for: </span>
                {idea.greatFor}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* By occasion */}
      <Section>
        <SectionHeading
          eyebrow="By occasion"
          title="Find an avatar for where you'll use it"
          description="Match the look to the moment — a picture that fits the profile it's going on."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BY_OCCASION.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-auto text-sm font-medium text-brand">{item.styles}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Browse all categories */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="All categories"
          title="Explore every themed gallery"
          description="These ideas are just the start. Every category is packed with more templates inside the app."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {AVATAR_CATEGORIES.map((category) => (
            <div key={category.name} className="card flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {category.name}
                </h3>
                <span className="ml-auto text-sm text-muted">
                  {category.templates.length} looks
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{category.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/features/ai-avatar"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
          >
            See the full avatar maker
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Selfie tips */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Best results"
              title="How to get the best AI avatar"
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">
              The template does the creative work — your selfie just needs to give
              it a clear starting point. A few simple habits go a long way.
            </p>
          </div>
          <CheckList items={SELFIE_TIPS} className="lg:mt-4" />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="AI avatar idea questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <CTA
        title="Make your AI avatar free"
        description="Download Photix, pick a look, and turn a selfie into a share-ready portrait in seconds."
        secondary={{ label: "About the avatar maker", href: "/features/ai-avatar" }}
      />
    </>
  );
}
