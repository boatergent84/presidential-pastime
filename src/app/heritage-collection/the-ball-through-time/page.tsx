"use client";

import Link from "next/link";
import { useState } from "react";

type Photo = {
  label: string;
  src?: string;
  credit?: string;
};

type Era = {
  period: string;
  title: string;
  label: string;
  description: string;
  president: string;
  source: string;
  url: string;
  photos: Photo[];
};

const eras: Era[] = [
  {
    period: "1840s–1870s",
    title: "The Hand-Stitched Baseball",
    label: "The Lemon-Peel Era",
    description:
      "Featured artifact: an original four-piece, hand-stitched lemon-peel baseball dating to approximately the 1860s or early 1870s. Documented by Robert Edward Auctions in its Fall 2022 sale, this unusual surviving example measures approximately 10¼ inches in circumference and weighs 5.9 ounces. The ball retains evidence of a vintage seam repair. Its construction illustrates the variety of baseball designs before modern manufacturing standards became widespread.",
    president: "Lincoln · Johnson · Grant",
    source: "Robert Edward Auctions · Fall 2022 · Lot 2303",
    url: "https://collectrea.com/archives/2022/Fall/2303/circa-1860searly-1870s-four-piece-lemon-peel-baseball",
    photos: [
      {
        label: "Front View",
        src: "/heritage/baseballs/lemon-peel/front.jpg",
        credit: "Robert Edward Auctions · Lot 2303",
      },
      {
        label: "Reverse View",
        src: "/heritage/baseballs/lemon-peel/reverse.jpg",
        credit: "Robert Edward Auctions · Lot 2303",
      },
      {
        label: "Additional View",
        src: "/heritage/baseballs/lemon-peel/detail.jpg",
        credit: "Robert Edward Auctions · Lot 2303",
      },
    ],
  },
  {
    period: "1870s–1900",
    title: "The 1883 Spalding Official League Baseball",
    label: "The Rise of the Standardized Baseball",
    description:
      "Featured artifact: an original circa-1883 Spalding Official League baseball preserved in the Smithsonian National Museum of American History (catalog no. 1979.1152.01). Made with an off-white leather cover and red stitching, this surviving nineteenth-century baseball bears the marking 'Official League Ball — Adopted by the National League.' It represents the growing standardization of baseball equipment as professional leagues expanded and manufacturers developed more consistent construction methods.",
    president: "Hayes · Garfield · Arthur · Cleveland · Harrison · McKinley",
    source: "Smithsonian National Museum of American History · 1979.1152.01",
    url: "https://americanhistory.si.edu/collections/object/nmah_1062798",
    photos: [
      { label: "Front View", src: "/heritage/baseballs/spalding-1883/front.jpg", credit: "Smithsonian National Museum of American History" },
      { label: "Center Detail (Crop)", src: "/heritage/baseballs/spalding-1883/center-detail.jpg", credit: "Smithsonian National Museum of American History · Cropped from original photograph" },
      { label: "Left Detail (Crop)", src: "/heritage/baseballs/spalding-1883/left-detail.jpg", credit: "Smithsonian National Museum of American History · Cropped from original photograph" },
      { label: "Right Detail (Crop)", src: "/heritage/baseballs/spalding-1883/right-detail.jpg", credit: "Smithsonian National Museum of American History · Cropped from original photograph" },
    ],
  },
  {
    period: "1901–1919",
    title: "The Deadball Era",
    label: "The Presidential First-Pitch Tradition",
    description:
      "Official league baseballs helped define an era of pitching, bunting, and aggressive baserunning. In 1910, William Howard Taft inaugurated the presidential ceremonial first-pitch tradition.",
    president: "Theodore Roosevelt · Taft · Wilson",
    source: "National Baseball Hall of Fame",
    url: "https://baseballhall.org/discover/the-game-stays-the-same-even-as-baseballs-change",
    photos: [
      { label: "Front View" },
      { label: "Reverse View" },
      { label: "League Stamp" },
      { label: "Stitching" },
    ],
  },
  {
    period: "1920s–1930s",
    title: "The Lively Ball",
    label: "The Age of Babe Ruth",
    description:
      "Changes in baseball construction and the way balls were kept in play helped reshape the sport. The home run became a defining feature of the new era.",
    president: "Harding · Coolidge · Hoover · Franklin Roosevelt",
    source: "National Baseball Hall of Fame",
    url: "https://baseballhall.org/discover/the-game-stays-the-same-even-as-baseballs-change",
    photos: [
      { label: "Front View" },
      { label: "Reverse View" },
      { label: "League Stamp" },
      { label: "Stitching" },
    ],
  },
  {
    period: "1940s–1970s",
    title: "The Midcentury Baseball",
    label: "The Golden Age of the Major Leagues",
    description:
      "Official American and National League baseballs carried distinctive league markings and facsimile signatures. Baseball remained closely connected with presidential ceremonies and American public life.",
    president: "Truman · Eisenhower · Kennedy · Johnson · Nixon · Ford · Carter",
    source: "National Baseball Hall of Fame",
    url: "https://baseballhall.org/discover/the-game-stays-the-same-even-as-baseballs-change",
    photos: [
      { label: "Front View" },
      { label: "Reverse View" },
      { label: "League Stamp" },
      { label: "Stitching" },
    ],
  },
  {
    period: "1980s–Present",
    title: "The Modern Major League Baseball",
    label: "A Continuing American Tradition",
    description:
      "Today's official baseball retains the familiar figure-eight leather cover and stitched seams, while manufacturing specifications and internal construction continue to evolve.",
    president: "Reagan · Bush · Clinton · George W. Bush · Obama · Trump · Biden",
    source: "National Baseball Hall of Fame",
    url: "https://baseballhall.org/discover/the-game-stays-the-same-even-as-baseballs-change",
    photos: [
      { label: "Front View" },
      { label: "Reverse View" },
      { label: "Official Markings" },
      { label: "Stitching" },
    ],
  },
];

function MuseumGallery({
  photos,
  title,
}: {
  photos: Photo[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const selected = photos[active];

  const imageAvailable =
    selected.src && !failed.includes(selected.src);

  return (
    <div>
      <div className="flex min-h-[300px] items-center justify-center border border-[#b89a61] bg-[#091c2d] p-6">
        {imageAvailable ? (
          <img
            key={selected.src}
            src={selected.src}
            alt={`${title} — ${selected.label}`}
            className="max-h-[340px] w-full object-contain"
            onError={() => {
              if (selected.src) {
                setFailed((previous) =>
                  previous.includes(selected.src!)
                    ? previous
                    : [...previous, selected.src!]
                );
              }
            }}
          />
        ) : (
          <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#b89a61] p-5 text-center">
            <span className="font-serif text-xl text-[#d7bb83]">
              {selected.label}
            </span>
            <span className="mt-3 text-xs uppercase tracking-wider text-[#c9b98c]">
              Photograph Pending
            </span>
          </div>
        )}
      </div>

      <p className="mt-4 text-center font-serif text-lg text-[#e7dac2]">
        {selected.label}
      </p>

      <p className="mt-1 text-center text-xs text-[#c9b98c]">
        {selected.credit ?? "Period artifact photograph to be added"}
      </p>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {photos.map((photo, index) => (
          <button
            key={`${photo.label}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${photo.label}`}
            aria-pressed={active === index}
            className={`flex min-h-20 flex-col items-center justify-center border p-2 text-center ${
              active === index
                ? "border-[#d7bb83] bg-[#243d52]"
                : "border-[#6e6859] bg-[#102c44] hover:border-[#d7bb83]"
            }`}
          >
            {photo.src && !failed.includes(photo.src) ? (
              <img
                src={photo.src}
                alt=""
                className="h-12 w-full object-contain"
                onError={() => {
                  if (photo.src) {
                    setFailed((previous) =>
                      previous.includes(photo.src!)
                        ? previous
                        : [...previous, photo.src!]
                    );
                  }
                }}
              />
            ) : (
              <span className="text-xl text-[#b89a61]">◇</span>
            )}

            <span className="mt-1 text-[10px] leading-4 text-[#eee7d7]">
              {photo.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BallThroughTimePage() {
  return (
    <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
      <header className="border-b-4 border-[#a4282d] bg-[#102c44] px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-serif text-2xl font-bold">
            PRESIDENTIAL PASTIME
          </Link>
          <Link
            href="/heritage-collection"
            className="text-sm text-[#d7bb83] hover:text-white"
          >
            ← Heritage Collection
          </Link>
        </div>
      </header>

      <section className="border-b-4 border-[#b89a61] bg-[#102c44] px-6 py-20 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7bb83]">
          The Heritage Collection · Special Exhibit
        </p>

        <div className="mx-auto mt-7 flex max-w-xs items-center gap-4 text-[#d7bb83]">
          <div className="h-px flex-1 bg-[#b89a61]" />
          <span>★</span>
          <div className="h-px flex-1 bg-[#b89a61]" />
        </div>

        <h1 className="mt-6 font-serif text-5xl font-bold md:text-7xl">
          The Ball Through Time
        </h1>

        <p className="mt-5 font-serif text-xl text-[#d7bb83] md:text-2xl">
          The Evolution of America&apos;s Baseball
        </p>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#eee7d7]">
          From the earliest hand-stitched baseballs to the modern Major
          Leagues, discover how the ball itself evolved alongside
          the American presidency and the national pastime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
          A Chronological Museum Exhibit
        </p>

        <h2 className="mt-3 text-center font-serif text-4xl font-bold">
          More Than 175 Years of Baseball History
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-[#59636b]">
          Select the thumbnails to explore multiple views of each
          historic baseball.
        </p>

        <div className="mt-12 space-y-10">
          {eras.map((era, index) => (
            <article
              key={era.period}
              className="grid overflow-hidden border border-[#b8aa8e] bg-[#faf6ed] shadow-md md:grid-cols-[1.1fr_1fr]"
            >
              <div className="bg-[#102c44] p-6 md:p-8">
                <p className="mb-5 text-center text-xs uppercase tracking-[0.2em] text-[#d7bb83]">
                  Museum Exhibit · {String(index + 1).padStart(2, "0")}
                </p>

                <MuseumGallery photos={era.photos} title={era.title} />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                  {era.period}
                </p>

                <h3 className="mt-3 font-serif text-3xl font-bold">
                  {era.title}
                </h3>

                <p className="mt-2 font-serif text-lg italic text-[#987944]">
                  {era.label}
                </p>

                <div className="my-6 h-px bg-[#cdbd9f]" />

                <p className="leading-8 text-[#4e5962]">
                  {era.description}
                </p>

                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#a4282d]">
                  Presidential Era
                </p>

                <p className="mt-2 text-sm leading-7 text-[#59636b]">
                  {era.president}
                </p>

                <a
                  href={era.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block self-start border-b border-[#a4282d] pb-1 text-sm font-semibold text-[#a4282d]"
                >
                  Historical Reference: {era.source} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#102c44] px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d7bb83]">
            The Heritage Collection
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold">
            Preserving the Baseball&apos;s History
          </h2>

          <p className="mt-6 leading-8 text-[#eee7d7]">
            This developing exhibit features historical research into
            period-correct baseballs. Photographs of original artifacts,
            reproductions, and reference specimens will be clearly
            identified and credited as they are added.
          </p>

          <Link
            href="/heritage-collection"
            className="mt-8 inline-block border border-[#b89a61] px-7 py-3 font-semibold text-[#d7bb83] hover:bg-[#b89a61] hover:text-[#102c44]"
          >
            Return to the Heritage Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
