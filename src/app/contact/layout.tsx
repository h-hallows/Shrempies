import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partners, press, investors, or curious — get in touch. Inquiries reviewed personally.",
  alternates: { canonical: "https://shrempies.com/contact" },
  openGraph: {
    title: "Contact | Shrempies",
    description: "Say hello.",
    url: "https://shrempies.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
