import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "William Howard Taft's First Pitch in 1910 | Presidential Pastime",
  description:
    "Discover how President William Howard Taft began the presidential first-pitch tradition on April 14, 1910, at Washington's Opening Day baseball game.",
  alternates: {
    canonical: "https://presidentialpastime.com/presidents/william-howard-taft",
  },
  openGraph: {
    title: "William Howard Taft's Historic 1910 First Pitch",
    description:
      "Explore the story of President Taft's 1910 ceremonial first pitch and the beginning of a White House baseball tradition.",
    url: "https://presidentialpastime.com/presidents/william-howard-taft",
    siteName: "Presidential Pastime",
    type: "article",
  },
};

import Link from "next/link";

export default function WilliamHowardTaftPage() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#172b3d]">
      {/* HEADER */}
      

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* HERO */}
        <section className="grid gap-8 border-b-2 border-[#b8aa8e] pb-10 md:grid-cols-[260px_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            {/* Thin navy-blue and antique-gold circular portrait */}
            <div className="relative h-[270px] w-[270px] shrink-0 flex items-center justify-center">
              {/* PRESIDENTIAL 50 WHITE STARS */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 270 270"
                aria-hidden="true"
              >
                {Array.from({ length: 50 }, (_, i) => {
                  const angle = (i * 2 * Math.PI) / 50 - Math.PI / 2;
                  const x = 135 + 130 * Math.cos(angle);
                  const y = 135 + 130 * Math.sin(angle);

                  const points = Array.from({ length: 10 }, (_, j) => {
                    const a = (j * Math.PI) / 5 - Math.PI / 2;
                    const r = j % 2 === 0 ? 3.2 : 1.5;
                    return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
                  }).join(" ");

                  return (
                    <polygon
                      key={i}
                      points={points}
                      fill="#FFFFFF"
                      stroke="#102c44"
                      strokeWidth="0.35"
                    />
                  );
                })}
              </svg>
              <div className="h-[240px] w-[240px] shrink-0 overflow-hidden rounded-full border border-[#102c44] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[#c9b98c] bg-[#e8dfca]">
                <img
                  src="/taft-formal-portrait.jpg?v=1"
                  alt="President William Howard Taft"
                  className="h-full w-full  object-cover object-top scale-[1.15]"
                />
              </div>
            </div>
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
                ["Throwing Hand", "Right"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-[3px] border-[#C5A46D] bg-[#f8f3e8] p-4"
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
              <p className="mt-4 leading-8 text-[#59636b]">
                William Howard Taft occupies a unique place in the history of American
                baseball. On April 14, 1910, he became the first sitting United States
                president to throw a ceremonial first pitch on Major League Baseball&apos;s
                Opening Day. The occasion took place at Washington&apos;s National Park,
                where the Senators faced the Philadelphia Athletics. Taft&apos;s appearance
                helped establish a connection between the presidency and America&apos;s
                national pastime that would endure for generations. The game itself
                was equally memorable: legendary pitcher Walter Johnson held
                Philadelphia to one hit as Washington earned a 3–0 victory. Taft
                returned for Opening Day in 1911, reinforcing the new tradition,
                and attended another Washington baseball game in 1912. His
                presidency coincided with the Deadball Era, when dominant pitching,
                speed, defense, and strategic play shaped professional baseball.
                Stars such as Johnson, Ty Cobb, Honus Wagner, and Christy Mathewson
                were among the defining figures of the period. Although earlier
                presidents had attended baseball games, Taft transformed presidential
                participation into a ceremonial Opening Day event. His first pitch
                became a powerful symbol of the relationship between the White House,
                the nation&apos;s capital, and professional baseball. More than a century
                later, Taft&apos;s 1910 appearance remains one of the most recognizable
                milestones in presidential baseball history.
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

          <aside className="flex flex-col items-center justify-center border border-[#b8aa8e] bg-[#102c44] p-8 text-center text-white">
            <p className="font-serif text-2xl leading-relaxed italic text-[#fff5df]">
              &ldquo;The game of baseball is a clean, straight game.&rdquo;
            </p>
            <p className="mt-6 font-serif text-lg text-[#e3c6a5]">
              — William Howard Taft
            </p>
          </aside>
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


      </div>

      <nav
        aria-label="Presidential profile navigation"
        className="mx-auto max-w-6xl px-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#b8aa8e] py-7 text-sm font-bold text-[#a4282d]">
          <Link href="/presidents/theodore-roosevelt">
            ← Theodore Roosevelt
          </Link>

          <Link href="/presidents">
            All Presidents
          </Link>

          <Link href="/presidents/woodrow-wilson">
            Woodrow Wilson →
          </Link>
        </div>
      </nav>

      {/* FOOTER */}
      
    </main>
  );
}
