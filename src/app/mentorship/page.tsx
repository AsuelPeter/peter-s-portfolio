import type { Metadata } from "next";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { mentorship } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Trainings & Mentorship",
  description:
    "One-to-one STEM mentorship and training for teenagers, parents and educators with Peter Asuelinmhen. Career guidance, skills coaching and educator support.",
  alternates: { canonical: "/mentorship" },
};

const steps = [
  {
    title: "Tell me about the learner",
    text: "Share their age, interests, current level and what you would like them to achieve.",
  },
  {
    title: "We design a plan",
    text: "I propose a personalised path — projects, resources and a realistic schedule.",
  },
  {
    title: "Regular sessions",
    text: "Online or in person, we work through hands-on projects and track progress together.",
  },
];

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Trainings & mentorship"
        title="Guidance for the next generation of innovators"
        intro={mentorship.intro}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {mentorship.offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-line bg-surface/60 p-7">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="A simple path from curiosity to capability"
            />
            <ol className="mt-10 space-y-8 border-l border-line pl-8">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 70} className="relative">
                  <span
                    className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-brand"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="rounded-4xl border border-line bg-surface/60 p-6 md:p-10">
            <h2 className="font-display text-xl font-semibold">Send me a message</h2>
            <p className="mt-2 text-sm text-muted">
              Would you like to discuss your next STEM training or mentoring project? Fill this form
              and I&apos;ll get back to you soon.
            </p>
            <div className="mt-8">
              <ContactForm context="Mentorship" />
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Interested in workshops instead?"
        intro="I also design and facilitate STEM workshops, boot camps and curriculum for schools and organisations."
      />
    </>
  );
}
