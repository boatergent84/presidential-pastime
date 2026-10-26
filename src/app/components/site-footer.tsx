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
    <footer className="w-full bg-[#061727] px-5 py-9 text-center text-xs text-[#aebcc6]">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-wider text-white"
        >
          PRESIDENTIAL PASTIME
        </Link>

        <p className="mt-2 text-[#c9b98c]">
          The Baseball History of the American Presidency
        </p>

        <div className="mx-auto my-6 h-px max-w-lg bg-[#405064]" />

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-5 gap-y-3"
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

        <div className="mx-auto my-6 h-px max-w-lg bg-[#405064]" />

        <p className="mx-auto max-w-3xl leading-6">
          Presidential Pastime is an independent historical
          research project and is not affiliated with or
          endorsed by the United States government, any
          presidential administration, or Major League Baseball.
        </p>

        <p className="mt-4 text-[#91a1ad]">
          © {new Date().getFullYear()} Presidential Pastime.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
