import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { site, socials } from "@/data/site";
import { Facebook, Instagram, LinkedIn, Mail, MapPin, Phone, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss new ideas or a project with Peter Asuelinmhen. Fill in the form or reach out by email, phone or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
  { label: "Phone", value: site.phone, href: site.phoneHref, Icon: Phone, external: false },
  {
    label: "WhatsApp",
    value: "Chat with me",
    href: site.whatsapp,
    Icon: WhatsApp,
    external: true,
  },
  { label: "Location", value: site.location, href: undefined, Icon: MapPin, external: false },
];

const socialsList = [
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedIn },
  { label: "Instagram", href: socials.instagram, Icon: Instagram },
  { label: "Facebook", href: socials.facebook, Icon: Facebook },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send me a message"
        intro="Whether you wish to discuss new ideas or have a project for me, simply fill this form and I'll get back to you soon."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-4xl border border-line bg-surface/60 p-6 md:p-10">
            <ContactForm />
          </div>

          <div className="space-y-4">
            {channels.map(({ label, value, href, Icon, external }) => {
              const body = (
                <>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-brand">
                    <Icon className="h-5 w-5" width={20} height={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-fg">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-line bg-surface/60 p-4 transition-colors hover:border-brand/40"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-3xl border border-line bg-surface/60 p-4"
                >
                  {body}
                </div>
              );
            })}

            <div className="rounded-3xl border border-line bg-surface/60 p-6">
              <p className="text-sm font-semibold text-fg">Follow along</p>
              <div className="mt-4 flex gap-3">
                {socialsList.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-muted transition-colors hover:border-brand/60 hover:text-brand"
                  >
                    <Icon className="h-5 w-5" width={20} height={20} />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">{site.availability}.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
