import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="text-sm tracking-widest text-amber-400 sm:text-base">
            HELLO,
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>

          <p className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
            Full Stack Developer
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-amber-400 sm:px-7 sm:py-4 sm:text-lg"
            >
              Let&apos;s Connect
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 text-base font-semibold text-slate-200 transition hover:border-amber-500 hover:text-amber-400 sm:px-7 sm:py-4 sm:text-lg"
            >
              My Resume
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[680px]">
            <div className="absolute inset-0 rounded-full border border-amber-500/20" />
            <div className="absolute inset-[4%] rounded-full border border-amber-500/30" />
            <div className="absolute inset-[8%] rounded-full bg-amber-500/5 blur-2xl" />

            <div className="absolute inset-[12%] overflow-hidden rounded-full border-4 border-amber-500/40 shadow-2xl shadow-amber-500/30">
              <Image
                src="/images/fetiya.png"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 460px, 680px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}