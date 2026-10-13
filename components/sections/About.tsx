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
        className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <SectionTitle title="About Me" eyebrow="WHO I AM" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              I&apos;m a Senior Full Stack Developer based in Addis Ababa,
              Ethiopia, focused on building scalable enterprise software that
              solves real operational problems.
            </p>

            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Over the past four years I&apos;ve designed and shipped systems
              across stock, procurement, production, sales, and costing — along
              with HRM, LMS, Logistics, Recruitment, and Clinic management
              platforms. My work spans the full stack: PostgreSQL and MySQL on
              the data layer, NestJS and Laravel on the backend, and React and
              Next.js on the frontend.
            </p>

            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I care about clean architecture, readable code, and systems that
              hold up under real-world load. Whether it&apos;s a procurement
              workflow used by hundreds of staff or a clinic platform handling
              patient records, I build with maintainability and scale in mind.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  group rounded-2xl
                  border border-slate-800
                  bg-slate-900/60
                  p-5 backdrop-blur sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-500/60
                "
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />

                  <div>
                    <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
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