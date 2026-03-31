import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — SharpMargin Operations Consulting",
  description:
    "Answers to the most common questions about SharpMargin's operations auditing, implementation, and retainer services for small service businesses.",
};

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with small service businesses in the $500K–$5M revenue range — primarily HVAC, plumbing, electrical, landscaping, pest control, and similar field service companies. If you run a service business with technicians in the field, we can almost certainly help.",
  },
  {
    q: "What is the free 48-hour audit?",
    a: "The audit is a written analysis of your business operations — vendor contracts, software subscriptions, billing patterns, scheduling efficiency, and cash flow timing. You share your numbers, we get to work, and within 48 hours you receive a written report showing exactly where your money and time are leaking — with dollar figures attached to each finding. No sales call, no commitment.",
  },
  {
    q: "What do I need to provide for the audit?",
    a: "A recent P&L statement (last 3–6 months), a list of your active software subscriptions, and a brief overview of how your business operates day-to-day. If you have vendor contracts or insurance summaries available, those help too. The more context we have, the sharper the findings.",
  },
  {
    q: "Is the free audit really free? What's the catch?",
    a: "It's genuinely free. No credit card, no obligation, no sales pitch embedded in the findings. Most business owners walk away from the audit report and can immediately act on findings themselves. If you want us to implement the fixes too, that's what the paid tiers are for — but there's no pressure.",
  },
  {
    q: "How much can I realistically save from an audit?",
    a: "Most businesses in the $500K–$3M range identify $800–$2,500/month in recoverable costs during an initial audit. Common sources: software subscriptions they forgot they're paying for, supplier contracts with above-market rates, revenue leakage from unbilled callbacks, and scheduling inefficiencies that reduce technician utilization.",
  },
  {
    q: "What does the Setup & Implementation package include?",
    a: "The one-time implementation package ($800–$1,500) covers taking the audit findings and actually fixing them: canceling or renegotiating contracts, setting up or migrating software, building out invoicing workflows, optimizing scheduling systems, and creating SOPs for your team. Price varies based on complexity and how many systems we're touching.",
  },
  {
    q: "What's included in the monthly retainer?",
    a: "The retainer ($400–$600/month) includes a monthly operations review call, ongoing vendor and contract monitoring, new software or workflow requests as they come up, P&L interpretation and alert flags, priority access for urgent operational issues, and a quarterly re-audit to benchmark progress. Think of it as a fractional COO at a fraction of the cost.",
  },
  {
    q: "How is SharpMargin different from a bookkeeper or accountant?",
    a: "Bookkeepers record transactions. Accountants handle taxes and compliance. SharpMargin focuses on operational efficiency — how your business runs, where you're losing money through process and cost inefficiency, and what to change to improve margins. We complement your bookkeeper and accountant rather than replacing them.",
  },
  {
    q: "How long does implementation take?",
    a: "Most implementations complete within 2–3 weeks. Businesses with multiple locations, large teams, or complex software migrations may run 4–6 weeks. We'll give you a realistic timeline after the audit, before any commitment.",
  },
  {
    q: "Do you work with businesses outside of HVAC?",
    a: "Yes. While much of our experience is in HVAC, plumbing, and field service trades, the operational patterns we address — software bloat, scheduling inefficiency, supplier cost drift, revenue leakage — exist across all service business categories. If you're a service business under $5M, reach out.",
  },
  {
    q: "Can I start with just the retainer, without the audit or implementation?",
    a: "We strongly recommend starting with the free audit. Without a baseline analysis, a retainer engagement lacks direction. The audit takes 48 hours and is free — it makes every subsequent engagement dramatically more effective.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the short form on our contact page and we'll follow up within one business day to get the audit started. The whole process takes about 15 minutes of your time upfront — then we do the work and come back to you with findings.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl">
            Questions we get
            <br />
            <span className="text-[#C9A84C]">all the time.</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            Straight answers about what SharpMargin does, how the audit works, and what you can realistically expect.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-white/8 py-8"
              >
                <h2 className="text-white font-bold text-lg mb-3">{faq.q}</h2>
                <p className="text-white/55 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1828] py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Still have questions?
          </h2>
          <p className="text-white/60 mb-8">
            The fastest way to get answers for your specific situation is the free audit. Fill out the form and we&apos;ll be in touch within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
          >
            Request Your Free Audit
          </Link>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
