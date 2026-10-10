
import Link from "next/link";
import { presidents } from "./presidents-data";

export default function PresidentsArchivePage() {
  const sortedPresidents = [...presidents].sort(
    (a, b) => a.number - b.number
  );

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* HEADER */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9b98c] text-xl">
              ⚾
            </div>

            <div>
              <p className="font-serif text-xl font-bold tracking-wide md:text-2xl">
                PRESIDENTIAL PASTIME
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#c9b98c]">
                America&apos;s Presidents. America&apos;s Pastime.
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="border border-[#c9b98c] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white/10"
          >
            ← Home
          </Link>
        </div>

        <nav className="border-t border-[#40576b] bg-[#f8f3e8] text-[#102c44]">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 py-4 text-sm font-semibold">
            <Link href="/" className="hover:text-[#a4282d]">
              Home
            </Link>

            <Link
              href="/presidents"
              className="text-[#a4282d]"
            >
              Presidents
            </Link>

            <Link
              href="/#first-pitches"
              className="hover:text-[#a4282d]"
            >
              First Pitches
            </Link>

            <Link
              href="/#featured-archives"
              className="hover:text-[#a4282d]"
            >
              Historical Archives
            </Link>

            <Link
              href="/#about"
              className="hover:text-[#a4282d]"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
          The Presidential Baseball Archive
        </p>

        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-6xl">
          Presidents &amp; Baseball
        </h1>

        <div className="my-6 h-[2px] w-28 bg-[#a4282d]" />

        <p className="max-w-3xl text-lg leading-8 text-[#59636b]">
          Explore the history of America&apos;s presidents and
          America&apos;s pastime, from Civil War-era baseball to
          the modern Major Leagues. Discover presidential first
          pitches, ballpark appearances, historical photographs,
          and memorable moments in baseball history.
        </p>

        {/* ARCHIVE SUMMARY */}
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          <div className="border-l-4 border-[#a4282d] bg-[#f8f3e8] p-5">
            <p className="font-serif text-4xl font-bold">
              {sortedPresidents.length}
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#59636b]">
              Presidential Profiles
            </p>
          </div>

          <div className="border-l-4 border-[#c9b98c] bg-[#f8f3e8] p-5">
            <p className="font-serif text-3xl font-bold">
              1861–Today
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#59636b]">
              Historical Period
            </p>
          </div>

          <div className="border-l-4 border-[#102c44] bg-[#f8f3e8] p-5">
            <p className="font-serif text-3xl font-bold">
              1910
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#59636b]">
              First Presidential Opening Day Pitch
            </p>
          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section className="mx-auto max-w-6xl px-6 pb-7">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#b8aa8e] pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              Browse the Collection
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              The Presidents
            </h2>
          </div>

          <p className="text-sm italic text-[#59636b]">
            Select a president to explore their baseball history
          </p>
        </div>
      </section>

      {/* PRESIDENT CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPresidents.map((president) => (
            <Link
              key={president.slug}
              href={`/presidents/${president.slug}`}
              className="group flex flex-col overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] transition duration-200 hover:-translate-y-1 hover:border-[#a4282d] hover:shadow-lg"
            >
              {/* PORTRAIT AREA */}
              <div className="flex h-[265px] items-center justify-center bg-[#102c44] p-6">
                <div className="h-[205px] w-[205px] overflow-hidden rounded-full border border-[#c9b98c] p-[2px]">
                  <div className="h-full w-full overflow-hidden rounded-full border border-[#102c44] bg-[#e8dfca]">
                    {president.portrait ? (
                      <img
                        src={president.portrait}
                        alt={`Portrait of ${president.name}`}
                        className="h-full w-full object-cover object-top grayscale"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center text-center text-[#102c44]">
                        <p className="font-serif text-5xl font-bold opacity-40">
                          {president.number}
                        </p>

                        <p className="mt-2 px-4 font-serif text-sm">
                          Historical Portrait
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* PRESIDENT DETAILS */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                  President No. {president.number}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-bold transition group-hover:text-[#a4282d]">
                  {president.name}
                </h3>

                <p className="mt-2 text-sm text-[#59636b]">
                  {president.years}
                </p>

                <div className="mt-5 border-t border-[#b8aa8e] pt-4">
                  <p className="font-serif italic text-[#59636b]">
                    {president.baseballEra}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                    Explore Presidential Archive →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED HISTORY */}
      <section className="bg-[#102c44] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9b98c]">
            A Presidential Baseball Tradition
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
            It Began With a First Pitch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#d3dce3]">
            On April 14, 1910, President William Howard Taft
            threw the ceremonial first pitch at Washington&apos;s
            Opening Day game, beginning a presidential tradition
            that continues to connect the White House and
            America&apos;s national pastime.
          </p>

          <Link
            href="/presidents/william-howard-taft"
            className="mt-8 inline-block bg-[#a4282d] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#bd3338]"
          >
            Explore William Howard Taft →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#a4282d] bg-[#071d31] px-6 py-10 text-center text-white">
        <Link href="/" className="font-serif text-2xl font-bold">
          PRESIDENTIAL PASTIME
        </Link>

        <p className="mt-3 text-sm text-[#c9b98c]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-[#c9b98c]">
            Home
          </Link>

          <Link
            href="/presidents"
            className="hover:text-[#c9b98c]"
          >
            Presidents
          </Link>
        </div>

        <p className="mt-7 text-xs text-[#9baab6]">
          An independent historical research archive.
        </p>
      </footer>
    </main>
  );
}
