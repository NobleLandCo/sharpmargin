import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Consulting Tulsa Oklahoma City | SharpMargin",
  description:
    "Tulsa and OKC business owners work hard. Most have never had a consultant actually work for them. SharpMargin fills the gap — free 48-hour audit for Oklahoma contractors and trades businesses. Serving Tulsa, Oklahoma City, Norman, Broken Arrow, and Edmond.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SharpMargin — Oklahoma Operations Consulting",
  url: "https://www.sharpmargin.com/oklahoma",
  description:
    "Operations consulting for Oklahoma contractors and small businesses. We do the work big consulting firms skip. Free 48-hour audit.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: ["Tulsa", "Oklahoma City", "Norman", "Broken Arrow", "Edmond"],
  serviceType: "Operations Consulting",
  priceRange: "$$",
};

const painPoints = [
  {
    number: "01",
    headline: "Big Consulting Firms Skip Oklahoma",
    body: "The major consulting firms fly to Dallas and Denver. Oklahoma small business owners — especially contractors and trades operators in Tulsa and OKC — have been operating without access to real operational help. That means years of overhead accumulation, unreviewed vendor contracts, and margin leaks that nobody has looked at with fresh eyes.",
  },
  {
    number: "02",
    headline: "Oklahoma Contractors Are Busy. Their Back Offices Aren't.",
    body: "Tulsa and Oklahoma City have exceptional contractor density. HVAC, plumbing, electrical, roofing — there's no shortage of work. But being booked solid means the back office runs on autopilot. Supplier contracts don't get renegotiated. Software accumulates. Billing stays inconsistent. Every year that passes without an audit, the leaks compound.",
  },
  {
    number: "03",
    headline: "Most Oklahoma Business Owners Have Never Had a Real Operations Audit",
    body: "If you've been running your business for 5–15 years without someone doing a thorough operational review — vendor contracts, software spend, scheduling efficiency, billing patterns — there's almost certainly $800–2,400/month sitting in preventable costs. Not because you're doing anything wrong. Because nobody's ever looked.",
  },
];

const stats = [
  { value: "$800–2,400", label: "avg. monthly recovery per client" },
  { value: "48 hrs", label: "free audit turnaround" },
  { value: "0", label: "cost to start — no commitment" },
];

const steps = [
  {
    step: "01",
    title: "Free 48-Hour Audit",
    desc: "We review your vendor contracts, software subscriptions, billing patterns, and operational workflows. You get a written report with dollar figures tied to every finding — not vague suggestions.",
  },
  {
    step: "02",
    title: "Action Plan",
    desc: "Every fix prioritized by what it recovers. You see exactly what to change, in what order, and what each change puts back in your pocket monthly.",
  },
  {
    step: "03",
    title: "Done-For-You Implementation",
    desc: "We do the actual work — renegotiating contracts, setting up systems, building workflows. You run the business. We handle the back end.",
  },
];

export default function OklahomaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0C1828] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1828] via-[#0C1828] to-[#071020]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#C9A84C]/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-6">
            Operations Consulting — Oklahoma
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-5xl mb-6">
            Tulsa and OKC Business Owners Work Hard.{" "}
            <span className="text-[#C9A84C]">
              Most Have Never Had a Consultant Actually Work For Them.
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Big consulting firms fly over Oklahoma on their way to Dallas. SharpMargin doesn&apos;t. We do practical operations audits for Oklahoma contractors, trades businesses, and small operators — finding the margin that&apos;s been leaking for years and getting it back in 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free 48-Hour Audit
          </Link>
          <p className="mt-4 text-white/30 text-sm">
            No cost. No commitment. Serving Tulsa, OKC, Norman, Broken Arrow &amp; Edmond.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Oklahoma got skipped. The overhead stayed.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div
                key={point.number}
                className="rounded-xl border border-white/10 bg-[#0C1828]/40 p-8"
              >
                <span className="text-[#C9A84C] text-4xl font-black block mb-4">{point.number}</span>
                <h3 className="text-white font-black text-xl tracking-tight mb-4">{point.headline}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#0C1828] py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Results</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 max-w-2xl">
            Most clients recover $800–2,400/month.
          </h2>
          <p className="text-white/50 max-w-2xl mb-16 leading-relaxed">
            Oklahoma contractors and trades businesses have predictable, findable overhead waste. We know what to look for and where. The audit takes 48 hours. The savings are permanent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-8 text-center"
              >
                <div className="text-4xl font-black text-[#C9A84C] mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Straight talk. Real work. Actual results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col">
                <span className="text-[#C9A84C] text-5xl font-black mb-4">{s.step}</span>
                <h3 className="text-white font-black text-xl tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1828] py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to stop the leaks?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            We&apos;ll audit your Oklahoma business in 48 hours — contractors, trades, small operators. A written breakdown with real dollar figures on every finding. No commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Request Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
