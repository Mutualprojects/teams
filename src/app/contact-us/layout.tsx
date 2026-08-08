import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Partner with Team 7 Sports Management. Sponsorships, media, league partnerships, and participation inquiries — reach our Hyderabad office today.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
