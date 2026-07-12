/**
 * Marketing content for Photix, extracted and expanded from PRODUCT_STORY.md.
 * Kept in one typed module so pages, schema, and internal links stay in sync.
 */

/* -------------------------------------------------------------------------- */
/*  Screenshots                                                               */
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
/*  Core creative modes / feature pages                                       */
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

export const FEATURES: Feature[] = [
  {
    slug: "ai-image-generator",
    href: "/features/ai-image-generator",
    eyebrow: "AI Generate",
    name: "AI Image Generator",
    tab: "AI Generate",
    tagline: "Turn a text description into original artwork",
    summary:
      "Describe anything — a scene, a character, a mood — pick a style, and Photix generates a brand-new, high-resolution image in seconds. Add up to two reference photos and let the built-in prompt enhancer fill in the details.",
    shot: SHOTS.generateUi,
    keywords: [
      "AI image generator",
      "text to image app",
      "AI art generator iPhone",
      "prompt to image",
    ],
  },
  {
    slug: "ai-photo-editor",
    href: "/features/ai-photo-editor",
    eyebrow: "AI Edit",
    name: "AI Photo Editor",
    tab: "AI Edit",
    tagline: "Edit any photo just by describing the change",
    summary:
      "Upload a photo and type what you want — 'add a red beret', 'make it autumn', 'change the background to Paris'. Each edit stacks on the last, so you can sculpt an image conversationally without ever touching a layer or slider.",
    shot: SHOTS.editStyle,
    keywords: [
      "AI photo editor",
      "edit photo with text",
      "AI photo editing app",
      "change background AI",
    ],
  },
  {
    slug: "ai-avatar",
    href: "/features/ai-avatar",
    eyebrow: "AI Avatar",
    name: "AI Avatar Maker",
    tab: "AI Avatar",
    tagline: "Transform a selfie into themed AI portraits",
    summary:
      "Pick a template — Superhero, Renaissance Noble, Anime Hero, High Fashion — add a selfie, and Photix returns a polished, share-ready portrait. Face detection checks your photo up front so you never waste a generation.",
    shot: SHOTS.avatar,
    keywords: [
      "AI avatar generator",
      "AI selfie app",
      "profile picture maker",
      "AI portrait generator",
    ],
  },
  {
    slug: "art-styles",
    href: "/features/art-styles",
    eyebrow: "Styles",
    name: "AI Art Styles",
    tab: "Styles",
    tagline: "Ten one-tap looks that reshape every result",
    summary:
      "From photorealistic Realism to cel-shaded Anime, glowing Fantasy, neon Cyberpunk, and retro Pixel Art — each style is a curated recipe. Tap one and the same idea takes on a completely different feel, no prompt-writing needed.",
    shot: SHOTS.generateHero,
    keywords: [
      "AI art styles",
      "anime AI generator",
      "cyberpunk AI art",
      "AI style transfer app",
    ],
  },
];

export function getFeature(slug: string): Feature | undefined {
  return FEATURES.find((f) => f.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Art styles                                                                */
/* -------------------------------------------------------------------------- */

export type ArtStyle = {
  name: string;
  feel: string;
  use: string;
};

export const ART_STYLES: ArtStyle[] = [
  {
    name: "Realism",
    feel: "Photorealistic, natural lighting, ultra-HD detail.",
    use: "Product mockups, lifelike portraits, believable scenes.",
  },
  {
    name: "Fantasy",
    feel: "Glowing magic, mythical creatures, ethereal atmosphere.",
    use: "Book covers, D&D characters, dreamlike worlds.",
  },
  {
    name: "Anime",
    feel: "Cel-shaded, bold outlines, expressive characters.",
    use: "Anime-style avatars, manga panels, fan art.",
  },
  {
    name: "Cinematic",
    feel: "Dramatic lighting, film grain, widescreen mood.",
    use: "Movie-poster looks, moody storytelling frames.",
  },
  {
    name: "Steampunk",
    feel: "Brass gears, Victorian machinery, ornate detail.",
    use: "Retro-industrial characters and inventive worlds.",
  },
  {
    name: "Cyberpunk",
    feel: "Neon light, high-tech, retro-futuristic cityscapes.",
    use: "Futuristic avatars, sci-fi scenes, gaming art.",
  },
  {
    name: "Vintage",
    feel: "Grainy film, faded tones, nostalgic retro photo look.",
    use: "Throwback portraits and analog-inspired imagery.",
  },
  {
    name: "Paint",
    feel: "Hand-drawn brushstrokes, warm painterly tones.",
    use: "Fine-art portraits and gallery-style pieces.",
  },
  {
    name: "Illustration",
    feel: "Bold outlines, comic and halftone shading.",
    use: "Stickers, comic panels, playful graphics.",
  },
  {
    name: "Pixel Art",
    feel: "8-bit retro-game blocks and limited palettes.",
    use: "Game sprites, retro icons, nostalgic pixel scenes.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Avatar template categories                                                */
/* -------------------------------------------------------------------------- */

export type AvatarCategory = {
  name: string;
  emoji: string;
  blurb: string;
  templates: string[];
};

export const AVATAR_CATEGORIES: AvatarCategory[] = [
  {
    name: "AI Avatars",
    emoji: "🦸",
    blurb: "Heroic, fantastical, and sci-fi personas built from a single selfie.",
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
    blurb: "Editorial, runway, and lifestyle looks for a standout profile picture.",
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
    blurb: "See yourself across the ages, from Ancient Egypt to the Renaissance.",
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
    blurb: "Warm, natural, everyday portraits that still feel elevated.",
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

/* -------------------------------------------------------------------------- */
/*  Use cases                                                                  */
/* -------------------------------------------------------------------------- */

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

export const USE_CASES: UseCase[] = [
  {
    slug: "social-media-content",
    title: "Scroll-stopping social media content",
    audience: "Creators & social media users",
    problem:
      "You need fresh, on-trend visuals for Instagram, TikTok, and Stories, but stock photos look generic and design tools take too long.",
    solution:
      "Generate original art or restyle your own photos with one-tap styles, then share straight to any app from the native share sheet.",
    example:
      "Type 'neon skyline reflected in a rainy street, cinematic' and post the result to your Story in under a minute.",
    feature: "AI Image Generator",
    featureHref: "/features/ai-image-generator",
  },
  {
    slug: "profile-pictures",
    title: "A profile picture that isn't just a filter",
    audience: "Anyone refreshing their PFP",
    problem:
      "Everyone uses the same filters. You want a profile picture that actually looks like a different, elevated version of you.",
    solution:
      "Choose an avatar template, add a selfie, and get a themed portrait — superhero, anime, high fashion, or Renaissance noble — ready for any platform.",
    example:
      "Turn a phone selfie into a High Fashion editorial headshot for LinkedIn, or an Anime Hero avatar for Discord.",
    feature: "AI Avatar Maker",
    featureHref: "/features/ai-avatar",
  },
  {
    slug: "quick-photo-edits",
    title: "Quick photo edits without Photoshop",
    audience: "Everyday photo editors",
    problem:
      "You want to change one thing in a photo — an outfit, the background, the lighting — but pro editors are overwhelming and slow.",
    solution:
      "Describe the change in plain language and Photix applies it. Stack edits one after another until the photo is exactly right.",
    example:
      "Upload a portrait and type 'add a red beret and change the background to Paris', then 'make it look like autumn'.",
    feature: "AI Photo Editor",
    featureHref: "/features/ai-photo-editor",
  },
  {
    slug: "concept-art-moodboards",
    title: "Concept art & moodboards on the go",
    audience: "Hobbyists, designers, and writers",
    problem:
      "You have a visual idea for a story, game, or project but no way to sketch it quickly while it's fresh.",
    solution:
      "Turn a sentence into concept art in any of ten styles, regenerate for variations, and save the ones that fit your board.",
    example:
      "Explore 'ancient temple reclaimed by jungle' in Fantasy, Cinematic, and Illustration styles side by side.",
    feature: "AI Art Styles",
    featureHref: "/features/art-styles",
  },
  {
    slug: "themed-avatars-friends",
    title: "Themed avatars for friend groups & teams",
    audience: "Communities and small teams",
    problem:
      "You want a matching set of avatars for a group chat, gaming clan, or team page — but hiring an illustrator isn't realistic.",
    solution:
      "Everyone picks the same avatar template and adds their own selfie for a cohesive, on-brand set of portraits in minutes.",
    example:
      "A gaming clan all generate Galactic Warrior avatars; a startup team all use Chic Minimalist headshots.",
    feature: "AI Avatar Maker",
    featureHref: "/features/ai-avatar",
  },
  {
    slug: "learning-ai-art",
    title: "Learning AI art without the learning curve",
    audience: "AI-curious newcomers",
    problem:
      "You've heard about AI art but prompt engineering, models, and settings feel intimidating and technical.",
    solution:
      "Curated styles, ready-made templates, and an Enhance Prompt toggle mean you get great results without knowing how any of it works.",
    example:
      "Tap the Cinematic style, type a few words, toggle Enhance Prompt, and let Photix write the detailed prompt for you.",
    feature: "AI Image Generator",
    featureHref: "/features/ai-image-generator",
  },
];

/* -------------------------------------------------------------------------- */
/*  Benefits & problems solved                                                */
/* -------------------------------------------------------------------------- */

export const BENEFITS: { title: string; body: string }[] = [
  {
    title: "No skills required",
    body: "Curated styles, avatar templates, and automatic prompt enhancement mean impressive results without design talent or prompt-writing know-how.",
  },
  {
    title: "Everything in one app",
    body: "Generate, edit, and avatar creation live under one coherent interface — most apps do only one of the three.",
  },
  {
    title: "Conversational editing",
    body: "Edits stack on each other, so you refine an image step by step in plain language instead of wrestling with layers and tools.",
  },
  {
    title: "Results in seconds",
    body: "A friendly countdown keeps you comfortable while the AI works, and finished images are one tap from your photo library or a share sheet.",
  },
  {
    title: "Face-aware avatars",
    body: "Photix confirms a face is present before generating, so you never waste a creation on an unusable photo.",
  },
  {
    title: "Made for iPhone and iPad",
    body: "A polished, dark-themed interface that adapts cleanly from a phone in your hand to a larger iPad canvas.",
  },
];

export const PROBLEMS_SOLVED: string[] = [
  "“I have an idea but can't draw or design.”",
  "“I want a cool profile picture that isn't just a filter.”",
  "“I want to edit a photo but Photoshop is overwhelming.”",
  "“I don't know how to write good AI prompts.”",
  "“I want results fast, on my phone, ready to share.”",
];

/* -------------------------------------------------------------------------- */
/*  How it works                                                              */
/* -------------------------------------------------------------------------- */

export const HOW_IT_WORKS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Describe or choose",
    body: "Type an idea, pick a one-tap style, or select an avatar template. No blank page — every mode gives you a starting point.",
  },
  {
    step: "02",
    title: "Add a photo (optional)",
    body: "Attach a selfie or up to two reference photos to guide the result, or skip straight to generating from text alone.",
  },
  {
    step: "03",
    title: "Tap Generate",
    body: "A friendly '~10 seconds remaining' countdown reassures you while Photix enhances the prompt and runs the AI model.",
  },
  {
    step: "04",
    title: "Refine, save, or share",
    body: "Zoom in, regenerate for new variants, compare them in the history strip, then download to Photos or share anywhere.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Companion apps (AI Journey ecosystem)                                     */
/* -------------------------------------------------------------------------- */

export const COMPANION_APPS: {
  name: string;
  what: string;
  emoji: string;
  href: string;
}[] = [
  { name: "FxAI", what: "AI Photo Enhancer", emoji: "✨", href: "https://fxai.app" },
  { name: "Videx", what: "AI Video Generator", emoji: "🎬", href: "https://videx.app" },
  { name: "SwapTo", what: "AI Face Swap", emoji: "🔄", href: "https://swapto.app" },
  { name: "PicAlive", what: "Photo to Video", emoji: "🫧", href: "https://picalive.app" },
];

/** The AI Photo Journey company hub that links to every app in the family. */
export const PORTFOLIO = {
  name: "AI Photo Journey",
  url: "https://ai-photo-journey.com",
  pageUrl: "https://ai-photo-journey.com/apps/photix",
};

/* -------------------------------------------------------------------------- */
/*  Testimonials (illustrative, reflecting the app's stated 4.8 rating)       */
/* -------------------------------------------------------------------------- */

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "I made a superhero version of myself for my profile in about thirty seconds. My whole group chat downloaded it after.",
    name: "Maya R.",
    role: "Content creator",
  },
  {
    quote:
      "I finally edited a photo without opening Photoshop. I just typed what I wanted changed and it worked.",
    name: "Daniel K.",
    role: "Small business owner",
  },
  {
    quote:
      "The styles do all the hard work. I type a few words, tap Cinematic, and it looks like a movie poster.",
    name: "Priya S.",
    role: "Hobbyist artist",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

export const FAQS: { category: string; items: Faq[] }[] = [
  {
    category: "Getting started",
    items: [
      {
        q: "What is Photix?",
        a: "Photix is an iOS app that lets anyone create, transform, and restyle images with AI. From a single text description or a photo, you can generate original artwork, edit pictures by describing changes, and turn selfies into themed avatars — all in a friendly, tap-and-type interface with no design skills required.",
      },
      {
        q: "Do I need any design or prompt-writing experience?",
        a: "No. Photix is built for people with no design background. Ten curated art styles and dozens of avatar templates give you great results out of the box, and the Enhance Prompt toggle can automatically enrich your description so you never have to learn 'prompt engineering'.",
      },
      {
        q: "Is Photix free?",
        a: "Yes — Photix is free to download and use with usage limits, ads, and a small watermark on saved images. The Photix PRO subscription unlocks unlimited, ad-free, watermark-free creation with priority processing.",
      },
      {
        q: "Which devices does Photix support?",
        a: "Photix runs on iPhone and iPad. The layout adapts to larger screens so you get a comfortable canvas on iPad as well as your phone.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. Photix has no logins or accounts. You can start creating immediately, and your PRO status is stored on your device.",
      },
    ],
  },
  {
    category: "Features",
    items: [
      {
        q: "How does the AI image generator work?",
        a: "Open the AI Generate tab, type a description of what you want, optionally tap one of the ten art styles and attach up to two reference photos, then tap Generate. Photix enhances your prompt, runs the AI model, and returns a high-resolution image you can regenerate, download, or share.",
      },
      {
        q: "Can I edit my own photos?",
        a: "Yes. In AI Edit you set a photo and describe the change — for example, 'add a red hat' or 'change the background to a beach'. Each edit builds on the previous result, so you can stack changes and refine an image conversationally.",
      },
      {
        q: "How do AI avatars work?",
        a: "In AI Avatar you browse template galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — pick a look, and add a selfie. Photix detects a face to make sure your photo will work, pre-fills a descriptive prompt you can tweak, and generates a themed portrait.",
      },
      {
        q: "Can I combine two photos into one image?",
        a: "Yes. You can attach up to two reference photos in AI Generate and AI Edit, so Photix can blend or transform them together from a single description — for example, placing a person into an entirely new scene.",
      },
      {
        q: "What art styles are included?",
        a: "Ten styles ship with the app: Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art. Each is a one-tap recipe that reshapes the same idea into a completely different look.",
      },
    ],
  },
  {
    category: "Photix PRO & billing",
    items: [
      {
        q: "What does Photix PRO include?",
        a: "PRO removes watermarks and ads, lifts usage limits on generations and multi-step edits, and gives you priority, faster processing. It turns Photix into unlimited, uninterrupted, watermark-free creation.",
      },
      {
        q: "How much does Photix PRO cost?",
        a: "Photix is free to download and use. PRO is an optional upgrade with affordable weekly, quarterly, and semi-annual plans starting from a low weekly price, plus a free-trial option. Current prices are shown in the app and localized to your region by the App Store.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. All plans are auto-renewing and can be cancelled anytime from your Apple ID subscription settings. Photix also supports Restore Purchases to re-apply an active subscription on your device.",
      },
      {
        q: "Does my subscription sync across devices?",
        a: "PRO status is stored per device, so there's no cross-device account. You can use Restore Purchases to reactivate an existing subscription on the same device.",
      },
    ],
  },
  {
    category: "Privacy & safety",
    items: [
      {
        q: "Is Photix private?",
        a: "Photix asks for App Tracking Transparency and GDPR/EU consent before any ad tracking, and uses privacy-forward analytics. There are no user accounts, and your PRO status stays on your device. See the Privacy page for details.",
      },
      {
        q: "Are there content safety measures?",
        a: "Yes. A content-safety filter blocks prompts containing explicit or banned terms before they reach the server, with a guidelines message, so the app stays appropriate to use.",
      },
      {
        q: "Will my saved images have a watermark?",
        a: "Images saved or shared on the free tier carry a small Photix watermark. Upgrading to Photix PRO removes the watermark from all your exports.",
      },
    ],
  },
];

/** Flattened FAQ list for FAQPage structured data. */
export const ALL_FAQS: Faq[] = FAQS.flatMap((group) => group.items);
