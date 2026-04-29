"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    revenue: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const revenueLabel: Record<string, string> = {
        "under-500k": "Under $500K",
        "500k-1m": "$500K – $1M",
        "1m-2m": "$1M – $2M",
        "2m-5m": "$2M – $5M",
        "over-5m": "Over $5M",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1a593a78-030a-4b9c-8e13-f4bf60faee80",
          subject: `New Audit Request — ${form.business}`,
          name: form.name,
          email: form.email,
          business: form.business,
          annual_revenue: form.revenue ? revenueLabel[form.revenue] || form.revenue : "Not provided",
          biggest_pain_point: form.message || "Not provided",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at info@sharpmargin.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0C1828] pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-2xl">
            Start with a
            <br />
            <span className="text-[#C9A84C]">free audit.</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl">
            Fill out the form and we'll be in touch within one business day. No pitch — just questions about your operation.
          </p>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-white font-bold text-lg mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-1.5">Email</div>
                  <a
                    href="mailto:info@sharpmargin.com"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    info@sharpmargin.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-1.5">Schedule a Call</div>
                  <a
                    href="https://calendly.com/sharpmargin-info/one-on-one-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 px-5 py-2.5 bg-[#C9A84C] text-[#0C1828] font-bold text-xs tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors"
                  >
                    Book Free 15-Min Call →
                  </a>
                </div>
                <div>
                  <div className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-1.5">Response Time</div>
                  <div className="text-white/70 text-sm">Within 1 business day</div>
                </div>
                <div>
                  <div className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-1.5">Audit Turnaround</div>
                  <div className="text-white/70 text-sm">48 hours after intake</div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-lg border border-white/8 bg-[#0C1828]/50">
                <div className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-3">What to expect</div>
                <ol className="space-y-3">
                  {[
                    "We'll ask a few questions about your business",
                    "You share access to relevant accounts/data",
                    "We audit and deliver a written findings report",
                    "You decide if you want us to implement",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/50">
                      <span className="text-[#C9A84C] font-bold flex-shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-black text-white mb-3">We got it.</h2>
                    <p className="text-white/50">Expect to hear from Josh within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                        Full Name <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded bg-[#0C1828]/60 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                        Email <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded bg-[#0C1828]/60 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      Business Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded bg-[#0C1828]/60 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      Annual Revenue (approximate)
                    </label>
                    <select
                      name="revenue"
                      value={form.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded bg-[#0C1828]/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0C1828]">Select a range</option>
                      <option value="under-500k" className="bg-[#0C1828]">Under $500K</option>
                      <option value="500k-1m" className="bg-[#0C1828]">$500K – $1M</option>
                      <option value="1m-2m" className="bg-[#0C1828]">$1M – $2M</option>
                      <option value="2m-5m" className="bg-[#0C1828]">$2M – $5M</option>
                      <option value="over-5m" className="bg-[#0C1828]">Over $5M</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      What's the biggest operational headache right now?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your biggest pain point — cash flow timing, software chaos, scheduling gaps, etc."
                      className="w-full px-4 py-3 rounded bg-[#0C1828]/60 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-[#C9A84C] text-[#0C1828] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#d4b460] transition-colors shadow-lg shadow-[#C9A84C]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Request Free Audit"}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    No pitch. No pressure. Just the findings.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
