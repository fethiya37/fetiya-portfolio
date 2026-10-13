"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  images: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = project.images.length > 1;

  const next = () => setCurrent((i) => (i + 1) % project.images.length);
  const prev = () =>
    setCurrent((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <article
      className="
        group flex flex-col overflow-hidden rounded-2xl
        border border-slate-800 bg-slate-900/60 backdrop-blur
        transition-all duration-300
        hover:-translate-y-1 hover:border-amber-500/60
        hover:shadow-2xl hover:shadow-amber-500/10
      "
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <Image
          src={project.images[current]}
          alt={`${project.title} screenshot ${current + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-amber-500/40 bg-slate-950/70 px-3 py-1 text-xs font-medium tracking-wide text-amber-400 backdrop-blur">
          {project.category}
        </span>

        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-slate-200 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-amber-500 hover:text-slate-950"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-slate-200 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-amber-500 hover:text-slate-950"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-amber-400"
                      : "w-1.5 bg-slate-400/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>

        <p className="mt-1 text-sm font-medium text-amber-400">
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm leading-6 text-slate-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}