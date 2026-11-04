import Link from "next/link";
import ArchiveShell from "../../components/archive-shell";

const timeline = [
  {
    date: "AUGUST 12, 1994",
    title: "The Strike Begins",
    text: "Major League Baseball players walk off the field amid a bitter labor dispute with team owners.",
  },
  {
    date: "SEPTEMBER 14, 1994",
    title: "The World Series Is Lost",
    text: "The remainder of the season is canceled. Montreal's remarkable season ends, and Tony Gwynn finishes at .394.",
  },
  {
    date: "JANUARY 26, 1995",
    title: "The President Intervenes",
    text: "Bill Clinton presses owners and players to resolve their dispute and calls for progress by February 6.",
  },
  {
    date: "FEBRUARY 7, 1995",
    title: "A White House Showdown",
    text: "Clinton brings representatives of both sides to the White House. The negotiations end without an agreement.",
  },
  {
    date: "FEBRUARY 1995",
    title: "A Presidential Proposal",
    text: "Clinton proposes federal legislation establishing a binding arbitration panel to settle the baseball dispute.",
  },
  {
    date: "APRIL 1995",
    title: "Baseball Returns",
    text: "Following federal court intervention, the players return and a shortened major league season begins.",
  },
];

export default function ClintonBaseballStrikeExhibit() {
  return (
    <ArchiveShell
      eyebrow="THE HERITAGE COLLECTION · EXHIBIT 008"
      title="The President Who Tried to Save Baseball"
      subtitle="Bill Clinton, the Lost World Series & the Battle for America's National Pastime"
    >
      <main className="bg-[#eee7d7] text-[#172b3d]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            The Heritage Collection · Exhibit 008
          </p>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl">
              When Baseball Went Silent
            </h2>

            <div className="mx-auto my-7 flex items-center justify-center gap-4 text-[#b79b58]">
              <span className="h-px w-20 bg-[#b79b58]" />
              <span>★</span>
              <span className="h-px w-20 bg-[#b79b58]" />
            </div>

            <p className="font-serif text-xl leading-relaxed text-[#405165]">
              In 1994, America lost its World Series.
              In 1995, the President of the United States
              tried to bring baseball back.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["232", "Days of the strike"],
              ["1994", "World Series canceled"],
              ["42nd", "President of the United States"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="border border-[#c9b98c] bg-[#f5efdf] p-7 text-center"
              >
                <p className="font-serif text-4xl font-bold text-[#102c44]">
                  {number}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[#647182]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>



        {/* THE SEASON THAT NEVER FINISHED */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="bg-[#102c44] p-7 text-[#eee7d7] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d5bd88]">
              1994 · Baseball's Lost Summer
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
              The Season That Never Finished
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-[#d5dce2]">
              When the players walked off the field on August 12,
              1994, some of baseball's greatest performances
              were frozen in time. These were the numbers
              left behind.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: ".394",
                  name: "Tony Gwynn",
                  label: "Batting Average",
                  detail: "Just six points shy of the legendary .400 mark.",
                },
                {
                  number: "74–40",
                  name: "Montreal Expos",
                  label: "Win–Loss Record",
                  detail: "The best record in Major League Baseball.",
                },
                {
                  number: "43",
                  name: "Matt Williams",
                  label: "Home Runs",
                  detail: "Chasing Roger Maris's single-season record.",
                },
                {
                  number: "40",
                  name: "Ken Griffey Jr.",
                  label: "Home Runs",
                  detail: "Another historic home run season cut short.",
                },
                {
                  number: "1.56",
                  name: "Greg Maddux",
                  label: "Earned Run Average",
                  detail: "An extraordinary season for the Braves ace.",
                },
                {
                  number: "116",
                  name: "Jeff Bagwell",
                  label: "Runs Batted In",
                  detail: "The National League MVP's remarkable total.",
                },
              ].map((stat) => (
                <div
                  key={stat.name}
                  className="border border-[#9a8257] bg-[#173c59] p-6"
                >
                  <p className="font-serif text-4xl font-bold text-[#e1c58a]">
                    {stat.number}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-bold text-white">
                    {stat.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#d5bd88]">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#d5dce2]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#9a8257] pt-8">
              <h3 className="font-serif text-2xl font-bold text-[#e1c58a]">
                What Might Have Been?
              </h3>
              <p className="mt-4 leading-8 text-[#d5dce2]">
                Tony Gwynn was pursuing baseball's first .400
                season since Ted Williams hit .406 in 1941.
                Matt Williams was threatening Roger Maris's
                single-season home run record of 61.
                And the Montreal Expos, led by a remarkable
                young roster, held baseball's best record.
              </p>
              <p className="mt-4 leading-8 text-[#d5dce2]">
                None of those stories received a proper ending.
                The strike canceled the postseason and the
                World Series, leaving one of baseball's
                greatest collections of unanswered questions.
              </p>
            </div>

            <p className="mt-8 text-xs leading-6 text-[#bfcbd4]">
              Historical sources: Society for American Baseball
              Research (SABR), National Baseball Hall of Fame
              and Museum, and 1994 MLB statistical records.
            </p>
          </div>
        </section>

        {/* HISTORICAL PHOTOGRAPHY */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="mb-8 border-b border-[#c9b98c] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              The Photographic Record
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#102c44]">
              A President and the National Pastime
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                src: "/clinton-baseball-strike/clinton-musial-1993.jpg",
                alt: "President Bill Clinton holding a baseball bat in the Oval Office, May 6, 1993",
                date: "MAY 6, 1993",
                title: "A Bat from Stan Musial",
                caption: "President Clinton poses in the Oval Office with a baseball bat presented by Hall of Famer Stan Musial.",
                credit: "White House Photograph Office / Clinton Presidential Library",
              },
              {
                src: "/clinton-baseball-strike/clinton-first-pitch-1994.jpg",
                alt: "President Bill Clinton throwing the ceremonial first pitch at Jacobs Field, April 4, 1994",
                date: "APRIL 4, 1994",
                title: "Opening Day Before the Strike",
                caption: "Clinton throws the ceremonial first pitch at Jacobs Field in Cleveland, four months before the players' strike.",
                credit: "White House Photograph Office / Clinton Presidential Library",
              },
            ].map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden border border-[#c9b98c] bg-[#f5efdf]"
              >
                <div className="flex h-80 items-center justify-center bg-[#e8e0ce] p-4">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#a4282d]">
                    {photo.date}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-[#102c44]">
                    {photo.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#405165]">
                    {photo.caption}
                  </p>
                  <p className="mt-5 text-xs italic text-[#647182]">
                    {photo.credit} · Public domain
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-[#102c44] px-6 py-16 text-center text-[#eee7d7]">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9b98c]">
              The White House · February 7, 1995
            </p>

            <blockquote className="mt-8 font-serif text-3xl italic leading-relaxed md:text-4xl">
              “The American people are the real losers”
            </blockquote>

            <p className="mt-6 text-sm text-[#c9b98c]">
              President Bill Clinton
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
            The Historical Record
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold">
            The Road to the White House
          </h2>

          <div className="mt-10 border-l-2 border-[#b79b58] pl-8">
            {timeline.map((item) => (
              <article key={item.date} className="mb-10 last:mb-0">
                <p className="text-xs font-bold tracking-[0.2em] text-[#a4282d]">
                  {item.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#102c44]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-8 text-[#405165]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#c9b98c] bg-[#f5efdf] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4282d]">
              Presidential Document · February 1995
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-[#102c44]">
              The Major League Baseball Restoration Act
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-[#405165]">
              President Clinton proposed legislation that would establish
              a three-member arbitration panel with authority to impose
              a binding settlement between Major League Baseball's
              owners and players.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-[#405165]">
              Congress did not enact the proposal. Baseball eventually
              resumed after federal court intervention, leaving Clinton's
              attempted settlement as a remarkable episode in presidential
              and baseball history.
            </p>

            <a
              href="https://www.presidency.ucsb.edu/documents/message-the-congress-transmitting-proposed-legislation-settle-the-major-league-baseball"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#102c44] px-7 py-4 text-sm font-semibold text-white"
            >
              Read the Original Presidential Document
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="font-serif text-3xl font-bold text-[#102c44]">
            Historical Significance
          </h2>

          <p className="mt-6 leading-8 text-[#405165]">
            Few presidents have become so directly involved in the
            business of America's national pastime. Clinton's
            intervention demonstrated both baseball's cultural
            importance and the limits of presidential influence.
          </p>

          <div className="mt-12 border-t border-[#c9b98c] pt-8">
            <Link
              href="/heritage-collection"
              className="text-sm font-semibold text-[#a4282d] underline underline-offset-4"
            >
              ← Return to the Heritage Collection
            </Link>
          </div>
        </section>
      </main>
    </ArchiveShell>
  );
}
