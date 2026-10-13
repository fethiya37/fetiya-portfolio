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
      <section id="skills" className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16">
        <SectionTitle title="Skills" eyebrow="WHAT I WORK WITH" />

        {Object.entries(skills).map(([category, stack]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="mb-6 text-xl font-bold capitalize text-slate-200">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {stack.map((item) => {
                const entry = iconMap[item.icon];
                if (!entry) return null;

                const { Icon, hex } = entry;

                return (
                  <div
                    key={item.name}
                    className="
                      group flex flex-col items-center justify-center gap-3
                      rounded-2xl border border-slate-800 bg-slate-900/60
                      p-6 text-center backdrop-blur
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-amber-500/60
                    "
                  >
                    <Icon size={40} color={hex} />
                    <span className="text-sm font-medium text-slate-300">
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