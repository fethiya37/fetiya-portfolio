import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";
import FadeIn from "../animations/FadeIn";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: site.location,
    href: undefined,
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16"
      >
        <SectionTitle title="Get in Touch" eyebrow="CONTACT" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-2xl font-light leading-relaxed text-slate-200 md:text-3xl">
              Let&apos;s build something great together.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              Whether you have a defined project, an idea that needs shaping, or
              you&apos;re exploring options — I&apos;m happy to talk it through.
              I typically respond within a day.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Send an Email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="space-y-4">
            {channels.map((item) => {
              const Icon = item.icon;
              const Content = (
                <div
                  className="
                    flex items-center gap-5 rounded-2xl
                    border border-slate-800 bg-slate-900/60
                    p-6 backdrop-blur
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-amber-500/60
                  "
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium tracking-widest text-slate-500">
                      {item.label.toUpperCase()}
                    </p>
                    <p className="mt-1 truncate text-slate-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {Content}
                </a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}