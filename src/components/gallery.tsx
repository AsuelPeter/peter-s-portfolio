"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery, portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/icons";

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered =
      category === "All" ? gallery : gallery.filter((g) => g.category === category);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio categories">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={category === cat}
            onClick={() => {
              setCategory(cat);
              setOpenIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === cat
                ? "border-brand bg-brand text-ink"
                : "border-line text-muted hover:border-brand/50 hover:text-fg"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-line text-left transition-colors hover:border-brand/50",
              spanClass[item.span ?? "normal"]
            )}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-xs font-semibold text-fg transition-transform group-hover:translate-y-0">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={active.src}
                alt={active.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{active.title}</p>
                <p className="text-xs text-muted">{active.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-brand/60 hover:text-brand"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-brand/60 hover:text-brand"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="ml-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
