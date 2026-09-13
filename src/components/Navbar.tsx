"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5 md:px-8">
        <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 backdrop-blur-xl">
          {/* LOGO */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight"
          >
            MRA<span className="text-white/30">.</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 min-[768px]:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black min-[768px]:flex"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 min-[768px]:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-2xl backdrop-blur-xl min-[768px]:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}