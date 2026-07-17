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
  "https://apps.apple.com/us/app/image-generator-photix/id6745130814";

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

// Primary nav and footer link labels are translated; see i18n/dictionaries and
// components/SiteHeader.tsx + Footer.tsx for the localized link structure.
