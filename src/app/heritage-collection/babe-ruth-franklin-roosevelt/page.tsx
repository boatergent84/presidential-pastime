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
      <div className="relative isolate space-y-12 pb-12">

        {/* Subtle historic Babe Ruth background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute inset-x-0 top-0 h-[1000px] bg-top bg-no-repeat opacity-[0.10]"
            style={{
              backgroundImage:
                "url('/ruth-roosevelt/babe-ruth-swinging-1932-clean.jpg')",
              backgroundSize: "contain",
            }}
          />
        </div>

      {/* COLLECTOR_VAULT_START */}
      <section className="mb-12 overflow-hidden rounded-2xl border-2 border-[#b89a61] bg-[#102c44] text-white shadow-2xl">

        <div
          className="relative overflow-hidden border-b border-[#b89a61] px-6 py-8 text-center"
          
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7bb83]">
            Presidential Pastime · The Collector&apos;s Vault
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
            The Ruth–Roosevelt Baseball
          </h2>

          <p className="mt-3 font-serif text-lg italic text-[#d7bb83]">
            Two American Icons. One Extraordinary Artifact.
          </p>
        </div>

        <div className="bg-[#eee7d7] px-5 py-10 text-center text-[#102c44] md:px-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#8b713e]">
            An Original Piece of American History
          </p>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#c9b98c] bg-white p-4 shadow-lg">
            <img
              src="/ruth-roosevelt/roosevelt-baseball-signed.png"
              alt="Historic baseball signed by Babe Ruth and Franklin D. Roosevelt"
              className="mx-auto max-h-[420px] w-full object-contain"
            />
          </div>

          <p className="mt-6 font-serif text-xl">
            A Remarkable Intersection of Baseball and the Presidency
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3">
          <div className="rounded-lg border border-[#b89a61] p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-[#d7bb83]">
              Inscribed Date
            </p>
            <p className="mt-3 font-serif text-3xl font-bold">
              1932
            </p>
          </div>

          <div className="rounded-lg border border-[#b89a61] p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-[#d7bb83]">
              Historic Signatures
            </p>
            <p className="mt-3 font-serif text-3xl font-bold">
              Ruth &amp; Roosevelt
            </p>
          </div>

          <div className="rounded-lg border border-[#b89a61] bg-[#173c5b] p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-[#d7bb83]">
              Auction Result
            </p>
            <p className="mt-3 font-serif text-3xl font-bold">
              $103,700
            </p>
          </div>
        </div>

        <p className="px-6 pb-8 text-center text-sm text-[#d7bb83]">
          The historical narrative, photographs, authentication, and provenance
          continue below.
        </p>
      </section>
      {/* COLLECTOR_VAULT_END */}

        

        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {/* Game-stat boxes removed */}
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

        <section className="overflow-hidden rounded-xl border-4 border-[#b59a62] bg-[#102c44] p-6 text-white shadow-lg sm:p-9"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,44,68,0.82), rgba(16,44,68,0.82)), url('/ruth-roosevelt/babe-ruth-swinging-1932-clean.jpg')",
            backgroundPosition: "center 42%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
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
