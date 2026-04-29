import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations Consulting Boise Idaho | SharpMargin",
  description:
    "Idaho's fastest-growing businesses are bleeding money through bloated vendor contracts, billing gaps, and scheduling chaos. SharpMargin finds the leaks — free 48-hour audit. Serving Boise, Meridian, Nampa, Coeur d'Alene, and Twin Falls.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SharpMargin — Idaho Operations Consulting",
  url: "https://www.sharpmargin.com/idaho",
  description:
    "Operations consulting for Idaho small businesses. We audit your numbers, find the waste, and recover your margin. Free 48-hour audit.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "ID",
    addressCountry: "US",
  },
  areaServed: ["Boise", "Meridian", "Nampa", "Coeur d'Alene", "Twin Falls"],
  serviceType: "Operations Consulting",
  priceRange: "$$",
};

const painPoints = [
  {
    number: "01",
    headline: "Rapid Growth Masked a Messy Back End",
    body: "Idaho's population boom pulled revenue forward — but most businesses scaled fast without scaling their operations. Now you're paying vendors you haven't renegotiated in years, running software you don't fully use, and billing jobs inconsistently. The money is there. It's just leaking.",
  },
  {
    number: "02",
    headline: "You're Too Busy Running the Business to Audit It",
    body: "Boise and Meridian operators are booked solid. Nampa contractors have more work than they can handle. But being busy isn't the same as being profitable. Most Idaho small business owners haven't looked at their overhead line-by-line in over a year — and that's exactly where the waste lives.",
  },
  {
    number: "03",
    headline: "Your Competitors Are Leaner Than You Think",
    body: "Idaho's growth attracted sharp operators from California and the Pacific Northwest who built their businesses with tighter margins from the start. If you built yours organically over the last 5–10 years, there's likely $800–2,400/month sitting in costs you didn't have time to fix. That gap compounds.",
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
    desc: "We review your vendor contracts, software spend, billing patterns, and scheduling efficiency. You get a written breakdown with dollar amounts attached to every finding.",
  },
  {
    step: "02",
    title: "Action Plan",
    desc: "We prioritize every fix by ROI. No vague recommendations — specific changes, in order, with expected monthly recovery for each.",
  },
  {
    step: "03",
    title: "Done-For-You Implementation",
    desc: "We don't hand you a list and walk away. SharpMargin renegotiates contracts, sets up systems, and builds the workflows. You run the business.",
  },
];

export default function IdahoPage() {
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
            Operations Consulting — Idaho
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mb-6">
            Boise Is Booming.
            <br />
            <span className="text-[#C9A84C]">Is Your Business Keeping Up?</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Idaho is the fastest-growing state in the country. That rapid growth is good for revenue — but it's brutal on operations. Most Idaho businesses scaled fast and left behind a back end full of bloated vendor contracts, billing gaps, and scheduling inefficiency. SharpMargin finds the money you're losing and gets it back.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free 48-Hour Audit
          </Link>
          <p className="mt-4 text-white/30 text-sm">
            No cost. No commitment. Serving Boise, Meridian, Nampa, Coeur d&apos;Alene &amp; Twin Falls.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Growth is great. Uncontrolled overhead isn&apos;t.
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
            That&apos;s not a guarantee — it&apos;s what we find, consistently, in service businesses that haven&apos;t audited their operations in the last year. The money is already there. We just locate it.
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
            Three steps. Zero fluff.
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
            We&apos;ll audit your Idaho business in 48 hours and show you exactly where the money is going — with dollar figures on every finding. No commitment required.
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
