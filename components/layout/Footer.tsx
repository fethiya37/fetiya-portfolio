import { Code2, Mail, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Certificates", href: "#certificates" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-[1600px] px-8 py-12 lg:px-16">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Code2 size={18} />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-100">
                Fetiya<span className="text-amber-400">.dev</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Senior Full Stack Developer building scalable enterprise
              systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-amber-400"
            >
              <Mail size={16} />
              {site.email}
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-400"
            >
              <ArrowUp size={16} />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© 2026 Fetiya Seid. All rights reserved.</p>
          <p>Senior Full Stack Developer</p>
        </div>
      </div>
    </footer>
  );
}