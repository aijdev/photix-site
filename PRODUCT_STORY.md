# Photix — Product Story

> A single source of truth describing **what Photix is, what it does, and why it exists** — written from the end user's perspective. This document intentionally avoids code and architecture, focusing entirely on the product experience and business value.

---

## 1. Project Overview

**Photix** is an iOS mobile app that lets anyone create, transform, and restyle images using AI — no design skills, software, or prompt-engineering expertise required. From a single text description or a photo from their camera roll, users can generate original artwork, restyle existing pictures, and turn selfies into polished themed avatars in seconds.

The product solves a very human problem: **most people have ideas and photos they'd love to see reimagined, but lack the tools or talent to make it happen.** Traditional photo editors are complex, and professional AI tools are intimidating. Photix collapses all of that into a friendly, tap-and-type mobile experience where the AI does the heavy lifting and the user simply describes what they want.

Photix is part of a broader family of AI creativity apps (internally referred to as the **"AI Journey"** suite), and it actively introduces users to sibling apps like an AI video generator, photo enhancer, live-portrait animator, and face-swap tool.

**At a glance:**

| Attribute | Detail |
|---|---|
| Product name | Photix |
| Platform | iOS (iPhone and iPad) |
| Category | AI image generation & photo editing |
| Business model | Freemium — free with ads & watermark, "Photix PRO" subscription unlocks everything |
| Core promise | "Create Anything You Imagine" |
| Interface | Dark-themed, four-tab app |

---

## 2. Vision & Main Idea

### Mission
**Make AI-powered image creation effortless and delightful for everyone.** Photix's guiding tagline — *"Create Anything You Imagine"* — captures the intent: remove every barrier between a person's imagination and a finished, shareable image.

### The core idea
The user provides **intent** (a text prompt, a chosen style, or a template) and optionally an **input photo**. Photix handles everything else — enhancing the prompt, applying the artistic recipe, running the AI model, and delivering a high-quality result the user can refine, save, and share.

### Value delivered to users
- **Instant creativity** — turn a sentence into artwork in seconds.
- **Personal transformation** — see yourself as a superhero, a Renaissance noble, an anime character, or a fashion model.
- **Effortless editing** — change outfits, backgrounds, or details in a photo just by describing the change.
- **No learning curve** — curated styles and templates mean users get great results without knowing how to write prompts.
- **Shareable output** — every result is one tap away from the photo library or a share sheet.

### Guiding experience principles (as expressed in the product)
- **Speed & reassurance** — a live "~10 sec remaining… almost ready" countdown keeps users comfortable while the AI works.
- **Guided inspiration** — pre-written style recipes and avatar templates give users a starting point instead of a blank page.
- **Gentle monetization** — the app leads with free value, then nudges toward PRO through offers, ad-removal prompts, and a trial.

---

## 3. Core Functionality

Photix is organized around **four tabs**, each a distinct creative mode. A persistent top bar shows the app name and — for non-subscribers — a **PRO** upgrade button.

| Tab | Purpose | User provides | AI returns |
|---|---|---|---|
| **AI Generate** | Text-to-image creation | A description + optional style + optional reference photo(s) | A brand-new generated image |
| **AI Edit** | Photo modification | A photo + a description of the change | The edited photo |
| **AI Avatar** | Themed portraits from a selfie | A selfie + a chosen template | A stylized avatar/portrait |
| **AI Tools** | Discover companion apps | — | Links to other AI Journey apps |

### The universal creative loop
Across the creative tabs, users follow the same simple rhythm:

1. **Describe or choose** — type an idea, pick a style, or select a template.
2. **(Optionally) add a photo** — from the photo picker.
3. **Tap the action button** — *Generate* or *Modify*.
4. **Watch progress** — a friendly countdown and progress placeholder appear.
5. **Review the result** — on a dedicated result screen.
6. **Refine, save, or share** — regenerate for a new variant, download to the photo library, or share directly.

Every result can be **zoomed**, **regenerated** for a fresh take, **downloaded**, or **shared**. Editing is **iterative** — each modification builds on the previous result, so users can layer changes step by step.

---

## 4. Features

### 4.1 AI Generate (Text-to-Image)
The flagship creative surface.

- **Free-form prompt** — "Describe your idea…" text box where users type anything they imagine.
- **Style recipes** — a horizontally scrollable gallery of one-tap artistic styles that reshape the output. Ten curated styles ship with the app:

  | Style | Feel |
  |---|---|
  | Realism | Photorealistic, natural lighting, ultra-HD |
  | Fantasy | Glowing magic, mythical, ethereal |
  | Anime | Cel-shaded, bold, expressive |
  | Cinematic | Dramatic lighting, film grain, widescreen |
  | Steampunk | Brass gears, Victorian, ornate |
  | Cyberpunk | Neon, high-tech, retro-futuristic |
  | Vintage | Grainy, retro photo look |
  | Paint | Hand-drawn brushstrokes, warm tones |
  | Illustration | Bold outlines, comic/halftone |
  | Pixel Art | 8-bit, retro-game blocks |

- **Reference photos** — users can attach up to **two** images to guide the generation (e.g., combine or transform existing pictures).
- **Enhance Prompt toggle** — an "enhanced prompt" option that lets the AI automatically enrich the user's description for better results.
- **Regenerate** — from the result screen, produce new variations of the same idea (capped at 10 regenerations per result view).

### 4.2 AI Edit (Photo Modification)
Conversational, iterative photo editing.

- **Set a photo** — pick an image to edit; a second photo can be added as additional reference.
- **Describe the change** — "Describe how you want to modify your photo…" (e.g., *"Add a red hat"*).
- **Iterative multi-step editing** — each *Modify* builds on the prior result, accumulating a combined instruction history so edits stack naturally.
- **Variant navigation** — regenerate produces alternates; users flip back and forth between variants.
- **Save** — commits the edited result to the result screen for download/share.

### 4.3 AI Avatar (Selfie-to-Portrait)
Template-driven personal transformations.

- **Curated template galleries**, grouped into categories:
  - 🔥 **Trending**
  - **AI Avatars** — Superhero, Fantasy Princess, Anime Hero, Disney Style, Cyberpunk, Steampunk Explorer, Mystic Sorcerer, Futuristic Cyborg, Galactic Warrior, Anime Princess
  - **Fashion** — High Fashion, Street Style, 80s Retro, Boho, Futuristic, Casual Chic, Vintage Glamour, Chic Minimalist, Luxury Evening, Bohemian Sunset
  - **Historical** — Medieval, Ancient Egypt, Greek Mythology, Noir Film, Western, Renaissance Noble, Victorian, Samurai, Rococo, Viking
  - **Lifestyle** — Cozy Smile, Street Style, Lakeside Warmth, City Greenery, Casual Confidence, Autumn Charm
- **Face-aware** — the app detects a face in the chosen selfie before proceeding, guiding users to submit a usable portrait ("Face not detected" if none is found).
- **Editable prompt** — each template pre-fills a descriptive prompt that the user can tweak before generating.
- **One-tap themed portrait** — pick a template, add a selfie, and generate.

### 4.4 AI Tools (Companion App Discovery)
A showcase of the wider AI Journey app family, with animated previews:

| App | What it does |
|---|---|
| **Videx** | AI Video Generator |
| **FxAI** | AI Photo Enhancer |
| **PicAlive** | Live Portrait Generator |
| **SwapTo** | AI Face Swap |

Tapping a card opens the app if installed, or its App Store page otherwise. Companion apps are also surfaced as banners on the result and avatar screens (for non-subscribers).

### 4.5 Result, Save & Share
- **Zoomable full-screen preview** of the generated image.
- **History strip** — when multiple variants exist, thumbnails let users jump between them.
- **Download** to the device photo library.
- **Share** via the native iOS share sheet.
- **Watermark for free users** — images saved or shared by non-subscribers carry a Photix watermark; PRO removes it.

### 4.6 Onboarding & Social Proof
- A multi-page **welcome flow** highlighting three headline capabilities:
  1. *"Welcome to Photix — Create Anything You Imagine"*
  2. *"Make AI Avatar — Turn Selfies Into Art"*
  3. *"Change your look — Transform your look in seconds"*
- **Social proof** — a 4.8-star rating badge, *"Join 2M+ happy users"*, and a rotating set of glowing user reviews.
- The flow concludes on a **paywall** offering PRO with a free-trial or introductory option.

### 4.7 Feedback & Ratings
- After creating results, users see a **"Happy with the result?"** prompt.
  - **Love it** → the app invites an App Store rating.
  - **Not really** → a feedback text box that emails the team directly.
- Designed to route satisfied users toward public reviews and unhappy users toward private feedback.

### 4.8 Monetization Features
- **Photix PRO subscription** with multiple durations and offers (see §7).
- **Free-trial** and **introductory pricing** options.
- **"Remove Ads" offer** — an interstitial upsell shown intermittently before actions.
- **"Special Offer" dialog** — a gift-wrapped discounted/trial prompt.
- **Rewarded & interstitial ads** for free users, integrated via Google AdMob.
- **Launch paywall** — returning free users who have generated before see a paywall on relaunch.

### 4.9 Privacy, Consent & Safety
- **App Tracking Transparency** prompt and **GDPR/EU consent** flow before any ad tracking.
- **Content safety filter** — prompts containing explicit/banned terms are blocked with a guidelines message before reaching the server.
- **Privacy-forward analytics** — usage tracked via Mixpanel (EU endpoint) and Firebase; VPN-connected sessions suppress certain paywall analytics.

---

## 5. User Journey

**Meet Aisha, a casual iPhone user who saw a friend's AI avatar and wants to make her own.**

1. **First launch & onboarding.** Aisha opens Photix and is greeted by a polished welcome sequence showing what she can create — imaginative art, avatars from selfies, and look transformations. She sees a 4.8★ rating and *"Join 2M+ happy users."* At the end, a paywall offers Photix PRO with a free trial. She decides to explore first and closes it.

2. **Exploring AI Generate.** On the **AI Generate** tab she types *"a cozy cabin in a snowy forest at night."* She taps the **Cinematic** style and hits **Generate**. A friendly countdown reassures her ("~10 sec remaining… almost ready"). Seconds later, a striking image appears.

3. **Refining.** She taps **Regenerate** for an alternate take, compares variants in the history strip, then **downloads** her favorite. Because she's on the free tier, the saved image carries a small Photix watermark — and an occasional ad or "Remove Ads" offer appears.

4. **Making an avatar.** Curious about the avatars, she opens **AI Avatar**, browses the **Trending** and **Fashion** galleries, and picks **High Fashion**. She adds a selfie; the app confirms a face is detected, pre-fills a runway-style prompt, and generates an editorial portrait of her. She's delighted and shares it to Instagram via the share sheet.

5. **Editing a photo.** In **AI Edit**, she uploads a photo of herself and types *"add a red beret and change the background to Paris."* The result updates. She then types *"make it look like autumn"* — and the edit stacks on the previous one. Iterative, conversational, effortless.

6. **The nudge to PRO.** After a few creations she hits gentle limits — a hard paywall after several reference generations, ads between regenerations, and watermarks on exports. A **Special Offer** dialog appears with a gift animation and a discounted weekly trial. Convinced by the value, Aisha starts the **free trial**, unlocking unlimited, ad-free, watermark-free, priority generation.

7. **Feedback loop.** After a great result, Photix asks *"Happy with the result?"* She taps **Love it**, and the app invites her to leave an App Store review.

8. **Discovery.** On the **AI Tools** tab and via banners, she notices companion apps — a video generator, a face-swap tool — and taps through to try one.

By the end of her first session, Aisha has generated original art, transformed a selfie, edited a photo, shared results with friends, and become a paying subscriber — all without touching a single "technical" control.

---

## 6. Target Audience

Photix is built for **everyday mobile consumers who want creative, personalized imagery without any design skill.**

| Audience segment | What they want | How Photix helps |
|---|---|---|
| **Social media users & content creators** | Eye-catching, on-trend visuals and avatars to post | One-tap styles, trending avatar templates, instant sharing |
| **Casual creatives / hobbyists** | To bring imaginative ideas to life | Text-to-image with curated art styles |
| **Selfie & self-expression enthusiasts** | To reimagine themselves in fun themes | Superhero, fantasy, historical, and fashion avatars |
| **Everyday photo editors** | Quick photo tweaks without pro tools | Describe-the-change AI editing |
| **AI-curious newcomers** | To try AI art without a learning curve | Templates, enhanced prompts, guided flows |

**Problems it solves for them:**
- "I have an idea but can't draw or design."
- "I want a cool profile picture that isn't just a filter."
- "I want to edit a photo but Photoshop is overwhelming."
- "I don't know how to write good AI prompts."
- "I want results fast, on my phone, ready to share."

---

## 7. User Roles & Permissions

Photix has **no accounts, logins, or multi-user roles.** Instead, capability is gated entirely by **subscription status**, tracked on the device. There are effectively two user tiers:

| Capability | Free user | Photix PRO subscriber |
|---|---|---|
| AI Generate, Edit, Avatar | ✅ (with usage limits) | ✅ Unlimited |
| Watermark-free saves & shares | ❌ (watermark applied) | ✅ |
| Ads (interstitial, rewarded, offers) | Shown | ✅ Removed |
| Priority / fast processing | Standard | ✅ Priority (as advertised) |
| Reference-image generations | Limited before hard paywall | ✅ Unlimited |
| Multi-step edits | Limited depth before paywall | ✅ Unlimited |
| Regeneration & special offers | Interrupted by ads/offers | ✅ Uninterrupted |

**Free-tier gating (as implemented):**
- A **hard paywall** appears after a threshold of reference-image generations, beyond a couple of edit steps, or if the user previously had a subscription that expired.
- **Ad-removal offers** appear on an alternating cadence before generate/edit/avatar actions.
- **Interstitial ads** appear between repeated regenerations.
- **Watermark** is applied to any image a free user saves or shares.

**Subscription products (Photix PRO):**

| Plan | Price (US reference) | Notes |
|---|---|---|
| Weekly | $1.99 / week | Introductory pay-as-you-go first week; variants at $1.99 / $2.99 |
| Weekly (Trial) | 3-day free trial, then weekly | Free-trial introductory offer |
| Quarterly | $19.99 / quarter | Marked **"BEST VALUE"** |
| Semi-Annual | $19.99 / 6 months | Standard and $9.99 "special" variants |
| Semi-Annual (Trial) | 3-day free trial, then 6 months | Trial introductory offer |

All plans are auto-renewing, "cancel anytime," and support **Restore Purchases**. Prices shown are localized by the App Store to each user's region.

> Note: subscription unlock is stored per device. There is no cross-device sync or cloud entitlement account.

---

## 8. Key Workflows

### 8.1 Onboarding & Subscribe
Launch → welcome feature pages → social proof → paywall (free trial / intro offer) → either subscribe or continue free → main app.

### 8.2 Generate an Image
Open **AI Generate** → type a prompt → (optional) pick a style → (optional) add up to 2 reference photos → (optional) toggle Enhance Prompt → **Generate** → progress countdown → **Result** → regenerate / download / share.

### 8.3 Edit a Photo
Open **AI Edit** → set a photo → describe the change → **Modify** → result → optionally **Modify** again to stack edits → navigate variants → **Save** → download / share.

### 8.4 Create an Avatar
Open **AI Avatar** → browse categories → pick a template → add a selfie (face detected) → tweak the pre-filled prompt → **Generate** → result → download / share.

### 8.5 Save & Share
Result screen → **Save** (to Photos, watermarked if free) or **Share** (native share sheet, watermarked if free).

### 8.6 Upgrade to PRO
Trigger points: onboarding paywall, top-bar PRO button, hard paywalls at usage limits, "Remove Ads" offers, "Special Offer" dialog, launch paywall → select plan → purchase / start trial → PRO unlocked (ads & watermark removed, limits lifted).

### 8.7 Give Feedback / Rate
After a result → "Happy with the result?" → **Love it** (App Store review request) or **Not really** (in-app feedback → email to the team).

### 8.8 Discover Companion Apps
**AI Tools** tab or in-app banners → tap an app → open it (if installed) or its App Store page.

---

## 9. Product Strengths

- **Breadth in one app** — generation, editing, and avatars under a single, coherent interface. Many competitors do just one.
- **Zero learning curve** — curated styles, avatar templates, and prompt enhancement mean great results without prompt-writing skill.
- **Iterative, conversational editing** — edits build on each other, letting users sculpt an image through natural language, step by step.
- **Delightful, reassuring UX** — a polished dark theme, progress countdowns, zoomable results, and variant history reduce the anxiety of "is it working?"
- **Face-aware avatars** — validating a face up front prevents wasted generations and disappointing results.
- **Frictionless output** — one-tap save and native share put finished images exactly where users want them.
- **Strong freemium funnel** — free value first, then trials, special offers, and ad-removal upsells create multiple gentle paths to subscription.
- **Ecosystem cross-promotion** — a built-in growth loop that funnels users to companion AI apps (and vice versa).
- **Privacy-conscious & compliant** — explicit ATT and GDPR consent flows, plus a client-side content-safety filter.
- **iPhone + iPad support** — layouts adapt to larger screens.

### Unique value proposition
> **Photix turns anyone's words or selfies into share-ready AI imagery in seconds — a full creative studio (generate, edit, avatar) that requires no skill, no accounts, and no learning curve.**

---

## 10. Missing or Incomplete Features

The following appear planned, partially implemented, or absent based on the current implementation. These are observations, not confirmed roadmap items.

| Area | Observation | Status |
|---|---|---|
| **Creation history / gallery** | The app keeps no persistent library of past creations across sessions. Once a user leaves a result, it's gone unless they saved it to Photos. | **Missing** — likely a valuable addition |
| **"See All" in avatar categories** | Category headers exist, but the "see all / view full group" action is wired up with no behavior. | **Incomplete** — appears stubbed |
| **User accounts & cross-device sync** | No login, profile, or cloud entitlement. PRO status and any state live only on the device. | **Missing** — restore is per-device only |
| **Style recipe metadata** | Styles carry "model" and "negative prompt" fields that aren't visibly used in the current generation path. | **Inferred unused / future-facing** |
| **Style-only generation** | The generate button requires a typed prompt, so choosing only a style (no text) can't trigger a generation despite the styles gallery. | **Inferred limitation** |
| **AI Tools as actual tools** | The "AI Tools" tab is a cross-promotion showcase for other apps, not a set of in-app tools — the label may set different expectations. | **By design, but potentially confusing** |
| **Content moderation depth** | Safety relies on a client-side keyword blocklist plus a server "unsafe content" response; nuanced or non-English unsafe content may slip through the client check. | **Basic** — server is the backstop |
| **Localization** | User-facing copy is English-only; no evidence of multi-language support. | **Missing** for non-English markets |
| **Result editing hand-off** | Editing and avatar results flow into the same result/save screens, but there's no unified project space to revisit or branch prior work. | **Inferred gap** |

> **Note on the AI engine:** the actual image models are served by remote endpoints (the app calls a hosted "AI Journey" service). Their exact capabilities, quality, speed, and limits are **server-side and not observable from the app**, so any statements about model behavior are inferred from the user-facing experience rather than confirmed.

---

## 11. Executive Summary

**Photix is a freemium iOS app that makes AI image creation effortless for everyday people.** Through four simple tabs — **AI Generate** (turn a text description into original artwork), **AI Edit** (modify a photo just by describing the change), **AI Avatar** (transform a selfie into themed portraits), and **AI Tools** (discover companion apps) — it collapses the complexity of AI art into a friendly, tap-and-type experience. Curated art styles, ready-made avatar templates, automatic prompt enhancement, and reassuring progress feedback mean users get impressive, share-ready results without any design skill or prompt expertise.

The product is deliberately built as a **funnel**. Users are welcomed with an inspiring onboarding flow and strong social proof, then experience real value for free — while watermarks, ads, and usage limits create natural, gentle pressure toward **Photix PRO**. Multiple monetization surfaces (a trial-forward onboarding paywall, special-offer dialogs, ad-removal prompts, and hard paywalls at usage limits) convert engaged users into subscribers, who in turn enjoy unlimited, fast, ad-free, watermark-free creation. A built-in review prompt routes happy users to the App Store, and cross-promotion banners grow the wider **AI Journey** app ecosystem.

For a newcomer, the simplest way to understand Photix is this: **it's a pocket-sized creative studio where your imagination is the only input.** Describe an idea, pick a look, or snap a selfie, and in seconds you have a polished image to keep and share. It targets social users, hobbyists, and the AI-curious — anyone who has wanted to create or transform an image but felt they lacked the tools or talent. Photix's core bet is that removing every barrier between imagination and a finished image, and wrapping it in a delightful, low-friction mobile experience, is a product people will happily pay to keep using.
