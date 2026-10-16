# Lexcelpack Launchpad

Build Phase 1 of a production-quality website redesign for LEXCELPACK, an established Nigerian manufacturer/supplier of PET bottles, PET preforms, and plastic caps & closures. This is a real B2B company website, not a generic AI startup landing page.

PROJECT NAME: LEXCELPACK Corporate Website

GOAL
Replace the dated, cramped legacy website with a modern, trustworthy, mobile-first industrial corporate website that helps beverage, pharmaceutical, edible-oil, cosmetics, and FMCG businesses understand product capabilities and submit enquiries. Build a maintainable foundation that can be expanded in later phases.

PHASE 1 SCOPE
Create a polished, responsive homepage and shared site foundation, with working navigation and route placeholders/pages for:
- /
- /about
- /products
- /products/pet-bottles
- /products/pet-preforms
- /products/caps-closures
- /manufacturing-quality
- /resources/faq
- /resources/ask-the-expert
- /careers
- /contact
- /request-a-quote
For this phase, implement the homepage fully and make the other routes real, useful placeholder pages with consistent header/footer, meaningful page titles, brief accurate descriptions, and clear next-step CTA. Do not make dead links or buttons. Product pages can be completed in a later phase.

COMPANY FACTS (preserve accurately)
Company: LEXCELPACK
Address: Plot 13, Block XII, Industrial Estate, off Otta–Idi-roko Road, Otta, Ogun State, Nigeria. P.O. Box 1152, Otta, Nigeria.
Phone: +234 1 7743214; +234 1 7740653; +234 39 720456; +234 39 722131.
Fax: +234 39 722142.
Email: info@lexcelpack.com
Legacy website: https://lexcelpack.com/
Legacy content pages include profile.html, profile.htm, management.htm, our_mission.htm, our_vision.htm, mfg_qc.htm, pet_bottle.htm, pet_preform.htm, caps_closure.htm, expert.htm, contact.htm, enquiry.htm, faq.htm, career.htm. Preserve SEO intent and plan redirects when deploying to a compatible host.

PRODUCT CATEGORIES
1. PET bottles: bottles and jars for beverage, pharmaceutical, edible-oil, liquor, and other packaging applications; multiple shapes/capacities and custom requirements.
2. PET preforms: preforms for packaging applications including mineral water, edible oil, pharmaceuticals, cosmetics, carbonated drinks, juice, and FMCG.
3. Caps & closures: assorted plastic caps and closures, including flip-top, pilfer-proof, plain and other styles, with sizes/ranges to be confirmed by company.

CONTENT INTEGRITY
Do not invent certifications, client names/logos, customer testimonials, awards, prices, current production capacities, years of experience, compliance claims, performance guarantees, or technical specifications. Older site content mentions 1.5 million bottles/month and 200,000 preforms/day, but these are unverified historical figures: do not publish them as current facts. Any unclear or potentially outdated technical claim must be omitted or flagged for later confirmation. Do not imply that a form has been delivered to the company unless a real backend/email integration is configured and successful. Never fabricate contact details.

DESIGN DIRECTION
- Premium, established B2B manufacturing identity: confident, precise, clean, practical.
- White/light neutral backgrounds, deep navy text, restrained blue accents, and a small red accent only where useful, inspired by existing corporate branding.
- Strong typography hierarchy, generous spacing, grid-based layout, high-quality real product/industrial photography where available.
- Use the company's existing image assets when suitable:
  https://lexcelpack.com/img/hd-prod1.jpg
  https://lexcelpack.com/img/pet-bottles1.jpg
  https://lexcelpack.com/img/hd-prod2.jpg
  https://lexcelpack.com/img/pet-performs3.jpg
  https://lexcelpack.com/img/hd-prod3.jpg
  https://lexcelpack.com/img/closure1.jpg
  https://lexcelpack.com/img/hd-expert.jpg
  Check image loading and visual relevance; if a legacy image is broken or poor quality, use a restrained neutral fallback, not unrelated imagery.
- Avoid harsh/rainbow gradients, purple-black styling, liquid glass, excessive shadows, multiple competing fonts, emoji icons, generic AI illustrations, floating 3D objects, gimmicky animations, and decorative colored left stripes.
- Use a single coherent font family and Lucide icons. Motion should be subtle and purposeful, with reduced-motion support.
- Responsive at mobile/tablet/desktop, accessible contrast, visible keyboard focus, semantic HTML, accessible labels, and touch-friendly controls.
- Build a strong hero with clear headline about PET packaging solutions, short supporting copy, primary CTA “Request a Quote” and secondary CTA “Explore Products”. Do not overstate company credentials.
- Homepage sections: header/navigation; hero; product category cards for PET Bottles, PET Preforms, Caps & Closures; concise company introduction; manufacturing & quality section phrased without unverified certifications; industry/application strip; enquiry CTA; full footer with contact information and links.
- Header should include accessible responsive mobile menu. Use consistent active/hover/focus states.
- Add sensible SEO metadata, page titles/descriptions, Open Graph basics, favicon placeholder if no verified logo asset is available, and clean semantic heading structure.
- Keep the homepage visually complete above the fold and well-composed on mobile. Do not overuse card borders or shadows.

FUNCTIONAL EXPECTATIONS
- Every navigation link and CTA must navigate to an implemented route or a meaningful external destination.
- “Request a Quote” and “Ask the Expert” should navigate to their respective routes.
- Use reusable layout/components, typed structured product data where useful, and avoid one giant component.
- No fake search, filters, or interactions. If a form is shown in placeholder routes, clearly label it as a Phase 2 interface until a backend is connected; do not imply submission works.
- Include loading/error handling for images and a not-found route.
- Keep code readable and maintainable. Avoid unnecessary dependencies and avoid building a disposable prototype.

IMPLEMENTATION APPROACH
First inspect the generated app structure, then implement the homepage and shared shell cleanly. Use the platform's supported stack. Do not connect a database, add authentication, or add paid services in this phase. Do not deploy/publish automatically. At the end, summarize files/components created, routes available, decisions made, and items intentionally deferred to Phase 2.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c149a974-9b0a-43d7-9c3e-03029a6b434d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
