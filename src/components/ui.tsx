import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight, WhatsApp } from "@/components/icons";
import { site } from "@/data/site";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand",
        className
      )}
    >
      <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-brand text-ink hover:-translate-y-0.5 hover:bg-brand-dark",
    outline: "border border-line bg-white/[0.02] text-fg hover:border-brand/60 hover:text-brand",
    ghost: "text-fg hover:text-brand",
  } as const;

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], "group", className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], "group", className)}>
      {content}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function CtaSection({
  title = "Have a project or a young innovator to mentor?",
  intro = "Tell me what you are planning. Whether it is a workshop, an energy installation or guidance for a teenager, I would love to hear about it.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-4xl border border-line bg-gradient-to-br from-surface-2 to-surface p-8 md:p-14">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/15 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <Eyebrow>Let&apos;s work together</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-brand/60 hover:text-brand"
            >
              <WhatsApp className="h-4 w-4" width={16} height={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("container-x py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
