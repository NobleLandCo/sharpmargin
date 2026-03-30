import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Josh McCorkle & SharpMargin",
  description:
    "SharpMargin was built by Josh McCorkle to give small service businesses access to the same operational rigor that enterprise companies pay consultants six figures to get.",
};

const principles = [
  {
    title: "We show our work.",
    desc: "Every finding comes with a dollar amount. Every recommendation comes with a reason. No hand-waving, no vague frameworks.",
  },
  {
    title: "We implement, not just advise.",
    desc: "Consultants who hand you a slide deck and disappear are the old model. We stay until the system is live and the savings are real.",
  },
  {
    title: "We don't work with everyone.",
    desc: "SharpMargin is built for businesses between $500K–$5M in revenue. Outside that band, we're probably not the right fit — and we'll tell you that upfront.",
  },
  {
    title: "Your margin is yours.",
    desc: "We don't take a percentage of recovered savings. Flat pricing only. If we find you $3,000/month and charge $600, you keep the other $2,400.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">About</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-8">
                Built by an operator.
                <br />
                <span className="text-[#C9A84C]">For operators.</span>
              </h1>
              <p className="text-white/60 leading-relaxed mb-6">
                SharpMargin exists because most small service businesses don't have access to the kind of operational oversight that keeps their margins from bleeding out quietly.
              </p>
              <p className="text-white/60 leading-relaxed">
                Big companies hire COOs and operations directors. You hire another technician and hope the numbers work out. They often don't — not because you're bad at the work, but because no one is watching the systems.
              </p>
            </div>

            {/* Decorative data graphic */}
            <div className="relative">
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A]/80 p-8">
                <div className="text-xs text-white/30 uppercase tracking-widest mb-6">Typical Audit Findings</div>
                <div className="space-y-4">
                  {[
                    { label: "Software Bloat", pct: 78, val: "$240–480/mo" },
                    { label: "Unbilled Time", pct: 65, val: "$600–1,400/mo" },
                    { label: "Vendor Overcharges", pct: 55, val: "$180–360/mo" },
                    { label: "Scheduling Waste", pct: 47, val: "$300–800/mo" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/60">{row.label}</span>
                        <span className="text-[#C9A84C] font-semibold">{row.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C9A84C] to-[#d4b460] rounded-full"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/8 text-xs text-white/30">
                  % of audited businesses where each leak type was found
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-6">Founder</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center">
                <span className="text-[#C9A84C] font-black text-xl">J</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Josh McCorkle</div>
                <div className="text-white/40 text-sm">Founder, SharpMargin</div>
              </div>
            </div>

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                I started SharpMargin because I kept seeing the same pattern: hardworking business owners running solid operations, doing quality work, building real revenue — and still wondering why the margin never seemed to show up.
              </p>
              <p>
                The answer, almost every time, was systems. Not incompetence. Not laziness. Just a dozen small leaks that individually look minor but add up to $20,000–40,000 a year walking out the door.
              </p>
              <p>
                I've spent years inside small service businesses — looking at the books, the scheduling software, the vendor agreements, the invoicing workflows. The same five or six categories keep showing up. And they're fixable. Usually in weeks, not quarters.
              </p>
              <p>
                SharpMargin is the practice I built to do this work at scale, for companies that can't afford a full-time operations director but deserve the same rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#0C1828] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-14">
            What SharpMargin does differently.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-8 rounded-lg border border-white/8 bg-[#0A0A0A]/50">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            See what's leaking in your business.
          </h2>
          <p className="text-white/50 mb-8">The audit is free. No pitch, no pressure. Just the numbers.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
