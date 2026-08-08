import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "From a 2012 grassroots dream to India's multi-sport league pioneer — explore Team 7 Sports Management's journey across Telangana and beyond.",
  alternates: {
    canonical: "/our-journey",
  },
};

export default function OurJourneyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
