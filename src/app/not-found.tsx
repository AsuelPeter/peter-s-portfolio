import Link from "next/link";
import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 text-5xl font-semibold sm:text-6xl">Page not found</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          The page you are looking for has moved or never existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-brand/60 hover:text-brand"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
