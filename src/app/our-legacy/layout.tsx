import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Gallery",
  description:
    "Browse the Team 7 Sports legacy gallery — American Football championships, basketball leagues, kabaddi, football, and inclusive grassroots tournaments.",
  alternates: {
    canonical: "/our-legacy",
  },
};

export default function OurLegacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
