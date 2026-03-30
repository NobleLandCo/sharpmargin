import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0C1828] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-[#C9A84C] text-8xl font-black mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-4">Page not found.</h1>
        <p className="text-white/50 mb-8">This page doesn't exist — but your margin leak probably does.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#C9A84C] text-[#0C1828] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#d4b460] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
