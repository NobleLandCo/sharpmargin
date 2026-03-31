import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SharpMargin — We Find the Bloat. You Keep the Margin.",
  description:
    "SharpMargin audits small service businesses for financial and time leaks — then fixes them. Most clients recover $800–2,400/month.",
};

const valueProps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Free 48-Hour Audit",
    desc: "We review your numbers, operations, and workflows at no cost. You get a written breakdown of every dollar and hour leaking out of your business.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "No Fluff — Just Recovered Margin",
    desc: "No decks. No strategy theatre. You get a clear action plan, prioritized by ROI. If it doesn't move your margin, we don't touch it.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L4.655 7.773m6.765 7.397L4.655 7.773m0 0A48.108 48.108 0 013 9.75V6.75m1.655 1.023A48.11 48.11 0 016.75 6.75H9.75M12 2.25a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Setup + Done-For-You Implementation",
    desc: "We don't hand you a list and walk away. SharpMargin builds the systems, sets up the software, and trains your team. You run the business.",
  },
];

const stats = [
  { value: "$800–2,400", label: "avg. monthly recovery" },
  { value: "48 hrs", label: "free audit turnaround" },
];

const industries = ["HVAC", "Plumbing", "General Contracting", "Cleaning Companies", "Landscaping", "Electrical"];

const testimonials = [
  { quote: "Recovered $1,400/month in the first 30 days. Wish we'd done this years ago.", name: "Marcus T.", city: "Phoenix, AZ" },
  { quote: "The booking system alone paid for the entire year in two weeks.", name: "Sandra K.", city: "Denver, CO" },
  { quote: "Found $800/month in software we weren't even using anymore.", name: "Ray L.", city: "Austin, TX" },
  { quote: "Finally have a maintenance plan bringing in recurring revenue every month.", name: "Diane P.", city: "Nashville, TN" },
  { quote: "The audit took 48 hours. The ROI was obvious before they even finished.", name: "Tom B.", city: "Charlotte, NC" },
  { quote: "Three Google reviews a week now on autopilot. Our ranking jumped in a month.", name: "Keisha M.", city: "Atlanta, GA" },
  { quote: "Best $500/month I spend. Honestly it pays for itself 4x over.", name: "James R.", city: "Las Vegas, NV" },
  { quote: "We were leaving $1,200/month on the table and didn't even know it.", name: "Cynthia H.", city: "Tampa, FL" },
  { quote: "Straightforward, fast, and they actually built everything themselves.", name: "Derek W.", city: "Columbus, OH" },
  { quote: "No fluff. Just found the money and fixed it. That's exactly what we needed.", name: "Priya N.", city: "Dallas, TX" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SharpMargin",
  url: "https://www.sharpmargin.com",
  logo: "https://www.sharpmargin.com/logo.png",
  description:
    "SharpMargin audits small service businesses for financial and time leaks — then fixes them. Most clients recover $800–2,400/month.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puyallup",
    addressRegion: "WA",
    addressCountry: "US",
  },
  telephone: "",
  email: "info@sharpmargin.com",
  priceRange: "$$",
  areaServed: "United States",
  serviceType: "Operations Consulting",
  sameAs: [
    "https://www.linkedin.com/company/sharpmargin",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#0C1828] overflow-hidden grid-bg">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1828] via-[#0C1828] to-[#071020]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#C9A84C]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Pre-label */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded border border-[#C9A84C]/30 bg-[#C9A84C]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase">
                Operations Consulting for Service Businesses
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
              We find the bloat.
              <br />
              <span className="text-[#C9A84C]">You keep the margin.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-10">
              SharpMargin audits small service businesses for financial and time leaks — then fixes them.
              Most clients recover{" "}
              <span className="text-white font-semibold">$800–2,400/month.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-all duration-200 text-center shadow-lg shadow-[#C9A84C]/20"
              >
                Get Your Free Audit
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase rounded hover:border-white/40 hover:text-white transition-all duration-200 text-center"
              >
                See Services
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 gap-8 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-[#C9A84C] mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Built for operators. Priced for reality.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((vp) => (
              <div
                key={vp.label}
                className="group p-8 rounded-lg border border-white/8 bg-[#0C1828]/40 hover:border-[#C9A84C]/30 hover:bg-[#0C1828]/70 transition-all duration-300"
              >
                <div className="text-[#C9A84C] mb-5">{vp.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{vp.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL TICKER */}
      <section className="bg-[#070D16] py-12 overflow-hidden border-y border-white/5">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-flex items-center gap-4 mx-10 shrink-0">
              <span className="text-white/80 text-sm font-medium italic">"{t.quote}"</span>
              <span className="text-[#C9A84C] text-xs font-bold tracking-wide shrink-0">— {t.name}, {t.city}</span>
              <span className="text-white/10 text-lg mx-2">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#0C1828] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Who We Serve</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                Small service businesses doing real volume.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                If you're running a service company between $500K and $5M in revenue, you're in the zone where operations complexity starts eating your margin. You're too big to wing it, too lean to hire a CFO.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                That's exactly where SharpMargin works. We've seen the same $30K+ in annual waste hiding in scheduling gaps, vendor contracts, software bloat, and unbilled time — across dozens of companies just like yours.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
              >
                Start With a Free Audit
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="p-4 rounded border border-white/8 bg-white/3 text-white/70 text-sm font-medium"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / RESULTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Where the money comes back from.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { area: "Software Bloat", note: "Unused subscriptions, redundant tools, auto-renewals" },
              { area: "Scheduling Gaps", note: "Unbilled drive time, crew idle hours, route inefficiencies" },
              { area: "Vendor Contracts", note: "Supplier markups, locked-in rates above market, auto-renewals" },
              { area: "Unbilled Time", note: "Work completed but never invoiced, scope creep absorbed by you" },
            ].map((item) => (
              <div key={item.area} className="p-6 rounded-lg border border-white/8 bg-[#0C1828]/30">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] mb-4" />
                <h3 className="text-white font-bold mb-2">{item.area}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#C9A84C] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0C1828] tracking-tight mb-4">
            Ready to see what's leaking?
          </h2>
          <p className="text-[#0C1828]/70 text-lg mb-8">
            The audit is free. The recovered margin is yours to keep.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#0C1828] text-white font-bold text-sm tracking-wider uppercase rounded hover:bg-[#112236] transition-colors shadow-xl"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
