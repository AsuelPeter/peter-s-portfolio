import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CtaSection, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { SkillBar } from "@/components/skill-bar";
import { Reveal } from "@/components/reveal";
import { Timeline, Publications } from "@/components/resume";
import { Gallery } from "@/components/gallery";
import { featuredProjects, services, skills } from "@/data/content";
import { site, stats } from "@/data/site";
import { Mail, Phone } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-x relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>Hello, my name is</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Peter
                <br />
                <span className="text-gradient">Asuelinmhen</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 font-display text-lg font-medium text-fg sm:text-xl">
                {site.role}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {site.tagline} I design hands-on STEM experiences, build systems, and mentor
                teenagers to become confident, curious innovators.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/portfolio">View my work</ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Work with me
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                <a href={`mailto:${site.email}`} className="group flex items-center gap-3 text-muted transition-colors hover:text-brand">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:border-brand/50">
                    <Mail className="h-4 w-4" width={16} height={16} />
                  </span>
                  {site.email}
                </a>
                <a href={site.phoneHref} className="group flex items-center gap-3 text-muted transition-colors hover:text-brand">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:border-brand/50">
                    <Phone className="h-4 w-4" width={16} height={16} />
                  </span>
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2.5rem] border border-line/70 bg-gradient-to-br from-brand/10 to-transparent"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface">
                <Image
                  src="/images/hero-portrait.webp"
                  alt={`Portrait of ${site.name}, ${site.role}`}
                  width={1000}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-surface/90 px-5 py-4 backdrop-blur sm:block">
                <p className="font-display text-2xl font-semibold text-brand">NiBOT</p>
                <p className="text-xs text-muted">Building innovative minds</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="container-x relative pb-16">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70} className="bg-surface/80 p-6 text-center">
                <p className="font-display text-3xl font-semibold text-brand">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-4xl border border-line bg-surface">
              <Image
                src="/images/about-portrait.webp"
                alt="Peter Asuelinmhen at work"
                width={1000}
                height={1000}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About me"
              title="Engineering that inspires, teaching that lasts"
              intro="I am a passionate STEMR educator and seasoned electrical/electronic (computer) engineer dedicated to inspiring and guiding the next generation of innovators."
            />
            <p className="mt-5 text-base leading-relaxed text-muted">
              My love for science, technology, engineering and mathematics has driven my career —
              from designing embedded systems to building platforms and renewable energy
              solutions. What fuels me most is sharing that knowledge and nurturing curiosity,
              creativity and problem-solving skills in young people.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["STEM Education", "Embedded Systems", "Renewable Energy"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-surface/60 px-4 py-4 text-sm font-medium text-fg"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline">
                More about my journey
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="What I do"
          title="From understanding your requirements to delivering the final solution"
          intro="I do everything that falls in between — designing a blueprint, building it, and making sure it works in the real world."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="outline">
            Explore all services
          </ButtonLink>
        </div>
      </Section>

      {/* Featured projects */}
      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Featured projects"
          title="Recent work with schools, communities and teams"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills + experience */}
      <Section className="border-t border-line">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Skills" title="Tools and strengths I bring" />
            <div className="mt-10 space-y-7">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Experience" title="A track record of building and teaching" />
            <div className="mt-10">
              <Timeline />
            </div>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section className="border-t border-line">
        <SectionHeading eyebrow="Publications" title="Peer-reviewed research" />
        <div className="mt-12">
          <Publications />
        </div>
      </Section>

      {/* Portfolio preview */}
      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Portfolio" title="Moments from the field" />
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View full portfolio →
          </Link>
        </div>
        <div className="mt-10">
          <Gallery limit={8} />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
