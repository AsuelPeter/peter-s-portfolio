import Image from "next/image";
import type { Metadata } from "next";
import { CtaSection, Eyebrow, PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { SkillBar } from "@/components/skill-bar";
import { Reveal } from "@/components/reveal";
import { Timeline, Publications } from "@/components/resume";
import { aboutParagraphs, skills, videos } from "@/data/content";
import { site } from "@/data/site";
import { MapPin, YouTube } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Peter Asuelinmhen is a STEM educator and electrical/electronic (computer) engineer. Learn about his journey, skills, experience and publications.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A zealous engineer with a teacher's heart"
        intro="I design technology and I teach it. My goal is simple: make STEM accessible, practical and exciting for the next generation."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-4xl border border-line bg-surface">
              <Image
                src="/images/about-2.webp"
                alt={`${site.name} facilitating a session`}
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-line bg-surface/60 px-4 py-3 text-sm text-muted">
              <MapPin className="h-4 w-4 shrink-0 text-brand" width={16} height={16} />
              {site.location}
            </div>
          </Reveal>

          <div>
            <Eyebrow>Award-winning STEM professional</Eyebrow>
            <div className="mt-6 space-y-5">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className="text-base leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                See my services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="My skills"
          title="Learning never stops"
          intro="I continuously refine my skills by acquiring knowledge of emerging technologies."
        />
        <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Experience" title="Where I have built and taught" />
        <div className="mt-12">
          <Timeline />
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Publications" title="Research & writing" />
        <div className="mt-12">
          <Publications />
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Watch" title="Sessions, talks and outreach" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {videos.map((video, i) => (
            <Reveal key={video.href} delay={i * 80}>
              <a
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-line bg-surface/60 p-5 transition-colors hover:border-brand/40"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <YouTube className="h-6 w-6" width={24} height={24} />
                </span>
                <span>
                  <span className="block font-medium text-fg">{video.title}</span>
                  <span className="text-sm text-muted">Watch on YouTube</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
