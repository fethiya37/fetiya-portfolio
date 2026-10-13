import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-8 lg:grid-cols-2 lg:px-16">

        <div>
          <span className="text-base tracking-widest text-amber-400">
            HELLO,
          </span>

          <h1 className="mt-3 text-6xl font-extrabold leading-tight md:text-8xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>

          <p className="mt-6 text-4xl font-semibold text-slate-100 md:text-5xl">
            Full Stack Developer
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-4 text-lg font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Let&apos;s Connect
              <ArrowRight size={20} />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-4 text-lg font-semibold text-slate-200 transition hover:border-amber-500 hover:text-amber-400"
            >
              My Resume
              <Download size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[680px] w-[680px]">
            <div className="absolute inset-0 rounded-full border border-amber-500/20" />
            <div className="absolute inset-6 rounded-full border border-amber-500/30" />
            <div className="absolute inset-12 rounded-full bg-amber-500/5 blur-2xl" />

            <div className="absolute inset-16 overflow-hidden rounded-full border-4 border-amber-500/40 shadow-2xl shadow-amber-500/30">
              <Image
                src="/images/fetiya.png"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 680px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}