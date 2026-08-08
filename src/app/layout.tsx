import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#bed6c5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://team7sports.com"),
  title: {
    default: "Team 7 Sports Management | Revolutionizing Sports. Redefining Leagues.",
    template: "%s | Team 7 Sports Management",
  },
  description:
    "India's premier sports management firm conceptualizing and executing professional leagues in Cricket, Olympic, and Non-Olympic sports.",
  keywords: [
    "Sports Management India",
    "Telangana Premier Kabaddi",
    "TPK",
    "UBA Basketball",
    "Disabled Cricket Telangana",
    "Sports Leagues India",
    "Hyderabad Sports",
  ],
  authors: [{ name: "Team 7 Sports Management Private Limited" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Team 7 Sports Management | Revolutionizing Sports. Redefining Leagues.",
    description:
      "Building inclusive, professionally managed sports leagues to give Indian athletes their moment under the floodlights.",
    siteName: "Team 7 Sports Management",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team 7 Sports Management | Revolutionizing Sports. Redefining Leagues.",
    description:
      "Building inclusive, professionally managed sports leagues to give Indian athletes their moment under the floodlights.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Team 7 Sports Management Private Limited",
  url: "https://team7sports.com",
  logo: "https://team7sports.com/team7-logo.webp",
  description:
    "India's premier sports management firm conceptualizing and executing professional leagues in Cricket, Olympic, and Non-Olympic sports.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  email: "info@team7sports.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Team 7 Sports Management",
  url: "https://team7sports.com",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
