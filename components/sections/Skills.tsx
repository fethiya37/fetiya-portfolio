import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";
import FadeIn from "../animations/FadeIn";
import {
  SiReact, SiReactHex,
  SiNextdotjs, SiNextdotjsHex,
  SiTypescript, SiTypescriptHex,
  SiVuedotjs, SiVuedotjsHex,
  SiAngular, SiAngularHex,
  SiTailwindcss, SiTailwindcssHex,
  SiLaravel, SiLaravelHex,
  SiNestjs, SiNestjsHex,
  SiNodedotjs, SiNodedotjsHex,
  SiPhp, SiPhpHex,
  SiPostgresql, SiPostgresqlHex,
  SiMysql, SiMysqlHex,
  SiMongodb, SiMongodbHex,
  SiRedis, SiRedisHex,
  SiDocker, SiDockerHex,
  SiNginx, SiNginxHex,
  SiGit, SiGitHex,
  SiGithub, SiGithubHex,
  SiGithubactions, SiGithubactionsHex,
} from "@icons-pack/react-simple-icons";

const iconMap: Record<
  string,
  { Icon: React.ComponentType<{ size?: number; color?: string; className?: string }>; hex: string }
> = {
  SiReact: { Icon: SiReact, hex: SiReactHex },
  SiNextdotjs: { Icon: SiNextdotjs, hex: SiNextdotjsHex },
  SiTypescript: { Icon: SiTypescript, hex: SiTypescriptHex },
  SiVuedotjs: { Icon: SiVuedotjs, hex: SiVuedotjsHex },
  SiAngular: { Icon: SiAngular, hex: SiAngularHex },
  SiTailwindcss: { Icon: SiTailwindcss, hex: SiTailwindcssHex },
  SiLaravel: { Icon: SiLaravel, hex: SiLaravelHex },
  SiNestjs: { Icon: SiNestjs, hex: SiNestjsHex },
  SiNodedotjs: { Icon: SiNodedotjs, hex: SiNodedotjsHex },
  SiPhp: { Icon: SiPhp, hex: SiPhpHex },
  SiPostgresql: { Icon: SiPostgresql, hex: SiPostgresqlHex },
  SiMysql: { Icon: SiMysql, hex: SiMysqlHex },
  SiMongodb: { Icon: SiMongodb, hex: SiMongodbHex },
  SiRedis: { Icon: SiRedis, hex: SiRedisHex },
  SiDocker: { Icon: SiDocker, hex: SiDockerHex },
  SiNginx: { Icon: SiNginx, hex: SiNginxHex },
  SiGit: { Icon: SiGit, hex: SiGitHex },
  SiGithub: { Icon: SiGithub, hex: SiGithubHex },
  SiGithubactions: { Icon: SiGithubactions, hex: SiGithubactionsHex },
};

export default function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <SectionTitle title="Skills" eyebrow="WHAT I WORK WITH" />

        {Object.entries(skills).map(([category, stack]) => (
          <div key={category} className="mb-10 last:mb-0 sm:mb-12">
            <h3 className="mb-4 text-lg font-bold capitalize text-slate-200 sm:mb-6 sm:text-xl">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {stack.map((item) => {
                const entry = iconMap[item.icon];
                if (!entry) return null;

                const { Icon, hex } = entry;

                return (
                  <div
                    key={item.name}
                    className="
                      group flex flex-col items-center justify-center gap-2
                      rounded-2xl border border-slate-800 bg-slate-900/60
                      p-4 text-center backdrop-blur sm:gap-3 sm:p-6
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-amber-500/60
                    "
                  >
                    <Icon size={32} color={hex} className="sm:hidden" />
                    <Icon size={40} color={hex} className="hidden sm:block" />
                    <span className="text-xs font-medium text-slate-300 sm:text-sm">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </FadeIn>
  );
}