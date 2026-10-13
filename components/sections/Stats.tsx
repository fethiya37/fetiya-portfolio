import { stats } from "@/data/stats";
import FadeIn from "../animations/FadeIn";

export default function Stats() {
  return (
    <FadeIn>
      <section className="relative mx-auto max-w-[1600px] px-8 py-24 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-slate-800 bg-slate-900/60
                  p-8 backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-amber-500/60
                  hover:shadow-2xl hover:shadow-amber-500/10
                "
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10" />

                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-slate-500">
                    {String(stats.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-8 text-5xl font-extrabold tracking-tight text-slate-100">
                  {item.value}
                </h3>

                <p className="relative mt-3 text-sm font-medium tracking-wide text-slate-400">
                  {item.label}
                </p>

                <div className="relative mt-6 h-px w-full bg-gradient-to-r from-amber-500/40 to-transparent" />
              </div>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}