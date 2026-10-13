import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "../animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const repos = [
  { name: "e_porte", language: "Dart" },
  { name: "bcfiims", language: "JavaScript" },
  { name: "eport-backend", language: "TypeScript" },
  { name: "HRMS2", language: "Blade" },
  { name: "chat-app", language: "TypeScript" },
  { name: "mub_backend", language: "TypeScript" },
];

const languageColors: Record<string, string> = {
  Dart: "#00B4AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Blade: "#F7523F",
};

export default function GitHub() {
  return (
    <FadeIn>
      <section
        id="github"
        className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16"
      >
        <SectionTitle title="Open Source" eyebrow="ON GITHUB" />

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <SiGithub size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-100">
                  fethiya37
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Laravel, NestJS, React and Clean Architecture projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div>
                <p className="text-2xl font-bold text-amber-400">85</p>
                <p className="mt-1">Contributions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-400">6+</p>
                <p className="mt-1">Public Repos</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/fethiya37/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="
                  group rounded-xl border border-slate-800 bg-slate-950/40
                  p-5 transition-all duration-300
                  hover:-translate-y-1 hover:border-amber-500/60
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-slate-100">
                    {repo.name}
                  </h4>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 transition group-hover:text-amber-400"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] ?? "#64748b",
                    }}
                  />
                  {repo.language}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/fethiya37"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-500 hover:text-amber-400"
            >
              Visit Full Profile
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}