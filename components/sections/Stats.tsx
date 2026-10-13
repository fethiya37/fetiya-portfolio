import { stats } from "@/data/stats";
import FadeIn from "../animations/FadeIn";

export default function Stats() {
  return (
    <FadeIn>
      <section className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-slate-800 bg-slate-900/60
                  p-5 backdrop-blur sm:p-6 lg:p-8
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-amber-500/60
                  hover:shadow-2xl hover:shadow-amber-500/10
                "
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10" />

                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 sm:h-12 sm:w-12">
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={22} className="hidden sm:block" />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-slate-500">
                    {String(stats.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 text-3xl font-extrabold tracking-tight text-slate-100 sm:mt-6 sm:text-4xl lg:mt-8 lg:text-5xl">
                  {item.value}
                </h3>

                <p className="relative mt-2 text-xs font-medium tracking-wide text-slate-400 sm:mt-3 sm:text-sm">
                  {item.label}
                </p>

                <div className="relative mt-4 h-px w-full bg-gradient-to-r from-amber-500/40 to-transparent sm:mt-6" />
              </div>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}