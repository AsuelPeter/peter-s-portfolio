import type { Metadata } from "next";
import { CtaSection, PageHero, Section } from "@/components/ui";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A visual portfolio of STEM events, teen mentorship, electronic engineering, web development, community outreach and renewable energy projects.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that makes an impact"
        intro="Browse moments from workshops, boot camps, community outreach, engineering builds and solar installations. Filter by category and click any image to view it larger."
      />

      <Section>
        <Gallery />
      </Section>

      <CtaSection title="Want to be part of the next project?" />
    </>
  );
}
