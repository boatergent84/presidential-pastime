import ExhibitShare from "./exhibit-share";
import Link from "next/link";

const footerLinks = [
  ["Home", "/"],
  ["Presidents", "/presidents"],
  ["First Pitch", "/first-pitches"],
  ["Heritage Collection", "/heritage-collection"],
  ["About", "/about"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
  ["Privacy Policy", "/privacy-policy"],
];

export default function SiteFooter() {
  return (
    <>
      <ExhibitShare />
      <footer className="w-full bg-[#061727] px-5 py-5 text-center text-xs text-[#aebcc6]">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="font-serif text-base font-bold tracking-wider text-white"
        >
          PRESIDENTIAL PASTIME
        </Link>

        <p className="mt-1 text-[11px] text-[#c9b98c]">
          The Baseball History of the American Presidency
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {footerLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto mt-3 max-w-5xl border-t border-white/10 pt-3 text-[10px] leading-5 text-[#91a1ad]">
          <p>
            Presidential Pastime is an independent historical research
            project and is not affiliated with or endorsed by the
            United States government, any presidential administration,
            or Major League Baseball.
          </p>

          <p className="mt-1">
            © {new Date().getFullYear()} Presidential Pastime.
            All rights reserved.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}
