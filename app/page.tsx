"use client";

import { FormEvent, useState } from "react";

const airports = [
  { code: "LHR", name: "Heathrow", note: "West London" },
  { code: "LGW", name: "Gatwick", note: "South of London" },
  { code: "STN", name: "Stansted", note: "North-east of London" },
];

const benefits = [
  ["01", "Hear first", "Receive considered updates as the service takes shape."],
  ["02", "Shape the service", "Tell us which airport you use and how often you travel."],
  ["03", "Keep it simple", "There is no payment, commitment or obligation."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    // Demo success state. When connecting Netlify Forms or Formspree,
    // remove preventDefault above and set the form action as described in README.md.
    setSubmitted(true);
    form.reset();
    window.setTimeout(() => {
      document.getElementById("form-success")?.focus();
    }, 0);
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
          <a className="nav-cta" href="#register">Register interest</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A proposed independent service</p>
            <h1 id="hero-title">Your airport journey. <em>Personally handled.</em></h1>
            <p className="hero-intro">
              A dependable, pre-booked journey from Greater London to the airport,
              with the same trusted driver.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#register">
                Register your interest <span aria-hidden="true">↘</span>
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
              Hector Solo is being developed as a small, independent airport-transfer
              service for people who prefer to know who is driving them.
            </p>
            <p>
              The idea is simple: personal, pre-booked journeys delivered with care,
              reliability and consistency — without the uncertainty of a different
              driver every time.
            </p>
            <aside className="notice">
              <span aria-hidden="true">i</span>
              <p><strong>Hector Solo has not launched yet.</strong> The website is here
                to explain the idea and understand potential demand.</p>
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
            <p className="section-number">03 / Why register</p>
            <h2 id="why-title">An early expression of interest.</h2>
            <p>Registration helps shape the service before launch. It is not a booking request.</p>
          </div>
          <div className="benefit-list">
            {benefits.map(([number, title, text]) => (
              <article className="benefit" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
            <p className="booking-note"><strong>Please note</strong> — registering does not constitute a confirmed booking.</p>
          </div>
        </section>

        <section className="register-section" id="register" aria-labelledby="register-title">
          <div className="register-copy">
            <p className="section-number light">04 / Register interest</p>
            <h2 id="register-title">Tell us about your airport travel.</h2>
            <p>Your answers will help Hector Solo understand likely demand. It takes around two minutes.</p>
            <div className="register-promise">
              <span aria-hidden="true">✓</span>
              <p>No payment details<br /><small>No commitment or confirmed booking</small></p>
            </div>
          </div>

          {submitted ? (
            <div className="success-card" id="form-success" role="status" tabIndex={-1}>
              <span aria-hidden="true">✓</span>
              <p className="eyebrow">Interest registered</p>
              <h3>Thank you. You&apos;re on the list.</h3>
              <p>We&apos;ll use your answers to help shape the proposed service and send occasional launch updates with your consent.</p>
              <button className="text-button" type="button" onClick={() => setSubmitted(false)}>Send another response</button>
            </div>
          ) : (
            <form
              className="interest-form"
              name="hector-solo-interest"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="hector-solo-interest" />
              <div className="field full">
                <label htmlFor="full-name">Full name</label>
                <input id="full-name" name="full-name" type="text" autoComplete="name" required placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="postcode">London postcode</label>
                <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required placeholder="e.g. SW11" pattern="[A-Za-z]{1,2}[0-9][0-9A-Za-z]?\s*[0-9]?[A-Za-z]{0,2}" title="Enter a valid London postcode or postcode district" />
              </div>
              <div className="field">
                <label htmlFor="airport">Most frequently used airport</label>
                <select id="airport" name="airport" required defaultValue="">
                  <option value="" disabled>Select an airport</option>
                  <option>Heathrow</option><option>Gatwick</option><option>Stansted</option>
                  <option>Another airport</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="journeys">Expected airport journeys per year</label>
                <select id="journeys" name="journeys-per-year" required defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>1–2 journeys</option><option>3–5 journeys</option>
                  <option>6–10 journeys</option><option>More than 10 journeys</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Anything else? <span>Optional</span></label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your usual journeys or what matters most to you." />
              </div>
              <label className="consent full" htmlFor="consent">
                <input id="consent" name="consent" type="checkbox" value="yes" required />
                <span>I agree to receive occasional Hector Solo launch updates by email. I can unsubscribe at any time.</span>
              </label>
              <div className="form-submit full">
                <button className="button button-gold" type="submit">Register my interest <span aria-hidden="true">→</span></button>
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
          <p className="eyebrow"><span /> Be there at the beginning</p>
          <h2>Interested in a more personal way to reach the airport?</h2>
          <a className="button button-primary" href="#register">Register your interest <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <a className="wordmark footer-brand" href="#top"><span className="wordmark-mark">HS</span><span>Hector Solo</span></a>
          <p>A proposed independent airport-transfer service for Greater London.</p>
          <div className="footer-links">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="mailto:hello@hectorsolo.co.uk">hello@hectorsolo.co.uk</a>
            <a href="#privacy">Privacy notice</a>
          </div>
        </div>
        <div className="privacy-note" id="privacy">
          <p><strong>Privacy notice:</strong> Details submitted through this site should only be used to understand interest in Hector Solo and, with consent, to send launch updates. Replace this summary with your full privacy policy before collecting live submissions.</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hector Solo. All rights reserved.</p>
          <p>Not yet launched · No bookings taken</p>
        </div>
      </footer>
    </>
  );
}
