import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ArchiveShell from "../../components/archive-shell";

export const metadata: Metadata = {
  title: "Babe Ruth & Franklin D. Roosevelt Baseball | Presidential Pastime",
  description: "Explore the 1932 Babe Ruth and Franklin D. Roosevelt dual-signed baseball and the historic World Series game of October 1, 1932.",
  alternates: {
    canonical: "https://presidentialpastime.com/1600-collection/babe-ruth-franklin-roosevelt",
  },
  openGraph: {
    title: "Babe Ruth & Franklin D. Roosevelt | The 1600 Collection",
    description: "Two American icons, one historic signed baseball, and a remarkable date in 1932.",
    url: "https://presidentialpastime.com/1600-collection/babe-ruth-franklin-roosevelt",
    siteName: "Presidential Pastime",
    type: "article",
    images: ["/ruth-roosevelt/social-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ruth-roosevelt/social-preview.png"],
  },
};

const gold = "#b59a62";

const facts = [
  { label: "DATE", value: "October 1, 1932" },
  { label: "BALLPARK", value: "Wrigley Field, Chicago" },
  { label: "ATTENDANCE", value: "49,986" },
  { label: "FINAL SCORE", value: "Yankees 7 · Cubs 5" },
];

const photographs = [
  {
    src: "/ruth-roosevelt/roosevelt-baseball-signed.png",
    title: "Franklin D. Roosevelt Signature",
    description: "The future president's signature across the baseball's sweet spot.",
  },
  {
    src: "/ruth-roosevelt/babe-ruth-roosevelt-baseball.png",
    title: "Babe Ruth Signature",
    description: "The Yankees legend's autograph on an adjacent panel.",
  },
  {
    src: "/ruth-roosevelt/ruth-roosevelt-baseball-date.png",
    title: "October 1, 1932",
    description: "The handwritten date associated with Game Three of the 1932 World Series.",
  },
  {
    src: "/ruth-roosevelt/ruth-roosevelt-2.png",
    title: "Additional Artifact View",
    description: "An additional angle showing the original leather and stitching.",
  },
  {
    src: "/ruth-roosevelt/ruth-roosevelt-3.png",
    title: "Baseball Construction",
    description: "A close view of the baseball's aged leather and red-and-black stitching.",
  },
  {
    src: "/ruth-roosevelt/ruth-roosevelt-4.png",
    title: "Additional Panel",
    description: "Another original photographic view documenting the baseball's condition.",
  },
];


export default function RuthRooseveltExhibit() {
  return (
    <ArchiveShell
      eyebrow="Presidential Pastime | The 1600 Collection | Exhibit No. 006"
      title="Babe Ruth & Franklin D. Roosevelt"
      subtitle="October 1, 1932 — Two American Icons. One Historic Baseball."
    >
      <div className="space-y-12 pb-12">
        <section className="overflow-hidden rounded-xl border border-[#c9b98c] bg-[#102c44] text-white shadow-xl">
          <div className="relative aspect-[1.55/1] w-[70%] mx-auto overflow-hidden">
            <Image
              src="/ruth-roosevelt/babe-ruth-swinging-1932-clean.jpg"
              alt="Original 1932 dual-signed baseball showing Franklin D. Roosevelt's signature, photographed by Heritage Auctions"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-contain"
            />
          </div>
          <div className="border-t border-[#806b46] px-6 py-5 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7a]">
              Chicago, Illinois | October 1, 1932
            </p>
            <p className="mt-3 font-serif text-xl sm:text-2xl">
              Two American icons. One remarkable baseball.
            </p>
            <p className="mt-3 text-xs text-[#d7bb7a]">
              Babe Ruth at Wrigley Field, October 1, 1932 | Heritage Auctions
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-lg border border-[#c9b98c] bg-[#102c44] p-5 text-center text-white">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#d7bb7a]">{fact.label}</p>
              <p className="mt-3 font-serif text-base sm:text-lg">{fact.value}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
            The Story Behind the Baseball
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#102c44] sm:text-4xl">
            An Extraordinary Afternoon at Wrigley Field
          </h2>
          <div className="mx-auto my-6 h-1 w-24" style={{ backgroundColor: gold }} />
          <div className="space-y-5 text-left text-base leading-8 text-[#273747]">
            <p>
              On October 1, 1932, the New York Yankees met the Chicago Cubs in Game Three of the World Series. Among the spectators at Wrigley Field was Franklin D. Roosevelt, then governor of New York and a candidate for the presidency.
            </p>
            <p>
              Babe Ruth hit two home runs that afternoon. His fifth-inning drive, preceded by a gesture toward the field, became immortalized as the &quot;Called Shot.&quot; Historians continue to debate precisely what Ruth intended by the gesture.
            </p>
            <p>
              A surviving Official National League baseball bears the signatures of Ruth and Roosevelt and the handwritten date &quot;10-1-32.&quot; Although that date connects the artifact to a remarkable moment in baseball history, the circumstances of the signing and whether the baseball was used in the game have not been conclusively established.
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border-4 border-[#b59a62] bg-[#102c44] p-6 text-white shadow-lg sm:p-9">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#d7bb7a]">
            World Series Game Three | October 1, 1932
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl">
            The Called Shot Game
          </h2>
          <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
            <div>
              <p className="font-serif text-lg sm:text-2xl">New York</p>
              <p className="text-xs text-[#d7bb7a]">YANKEES</p>
              <p className="mt-3 font-serif text-6xl font-bold">7</p>
            </div>
            <div className="text-xl text-[#d7bb7a]">—</div>
            <div>
              <p className="font-serif text-lg sm:text-2xl">Chicago</p>
              <p className="text-xs text-[#d7bb7a]">CUBS</p>
              <p className="mt-3 font-serif text-6xl font-bold">5</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#806b46] pt-6 text-center">
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">RUTH HOME RUNS</p>
            </div>
            <div>
              <p className="text-3xl font-bold">49,986</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">ATTENDANCE</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3</p>
              <p className="mt-1 text-xs text-[#d7bb7a]">SERIES GAME</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm italic text-[#dfcda8]">
            Wrigley Field, Chicago — The Yankees took a 3–0 lead in the series.
          </p>
        </section>

        <section className="rounded-xl border-2 border-[#b59a62] bg-[#eee5d2] p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a4282d]">
            The Surviving Baseball
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
            Two Historic Signatures, One Extraordinary Artifact
          </h2>
          <p className="mt-5 leading-8 text-[#334454]">
            This Official National League baseball carries the signatures of Babe Ruth and Franklin D. Roosevelt, together with the date October 1, 1932, written in an unidentified hand. Heritage Auctions reported full letters of authenticity from PSA/DNA and Beckett Authentication Services.
          </p>
          <p className="mt-4 leading-8 text-[#334454]">
            The baseball sold in Heritage Auctions' October 2026 Fall Sports Catalog Auction, lot 81351, for $103,700. Presidential Pastime documents the artifact for historical research and does not claim ownership or custody.
          </p>
          <div className="mt-8 rounded-xl border-2 border-[#b59a62] bg-[#102c44] px-6 py-9 text-center text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7bb83]">
              Heritage Auctions · October 24, 2026
            </p>
            <p className="mt-4 font-serif text-5xl font-bold sm:text-6xl">
              $103,700
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-[#d7bb83]">
              Final Sale Price
            </p>
            <p className="mt-4 text-sm text-[#eee7d7]">
              Fall Sports Catalog Auction · Lot 81351
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {photographs.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-lg border border-[#c9b98c] bg-white">
                <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block p-4" aria-label={`View full photograph: ${photo.title}`}>
                  <img src={photo.src} alt={photo.title} loading="lazy" className="mx-auto h-64 w-full object-contain" />
                </a>
                <figcaption className="border-t border-[#e0d6c3] bg-[#f8f3e8] p-4">
                  <h3 className="font-serif text-lg font-bold">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#59636b]">{photo.description}</p>
                  <p className="mt-2 text-xs text-[#59636b]">Photograph: Heritage Auctions</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[#59636b]">
            All six artifact photographs courtesy of Heritage Auctions, reproduced with permission. Photographs have been cropped for presentation; the baseball and inscriptions have not been digitally reconstructed or altered.
          </p>
        </section>

        <section className="border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
            Historical Connections
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">
            Explore More Presidential Baseball History
          </h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/presidents/franklin-d-roosevelt" className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]">
              Franklin D. Roosevelt Profile →
            </Link>
            <Link href="/1600-collection/presidential-signatures" className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]">
              Presidential Signature Collection →
            </Link>
            <Link href="/1600-collection" className="rounded border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]">
              Return to The 1600 Collection →
            </Link>
          </div>
        </section>
      </div>
    </ArchiveShell>
  );
}
