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
      <section className="bg-[#102c44] px-6 py-16 text-center text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c9b98c]">
          Presidential Pastime
        </p>
        <h1 className="mt-3 font-serif text-[30px] font-bold md:text-[37.5px]">
          The Heritage Collection
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[#eee7d7]">
          A developing research gallery of presidential baseball artifacts,
          photographs, tickets, and signed baseballs.
        </p>
      </section>

      {/* EXHIBIT 01 — PRESIDENTIAL SIGNATURES */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/heritage-collection/presidential-signatures"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="01" />

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
              The Heritage Collection · Special Exhibit
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
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/heritage-collection/the-ball-through-time"
          className="group grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] transition hover:border-[#a4282d] md:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-8 text-center">
            <ExhibitNumber number="02" />

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
              The Heritage Collection · Special Exhibit
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

      {/* EXHIBIT 03 — WALTER JOHNSON */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-10">
        <div className="grid overflow-hidden border-2 border-[#b8aa8e] bg-[#f8f3e8] md:grid-cols-2">
          <div className="flex min-h-64 flex-col items-center justify-center bg-[#102c44] p-5">
            <ExhibitNumber number="03" />

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
              href="/heritage-collection/walter-johnson-presidential-baseballs"
              className="mt-6 inline-block self-start border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]"
            >
              Explore the featured exhibit →
            </Link>
          </div>
        </div>
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
