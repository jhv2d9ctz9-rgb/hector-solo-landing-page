"use client";

import { FormEvent, useState } from "react";

const airports = [
  { code: "LHR", name: "Heathrow", note: "West London" },
  { code: "LGW", name: "Gatwick", note: "South of London" },
  { code: "STN", name: "Stansted", note: "North-east of London" },
];

const benefits = [
  ["01", "Share how you travel", "Tell us which airport you use and what matters most on the journey."],
  ["02", "Influence the service", "Your priorities will help guide how Hector Solo develops before launch."],
  ["03", "Keep it simple", "There is no payment, commitment or confirmed booking."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSubmitting(true);
    setSubmissionError("");

    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, value.toString()));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setSubmitted(true);
      form.reset();
      window.setTimeout(() => {
        document.getElementById("form-success")?.focus();
      }, 0);
    } catch {
      setSubmissionError("We couldn’t send your response. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hector Solo home">
          <span className="wordmark-mark">HS</span>
          <span>Hector Solo</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#idea">The idea</a>
          <a href="#airports">Airports</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#register">Help shape Hector Solo</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A proposed founder-led service</p>
            <h1 id="hero-title">Your airport journey. <em>Personally handled.</em></h1>
            <p className="hero-intro">
              I&apos;m building a different kind of airport transfer service. Before
              it launches, I&apos;d like your help shaping it.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#register">
                Help Shape Hector Solo <span aria-hidden="true">↘</span>
              </a>
              <p>No payment. No obligation.</p>
            </div>
          </div>

          {/* Decorative placeholder: replace this block with a future service photograph. */}
          <div className="hero-visual" role="img" aria-label="Placeholder for a future Hector Solo journey photograph">
            <div className="visual-route" aria-hidden="true">
              <span className="route-start">London</span>
              <span className="route-line" />
              <span className="route-end">Airport</span>
            </div>
            <p>One driver.<br />One familiar standard.</p>
            <small>Image placeholder</small>
          </div>

          <div className="hero-foot">
            <p>Greater London</p>
            <div aria-hidden="true" />
            <p>Heathrow · Gatwick · Stansted</p>
          </div>
        </section>

        <section className="section intro-section" id="idea" aria-labelledby="idea-title">
          <div>
            <p className="section-number">01 / The idea</p>
            <h2 id="idea-title">A smaller service, by design.</h2>
          </div>
          <div className="prose">
            <p className="lead">
              Hector Solo is a proposed founder-led London airport-transfer service
              for people who value reliability, consistency and personal service.
            </p>
            <p>
              Before launch, the founder is gathering genuine customer interest and
              feedback. What prospective customers share here will help influence
              how the service is developed.
            </p>
            <aside className="notice">
              <span aria-hidden="true">i</span>
              <p><strong>Hector Solo has not launched yet.</strong> This is market
                research, not a booking service, and no confirmed journeys are being accepted.</p>
            </aside>
          </div>
        </section>

        <section className="airports-section" id="airports" aria-labelledby="airports-title">
          <div className="section-heading">
            <div>
              <p className="section-number light">02 / Airports</p>
              <h2 id="airports-title">London to the runway.</h2>
            </div>
            <p>Initially exploring dependable, pre-booked journeys between Greater London and three major airports.</p>
          </div>
          <div className="airport-list">
            {airports.map((airport) => (
              <article className="airport" key={airport.code}>
                <p>{airport.code}</p>
                <h3>{airport.name}</h3>
                <span>{airport.note}</span>
                <span className="airport-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className="airport-disclaimer">Routes shown are part of the proposed service and are not currently available to book.</p>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="why-title">
            <p className="section-number">03 / Why take part</p>
            <h2 id="why-title">Help shape what comes next.</h2>
            <p>Share what matters to you so the service can be developed around genuine customer needs.</p>
          </div>
          <div className="benefit-list">
            {benefits.map(([number, title, text]) => (
              <article className="benefit" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
            <p className="booking-note"><strong>Please note</strong> — taking part is an expression of interest and does not constitute a confirmed booking.</p>
          </div>
        </section>

        <section className="register-section" id="register" aria-labelledby="register-title">
          <div className="register-copy">
            <p className="section-number light">04 / Help shape the service</p>
            <h2 id="register-title">Tell us what matters on your journey.</h2>
            <p>Register your interest and share a little about how you travel. Your answers will help guide the service before launch.</p>
            <div className="register-promise">
              <span aria-hidden="true">✓</span>
              <p>No payment details<br /><small>No commitment or confirmed booking</small></p>
            </div>
          </div>

          {submitted ? (
            <div className="success-card" id="form-success" role="status" tabIndex={-1}>
              <span aria-hidden="true">✓</span>
              <p className="eyebrow">Response received</p>
              <h3>Thank you for helping shape Hector Solo.</h3>
              <p>Your response will help guide how the service is developed before launch.</p>
              <button className="text-button" type="button" onClick={() => setSubmitted(false)}>Send another response</button>
            </div>
          ) : (
            <form
              className="interest-form"
              name="hector-solo-interest"
              method="POST"
              action="/"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="hector-solo-interest" />
              <div className="field">
                <label htmlFor="full-name">Name</label>
                <input id="full-name" name="full-name" type="text" autoComplete="name" required placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
              </div>
              <div className="field full">
                <label htmlFor="airport">Which airport do you use most?</label>
                <select id="airport" name="airport" required defaultValue="">
                  <option value="" disabled>Select an airport</option>
                  <option>Heathrow</option><option>Gatwick</option><option>Stansted</option>
                  <option>Other</option><option>I do not travel regularly</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="priority">What matters most when booking an airport journey?</label>
                <select id="priority" name="booking-priority" required defaultValue="">
                  <option value="" disabled>Select what matters most</option>
                  <option>Reliability</option><option>Price</option>
                  <option>Knowing who the driver is</option><option>Comfort</option>
                  <option>Punctuality</option><option>Help with luggage</option><option>Other</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Optional comments <span>Optional</span></label>
                <textarea id="message" name="message" rows={4} placeholder="What would make you choose Hector Solo instead of an app-based service?" />
              </div>
              <div className="privacy-reassurance full">
                <span aria-hidden="true">i</span>
                <p>Your details will only be used for Hector Solo research and launch updates. They will not be sold or shared for unrelated marketing. <a href="#privacy">Privacy notice placeholder</a></p>
              </div>
              <label className="consent full" htmlFor="consent">
                <input id="consent" name="consent" type="checkbox" value="yes" required />
                <span>I agree to receive Hector Solo research and launch updates by email. I can unsubscribe at any time.</span>
              </label>
              <div className="form-submit full">
                <button className="button button-gold" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Help Shape Hector Solo"} <span aria-hidden="true">→</span>
                </button>
                {submissionError ? <p className="form-error" role="alert">{submissionError}</p> : null}
                <p>By submitting, you confirm this is an expression of interest only — not a booking.</p>
              </div>
            </form>
          )}
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          {/* Founder portrait placeholder: replace with a real portrait when available. */}
          <div className="founder-placeholder" role="img" aria-label="Placeholder for a future founder portrait">
            <span>Founder portrait</span>
          </div>
          <div className="about-copy">
            <p className="section-number">05 / About</p>
            <h2 id="about-title">Built from experience, not assumption.</h2>
            <p className="lead">Hector Solo is being developed by an experienced London private-hire driver who has completed more than 20,000 passenger journeys.</p>
            <p>Years on London&apos;s roads have shown how much customers value calm communication, punctuality and a driver they can trust. Hector Solo is an attempt to bring those qualities together in a more personal airport service.</p>
            <p className="signature">Hector <span>— Founder &amp; driver</span></p>
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow"><span /> Help shape what comes next</p>
          <h2>What would make airport travel feel more personal?</h2>
          <a className="button button-primary" href="#register">Help Shape Hector Solo <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <a className="wordmark footer-brand" href="#top"><span className="wordmark-mark">HS</span><span>Hector Solo</span></a>
          <p>A proposed founder-led airport-transfer service for Greater London.</p>
          <div className="footer-links">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="mailto:hello@hectorsolo.co.uk">hello@hectorsolo.co.uk</a>
            <a href="#privacy">Privacy notice</a>
          </div>
        </div>
        <div className="privacy-note" id="privacy">
          <p><strong>Privacy notice placeholder:</strong> Details submitted through this site will only be used for Hector Solo research and, with consent, launch updates. They will not be sold or shared for unrelated marketing. Replace this summary with a formal privacy notice before collecting live submissions.</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hector Solo. All rights reserved.</p>
          <p>Not yet launched · No bookings taken</p>
        </div>
      </footer>
    </>
  );
}
