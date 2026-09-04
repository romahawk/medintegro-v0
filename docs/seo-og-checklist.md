# SEO / OG Checklist

## OG image assets

- Ukrainian homepage uses `/public/og/og-image-uk.jpg`
- English homepage uses `/public/og/og-image-en.jpg`
- Both images are generated from the in-repo operating room photo using `scripts/generate-multilingual-og-images.ps1`

## Route metadata mapping

- `/` uses Ukrainian title, description, Open Graph, Twitter, canonical, and hreflang metadata
- `/en` uses English title, description, Open Graph, Twitter, canonical, and hreflang metadata
- `x-default` points to `https://www.medintegro.com.ua/en`
- Full model documented in `docs/seo-architecture.md`

## Local verification

1. Run `npm run build`
2. Confirm the image files exist:
   - `public/og/og-image-uk.jpg`
   - `public/og/og-image-en.jpg`
3. Confirm the routes render:
   - `/`
   - `/en`
4. Inspect generated metadata for:
   - `<title>`
   - `description`
   - `canonical`
   - `og:title`
   - `og:description`
   - `og:image`
   - `twitter:image`
   - `hreflang` alternates

## External validation tools

- Facebook Sharing Debugger
- LinkedIn Post Inspector
- Open Graph preview checker

## Cache note

Social platforms cache link previews aggressively. After deploying metadata or OG image changes, re-scrape the affected URLs in the tools above to refresh the preview.
