import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16">
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-12 text-center lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <span className="text-sm font-medium tracking-widest text-amber-400">
            LET&apos;S WORK TOGETHER
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            From enterprise systems to focused web apps, I help teams ship
            software that actually solves the problem. Let&apos;s build
            something impactful together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur transition hover:border-amber-500 hover:text-amber-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}