"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerNav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Image
            src="/images/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              {site.name}
            </span>
            <span className="hidden text-[11px] text-muted sm:block">
              STEMR Educator · Electronic Engineer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-white/5 text-brand"
                  : "text-muted hover:bg-white/5 hover:text-fg"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-brand-dark sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] border-t opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-5" aria-label="Mobile">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                isActive(item.href)
                  ? "bg-white/5 text-brand"
                  : "text-muted hover:bg-white/5 hover:text-fg"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-base font-semibold text-ink"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
