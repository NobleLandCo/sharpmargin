import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get Your Free Audit",
  description:
    "Request a free 48-hour operations audit for your service business. No commitment, no pitch — just a clear report of what's leaking.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
