import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Hector Solo landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hector Solo \| Personal Airport Journeys from London<\/title>/i);
  assert.match(html, /Your airport journey\./);
  assert.match(html, /Hector Solo has not launched yet/);
  assert.match(html, /Heathrow/);
  assert.match(html, /Gatwick/);
  assert.match(html, /Stansted/);
  assert.match(html, /name="hector-solo-interest"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /20,000 passenger journeys/);
  assert.match(html, /Registration does not constitute a confirmed booking|registering does not constitute a confirmed booking/i);
  assert.match(html, /property="og:image" content="\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("keeps the pre-launch safeguards and accessible form contract in source", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /No payment\. No obligation\./);
  assert.match(page, /not a booking/i);
  assert.match(page, /htmlFor="full-name"/);
  assert.match(page, /htmlFor="consent"/);
  assert.match(page, /form\.reportValidity\(\)/);
  assert.match(page, /role="status"/);
  assert.match(page, /tabIndex=\{-1\}/);
  assert.match(layout, /Hector Solo \| Personal Airport Journeys from London/);
  assert.match(css, /@media \(min-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);

  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
