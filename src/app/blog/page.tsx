import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Operations & Profit Margin Tips | SharpMargin",
  description:
    "Expert advice on increasing profit margins, reducing overhead, and growing your HVAC or service business. Practical operations insights from SharpMargin.",
};

const posts = [
  {
    slug: "hvac-profit-margin",
    title: "How to Increase Profit Margin for Your HVAC Business",
    description:
      "Most HVAC owners are leaving 8–15% margin on the table without knowing it. Here's exactly where to look and what to fix.",
    date: "March 28, 2026",
    readTime: "9 min read",
    tag: "Profit Margin",
  },
  {
    slug: "small-business-operations-consultant",
    title: "What Does a Small Business Operations Consultant Actually Do?",
    description:
      "Not every business needs a $20K consultant. Learn what an operations consultant really does — and how to know if you need one.",
    date: "March 22, 2026",
    readTime: "8 min read",
    tag: "Operations",
  },
  {
    slug: "reduce-overhead-costs-small-business",
    title: "How to Reduce Overhead Costs for a Small Business (Without Cutting What Matters)",
    description:
      "Overhead isn't the enemy — uncontrolled overhead is. A step-by-step guide to finding and eliminating the bloat in your service business.",
    date: "March 15, 2026",
    readTime: "10 min read",
    tag: "Cost Reduction",
  },
  {
    slug: "hvac-business-growth-strategies",
    title: "HVAC Business Growth Strategies That Actually Move the Needle",
    description:
      "Revenue growth feels good. Profitable growth is what actually builds a business. Here are the HVAC growth strategies worth your time.",
    date: "March 8, 2026",
    readTime: "9 min read",
    tag: "Growth",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl">
            Operations intel for
            <br />
            <span className="text-[#C9A84C]">service business owners.</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            No fluff. No generic advice. Just practical insight on profit margins, overhead, and growth — written for HVAC, plumbing, landscaping, and service businesses under $5M.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-white/10 bg-[#0C1828]/40 p-8 hover:border-[#C9A84C]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-2.5 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded text-[#C9A84C] text-xs font-bold tracking-wider uppercase">
                    {post.tag}
                  </span>
                  <span className="text-white/30 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-black text-white tracking-tight mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-xs">{post.date}</span>
                  <span className="text-[#C9A84C] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1828] py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Ready to stop the leaks?
          </h2>
          <p className="text-white/60 mb-8">
            Get a free 48-hour operations audit. We&apos;ll find where your money is going — with dollar figures attached.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
          >
            Request Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
