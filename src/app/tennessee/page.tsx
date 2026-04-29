import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations Consulting Nashville Tennessee | SharpMargin",
  description:
    "Nashville is booming. Most Tennessee businesses are still leaving thousands behind. SharpMargin audits contractors, restaurants, and trades businesses to find what's leaking — free 48-hour audit. Serving Nashville, Memphis, Knoxville, Chattanooga, and Murfreesboro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SharpMargin — Tennessee Operations Consulting",
  url: "https://www.sharpmargin.com/tennessee",
  description:
    "Operations consulting for Tennessee contractors, restaurants, and trades businesses. We find the margin leaks and fix them. Free 48-hour audit.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "TN",
    addressCountry: "US",
  },
  areaServed: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro"],
  serviceType: "Operations Consulting",
  priceRange: "$$",
};

const painPoints = [
  {
    number: "01",
    headline: "Nashville Growth Masks Operational Inefficiency",
    body: "The Nashville metro is one of the hottest markets in the country. New construction, restaurant openings, and contractor demand are all at highs. But growth masks problems — when every week is booked solid, there's no time to audit vendor contracts, review software costs, or tighten billing. Busy businesses assume they're profitable. Profitable businesses know their numbers.",
  },
  {
    number: "02",
    headline: "Too Busy to Look Under the Hood",
    body: "Tennessee contractors and restaurateurs are doing more work than ever — and taking home a smaller percentage of it. Materials costs are up. Labor is tight. And the back office has been running on autopilot for years. Software subscriptions auto-renew. Supplier prices drift up quietly. Invoices go uncollected. The owner is too busy on the next job to notice.",
  },
  {
    number: "03",
    headline: "Memphis, Knoxville, and Chattanooga Have Real Margin Opportunity",
    body: "Outside Nashville, Tennessee's mid-size markets have independent restaurant owners, manufacturing-adjacent businesses, and trades operators who have never had access to real operational help. The operations waste is the same as everywhere else — the attention just hasn't been there. SharpMargin brings it.",
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
    desc: "We review your vendor contracts, software stack, billing patterns, and scheduling workflows. You get a written breakdown with specific dollar amounts on every finding.",
  },
  {
    step: "02",
    title: "Action Plan",
    desc: "Every fix prioritized by ROI. Not a list of suggestions — a specific roadmap showing what to do, in what order, and what each change recovers monthly.",
  },
  {
    step: "03",
    title: "Done-For-You Implementation",
    desc: "We renegotiate the vendor contracts, set up the systems, and build the workflows. You focus on the business. We stop the leaks.",
  },
];

export default function TennesseePage() {
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
            Operations Consulting — Tennessee
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-5xl mb-6">
            Nashville Is One of the Hottest Markets
            in the Country.{" "}
            <span className="text-[#C9A84C]">
              Most Businesses Here Are Still Leaving Thousands Behind.
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Tennessee contractors, restaurants, and trades businesses are booked solid. That&apos;s not the problem. The problem is that being busy makes it easy to miss what&apos;s leaking out the back — and in a growth market, the leaks compound fast. SharpMargin finds them in 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0C1828] font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free 48-Hour Audit
          </Link>
          <p className="mt-4 text-white/30 text-sm">
            No cost. No commitment. Serving Nashville, Memphis, Knoxville, Chattanooga &amp; Murfreesboro.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl">
            The busier you are, the harder it is to see the leaks.
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
            Tennessee contractors and restaurant operators consistently have the same overhead issues — the scale of the recovery just depends on how long the leaks have been running. Most are findable in 48 hours.
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
            We&apos;ll audit your Tennessee business in 48 hours — contractors, restaurants, trades. Written findings with dollar figures on every item. No commitment, no sales pitch.
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
