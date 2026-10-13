"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {
  links: { label: string; href: string }[];
};

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-slate-200 md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-slate-800 bg-slate-950/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 p-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-900 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-amber-500 px-4 py-3 text-center text-base font-semibold text-slate-950"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}