
import Link from "next/link";
import { presidents } from "./presidents-data";

export default function PresidentsArchivePage() {
  const sortedPresidents = [...presidents].sort(
    (a, b) => a.number - b.number
  );

  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* Header */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-wide"
          >
            PRESIDENTIAL PASTIME
          </Link>
          <span className="hidden text-sm italic text-[#c9b98c] sm:block">
            America&apos;s Presidents. America&apos;s Pastime.
          </span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
          The Presidential Baseball Archive
        </p>

        <h1 className="mt-3 font-serif text-5xl font-bold">
          Presidents &amp; Baseball
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#59636b]">
          Explore the history of America&apos;s presidents and
          America&apos;s pastime, from Civil War baseball to the modern
          Major Leagues. Discover presidential first pitches,
          ballpark appearances, historical photographs, and
          memorable moments in baseball history.
        </p>

        <div className="mt-7 border-l-4 border-[#a4282d] bg-[#f8f3e8] px-5 py-4">
          <p className="font-serif text-lg font-bold">
            {sortedPresidents.length} Presidents in the Archive
          </p>
          <p className="mt-1 text-sm text-[#59636b]">
            Beginning with Abraham Lincoln and continuing through
            the modern presidency.
          </p>
        </div>
      </section>

      {/* President Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPresidents.map((president) => (
            <Link
              key={president.slug}
              href={`/presidents/${president.slug}`}
              className="group overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-64 items-center justify-center bg-[#102c44] p-4">
                {president.portrait ? (
                  <img
                    src={president.portrait}
                    alt={president.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-center text-[#eee7d7]">
                    <p className="font-serif text-5xl font-bold opacity-30">
                      {president.number}
                    </p>
                    <p className="mt-3 font-serif text-xl">
                      Historical Portrait
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a4282d]">
                  President No. {president.number}
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold group-hover:text-[#a4282d]">
                  {president.name}
                </h2>

                <p className="mt-2 text-sm text-[#59636b]">
                  {president.years}
                </p>

                <div className="mt-5 border-t border-[#b8aa8e] pt-4">
                  <p className="font-serif italic text-[#59636b]">
                    {president.baseballEra}
                  </p>
                </div>

                <p className="mt-5 text-sm font-bold text-[#a4282d]">
                  Explore Presidential Archive →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white">
        PRESIDENTIAL PASTIME
        <p className="mt-2 text-[#c9b98c]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>
      </footer>
    </main>
  );
}
