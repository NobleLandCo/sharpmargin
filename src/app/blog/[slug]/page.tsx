import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | SharpMargin Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              ← Blog
            </Link>
            <span className="text-white/20">·</span>
            <span className="px-2.5 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded text-[#C9A84C] text-xs font-bold tracking-wider uppercase">
              {post.tag}
            </span>
            <span className="text-white/30 text-xs">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/50">{post.date}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#0A0A0A] py-16">
        <div
          className="max-w-4xl mx-auto px-6 text-white/80 leading-relaxed [&_h1]:text-white [&_h1]:text-3xl [&_h1]:font-black [&_h1]:mb-8 [&_h1]:hidden [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-black [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-white [&_a]:text-[#C9A84C] [&_a]:hover:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#0C1828] py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white tracking-tight mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {post.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-8">
                <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Ready to apply this to your business?
          </h2>
          <p className="text-white/60 mb-8">
            Get a free 48-hour operations audit. We&apos;ll show you exactly where your money is going — with dollar figures attached to every finding.
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
