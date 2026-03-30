import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Operations Auditing & Implementation",
  description:
    "SharpMargin offers a free 48-hour audit, one-time setup packages ($800–1,500), and monthly retainers ($400–600/mo) for small service businesses.",
};

const auditItems = [
  "Full review of your vendor and software contracts",
  "Scheduling and time-tracking audit",
  "Unbilled or under-billed work identification",
  "Cash flow and invoice timing analysis",
  "Written findings report with dollar figures attached",
  "Priority-ranked action plan",
];

const setupItems = [
  "Implement all high-ROI audit findings",
  "Software setup, migration, or cancellation",
  "Vendor renegotiation support",
  "Invoicing and billing workflow build-out",
  "Scheduling system setup",
  "Team SOPs for ongoing margin protection",
];

const retainerItems = [
  "Monthly operations review call",
  "Ongoing vendor and contract monitoring",
  "New software or workflow requests",
  "P&L interpretation and flag alerts",
  "Priority access for urgent issues",
  "Quarterly re-audit and benchmark report",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl">
            Straightforward pricing.
            <br />
            <span className="text-[#C9A84C]">Serious results.</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            Three ways to engage with SharpMargin. Start free — then decide how deep you want to go.
          </p>
        </div>
      </section>

      {/* FREE AUDIT */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl border border-[#C9A84C]/30 bg-[#0C1828]/60 overflow-hidden">
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block px-3 py-1 bg-[#C9A84C] text-[#0C1828] text-xs font-black tracking-widest uppercase rounded mb-6">
                  Free
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                  The 48-Hour Audit
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  No sales call. No commitment. You share your numbers and we get to work. Within 48 hours, you'll have a written report showing exactly where your money and time are leaking — with dollar amounts attached to each finding.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  Most business owners walk away with this report alone and can immediately stop $500–1,000/month in unnecessary spend. If you want us to fix it too, that's what the next tiers are for.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
                >
                  Request Your Free Audit
                </Link>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-5">What's Included</h3>
                <ul className="space-y-3">
                  {auditItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP + RETAINER */}
      <section className="bg-[#0A0A0A] pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Setup */}
            <div className="rounded-xl border border-white/10 bg-[#0C1828]/40 p-8 hover:border-white/20 transition-colors">
              <div className="mb-6">
                <div className="text-xs text-white/40 uppercase tracking-widest mb-1">One-Time</div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">$800</span>
                  <span className="text-white/40 text-lg mb-1">– $1,500</span>
                </div>
                <div className="text-[#C9A84C] text-sm font-semibold mt-1">Setup & Implementation</div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-7">
                We implement every high-ROI finding from the audit. Software, vendors, workflows, invoicing systems — done. Price varies based on complexity and number of systems touched.
              </p>

              <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-4">What's Included</h3>
              <ul className="space-y-2.5 mb-8">
                {setupItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block text-center px-6 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#C9A84C]/10 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Retainer */}
            <div className="rounded-xl border border-[#C9A84C]/20 bg-[#0C1828]/70 p-8 relative">
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded text-[#C9A84C] text-xs font-bold tracking-wider uppercase">
                Most Popular
              </div>

              <div className="mb-6">
                <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Monthly</div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">$400</span>
                  <span className="text-white/40 text-lg mb-1">– $600/mo</span>
                </div>
                <div className="text-[#C9A84C] text-sm font-semibold mt-1">Ongoing Retainer</div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Margin protection on autopilot. We monitor your operations monthly, catch new leaks before they compound, and keep your systems running lean. Think of it as a fractional COO — at a fraction of the cost.
              </p>

              <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-4">What's Included</h3>
              <ul className="space-y-2.5 mb-8">
                {retainerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-[#C9A84C] text-[#0C1828] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#d4b460] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style objection busting */}
      <section className="bg-[#0C1828] py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white tracking-tight mb-12">Common questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Do I have to buy anything after the free audit?",
                a: "No. The audit is genuinely free with no strings attached. You get the report. What you do with it is up to you.",
              },
              {
                q: "How long does implementation take?",
                a: "Most setups are complete within 2–3 weeks. More complex engagements (multiple locations, large team SOPs) may run 4–6 weeks.",
              },
              {
                q: "What if I'm already using a bookkeeper or accountant?",
                a: "Great — we work alongside them. SharpMargin focuses on operational efficiency, not tax strategy. We complement what your accountant does, not compete with it.",
              },
              {
                q: "Can I start with just the retainer?",
                a: "We recommend starting with the free audit so we know exactly where to focus. It makes the retainer dramatically more effective from day one.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/8 pb-8">
                <h3 className="text-white font-bold mb-3">{item.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
