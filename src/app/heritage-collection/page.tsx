"use client";

import Link from "next/link";

function ExhibitNumber({ number }: { number: string }) {
  return (
    <div className="mb-3 flex w-full items-center justify-center gap-3 text-[#d6b46f]">
      <span className="h-px w-9 bg-[#b89a61]/70 sm:w-14" />
      <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
        ★ &nbsp; EXHIBIT NO. {number} &nbsp; ★
      </span>
      <span className="h-px w-9 bg-[#b89a61]/70 sm:w-14" />
    </div>
  );
}

export default function HeritageCollectionPage() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#eee7d7] text-[#102c44]">
      <section className="border-b-4 border-[#b89a61] bg-[#102c44] px-6 py-9 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7bb83]">
          Presidential Pastime · Historical Collection
        </p>

        <div className="mx-auto mt-3 flex max-w-xs items-center justify-center gap-4 text-[#d7bb83]">
          <span className="h-px flex-1 bg-[#b89a61]" />
          <span>★</span>
          <span className="h-px flex-1 bg-[#b89a61]" />
        </div>

        <h1 className="mt-3 font-serif text-2xl font-bold md:text-4xl">
          The 1600 Collection
        </h1>

        <p className="mt-2 font-serif text-xl text-[#d7bb83] md:text-2xl">
          Where the American Presidency Meets Baseball History
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#eee7d7]">
          A developing research gallery of presidential baseball artifacts,
          photographs, tickets, and signed baseballs.
        </p>
      </section>

      {/* EXHIBIT 01 — PRESIDENTIAL SIGNATURES */}
      <section className="mx-auto max-w-6xl px-6 pt-0 pb-4 mt-0 mb-0">
        <Link
          href="/1600-collection/presidential-signatures"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="002" />

            <div className="my-6 flex h-[208px] w-[208px] items-center justify-center overflow-hidden rounded-full border-4 border-[#b89a61] bg-white shadow-xl">
              <img
                src="/heritage/presidential-signatures/george-h-w-bush.png"
                alt="Baseball signed by President George H. W. Bush"
                className="h-full w-full object-contain"
              />
            </div>

            <p className="font-serif text-lg italic text-[#d7bb83]">
              Presidential Autographed Baseballs
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Special Exhibit
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              The Presidential Signature Collection
            </h2>
            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              A History of America, Written on Baseballs
            </p>
            <p className="mt-5 leading-7 text-[#59636b]">
              Explore the extraordinary tradition of presidential-autographed
              baseballs, from Theodore Roosevelt onward. Discover documented
              signatures, historical provenance, and the stories behind these
              presidential artifacts.
            </p>
            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]">
              Explore the Signature Collection →
            </span>
          </div>
        </Link>
      </section>

      {/* EXHIBIT 02 — THE BALL THROUGH TIME */}
      <section className="mx-auto max-w-6xl px-6 pt-0 pb-4 mt-0 mb-0">
        <Link
          href="/1600-collection/the-ball-through-time"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="003" />

            <div className="my-6 flex w-full max-w-sm items-center justify-center border-4 border-[#b89a61] bg-[#eee7d7] p-3 shadow-xl">
              <img
                src="/heritage/1912-reach-american-league-baseball.jpg"
                alt="Original circa-1912 Reach Official American League baseball and period box from the Deadball Era"
                className="max-h-64 w-full object-contain"
              />
            </div>

            <p className="font-serif text-lg italic text-[#d7bb83]">
              1840s — Present
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Special Exhibit
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              The Ball Through Time
            </h2>
            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              The Evolution of America&apos;s Baseball
            </p>
            <p className="mt-5 leading-7 text-[#59636b]">
              Discover more than 175 years of baseball history, from
              hand-stitched lemon-peel baseballs to the modern Major
              League ball. Explore six historical eras, period
              construction, and interactive artifact galleries.
            </p>
            <p className="mt-4 text-xs text-[#59636b]">
              Historical research exhibit · Original artifact photographs
              are being added as their sources and permissions are verified.
            </p>
            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d] group-hover:border-[#102c44] group-hover:text-[#102c44]">
              Explore The Ball Through Time →
            </span>
          </div>
        </Link>
      </section>

      {/* EXHIBIT 004 — RUTH AND ROOSEVELT */}
      <section className="mx-auto max-w-6xl px-6 pt-0 pb-4 mt-0 mb-0">
        <Link
          href="/1600-collection/babe-ruth-franklin-roosevelt"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="004" />
            <div className="my-6 flex h-[208px] w-[208px] items-center justify-center overflow-hidden rounded-full border-4 border-[#b89a61] bg-white p-[9px] shadow-xl">
              <div className="h-full w-full overflow-hidden rounded-full bg-white">
                <img
                  src="/ruth-roosevelt/roosevelt-baseball-signed.jpeg"
                  alt="Original 1932 baseball signed by Franklin D. Roosevelt"
                  className="h-full w-full scale-[1.04] object-cover"
                />
              </div>
            </div>
            <p className="font-serif text-lg italic text-[#d7bb83]">
              Two American Icons · One Baseball
            </p>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Featured Artifact · 1932
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Babe Ruth &amp; Franklin D. Roosevelt
            </h2>
            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              A Baseball Dated to the Called Shot Game
            </p>
            <p className="mt-5 leading-7 text-[#59636b]">
              Explore a remarkable baseball signed by Babe Ruth and future
              President Franklin D. Roosevelt, inscribed with the date
              October 1, 1932, and documented by Heritage Auctions.
            </p>
            <p className="mt-3 text-xs text-[#59636b]">
              Artifact photographs courtesy of Heritage Auctions. The baseball
              is not owned by Presidential Pastime.
            </p>
            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]">
              Explore the featured exhibit →
            </span>
          </div>
        </Link>
      </section>

      {/* EXHIBIT 005 — WALTER JOHNSON */}
      <section className="mx-auto max-w-6xl px-6 pt-0 pb-4 mt-0 mb-0">
        <div className="grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-2">
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-5">
            <ExhibitNumber number="005" />

            <img
              src="/heritage/walter-johnson-baseballs.jpg"
              alt="1937 archival photograph of Walter Johnson's six presidential-autographed baseballs"
              className="max-h-80 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              Featured Archival Exhibit · 1937
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Walter Johnson&apos;s Six Presidential Baseballs
            </h2>
            <p className="mt-4 leading-7 text-[#59636b]">
              Explore the historic photograph documenting six
              presidential-autographed baseballs associated with Washington
              Senators legend Walter Johnson, with links to the presidents
              and the Library of Congress catalog.
            </p>
            <p className="mt-3 text-xs text-[#59636b]">
              Photograph: Harris &amp; Ewing Collection, Library of Congress.
              The original baseballs are not owned by Presidential Pastime.
            </p>
            <Link
              href="/1600-collection/walter-johnson-presidential-baseballs"
              className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]"
            >
              Explore the featured exhibit →
            </Link>
          </div>
        </div>
      </section>


      {/* EXHIBIT 006 — RICHARD NIXON */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Link
          href="/1600-collection/nixon-dream-team"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="006" />

            <div className="my-6 w-[230px] max-w-full -rotate-3 border-[3px] border-[#b89a61] bg-[#f1e4c7] p-2 shadow-xl transition-transform duration-300 group-hover:rotate-0">
              <div className="border border-[#8d8068] px-3 py-4 text-[#102c44]">

                <p className="text-[9px] font-bold uppercase tracking-[0.16em]">
                  Presidential Baseball
                </p>

                <div className="my-2 flex items-center gap-2 text-[#a4282d]">
                  <div className="h-px flex-1 bg-[#b89a61]" />
                  <span>★</span>
                  <div className="h-px flex-1 bg-[#b89a61]" />
                </div>

                <p className="font-serif text-xl font-bold uppercase">
                  Dream Team
                </p>

                <p className="mt-1 font-serif text-xs italic">
                  Richard M. Nixon
                </p>

                <p className="mt-1 text-[10px] font-bold tracking-widest">
                  1972 · 1992
                </p>

                <div className="mt-4 border-t-2 border-[#102c44] text-left">
                  {[
                    ["01", "Babe Ruth", "OF"],
                    ["02", "Lou Gehrig", "1B"],
                    ["03", "Joe DiMaggio", "OF"],
                    ["04", "Ted Williams", "OF"],
                    ["05", "Willie Mays", "OF"],
                  ].map(([no, name, pos]) => (
                    <div
                      key={no}
                      className="grid grid-cols-[24px_1fr_24px] gap-1 border-b border-[#b7a98b] py-1.5"
                    >
                      <span className="font-serif text-xs font-bold text-[#a4282d]">
                        {no}
                      </span>
                      <span className="font-serif text-xs italic">
                        {name}
                      </span>
                      <span className="text-right text-[10px] font-bold">
                        {pos}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 font-serif text-[10px] italic">
                  Commemorative Roster Preview
                </p>
              </div>
            </div>

            <p className="font-serif text-lg italic text-[#d7bb83]">
              A President's Baseball Dream Team
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Special Exhibit · 1972 &amp; 1992
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold">
              Richard Nixon&apos;s Dream Team
            </h2>

            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              A President&apos;s All-Time Baseball Selections
            </p>

            <p className="mt-5 leading-7 text-[#59636b]">
              Explore President Richard Nixon&apos;s selections
              of baseball&apos;s greatest players. Discover his
              1972 teams, expanded 1992 selections, and
              vintage-style presidential lineup cards.
            </p>

            <p className="mt-3 text-xs text-[#59636b]">
              Historical research exhibit · Reconstructed lineup cards
            </p>

            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d] group-hover:text-[#102c44]">
              Explore the featured exhibit →
            </span>
          </div>
        </Link>
      </section>


      {/* EXHIBIT 007 — BABE RUTH AND GEORGE BUSH */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Link
          href="/1600-collection/babe-ruth-george-bush"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="007" />
            <div className="my-6 w-full max-w-sm border-4 border-[#b89a61] p-3">
              <img
              src="/babe-ruth-george-bush/bush-ruth-1948.jpg"
              alt="Babe Ruth and Yale baseball captain George H. W. Bush in 1948"
              className="max-h-80 w-full object-contain"
            />
            </div>
            <p className="font-serif text-lg italic text-[#d7bb83]">
              Yale Field · June 5, 1948
            </p>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Special Exhibit · 1948
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              The Babe &amp; the Future President
            </h2>
            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              One Meeting. Two American Legends.
            </p>
            <p className="mt-5 leading-7 text-[#59636b]">
              In June 1948, Babe Ruth met Yale baseball captain
              George H. W. Bush and presented the university with
              the manuscript of his autobiography. Explore the
              remarkable encounter captured in an original
              National Archives photograph.
            </p>
            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]">
              Explore the featured exhibit →
            </span>
          </div>
        </Link>
      </section>


      {/* EXHIBIT 008 — BILL CLINTON AND THE BASEBALL STRIKE */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Link
          href="/1600-collection/clinton-baseball-strike"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="008" />
            <div className="my-6 w-full max-w-sm border-4 border-[#b89a61] p-3">
              <img
                src="/clinton-baseball-strike/clinton-musial-1993.jpg"
                alt="President Bill Clinton holding a baseball bat presented by Stan Musial in the Oval Office, May 6, 1993"
                className="max-h-80 w-full object-contain"
              />
            </div>
            <p className="font-serif text-lg italic text-[#d7bb83]">
              The White House · 1994–1995
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              The 1600 Collection · Special Exhibit · 1995
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold">
              The President Who Tried to Save Baseball
            </h2>

            <p className="mt-2 font-serif text-lg italic text-[#987944]">
              Bill Clinton and the Lost World Series
            </p>

            <p className="mt-5 leading-7 text-[#59636b]">
              When the 1994 Major League Baseball strike brought
              America's national pastime to a halt, President
              Bill Clinton intervened. Discover the White House
              negotiations, the proposed federal legislation,
              and the extraordinary presidential effort to
              bring baseball back to the field.
            </p>

            <span className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d] group-hover:text-[#102c44]">
              Explore the featured exhibit →
            </span>
          </div>
        </Link>
      </section>

      {/* HERITAGE RESEARCH GUIDE */}
      <section className="border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9b98c]">
            Inside the Archive
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            How We Document History
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border border-[#c9b98c] p-5">
              <h3 className="font-serif text-xl font-bold">
                Original Sources
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#eee7d7]">
                Whenever possible, exhibits link to original institutional
                catalogs, contemporary photographs, and historical records.
              </p>
            </div>

            <div className="border border-[#c9b98c] p-5">
              <h3 className="font-serif text-xl font-bold">
                Artifact Provenance
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#eee7d7]">
                We distinguish a documented historical object from a
                research topic and never imply ownership of artifacts
                held elsewhere.
              </p>
            </div>

            <div className="border border-[#c9b98c] p-5">
              <h3 className="font-serif text-xl font-bold">
                Photo Credits
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#eee7d7]">
                Images are credited to their source institutions;
                publication and reuse permissions must be checked
                independently.
              </p>
            </div>
          </div>

          <a
            href="https://www.loc.gov/item/2016875530/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-[#c9b98c] pb-1 font-semibold text-[#c9b98c]"
          >
            Explore our first Library of Congress source ↗
          </a>
        </div>
      </section>
    </main>
  );
}
