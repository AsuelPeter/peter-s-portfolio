import Image from "next/image";
import type { Project } from "@/data/content";
import { Tag } from "@/components/ui";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Tag>{project.tag}</Tag>
        <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </article>
  );
}
