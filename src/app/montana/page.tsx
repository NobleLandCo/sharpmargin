import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Consulting Montana | SharpMargin",
  description:
    "Montana business owners built it themselves. SharpMargin helps them keep more of it — practical margin recovery with no corporate fluff. Free 48-hour audit. Serving Bozeman, Billings, Missoula, Great Falls, and Helena.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SharpMargin — Montana Operations Consulting",
  url: "https://www.sharpmargin.com/montana",
  description:
    "Practical operations consulting for Montana small businesses. We find the overhead waste, fix it, and recover your margin. Free 48-hour audit.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MT",
    addressCountry: "US",
  },
  areaServed: ["Bozeman", "Billings", "Missoula", "Great Falls", "Helena"],
  serviceType: "Operations Consulting",
  priceRange: "$$",
};

const painPoints = [
  {
    number: "01",
    headline: "Built It Yourself. Never Had Time to Audit It.",
    body: "Montana business owners are builders. You created something from nothing — and you ran it on instinct, hard work, and tight margins. But at some point the vendor contracts stopped being reviewed, the software stack grew, and the billing patterns got inconsistent. You were too busy running the operation to audit it.",
  },
  {
    number: "02",
    headline: "Bozeman's Growth Brought New Cost Pressure",
    body: "Bozeman has changed dramatically in the last five years. Rising commercial rents, increased labor competition, and a higher cost-of-living environment mean Montana businesses are paying more to operate without always recovering it in pricing. That gap lives in your overhead — and it's findable.",
  },
  {
    number: "03",
    headline: "No Corporate Consultant Has Ever Focused on Montana",
    body: "The big consulting firms fly to Seattle and Denver. Montana small business owners have never had access to real operational help — so most have never had anyone look at their business with fresh eyes. That means years of preventable overhead accumulation, unreviewed vendor terms, and missed efficiency gains.",
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
    desc: "We review your costs, contracts, billing, and workflows. You get a written report with specific dollar amounts tied to every finding — not a list of suggestions.",
  },
  {
    step: "02",
    title: "Action Plan",
    desc: "We prioritize the fixes by ROI. You see exactly what to do, in what order, and what each change is worth per month. Direct. No strategy theater.",
  },
  {
    step: "03",
    title: "Done-For-You Implementation",
    desc: "We build the systems, renegotiate the contracts, and set up the workflows. You built the business — we fix the back end so you can keep more of what it earns.",
  },
];

export default function MontanaPage() {
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
            Operations Consulting — Montana
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mb-6">
            Montana Business Owners Built It Themselves.
            <br />
            <span className="text-[#C9A84C]">We Help Them Keep More of It.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            No corporate fluff. No strategy decks. SharpMargin does practical margin recovery for Montana small business owners — the kind of people who built their business with their own hands and deserve a back end that works as hard as they do.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free 48-Hour Audit
          </Link>
          <p className="mt-4 text-white/30 text-sm">
            No cost. No commitment. Serving Bozeman, Billings, Missoula, Great Falls &amp; Helena.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Hard work builds revenue. Tight systems build margin.
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
            That&apos;s the money you&apos;ve already earned — it&apos;s just leaving through costs that haven&apos;t been looked at in a while. We find it. You keep it.
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
            Straight to the point. No fluff.
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
            We&apos;ll audit your Montana business in 48 hours — no fluff, no sales pitch, just a written breakdown of where your money is going and how much you can get back.
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
