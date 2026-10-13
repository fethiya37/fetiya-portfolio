import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";
import FadeIn from "../animations/FadeIn";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <SectionTitle title="Experience" eyebrow="WHERE I'VE WORKED" />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-500/60 via-slate-800 to-transparent md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((job) => (
              <div key={job.company} className="relative md:pl-16">
                <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-amber-500/40 bg-slate-950 md:flex">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                </div>

                <div
                  className="
                    group rounded-2xl border border-slate-800
                    bg-slate-900/60 p-5 backdrop-blur sm:p-6 lg:p-8
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/60
                    hover:shadow-2xl hover:shadow-amber-500/10
                  "
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 sm:text-xl lg:text-2xl">
                        {job.company}
                      </h3>

                      <p className="mt-1 text-base font-medium text-amber-400 sm:text-lg">
                        {job.role}
                      </p>
                    </div>

                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-400 sm:px-4 sm:py-1.5">
                      {job.type}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 sm:text-sm">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} className="text-amber-500/70" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-amber-500/70" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}