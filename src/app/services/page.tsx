import type { Metadata } from "next";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Publications } from "@/components/resume";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "STEMR workshops, curriculum development, electronic engineering, renewable energy, teen mentorship and technical writing by Peter Asuelinmhen.",
  alternates: { canonical: "/services" },
};

const process = [
  { step: "01", title: "Discover", text: "We talk through your requirements, audience and goals." },
  { step: "02", title: "Design", text: "I blueprint the programme, system or content around those goals." },
  { step: "03", title: "Deliver", text: "I build, facilitate and install to a high standard." },
  { step: "04", title: "Support", text: "Handover, training and follow-up so results last." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="My work"
        title="Services built around real outcomes"
        intro="From understanding your requirements and designing a blueprint to delivering the final product, I do everything that falls in between."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <ServiceCard service={service} withImage />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="How I work"
          title="A simple, dependable process"
          intro="Every engagement follows the same four steps, whether it is a weekend workshop or a full solar installation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 70}>
              <div className="h-full rounded-3xl border border-line bg-surface/60 p-6">
                <p className="font-display text-3xl font-semibold text-brand/40">{item.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Publications" title="Grounded in research" />
        <div className="mt-12">
          <Publications />
        </div>
      </Section>

      <CtaSection title="Ready to plan your next programme or project?" />
    </>
  );
}
