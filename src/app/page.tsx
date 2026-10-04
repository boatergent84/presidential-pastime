const presidents = [
  ["AL", "Lincoln", "1861–1865"],
  ["AJ", "A. Johnson", "1865–1869"],
  ["USG", "Grant", "1869–1877"],
  ["RBH", "Hayes", "1877–1881"],
  ["JAG", "Garfield", "1881"],
  ["CA", "Arthur", "1881–1885"],
  ["GC", "Cleveland", "1885–1889"],
  ["BH", "B. Harrison", "1889–1893"],
  ["GC", "Cleveland", "1893–1897"],
  ["WM", "McKinley", "1897–1901"],
  ["TR", "T. Roosevelt", "1901–1909"],
  ["/taft.jpg", "Taft", "1909–1913"],
  ["/wilson.jpg", "Wilson", "1913–1921"],
  ["/harding.jpg", "Harding", "1921–1923"],
  ["/coolidge.jpg", "Coolidge", "1923–1929"],
  ["/hoover.jpg", "Hoover", "1929–1933"],
  ["/fdr.jpg", "F.D. Roosevelt", "1933–1945"],
  ["/truman.jpg", "Truman", "1945–1953"],
  ["/eisenhower.jpg", "Eisenhower", "1953–1961"],
  ["/jfk-portrait.jpg", "Kennedy", "1961–1963"],
  ["/lbj.jpg", "L.B. Johnson", "1963–1969"],
  ["/nixon.jpg", "Nixon", "1969–1974"],
  ["/ford.jpg", "Ford", "1974–1977"],
  ["/carter.jpg", "Carter", "1977–1981"],
  ["/reagan.jpg", "Reagan", "1981–1989"],
  ["/ghwb.jpg", "H.W. Bush", "1989–1993"],
  ["/clinton.jpg", "Clinton", "1993–2001"],
  ["/gwb.jpg", "W. Bush", "2001–2009"],
  ["/obama.jpg", "Obama", "2009–2017"],
  ["/trump.jpg", "Trump", "2017–2021"],
  ["/biden.jpg", "Biden", "2021–2025"],
  ["/trump.jpg", "Trump", "2025–present"],
  ["DT", "Trump", "2025–present"],
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#eee6d3] text-[#10243a]">

      {/* HEADER */}
      <header className="bg-[#071d31] text-[#f5edd8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#c5a35d] text-3xl">
              ⚾
            </div>

            <div>
              <h1 className="font-serif text-3xl font-bold tracking-[0.08em] md:text-4xl">
                PRESIDENTIAL PASTIME
              </h1>

              <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#d9c79d] md:text-xs">
                America&apos;s Presidents. America&apos;s Pastime.
              </p>
            </div>
          </div>

          <button className="hidden border border-[#d5b46d] bg-[#9e1821] px-5 py-3 text-xs font-bold uppercase tracking-wider md:block">
            Explore the Presidents
          </button>
        </div>

        <nav className="border-t border-[#31475b] bg-[#f8f2e4] text-[#10243a]">
          <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 text-sm font-semibold">
            <a href="#">Home</a>
            <a href="#">Presidents</a>
            <a href="#">First Pitches</a>
            <a href="#">Teams & Games</a>
            <a href="#">Quotes</a>
            <a href="#">Photos</a>
            <a href="#">Memorabilia</a>
            <a href="#">Timeline</a>
            <a href="#">About</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-[#0b2439]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">

          {/* HERO TEXT */}
          <div className="flex min-h-[480px] items-center px-8 py-16 md:px-14">
            <div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#c6a35c]">
                Presidents • Baseball • American History
              </p>

              <h2 className="font-serif text-5xl font-bold leading-[0.95] text-[#fff8e8] md:text-7xl">
                Presidential
                <br />
                Pastime
              </h2>

              <div className="my-6 h-[2px] w-32 bg-[#a91d28]" />

              <p className="max-w-xl font-serif text-xl italic leading-relaxed text-[#e6dac1]">
                The Baseball History of the American Presidency
              </p>

              <p className="mt-5 max-w-xl leading-7 text-[#c8d0d5]">
                Discover the presidents who loved the game, threw ceremonial
                first pitches, welcomed champions to the White House and became
                part of America&apos;s baseball story.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="bg-[#a71924] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                  Explore Presidents →
                </button>

                <button className="border border-[#d8c79e] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#f7eed9]">
                  View Timeline
                </button>

              </div>
            </div>
          </div>

          {/* COOLIDGE HERO PHOTO */}
          <div className="relative min-h-[480px] overflow-hidden bg-[#d8cfba]">

            <img
              src="/coolidge-baseball-1924.jpg"
              alt="President Calvin Coolidge with a baseball in 1924"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2439]/30 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071d31] via-[#071d31]/75 to-transparent px-8 pb-7 pt-24 text-white">

              <p className="font-serif text-xl font-bold">
                President Calvin Coolidge • 1924
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#e0c78e]">
                Library of Congress • Harris &amp; Ewing Collection
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* PRESIDENT BROWSER */}
      <section className="bg-[#071d31] py-7 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d9bd80]">
            Browse by President
          </p>

          <div className="flex gap-3 overflow-x-auto pb-3">

            {presidents.map(([initials, name, years]) => (

              <div
                key={`${name}-${years}`}
                className="min-w-[112px] border border-[#6d7d8b] bg-[#102c44] p-3 text-center"
              >

                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8dfca] font-serif text-lg font-bold text-[#142a3d]">
                  {initials.startsWith("/") ? (
  <img
    src={initials}
    alt={`${name} portrait`}
    className="h-14 w-14 rounded-full object-cover grayscale"
  />
) : (
  initials
)}
                </div>

                <p className="font-serif text-sm font-bold">
                  {name}
                </p>

                <p className="mt-1 text-[9px] text-[#b9c4cc]">
                  {years}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 lg:grid-cols-2">

          {/* FEATURED PRESIDENT */}
          <article className="border border-[#c9b994] bg-[#f8f1df] p-6 shadow-sm">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a71924]">
              Featured President
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold">
              John F. Kennedy
            </h3>

            <p className="mt-1 text-sm text-[#765d43]">
              35th President • 1961–1963
            </p>

            <p className="mt-5 leading-7 text-[#394959]">
              Explore the baseball connections, ballpark appearances, players,
              photographs and stories connected with each American president.
            </p>

            <button className="mt-6 bg-[#a71924] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white">
              View Full Profile →
            </button>

          </article>

          {/* FIRST PITCH */}
          <article className="border border-[#c9b994] bg-[#f8f1df] p-6 shadow-sm">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a71924]">
              Presidential First Pitch Timeline
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold">
              From Taft to Today
            </h3>

            <p className="mt-5 leading-7 text-[#394959]">
              Follow the presidential ceremonial first-pitch tradition through
              ballparks, Opening Days, World Series games and historic moments.
            </p>

            <button className="mt-6 bg-[#10243a] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white">
              Explore Timeline →
            </button>

          </article>

        </div>

        {/* LOWER CARDS */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          {[
            [
              "Historic Photos",
              "Explore presidential baseball photographs and archival images.",
            ],
            [
              "Teams, Games & Visits",
              "Discover ballparks, championship teams and White House visits.",
            ],
            [
              "Memorabilia",
              "Baseballs, bats, jerseys, programs, autographs and presidential artifacts.",
            ],
          ].map(([title, description]) => (

            <article
              key={title}
              className="border border-[#c9b994] bg-[#f8f1df] p-6"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#10243a] text-xl text-white">
                ⚾
              </div>

              <h3 className="font-serif text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-3 leading-6 text-[#52606d]">
                {description}
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#a71924]">
                Explore →
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#a71924] bg-[#071d31] px-6 py-12 text-center text-[#eee2c7]">

        <div className="text-4xl">
          ⚾
        </div>

        <p className="mt-4 font-serif text-2xl font-bold">
          Presidential Pastime
        </p>

        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#c8b17b]">
          America&apos;s Presidents. America&apos;s Pastime.
        </p>

      </footer>

    </main>
  );
}