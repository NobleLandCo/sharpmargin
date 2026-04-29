import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations Consulting Reno Las Vegas Nevada | SharpMargin",
  description:
    "Nevada's hospitality and service economy runs on razor-thin margins. SharpMargin audits restaurants, hotels, retail, and wellness businesses to recover $800–2,400/month. Free 48-hour audit. Serving Las Vegas, Reno, Henderson, Sparks, and Carson City.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SharpMargin — Nevada Operations Consulting",
  url: "https://www.sharpmargin.com/nevada",
  description:
    "Operations consulting for Nevada service and hospitality businesses. We audit your numbers, find the margin leaks, and fix them. Free 48-hour audit.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: ["Las Vegas", "Reno", "Henderson", "Sparks", "Carson City"],
  serviceType: "Operations Consulting",
  priceRange: "$$",
};

const painPoints = [
  {
    number: "01",
    headline: "Nevada Margins Were Already Thin Before Costs Spiked",
    body: "Restaurants, hotels, and wellness studios in Nevada have always operated close to the edge. When labor costs, vendor pricing, and software subscriptions quietly increased over the last two years, margins that were already tight got compressed further. Most operators haven't done a line-by-line overhead audit since before the increases hit.",
  },
  {
    number: "02",
    headline: "High-Cost Environment, Low-Margin Tolerance",
    body: "Las Vegas and Reno are expensive markets to operate in. Commercial rent is high, staffing turnover is constant, and competition is fierce. In this environment, $500–$900/month in preventable overhead costs — vendor overcharges, software bloat, unbilled service time — is the difference between a viable year and a difficult one.",
  },
  {
    number: "03",
    headline: "Hospitality Businesses Run on Gut Feel, Not Data",
    body: "Most Nevada restaurant and hotel operators are exceptionally good at running the floor. They're not as good at auditing the back office. Vendor contracts get auto-renewed. Software subscriptions accumulate. Insurance rates aren't shopped. The margin is there — it's just buried in costs nobody has looked at recently.",
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
    desc: "We review your vendor contracts, software subscriptions, billing patterns, and scheduling efficiency. You get a written report with dollar figures attached to every finding.",
  },
  {
    step: "02",
    title: "Action Plan",
    desc: "We prioritize every fix by ROI. Specific changes, in order, with expected monthly margin recovery for each. Nothing vague.",
  },
  {
    step: "03",
    title: "Done-For-You Implementation",
    desc: "We renegotiate the contracts, set up the systems, and build the workflows. You run the restaurant, hotel, or studio. We fix the back end.",
  },
];

export default function NevadaPage() {
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
            Operations Consulting — Nevada
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mb-6">
            In a State Built on Margins,
            <br />
            <span className="text-[#C9A84C]">Are Yours Where They Should Be?</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Nevada&apos;s service economy — restaurants, hotels, retail, wellness — runs on margins that don&apos;t forgive waste. SharpMargin audits Nevada hospitality and service businesses to find the overhead that&apos;s quietly eating your profit, then eliminates it. Most clients recover $800–2,400/month.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free 48-Hour Audit
          </Link>
          <p className="mt-4 text-white/30 text-sm">
            No cost. No commitment. Serving Las Vegas, Reno, Henderson, Sparks &amp; Carson City.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Thin margins get thinner when nobody&apos;s watching the back office.
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
            Nevada hospitality and service businesses have specific, predictable margin leaks. We know exactly where to look — and we find them in 48 hours.
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
            We&apos;ll audit your Nevada business in 48 hours — restaurants, hotels, retail, wellness — and show you exactly where the margin is going. Dollar figures on every finding. No commitment required.
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
