/**
 * Central site configuration. Change these constants to point the marketing
 * site at the real production domain, App Store listing, and support inbox.
 */

// Production canonical origin (no trailing slash). Used for canonical URLs,
// sitemap, robots, and absolute OpenGraph image resolution.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://photix.app";

export const SITE_NAME = "Photix";
export const SITE_TAGLINE = "Create Anything You Imagine";
export const SITE_DESCRIPTION =
  "Photix is an AI image generator, photo editor, and avatar maker for iPhone and iPad. Turn a text prompt or a selfie into share-ready artwork in seconds — no design skills or prompts required.";

// TODO: replace with the live App Store listing URL once available.
export const APP_STORE_URL =
  "https://apps.apple.com/app/photix-ai-image-generator/id0000000000";

export const SUPPORT_EMAIL = "support@photix.app";

// Social proof figures surfaced inside the app (kept in sync with PRODUCT_STORY).
export const RATING = "4.8";
export const USERS = "2M+";

export const TWITTER_HANDLE = "@photixapp";

export const ORG = {
  name: "Photix",
  legalName: "Photix — part of the AI Journey app family",
  logo: `${SITE_URL}/logo.jpg`,
};

/** Primary navigation shown in the header and footer. */
export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Avatar Ideas", href: "/avatar-ideas" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "All Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Avatar Ideas", href: "/avatar-ideas" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "AI Image Generator", href: "/features/ai-image-generator" },
      { label: "AI Photo Editor", href: "/features/ai-photo-editor" },
      { label: "AI Avatar Maker", href: "/features/ai-avatar" },
      { label: "Art Styles", href: "/features/art-styles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
