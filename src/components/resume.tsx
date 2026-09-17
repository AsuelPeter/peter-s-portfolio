import { experience, publications } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function Timeline() {
  return (
    <ol className="relative space-y-10 border-l border-line pl-8 md:pl-10">
      {experience.map((item, i) => (
        <Reveal as="li" key={item.company} delay={i * 60} className="relative">
          <span
            className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-brand md:-left-[49px]"
            aria-hidden="true"
          />
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {item.period}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
          <p className="mt-1 text-sm font-medium text-fg/80">{item.company}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function Publications() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {publications.map((pub, i) => (
        <Reveal as="li" key={pub.title} delay={i * 80}>
          <article className="h-full rounded-3xl border border-line bg-surface/60 p-6 transition-colors hover:border-brand/40">
            <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-brand">
              {pub.year}
            </span>
            <h3 className="mt-4 text-base font-semibold leading-snug">{pub.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pub.venue}</p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
