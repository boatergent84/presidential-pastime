import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walter Johnson's Presidential Baseballs | Presidential Pastime",
  description: "A Heritage Collection exhibit exploring six presidential-autographed baseballs associated with Walter Johnson and documented in a 1937 archival photograph.",
};

const presidents = [
  ["Theodore Roosevelt", "theodore-roosevelt"],
  ["William Howard Taft", "william-howard-taft"],
  ["Woodrow Wilson", "woodrow-wilson"],
  ["Warren G. Harding", "warren-g-harding"],
  ["Calvin Coolidge", "calvin-coolidge"],
  ["Herbert Hoover", "herbert-hoover"],
];

export default function WalterJohnsonExhibit() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">


      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide">PRESIDENTIAL PASTIME</Link>
          <Link href="/heritage-collection" className="border border-[#c9b98c] px-4 py-2 text-xs font-bold uppercase tracking-widest">← Heritage Collection</Link>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">The Heritage Collection · Featured Exhibit</p>
        <h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">Walter Johnson&apos;s Six Presidential Baseballs</h1>
        <p className="mt-4 font-serif text-xl italic text-[#59636b]">Six presidential signatures. One extraordinary baseball story.</p>
        <div className="mt-9 grid gap-8 md:grid-cols-[1fr_290px]">
          <section className="border border-[#b8aa8e] bg-[#f8f3e8] p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Archival Photograph · 1937</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">An Unusual Presidential Collection</h2>
            <figure className="mt-6 overflow-hidden border border-[#b8aa8e] bg-white p-3">
              <img
                src="/heritage/walter-johnson-baseballs.jpg"
                alt="1937 archival photograph of six presidential-autographed baseballs associated with Walter Johnson"
                className="mx-auto h-auto max-h-[500px] w-full object-contain"
              />
              <figcaption className="mt-3 text-center text-xs leading-5 text-[#59636b]">
                Six presidential-autographed baseballs, 1937.
                Harris &amp; Ewing Collection, Library of Congress.
              </figcaption>
            </figure>

            <p className="mt-4 leading-8 text-[#59636b]">A historic photograph documents six baseballs bearing the signatures of Presidents Theodore Roosevelt, William Howard Taft, Woodrow Wilson, Warren G. Harding, Calvin Coolidge, and Herbert Hoover. The baseballs were associated with Washington Senators pitching legend Walter Johnson.</p>
            <p className="mt-4 leading-8 text-[#59636b]">This exhibit introduces the archival record and connects each president to the broader story of baseball and the White House. It does not claim that Presidential Pastime owns the original baseballs.</p>
            <a href="https://www.loc.gov/item/2016875530/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b-2 border-[#a4282d] pb-1 font-semibold text-[#a4282d]">View the archival photograph at the Library of Congress ↗</a>
          </section>
          <aside className="bg-[#102c44] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e3c6a5]">Archive Record</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">Presidential Autographs</h2>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div><dt className="font-bold">Artifact Type</dt><dd className="text-[#dbe2e8]">Six signed baseballs</dd></div>
              <div><dt className="font-bold">Photographic Record</dt><dd className="text-[#dbe2e8]">1937</dd></div>
              <div><dt className="font-bold">Associated Figure</dt><dd className="text-[#dbe2e8]">Walter Johnson</dd></div>
              <div><dt className="font-bold">Source</dt><dd className="text-[#dbe2e8]">Library of Congress photographic record</dd></div>
              <div><dt className="font-bold">Collection Status</dt><dd className="text-[#dbe2e8]">Digitally documented; not owned by this website</dd></div>
            </dl>
          </aside>
        </div>
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Connected Presidential Profiles</p>
            <h2 className="mt-2 font-serif text-3xl font-bold">The Six Presidents</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {presidents.map(([name, slug]) => <Link key={slug} href={`/presidents/${slug}`} className="border border-[#b8aa8e] bg-[#f8f3e8] p-5 hover:border-[#a4282d]"><span className="font-serif text-xl font-bold">{name}</span><span className="mt-3 block text-sm font-semibold text-[#a4282d]">View presidential profile →</span></Link>)}
          </div>
        </section>
        <section className="mt-14 border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">Research & Sources</p>
          <h2 className="mt-2 font-serif text-3xl font-bold">Explore the Original Record</h2>
          <p className="mt-4 leading-8 text-[#59636b]">The Library of Congress record provides the original archival entry and available image information. Additional provenance, current custodianship, and photographic reproduction permissions should be checked against institutional records before adding new claims or hosting the image.</p>
          <a className="mt-4 inline-block font-semibold text-[#a4282d] underline" href="https://www.loc.gov/item/2016875530/" target="_blank" rel="noopener noreferrer">Library of Congress — archival catalog entry ↗</a>
        </section>
      </div>
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white">PRESIDENTIAL PASTIME · THE HERITAGE COLLECTION</footer>
    </main>
  );
}
