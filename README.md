# Hector Solo landing page

A responsive, one-page pre-launch website for Hector Solo. The site explains the proposed service and collects expressions of interest only. It does not take payment or confirmed bookings.

## Preview locally

1. Install Node.js 22 or later.
2. From this project folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local address shown in the terminal (normally `http://localhost:3000`).

Create a production build with `npm run build`.

## Editing content and styles

- Page wording, sections and form fields: `app/page.tsx`
- Colours, typography, spacing and responsive layout: `app/globals.css`
- SEO and social metadata: `app/layout.tsx`
- Public images and icons: `public/`

The two visual placeholders in `app/page.tsx` are clearly commented. Replace each placeholder block with an `<img>` element when final photography is available. Keep meaningful `alt` text.

## Connect the form

The form currently validates in the browser and shows a demonstration success message without sending data.

### Netlify Forms

1. Keep `name="hector-solo-interest"`, `method="POST"`, `data-netlify="true"` and the hidden `form-name` input.
2. Remove the `onSubmit={handleSubmit}` property from the form.
3. Add a success page and set `action="/success"` on the form, or retain the current success design and submit with `fetch`.
4. Deploy to Netlify and confirm the form appears under **Forms**.

### Formspree

1. Create a form in Formspree and copy its endpoint.
2. Set the form `action` to `https://formspree.io/f/YOUR_FORM_ID`.
3. Remove `data-netlify`, the hidden `form-name` input and `onSubmit={handleSubmit}`.
4. Keep `method="POST"`.

Before collecting real submissions, replace the placeholder email and Instagram links, publish a complete privacy notice, and configure data retention and consent handling.

## Deploy

### Netlify

Import the repository into Netlify. Use `npm run build` as the build command and the framework-detected output. Netlify should detect the Next.js/Vite project automatically.

### Cloudflare / Sites

The included `.openai/hosting.json` and Vite configuration prepare the project for Sites hosting. Build with `npm run build`, then publish through the Sites workflow.

### Other platforms

Import the repository into a host that supports Next.js-compatible Vite output, set the build command to `npm run build`, and follow the host’s output-directory detection.

## Pre-launch checklist

- Replace the placeholder founder and journey visuals
- Replace Instagram and email placeholders
- Add the final privacy notice URL and wording
- Connect and test the chosen form provider
- Test receipt, consent records and unsubscribe handling
- Add a real domain to the SEO and Open Graph metadata
- Recheck all claims before publishing
