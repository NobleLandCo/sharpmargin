import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0C1828] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Logo className="h-12 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Operations consulting for small service businesses. We find the leaks. You keep the margin.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-4">Contact</h3>
            <a
              href="mailto:josh@sharpmargin.com"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              josh@sharpmargin.com
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold tracking-wide uppercase rounded hover:bg-[#C9A84C]/10 transition-colors"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} SharpMargin. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built for operators who demand results.
          </p>
        </div>
      </div>
    </footer>
  );
}
