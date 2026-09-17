import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink, CtaSection, Eyebrow, PageHero, Section, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { energy } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Renewable Energy",
  description:
    "Solar and inverter installation, procurement and training by Peter Asuelinmhen — reliable, clean energy for homes, schools and businesses in Nigeria.",
  alternates: { canonical: "/renewable-energy" },
};

export default function RenewableEnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Renewable energy"
        title="Installation, Procurement & Training"
        intro={energy.intro}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request a quote</ButtonLink>
          <ButtonLink href="/portfolio" variant="outline">
            See installations
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {energy.offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-line bg-surface/60 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-brand">
                  <ServiceIcon name={item.icon} className="h-6 w-6" width={24} height={24} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Featured projects"
          title="Systems designed, installed and maintained"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {energy.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70}>
              <article className="group overflow-hidden rounded-3xl border border-line bg-surface/60 transition-all hover:-translate-y-1 hover:border-brand/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="p-5 text-base font-semibold">{project.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Process"
          title="From first consultation to lasting power"
          intro="Clean, standards-compliant work with documentation and training at every stage."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {energy.process.map((item, i) => (
            <Reveal key={item.step} delay={i * 70}>
              <div className="h-full rounded-3xl border border-line bg-surface/60 p-6">
                <p className="font-display text-3xl font-semibold text-brand/40">{item.step}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">On site</h2>
        <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {energy.gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 60} className="break-inside-avoid">
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={src}
                  alt={`Renewable energy project ${i + 1}`}
                  width={1400}
                  height={1000}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Planning a solar or inverter installation?"
        intro="Share your site, load requirements and budget. I'll help you choose the right system and take care of procurement, installation and training."
      />
    </>
  );
}
