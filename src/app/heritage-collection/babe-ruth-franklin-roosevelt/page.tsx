import Link from "next/link";
import type { Metadata } from "next";

const sourceUrl =
  "https://sports.ha.com/itm/baseball-collectibles/balls/1932-babe-ruth-and-president-franklin-d-roosevelt-dual-signed-baseball-dated-to-called-shot-game-/a/50088-81351.s";

export const metadata: Metadata = {
  title: "Babe Ruth & Franklin D. Roosevelt Baseball | Presidential Pastime",
  description:
    "Explore the 1932 Babe Ruth and Franklin D. Roosevelt dual-signed baseball, dated to the Called Shot game and documented by Heritage Auctions.",
  alternates: {
    canonical:
      "https://presidentialpastime.com/1600-collection/babe-ruth-franklin-roosevelt",
  },
  openGraph: {
    title: "Babe Ruth & Franklin D. Roosevelt | The 1600 Collection",
    description:
      "Two American icons, one historic signed baseball, and a remarkable date in 1932.",
    url: "https://presidentialpastime.com/1600-collection/babe-ruth-franklin-roosevelt",
    siteName: "Presidential Pastime",
    type: "article",
    images: ["/ruth-roosevelt/roosevelt-baseball-signed.png"],
  },
};

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
    <main className="min-h-screen bg-[#eee7d7] text-[#102c44]">
      <section className="border-b-4 border-[#b89a61] bg-[#102c44] px-6 py-10 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7bb83]">
          Presidential Pastime · The 1600 Collection · Exhibit No. 006
        </p>
        <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-4 text-[#d7bb83]">
          <span className="h-px flex-1 bg-[#b89a61]" />
          <span>★</span>
          <span className="h-px flex-1 bg-[#b89a61]" />
        </div>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-3xl font-bold md:text-5xl">
          Babe Ruth &amp; Franklin D. Roosevelt
        </h1>
        <p className="mt-3 font-serif text-xl italic text-[#d7bb83]">
          Two American Icons. One Historic Baseball.
        </p>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#eee7d7]">
          A dual-signed baseball bearing the date of one of the most
          celebrated games in World Series history.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/1600-collection"
          className="text-sm font-bold text-[#a4282d] underline"
        >
          ← Return to The 1600 Collection
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_290px]">
          <article className="border border-[#b8aa8e] bg-[#f8f3e8] p-6 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
              Featured Historical Artifact · 1932
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              A Remarkable Meeting of Baseball and the Presidency
            </h2>

            <figure className="mt-7 border border-[#b8aa8e] bg-white p-4">
              <img
                src="/ruth-roosevelt/roosevelt-baseball-signed.png"
                alt="Original Heritage Auctions photograph of Franklin D. Roosevelt's signature on the dual-signed baseball"
                className="mx-auto max-h-[490px] w-full object-contain"
              />
              <figcaption className="mt-3 text-center text-xs text-[#59636b]">
                Franklin D. Roosevelt signature. Photograph courtesy of Heritage Auctions.
              </figcaption>
            </figure>

            <p className="mt-7 leading-8 text-[#59636b]">
              On October 1, 1932, Babe Ruth and the New York Yankees faced
              the Chicago Cubs in Game Three of the World Series at Wrigley
              Field. Ruth's celebrated home run that afternoon became known
              as the &quot;Called Shot,&quot; although the precise meaning of
              his gesture remains a subject of historical debate.
            </p>
            <p className="mt-4 leading-8 text-[#59636b]">
              Franklin D. Roosevelt, then the Democratic nominee for
              president, was campaigning in Chicago. Heritage Auctions
              reports that Roosevelt attended the game following a campaign
              address at the Hotel Stevens. Roosevelt won the presidential
              election just over five weeks later.
            </p>
            <p className="mt-4 leading-8 text-[#59636b]">
              This Official National League baseball carries the signatures
              of both men, along with the inscription &quot;10-1-32.&quot;
              The date is written in an unidentified hand. Although the
              baseball shows wear that Heritage describes as suggestive of
              game use, its use during the World Series game has not been
              conclusively established. The circumstances in which the
              signatures were obtained are likewise not documented in the
              auction description.
            </p>

            <section className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                The Artifact in Detail
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold">
                Photographic Gallery
              </h2>
              <p className="mt-3 leading-7 text-[#59636b]">
                Six authentic Heritage Auctions photographs show the
                signatures, dated inscription, leather surface, and
                construction of this historic baseball.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {photographs.map((photo) => (
                  <figure
                    key={photo.src}
                    className="overflow-hidden border border-[#b8aa8e] bg-white"
                  >
                    <a
                      href={photo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View full photograph: ${photo.title}`}
                      className="block p-4"
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        className="mx-auto h-64 w-full object-contain transition-transform hover:scale-[1.03]"
                      />
                    </a>
                    <figcaption className="border-t border-[#e0d6c3] bg-[#f8f3e8] p-4">
                      <h3 className="font-serif text-lg font-bold">
                        {photo.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#59636b]">
                        {photo.description}
                      </p>
                      <p className="mt-2 text-xs text-[#59636b]">
                        Photograph: Heritage Auctions
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t-2 border-[#b8aa8e] pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
                Authentication &amp; Provenance
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold">
                Documenting the Baseball
              </h2>
              <p className="mt-4 leading-8 text-[#59636b]">
                Heritage Auctions listed the baseball in its October 2026
                Fall Sports Catalog Auction, lot 81351. The auction
                description identifies full letters of authenticity from
                PSA/DNA and Beckett Authentication Services. The baseball
                sold on October 24, 2026, for $103,700.
              </p>
              <p className="mt-4 leading-8 text-[#59636b]">
                Presidential Pastime presents this artifact as historical
                research. We do not claim ownership or custody of the
                baseball. The date inscription and the potential signs of
                game use should not be treated as proof that this baseball
                was used during Ruth's famous home run.
              </p>
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border-b-2 border-[#a4282d] pb-1 font-bold text-[#a4282d]"
              >
                View the original Heritage Auctions catalog entry ↗
              </a>
            </section>
          </article>

          <aside className="self-start bg-[#102c44] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7bb83]">
              Archive Record
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold">
              Artifact Details
            </h2>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div>
                <dt className="font-bold text-[#d7bb83]">Artifact</dt>
                <dd>Dual-signed baseball</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Signatories</dt>
                <dd>Babe Ruth and Franklin D. Roosevelt</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Inscribed Date</dt>
                <dd>October 1, 1932 (unknown hand)</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Baseball</dt>
                <dd>Official National League</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Authentication</dt>
                <dd>PSA/DNA and Beckett full LOAs</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Auction</dt>
                <dd>Heritage Auctions, Lot 81351</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Sale Date</dt>
                <dd>October 24, 2026</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Realized Price</dt>
                <dd>$103,700</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d7bb83]">Collection Status</dt>
                <dd>Digitally documented; not owned by Presidential Pastime</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-12 border-t-2 border-[#b8aa8e] pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a4282d]">
            Historical Connections
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">
            Explore More Presidential Baseball History
          </h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/presidents/franklin-d-roosevelt"
              className="border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]"
            >
              Franklin D. Roosevelt Profile →
            </Link>
            <Link
              href="/1600-collection/presidential-signatures"
              className="border border-[#b8aa8e] bg-[#f8f3e8] px-5 py-3 font-semibold hover:border-[#a4282d]"
            >
              Presidential Signature Collection →
            </Link>
          </div>
          <p className="mt-7 text-xs leading-6 text-[#59636b]">
            All six artifact photographs courtesy of Heritage Auctions,
            reproduced with permission. Photographs have been cropped for
            presentation; the baseball and its inscriptions have not been
            digitally reconstructed or altered.
          </p>
        </section>
      </div>
    </main>
  );
}
