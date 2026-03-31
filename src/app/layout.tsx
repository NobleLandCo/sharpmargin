import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharpmargin.com"),
  title: {
    default: "SharpMargin — We Find the Bloat. You Keep the Margin.",
    template: "%s | SharpMargin",
  },
  description:
    "SharpMargin audits small service businesses for financial and time leaks — then fixes them. Most clients recover $800–2,400/month. Free 48-hour audit.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sharpmargin.com",
    siteName: "SharpMargin",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "oVH5tmzMB7eAY0bUpWOC8ksPzwI6T7EtE1DT8MrJeuA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-[#0A0A0A] text-[#F2EFE8]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
