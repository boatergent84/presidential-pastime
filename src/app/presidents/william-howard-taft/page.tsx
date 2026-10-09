
export default function WilliamHowardTaftPage() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* HEADER */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <a
              href="/"
              className="font-serif text-2xl font-bold tracking-wide"
            >
              PRESIDENTIAL PASTIME
            </a>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#c9d4df]">
              America&apos;s Presidents. America&apos;s Pastime.
            </p>
          </div>

          <a
            href="/"
            className="border border-[#c9d4df] px-4 py-2 text-xs font-bold uppercase tracking-widest"
          >
            ← Home
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* HERO */}
        <section className="grid gap-8 border-b-2 border-[#b8aa8e] pb-10 md:grid-cols-[260px_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            {/* Circular navy-and-gold presidential portrait */}
            <div className="flex h-[240px] w-[240px] shrink-0 items-center justify-center rounded-full border-[6px] border-[#102c44] bg-[#c9b98c] p-[9px] shadow-xl">
              <img
                src="/taft.jpg"
                alt="President William Howard Taft"
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
              Presidential Baseball Profile
            </p>

            <h1 className="mt-2 font-serif text-5xl font-bold leading-tight md:text-6xl">
              William Howard Taft
            </h1>

            <p className="mt-2 font-serif text-xl italic text-[#59636b]">
              27th President of the United States • 1909–1913
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f4b55]">
              William Howard Taft holds a special place in baseball history.
              During his presidency, the ceremonial presidential Opening Day
              first pitch became an American tradition.
            </p>

            <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["President", "No. 27"],
                ["Years", "1909–1913"],
                ["Baseball Legacy", "Opening Day"],
                ["Home State", "Ohio"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border border-[#b8aa8e] bg-[#f8f3e8] p-4"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                    {label}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-12 grid gap-8 md:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The Baseball President
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Taft and America&apos;s Pastime
            </h2>

            <div className="mt-5 space-y-4 text-[17px] leading-8 text-[#3f4b55]">
              <p>
                Baseball was already becoming America&apos;s national pastime
                when William Howard Taft entered the White House in 1909.
                Taft&apos;s appearances at Washington baseball games helped
                connect the presidency with the sport in a new and highly
                visible way.
              </p>

              <p>
                On April 14, 1910, Taft threw a ceremonial first pitch before
                Washington opened its season against the Philadelphia
                Athletics. The moment became the foundation of a presidential
                baseball tradition that continued for generations.
              </p>

              <p>
                Taft returned to the ballpark during his presidency, creating
                some of the earliest surviving photographs of an American
                president attending major-league baseball.
              </p>
            </div>
          </div>

          <aside className="border border-[#b8aa8e] bg-[#102c44] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3c6a5]">
              Archive Record
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold">
              William Howard Taft
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-[#dbe2e8]">
              <div>
                <p className="font-bold text-white">Presidency</p>
                <p>March 4, 1909 – March 4, 1913</p>
              </div>

              <div>
                <p className="font-bold text-white">
                  Historic Baseball Role
                </p>
                <p>
                  Early presidential Opening Day ceremonial first pitch
                </p>
              </div>

              <div>
                <p className="font-bold text-white">Primary Ballpark</p>
                <p>Washington, D.C.</p>
              </div>

              <div>
                <p className="font-bold text-white">Legacy</p>
                <p>Helped establish the president-baseball tradition</p>
              </div>
            </div>
          </aside>
        </section>

        {/* FEATURED MOMENT */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Featured Moment
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              The First Presidential Opening Day Pitch
            </h2>
          </div>

          <article className="mt-6 grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-2">
            <div className="bg-[#102c44] p-3">
              <img
                src="/taft-first-pitch-1910.jpg"
                alt="William Howard Taft at a baseball game in 1910"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                April 14, 1910 • Washington, D.C.
              </p>

              <h3 className="mt-2 font-serif text-3xl font-bold">
                A Presidential Tradition Begins
              </h3>

              <p className="mt-4 leading-8 text-[#59636b]">
                Taft threw the ceremonial first pitch before Washington
                opened its season against the Philadelphia Athletics.
                Washington won 3–0 behind Walter Johnson&apos;s one-hit
                shutout.
              </p>
            </div>
          </article>
        </section>

        {/* TIMELINE */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Timeline
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Taft&apos;s Baseball History
            </h2>
          </div>

          <div className="mt-6 space-y-6">
            {[
              [
                "1910",
                "A Presidential Tradition Begins",
                "On April 14, 1910, Taft threw the ceremonial first pitch before Washington opened its season against the Philadelphia Athletics.",
                "/taft-first-pitch-1910.jpg",
              ],
              [
                "1911",
                "The Tradition Continues",
                "On April 12, 1911, Taft returned for Opening Day and again threw the ceremonial first pitch, helping establish the presidential Opening Day tradition.",
                "/taft-baseball-1911.jpg",
              ],
              [
                "1912",
                "Taft Returns to the Ballpark",
                "Taft continued attending baseball during his presidency, leaving behind an important photographic record of the presidency's growing connection with the national pastime.",
                "/taft-baseball-1912.jpg",
              ],
            ].map(([year, title, description, image]) => (
              <article
                key={`${year}-${title}`}
                className="grid overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-[140px_1fr]"
              >
                <div className="flex items-center justify-center bg-[#a4282d] p-6 font-serif text-2xl font-bold text-white">
                  {year}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-[#59636b]">
                    {description}
                  </p>

                  <div className="mt-5 flex justify-center bg-[#102c44] p-3">
                    <img
                      src={image}
                      alt={`${title} - ${year}`}
                      className="h-auto max-h-[520px] w-full object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GAMES */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Games &amp; First Pitches
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Taft at the Ballpark
            </h2>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              [
                "APR 14",
                "1910",
                "Washington, D.C.",
                "Washington vs. Philadelphia",
                "Taft threw the ceremonial first pitch as Washington defeated Philadelphia 3–0.",
              ],
              [
                "APR 12",
                "1911",
                "Washington, D.C.",
                "Opening Day",
                "Taft returned for another Opening Day appearance and ceremonial first pitch.",
              ],
            ].map(([date, year, place, game, note]) => (
              <article
                key={`${date}-${year}`}
                className="border border-[#b8aa8e] bg-[#f8f3e8] p-6"
              >
                <div className="flex items-start gap-5">
                  <div className="min-w-[80px] bg-[#a4282d] p-3 text-center text-white">
                    <p className="text-xs font-bold">{date}</p>
                    <p className="font-serif text-xl font-bold">
                      {year}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a4282d]">
                      {place}
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-bold">
                      {game}
                    </h3>

                    <p className="mt-2 leading-7 text-[#59636b]">
                      {note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HISTORIC PHOTO */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Historic Photos
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Taft and America&apos;s Game
            </h2>
          </div>

          <article className="mt-6 overflow-hidden border border-[#b8aa8e] bg-[#f8f3e8]">
            <div className="bg-[#102c44] p-4">
              <img
                src="/taft-ballgame-1909.jpg"
                alt="William Howard Taft at a baseball game in 1909"
                className="mx-auto h-auto max-h-[650px] w-full object-contain"
              />
            </div>

            <div className="p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                Baseball &amp; the Presidency
              </p>

              <h3 className="mt-2 font-serif text-3xl font-bold">
                The President Who Started a Tradition
              </h3>

              <p className="mt-3 max-w-4xl leading-8 text-[#59636b]">
                Taft&apos;s baseball appearances captured the growing
                relationship between the White House and America&apos;s
                national pastime during the early twentieth century.
              </p>
            </div>
          </article>
        </section>

        {/* MEMORABILIA */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Memorabilia
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold">
              Collecting the Taft Baseball Story
            </h2>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              [
                "Historic Photographs",
                "Original photographs and press images documenting Taft at Washington baseball games.",
              ],
              [
                "Opening Day Programs",
                "Programs, scorecards and ephemera connected with early presidential Opening Day appearances.",
              ],
              [
                "Presidential Baseballs",
                "Baseballs and related artifacts representing the beginning of the presidential first-pitch tradition.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="border border-[#b8aa8e] bg-[#f8f3e8] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#102c44] text-2xl text-white">
                  ⚾
                </div>

                <h3 className="font-serif text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-[#59636b]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SOURCES */}
        <section className="mt-14 border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Research &amp; Sources
          </p>

          <h2 className="mt-1 font-serif text-3xl font-bold">
            Building the Historical Record
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#59636b]">
            Presidential Pastime uses historic photographs, contemporary
            newspaper accounts, archival records and baseball history
            sources to document the relationship between American
            presidents and the national pastime.
          </p>

          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <div className="border border-[#b8aa8e] bg-[#f8f3e8] p-4">
              Library of Congress photographic collections
            </div>

            <div className="border border-[#b8aa8e] bg-[#f8f3e8] p-4">
              Historic baseball and newspaper archives
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 border-t-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="font-serif text-xl font-bold">
            PRESIDENTIAL PASTIME
          </p>

          <p className="mt-1 text-sm text-[#c9d4df]">
            Exploring the history of America&apos;s presidents and
            America&apos;s pastime.
          </p>
        </div>
      </footer>
    </main>
  );
}
