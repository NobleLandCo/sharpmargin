import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Launch — Start Your Business in 3 Weeks | SharpMargin",
  description:
    "SharpMargin's Launch service takes you from idea to open for business in 3 weeks. LLC, logo, website, email, CRM — done for you. Flat fee, no fluff.",
};

const whatWeDeliver = [
  { icon: "🏛️", label: "LLC Formation", desc: "Registered in the right state with the right structure. We handle the paperwork, you sign." },
  { icon: "🌐", label: "Domain + Hosting", desc: "Your domain secured, professional email set up, hosting configured. Online before week one is done." },
  { icon: "🎨", label: "Logo + Brand Identity", desc: "A clean, professional logo and brand guide — colors, fonts, tone. Something you're proud to put on a business card." },
  { icon: "💻", label: "Website", desc: "A fast, mobile-optimized website that actually converts. Service pages, contact form, booking link, the works." },
  { icon: "📬", label: "Professional Email", desc: "yourname@yourbusiness.com — not a Gmail. Set up on Zoho or Google Workspace, ready to send." },
  { icon: "📅", label: "Booking + CRM Setup", desc: "Calendly or industry-specific booking, connected to a simple CRM so you never lose a lead." },
  { icon: "📱", label: "Social Profiles Claimed", desc: "Instagram, Facebook, LinkedIn — all claimed, branded, and bio-ready." },
  { icon: "📍", label: "Google Business Profile", desc: "Verified, optimized, and ready to rank in local search from day one." },
];

const process = [
  { step: "01", title: "Discovery Call (30 min)", desc: "Tell us your idea, your market, and what success looks like at 6 months. We'll handle the rest." },
  { step: "02", title: "Week 1 — Legal + Brand", desc: "LLC filed, domain secured, logo designed, brand identity locked in." },
  { step: "03", title: "Week 2 — Digital Presence", desc: "Website built and live, email configured, Google Business Profile claimed, social handles secured." },
  { step: "04", title: "Week 3 — Launch Ready", desc: "CRM and booking set up, a simple marketing plan in hand, and a 30-minute walkthrough so you know exactly how everything works." },
];

const whoItsFor = [
  "You have a real business idea and you're done waiting to start",
  "You've been burned by $10K agency quotes for basic websites",
  "You want a professional setup without the DIY nightmare",
  "You're leaving a job, getting laid off, or going full-time on a side hustle",
  "You want someone who's actually done it — not a consultant who hasn't",
];

export default function LaunchPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">SharpMargin Launch</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl">
            From idea to open
            <br />
            <span className="text-[#C9A84C]">in 3 weeks.</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            LLC. Logo. Website. Email. Booking. Google listing. Social profiles. All of it — done for you, built right, in three weeks flat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
            >
              Start Your Business
            </Link>
            <a
              href="#what-we-deliver"
              className="inline-block px-8 py-4 border border-white/20 text-white/70 font-semibold text-sm tracking-wider uppercase rounded hover:border-white/40 hover:text-white transition-colors"
            >
              See What's Included
            </a>
          </div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="bg-[#0A0A0A] py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#C9A84C]/30 bg-[#0C1828]/60 p-8 md:col-span-2">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Flat Fee</div>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-5xl font-black text-white">$1,500</span>
                <span className="text-white/40 text-xl mb-1">– $2,500</span>
              </div>
              <p className="text-white/60 leading-relaxed">
                Everything to launch your business — done in 3 weeks. Price varies by complexity: number of service lines, website pages, and state of LLC formation. One flat fee, no hourly surprises, no ongoing obligation.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0C1828]/40 p-8">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Add On</div>
              <p className="text-[#C9A84C] font-bold text-lg mb-2">Stay Sharp</p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                After launch, keep the momentum with a SharpMargin monthly retainer — operations monitoring, SEO content, and ongoing optimization.
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider">$400–600/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section id="what-we-deliver" className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">What's Included</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 max-w-2xl">
            Everything a real business needs to launch.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mb-16">
            Not a template. Not a course. We build it, set it up, and hand you the keys — ready to take your first customer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDeliver.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/8 bg-[#0C1828]/40 p-6 hover:border-white/16 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="bg-[#0C1828] py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Process</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-16 max-w-2xl">
            Three weeks. Zero guesswork.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-black text-[#C9A84C]/20 mb-4">{item.step}</div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-[#0A0A0A] py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Who It's For</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
                You have the idea. We do the rest.
              </h2>
              <ul className="space-y-4">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#C9A84C] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/20 bg-[#0C1828]/60 p-10">
              <p className="text-white/50 text-sm uppercase tracking-wider font-bold mb-6">The honest pitch</p>
              <p className="text-white text-lg leading-relaxed mb-6">
                "Most new business owners spend 3–6 months stuck on setup instead of getting their first customer. We compress that into 3 weeks — and we've done it ourselves, multiple times."
              </p>
              <p className="text-[#C9A84C] font-bold">— Josh McCorkle, SharpMargin</p>
              <p className="text-white/40 text-sm mt-1">Founder, Noble Land Co. · Knot & Nail Co. · SharpMargin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1828] py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to stop planning
            <br />
            <span className="text-[#C9A84C]">and start building?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Fill out the contact form, tell us your idea, and we'll get back to you within 24 hours with a scope and a flat-fee quote.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
          >
            Let's Build Your Business
          </Link>
          <p className="text-white/30 text-xs mt-6">No commitment required. First call is free.</p>
        </div>
      </section>
    </>
  );
}

