/**
 * English dictionary — authoritative source of translatable copy for Photix,
 * and the TYPE source of truth: `type Dictionary = typeof en`. Every other
 * locale must satisfy `Dictionary`, so a missing key fails the build.
 *
 * Structural, non-translatable data (slugs, hrefs, screenshots, style/avatar
 * template names matching real in-app UI) lives in `lib/content.ts`;
 * `getContent(locale)` zips the two together.
 */

export const en = {
  meta: {
    home: {
      title: "Photix — AI Image Generator, Photo Editor & Avatar Maker for iPhone",
      description:
        "Create original AI art from a text prompt, edit photos by describing changes, and turn selfies into themed avatars — all in one iOS app. Download Photix free for iPhone and iPad.",
      keywords: [
        "AI image generator app",
        "AI photo editor iPhone",
        "AI avatar maker",
        "text to image app",
        "AI art generator",
      ],
    },
    features: {
      title: "Features — AI Generate, Edit, Avatars & Art Styles",
      description:
        "Explore every Photix feature: the AI image generator, describe-to-edit photo editor, selfie-to-avatar maker, ten art styles, prompt enhancement, reference photos, and instant sharing.",
      keywords: [
        "AI image app features",
        "AI photo editor features",
        "AI avatar generator",
        "AI art styles",
      ],
    },
    aiImageGenerator: {
      title: "AI Image Generator — Text to Image on iPhone",
      description:
        "Photix's AI image generator turns a text prompt into original, high-resolution art in seconds. Pick from ten styles, enhance your prompt automatically, and add reference photos — no prompt skills needed.",
    },
    aiPhotoEditor: {
      title: "AI Photo Editor — Edit Photos by Describing the Change",
      description:
        "Photix's AI photo editor lets you edit any picture in plain language. Add objects, change outfits, swap backgrounds, and restyle photos step by step — no layers, masks, or Photoshop required.",
    },
    aiAvatar: {
      title: "AI Avatar Maker — Turn Selfies Into Themed Portraits",
      description:
        "Photix's AI avatar maker turns any selfie into a polished, themed portrait — superhero, anime, high fashion, Renaissance noble, and dozens more. Face-aware, editable, and ready to share in one tap.",
    },
    artStyles: {
      title: "AI Art Styles — Realism, Anime, Cyberpunk & More",
      description:
        "Explore the ten one-tap art styles in Photix: Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art. Reshape any idea with a single tap — no prompts.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Answers to common questions about Photix — how the AI image generator, photo editor, and avatar maker work, Photix PRO, privacy and safety, and getting started on iPhone and iPad.",
      keywords: ["Photix FAQ", "AI image app help", "Photix PRO questions"],
    },
    useCases: {
      title: "Use Cases — What You Can Create With Photix",
      description:
        "Real-world ways people use Photix: social media content, profile pictures, quick photo edits, concept art, themed avatars for friend groups, and an easy on-ramp to AI art.",
      keywords: [
        "AI art use cases",
        "AI profile picture app",
        "AI content creation",
        "AI photo editing ideas",
      ],
    },
    about: {
      title: "About Photix — Effortless AI Image Creation",
      description:
        "Photix makes AI-powered image creation effortless for everyone. Learn about our mission, who Photix is for, and the AI Journey family of creativity apps behind it.",
      keywords: ["about Photix", "AI Journey apps", "AI creativity app maker"],
    },
    contact: {
      title: "Contact Photix — Support & Feedback",
      description:
        "Get in touch with the Photix team. Email support, share feedback, or rate Photix on the App Store. We route happy reviews to the App Store and questions straight to our inbox.",
      keywords: ["Photix support", "Photix contact", "Photix feedback"],
    },
    avatarIdeas: {
      title: "AI Avatar Ideas — Styles & Inspiration for Your Profile Picture",
      description:
        "Not sure which AI avatar to make? Browse popular avatar ideas — superhero, anime, high fashion, Renaissance, cyberpunk and more — plus picks by occasion and tips for the best selfie. Create yours free in Photix.",
      keywords: [
        "AI avatar ideas",
        "AI profile picture ideas",
        "AI avatar styles",
        "profile picture inspiration",
        "cool avatar ideas",
      ],
    },
  },

  common: {
    skipToContent: "Skip to content",
    appStoreDownloadOn: "Download on the",
    appStoreName: "App Store",
    appStoreAria: "Download {name} on the App Store",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    homeAria: "{name} home",
    nav: {
      features: "Features",
      avatarIdeas: "Avatar Ideas",
      useCases: "Use Cases",
      faq: "FAQ",
      about: "About",
    },
    footer: {
      tagline:
        "Photix — an AI image generator, photo editor, and avatar maker for iPhone and iPad.",
      productTitle: "Product",
      featuresTitle: "Features",
      companyTitle: "Company",
      moreFrom: "More from AI Photo Journey",
      portfolioLabel: "Portfolio",
      rights: "All rights reserved.",
      links: {
        overview: "Overview",
        allFeatures: "All Features",
        useCases: "Use Cases",
        avatarIdeas: "Avatar Ideas",
        aiImageGenerator: "AI Image Generator",
        aiPhotoEditor: "AI Photo Editor",
        aiAvatarMaker: "AI Avatar Maker",
        artStyles: "Art Styles",
        about: "About",
        faq: "FAQ",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
    },
    ctaDefault: {
      title: "Start creating in seconds",
      description:
        "Download Photix free and turn your first idea into share-ready art today. No account, no design skills — just your imagination.",
    },
    ctaRatedBy: "Rated {rating} by {users} happy users",
    relatedFeatures: {
      eyebrow: "Keep exploring",
      title: "More Photix features",
      description:
        "One app, a whole creative studio. See what else your imagination can do.",
    },
    companion: {
      partOfPre: "Part of",
      partOfPost: "— a family of AI creativity apps for iPhone and iPad.",
    },
    breadcrumbHome: "Home",
    learnMore: "Learn more",
    explore: "Explore",
    useCaseProblemLabel: "The problem — ",
    useCaseSolutionLabel: "With Photix — ",
    greatForLabel: "Great for: ",
  },

  content: {
    features: [
      {
        eyebrow: "AI Generate",
        name: "AI Image Generator",
        tab: "AI Generate",
        tagline: "Turn a text description into original artwork",
        summary:
          "Describe anything — a scene, a character, a mood — pick a style, and Photix generates a brand-new, high-resolution image in seconds. Add up to two reference photos and let the built-in prompt enhancer fill in the details.",
        keywords: [
          "AI image generator",
          "text to image app",
          "AI art generator iPhone",
          "prompt to image",
        ],
      },
      {
        eyebrow: "AI Edit",
        name: "AI Photo Editor",
        tab: "AI Edit",
        tagline: "Edit any photo just by describing the change",
        summary:
          "Upload a photo and type what you want — 'add a red beret', 'make it autumn', 'change the background to Paris'. Each edit stacks on the last, so you can sculpt an image conversationally without ever touching a layer or slider.",
        keywords: [
          "AI photo editor",
          "edit photo with text",
          "AI photo editing app",
          "change background AI",
        ],
      },
      {
        eyebrow: "AI Avatar",
        name: "AI Avatar Maker",
        tab: "AI Avatar",
        tagline: "Transform a selfie into themed AI portraits",
        summary:
          "Pick a template — Superhero, Renaissance Noble, Anime Hero, High Fashion — add a selfie, and Photix returns a polished, share-ready portrait. Face detection checks your photo up front so you never waste a generation.",
        keywords: [
          "AI avatar generator",
          "AI selfie app",
          "profile picture maker",
          "AI portrait generator",
        ],
      },
      {
        eyebrow: "Styles",
        name: "AI Art Styles",
        tab: "Styles",
        tagline: "Ten one-tap looks that reshape every result",
        summary:
          "From photorealistic Realism to cel-shaded Anime, glowing Fantasy, neon Cyberpunk, and retro Pixel Art — each style is a curated recipe. Tap one and the same idea takes on a completely different feel, no prompt-writing needed.",
        keywords: [
          "AI art styles",
          "anime AI generator",
          "cyberpunk AI art",
          "AI style transfer app",
        ],
      },
    ],
    artStyles: [
      { feel: "Photorealistic, natural lighting, ultra-HD detail.", use: "Product mockups, lifelike portraits, believable scenes." },
      { feel: "Glowing magic, mythical creatures, ethereal atmosphere.", use: "Book covers, D&D characters, dreamlike worlds." },
      { feel: "Cel-shaded, bold outlines, expressive characters.", use: "Anime-style avatars, manga panels, fan art." },
      { feel: "Dramatic lighting, film grain, widescreen mood.", use: "Movie-poster looks, moody storytelling frames." },
      { feel: "Brass gears, Victorian machinery, ornate detail.", use: "Retro-industrial characters and inventive worlds." },
      { feel: "Neon light, high-tech, retro-futuristic cityscapes.", use: "Futuristic avatars, sci-fi scenes, gaming art." },
      { feel: "Grainy film, faded tones, nostalgic retro photo look.", use: "Throwback portraits and analog-inspired imagery." },
      { feel: "Hand-drawn brushstrokes, warm painterly tones.", use: "Fine-art portraits and gallery-style pieces." },
      { feel: "Bold outlines, comic and halftone shading.", use: "Stickers, comic panels, playful graphics." },
      { feel: "8-bit retro-game blocks and limited palettes.", use: "Game sprites, retro icons, nostalgic pixel scenes." },
    ],
    avatarCategories: [
      { blurb: "Heroic, fantastical, and sci-fi personas built from a single selfie." },
      { blurb: "Editorial, runway, and lifestyle looks for a standout profile picture." },
      { blurb: "See yourself across the ages, from Ancient Egypt to the Renaissance." },
      { blurb: "Warm, natural, everyday portraits that still feel elevated." },
    ],
    useCases: [
      {
        title: "Scroll-stopping social media content",
        audience: "Creators & social media users",
        problem:
          "You need fresh, on-trend visuals for Instagram, TikTok, and Stories, but stock photos look generic and design tools take too long.",
        solution:
          "Generate original art or restyle your own photos with one-tap styles, then share straight to any app from the native share sheet.",
        example:
          "Type 'neon skyline reflected in a rainy street, cinematic' and post the result to your Story in under a minute.",
        feature: "AI Image Generator",
      },
      {
        title: "A profile picture that isn't just a filter",
        audience: "Anyone refreshing their PFP",
        problem:
          "Everyone uses the same filters. You want a profile picture that actually looks like a different, elevated version of you.",
        solution:
          "Choose an avatar template, add a selfie, and get a themed portrait — superhero, anime, high fashion, or Renaissance noble — ready for any platform.",
        example:
          "Turn a phone selfie into a High Fashion editorial headshot for LinkedIn, or an Anime Hero avatar for Discord.",
        feature: "AI Avatar Maker",
      },
      {
        title: "Quick photo edits without Photoshop",
        audience: "Everyday photo editors",
        problem:
          "You want to change one thing in a photo — an outfit, the background, the lighting — but pro editors are overwhelming and slow.",
        solution:
          "Describe the change in plain language and Photix applies it. Stack edits one after another until the photo is exactly right.",
        example:
          "Upload a portrait and type 'add a red beret and change the background to Paris', then 'make it look like autumn'.",
        feature: "AI Photo Editor",
      },
      {
        title: "Concept art & moodboards on the go",
        audience: "Hobbyists, designers, and writers",
        problem:
          "You have a visual idea for a story, game, or project but no way to sketch it quickly while it's fresh.",
        solution:
          "Turn a sentence into concept art in any of ten styles, regenerate for variations, and save the ones that fit your board.",
        example:
          "Explore 'ancient temple reclaimed by jungle' in Fantasy, Cinematic, and Illustration styles side by side.",
        feature: "AI Art Styles",
      },
      {
        title: "Themed avatars for friend groups & teams",
        audience: "Communities and small teams",
        problem:
          "You want a matching set of avatars for a group chat, gaming clan, or team page — but hiring an illustrator isn't realistic.",
        solution:
          "Everyone picks the same avatar template and adds their own selfie for a cohesive, on-brand set of portraits in minutes.",
        example:
          "A gaming clan all generate Galactic Warrior avatars; a startup team all use Chic Minimalist headshots.",
        feature: "AI Avatar Maker",
      },
      {
        title: "Learning AI art without the learning curve",
        audience: "AI-curious newcomers",
        problem:
          "You've heard about AI art but prompt engineering, models, and settings feel intimidating and technical.",
        solution:
          "Curated styles, ready-made templates, and an Enhance Prompt toggle mean you get great results without knowing how any of it works.",
        example:
          "Tap the Cinematic style, type a few words, toggle Enhance Prompt, and let Photix write the detailed prompt for you.",
        feature: "AI Image Generator",
      },
    ],
    benefits: [
      { title: "No skills required", body: "Curated styles, avatar templates, and automatic prompt enhancement mean impressive results without design talent or prompt-writing know-how." },
      { title: "Everything in one app", body: "Generate, edit, and avatar creation live under one coherent interface — most apps do only one of the three." },
      { title: "Conversational editing", body: "Edits stack on each other, so you refine an image step by step in plain language instead of wrestling with layers and tools." },
      { title: "Results in seconds", body: "A friendly countdown keeps you comfortable while the AI works, and finished images are one tap from your photo library or a share sheet." },
      { title: "Face-aware avatars", body: "Photix confirms a face is present before generating, so you never waste a creation on an unusable photo." },
      { title: "Made for iPhone and iPad", body: "A polished, dark-themed interface that adapts cleanly from a phone in your hand to a larger iPad canvas." },
    ],
    problemsSolved: [
      "“I have an idea but can't draw or design.”",
      "“I want a cool profile picture that isn't just a filter.”",
      "“I want to edit a photo but Photoshop is overwhelming.”",
      "“I don't know how to write good AI prompts.”",
      "“I want results fast, on my phone, ready to share.”",
    ],
    howItWorks: [
      { title: "Describe or choose", body: "Type an idea, pick a one-tap style, or select an avatar template. No blank page — every mode gives you a starting point." },
      { title: "Add a photo (optional)", body: "Attach a selfie or up to two reference photos to guide the result, or skip straight to generating from text alone." },
      { title: "Tap Generate", body: "A friendly '~10 seconds remaining' countdown reassures you while Photix enhances the prompt and runs the AI model." },
      { title: "Refine, save, or share", body: "Zoom in, regenerate for new variants, compare them in the history strip, then download to Photos or share anywhere." },
    ],
    companionApps: [
      { what: "AI Photo Enhancer" },
      { what: "AI Video Generator" },
      { what: "AI Face Swap" },
      { what: "Photo to Video" },
    ],
    testimonials: [
      { quote: "I made a superhero version of myself for my profile in about thirty seconds. My whole group chat downloaded it after.", name: "Maya R.", role: "Content creator" },
      { quote: "I finally edited a photo without opening Photoshop. I just typed what I wanted changed and it worked.", name: "Daniel K.", role: "Small business owner" },
      { quote: "The styles do all the hard work. I type a few words, tap Cinematic, and it looks like a movie poster.", name: "Priya S.", role: "Hobbyist artist" },
    ],
    faqs: [
      {
        category: "Getting started",
        items: [
          { q: "What is Photix?", a: "Photix is an iOS app that lets anyone create, transform, and restyle images with AI. From a single text description or a photo, you can generate original artwork, edit pictures by describing changes, and turn selfies into themed avatars — all in a friendly, tap-and-type interface with no design skills required." },
          { q: "Do I need any design or prompt-writing experience?", a: "No. Photix is built for people with no design background. Ten curated art styles and dozens of avatar templates give you great results out of the box, and the Enhance Prompt toggle can automatically enrich your description so you never have to learn 'prompt engineering'." },
          { q: "Is Photix free?", a: "Yes — Photix is free to download and use with usage limits, ads, and a small watermark on saved images. The Photix PRO subscription unlocks unlimited, ad-free, watermark-free creation with priority processing." },
          { q: "Which devices does Photix support?", a: "Photix runs on iPhone and iPad. The layout adapts to larger screens so you get a comfortable canvas on iPad as well as your phone." },
          { q: "Do I need to create an account?", a: "No. Photix has no logins or accounts. You can start creating immediately, and your PRO status is stored on your device." },
        ],
      },
      {
        category: "Features",
        items: [
          { q: "How does the AI image generator work?", a: "Open the AI Generate tab, type a description of what you want, optionally tap one of the ten art styles and attach up to two reference photos, then tap Generate. Photix enhances your prompt, runs the AI model, and returns a high-resolution image you can regenerate, download, or share." },
          { q: "Can I edit my own photos?", a: "Yes. In AI Edit you set a photo and describe the change — for example, 'add a red hat' or 'change the background to a beach'. Each edit builds on the previous result, so you can stack changes and refine an image conversationally." },
          { q: "How do AI avatars work?", a: "In AI Avatar you browse template galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — pick a look, and add a selfie. Photix detects a face to make sure your photo will work, pre-fills a descriptive prompt you can tweak, and generates a themed portrait." },
          { q: "Can I combine two photos into one image?", a: "Yes. You can attach up to two reference photos in AI Generate and AI Edit, so Photix can blend or transform them together from a single description — for example, placing a person into an entirely new scene." },
          { q: "What art styles are included?", a: "Ten styles ship with the app: Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art. Each is a one-tap recipe that reshapes the same idea into a completely different look." },
        ],
      },
      {
        category: "Photix PRO & billing",
        items: [
          { q: "What does Photix PRO include?", a: "PRO removes watermarks and ads, lifts usage limits on generations and multi-step edits, and gives you priority, faster processing. It turns Photix into unlimited, uninterrupted, watermark-free creation." },
          { q: "How much does Photix PRO cost?", a: "Photix is free to download and use. PRO is an optional upgrade with affordable weekly, quarterly, and semi-annual plans starting from a low weekly price, plus a free-trial option. Current prices are shown in the app and localized to your region by the App Store." },
          { q: "Can I cancel anytime?", a: "Yes. All plans are auto-renewing and can be cancelled anytime from your Apple ID subscription settings. Photix also supports Restore Purchases to re-apply an active subscription on your device." },
          { q: "Does my subscription sync across devices?", a: "PRO status is stored per device, so there's no cross-device account. You can use Restore Purchases to reactivate an existing subscription on the same device." },
        ],
      },
      {
        category: "Privacy & safety",
        items: [
          { q: "Is Photix private?", a: "Photix asks for App Tracking Transparency and GDPR/EU consent before any ad tracking, and uses privacy-forward analytics. There are no user accounts, and your PRO status stays on your device. See the Privacy page for details." },
          { q: "Are there content safety measures?", a: "Yes. A content-safety filter blocks prompts containing explicit or banned terms before they reach the server, with a guidelines message, so the app stays appropriate to use." },
          { q: "Will my saved images have a watermark?", a: "Images saved or shared on the free tier carry a small Photix watermark. Upgrading to Photix PRO removes the watermark from all your exports." },
        ],
      },
    ],
  },

  home: {
    hero: {
      ratingSuffix: "happy users",
      titlePre: "Create anything",
      titleAccent: "you can imagine",
      description:
        "Photix is the all-in-one AI image app for iPhone and iPad. Turn a few words into original art, edit any photo just by describing the change, and transform selfies into themed avatars — no design skills, accounts, or prompt expertise required.",
      exploreCta: "Explore features",
      freeNote: "Free to download · No account or login required · iPhone & iPad",
    },
    stats: {
      rating: "App Store rating",
      users: "Happy users",
      modes: "Creative modes in one app",
      styles: "One-tap art styles",
    },
    featuresSection: {
      eyebrow: "One app, four creative modes",
      title: "Everything you need to create with AI",
      description:
        "Most apps do one thing. Photix brings image generation, photo editing, and avatar creation together in a single, coherent interface built for people who just want great results.",
    },
    highlights: [
      {
        eyebrow: "AI Generate",
        title: "Turn a sentence into stunning art",
        description:
          "Describe a scene, a character, or a mood and Photix generates a brand-new, high-resolution image in seconds. Tap a style, attach up to two reference photos, and let the built-in Enhance Prompt option fill in the details for you.",
        bullets: [
          "Ten one-tap art styles, from Realism to Anime and Cyberpunk",
          "Enhance Prompt automatically enriches your description",
          "Attach up to two reference photos to guide the result",
          "Regenerate for fresh variations and compare them instantly",
        ],
        cta: "About the AI image generator",
      },
      {
        eyebrow: "AI Edit",
        title: "Edit any photo just by describing it",
        description:
          "Upload a photo and type what you want changed — an outfit, a background, the lighting, the season. Every edit stacks on the last, so you can sculpt an image conversationally without ever touching a layer or a slider.",
        bullets: [
          "Plain-language edits: “add a red beret”, “make it autumn”",
          "Iterative, multi-step editing that builds on each result",
          "Blend two reference photos into one perfect image",
          "Navigate variants and save the one you love",
        ],
        cta: "About the AI photo editor",
      },
      {
        eyebrow: "AI Avatar",
        title: "Turn a selfie into a themed portrait",
        description:
          "Pick a template — Superhero, Renaissance Noble, Anime Hero, High Fashion — add a selfie, and Photix returns a polished, share-ready portrait. Face detection checks your photo up front so you never waste a generation.",
        bullets: [
          "Dozens of templates across Fashion, Historical, and more",
          "Face-aware: confirms a usable selfie before generating",
          "Editable prompts let you fine-tune each look",
          "One tap to save to Photos or share anywhere",
        ],
        cta: "About the AI avatar maker",
      },
    ],
    artStylesSection: {
      eyebrow: "Art styles",
      title: "Ten looks that do the prompt engineering for you",
      description:
        "Every style is a curated recipe. Tap one and the same idea takes on a completely different feel — no prompt-writing skill needed.",
      exploreCta: "Explore all art styles",
    },
    howSection: {
      eyebrow: "How it works",
      title: "From idea to share-ready image in four taps",
      description: "The same simple rhythm powers every creative mode in Photix.",
    },
    useCasesSection: {
      eyebrow: "Use cases",
      title: "What people create with Photix",
      description:
        "Whether you're posting content, refreshing a profile picture, or editing a photo, Photix meets you where your imagination is.",
      seeAll: "See all use cases",
    },
    benefitsSection: {
      eyebrow: "Why Photix",
      title: "Built to remove every barrier to creating",
    },
    problemsCard: { heading: "Photix is for you if you've ever thought…" },
    testimonialsSection: {
      eyebrow: "Loved by creators",
      title: "Join {users} people already creating",
      description: "Photix holds a {rating}-star rating in the App Store. Here's what a few of them say.",
    },
    companionSection: {
      eyebrow: "The AI Journey family",
      title: "More AI creativity beyond Photix",
      description: "Photix is part of a broader suite of AI creativity apps. Explore the companions built by the same team.",
    },
    freeToStart: {
      eyebrow: "Free to start",
      title: "Download free and start creating",
      description:
        "Photix is free to download and free to use. Make original art, avatars, and edits from your very first minute — no account, no credit card, and no design skills required.",
      cta: "See everything you can make",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      descriptionPre: "Everything you need to know to get started. ",
      seeFullFaq: "See the full FAQ",
    },
    cta: {
      title: "Create your first image today",
      description: "Download Photix free and turn your imagination into share-ready art in seconds.",
      secondary: "Browse features",
    },
  },

  featuresPage: {
    header: {
      eyebrow: "Features",
      title: "Everything Photix can create",
      intro:
        "Photix is a pocket-sized creative studio. Four creative modes, ten art styles, prompt enhancement, reference photos, and instant sharing — all wrapped in a friendly, tap-and-type interface that needs no design skill.",
    },
    highlights: [
      {
        eyebrow: "AI Generate · Text-to-image",
        title: "An AI image generator that meets you halfway",
        description:
          "Type an idea into the “Describe your idea…” box, pick from ten curated styles, and generate a brand-new image. Attach up to two reference photos to combine or transform existing pictures, and toggle Enhance Prompt to let Photix enrich short descriptions into detailed prompts.",
        bullets: [
          "Free-form prompt plus one-tap style recipes",
          "Enhance Prompt turns a few words into a rich description",
          "Up to two reference photos per generation",
          "Regenerate up to 10 variations from one result",
        ],
      },
      {
        eyebrow: "AI Edit · Photo modification",
        title: "Conversational photo editing, no layers required",
        description:
          "Set a photo, describe the change, and tap Modify. Each edit accumulates on the previous result, so “add a red hat” followed by “make it look like autumn” stacks naturally. Add a second reference photo to guide the edit, and navigate between variants before you save.",
        bullets: [
          "Describe changes in plain English",
          "Iterative, multi-step edits that build on each other",
          "Combine two photos into one composed image",
          "Save the variant you love to the result screen",
        ],
      },
      {
        eyebrow: "AI Avatar · Selfie-to-portrait",
        title: "Themed avatars from a single selfie",
        description:
          "Browse template galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — pick a look, and add a selfie. Photix detects a face to make sure your photo will work, pre-fills a descriptive prompt you can tweak, and generates a polished portrait.",
        bullets: [
          "Dozens of templates across five themed categories",
          "Face detection prevents wasted generations",
          "Editable, pre-filled prompts for each template",
          "One-tap themed portraits ready to share",
        ],
      },
    ],
    exploreCtaPrefix: "Explore",
    resultSection: {
      eyebrow: "Result, save & share",
      title: "Polished output, exactly where you want it",
      description: "No matter which mode you use, every creation flows into the same delightful result experience.",
    },
    resultFeatures: [
      { title: "Save & share instantly", body: "Every result is one tap from your photo library or the native iOS share sheet — post to Instagram, send in Messages, or save for later." },
      { title: "Variant history", body: "Regenerate for fresh takes and flip between variants in a history strip, so you can compare options and keep the best one." },
      { title: "Reassuring, fast results", body: "A friendly progress countdown keeps you comfortable while the AI works, and PRO adds priority processing for faster generations." },
      { title: "Private & safe by design", body: "No accounts or logins, explicit tracking-consent prompts, and a content-safety filter that blocks unsafe prompts before they're sent." },
    ],
    howSection: {
      eyebrow: "How it works",
      title: "The universal creative loop",
      description: "Describe or choose, add a photo if you like, generate, then refine — the rhythm is the same everywhere in Photix.",
    },
    stylesCard: {
      title: "Ten built-in art styles",
      body: "Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, and Pixel Art. Each one reshapes the same idea into a completely different look with a single tap.",
      cta: "Browse the styles",
    },
    freeCard: {
      title: "Free to create",
      body: "Every creative mode is free to use — no account, no credit card, no design skills. An optional PRO upgrade inside the app unlocks unlimited, ad-free, watermark-free creation whenever you want it.",
      cta: "Explore avatar ideas",
    },
    companionSection: {
      eyebrow: "AI Journey family",
      title: "Discover companion apps",
      description: "Photix also introduces you to sibling apps for video, enhancement, live portraits, and face swap.",
    },
  },

  toolPages: {
    aiImageGenerator: {
      headerTitle: "AI Image Generator — text to image in seconds",
      intro:
        "Describe anything you can imagine and Photix generates a brand-new, high-resolution image — no design software, no prompt engineering, no accounts. Just words, a style, and a tap.",
      leadTitle: "A blank page, solved",
      leadBody:
        "Traditional AI art tools ask you to master prompts, models, and settings before you see a single result. Photix flips that around. You bring the intent — a sentence, a style, or a reference photo — and it handles enhancing the prompt, applying the artistic recipe, running the model, and delivering a result you can refine in seconds.",
      checklist: [
        "High-resolution, share-ready output every time",
        "Ten one-tap styles from Realism to Pixel Art",
        "Enhance Prompt fills in the descriptive detail",
        "Up to two reference photos per generation",
      ],
      howTitle: "From words to artwork in four steps",
      steps: [
        { title: "Describe your idea", body: "Type anything into the prompt box — “a cozy cabin in a snowy forest at night”, “a robotic dragon over golden clouds”. There's no blank-page anxiety; a style or reference photo can carry the idea too." },
        { title: "Pick a style (optional)", body: "Tap one of ten curated styles to instantly reshape the look — Cinematic for drama, Anime for character art, Realism for lifelike detail." },
        { title: "Add references & enhance", body: "Attach up to two reference photos to combine or transform them, and toggle Enhance Prompt to let Photix expand a short idea into a detailed prompt." },
        { title: "Generate & refine", body: "Tap Generate, watch the friendly countdown, then regenerate for variations, zoom in, download, or share your favorite." },
      ],
      promptIdeasTitle: "Not sure what to type? Start here.",
      promptIdeasDescription: "Copy one of these into the prompt box, pick a style, and tap Generate.",
      promptIdeas: [
        "Castle floating above the clouds during sunset",
        "A robotic dragon soaring over a neon city",
        "Elven princess in an enchanted forest",
        "Magical forest with glowing trees and golden light rays",
        "Vintage film portrait of an astronaut, grainy and warm",
        "Cyberpunk street market in the rain, reflections everywhere",
      ],
      tipsTitle: "Tips for better AI images",
      tips: [
        "Name the subject, the setting, and the mood — “a fox, in a misty pine forest, at dawn” beats “a fox”.",
        "Let a style do the heavy lifting instead of describing lighting and texture by hand.",
        "Turn on Enhance Prompt when you only have a few words; turn it off when you want precise control.",
        "Use reference photos to keep a specific face, object, or composition consistent.",
        "Regenerate a few times — small wording changes and fresh seeds produce very different results.",
      ],
      stylesAsideTitle: "Every idea, ten ways",
      stylesAsideBody: "Styles are the fastest way to change a result without rewriting your prompt. Here are the ten that ship with Photix.",
      stylesAsideCta: "Learn about art styles",
      faqTitle: "AI image generator questions",
      faqs: [
        { q: "How does the Photix AI image generator work?", a: "Open the AI Generate tab, type a description, optionally tap a style and attach up to two reference photos, then tap Generate. Photix enhances your prompt, runs the AI model, and returns a high-resolution image you can regenerate, download, or share." },
        { q: "Do I need to know how to write prompts?", a: "No. The ten one-tap styles and the Enhance Prompt toggle handle the hard parts. You can get striking results from just a few plain words." },
        { q: "Can I use my own photos as references?", a: "Yes. You can attach up to two reference photos to guide a generation — for example, to combine two pictures or transform an existing one." },
        { q: "How many variations can I make?", a: "From a single result you can regenerate up to 10 variations. Photix PRO removes usage limits and adds priority processing for faster results." },
      ],
      ctaTitle: "Generate your first image free",
      ctaDescription: "Download Photix and turn a sentence into stunning art in seconds.",
      ctaSecondary: "See all features",
    },
    aiPhotoEditor: {
      headerTitle: "AI Photo Editor — edit photos by describing the change",
      intro:
        "Forget layers, masks, and menus. Upload a photo, type what you want changed, and Photix does it. Then keep going — each edit stacks on the last, so you can sculpt an image one sentence at a time.",
      leadTitle: "Editing that feels like a conversation",
      leadBody:
        "Most photo editors make you find the right tool before you can make a change. Photix removes that step entirely. You describe the result you want and it figures out how to get there — then remembers what you asked for, so your next instruction builds on the last one.",
      checklist: [
        "Change outfits, backgrounds, hair, lighting, and more",
        "Iterative edits that accumulate step by step",
        "Blend two reference photos into one composition",
        "Compare variants and save the best result",
      ],
      howTitle: "Describe, modify, repeat",
      steps: [
        { title: "Set a photo", body: "Pick the image you want to edit. Add an optional second photo as extra reference to blend or guide the change." },
        { title: "Describe the change", body: "Type what you want in plain language — an outfit, a background, the lighting, a new object, a different season." },
        { title: "Tap Modify", body: "Photix applies your instruction and shows the result. Don't like it? Regenerate to get alternate variants." },
        { title: "Stack & save", body: "Modify again to build on the last result, flip between variants, then save the one you love to Photos or share it." },
      ],
      examplesTitle: "Real edits, in plain language",
      examplesDescription: "Here's the kind of instruction Photix understands — and how the edits stack together.",
      examples: [
        { prompt: "Add a red beret and change the background to Paris", result: "A new outfit and setting, applied in one edit." },
        { prompt: "Make it look like autumn", result: "Warm tones and seasonal light layered on the previous result." },
        { prompt: "I want curly blond hair", result: "A natural hairstyle change that keeps the face intact." },
        { prompt: "Nighttime with neon", result: "A whole new mood and lighting for the same portrait." },
      ],
      faqTitle: "AI photo editor questions",
      faqs: [
        { q: "How do I edit a photo with Photix?", a: "Open the AI Edit tab, set a photo, and describe the change you want — for example “add a red hat” or “change the background to a beach”. Tap Modify and Photix returns the edited photo. Each edit builds on the previous result so you can refine step by step." },
        { q: "Can I stack multiple edits?", a: "Yes. AI Edit is iterative: every Modify accumulates on the last result, so you can layer changes — a hairstyle, then an outfit, then a background — in a natural, conversational flow." },
        { q: "Can I combine two photos?", a: "Yes. You can add a second reference photo so Photix blends or transforms them together from your description — for instance, placing a person into a completely new scene." },
        { q: "Do I need photo-editing skills?", a: "No. There are no layers, masks, or sliders. If you can describe the change in words, Photix can apply it." },
      ],
      ctaTitle: "Edit your first photo free",
      ctaDescription: "Download Photix and change any picture just by describing what you want.",
      ctaSecondary: "See all features",
    },
    aiAvatar: {
      headerTitle: "AI Avatar Maker — turn selfies into themed portraits",
      intro:
        "Pick a template, add a selfie, and Photix transforms you into a superhero, an anime hero, a Renaissance noble, or a high-fashion model — a polished portrait that's far more than a filter.",
      leadTitle: "A profile picture that isn't just a filter",
      leadBody:
        "Filters tweak a photo; Photix reimagines it. Choose a theme and your selfie becomes a fully-realized portrait — new setting, wardrobe, and lighting, with your likeness intact. It's the fastest way to a standout avatar for social media, gaming, or messaging.",
      checklist: [
        "Dozens of templates across five themed categories",
        "Face-aware: validates your selfie before generating",
        "Editable, pre-filled prompts for each template",
        "One-tap save and share, watermark-free on PRO",
      ],
      howTitle: "From selfie to portrait in four steps",
      steps: [
        { title: "Browse templates", body: "Explore themed galleries — Trending, AI Avatars, Fashion, Historical, and Lifestyle — and pick a look that fits your vibe." },
        { title: "Add a selfie", body: "Choose a portrait from your camera roll. Photix detects a face up front so you never waste a generation on an unusable photo." },
        { title: "Tweak the prompt", body: "Each template pre-fills a descriptive prompt. Leave it as-is or personalize it before you generate." },
        { title: "Generate & share", body: "Get a polished, themed portrait in seconds, then download to Photos or share it straight to your favorite app." },
      ],
      galleriesTitle: "Dozens of looks, grouped by theme",
      galleriesDescriptionPre: "Browse curated collections and find the perfect persona — or try a few and pick your favorite. Need a starting point? ",
      galleriesDescriptionLink: "See popular avatar ideas",
      looksSuffix: "looks",
      crossPromo: {
        eyebrow: "Want scene swaps too?",
        title: "Prefer stepping into real scenes? Meet SwapTo",
        bodyPre: "Photix avatars reimagine you as art. If you'd also like to place your face into hundreds of professionally shot, photorealistic scenes — headshots, vacations, red carpets — try ",
        linkText: "SwapTo's AI avatar and face swap",
        bodyPost: " — built by the same AI Journey team.",
      },
      faqTitle: "AI avatar questions",
      faqs: [
        { q: "How does the AI avatar maker work?", a: "Open the AI Avatar tab, browse the template galleries, pick a look, and add a selfie. Photix detects a face to confirm your photo will work, pre-fills a descriptive prompt you can edit, and generates a themed portrait ready to save or share." },
        { q: "What avatar styles are available?", a: "Templates span five categories: Trending, AI Avatars (Superhero, Fantasy Princess, Anime Hero, Cyberpunk and more), Fashion (High Fashion, Street Style, Vintage Glamour…), Historical (Renaissance Noble, Ancient Egypt, Samurai…), and Lifestyle (Cozy Smile, City Greenery…)." },
        { q: "Why does Photix check for a face?", a: "Avatars work best from a clear portrait, so Photix confirms a face is present before generating. If none is detected it shows a “Face not detected” message so you can pick a better selfie — saving you a wasted creation." },
        { q: "Can I use avatars as profile pictures?", a: "Absolutely. Themed portraits make great profile pictures for social media, gaming, and messaging apps. Save watermark-free exports with Photix PRO." },
      ],
      ctaTitle: "Make your AI avatar free",
      ctaDescription: "Download Photix, add a selfie, and become anyone you can imagine.",
      ctaSecondary: "See all features",
    },
    artStyles: {
      headerTitle: "AI art styles that do the prompt engineering for you",
      intro:
        "A style is a curated recipe — the lighting, texture, palette, and mood that make a look feel like itself. Tap one and the same idea is transformed, no prompt-writing skill required.",
      leadTitle: "Why styles beat writing prompts",
      leadBody1:
        "Getting a specific look out of an AI model usually means describing lighting, film stock, brushwork, and colour grading in careful detail. Styles collapse all of that into a single tap. Type a plain idea — “a fox in a forest” — then compare it in Realism, Anime, and Cinematic to see three completely different, polished results from the same words.",
      leadBody2:
        "Because styles are consistent recipes, they're also the easiest way to keep a series of images looking like they belong together — ideal for a themed feed, a moodboard, or a set of matching avatars.",
      pairTitle: "Pair styles with",
      pairChecklist: [
        "The AI image generator for original art",
        "Reference photos to keep a subject consistent",
        "Enhance Prompt for extra descriptive detail",
        "Regeneration to explore variations of a look",
      ],
      pairCta: "Open the image generator",
      collectionTitle: "Ten styles, ten distinct moods",
      collectionDescription: "Each one reshapes your result — here's how they feel and when to reach for them.",
      ctaTitle: "Try every style free",
      ctaDescription: "Download Photix and see your ideas in ten different looks with a single tap.",
      ctaSecondary: "See all features",
    },
  },

  faqPage: {
    header: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      intro: "Everything you might want to know about Photix — from how each creative mode works to Photix PRO, privacy, and billing.",
    },
    cta: {
      title: "Still have a question?",
      description: "Reach the team directly and we'll help you get the most out of Photix.",
      secondary: "Contact us",
    },
  },

  useCasesPage: {
    header: {
      eyebrow: "Use cases",
      title: "What you can create with Photix",
      intro: "Photix is built for everyday people with an idea and a phone. Here are the real scenarios where it shines — and the exact problem it solves in each.",
    },
    problemsSection: {
      eyebrow: "Problems solved",
      title: "If you've ever thought one of these, Photix is for you",
    },
    cta: {
      title: "Bring your idea to life",
      description: "Whatever you're trying to make, Photix turns it into a share-ready image in seconds. Download free.",
      secondary: "Explore features",
    },
  },

  aboutPage: {
    header: {
      eyebrow: "About",
      title: "Make AI image creation effortless for everyone",
      intro: "Most people have ideas and photos they'd love to see reimagined, but lack the tools or the talent to make it happen. Photix exists to remove every barrier between imagination and a finished, shareable image.",
    },
    missionLead: "Our mission is simple:",
    missionRest: " make AI-powered image creation delightful and accessible to anyone with a phone. Traditional photo editors are complex, and professional AI tools are intimidating. Photix collapses all of that into a friendly, tap-and-type experience where the AI does the heavy lifting and you simply describe what you want.",
    missionBody2: "The idea at the core of the product is a single creative loop: you provide intent — a text prompt, a chosen style, or a template — and optionally an input photo. Photix handles everything else: enhancing the prompt, applying the artistic recipe, running the model, and delivering a high-quality result you can refine, save, and share.",
    pullQuote: "“Photix turns anyone's words or selfies into share-ready AI imagery in seconds — a full creative studio that requires no skill, no accounts, and no learning curve.”",
    ratingLine: "That approach resonates: Photix holds a {rating}-star rating and has welcomed {users} happy users who create original art, transform selfies, and edit photos every day.",
    audienceSection: {
      eyebrow: "Who it's for",
      title: "Built for everyday creators",
      colAudience: "Audience",
      colWant: "What they want",
      colHow: "How Photix helps",
    },
    audience: [
      { who: "Social media users & creators", want: "Eye-catching, on-trend visuals and avatars to post", how: "One-tap styles, trending templates, and instant sharing" },
      { who: "Casual creatives & hobbyists", want: "To bring imaginative ideas to life", how: "Text-to-image with ten curated art styles" },
      { who: "Self-expression enthusiasts", want: "To reimagine themselves in fun themes", how: "Superhero, fantasy, historical, and fashion avatars" },
      { who: "Everyday photo editors", want: "Quick tweaks without pro tools", how: "Describe-the-change AI editing" },
      { who: "AI-curious newcomers", want: "To try AI art without a learning curve", how: "Templates, prompt enhancement, and guided flows" },
    ],
    strengthsSection: { eyebrow: "Why it works", title: "What makes Photix different" },
    strengths: [
      { title: "Breadth in one app", body: "Generation, editing, and avatars under a single coherent interface — most competitors do just one." },
      { title: "Zero learning curve", body: "Curated styles, avatar templates, and prompt enhancement mean great results without prompt-writing skill." },
      { title: "Conversational editing", body: "Edits build on each other, letting you sculpt an image through natural language, step by step." },
      { title: "Delightful, reassuring UX", body: "A polished dark theme, progress countdowns, zoomable results, and variant history remove the “is it working?” anxiety." },
      { title: "Frictionless output", body: "One-tap save and native share put finished images exactly where you want them." },
      { title: "Privacy-conscious", body: "Explicit tracking and consent flows, plus a client-side content-safety filter, with no accounts to manage." },
    ],
    familySection: {
      eyebrow: "AI Journey",
      title: "Part of a family of AI creativity apps",
      description: "Photix is one of {count} apps in the AI Journey suite. Each explores a different corner of AI creativity, and Photix helps you discover them all.",
    },
  },

  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "We'd love to hear from you",
      intro: "Whether you have a question, hit a snag, or just made something you're proud of, the Photix team is one message away.",
    },
    emailCard: {
      title: "Email support",
      body: "Questions, bug reports, subscription help, or privacy requests — send them our way and we'll get back to you.",
    },
    feedbackCard: {
      title: "In-app feedback",
      body: "After a result, tap “Happy with the result?” If something isn't right, choose “Not really” to send feedback that emails the team directly.",
      cta: "Read the FAQ first",
    },
    rateCard: {
      title: "Rate Photix",
      body: "Enjoying the app? A rating on the App Store genuinely helps other creators discover Photix.",
      cta: "Rate on the App Store",
    },
    cta: {
      title: "Haven't tried Photix yet?",
      description: "Download it free and see what you can create in your first minute.",
      secondary: "Explore features",
    },
  },

  avatarIdeasPage: {
    header: {
      eyebrow: "Avatar Ideas",
      title: "AI avatar ideas for a standout profile picture",
      intro: "Not sure which avatar to make? Here's the inspiration — popular styles, picks for every occasion, and tips for the best selfie. Pick a look, add a photo, and Photix does the rest.",
    },
    howToChoose: {
      title: "A better profile picture in three taps",
      body: "Every idea below is a ready-made template. There's no prompt to write and no design skill required — choose a style, add a selfie, and you'll have a polished, themed portrait in seconds. Not sure where to start? Pick by the vibe you want or by where you'll use it.",
      checklist: [
        "{count}+ templates across themed categories",
        "Face-aware — it checks your selfie before generating",
        "Editable prompts, though you never have to touch them",
        "One-tap save and share to any app",
      ],
      cta: "How the avatar maker works",
    },
    popularSection: {
      eyebrow: "Popular ideas",
      title: "Avatar styles people love",
      description: "A quick tour of the most popular looks — what each one feels like, and where it shines.",
      greatForLabel: "Great for: ",
    },
    ideas: [
      { name: "Superhero", vibe: "Cape, dramatic lighting, and comic-book energy that turns a selfie into a cover shot.", greatFor: "Bold profile pictures and gaming handles" },
      { name: "Anime Hero", vibe: "Cel-shaded and expressive, like you stepped out of your favorite series.", greatFor: "Discord, TikTok, and fan communities" },
      { name: "High Fashion", vibe: "Editorial studio lighting and runway styling for a polished, elevated look.", greatFor: "LinkedIn, portfolios, and headshots" },
      { name: "Renaissance Noble", vibe: "Oil-painting grandeur with period wardrobe and soft, painterly light.", greatFor: "A witty, gallery-worthy PFP" },
      { name: "Cyberpunk", vibe: "Neon glow, rain-slick streets, and a high-tech, retro-futuristic edge.", greatFor: "Sci-fi fans and gaming avatars" },
      { name: "Fantasy Princess", vibe: "Ethereal magic, glowing detail, and a storybook atmosphere.", greatFor: "Fantasy lovers and cosplay-style portraits" },
      { name: "Samurai", vibe: "Feudal-Japan armor and cinematic mood for a striking, powerful portrait.", greatFor: "A dramatic, one-of-a-kind avatar" },
      { name: "Street Style", vibe: "Urban backdrop, candid confidence, and a modern everyday wardrobe.", greatFor: "Cool, approachable social profiles" },
      { name: "Galactic Warrior", vibe: "Armored and otherworldly, ready for battle among the stars.", greatFor: "Gaming clans and sci-fi communities" },
    ],
    occasionSection: {
      eyebrow: "By occasion",
      title: "Find an avatar for where you'll use it",
      description: "Match the look to the moment — a picture that fits the profile it's going on.",
    },
    occasions: [
      { title: "Professional & LinkedIn", body: "Keep it clean and confident with a studio-lit, well-dressed portrait that still looks like you.", styles: "High Fashion · Chic Minimalist · Casual Confidence" },
      { title: "Gaming & Discord", body: "Go bold and characterful — a persona that pops in a tiny avatar circle and matches your handle.", styles: "Cyberpunk · Galactic Warrior · Anime Hero" },
      { title: "Dating profiles", body: "Warm, natural, and elevated — a version of you that feels genuine and approachable.", styles: "Cozy Smile · Street Style · Casual Confidence" },
      { title: "Group & team avatars", body: "Have everyone pick the same template and add their own selfie for a cohesive, on-brand set.", styles: "Chic Minimalist · Galactic Warrior · Superhero" },
      { title: "Seasonal & holidays", body: "Refresh your picture for the season with rich wardrobe, warm tones, and festive styling.", styles: "Autumn Charm · Vintage Glamour · Luxury Evening" },
      { title: "Just for fun", body: "See yourself across the ages and universes — history, myth, and sci-fi are all one tap away.", styles: "Renaissance Noble · Ancient Egypt · Mystic Sorcerer" },
    ],
    categoriesSection: {
      eyebrow: "All categories",
      title: "Explore every themed gallery",
      description: "These ideas are just the start. Every category is packed with more templates inside the app.",
      looksSuffix: "looks",
      seeFullLink: "See the full avatar maker",
    },
    tipsSection: {
      eyebrow: "Best results",
      title: "How to get the best AI avatar",
      body: "The template does the creative work — your selfie just needs to give it a clear starting point. A few simple habits go a long way.",
    },
    tips: [
      "Use a clear, front-facing photo where your face is well lit.",
      "Skip sunglasses, hats, or heavy shadows that hide your features.",
      "One face per photo gives the cleanest, most accurate result.",
      "Higher-resolution selfies give the AI more detail to work with.",
      "Try a few templates — the same selfie can shine across very different themes.",
      "A neutral expression and simple background transform most reliably.",
    ],
    faqTitle: "AI avatar idea questions",
    faqs: [
      { q: "How do I choose an AI avatar style?", a: "Start from where you'll use it. Want a professional headshot? Try High Fashion or Chic Minimalist. Building a gaming identity? Go for Cyberpunk or Galactic Warrior. When in doubt, generate two or three styles from the same selfie and keep your favorite." },
      { q: "What's a good AI avatar for a professional profile?", a: "Studio-lit, well-styled looks read best professionally. High Fashion, Chic Minimalist, and Casual Confidence keep your likeness clear while giving you a polished, put-together portrait for LinkedIn or a portfolio." },
      { q: "Can everyone in a group use the same avatar style?", a: "Yes — that's one of the most popular ideas. Have each person pick the same template and add their own selfie, and you get a cohesive set of matching avatars for a group chat, gaming clan, or team page." },
      { q: "Do I need to write a prompt to make an avatar?", a: "No. Every template comes with a descriptive prompt already written for you. Just pick a look and add a selfie — you can optionally tweak the prompt, but you never have to start from a blank page." },
    ],
    ctaTitle: "Make your AI avatar free",
    ctaDescription: "Download Photix, pick a look, and turn a selfie into a share-ready portrait in seconds.",
    ctaSecondary: "About the avatar maker",
  },
};

/**
 * The shape every locale must satisfy. Derived from the English object with
 * literal types widened (so translated strings are assignable) while the full
 * key structure is still enforced at build time.
 */
export type Dictionary = typeof en;
