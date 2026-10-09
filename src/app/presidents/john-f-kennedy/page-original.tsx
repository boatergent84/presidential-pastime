export default function JohnFKennedyPage() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* Header */}
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <a
              href="/"
              className="font-serif text-2xl font-bold tracking-wide"
            >
              PRESIDENTIAL PASTIME
            </a>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c9b98c]">
              America&apos;s Presidents. America&apos;s Pastime.
            </p>
          </div>

          <a
            href="/"
            className="border border-[#c9b98c] px-4 py-2 text-xs font-bold uppercase tracking-wider"
          >
            ← Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#142f47] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[240px_1fr] md:items-center">
          <div className="mx-auto">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-[#c9b98c] bg-[#e8dfca] shadow-xl">
              <img
                src="/jfk-portrait.jpg"
                alt="President John F. Kennedy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#c9b98c]">
              Presidential Baseball Profile
            </p>

            <h1 className="font-serif text-5xl font-bold md:text-6xl">
              John F. Kennedy
            </h1>

            <p className="mt-3 font-serif text-xl italic text-[#ddd2b9]">
              35th President of the United States
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="border border-[#71869a] bg-[#0d263b] px-4 py-2">
                Presidency: 1961–1963
              </span>
              <span className="border border-[#71869a] bg-[#0d263b] px-4 py-2">
                Baseball Era: Expansion Era
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b border-[#c9bea7] bg-[#e2d7c1]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#b9aa8e] md:grid-cols-4">
          {[
            ["President", "No. 35"],
            ["Term", "1961–1963"],
            ["First Pitch", "Opening Day"],
            ["Home", "Massachusetts"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#e8dfca] p-5 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d292d]">
                {label}
              </p>
              <p className="mt-1 font-serif text-lg font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Overview */}
        <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The President & The Game
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              Kennedy and America&apos;s Pastime
            </h2>

            <div className="mt-3 h-1 w-16 bg-[#a4282d]" />

            <p className="mt-6 font-serif text-lg leading-8 text-[#384552]">
              John F. Kennedy&apos;s presidency coincided with an important
              period in American baseball history. Major League Baseball was
              expanding, Washington had a new Senators franchise, and the
              presidential Opening Day tradition remained an important
              connection between the White House and the national pastime.
            </p>

            <p className="mt-4 font-serif text-lg leading-8 text-[#384552]">
              This archive will document Kennedy&apos;s appearances, ceremonial
              first pitches, photographs, quotations, baseball connections and
              surviving memorabilia.
            </p>
          </div>

          <aside className="border-t-4 border-[#a4282d] bg-[#142f47] p-6 text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9b98c]">
              Archive Record
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold">
              John F. Kennedy
            </h3>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[#aebbc5]">Born</dt>
                <dd className="font-bold">May 29, 1917</dd>
              </div>

              <div>
                <dt className="text-[#aebbc5]">Presidency</dt>
                <dd className="font-bold">January 20, 1961 – November 22, 1963</dd>
              </div>

              <div>
                <dt className="text-[#aebbc5]">Political Party</dt>
                <dd className="font-bold">Democratic</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Featured Moment */}
<section className="mt-14 overflow-hidden border border-[#b8aa8e] bg-[#142f47] shadow-lg">
  <div className="grid md:grid-cols-[1.2fr_1fr]">
    <div className="bg-black">
      <img
        src="/jfk-first-pitch-1961.jpg"
        alt="President John F. Kennedy throwing the ceremonial first pitch at Griffith Stadium on April 10, 1961"
        className="h-full min-h-[350px] w-full object-cover grayscale"
      />
    </div>

    <div className="p-8 text-white md:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9b98c]">
        Featured Moment
      </p>

      <p className="mt-4 font-serif text-lg text-[#c9b98c]">
        April 10, 1961 • Griffith Stadium
      </p>

      <h2 className="mt-2 font-serif text-4xl font-bold">
        Kennedy&apos;s First Presidential Opening Day
      </h2>

      <div className="mt-4 h-1 w-16 bg-[#a4282d]" />

      <p className="mt-6 font-serif text-lg leading-8 text-[#e5e0d5]">
        President John F. Kennedy threw the ceremonial first pitch before
        the Washington Senators opened their 1961 season against the
        Chicago White Sox at Griffith Stadium.
      </p>

      <p className="mt-4 leading-7 text-[#bfc9d0]">
        The game marked the debut of Washington&apos;s new American League
        Senators franchise and became the final presidential Opening Day
        ceremony held at historic Griffith Stadium.
      </p>

      <div className="mt-7 border-t border-[#52697c] pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9b98c]">
          Archival Source
        </p>
        <p className="mt-2 text-sm text-[#bfc9d0]">
          John F. Kennedy Presidential Library and Museum / National Archives
        </p>
      </div>
    </div>
  </div>
</section>
        
        {/* Timeline */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Baseball Timeline
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold">
              Kennedy&apos;s Baseball History
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {[
              [
                "1961",
                "Opening Day",
                "Kennedy continued the presidential tradition of participating in Major League Baseball's Opening Day ceremonies in Washington.",
                "/jfk-first-pitch-1961.jpg"
              ],
              [
                "1962",
                "Baseball & the White House",
                "Baseball remained part of the public and ceremonial life surrounding the Kennedy White House.",
              "/jfk-first-pitch-1962.webp"],
              [
                "1963",
                "Final Season",
                "Kennedy's final year in office overlapped with another memorable season in American baseball history.",
                "/jfk-opening-day-1963.jpg"
              ],
            ].map(([year, title, description, image]) => (
              <article
                key={`${year}-${title}`}
                className="grid border border-[#c9bea7] bg-[#f6f0e4] shadow-sm md:grid-cols-[110px_1fr]"
              >
                <div className="flex items-center justify-center bg-[#a4282d] p-5 font-serif text-2xl font-bold text-white">
                  {year}
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-[#4c5963]">
                    {description}
                  </p>
                  {image && (
  <img
    src={image}
    alt={`${title} — ${year}`}
    className="mt-4 w-full rounded-sm object-cover"
  />
)}
                </div>
              </article>
            ))}
          </div>
        </section>
        
        
        {/* Archive categories */}
      

        {/* Games & First Pitches */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Games & First Pitches
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold">
              Kennedy at the Ballpark
            </h2>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              [
                "APR 10, 1961",
                "Opening Day • Griffith Stadium",
                "Washington Senators vs. Chicago White Sox",
                "Kennedy threw the ceremonial first pitch during his first baseball Opening Day as president.",
              ],
              [
                "APR 9, 1962",
                "Opening Day • D.C. Stadium",
                "Washington Senators vs. Detroit Tigers",
                "Kennedy threw the ceremonial first pitch for the first Major League game played at the new D.C. Stadium.",
              ],
              [
                "JUL 10, 1962",
                "MLB All-Star Game • D.C. Stadium",
                "National League vs. American League",
                "Kennedy attended the All-Star Game in Washington and participated in the ceremonial first-pitch tradition.",
              ],
              [
                "APR 8, 1963",
                "Opening Day • D.C. Stadium",
                "Washington Senators vs. Baltimore Orioles",
                "Kennedy returned to the ballpark for his third presidential Opening Day ceremony.",
              ],
            ].map(([date, title, game, description]) => (
              <article
                key={date}
                className="border border-[#c9bea7] bg-[#f6f0e4] p-6 shadow-sm"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[#a4282d]">
                  {date}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm font-bold text-[#53606a]">{game}</p>
                <p className="mt-4 leading-7 text-[#59636b]">{description}</p>
              </article>
            ))}
          </div>
        </section>
{/* Historic Photos */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Historic Photos
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold">
              Baseball at the Kennedy White House
            </h2>
          </div>

          <article className="mt-6 overflow-hidden border border-[#c9bea7] bg-[#f6f0e4] shadow-sm">
            <div className="grid md:grid-cols-[1.25fr_1fr]">
              <img
                src="/jfk-stan-musial-1962.jpg"
                alt="President John F. Kennedy with Stan Musial and the Musial family in the Oval Office in 1962"
                className="h-full min-h-[360px] w-full object-cover grayscale"
              />

              <div className="flex flex-col justify-center p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                  July 11, 1962 • Oval Office
                </p>

                <h3 className="mt-3 font-serif text-2xl font-bold">
                  Stan Musial Visits President Kennedy
                </h3>

                <div className="mt-4 h-1 w-14 bg-[#a4282d]" />

                <p className="mt-5 leading-7 text-[#59636b]">
                  President Kennedy welcomed St. Louis Cardinals legend Stan
                  Musial to the Oval Office along with Musial&apos;s wife,
                  Lillian, and daughter, Janet.
                </p>

                <div className="mt-6 border-t border-[#c9bea7] pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d292d]">
                    Photograph
                  </p>
                  <p className="mt-2 text-sm text-[#59636b]">
                    Robert Knudsen • White House Photographs • John F. Kennedy
                    Presidential Library and Museum
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        
                {/* Memorabilia & Artifacts */}
        <section className="mt-14">
          <div className="border-b-2 border-[#b8aa8e] pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Memorabilia & Artifacts
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold">
              Kennedy Baseball Collection
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#59636b]">
              Baseball artifacts and documents help preserve the story of
              President Kennedy&apos;s connection to America&apos;s pastime.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              [
                "CEREMONIAL BASEBALLS",
                "First Pitch Baseballs",
                "Baseballs connected with presidential Opening Day ceremonies and other official baseball events.",
              ],
              [
                "EPHEMERA",
                "Programs & Tickets",
                "Programs, tickets and other printed material document the games and ceremonies attended during the Kennedy presidency.",
              ],
              [
                "PRESIDENTIAL RECORDS",
                "Letters & Documents",
                "Correspondence, schedules and archival records provide a documentary trail of baseball-related events at the Kennedy White House.",
              ],
            ].map(([category, title, description]) => (
              <article
                key={title}
                className="border border-[#c9bea7] bg-[#f6f0e4] p-6 shadow-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                  {category}
                </p>

                <h3 className="mt-3 font-serif text-xl font-bold">
                  {title}
                </h3>

                <div className="mt-3 h-1 w-10 bg-[#a4282d]" />

                <p className="mt-4 leading-7 text-[#59636b]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>  
          

        {/* Sources */}
        <section className="mt-14 border-t border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            Research & Sources
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold">
            Historical Documentation
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-[#59636b]">
            Presidential Pastime is building this profile from archival and
            primary-source material. Individual photographs, events and
            quotations will include source information and image-rights
            documentation.
          </p>
        </section>
      </div>

      <footer className="mt-10 border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-white">
        <p className="font-serif text-lg font-bold">PRESIDENTIAL PASTIME</p>
        <p className="mt-1 text-xs text-[#aebbc5]">
          The Baseball History of the American Presidency
        </p>
      </footer>
    </main>
  );
}