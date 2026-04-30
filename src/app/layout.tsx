import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OceanCursor from "@/components/ui/OceanCursor";

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shrempies.com"),
  title: {
    default: "Shrempies — A World of Wonder for the Newest Generation",
    template: "%s | Shrempies",
  },
  description:
    "Original songs, characters, and stories for babies and toddlers. Emotionally honest, developmentally grounded. Zero ads. Zero data.",
  keywords: [
    "Shrempies",
    "children's songs",
    "toddler songs",
    "baby songs",
    "songs about feelings",
    "kids music",
    "screen-free kids",
    "Gen Beta",
    "emotional intelligence for kids",
  ],
  alternates: { canonical: "https://shrempies.com" },
  openGraph: {
    siteName: "Shrempies",
    type: "website",
    locale: "en_US",
    url: "https://shrempies.com",
    title: "Shrempies — A World of Wonder for the Newest Generation",
    description: "Where every feeling has a name.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrempies",
    description: "Where every feeling has a name.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport = {
  themeColor: "#FBF8F3",
  colorScheme: "light",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shrempies",
  url: "https://shrempies.com",
  logo: "https://shrempies.com/shrempies-logo.webp",
  description:
    "Original songs, characters, and stories for babies and toddlers. Emotionally honest, developmentally grounded.",
  sameAs: [
    "https://youtube.com/@shrempies",
    "https://shrempies.myshopify.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general",
    url: "https://shrempies.com/contact",
  },
};

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://shrempies.com",
  name: "Shrempies",
  description: "Where every feeling has a name.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }}
        />
        <OceanCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
