
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Presidents", "/presidents"],
  ["First Pitch", "/first-pitches"],
  ["Heritage Collection", "/heritage-collection"],
  ["About", "/about"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b-4 border-[#a4282d] bg-[#102c44] text-white">
      <div className="mx-auto max-w-6xl px-5 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-wide sm:text-2xl"
            >
              PRESIDENTIAL PASTIME
            </Link>

            <p className="mt-1 text-[11px] tracking-wide text-[#c9b98c] sm:text-xs">
              The Baseball History of the American Presidency
            </p>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="shrink-0 rounded border border-[#c9b98c] px-3 py-2 text-xl text-[#c9b98c] lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav
          aria-label="Desktop navigation"
          className="mt-5 hidden flex-wrap items-center gap-x-7 gap-y-2 text-sm lg:flex"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`transition-colors hover:text-[#c9b98c] ${
                pathname === href
                  ? "font-semibold text-[#c9b98c]"
                  : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mt-5 flex flex-col border-t border-[#405064] pt-3 lg:hidden"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-[#405064] py-3 text-sm ${
                  pathname === href
                    ? "font-semibold text-[#c9b98c]"
                    : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
