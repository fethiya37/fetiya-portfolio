import MobileMenu from "./MobileMenu";
import { Code2 } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Certificates", href: "#certificates" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4 lg:px-16">
        <a href="#" className="flex items-center gap-2 sm:gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 sm:h-9 sm:w-9">
            <Code2 size={16} className="sm:hidden" />
            <Code2 size={18} className="hidden sm:block" />
          </span>
          <span className="text-base font-bold tracking-tight text-slate-100 sm:text-lg">
            Fetiya<span className="text-amber-400">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Resume
          </a>
        </nav>

        <MobileMenu links={links} />
      </div>
    </header>
  );
}