/**
 * Marketing content for Photix.
 *
 * This module holds only the NON-translatable skeleton — slugs, hrefs,
 * screenshot data, emojis, and outbound URLs — plus `getContent(locale)`,
 * which zips that skeleton together with the translated strings from the i18n
 * dictionaries into the typed structures the pages and components consume.
 *
 * Style names (Realism, Anime, Cyberpunk…), avatar category names, and avatar
 * template names mirror literal labels shown inside the app's own UI, so they
 * stay in English across every locale — only their descriptive prose is
 * translated. Internal `href`s stay root-relative here; components
 * locale-prefix them at render time via `localizedPath`.
 */

import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/* -------------------------------------------------------------------------- */
/*  Screenshots (non-translatable)                                           */
/* -------------------------------------------------------------------------- */

export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export const SHOTS: Record<string, Shot> = {
  generateHero: {
    src: "/shots/screen-0.jpg",
    alt: "Photix AI Generate screen turning the prompt 'castle floating above the clouds during sunset' into artwork, with elven princess and robotic dragon examples",
    caption: "Type a prompt and get stunning art instantly",
  },
  editLook: {
    src: "/shots/screen-1.jpg",
    alt: "Photix AI Edit transforming a selfie step by step — adding curly blond hair, then a red jacket, then a neon night scene",
    caption: "Restyle a selfie step by step with plain language",
  },
  editStyle: {
    src: "/shots/screen-2.jpg",
    alt: "Photix changing a man's portrait to flowing hair in a neon environment using an AI edit",
    caption: "Change hairstyles, outfits, and scenes in seconds",
  },
  avatar: {
    src: "/shots/screen-3.jpg",
    alt: "Photix AI Avatar turning a selfie into a fantasy elf portrait in a magical forest",
    caption: "Turn any selfie into a themed AI portrait",
  },
  editCombine: {
    src: "/shots/screen-4.jpg",
    alt: "Photix AI Edit combining a portrait and a motorbike photo into one cinematic image from a text description",
    caption: "Blend two reference photos into one perfect image",
  },
  generateUi: {
    src: "/shots/screen-5.jpg",
    alt: "Photix AI Photo Generator with a magical forest prompt and a gallery of art styles including Realism, Anime, Fantasy, and Cinematic",
    caption: "One-tap art styles do the prompt engineering for you",
  },
};

export const SHOT_ORDER: Shot[] = [
  SHOTS.generateHero,
  SHOTS.generateUi,
  SHOTS.avatar,
  SHOTS.editLook,
  SHOTS.editStyle,
  SHOTS.editCombine,
];

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export type Feature = {
  slug: string;
  href: string;
  eyebrow: string;
  name: string;
  tab: string;
  tagline: string;
  summary: string;
  shot: Shot;
  keywords: string[];
};

export type ArtStyle = { name: string; feel: string; use: string };

export type AvatarCategory = {
  name: string;
  emoji: string;
  blurb: string;
  templates: string[];
};

export type UseCase = {
  slug: string;
  title: string;
  audience: string;
  problem: string;
  solution: string;
  example: string;
  feature: string;
  featureHref: string;
};

export type Faq = { q: string; a: string };

export type CompanionApp = { name: string; what: string; emoji: string; href: string };

/* -------------------------------------------------------------------------- */
/*  Non-translatable skeleton                                                 */
/* -------------------------------------------------------------------------- */

const FEATURE_SKELETON: { slug: string; href: string; shot: Shot }[] = [
  { slug: "ai-image-generator", href: "/features/ai-image-generator", shot: SHOTS.generateUi },
  { slug: "ai-photo-editor", href: "/features/ai-photo-editor", shot: SHOTS.editStyle },
  { slug: "ai-avatar", href: "/features/ai-avatar", shot: SHOTS.avatar },
  { slug: "art-styles", href: "/features/art-styles", shot: SHOTS.generateHero },
];

/** Style names mirror the app's real UI labels, so they stay in English. */
const ART_STYLE_NAMES = [
  "Realism",
  "Fantasy",
  "Anime",
  "Cinematic",
  "Steampunk",
  "Cyberpunk",
  "Vintage",
  "Paint",
  "Illustration",
  "Pixel Art",
];

const AVATAR_CATEGORY_SKELETON: { name: string; emoji: string; templates: string[] }[] = [
  {
    name: "AI Avatars",
    emoji: "🦸",
    templates: [
      "Superhero",
      "Fantasy Princess",
      "Anime Hero",
      "Disney Style",
      "Cyberpunk",
      "Steampunk Explorer",
      "Mystic Sorcerer",
      "Futuristic Cyborg",
      "Galactic Warrior",
      "Anime Princess",
    ],
  },
  {
    name: "Fashion",
    emoji: "👗",
    templates: [
      "High Fashion",
      "Street Style",
      "80s Retro",
      "Boho",
      "Futuristic",
      "Casual Chic",
      "Vintage Glamour",
      "Chic Minimalist",
      "Luxury Evening",
      "Bohemian Sunset",
    ],
  },
  {
    name: "Historical",
    emoji: "🏛️",
    templates: [
      "Medieval",
      "Ancient Egypt",
      "Greek Mythology",
      "Noir Film",
      "Western",
      "Renaissance Noble",
      "Victorian",
      "Samurai",
      "Rococo",
      "Viking",
    ],
  },
  {
    name: "Lifestyle",
    emoji: "🌿",
    templates: [
      "Cozy Smile",
      "Street Style",
      "Lakeside Warmth",
      "City Greenery",
      "Casual Confidence",
      "Autumn Charm",
    ],
  },
];

const USE_CASE_SKELETON: { slug: string; featureHref: string }[] = [
  { slug: "social-media-content", featureHref: "/features/ai-image-generator" },
  { slug: "profile-pictures", featureHref: "/features/ai-avatar" },
  { slug: "quick-photo-edits", featureHref: "/features/ai-photo-editor" },
  { slug: "concept-art-moodboards", featureHref: "/features/art-styles" },
  { slug: "themed-avatars-friends", featureHref: "/features/ai-avatar" },
  { slug: "learning-ai-art", featureHref: "/features/ai-image-generator" },
];

const HOW_STEPS = ["01", "02", "03", "04"];

const COMPANION_SKELETON: { name: string; emoji: string; href: string }[] = [
  { name: "FxAI", emoji: "✨", href: "https://fxai.app" },
  { name: "Videx", emoji: "🎬", href: "https://videx.app" },
  { name: "SwapTo", emoji: "🔄", href: "https://swapto.app" },
  { name: "PicAlive", emoji: "🫧", href: "https://picalive.app" },
];

export const PORTFOLIO = {
  name: "AI Photo Journey",
  url: "https://ai-photo-journey.com",
  pageUrl: "https://ai-photo-journey.com/apps/photix",
};

/* -------------------------------------------------------------------------- */
/*  Localized content assembly                                                */
/* -------------------------------------------------------------------------- */

export type SiteContent = {
  features: Feature[];
  artStyles: ArtStyle[];
  avatarCategories: AvatarCategory[];
  useCases: UseCase[];
  benefits: { title: string; body: string }[];
  problemsSolved: string[];
  howItWorks: { step: string; title: string; body: string }[];
  companionApps: CompanionApp[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { category: string; items: Faq[] }[];
  allFaqs: Faq[];
};

export function getContent(locale: Locale): SiteContent {
  const c = getDictionary(locale).content;

  const features: Feature[] = FEATURE_SKELETON.map((s, i) => ({ ...s, ...c.features[i] }));

  const artStyles: ArtStyle[] = ART_STYLE_NAMES.map((name, i) => ({
    name,
    ...c.artStyles[i],
  }));

  const avatarCategories: AvatarCategory[] = AVATAR_CATEGORY_SKELETON.map((s, i) => ({
    ...s,
    blurb: c.avatarCategories[i].blurb,
  }));

  const faqs = c.faqs.map((g) => ({ category: g.category, items: [...g.items] }));

  return {
    features,
    artStyles,
    avatarCategories,
    useCases: USE_CASE_SKELETON.map((s, i) => ({ ...s, ...c.useCases[i] })),
    benefits: [...c.benefits],
    problemsSolved: [...c.problemsSolved],
    howItWorks: c.howItWorks.map((h, i) => ({ step: HOW_STEPS[i], ...h })),
    companionApps: COMPANION_SKELETON.map((s, i) => ({ ...s, what: c.companionApps[i].what })),
    testimonials: [...c.testimonials],
    faqs,
    allFaqs: faqs.flatMap((g) => g.items),
  };
}

export function getFeature(slug: string, locale: Locale): Feature | undefined {
  return getContent(locale).features.find((f) => f.slug === slug);
}
