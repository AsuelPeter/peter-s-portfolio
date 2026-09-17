"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/data/content";

export function SkillBar({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-fg">{skill.name}</p>
          {skill.detail ? <p className="mt-0.5 text-xs text-muted">{skill.detail}</p> : null}
        </div>
        <span className="font-display text-sm font-semibold text-brand">{skill.level}%</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-[width] duration-1000 ease-out"
          style={{
            width: active ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 90}ms`,
          }}
        />
      </div>
    </div>
  );
}
