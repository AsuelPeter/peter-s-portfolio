import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink, CtaSection, Eyebrow, PageHero, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { workshops } from "@/data/programmes";

export const metadata: Metadata = {
  title: "STEM Workshops",
  description:
    "STEM and robotics workshops, curriculum development and holiday boot camps for schools, teens and educators, led by Peter Asuelinmhen.",
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="STEM workshops"
        title="Hands-on STEM that teens remember"
        intro={workshops.intro}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Book a workshop</ButtonLink>
          <ButtonLink href="/mentorship" variant="outline">
            Explore mentorship
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.programmes.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-line bg-surface/60 p-7 transition-colors hover:border-brand/40">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Inside a session"
          title="Watch a workshop in action"
          intro="Short clips of teens building, coding and testing their own projects."
        />
        <Reveal className="mt-10 overflow-hidden rounded-4xl border border-line bg-surface">
          <video
            controls
            preload="metadata"
            poster={workshops.videoPoster}
            className="aspect-video w-full"
          >
            <source src={workshops.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Reveal>
      </Section>

      <Section className="border-t border-line">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Boot camps & outreach</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {workshops.gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 60}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-line">
                <Image
                  src={src}
                  alt={`STEM workshop ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Bring a STEM workshop to your school or community"
        intro="Tell me your audience, age range and dates. I'll design a programme that fits — from a single session to a full holiday boot camp."
      />
    </>
  );
}
