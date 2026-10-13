import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 text-center sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <span className="text-xs font-medium tracking-widest text-amber-400 sm:text-sm">
            LET&apos;S WORK TOGETHER
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base lg:text-lg">
            From enterprise systems to focused web apps, I help teams ship
            software that actually solves the problem. Let&apos;s build
            something impactful together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-amber-500 hover:text-amber-400 sm:px-8 sm:py-4 sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}