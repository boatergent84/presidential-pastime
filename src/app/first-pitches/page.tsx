
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArchiveShell from "../components/archive-shell";

export const metadata: Metadata = {
  title: "The First Pitch | Presidential Pastime",
  description:
    "April 14, 1910: Discover how President William Howard Taft began the presidential ceremonial first-pitch tradition.",
  openGraph: {
    title: "The First Pitch | Presidential Pastime",
    description: "April 14, 1910 — The Day a Presidential Tradition Was Born.",
    url: "https://presidentialpastime.com/first-pitches",
    type: "article",
    images: [{
      url: "/taft-first-pitch-1910.jpg",
      alt: "President William Howard Taft and the 1910 first-pitch tradition",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/taft-first-pitch-1910.jpg"],
  },
};

const gold = "#b59a62";

const facts = [
  { label: "DATE", value: "April 14, 1910" },
  { label: "PRESIDENT", value: "William Howard Taft" },
  { label: "BALLPARK", value: "National Park, Washington" },
  { label: "ATTENDANCE", value: "12,226" },
];

const moments = [
  {
    number: "01",
    title: "A President Arrives",
    text: "President Taft arrived at Washington's ballpark with Vice President James S. Sherman and other dignitaries. The crowd welcomed the president to the Senators' season opener.",
  },
  {
    number: "02",
    title: "The Ceremonial Toss",
    text: "Umpire Billy Evans presented Taft with a new baseball. From his seat in the grandstand, Taft threw the ball toward Washington pitcher Walter Johnson, inaugurating a new presidential baseball tradition.",
  },
  {
    number: "03",
    title: "The Big Train Takes Over",
    text: "Walter Johnson dominated the Philadelphia Athletics. The 22-year-old pitcher surrendered just one hit, struck out nine batters, and completed a 3–0 shutout.",
  },
  {
    number: "04",
    title: "A Baseball Becomes History",
    text: "Johnson saved the ceremonial baseball and sent it to the White House for Taft's autograph. The president signed it with a personal message praising Johnson's pitching.",
  },
];

const sources = [
  {
    title: "Library of Congress — Opening Day Redux",
    href: "https://blogs.loc.gov/loc/2013/03/opening-day-redux-for-president-taft/",
  },
  {
    title: "SABR — Walter Johnson Impresses President Taft",
    href: "https://sabr.org/gamesproj/game/april-14-1910-walter-johnson-impresses-president-taft-on-opening-day/",
  },
  {
    title: "MLB — The Presidential First-Pitch Tradition",
    href: "https://www.mlb.com/cut4/president-taft-throws-first-pitch-c163353914",
  },
];

export default function FirstPitchPage() {
  return (
    <ArchiveShell
      eyebrow="Presidential Pastime | Historical Exhibit No. 001"
      title="The First Pitch"
      subtitle="April 14, 1910 — The Day a Presidential Tradition Was Born"
    >
      <div className="space-y-12 pb-12">

        {/* Main historical photograph */}
        <section className="overflow-hidden rounded-xl border border-[#c9b98c] bg-[#102c44] text-white shadow-xl">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[520px]">
            <Image
              src="/taft-first-pitch-1910.jpg"
              alt="Historical photograph associated with President William Howard Taft's 1910 first pitch"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-contain"
            />
          </div>
          <div className="border-t border-[#806b46] px-6 py-5 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7a]">
              Washington, D.C. | April 14, 1910
            </p>
            <p className="mt-3 font-serif text-xl sm:text-2xl">
              One baseball. One president. A tradition that would span generations.
            </p>
          </div>
        </section>

        {/* Historical facts */}
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-[#c9b98c] bg-[#102c44] p-5 text-center text-white"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#d7bb7a]">
                {fact.label}
              </p>
              <p className="mt-3 font-serif text-base sm:text-lg">
                {fact.value}
              </p>
            </div>
          ))}
        </section>

        {/* Opening story */}
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
            The Story Behind the Tradition
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#102c44] sm:text-4xl">
            An American Tradition Is Born
          </h2>
          <div className="mx-auto my-6 h-1 w-24" style={{ backgroundColor: gold }} />

          <div className="space-y-5 text-left text-base leading-8 text-[#273747]">
            <p>
              On a spring afternoon in Washington, D.C., President William
              Howard Taft stepped into baseball history. It was April 14,
              1910, and the Washington Senators were preparing to open
              their American League season against Connie Mack&apos;s
              Philadelphia Athletics.
            </p>
            <p>
              Before the game began, umpire Billy Evans approached the
              president&apos;s box and presented Taft with a new baseball.
              From his seat in the grandstand, the 27th president
              tossed the ball toward Washington&apos;s young pitching
              sensation, Walter Johnson.
            </p>
            <p>
              It was a simple gesture, but its significance would grow
              far beyond that afternoon. Taft had become the first
              sitting American president to perform the ceremonial
              Opening Day first pitch, establishing a tradition
              that would connect the presidency with America&apos;s
              national pastime for generations.
            </p>
          </div>
        </section>

        {/* Game scoreboard */}
        <section className="overflow-hidden rounded-xl border-4 border-[#b59a62] bg-[#102c44] p-6 text-white shadow-lg sm:p-9">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#d7bb7a]">
            Official Game Record | April 14, 1910
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl">
            Opening Day — Washington
          </h2>

          <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
            <div>
              <p className="font-serif text-lg sm:text-2xl">
                Washington
              </p>
              <p className="text-xs text-[#d7bb7a]">SENATORS</p>
              <p className="mt-3 font-serif text-6xl font-bold">3</p>
            </div>

            <div className="text-xl text-[#d7bb7a]">—</div>

            <div>
              <p className="font-serif text-lg sm:text-2xl">
                Philadelphia
              </p>
              <p className="text-xs text-[#d7bb7a]">ATHLETICS</p>
              <p className="mt-3 font-serif text-6xl font-bold">0</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#806b46] pt-6 text-center">
            <div>
              <p className="text-3xl font-bold">9</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">STRIKEOUTS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">HIT ALLOWED</p>
            </div>
            <div>
              <p className="text-3xl font-bold">9</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">INNINGS</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm italic text-[#dfcda8]">
            Walter Johnson — Winning Pitcher | Eddie Plank — Losing Pitcher
          </p>
        </section>

        {/* Historical photograph gallery */}
        <section>
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
              From the Presidential Pastime Archives
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
              Taft and the Game of Baseball
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-[#c9b98c] bg-[#f5efdf]">
              <div className="relative h-80 bg-[#e8e0ce]">
                <Image
                  src="/taft-baseball-1911.jpg"
                  alt="Historical photograph of Taft associated with baseball in 1911"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-serif text-lg font-bold text-[#102c44]">
                  The Tradition Continues — 1911
                </p>
                <p className="mt-2 text-sm leading-6 text-[#46515a]">
                  Taft returned to Washington baseball on April 12,
                  1911, and again performed the ceremonial first pitch.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-[#c9b98c] bg-[#f5efdf]">
              <div className="relative h-80 bg-[#e8e0ce]">
                <Image
                  src="/taft-baseball-1912.jpg"
                  alt="Historical photograph associated with President Taft and baseball in 1912"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-serif text-lg font-bold text-[#102c44]">
                  A Presidential Baseball Fan — 1912
                </p>
                <p className="mt-2 text-sm leading-6 text-[#46515a]">
                  Taft&apos;s enthusiasm for baseball extended beyond
                  his historic 1910 appearance, reflecting a lasting
                  connection to the sport.
                </p>
              </figcaption>
            </figure>
          </div>
          <p className="mt-3 text-xs italic text-[#65717b]">
            Companion photographs represent Taft&apos;s broader baseball history;
            they are not presented as images of the April 14, 1910 ceremony.
            Individual photographic attributions should be confirmed
            against their original archival records.
          </p>
        </section>

        {/* Moment-by-moment timeline */}
        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
              The Historic Afternoon
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
              Four Moments That Made History
            </h2>
          </div>

          <div className="space-y-4">
            {moments.map((moment) => (
              <article
                key={moment.number}
                className="flex gap-5 rounded-lg border border-[#d5c8a8] bg-[#f5efdf] p-5 sm:p-7"
              >
                <div className="font-serif text-3xl font-bold text-[#a4282d]">
                  {moment.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#102c44]">
                    {moment.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#334454]">
                    {moment.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* The surviving baseball */}
        <section className="rounded-xl border-2 border-[#b59a62] bg-[#eee5d2] p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
            The Historic Baseball
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
            The Ball That Became a Presidential Keepsake
          </h2>

          <p className="mt-5 leading-8 text-[#334454]">
            The baseball used in Taft&apos;s first-pitch ceremony was
            not forgotten after the game. Walter Johnson had it
            preserved and requested the president&apos;s autograph.
            Taft signed the ball with a personal message celebrating
            Johnson&apos;s outstanding performance.
          </p>

          <div className="my-7 border-l-4 border-[#a4282d] bg-[#fffaf0] p-6">
            <p className="font-serif text-lg italic leading-8 text-[#102c44]">
              &quot;For Walter Johnson, with the hope that he may
              continue to be as formidable as in yesterday&apos;s game.&quot;
            </p>
            <p className="mt-3 text-sm font-bold text-[#a4282d]">
              — William Howard Taft, April 15, 1910
            </p>
          </div>

          <p className="text-sm leading-7 text-[#46515a]">
            This inscription is documented in the Library of Congress
            account of Taft&apos;s correspondence. No substitute or
            reproduction baseball is shown here as the original artifact.
          </p>
        </section>

        {/* Historical curiosities */}
        <section>
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-[#102c44]">
            Did You Know?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Not From the Mound",
                text: "Unlike most modern ceremonial pitches, Taft threw the ball from his grandstand seat toward Walter Johnson.",
              },
              {
                title: "A Near No-Hitter",
                text: "Walter Johnson held Philadelphia hitless until the seventh inning, when Frank Baker doubled.",
              },
              {
                title: "The Titanic Connection",
                text: "Taft's military aide Archibald Butt died aboard Titanic in 1912. In the aftermath of the tragedy, Vice President Sherman handled the presidential Opening Day ceremony.",
              },
            ].map((fact) => (
              <article
                key={fact.title}
                className="rounded-lg border-t-4 border-[#a4282d] bg-[#f5efdf] p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold text-[#102c44]">
                  {fact.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#334454]">
                  {fact.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Legacy */}
        <section className="rounded-xl bg-[#102c44] px-6 py-10 text-center text-white sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7a]">
            The Presidential Legacy
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            A Tradition Larger Than the Game
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#e5dfd0]">
            What began with a baseball tossed from a grandstand in
            1910 became a symbolic meeting of two American institutions:
            the presidency and the national pastime. Through wars,
            celebrations, triumphs, and changing generations,
            the ceremonial first pitch has remained a distinctive
            part of American baseball history.
          </p>

          <Link
            href="/presidents/william-howard-taft"
            className="mt-8 inline-block rounded-md border border-[#d7bb7a] px-7 py-3 font-bold text-[#f0d79b] transition hover:bg-[#d7bb7a] hover:text-[#102c44]"
          >
            Explore William Howard Taft&apos;s Presidential Profile →
          </Link>
        </section>

      </div>

      {/* SITE FOOTER */}
      
    </ArchiveShell>
  );
}
