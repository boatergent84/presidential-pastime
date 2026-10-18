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
    label: "1883–1889 Spalding Official League Baseball with Original Box",
    description:
      "Featured artifact: an original 1883–1889 Spalding Official League baseball preserved with its original box and documented by Robert Edward Auctions. Its surviving markings identify adoption by both the National League and American Association, along with a February 27, 1883 patent date. This rare artifact illustrates the equipment used during the formative decades of professional baseball.",
    president: "Hayes · Garfield · Arthur · Cleveland · Harrison · McKinley",
    source: "Robert Edward Auctions · 2023 Fall Auction · Lot 2928",
    url: "https://collectrea.com/archives/2023/Fall/2928/1883-1889-spalding-official-national-league-baseball-with-original-box",
    photos: [
      { label: "Original Baseball and Box", src: "/heritage/baseballs/spalding-1883/baseball-with-box.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
    ],
  },
  {
    period: "1901–1919",
    title: "The Deadball Era",
    label: "Circa 1912 Reach Official American League Baseball",
    description:
      "Featured artifact: an original circa-1912 Reach Official American League baseball preserved with its period box and documented by SCP Auctions. The surviving dark-blue factory markings, official league identification, and August 31, 1909 patent date offer a fascinating look at baseball manufacturing during the Deadball Era. During this period, pitchers dominated, while bunting, stolen bases, and strategic play shaped the game. On April 14, 1910, President William Howard Taft established the presidential ceremonial first-pitch tradition at Washington's Opening Day game.",
    president: "Theodore Roosevelt · Taft · Wilson",
    source: "SCP Auctions · Circa 1912 American League Baseball with Box",
    url: "https://catalogs.scpauctions.com/online-auctions/scp-auctions-inc/c-1912-american-league-baseball-with-box-5919718",
    photos: [
      { label: "Original Baseball and Box", src: "/heritage/1912-reach-american-league-baseball.jpg", credit: "SCP Auctions · Original auction photograph" },
    ],
  },
  {
    period: "1920s–1930s",
    title: "The Lively Ball",
    label: "1928 Reach Official American League Baseball",
    description:
      "This original 1928 Reach Official American League baseball dates to the height of Babe Ruth's home-run era. Bearing the league markings of American League president Ernest S. Barnard, it represents the baseball used during one of the game's most transformative decades. As home runs became central to the sport, President Calvin Coolidge continued the presidential tradition of ceremonial first pitches.",
    president: "Harding · Coolidge · Hoover · Franklin Roosevelt",
    source: "Robert Edward Auctions · 2024 Summer Auction · Lot 2465",
    url: "https://collectrea.com/archives/2024/Summer/2465/1928-reach-official-american-league-baseball-barnard-with-original-box",
    photos: [
      { label: "Original Photograph 1", src: "/heritage/baseballs/lively-ball-1928/reach-1928-1.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
      { label: "Original Photograph 2", src: "/heritage/baseballs/lively-ball-1928/reach-1928-2.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
      { label: "Original Photograph 3", src: "/heritage/baseballs/lively-ball-1928/reach-1928-3.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
      { label: "Original Photograph 4", src: "/heritage/baseballs/lively-ball-1928/reach-1928-4.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
      { label: "Original Photograph 5", src: "/heritage/baseballs/lively-ball-1928/reach-1928-5.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
      { label: "Original Photograph 6", src: "/heritage/baseballs/lively-ball-1928/reach-1928-6.jpg", credit: "Robert Edward Auctions · Original auction photograph" },
    ],
  },
  {
    period: "1940s–1970s",
    title: "The Midcentury Game",
    label: "1947–1948 Spalding Official National League Baseball with Original Box",
    description:
      "Featured artifact: an original unused 1947–1948 Spalding Official National League baseball preserved with its original box, as documented by Hunt Auctions. This baseball dates to Harry S. Truman's presidency and the historic 1947 season when Jackie Robinson broke Major League Baseball's modern color barrier. Its original factory markings and packaging offer a tangible connection to the postwar era of America's national pastime.",
    president: "Franklin D. Roosevelt · Truman · Eisenhower · Kennedy · Johnson · Nixon",
    source: "Hunt Auctions · 1947–1948 Spalding Baseball · Lot 752",
    url: "https://www.huntauctions.com/phone/imageviewer.cfm?auction_num=163&lot_num=752",
    photos: [
      { label: "Original Baseball and Box", src: "/heritage/baseballs/spalding-1948/baseball-with-box.jpg", credit: "Hunt Auctions · Original auction photograph" },
    ],
  },
  {
    period: "1980s–Present",
    title: "The Modern Game",
    label: "Rawlings Official Major League Baseball — Robert D. Manfred Jr.",
    description:
      "Featured artifact: an official Rawlings Major League Baseball bearing the facsimile commissioner signature of Robert D. Manfred Jr., who became Commissioner of Baseball in 2015. Displayed alongside its original Rawlings box, this baseball represents the modern game, an era of expanded international participation, advanced statistics, new technology, and changing traditions. Its factory markings, white leather, and red stitching connect today's baseball to generations of earlier official league baseballs.",
    president: "Reagan · George H. W. Bush · Clinton · George W. Bush · Obama · Trump · Biden",
    source: "Rawlings Official Major League Baseball · Robert D. Manfred Jr. · eBay listing 277500077913",
    url: "https://www.ebay.com/itm/277500077913",
    photos: [
      { label: "Official Baseball and Original Box", src: "/heritage/baseballs/manfred-baseball-with-box.jpg", credit: "Original listing photograph · eBay item 277500077913" },
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
