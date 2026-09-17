import Image from "next/image";
import { ServiceIcon } from "@/components/icons";
import type { Service } from "@/data/content";
import { cn } from "@/lib/cn";

export function ServiceCard({ service, withImage = false }: { service: Service; withImage?: boolean }) {
  return (
    <article
      id={service.slug}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40",
      )}
    >
      {withImage ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-brand transition-colors group-hover:border-brand/50 group-hover:bg-brand/10">
          <ServiceIcon name={service.icon} className="h-5.5 w-5.5" width={22} height={22} />
        </span>
        <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </article>
  );
}
