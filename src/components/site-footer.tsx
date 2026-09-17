import Link from "next/link";
import Image from "next/image";
import { nav, site, socials } from "@/data/site";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
  WhatsApp,
  YouTube,
} from "@/components/icons";

const socialLinks = [
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedIn },
  { label: "Instagram", href: socials.instagram, Icon: Instagram },
  { label: "Facebook", href: socials.facebook, Icon: Facebook },
  { label: "YouTube", href: socials.youtube, Icon: YouTube },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10 rounded-xl object-contain"
            />
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            {site.shortBio}
          </p>
          <p className="mt-4 font-display text-sm font-medium text-brand">{site.role}</p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand/60 hover:text-brand"
              >
                <Icon className="h-4.5 w-4.5" width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-muted transition-colors hover:text-brand">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-muted transition-colors hover:text-brand">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" width={16} height={16} />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 text-muted transition-colors hover:text-brand">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" width={16} height={16} />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-muted transition-colors hover:text-brand">
                <WhatsApp className="mt-0.5 h-4 w-4 shrink-0" width={16} height={16} />
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" width={16} height={16} />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span>{site.company}</span>
            <Link href="/privacy-policy" className="transition-colors hover:text-brand">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
