import type { Metadata } from "next";
import Link from "next/link";
import ArchiveShell from "../../components/archive-shell";

export const metadata: Metadata = {
  title: "The Switch That Lit the Ballpark | Presidential Pastime",
  description:
    "Discover how Franklin D. Roosevelt's White House signal helped open the era of night baseball at Cincinnati's Crosley Field on May 24, 1935.",
  alternates: {
    canonical: "https://presidentialpastime.com/1600-collection/the-switch-that-lit-the-ballpark",
  },
  openGraph: {
    title: "The Switch That Lit the Ballpark | Presidential Pastime",
    description:
      "FDR, Crosley Field, and the 1935 signal that brought Major League Baseball under the lights.",
    url: "https://presidentialpastime.com/1600-collection/the-switch-that-lit-the-ballpark",
    siteName: "Presidential Pastime",
    type: "article",
    images: [
      {
        url: "https://tile.loc.gov/storage-services/service/pnp/cph/3c30000/3c33000/3c33800/3c33862r.jpg",
        alt: "President Franklin D. Roosevelt at a Washington baseball game in 1933",
      },
    ],
  },
};

const photographs = [
  {
    title: "FDR at the Ballpark",
    date: "Washington, D.C., 1933",
    src: "https://tile.loc.gov/storage-services/service/pnp/cph/3c30000/3c33000/3c33800/3c33862r.jpg",
    alt: "President Franklin D. Roosevelt at Griffith Stadium during a Washington baseball game in 1933",
    caption:
      "An earlier glimpse of Roosevelt at a Washington baseball game. This photograph is not from the 1935 Crosley Field ceremony.",
    credit: "Harris & Ewing, photographer · Library of Congress",
    href: "https://www.loc.gov/item/2004666476/",
  },
];

export default function SwitchThatLitTheBallparkExhibit() {
  return (
    <ArchiveShell
      eyebrow="THE 1600 COLLECTION · EXHIBIT 009"
      title="The Switch That Lit the Ballpark"
      subtitle="Franklin D. Roosevelt, Crosley Field & the Dawn of Night Baseball"
    >
      <main className="bg-[#eee7d7] text-[#172b3d]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            The 1600 Collection · Historical Exhibit · May 24, 1935
          </p>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl">
              When Baseball Stayed After Sunset
            </h2>

            <div className="mx-auto my-7 flex items-center justify-center gap-4 text-[#b79b58]">
              <span className="h-px w-20 bg-[#b79b58]" />
              <span>★</span>
              <span className="h-px w-20 bg-[#b79b58]" />
            </div>

            <p className="font-serif text-xl leading-relaxed text-[#405165]">
              At the White House, President Franklin D. Roosevelt pressed a
              telegraph key. Hundreds of miles away, a ballpark came alive
              beneath a blaze of electric light.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["MAY 24, 1935", "The first Major League night game"],
              ["632", "Floodlights at Crosley Field"],
              ["2–1", "Cincinnati’s final score"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="border border-[#c9b98c] bg-[#f5efdf] p-7 text-center"
              >
                <p className="font-serif text-3xl font-bold text-[#a4282d]">
                  {number}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#405165]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <div className="grid gap-8 md:grid-cols-2">
            {photographs.map((photo) => (
              <figure
                key={photo.title}
                className="overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8]"
              >
                <a
                  href={photo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#102c44] p-3"
                  aria-label={`View source photograph: ${photo.title}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-72 w-full object-contain"
                  />
                </a>
                <figcaption className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                    {photo.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold">
                    {photo.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#59636b]">
                    {photo.caption}
                  </p>
                  <p className="mt-3 text-xs text-[#59636b]">{photo.credit}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-[#59636b]">
            This archival image offers context for the story. It is not a
            photograph of the White House signal or the first night game at
            Crosley Field.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <div className="rounded-xl border-2 border-[#b59a62] bg-[#f5efdf] p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
              The Signal
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
              Washington to Cincinnati
            </h2>
            <p className="mt-5 leading-8 text-[#334454]">
              On May 24, 1935, baseball made a bold move into the evening.
              At 8:30 p.m., Roosevelt pressed a Western Union telegraph key
              at the White House. The signal traveled to Cincinnati, where
              Reds president Larry MacPhail activated the new lighting
              system at Crosley Field. The moment was ceremonial, but the
              change it announced was real: the national pastime could now
              welcome fans after the workday was over.
            </p>
            <p className="mt-4 leading-8 text-[#334454]">
              Engineers had installed 632 floodlights on towers rising about
              115 feet above the field. The lighting project was a major
              investment for a club trying to draw more fans during the
              Depression. Evening games offered a practical answer: workers
              who could not leave their jobs for a weekday afternoon could
              come to the ballpark after dark.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="border border-[#c9b98c] bg-[#f8f3e8] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
                The First Night
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold">
                A New Look for the National Pastime
              </h2>
              <p className="mt-5 leading-8 text-[#334454]">
                The Cincinnati Reds hosted the Philadelphia Phillies at
                Crosley Field, under lights bright enough to turn night into
                something close to day. Cincinnati won, 2–1. It was not the
                first baseball game ever played after dark; it was the first
                Major League Baseball night game, a distinction that makes
                the story both more precise and more interesting.
              </p>
              <p className="mt-4 leading-8 text-[#334454]">
                The lights did more than help players see the ball. They
                changed who could attend, when teams could schedule games,
                and how a ballpark felt. Night baseball gradually became a
                familiar part of the sport, bringing the game to fans whose
                days belonged to work.
              </p>
            </div>

            <aside className="flex flex-col justify-center border-l-4 border-[#a4282d] bg-[#102c44] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7bb83]">
                A Small Signal, A Big Change
              </p>
              <p className="mt-4 font-serif text-xl leading-relaxed">
                One presidential gesture marked the start of a new way to
                experience America’s game.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#eee7d7]">
                Roosevelt was at the White House. The ballplayers were in
                Cincinnati. A wire connected the two moments.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <div className="border-t-2 border-[#b8aa8e] pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              Historical Connections
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold">
              Follow the Story
            </h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/presidents/franklin-d-roosevelt"
                className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]"
              >
                Franklin D. Roosevelt Profile
              </Link>
              <Link
                href="/first-pitches"
                className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]"
              >
                The Presidential First-Pitch Tradition
              </Link>
              <Link
                href="/1600-collection"
                className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]"
              >
                Return to The 1600 Collection
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-[#b8aa8e] pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              Sources &amp; Further Reading
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#405165]">
              <li>
                <a
                  href="https://www.loc.gov/exhibitions/baseball-americana/about-this-exhibition/at-the-ballpark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#a4282d] underline-offset-4"
                >
                  Library of Congress, “At the Ballpark”
                </a>
                <span> — Roosevelt’s White House signal and the game’s lasting change.</span>
              </li>
              <li>
                <a
                  href="https://baseballhall.org/discover/night-games-gave-access-to-baseball-to-millions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#a4282d] underline-offset-4"
                >
                  National Baseball Hall of Fame, “Night Games Gave Access to Baseball to Millions”
                </a>
                <span> — the first MLB night game, its result, and the wider history of night baseball.</span>
              </li>
              <li>
                <a
                  href="https://www.ge.com/news/reports/bringing-good-things-night-night-baseball-came-cincinnati-1935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#a4282d] underline-offset-4"
                >
                  General Electric, “Bringing Good Things to Night”
                </a>
                <span> — lighting-system details and the telegraph signal.</span>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-6 text-[#59636b]">
              Photograph credits and source records: Harris &amp; Ewing
              Collection, Library of Congress; Library of Congress Prints and
              Photographs Division. The image is linked to its catalog record.
            </p>
          </div>
        </section>
      </main>
    </ArchiveShell>
  );
}
