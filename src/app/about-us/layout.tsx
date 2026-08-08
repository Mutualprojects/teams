import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Team 7 Sports Management — India's premier multi-sport league builder with 14 years of professional sports management across Cricket, Olympic, and Non-Olympic sports.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
