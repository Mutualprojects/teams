import Hero from "@/components/Hero";
import StoryFlowSection from "@/components/StoryFlowSection";
import LegacyGallery from "@/components/LegacyGallery";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import WhyUsSection from "@/components/WhyUsSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import FaqSection from "@/components/FaqSection";
import { HeroScrub } from "@/components/ui/hero-scrub";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What flagship sports properties and leagues does Team 7 Sports manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Team 7 Sports conceives, manages, and executes premier sports properties across India—including the Telangana Premier Kabaddi (TPK), UBA Basketball League, Disabled Cricket Tournaments, Floodlight Football Championships, American Football Leagues, and Corporate Sports Olympiads.",
      },
    },
    {
      "@type": "Question",
      name: "How can brands and corporate sponsors partner with Team 7 Sports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design customized high-ROI partnership tiers—ranging from Title & Presenting Sponsorships to arena branding, broadcast graphics integration, digital activations, and VIP hospitality.",
      },
    },
    {
      "@type": "Question",
      name: "How does Team 7 scout and develop grassroots athletic talent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate dedicated scouting networks and regional open trials across tier-2 and tier-3 cities. Selected athletes gain access to professional coaching, athletic conditioning, structured league competition, and direct pathways into national professional circuits.",
      },
    },
    {
      "@type": "Question",
      name: "Are Team 7 Sports tournaments broadcasted live to TV and OTT platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All major Team 7 league matches feature broadcast-grade, multi-camera live production streaming to television channels, regional networks, and digital OTT platforms reaching millions of viewers nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How can federations or investors launch a new sports league with Team 7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with federations, state associations, and private investors to build turnkey league IPs. We handle end-to-end execution—including tournament sanctioning, venue logistics, officiating, team franchise sales, broadcast rights, and brand monetization.",
      },
    },
    {
      "@type": "Question",
      name: "Where are Team 7 Sports corporate headquarters located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our central executive desk is situated in Jubilee Hills / Madhapur Sports Enclave, Hyderabad, Telangana. You can reach out directly via our Contact page or schedule an in-person executive briefing.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] w-full overflow-x-hidden">
      <Hero />
      <StoryFlowSection />
      <VisionMissionSection />
      <LegacyGallery />
      <AboutSection />
      <HeroScrub />
      <ServicesSection />

      <WhyUsSection />
      <SponsorshipSection />
      <FaqSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
