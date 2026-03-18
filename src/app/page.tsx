"use client";

import { useState, FormEvent } from "react";

/* ---------- icon helpers (inline SVGs) ---------- */
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function CheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DropletIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
    </svg>
  );
}

/* ---------- data ---------- */
const services = [
  { title: "Driveways & Sidewalks", desc: "Remove oil stains, grime, and years of buildup to restore your concrete and pavers.", icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" },
  { title: "Decks & Fences", desc: "Bring weathered wood and vinyl back to life with a deep, thorough clean.", icon: "M4 21h16M4 21V10l8-7 8 7v11M3 10h18" },
  { title: "Roofs & Windows", desc: "Gentle soft wash for roofs and streak-free window cleaning that lets the light in.", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
  { title: "Pools & Patios", desc: "Clean pool decks and patio surfaces so your outdoor space looks and feels brand new.", icon: "M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" },
  { title: "Parking Lots", desc: "Commercial-grade cleaning for parking lots, garages, and high-traffic surfaces.", icon: "M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4m-5 0v4m0-4h5m-5 0H9m5 4H9" },
  { title: "Walls & Outdoor Furniture", desc: "Remove mold, mildew, and dirt from exterior walls, fences, and outdoor furniture.", icon: "M4 5h16M4 5v14a2 2 0 002 2h12a2 2 0 002-2V5M4 5l2-2h12l2 2M8 10h8M8 14h4" },
];

const trustPoints = [
  { title: "Veteran Owned", desc: "Veteran owned and operated, proudly serving the Tampa Bay community." },
  { title: "Reliable & On Time", desc: "We show up when we say we will — no excuses, no runaround." },
  { title: "Fully Equipped", desc: "Commercial-grade equipment for every job, big or small." },
  { title: "Satisfaction Guaranteed", desc: "Not happy? We'll come back and make it right. Period." },
];

const serviceOptions = [
  "Driveways & Sidewalks",
  "Decks & Fences",
  "Roofs & Windows",
  "Pools & Patios",
  "Parking Lots",
  "Walls & Outdoor Furniture",
  "Other",
];

/* ---------- components ---------- */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <DropletIcon className="w-7 h-7 text-sky-blue" />
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
              AQUAFORGE <span className="text-sky-blue">|</span> <span className="text-white/80 font-semibold">POWER WASHING</span>
            </span>
          </a>

          {/* Desktop: phone + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:8134000379" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span className="font-semibold">(813) 400-0379</span>
            </a>
            <a
              href="#quote"
              className="bg-sky-blue hover:bg-sky-blue-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-dark-border pt-4 flex flex-col gap-4">
            <a href="tel:8134000379" className="flex items-center gap-2 text-white/80">
              <PhoneIcon className="w-4 h-4" />
              <span className="font-semibold">(813) 400-0379</span>
            </a>
            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="bg-sky-blue text-white font-bold px-6 py-2.5 rounded-lg text-center transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-sky-blue/20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-blue/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sky-blue/10 border border-sky-blue/20 rounded-full px-4 py-1.5 mb-6">
            <DropletIcon className="w-4 h-4 text-sky-blue" />
            <span className="text-sky-blue text-sm font-semibold tracking-wide uppercase">Tampa Bay Area</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Professional Power Washing That{" "}
            <span className="bg-gradient-to-r from-sky-blue via-[#6BC5F0] to-sky-blue bg-clip-text text-transparent">Gets Results</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
            From driveways to rooftops, we blast away years of dirt and grime.
            Locally owned, fully equipped, and committed to your satisfaction.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-sky-blue hover:bg-sky-blue-dark text-white font-bold px-8 py-4 rounded-lg text-center text-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border-2 border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-lg text-center text-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-blue/30 to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our <span className="text-sky-blue">Services</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-sky-blue to-sky-blue/40" />
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            We handle it all — residential and commercial. No job too big, no surface too tough.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-dark-card border border-dark-border border-l-2 border-l-sky-blue/50 rounded-xl p-6 hover:border-sky-blue/40 hover:border-l-sky-blue transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-blue/10 flex items-center justify-center mb-4 group-hover:bg-sky-blue/20 transition-colors">
                <svg className="w-6 h-6 text-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our <span className="text-sky-blue">Service Area</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-sky-blue to-sky-blue/40" />
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Based in Wesley Chapel, FL — also serving Tampa, Land O&apos; Lakes, Lutz, New Tampa, and surrounding communities.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border-2 border-sky-blue/50">
          <iframe
            title="AquaForge Service Area"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112704.0718584529!2d-82.4566899!3d28.2397661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b7e0934edc13%3A0xb20f4f28ebd1b81!2sWesley%20Chapel%2C%20FL!5e0!3m2!1sen!2sus!4v1710000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-dark border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-sky-blue">AquaForge</span>?
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-sky-blue to-sky-blue/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((p) => (
            <div key={p.title} className="text-center bg-dark-card border border-dark-border border-t-2 border-t-sky-blue/50 rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-7 h-7 text-sky-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgonrryj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently fail — form still shows
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="quote" className="py-20 sm:py-28 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get a <span className="text-sky-blue">Free Quote</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-sky-blue to-sky-blue/40" />
          <p className="mt-4 text-white/60 text-lg">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-sky-blue/10 border border-sky-blue/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-sky-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/70">
              We&apos;ve received your request. Someone from our team will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-dark-card border border-dark-border border-l-2 border-l-sky-blue/50 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-sky-blue transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white/80 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-sky-blue transition-colors"
                  placeholder="(813) 555-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-sky-blue transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-white/80 mb-2">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-blue transition-colors appearance-none"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-sky-blue transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-sky-blue hover:bg-sky-blue-dark disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors cursor-pointer"
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <DropletIcon className="w-6 h-6 text-sky-blue" />
            <span className="text-lg font-extrabold text-white tracking-tight">
              AQUAFORGE <span className="text-sky-blue">|</span> <span className="text-white/80 font-semibold">POWER WASHING</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/60">
            <a href="tel:8134000379" className="flex items-center gap-2 hover:text-white transition-colors">
              <PhoneIcon className="w-4 h-4" />
              (813) 400-0379
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="mailto:Aquaforgepw@gmail.com" className="hover:text-white transition-colors">
              Aquaforgepw@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} AquaForge Power Washing. All rights reserved. | Licensed &amp; Insured
        </div>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ServiceArea />
      <WhyChooseUs />
      <QuoteForm />
      <Footer />
    </>
  );
}
