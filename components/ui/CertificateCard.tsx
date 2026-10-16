"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";
import type { Certificate } from "@/data/certificates";

type Props = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: Props) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <article
        className="
          group relative flex flex-col overflow-hidden rounded-2xl
          border border-slate-800 bg-slate-900/60 backdrop-blur
          transition-all duration-300
          hover:-translate-y-2
          hover:border-amber-500/60
          hover:shadow-2xl hover:shadow-amber-500/10
        "
      >
        {/* Image */}
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="relative aspect-[4/3] w-full overflow-hidden"
          aria-label={`View ${certificate.title}`}
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

          {/* Zoom hint */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-slate-950/0 opacity-0 transition-all duration-300
              group-hover:bg-slate-950/40 group-hover:opacity-100
            "
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 backdrop-blur">
              <ZoomIn size={20} />
            </span>
          </div>

          {/* Date badge */}
          <span className="absolute left-3 top-3 rounded-full border border-amber-500/30 bg-slate-950/80 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-400 backdrop-blur">
            {certificate.date}
          </span>
        </button>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <Award size={16} />
            </span>

            <div className="min-w-0">
              <h3 className="text-base font-bold leading-snug text-slate-100 sm:text-lg">
                {certificate.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-amber-400 sm:text-sm">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            {certificate.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {certificate.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] font-medium text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
            <span className="text-xs text-slate-500">
              {certificate.credential}
            </span>

            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 transition hover:text-amber-300"
            >
              View
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-amber-500 hover:text-amber-400 sm:right-8 sm:top-8"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-slate-100 sm:text-xl">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm text-amber-400">
                {certificate.issuer} · {certificate.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}