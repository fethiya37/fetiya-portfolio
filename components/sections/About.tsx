import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

const highlights = [
  {
    title: "Enterprise Systems",
    description:
      "ERP, HRM, LMS, Logistics, Recruitment, Inventory and Healthcare platforms.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From database design and API architecture to shipping polished frontends.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean, maintainable code built to grow with real business requirements.",
  },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16"
      >
        <SectionTitle title="About Me" eyebrow="WHO I AM" />

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-slate-200">
              I&apos;m a Senior Full Stack Developer based in Addis Ababa,
              Ethiopia, focused on building scalable enterprise software that
              solves real operational problems.
            </p>

            <p className="leading-8 text-slate-400">
              Over the past four years I&apos;ve designed and shipped systems
              across stock, procurement, production, sales, and costing — along
              with HRM, LMS, Logistics, Recruitment, and Clinic management
              platforms. My work spans the full stack: PostgreSQL and MySQL on
              the data layer, NestJS and Laravel on the backend, and React and
              Next.js on the frontend.
            </p>

            <p className="leading-8 text-slate-400">
              I care about clean architecture, readable code, and systems that
              hold up under real-world load. Whether it&apos;s a procurement
              workflow used by hundreds of staff or a clinic platform handling
              patient records, I build with maintainability and scale in mind.
            </p>
          </div>

          <div className="space-y-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  group rounded-2xl
                  border border-slate-800
                  bg-slate-900/60
                  p-6 backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-500/60
                "
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />

                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
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